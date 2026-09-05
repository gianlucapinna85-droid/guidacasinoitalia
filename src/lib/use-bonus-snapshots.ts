import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getBonusSnapshots, type BonusSnapshot } from "@/lib/bonus-snapshots.functions";
import type { Operator } from "@/lib/operators";

/**
 * Bonus aggiornati dal controllo automatico, indicizzati per slug.
 * Se lo snapshot esiste, i suoi valori sostituiscono quelli statici delle schede.
 */
export function useBonusSnapshots(): Map<string, BonusSnapshot> {
  const fetchSnapshots = useServerFn(getBonusSnapshots);
  const { data } = useQuery({
    queryKey: ["bonus-snapshots"],
    queryFn: fetchSnapshots,
    staleTime: 1000 * 60 * 60,
  });
  return new Map((data ?? []).map((row) => [row.slug, row]));
}

/** Valori da mostrare in scheda: snapshot automatico se presente, altrimenti dato statico. */
export function displayBonuses(
  operator: Operator,
  snapshots: Map<string, BonusSnapshot>,
): { noDeposit: string | null; deposit: string | null } {
  const snap = snapshots.get(operator.slug);
  if (!snap) {
    return {
      noDeposit: operator.noDepositBonus?.amount ?? null,
      deposit: operator.depositBonus?.amount ?? null,
    };
  }
  return { noDeposit: snap.no_deposit, deposit: snap.deposit };
}
