import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import type { Operator } from "@/lib/operators";
import { getCasinoMeta, type CasinoMeta } from "@/data/casinos";
import { Button } from "@/components/ui/button";

/**
 * Card operatore compatta (~metà altezza): logo/CTA in alto, info principali
 * (bonus, RTP, stelle, pallini ADM/bandiera) e dettagli extra dietro
 * "Continua a leggere". Tutti gli elementi sono contenuti, niente overflow.
 * IMPORTANTE: l'unico href commerciale è op.officialUrl (link affiliato).
 */

export type CasinoCardData = { op: Operator; meta?: CasinoMeta };

export function buildCardData(op: Operator): CasinoCardData {
  return { op, meta: getCasinoMeta(op.slug) };
}

/** Rating 0-10 convertito in 5 stelle. */
export function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const stars = Math.round((rating / 10) * 5 * 2) / 2;
  const px = size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3";
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`Voto ${rating.toFixed(1)} su 10`}
      title={`Voto ${rating.toFixed(1)}/10`}
    >
      <span className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => {
          const fill = Math.max(0, Math.min(1, stars - (i - 1)));
          return (
            <span key={i} className="relative inline-flex">
              <Star className={`${px} text-gold/30`} strokeWidth={1.5} />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className={`${px} fill-gold text-gold`} strokeWidth={1.5} />
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}

function Star({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

export function CasinoRankCard({
  op,
  meta,
  rank,
}: CasinoCardData & { rank?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="gc-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-md">
      {/* filetto superiore dorato: dettaglio editoriale, non decorazione invadente */}
      <span aria-hidden="true" className="block h-[3px] w-full bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

      <div className="flex flex-1 flex-col gap-2.5 p-3">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <Link
            to="/operatori/$slug"
            params={{ slug: op.slug }}
            aria-label={`Scheda ${op.name}`}
            className="gc-logo-frame relative flex h-12 w-[5.5rem] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-gold"
          >
            {op.logo ? (
              <img
                src={op.logo}
                alt={`Logo ${op.name}`}
                width={600}
                height={200}
                loading="lazy"
                decoding="async"
                className="gc-logo-img"
              />
            ) : (
              <span className="truncate px-1 font-serif text-xs text-foreground">{op.name}</span>
            )}
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-serif text-base leading-tight tracking-tight">{op.name}</h3>
              {rank ? (
                <span
                  className="shrink-0 rounded-md border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold"
                  aria-label={`Posizione ${rank}`}
                >
                  #{rank}
                </span>
              ) : null}
            </div>
            <div className="mt-1 flex min-w-0 items-center gap-1.5">
              {meta ? (
                <>
                  <StarRating rating={meta.rating} size="sm" />
                  <span className="text-[11px] font-bold text-gold">{meta.rating.toFixed(1)}</span>
                  <span aria-hidden="true" className="text-[10px] text-muted-foreground">·</span>
                </>
              ) : null}
              <span className="inline-flex min-w-0 items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                <BadgeCheck className="h-3 w-3 shrink-0 text-gold" />
                <span className="truncate">{op.concessionN}</span>
              </span>
            </div>
          </div>
        </div>

        <dl className="overflow-hidden rounded-lg border border-border">
          <div className="flex items-start justify-between gap-2 border-b border-border bg-gold/[0.07] px-2.5 py-1.5">
            <dt className="mt-px shrink-0 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Senza deposito
            </dt>
            <dd className="min-w-0 text-right font-serif text-[13px] font-bold leading-snug text-gold">
              {op.noDepositBonus?.amount ?? "Vedi sito ufficiale"}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-2 bg-secondary/40 px-2.5 py-1.5">
            <dt className="mt-px shrink-0 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Con deposito
            </dt>
            <dd className="min-w-0 text-right text-[12px] font-semibold leading-snug text-foreground">
              {op.depositBonus?.amount ?? "Vedi sito ufficiale"}
            </dd>
          </div>
        </dl>

        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted-foreground">
          <span>RTP <strong className="text-foreground">{op.rtpAverage}</strong></span>
          <span aria-hidden="true">·</span>
          <span>{op.games}+ giochi</span>
          <span aria-hidden="true">·</span>
          <span className="font-semibold text-foreground">18+ ADM</span>
        </p>

        <div className="mt-auto space-y-1.5">
          <Button asChild className="gc-cta h-10 w-full text-[12px] font-extrabold uppercase tracking-wide">
            <a href={op.officialUrl} target="_blank" rel="noopener noreferrer sponsored nofollow">
              Vai al sito ufficiale <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <div className="flex items-center justify-between gap-2">
            <Link
              to="/operatori/$slug"
              params={{ slug: op.slug }}
              className="text-[11px] font-semibold text-foreground underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              Leggi la recensione
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-gold"
            >
              {open ? "Mostra meno" : "Dettagli"}
              <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {open ? (
          <div className="gc-pop border-t border-border pt-2">
            <div className="flex flex-wrap items-center gap-1">
              {meta?.fastWithdrawal ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  Prelievo rapido dichiarato
                </span>
              ) : null}
              {meta?.paypal ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  PayPal
                </span>
              ) : null}
            </div>
            {op.noDepositBonus?.description ? (
              <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">{op.noDepositBonus.description}</p>
            ) : null}
            <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">{op.paymentMethods.join(" · ")}</p>
          </div>
        ) : null}
      </div>

      <p className="border-t border-border bg-secondary/30 px-3 py-1.5 text-[9px] leading-tight text-muted-foreground">
        Gioca responsabilmente · 18+ · Offerte soggette a termini e condizioni dell'operatore
      </p>
    </article>
  );
}



