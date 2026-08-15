import { slots } from "@/data/slots";
import { operators } from "@/lib/operators";
import { ArrowRight } from "lucide-react";

export function SlotsGrid({ limit }: { limit?: number }) {
  const list = limit ? slots.slice(0, limit) : slots;

  return (
    <div className="mt-3 grid grid-cols-2 gap-2.5 md:gap-4">
      {list.map((slot) => {
        const op = operators.find((o) => o.slug === slot.operatorSlug);
        return (
          <article
            key={slot.name}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <img
              src={slot.image}
              alt={`Slot ${slot.name} di ${slot.provider}`}
              width={640}
              height={512}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-2.5 md:p-4">
              <h3 className="font-serif text-[15px] leading-tight md:text-lg">{slot.name}</h3>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground md:text-xs">
                {slot.provider}
              </p>
              <p className="mt-1 line-clamp-3 text-[11px] leading-snug text-muted-foreground md:text-sm">
                {slot.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] md:text-xs">
                <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 font-semibold text-gold">
                  RTP {slot.rtp}
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                  Volatilità {slot.volatility}
                </span>
              </div>
              {op && (
                <>
                  <p className="mt-2 text-[10px] text-muted-foreground md:text-xs">
                    Disponibile su <strong className="text-foreground">{op.name}</strong>
                  </p>
                  <a
                    href={op.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold px-3 py-2 text-[12px] font-bold text-primary-foreground shadow-md shadow-gold/25 transition-all hover:brightness-110 md:text-sm"
                  >
                    Visita qui <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </>
              )}
              <p className="mt-1.5 text-[9px] leading-tight text-muted-foreground">
                18+ · Gioca responsabilmente · RTP dichiarato dal provider
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
