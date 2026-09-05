import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { operators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";
import { CasinoRankCard } from "@/components/casino-card";
import { Button } from "@/components/ui/button";

/**
 * Comparatore casinò ADM con filtri e ordinamento.
 * Fonte dati: src/lib/operators.ts + src/data/casinos.ts.
 * I link commerciali restano quelli definiti in officialUrl (invariati).
 */

type SortKey = "migliore" | "rating" | "bonus" | "giochi";

const FILTERS = [
  { id: "paypal", label: "PayPal" },
  { id: "prelievo-rapido", label: "Prelievo rapido" },
  { id: "bonus", label: "Con bonus dichiarato" },
  { id: "deposito-10", label: "Deposito da 10 €" },
  { id: "top-rating", label: "Voto 9+" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const SORTS: { id: SortKey; label: string }[] = [
  { id: "migliore", label: "Migliori" },
  { id: "rating", label: "Voto" },
  { id: "bonus", label: "Bonus" },
  { id: "giochi", label: "Numero giochi" },
];

function bonusValue(amount?: string) {
  if (!amount) return 0;
  const n = amount.replace(/[^\d,.]/g, "").replace(/\./g, "").replace(",", ".");
  const v = parseFloat(n);
  return Number.isNaN(v) ? 0 : v;
}

export function CasinoComparator({
  limit,
  featuredOnly = false,
  sectionId = "comparatore",
  eyebrow = "Comparatore",
  title = "Comparatore casinò ADM",
  subtitle = "Confronta bonus, depositi, prelievi e voto redazionale dei concessionari con licenza italiana.",
}: {
  limit?: number;
  featuredOnly?: boolean;
  sectionId?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState<FilterId[]>([]);
  const [sort, setSort] = useState<SortKey>("migliore");
  const [showFilters, setShowFilters] = useState(false);

  const rows = useMemo(() => {
    const list = operators
      .map((op) => ({ op, meta: getCasinoMeta(op.slug) }))
      .filter(({ meta }) => (featuredOnly ? !!meta?.featured : true))
      .filter(({ op, meta }) =>
        active.every((f) => {
          if (f === "paypal") return !!meta?.paypal;
          if (f === "prelievo-rapido") return !!meta?.fastWithdrawal;
          if (f === "bonus") return !!op.noDepositBonus?.amount;
          if (f === "deposito-10") return (meta?.minDeposit ?? "").startsWith("10");
          if (f === "top-rating") return (meta?.rating ?? 0) >= 9;
          return true;
        }),
      );

    list.sort((a, b) => {
      if (sort === "bonus")
        return bonusValue(b.op.noDepositBonus?.amount) - bonusValue(a.op.noDepositBonus?.amount);
      if (sort === "giochi") return b.op.games - a.op.games;
      return (b.meta?.rating ?? 0) - (a.meta?.rating ?? 0);
    });

    return limit ? list.slice(0, limit) : list;
  }, [active, sort, limit, featuredOnly]);

  const toggle = (id: FilterId) =>
    setActive((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section id={sectionId} className="border-t border-border bg-background py-5 md:py-14">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 md:px-6">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">{eyebrow}</p>

        <h2 className="mt-1 font-serif text-xl md:text-4xl">{title}</h2>
        <p className="mt-1.5 max-w-3xl text-[12px] leading-snug text-muted-foreground md:text-sm">
          {subtitle}
        </p>

        {/* Pulsante Filtra + contatore attivi */}
        <div className="mt-3 flex items-center gap-2 md:mt-6 lg:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-expanded={showFilters}
            aria-pressed={active.length > 0}
            onClick={() => setShowFilters((v) => !v)}
            className={showFilters || active.length > 0 ? "border-gold bg-gold/15 text-gold" : "text-muted-foreground"}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filtra
            {active.length > 0 && (
              <span className="ml-0.5 rounded-full bg-gold px-1.5 text-[10px] font-bold text-background">
                {active.length}
              </span>
            )}
          </Button>
          {active.length > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setActive([])}
              className="text-[11px] text-muted-foreground underline hover:text-foreground md:text-xs"
            >
              Azzera filtri
            </Button>
          )}
        </div>

        {/* Filtri + ordinamento (collassabili) */}
        <div className={`${showFilters ? "flex" : "hidden lg:flex"} mt-2 flex-col gap-2 rounded-xl border border-border bg-card p-2.5 md:flex-row md:items-center md:justify-between md:p-3 lg:mt-6 lg:p-4`}>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 pr-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                <SlidersHorizontal className="h-3.5 w-3.5 text-gold" /> Filtri
              </span>
              {FILTERS.map((f) => {
                const on = active.includes(f.id);
                return (
                  <Button
                    key={f.id}
                    type="button"
                    variant="outline"
                    size="sm"
                    aria-pressed={on}
                    onClick={() => toggle(f.id)}
                    className={`h-8 rounded-full px-2.5 text-[11px] md:text-xs ${
                      on
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </Button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="pr-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                Ordina
              </span>
              {SORTS.map((s) => (
                <Button
                  key={s.id}
                  type="button"
                  variant="outline"
                  size="sm"
                  aria-pressed={sort === s.id}
                  onClick={() => setSort(s.id)}
                  className={`h-8 rounded-full px-2.5 text-[11px] md:text-xs ${
                    sort === s.id
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                  }`}
                >
                  {s.label}
                </Button>
              ))}
            </div>
          </div>

        <p className="mt-2 text-[11px] text-muted-foreground">
          {rows.length} operatori corrispondono ai criteri selezionati.
        </p>

        <div className="mt-3 grid grid-cols-1 gap-3 px-0 md:mt-6 lg:grid-cols-2 lg:gap-4">
          {rows.map(({ op, meta }, i) => (
            <div key={op.slug} className="gc-pop" style={{ animationDelay: `${Math.min(i, 6) * 30}ms` }}>
              <CasinoRankCard op={op} meta={meta} rank={i + 1} />
            </div>
          ))}
          {rows.length === 0 ? (
            <p className="col-span-full rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
              Nessun operatore corrisponde ai filtri selezionati.
            </p>
          ) : null}
        </div>

      </div>
    </section>
  );
}
