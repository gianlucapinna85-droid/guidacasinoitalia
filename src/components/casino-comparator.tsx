import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { operators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";
import { CasinoRankCard } from "@/components/casino-card";

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
  title = "Comparatore casinò ADM",
  subtitle = "Confronta bonus, depositi, prelievi e voto redazionale dei concessionari con licenza italiana.",
}: {
  limit?: number;
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState<FilterId[]>([]);
  const [sort, setSort] = useState<SortKey>("migliore");

  const rows = useMemo(() => {
    const list = operators
      .map((op) => ({ op, meta: getCasinoMeta(op.slug) }))
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
  }, [active, sort, limit]);

  const toggle = (id: FilterId) =>
    setActive((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section id="comparatore" className="border-t border-border bg-background py-5 md:py-14">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Comparatore</p>
        <h2 className="mt-1 font-serif text-xl md:text-4xl">{title}</h2>
        <p className="mt-1.5 max-w-3xl text-[12px] leading-snug text-muted-foreground md:text-sm">
          {subtitle}
        </p>

        {/* Filtri + ordinamento */}
        <div className="mt-3 flex flex-col gap-2 rounded-xl border border-border bg-card p-2.5 md:mt-6 md:flex-row md:items-center md:justify-between md:p-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 pr-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5 text-gold" /> Filtri
            </span>
            {FILTERS.map((f) => {
              const on = active.includes(f.id);
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(f.id)}
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-all duration-200 md:text-xs ${
                    on
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="pr-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              Ordina
            </span>
            {SORTS.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={sort === s.id}
                onClick={() => setSort(s.id)}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-all duration-200 md:text-xs ${
                  sort === s.id
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-2 text-[11px] text-muted-foreground">
          {rows.length} operatori corrispondono ai criteri selezionati.
        </p>

        <div className="mt-3 grid gap-2.5 md:mt-5 md:gap-3">
          {rows.map(({ op, meta }, i) => (
            <div key={op.slug} className="gc-pop" style={{ animationDelay: `${Math.min(i, 6) * 30}ms` }}>
              <CasinoRankCard op={op} meta={meta} rank={i + 1} />
            </div>
          ))}
          {rows.length === 0 ? (
            <p className="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
              Nessun operatore corrisponde ai filtri selezionati.
            </p>
          ) : null}
        </div>

        <p className="mt-3 text-[11px] text-muted-foreground md:mt-4">
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Il gioco è vietato ai minori di 18
          anni e può causare dipendenza patologica.
        </p>
      </div>
    </section>
  );
}
