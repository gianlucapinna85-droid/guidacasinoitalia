import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus } from "lucide-react";
import { operators } from "@/lib/operators";
import { getCasinoMeta, DECLARED_DATA_NOTE } from "@/data/casinos";

/**
 * Comparatore completo: Casinò, Bonus, PayPal, Prelievo, RTP, Voto, Azione.
 * I dati arrivano automaticamente da src/data/casinos.ts + src/lib/operators.ts.
 * Nessun link affiliato è definito qui: usa esclusivamente op.officialUrl.
 */
export function ComparisonTable() {
  const rows = operators
    .map((op) => ({ op, meta: getCasinoMeta(op.slug) }))
    .sort((a, b) => (b.meta?.rating ?? 0) - (a.meta?.rating ?? 0))
    .slice(0, 4);

  return (
    <section id="comparatore" className="border-t border-border bg-background py-4 md:py-16">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 md:px-6">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Selezione redazionale</p>
        <h2 className="mt-1 font-serif text-lg md:text-4xl">
          Confronto di quattro concessionari ADM
        </h2>
        <p className="mt-1.5 line-clamp-3 max-w-3xl text-[12px] leading-snug text-muted-foreground md:mt-3 md:line-clamp-none md:text-sm">
          Selezione editoriale basata sui dati pubblici disponibili alla data di aggiornamento. La
          selezione non costituisce una raccomandazione e non garantisce convenienza, sicurezza o
          vincite. I valori sono dichiarati dagli operatori: verifica sempre i Termini e Condizioni
          ufficiali. Vietato ai minori di 18 anni.
        </p>



        {/* Desktop */}
        <div className="mt-5 hidden overflow-x-auto rounded-xl border border-border md:block">
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
                    <a
                      href={op.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      aria-label={`Vai al sito ufficiale di ${op.name}`}
                      className="inline-flex items-center gap-2 hover:opacity-80"
                    >
                      {op.logo ? (
                        <img
                          src={op.logo}
                          alt={`Logo ${op.name}`}
                          loading="lazy"
                          width={144}
                          height={48}
                          decoding="async"
                          className="gc-logo-img h-10 w-28 shrink-0 rounded-md border border-border bg-card p-1"
                        />
                      ) : (
                        <span className="hover:text-gold">{op.name}</span>
                      )}
                    </a>
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

        <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground md:text-xs">
          {DECLARED_DATA_NOTE}
        </p>

        {/* Mobile: solo le 2 schede principali per arrivare subito al contenuto */}
        <div className="mt-3 grid gap-2.5 md:hidden">
          {rows.slice(0, 2).map(({ op, meta }) => (
            <div key={op.slug} className="rounded-xl border border-border bg-card p-2.5 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <a
                    href={op.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    aria-label={`Vai al sito ufficiale di ${op.name}`}
                    className="inline-flex items-center font-serif text-base hover:text-gold"
                  >
                    {op.logo ? (
                      <img
                        src={op.logo}
                        alt={`Logo ${op.name}`}
                        loading="lazy"
                        width={144}
                        height={48}
                        decoding="async"
                        className="gc-logo-img h-10 w-28 shrink-0 rounded-md border border-border bg-card p-1"
                      />
                    ) : (
                      op.name
                    )}
                  </a>
                  <p className="text-[10px] text-muted-foreground">{op.concessionN}</p>
                </div>
                <span className="shrink-0 rounded-lg border border-gold/50 bg-gold/10 px-2 py-1 font-serif text-sm text-gold">
                  {meta ? meta.rating.toFixed(1) : "n.d."}
                </span>
              </div>
              <dl className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
                <Cell label="Bonus" value={op.noDepositBonus?.amount ?? "Non dichiarato"} />
                <Cell label="PayPal" value={meta?.paypal ? "Sì" : "No"} />
                <Cell label="Prelievo" value={meta?.minWithdrawal ?? "n.d."} />
                <Cell label="RTP" value={op.rtpAverage} />
              </dl>
              <a
                href={op.officialUrl}
                target="_blank"
                rel="noopener nofollow"
                className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-gold/30 active:scale-[0.99]"
              >
                Visita il sito ufficiale <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
          <a
            href="#operatori"
            className="flex items-center justify-center gap-1.5 rounded-lg border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-bold text-gold"
          >
            Vedi la lista completa ADM <ArrowRight className="h-4 w-4" />
          </a>
        </div>



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
