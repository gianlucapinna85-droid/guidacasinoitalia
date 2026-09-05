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
    <article className="gc-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-gold">
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-center gap-3">
          <Link
            to="/operatori/$slug"
            params={{ slug: op.slug }}
            aria-label={`Scheda ${op.name}`}
            className="gc-logo-frame flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-gold sm:h-16 sm:w-28"
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
              <span className="font-serif text-base text-foreground">{op.name}</span>
            )}
          </Link>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-base leading-tight md:text-lg">{op.name}</h3>
              {rank ? (
                <span className="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-primary px-1 text-xs font-extrabold text-primary-foreground" aria-label={`Posizione ${rank}`}>
                  {rank}
                </span>
              ) : null}
            </div>
            {meta ? (
              <div className="mt-1 flex items-center gap-1.5">
                <StarRating rating={meta.rating} size="sm" />
                <span className="text-xs font-bold text-gold">{meta.rating.toFixed(1)}/10</span>
              </div>
            ) : null}
            <p className="mt-1 truncate text-[10px] font-semibold uppercase text-muted-foreground">
              {op.concessionN}
            </p>
          </div>
        </div>

        <div className="mt-3 divide-y divide-border rounded-md border border-border bg-secondary/60 px-3">
          <div className="grid grid-cols-[6.25rem_1fr] items-start gap-2 py-2">
            <span className="text-[10px] font-bold uppercase leading-4 text-muted-foreground">Senza deposito</span>
            <strong className="text-right text-[13px] leading-4 text-gold">{op.noDepositBonus?.amount ?? "Non disponibile"}</strong>
          </div>
          <div className="grid grid-cols-[6.25rem_1fr] items-start gap-2 py-2">
            <span className="text-[10px] font-bold uppercase leading-4 text-muted-foreground">Con deposito</span>
            <strong className="text-right text-[13px] leading-4 text-foreground">{op.depositBonus?.amount ?? "Non disponibile"}</strong>
          </div>
        </div>

        <dl className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
          <div className="flex gap-1"><dt>RTP</dt><dd className="font-bold text-foreground">{op.rtpAverage}</dd></div>
          <span aria-hidden="true">•</span>
          <div className="flex gap-1"><dt>Giochi</dt><dd className="font-bold text-foreground">{op.games}+</dd></div>
          <span aria-hidden="true">•</span>
          <span className="font-semibold text-foreground">18+ · ADM</span>
        </dl>

        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
          <Button asChild size="lg" className="gc-cta min-h-11 px-3 text-sm font-extrabold uppercase">
            <a href={op.officialUrl} target="_blank" rel="noopener noreferrer sponsored nofollow">
              Sito ufficiale <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-h-11 px-3 text-xs">
            <Link to="/operatori/$slug" params={{ slug: op.slug }}>Recensione</Link>
          </Button>
        </div>

        {/* Dettagli extra */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-2 inline-flex min-h-8 items-center gap-1 self-start text-[11px] font-semibold text-muted-foreground transition-colors hover:text-gold"
        >
          {open ? "Mostra meno" : "Continua a leggere"}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open ? (
          <div className="gc-pop mt-2 border-t border-border pt-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gold">
                <BadgeCheck className="h-3 w-3" /> {op.concessionN}
              </span>
              {meta?.fastWithdrawal ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  Prelievo rapido dichiarato
                </span>
              ) : null}
              {meta?.paypal ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  PayPal
                </span>
              ) : null}
            </div>
            <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">{op.paymentMethods.join(" · ")}</p>
          </div>
        ) : null}
      </div>

      <p className="border-t border-border px-3 py-1.5 text-[10px] leading-tight text-muted-foreground">
        Gioca responsabilmente · Offerte soggette a termini e verifica
      </p>
    </article>
  );
}

