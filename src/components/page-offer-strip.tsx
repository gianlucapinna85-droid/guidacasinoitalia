import { useMemo } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { operators } from "@/lib/operators";

function pathSeed(pathname: string) {
  return [...pathname].reduce((total, character) => total + character.charCodeAt(0), 0);
}

export function PageOfferStrip({ placement = "page" }: { placement?: "article" | "page" }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const selected = useMemo(() => {
    const available = operators.filter((operator) => operator.logo && operator.officialUrl);
    if (available.length <= 3) return available;
    const start = (pathSeed(pathname) + (placement === "article" ? 0 : 5)) % available.length;
    return [0, 1, 2].map((offset) => available[(start + offset * 3) % available.length]);
  }, [pathname, placement]);

  if (selected.length === 0) return null;

  return (
    <aside className={placement === "article" ? "mt-8" : "border-t border-border bg-secondary/35 py-7"} aria-label="Operatori ADM in evidenza">
      <div className={placement === "article" ? "" : "mx-auto max-w-6xl px-2.5 md:px-6"}>
        <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Confronto rapido</p>
            <h2 className="mt-1 font-serif text-xl md:text-2xl">Casinò ADM da confrontare</h2>
          </div>
          <span className="shrink-0 text-[10px] font-semibold text-muted-foreground">Solo +18</span>
        </div>

        <div className="grid gap-2.5 lg:grid-cols-3">
          {selected.map((operator) => (
            <article key={operator.slug} className="grid min-h-28 grid-cols-[minmax(0,1fr)_8rem] overflow-hidden rounded-lg border border-offer-border bg-offer shadow-sm">
              <div className="grid min-w-0 grid-rows-[4.75rem_auto]">
                <a
                  href={operator.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  aria-label={`Vai al sito ufficiale di ${operator.name}`}
                  className="gc-logo-frame flex min-w-0 items-center justify-center border-b border-offer-border bg-offer-deep px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                >
                  <img src={operator.logo} alt={`Logo ${operator.name}`} width={600} height={200} loading="lazy" decoding="async" className="gc-logo-img h-14 w-full max-w-44" />
                </a>
                <div className="flex min-w-0 items-center justify-between gap-2 px-3 py-2">
                  <div className="min-w-0">
                    <h3 className="truncate font-serif text-sm">{operator.name}</h3>
                    <p className="truncate text-xs font-bold text-gold">{operator.noDepositBonus?.amount ?? operator.depositBonus?.amount ?? "Offerta sul sito"}</p>
                  </div>
                  <BadgeCheck className="h-4 w-4 shrink-0 text-gold" aria-label="Operatore verificato" />
                </div>
              </div>
              <div className="flex items-center border-l border-offer-border bg-gold/[0.12] p-2">
                <Button asChild size="sm" className="h-11 w-full px-2 text-[11px] font-extrabold uppercase">
                  <a href={operator.officialUrl} target="_blank" rel="noopener noreferrer sponsored nofollow">
                    Visita <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-2 text-[9px] leading-snug text-muted-foreground">
          Offerte soggette a termini e condizioni dell’operatore. Il gioco è vietato ai minori e può causare dipendenza.
        </p>
      </div>
    </aside>
  );
}