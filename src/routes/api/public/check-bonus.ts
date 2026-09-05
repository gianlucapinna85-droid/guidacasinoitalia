import { createFileRoute } from "@tanstack/react-router";
import { timingSafeEqual } from "crypto";
import { operators } from "@/lib/operators";
import { operatorBonuses } from "@/data/bonuses";

/**
 * Controllo automatico dei bonus: visita le pagine promozionali ufficiali
 * (o l'URL del link affiliato, che rimanda al sito dell'operatore), estrae
 * gli importi dichiarati e aggiorna la tabella pubblic.bonus_snapshots.
 *
 * Chiamare con header `x-cron-secret` uguale a CRON_SECRET (es. da cron-job.org,
 * pg_cron o manualmente). Endpoint pubblico: il segreto è l'unica autorizzazione.
 */

type ParsedBonus = {
  noDeposit: string | null;
  deposit: string | null;
  snippet: string | null;
};

const AMOUNT_RE = /(\d[\d.,]*\s*€|\d+\s*(?:giri|free\s*spins?)(?:\s+gratis)?)/gi;

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&euro;/gi, "€")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findAmountNear(text: string, keyword: RegExp): string | null {
  const match = keyword.exec(text);
  if (!match) return null;
  const window = text.slice(Math.max(0, match.index - 80), match.index + 140);
  AMOUNT_RE.lastIndex = 0;
  const amounts = [...window.matchAll(AMOUNT_RE)].map((m) => m[1].replace(/\s+/g, " ").trim());
  return amounts[0] ?? null;
}

function parseBonuses(text: string): ParsedBonus {
  // "bonus senza deposito", "senza deposito", "gratis senza deposito"...
  const noDeposit =
    findAmountNear(text, /senza\s+deposito/i) ??
    findAmountNear(text, /bonus\s+gratis/i);
  // "fino a 1.000 €", "bonus di benvenuto 100% fino a..."
  let deposit: string | null = null;
  const finoA = /fino\s+a\s+(\d[\d.,]*\s*€)/i.exec(text);
  if (finoA) deposit = `Fino a ${finoA[1].replace(/\s+/g, " ").trim()}`;
  if (!deposit) deposit = findAmountNear(text, /bonus\s+(di\s+)?benvenuto/i);

  let snippet: string | null = null;
  const anchor = /senza\s+deposito|bonus\s+(di\s+)?benvenuto|fino\s+a/i.exec(text);
  if (anchor) {
    snippet = text.slice(Math.max(0, anchor.index - 60), anchor.index + 200);
  }
  return { noDeposit, deposit, snippet };
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(9000),
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; GuidaCasino-BonusCheck/1.0; +https://www.guidacasino-italia.it)",
      accept: "text/html,application/xhtml+xml",
      "accept-language": "it-IT,it;q=0.9",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return htmlToText(await res.text());
}

export const Route = createFileRoute("/api/public/check-bonus")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env["CRON_SECRET"];
        const provided = request.headers.get("x-cron-secret") ?? "";
        if (
          !secret ||
          provided.length !== secret.length ||
          !timingSafeEqual(Buffer.from(provided), Buffer.from(secret))
        ) {
          return new Response("Non autorizzato", { status: 401 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        // Gli importi verificati manualmente (status "manual") non vengono
        // sovrascritti dal rilevamento automatico, che può leggere pagine
        // non aggiornate o contenuti promozionali di terze parti.
        const { data: existing } = await supabaseAdmin
          .from("bonus_snapshots")
          .select("slug, status");
        const manualSlugs = new Set(
          (existing ?? []).filter((r) => r.status === "manual").map((r) => r.slug),
        );

        const results: Array<Record<string, unknown>> = [];
        const checks = operatorBonuses.map(async (bonus) => {
          if (manualSlugs.has(bonus.slug)) {
            results.push({ slug: bonus.slug, skipped: "manual" });
            return;
          }
          const operator = operators.find((o) => o.slug === bonus.slug);
          // prima la pagina promozionale ufficiale; in alternativa il link affiliato
          const candidates = [bonus.source, operator?.officialUrl].filter(
            (u): u is string => Boolean(u),
          );
          for (const url of candidates) {
            try {
              const text = await fetchText(url);
              const parsed = parseBonuses(text);
              if (!parsed.noDeposit && !parsed.deposit) continue;
              await supabaseAdmin.from("bonus_snapshots").upsert(
                {
                  slug: bonus.slug,
                  no_deposit: parsed.noDeposit,
                  deposit: parsed.deposit,
                  snippet: parsed.snippet,
                  source_url: url,
                  status: "auto",
                  verified_at: new Date().toISOString(),
                },
                { onConflict: "slug" },
              );
              results.push({ slug: bonus.slug, ok: true, ...parsed, snippet: undefined });
              return;
            } catch {
              // prova il prossimo URL candidato
            }
          }
          results.push({ slug: bonus.slug, ok: false });
        });

        await Promise.allSettled(checks);
        return Response.json({
          checked: operatorBonuses.length,
          updated: results.filter((r) => r.ok).length,
          results,
          at: new Date().toISOString(),
        });
      },
    },
  },
});
