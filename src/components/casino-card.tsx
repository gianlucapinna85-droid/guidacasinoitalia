import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronDown, CreditCard, Star, Wallet, Gamepad2 } from "lucide-react";
import type { Operator } from "@/lib/operators";
import { getCasinoMeta, type CasinoMeta } from "@/data/casinos";
import { OperatorTrustDots } from "@/components/site-layout";

/**
 * Card operatore compatta: logo/CTA in alto, info principali sotto
 * (bonus, RTP, stelle, pallini ADM/bandiera) e dettagli extra dietro
 * "Continua a leggere" per non occupare spazio.
 * IMPORTANTE: l'unico href commerciale è op.officialUrl (link affiliato).
 */

export type CasinoCardData = { op: Operator; meta?: CasinoMeta };

export function buildCardData(op: Operator): CasinoCardData {
  return { op, meta: getCasinoMeta(op.slug) };
}

/** Rating 0-10 convertito in 5 stelle. */
export function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const stars = Math.round((rating / 10) * 5 * 2) / 2;
  const px = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-label={`Voto ${rating.toFixed(1)} su 10`}
      title={`Voto ${rating.toFixed(1)}/10`}
    >
      <span className="flex items-center gap-[1px]">
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
      <span className="text-[11px] font-bold text-gold">{rating.toFixed(1)}</span>
    </span>
  );
}

export function CasinoRankCard({
  op,
  meta,
  rank,
}: CasinoCardData & { rank?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="gc-card group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_var(--gc-glow)]">
      <div className="p-2.5 md:p-4">
        {/* Logo = bottone affiliato */}
        <div className="flex items-center gap-2">
          {rank ? (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-serif text-[11px] font-bold text-gold">
              {rank}
            </span>
          ) : null}
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            aria-label={`Vai al sito ufficiale di ${op.name}`}
            className="gc-logo-frame flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-gold/60 bg-card shadow-sm transition-colors duration-300 hover:border-gold md:h-16"
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
              <span className="font-serif text-lg text-foreground">{op.name}</span>
            )}
          </a>
        </div>

        {/* Riga principale: nome + stelle + garanzie */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="truncate font-serif text-[15px] md:text-lg">{op.name}</h3>
            {meta ? <StarRating rating={meta.rating} size="sm" /> : null}
          </div>
          <OperatorTrustDots name={op.name} />
        </div>

        {/* Info principali: bonus + RTP */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-gold/40 bg-gold/10 px-2 py-1">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-gold/80">
              Bonus senza deposito
            </span>
            <span className="block truncate text-[12px] font-bold text-gold md:text-sm">
              {op.noDepositBonus?.amount ?? "Non dichiarato"}
            </span>
          </div>
          <div className="rounded-lg border border-border px-2 py-1">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
              RTP medio
            </span>
            <span className="block truncate text-[12px] font-bold text-foreground md:text-sm">
              {op.rtpAverage} · {op.games}+ giochi
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-2 flex items-center gap-2">
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="gc-cta inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gold px-3 py-2 text-[13px] font-bold text-primary-foreground shadow-md shadow-gold/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            Visita il sito ufficiale <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/operatori/$slug"
            params={{ slug: op.slug }}
            className="gc-btn-secondary shrink-0 px-2.5 py-2 text-[12px]"
          >
            Recensione
          </Link>
        </div>

        {/* Dettagli extra compattati */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-gold"
        >
          {open ? "Mostra meno" : "Continua a leggere"}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open ? (
          <div className="gc-pop mt-2 border-t border-border pt-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
                <BadgeCheck className="h-3 w-3" /> {op.concessionN}
              </span>
              {meta?.fastWithdrawal ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Prelievo rapido
                </span>
              ) : null}
              {meta?.paypal ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  PayPal
                </span>
              ) : null}
            </div>
            <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] md:grid-cols-4 md:text-xs">
              <Fact icon={Wallet} label="Deposito min." value={meta?.minDeposit ?? "n.d."} />
              <Fact icon={CreditCard} label="Prelievo min." value={meta?.minWithdrawal ?? "n.d."} />
              <Fact icon={Star} label="RTP medio" value={op.rtpAverage} />
              <Fact icon={Gamepad2} label="Giochi" value={`${op.games}+`} />
            </dl>
            <p className="mt-2 text-[11px] text-muted-foreground">{op.paymentMethods.join(" · ")}</p>
          </div>
        ) : null}
      </div>

      <p className="border-t border-border px-2.5 py-1 text-[9px] leading-tight text-muted-foreground md:px-4">
        18+ · Gioco responsabile · Concessione ADM · Dati dichiarati dall'operatore.
      </p>
    </article>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <dt className="flex items-center gap-1 uppercase tracking-wide text-muted-foreground">
        <Icon className="h-3 w-3 shrink-0 text-gold" /> {label}
      </dt>
      <dd className="truncate font-semibold text-foreground">{value}</dd>
    </div>
  );
}
