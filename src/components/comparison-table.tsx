import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus } from "lucide-react";
import { operators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";

/**
 * Comparatore completo: Casinò, Bonus, PayPal, Prelievo, RTP, Voto, Azione.
 * I dati arrivano automaticamente da src/data/casinos.ts + src/lib/operators.ts.
 * Nessun link affiliato è definito qui: usa esclusivamente op.officialUrl.
 */
export function ComparisonTable() {
  const rows = operators
    .map((op) => ({ op, meta: getCasinoMeta(op.slug) }))
    .sort((a, b) => (b.meta?.rating ?? 0) - (a.meta?.rating ?? 0));

  return (
    <section id="comparatore" className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs uppercase tracking-widest text-gold">Comparatore</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">
          Confronto casinò ADM 2026: bonus, PayPal, prelievi e RTP
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Tabella informativa dei concessionari ADM presenti sul sito. I valori sono indicativi e
          dichiarati dagli operatori: verifica sempre i Termini e Condizioni ufficiali. Vietato ai
          minori di 18 anni.
        </p>

        {/* Desktop */}
        <div className="mt-8 hidden overflow-x-auto rounded-xl border border-border md:block">
          <table className="w-full min-w-[860px] text-sm">
            <caption className="sr-only">
              Confronto tra concessionari ADM: bonus senza deposito, PayPal, prelievo minimo, RTP e
              voto redazionale
            </caption>
            <thead className="bg-card">
              <tr className="text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <th scope="col" className="p-3">Casinò</th>
                <th scope="col" className="p-3">Bonus</th>
                <th scope="col" className="p-3">PayPal</th>
                <th scope="col" className="p-3">Prelievo</th>
                <th scope="col" className="p-3">RTP</th>
                <th scope="col" className="p-3">Voto</th>
                <th scope="col" className="p-3">Azione</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ op, meta }) => (
                <tr key={op.slug} className="border-t border-border align-middle">
                  <th scope="row" className="p-3 text-left font-medium text-foreground">
                    <Link to="/operatori/$slug" params={{ slug: op.slug }} className="hover:text-gold">
                      {op.name}
                    </Link>
                    <span className="block text-[10px] font-normal text-muted-foreground">
                      {op.concessionN}
                    </span>
                  </th>
                  <td className="p-3 text-foreground/90">
                    {op.noDepositBonus?.amount ?? "Non dichiarato"}
                  </td>
                  <td className="p-3">
                    <YesNo value={!!meta?.paypal} />
                  </td>
                  <td className="p-3 text-foreground/90">
                    {meta?.minWithdrawal ?? "n.d."}
                    {meta?.fastWithdrawal ? (
                      <span className="block text-[10px] text-muted-foreground">rapido dichiarato</span>
                    ) : null}
                  </td>
                  <td className="p-3 text-foreground/90">{op.rtpAverage}</td>
                  <td className="p-3 font-serif text-gold">
                    {meta ? `${meta.rating.toFixed(1)}/10` : "n.d."}
                  </td>
                  <td className="p-3">
                    <div className="flex flex-col gap-1.5">
                      <a
                        href={op.officialUrl}
                        target="_blank"
                        rel="noopener nofollow"
                        className="inline-flex items-center justify-center gap-1 rounded-md bg-gold px-3 py-2 text-xs font-bold text-primary-foreground"
                      >
                        Visita il sito ufficiale <ArrowRight className="h-3 w-3" />
                      </a>
                      <Link
                        to="/operatori/$slug"
                        params={{ slug: op.slug }}
                        className="text-center text-[11px] text-muted-foreground underline hover:text-gold"
                      >
                        Leggi l'analisi completa
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="mt-8 grid gap-3 md:hidden">
          {rows.map(({ op, meta }) => (
            <div key={op.slug} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link
                    to="/operatori/$slug"
                    params={{ slug: op.slug }}
                    className="font-serif text-lg hover:text-gold"
                  >
                    {op.name}
                  </Link>
                  <p className="text-[10px] text-muted-foreground">{op.concessionN}</p>
                </div>
                <span className="shrink-0 rounded-lg border border-gold/50 bg-gold/10 px-2 py-1 font-serif text-sm text-gold">
                  {meta ? meta.rating.toFixed(1) : "n.d."}
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <Cell label="Bonus" value={op.noDepositBonus?.amount ?? "Non dichiarato"} />
                <Cell label="PayPal" value={meta?.paypal ? "Sì" : "No"} />
                <Cell label="Prelievo" value={meta?.minWithdrawal ?? "n.d."} />
                <Cell label="RTP" value={op.rtpAverage} />
              </dl>
              <a
                href={op.officialUrl}
                target="_blank"
                rel="noopener nofollow"
                className="mt-3 flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-primary-foreground"
              >
                Visita il sito ufficiale <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Il gioco è vietato ai minori di 18
          anni e può causare dipendenza patologica.
        </p>
      </div>
    </section>
  );
}

function YesNo({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex items-center gap-1 text-gold">
      <Check className="h-4 w-4" /> Sì
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-muted-foreground">
      <Minus className="h-4 w-4" /> No
    </span>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="text-foreground/90">{value}</dd>
    </div>
  );
}
