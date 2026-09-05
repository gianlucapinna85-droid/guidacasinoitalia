import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import type { Operator } from "@/lib/operators";
import { getCasinoMeta, type CasinoMeta } from "@/data/casinos";
import { OperatorTrustDots } from "@/components/site-layout";

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
    <article className="gc-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-24px_var(--gc-glow)]">
      <div className="flex flex-1 flex-col p-3 md:p-4">
        {/* Intestazione: rank + logo grande + nome/voto */}
        <div className="flex items-center gap-3">
          <Link
            to="/operatori/$slug"
            params={{ slug: op.slug }}
            aria-label={`Scheda ${op.name}`}
            className="gc-logo-frame relative flex h-20 w-[42%] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-gold/60 bg-card shadow-sm transition-colors duration-300 hover:border-gold sm:h-24"
          >
            {rank ? (
              <span className="absolute left-1 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gold/60 bg-gold/15 font-serif text-[11px] font-bold text-gold">
                {rank}
              </span>
            ) : null}
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
            <h3 className="font-serif text-lg leading-tight md:text-xl">{op.name}</h3>
            {meta ? (
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                <StarRating rating={meta.rating} />
                <span className="text-[13px] font-bold text-gold">{meta.rating.toFixed(1)}/10</span>
              </div>
            ) : null}
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {op.concessionN}
            </p>
          </div>
        </div>

        {/* Pallini ADM/bandiera */}
        <div className="mt-2.5">
          <OperatorTrustDots name={op.name} />
        </div>

        {/* Bonus: testo completo, nessun troncamento */}
        <div className="mt-3 grid gap-2">
          <div className="rounded-xl border-2 border-gold/50 bg-gold/10 px-3 py-2">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gold/80">
              Bonus senza deposito
            </span>
            <span className="mt-0.5 block text-[15px] font-bold leading-snug text-gold md:text-base">
              {op.noDepositBonus?.amount ?? "Non dichiarato"}
            </span>
          </div>
          <div className="rounded-xl border border-border bg-secondary/60 px-3 py-2">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Bonus con deposito
            </span>
            <span className="mt-0.5 block text-[15px] font-bold leading-snug text-foreground md:text-base">
              {op.depositBonus?.amount ?? "Vedi sito ufficiale"}
            </span>
          </div>
        </div>

        <dl className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
          <div className="rounded-lg border border-border px-2.5 py-1.5">
            <dt className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">RTP medio</dt>
            <dd className="font-bold text-foreground">{op.rtpAverage}</dd>
          </div>
          <div className="rounded-lg border border-border px-2.5 py-1.5">
            <dt className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">Giochi</dt>
            <dd className="font-bold text-foreground">{op.games}+</dd>
          </div>
        </dl>

        {/* CTA grandi */}
        <div className="mt-3 flex flex-col gap-2">
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="gc-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-4 text-[15px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg shadow-gold/30 transition-all duration-200 hover:brightness-110 active:scale-[0.98] md:text-base"
          >
            Vai al sito ufficiale <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/operatori/$slug"
            params={{ slug: op.slug }}
            className="gc-btn-secondary min-h-10 w-full px-3 text-[13px]"
          >
            Leggi la recensione
          </Link>
        </div>

        {/* Dettagli extra */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-2 inline-flex items-center gap-1 self-start text-[12px] font-semibold text-muted-foreground transition-colors hover:text-gold"
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

      <p className="border-t border-border px-3 py-1.5 text-[10px] leading-tight text-muted-foreground md:px-4">
        18+ · Gioco responsabile · Operatore con concessione ADM
      </p>
    </article>
  );
}

