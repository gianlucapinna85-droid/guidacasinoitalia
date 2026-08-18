import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CreditCard, Star, Wallet, Gamepad2 } from "lucide-react";
import type { Operator } from "@/lib/operators";
import { getCasinoMeta, type CasinoMeta } from "@/data/casinos";

/**
 * Card operatore "premium" usata dal comparatore, dalla home e dalle pagine hub.
 * Tutti i dati provengono da src/lib/operators.ts e src/data/casinos.ts.
 * IMPORTANTE: l'unico href commerciale è op.officialUrl (link affiliato) — non modificarlo.
 */

export type CasinoCardData = { op: Operator; meta?: CasinoMeta };

export function buildCardData(op: Operator): CasinoCardData {
  return { op, meta: getCasinoMeta(op.slug) };
}

function ratingLabel(rating?: number) {
  if (!rating) return null;
  if (rating >= 9.3) return "Eccellente";
  if (rating >= 9) return "Ottimo";
  if (rating >= 8.5) return "Molto buono";
  return "Buono";
}

export function CasinoRankCard({
  op,
  meta,
  rank,
}: CasinoCardData & { rank?: number }) {
  const rl = ratingLabel(meta?.rating);
  return (
    <article className="gc-card group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_16px_40px_-24px_var(--gc-glow)]">
      <div className="grid gap-3 p-3 md:grid-cols-[220px_1fr_210px] md:items-center md:gap-5 md:p-5">
        {/* Logo + rank */}
        <div className="flex items-center gap-3">
          {rank ? (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-serif text-sm font-bold text-gold">
              {rank}
            </span>
          ) : null}
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            aria-label={`Vai al sito ufficiale di ${op.name}`}
            className="gc-logo-frame flex h-16 w-full flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors duration-300 hover:border-gold/60 md:h-20"
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

        {/* Info */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-base md:text-xl">{op.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
              <BadgeCheck className="h-3 w-3" /> {op.concessionN}
            </span>
            {meta?.fastWithdrawal ? (
              <span className="gc-badge-pulse rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                Prelievo rapido
              </span>
            ) : null}
            {meta?.paypal ? (
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                PayPal
              </span>
            ) : null}
          </div>

          {op.noDepositBonus?.amount ? (
            <div className="mt-2 inline-flex flex-col gap-0.5 rounded-lg border border-gold/40 bg-gold/10 px-2.5 py-1">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gold/80 md:text-[10px]">
                Bonus senza deposito
              </span>
              <span className="text-[13px] font-bold text-gold md:text-sm">
                {op.noDepositBonus.amount}
              </span>
            </div>
          ) : (
            <p className="mt-2 text-[12px] text-muted-foreground">Bonus non dichiarato</p>
          )}

          <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] md:grid-cols-4 md:text-xs">
            <Fact icon={Wallet} label="Deposito min." value={meta?.minDeposit ?? "n.d."} />
            <Fact icon={CreditCard} label="Prelievo min." value={meta?.minWithdrawal ?? "n.d."} />
            <Fact icon={Star} label="RTP medio" value={op.rtpAverage} />
            <Fact icon={Gamepad2} label="Giochi" value={`${op.games}+`} />
          </dl>

          <p className="mt-2 line-clamp-2 text-[11px] text-muted-foreground md:text-xs">
            {op.paymentMethods.join(" · ")}
          </p>
        </div>

        {/* Rating + CTA */}
        <div className="flex items-center gap-3 md:flex-col md:items-stretch md:gap-2">
          <div className="flex flex-col items-center rounded-xl border border-gold/40 bg-gold/10 px-3 py-1.5">
            <span className="font-serif text-lg leading-none text-gold md:text-2xl">
              {meta ? meta.rating.toFixed(1) : "n.d."}
            </span>
            {rl ? (
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">{rl}</span>
            ) : null}
          </div>
          <div className="flex-1 md:w-full">
            <a
              href={op.officialUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="gc-cta inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gold px-3 py-2.5 text-[13px] font-bold text-primary-foreground shadow-lg shadow-gold/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98] md:text-sm"
            >
              Visita il sito ufficiale <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/operatori/$slug"
              params={{ slug: op.slug }}
              className="mt-1.5 block text-center text-[11px] text-muted-foreground underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              Recensione completa
            </Link>
          </div>
        </div>
      </div>
      <p className="border-t border-border px-3 py-1.5 text-[9px] leading-tight text-muted-foreground md:px-5">
        18+ · Gioco responsabile · Concessione ADM · I valori sono dichiarati dall'operatore: verifica i T&C ufficiali.
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
