import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { sortedOperators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";
import { RatingBadge } from "@/components/casino-ui";

/**
 * Banner operatori ADM in griglia a due colonne.
 * I pulsanti usano esclusivamente op.officialUrl (link affiliati invariati).
 */
export function OperatorCardsGrid({ limit }: { limit?: number }) {
  const list = limit ? sortedOperators.slice(0, limit) : sortedOperators;

  return (
    <div className="grid grid-cols-2 gap-2.5 md:gap-4">
      {list.map((op, i) => {
        const meta = getCasinoMeta(op.slug);
        return (
          <article
            key={op.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <a
              href={op.officialUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              aria-label={`Vai al sito ufficiale di ${op.name}`}
              className="gc-logo-frame relative flex h-16 w-full items-center justify-center overflow-hidden border-b border-border bg-card md:h-24"
            >
              {op.logo ? (
                <img
                  loading="lazy"
                  decoding="async"
                  src={op.logo}
                  alt={`Logo ${op.name}`}
                  width={224}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="gc-logo-img"
                />
              ) : (
                <span className="font-serif text-xl text-foreground">{op.name}</span>
              )}
              <span className="absolute left-1 top-1 rounded-md bg-foreground/80 px-1.5 text-[10px] font-bold text-background">
                {i + 1}
              </span>
              {meta?.rating ? (
                <span className="absolute right-1 top-1">
                  <RatingBadge rating={meta.rating} size="sm" />
                </span>
              ) : null}
            </a>

            <div className="flex flex-1 flex-col p-2.5 md:p-4">
              <h3 className="font-serif text-[15px] leading-tight md:text-lg">{op.name}</h3>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground md:text-xs">
                {op.concessionN}
              </p>
              {op.noDepositBonus?.amount ? (
                <p className="mt-1.5 rounded-md border border-gold/40 bg-gold/10 px-2 py-1 text-[11px] font-bold leading-tight text-gold md:text-sm">
                  {op.noDepositBonus.amount}
                </p>
              ) : null}
              <dl className="mt-2 grid grid-cols-2 gap-1 text-[10px] text-muted-foreground md:text-xs">
                <div>
                  <dt className="uppercase tracking-wide">RTP</dt>
                  <dd className="font-semibold text-foreground">{op.rtpAverage}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide">Titoli</dt>
                  <dd className="font-semibold text-foreground">{op.games}+</dd>
                </div>
              </dl>

              <div className="mt-auto pt-2.5">
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold px-3 py-2 text-[12px] font-bold text-primary-foreground shadow-md shadow-gold/25 transition-all hover:brightness-110 md:text-sm"
                >
                  Visita qui <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </a>
                <Link
                  to="/operatori/$slug"
                  params={{ slug: op.slug }}
                  className="mt-1.5 inline-flex w-full items-center justify-center rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground md:text-sm"
                >
                  Recensione
                </Link>
                <p className="mt-1.5 text-[9px] leading-tight text-muted-foreground">
                  18+ · Gioca responsabilmente · Concessione ADM
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
