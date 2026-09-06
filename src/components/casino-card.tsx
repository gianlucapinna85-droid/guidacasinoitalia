import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import type { Operator } from "@/lib/operators";
import { getCasinoMeta, type CasinoMeta } from "@/data/casinos";
import { Button } from "@/components/ui/button";
import { displayBonuses, useBonusSnapshots } from "@/lib/use-bonus-snapshots";

/**
 * Scheda operatore a banner orizzontale: logo a sinistra (con stelline,
 * licenza ADM e badge SPID sotto), bonus in evidenza al centro e CTA oro
 * a destra. Griglia con colonne a larghezza controllata: niente overflow
 * né sovrapposizioni. Dettagli extra dietro "Dettagli".
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

export function CasinoRankCard({
  op,
  meta,
}: CasinoCardData & { rank?: number }) {
  const [open, setOpen] = useState(false);
  const snapshots = useBonusSnapshots();
  const bonus = displayBonuses(op, snapshots);

  return (
    <article className="gc-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-offer-border bg-offer shadow-sm transition-all hover:border-gold/70 hover:shadow-md">
      {/* Riga principale: logo | bonus | CTA */}
      <div className="grid grid-cols-[6.5rem_minmax(0,1fr)_auto] items-stretch gap-0 sm:grid-cols-[10rem_minmax(0,1fr)_auto]">
        {/* Colonna logo: stelline + licenza sotto il logo */}
        <div className={`flex min-w-0 flex-col ${op.slug === "stake" ? "bg-logo-contrast" : "bg-offer-deep"}`}>
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            aria-label={`Vai al sito ufficiale di ${op.name}`}
            className="gc-logo-frame flex min-h-[4rem] flex-1 items-center justify-center px-2 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
          >
            {op.logo ? (
              <img
                src={op.logo}
                alt={`Logo ${op.name}`}
                width={600}
                height={200}
                loading="lazy"
                decoding="async"
                className="gc-logo-img max-h-16 w-auto max-w-[96%]"
              />
            ) : (
              <span className="truncate font-serif text-base text-foreground">{op.name}</span>
            )}
          </a>
          <div className="flex flex-col items-center gap-0.5 border-t border-offer-border bg-offer px-1 py-1">
            {meta ? (
              <span className="flex items-center gap-1" title={`Valutazione redazionale ${meta.rating.toFixed(1)}/10`}>
                <StarRating rating={meta.rating} size="sm" />
                <span className="text-[10px] font-bold text-gold">{meta.rating.toFixed(1)}</span>
              </span>
            ) : null}
            <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
              {op.concessionN}
            </span>
          </div>
        </div>

        {/* Colonna centrale: bonus in evidenza con etichette chiare */}
        <div className="flex min-w-0 flex-col justify-center gap-0.5 px-1.5 py-2">
          {bonus.noDeposit ? (
            <div className="flex flex-col gap-0 leading-tight">
              <p className="flex items-center gap-0.5 whitespace-nowrap text-[8px] font-bold uppercase tracking-wide text-muted-foreground sm:text-[9px]">
                Senza deposito
                {meta?.spid ? (
                  <span className="rounded-sm border border-gold/50 bg-gold/10 px-0.5 text-[7px] font-extrabold text-gold">
                    SPID
                  </span>
                ) : null}
              </p>
              <p className="gc-bonus whitespace-nowrap font-serif text-[11px] font-bold leading-tight text-gold sm:text-lg">
                {bonus.noDeposit}
              </p>
            </div>
          ) : null}
          {bonus.deposit ? (
            <div className="flex flex-col gap-0 leading-tight">
              <p className="whitespace-nowrap text-[8px] font-bold uppercase tracking-wide text-muted-foreground sm:text-[9px]">
                Con deposito
              </p>
              <p className="gc-bonus whitespace-nowrap font-serif text-[11px] font-bold leading-tight text-gold sm:text-lg">
                {bonus.deposit}
              </p>
            </div>
          ) : null}
          {!bonus.noDeposit && !bonus.deposit ? (
            <p className="whitespace-nowrap text-[10px] text-muted-foreground">
              Nessun bonus disponibile
            </p>
          ) : null}
          <p className="whitespace-nowrap text-[9px] text-muted-foreground">
            RTP {op.rtpAverage} · {op.games}+ giochi
          </p>
        </div>

        {/* Colonna CTA: pulsante oro */}
        <div className="flex shrink-0 items-center border-l border-offer-border bg-gold/[0.12] p-1.5 sm:p-2.5">
          <Button asChild className="gc-cta h-12 whitespace-nowrap px-1.5 text-[9.5px] font-extrabold uppercase leading-tight sm:h-13 sm:px-4 sm:text-sm">
            <a
              href={op.officialUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              aria-label={`Visita il sito ufficiale di ${op.name} (verificato dalla redazione)`}
              className="inline-flex items-center gap-1"
            >
              Visita il sito <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      {/* Riga link utili */}
      <div className="flex items-center justify-between gap-2 border-t border-offer-border px-3 py-1.5">
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
          className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-gold"
        >
          {open ? "Mostra meno" : "Dettagli"}
          <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {open ? (
        <div className="gc-pop border-t border-border px-3 py-2">
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

      <p className="mt-auto border-t border-offer-border bg-offer-deep px-3 py-1.5 text-[9px] leading-tight text-muted-foreground">
        Gioca responsabilmente · 18+ · Offerte soggette a termini e condizioni dell'operatore
      </p>
    </article>
  );
}
