import { useMemo } from "react";
import { useRouterState } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { operators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";
import { displayBonuses, useBonusSnapshots } from "@/lib/use-bonus-snapshots";
import { AdmBadgeDot } from "@/components/casino-card";

function pathSeed(pathname: string) {
  // hash stabile: pagine diverse ricevono selezioni di operatori diverse
  let hash = 2166136261;
  for (const character of pathname) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash);
}

const PER_STRIP = 4;

export function PageOfferStrip({ placement = "page" }: { placement?: "article" | "page" }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const snapshots = useBonusSnapshots();
  const selected = useMemo(() => {
    const available = operators.filter((operator) => operator.logo && operator.officialUrl);
    if (available.length <= PER_STRIP) return available;
    const seed = pathSeed(pathname);
    // ordine pseudo-casuale ma stabile per pagina: ogni URL mostra operatori diversi
    const shuffled = [...available].sort(
      (a, b) => pathSeed(`${seed}:${a.slug}`) - pathSeed(`${seed}:${b.slug}`),
    );
    const offset = placement === "article" ? 0 : PER_STRIP;
    return Array.from({ length: PER_STRIP }, (_, index) => shuffled[(offset + index) % shuffled.length]);
  }, [pathname, placement]);


  if (selected.length === 0) return null;

  return (
    <aside className={placement === "article" ? "mt-6" : "border-t border-border bg-secondary/35 py-4"} aria-label="Operatori ADM in evidenza">
      <div className={placement === "article" ? "" : "mx-auto max-w-6xl px-2.5 md:px-6"}>
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <h2 className="font-serif text-base md:text-lg">
            <span className="mr-2 text-[10px] font-sans font-bold uppercase tracking-widest text-gold">Confronto rapido</span>
            Casinò ADM consigliati
          </h2>
          <span className="shrink-0 text-[10px] font-semibold text-muted-foreground">Solo +18</span>
        </div>

        <div className="grid gap-1.5 sm:grid-cols-2">
          {selected.map((operator) => {
            const meta = getCasinoMeta(operator.slug);
            const bonus = displayBonuses(operator, snapshots);
            return (
            <article
              key={operator.slug}
              className="grid grid-cols-[5rem_minmax(0,1fr)_auto] items-center gap-2.5 rounded-lg border border-offer-border bg-offer px-2.5 py-2 shadow-sm"
            >
              <div
                className={`gc-logo-frame relative flex h-10 w-20 shrink-0 items-center justify-center rounded-md px-1.5 ${operator.slug === "stake" ? "bg-logo-contrast" : "bg-offer-deep"}`}
              >
                <img src={operator.logo} alt={`Logo ${operator.name}`} width={600} height={200} loading="lazy" decoding="async" className="gc-logo-img max-h-8 w-auto max-w-[92%] object-contain" />
                <AdmBadgeDot className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[8px] font-bold uppercase tracking-wide text-muted-foreground">
                  {bonus.noDeposit ? "Senza deposito" : "Bonus di benvenuto"}
                  {meta?.spid ? " · SPID" : ""}
                </p>
                <p className={`truncate font-serif text-sm font-bold leading-tight ${bonus.noDeposit || bonus.deposit ? "text-gold" : "text-[10px] font-normal text-muted-foreground"}`}>
                  {bonus.noDeposit ?? bonus.deposit ?? "Senza deposito non disponibile"}
                </p>
              </div>
              <Button asChild size="sm" className="h-8 shrink-0 gap-1 px-2.5 text-[10px] font-extrabold uppercase">
                <a href={operator.officialUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" aria-label={`Visita il sito ufficiale di ${operator.name} (verificato dalla redazione)`}>
                  Visita il sito
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </Button>
            </article>
            );
          })}
        </div>
        <p className="mt-2 text-[9px] leading-snug text-muted-foreground">
          Offerte soggette a termini e condizioni dell’operatore. Il gioco è vietato ai minori e può causare dipendenza.
        </p>
      </div>
    </aside>
  );
}