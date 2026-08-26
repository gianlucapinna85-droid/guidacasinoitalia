import { Link } from "@tanstack/react-router";
import { slots } from "@/data/slots";
import { operators } from "@/lib/operators";
import { ArrowRight } from "lucide-react";

/**
 * Griglia slot: 3 per riga, descrizione breve (2 righe), link indicizzabile
 * "Continua a leggere" verso /slot/<slug> e pulsante verso op.officialUrl
 * (link affiliati invariati, uno diverso per ogni slot).
 */
export function SlotsGrid({ limit }: { limit?: number }) {
  const list = limit ? slots.slice(0, limit) : slots;

  return (
    <div className="mt-3 grid grid-cols-3 gap-1.5 md:gap-4">
      {list.map((slot) => {
        const op = operators.find((o) => o.slug === slot.operatorSlug);
        return (
          <article
            key={slot.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <Link to="/slot/$slug" params={{ slug: slot.slug }} className="block">
              <img
                decoding="async"
                src={slot.image}
                alt={`Slot ${slot.name} di ${slot.provider}`}
                width={640}
                height={512}
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] w-full object-cover"
              />
            </Link>
            <div className="flex flex-1 flex-col p-1.5 md:p-4">
              <h3 className="font-serif text-[12px] leading-tight md:text-lg">
                <Link to="/slot/$slug" params={{ slug: slot.slug }} className="hover:text-gold">
                  {slot.name}
                </Link>
              </h3>
              <p className="text-[9px] uppercase tracking-wide text-muted-foreground md:text-xs">
                {slot.provider}
              </p>
              <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-muted-foreground md:text-sm">
                {slot.description}
              </p>
              <Link
                to="/slot/$slug"
                params={{ slug: slot.slug }}
                className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-gold underline md:text-xs"
              >
                Continua a leggere <ArrowRight className="h-3 w-3 shrink-0" />
              </Link>
              <p className="mt-1.5 text-[9px] text-muted-foreground md:text-xs">
                RTP {slot.rtp} · Vol. {slot.volatility}
              </p>
              {op && (
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="mt-auto inline-flex items-center justify-center gap-1 rounded-md border border-gold/40 bg-gold px-1.5 py-1.5 text-[10px] font-bold text-primary-foreground shadow-md shadow-gold/25 transition-all hover:brightness-110 md:text-sm"
                >
                  Visita qui <ArrowRight className="h-3 w-3 shrink-0" />
                </a>
              )}
              <p className="mt-1 text-[8px] leading-tight text-muted-foreground md:text-[10px]">
                18+ · RTP dichiarato dal provider
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
