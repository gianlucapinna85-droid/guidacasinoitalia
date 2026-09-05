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
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3">
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
              className="gc-logo-frame flex h-28 w-full items-center justify-center overflow-hidden border-b border-border px-5 py-3 md:h-32"
            >
              {op.logo ? (
                <img
                  src={op.logo}
                  alt={`Logo ${op.name}`}
                  width={224}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="gc-logo-img h-full w-full"
                />
              ) : (
                <span className="font-serif text-xl text-foreground">{op.name}</span>
              )}
            </a>

            <div className="flex flex-1 flex-col p-2.5 md:p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-serif text-[15px] leading-tight md:text-lg">{op.name}</h3>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="rounded-sm bg-gold px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-primary-foreground">Top {i + 1}</span>
                  {meta?.rating ? <RatingBadge rating={meta.rating} size="sm" /> : null}
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground md:text-xs">
                {op.concessionN}
              </p>
              <div className="mt-1.5 space-y-1">
                <p className="rounded-md border border-gold/40 bg-gold/10 px-2 py-1 text-[15px] font-bold leading-snug text-gold md:text-base">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-gold/80">
                    Senza deposito
                  </span>
                  {op.noDepositBonus?.amount ?? "Non dichiarato"}
                </p>
                <p className="rounded-md border border-border px-2 py-1 text-[15px] font-bold leading-snug text-foreground md:text-base">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
                    Con deposito
                  </span>
                  {op.depositBonus?.amount ?? "Vedi sito ufficiale"}
                </p>
              </div>
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold px-4 py-3 text-[15px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-md shadow-gold/25 transition-all hover:brightness-110 md:text-sm"
                >
                  Vai al sito ufficiale <ArrowRight className="h-3.5 w-3.5 shrink-0" />
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
