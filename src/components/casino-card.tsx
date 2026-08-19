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
    <article className="gc-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_var(--gc-glow)]">
      <div className="flex flex-1 flex-col p-1.5 md:p-2.5">
        {/* Logo = bottone affiliato */}
        <div className="flex items-center gap-1">
          {rank ? (
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-serif text-[8px] font-bold text-gold md:h-5 md:w-5 md:text-[10px]">
              {rank}
            </span>
          ) : null}
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            aria-label={`Vai al sito ufficiale di ${op.name}`}
            className="gc-logo-frame flex h-14 flex-1 items-center justify-center overflow-hidden rounded-lg border-2 border-gold/60 bg-card shadow-sm transition-colors duration-300 hover:border-gold md:h-16"
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
              <span className="font-serif text-[13px] text-foreground md:text-base">{op.name}</span>
            )}
          </a>
        </div>

        {/* Riga nome + stelle */}
        <div className="mt-1 flex items-center justify-between gap-1">
          <h3 className="truncate font-serif text-[12px] leading-tight md:text-sm">{op.name}</h3>
          {meta ? <StarRating rating={meta.rating} size="sm" /> : null}
        </div>

        {/* Pallini ADM/bandiera */}
        <div className="mt-0.5">
          <OperatorTrustDots name={op.name} />
        </div>

        {/* Info principali: bonus + RTP */}
        <div className="mt-1.5 grid grid-cols-1 gap-1">
          <div className="rounded-md border border-gold/40 bg-gold/10 px-1.5 py-0.5">
            <span className="block text-[7px] font-bold uppercase tracking-wider text-gold/80 md:text-[8px]">
              Bonus senza deposito
            </span>
            <span className="block truncate text-[11px] font-bold text-gold md:text-xs">
              {op.noDepositBonus?.amount ?? "—"}
            </span>
          </div>
          <div className="rounded-md border border-border px-1.5 py-0.5">
            <span className="block text-[7px] font-bold uppercase tracking-wider text-muted-foreground md:text-[8px]">
              RTP · Giochi
            </span>
            <span className="block truncate text-[11px] font-bold text-foreground md:text-xs">
              {op.rtpAverage} · {op.games}+
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-1.5 flex flex-col gap-1">
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="gc-cta inline-flex items-center justify-center gap-1 rounded-md bg-gold px-2 py-1.5 text-[11px] font-bold text-primary-foreground shadow-md shadow-gold/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98] md:text-xs"
          >
            Visita <ArrowRight className="h-3 w-3" />
          </a>
          <Link
            to="/operatori/$slug"
            params={{ slug: op.slug }}
            className="gc-btn-secondary w-full px-1.5 py-1 text-[10px] md:text-[11px]"
          >
            Recensione
          </Link>
        </div>

        {/* Dettagli extra compattati */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-1 inline-flex items-center gap-0.5 text-[9px] font-semibold text-muted-foreground transition-colors hover:text-gold md:text-[10px]"
        >
          {open ? "Meno" : "Continua"}
          <ChevronDown className={`h-2.5 w-2.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open ? (
          <div className="gc-pop mt-1 border-t border-border pt-1">
            <div className="flex flex-wrap items-center gap-1">
              <span className="inline-flex items-center gap-0.5 rounded-full border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-gold md:text-[9px]">
                <BadgeCheck className="h-2 w-2" /> {op.concessionN}
              </span>
              {meta?.fastWithdrawal ? (
                <span className="rounded-full border border-border px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground md:text-[9px]">
                  Prelievo rapido
                </span>
              ) : null}
              {meta?.paypal ? (
                <span className="rounded-full border border-border px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground md:text-[9px]">
                  PayPal
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-[8px] text-muted-foreground md:text-[10px]">{op.paymentMethods.join(" · ")}</p>
          </div>
        ) : null}
      </div>

      <p className="border-t border-border px-1.5 py-0.5 text-[7px] leading-tight text-muted-foreground md:px-2.5 md:text-[9px]">
        18+ · Gioco responsabile · ADM
      </p>
    </article>
  );
}
