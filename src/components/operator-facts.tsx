import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BadgeCheck,
  ClipboardList,
  ExternalLink,
  Landmark,
  Scale,
  Timer,
  Wallet,
} from "lucide-react";
import type { OperatorFacts, PaymentRow } from "@/data/operator-facts";
import { withdrawalComparison } from "@/data/operator-facts";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function PaymentTable({ rows, caption }: { rows: PaymentRow[]; caption: string }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border bg-card/60 text-left">
            <th scope="col" className="p-3 font-medium">Metodo</th>
            <th scope="col" className="p-3 font-medium">Minimo</th>
            <th scope="col" className="p-3 font-medium">Massimo</th>
            <th scope="col" className="p-3 font-medium">Tempi dichiarati</th>
            <th scope="col" className="p-3 font-medium">Costi</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.method} className="border-b border-border align-top last:border-0">
              <th scope="row" className="p-3 text-left font-medium text-foreground">
                {r.method}
                {r.note ? (
                  <span className="mt-1 block text-xs font-normal leading-relaxed text-muted-foreground">
                    {r.note}
                  </span>
                ) : null}
              </th>
              <td className="p-3 text-foreground/90">{r.min}</td>
              <td className="p-3 text-foreground/90">{r.max}</td>
              <td className="p-3 text-foreground/90">{r.time}</td>
              <td className="p-3 text-foreground/90">{r.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SourcesBlock({ facts }: { facts: OperatorFacts }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-10 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <BadgeCheck className="h-5 w-5 text-gold" />
        <h2 className="font-serif text-xl">Fonti ufficiali e data di verifica</h2>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Tutti i dati operativi di questa pagina sono ripresi dalla documentazione pubblicata dal
        concessionario e dalle comunicazioni ADM, verificati il{" "}
        <strong className="text-foreground">{formatDate(facts.verifiedOn)}</strong>. Dove il
        concessionario non pubblica il valore in forma testuale il campo riporta
        &laquo;Non dichiarato&raquo;: nessun dato è stimato o ripreso da siti terzi.
      </p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 text-sm font-medium text-gold underline underline-offset-4"
        aria-expanded={open}
      >
        {open ? "Nascondi le fonti" : `Mostra le ${facts.sources.length} fonti consultate`}
      </button>
      {open ? (
        <ul className="mt-4 space-y-2">
          {facts.sources.map((s) => (
            <li key={s.url} className="text-sm">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-start gap-1.5 text-muted-foreground hover:text-gold"
              >
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="underline underline-offset-2">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function WithdrawalComparison({ currentSlug }: { currentSlug: string }) {
  if (withdrawalComparison.length < 2) return null;
  return (
    <section className="mt-10">
      <div className="flex items-center gap-2">
        <Scale className="h-5 w-5 text-gold" />
        <h2 className="font-serif text-2xl">Tempi di prelievo a confronto tra concessionari</h2>
      </div>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        Confronto costruito solo con operatori le cui condizioni sono state verificate una per una
        sulla documentazione ufficiale. Nessun valore è stimato: gli operatori senza dati pubblicati
        in forma testuale non compaiono in tabella.
      </p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[720px] text-sm">
          <caption className="sr-only">
            Confronto dei tempi e limiti di prelievo dichiarati dai concessionari verificati
          </caption>
          <thead>
            <tr className="border-b border-border bg-card/60 text-left">
              <th scope="col" className="p-3 font-medium">Operatore</th>
              <th scope="col" className="p-3 font-medium">Metodo più rapido</th>
              <th scope="col" className="p-3 font-medium">Tempo dichiarato</th>
              <th scope="col" className="p-3 font-medium">Prelievo minimo</th>
              <th scope="col" className="p-3 font-medium">Bonifico</th>
              <th scope="col" className="p-3 font-medium">Documento</th>
            </tr>
          </thead>
          <tbody>
            {withdrawalComparison.map((r) => {
              const isCurrent = r.slug === currentSlug;
              return (
                <tr
                  key={r.slug}
                  className={`border-b border-border align-top last:border-0 ${isCurrent ? "bg-gold/5" : ""}`}
                >
                  <th scope="row" className="p-3 text-left font-medium text-foreground">
                    {isCurrent ? (
                      <span>
                        {r.name}
                        <span className="mt-1 block text-xs font-normal text-gold">Questa scheda</span>
                      </span>
                    ) : (
                      <Link
                        to="/operatori/$slug"
                        params={{ slug: r.slug }}
                        className="text-gold underline underline-offset-4"
                      >
                        {r.name}
                      </Link>
                    )}
                  </th>
                  <td className="p-3 text-foreground/90">{r.fastestMethod}</td>
                  <td className="p-3 text-foreground/90">{r.fastestTime}</td>
                  <td className="p-3 text-foreground/90">{r.minWithdrawal}</td>
                  <td className="p-3 text-foreground/90">{r.bankTransferTime}</td>
                  <td className="p-3 text-foreground/90">{r.documentDeadline}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Dati verificati singolarmente sulle fonti ufficiali di ciascun concessionario
        {withdrawalComparison.map((r) => ` — ${r.name}: ${formatDate(r.verifiedOn)}`).join("")}.
      </p>
    </section>
  );
}

export function OperatorFactsSections({ facts, name }: { facts: OperatorFacts; name: string }) {
  return (
    <>
      <section className="mt-12 rounded-xl border border-gold/30 bg-gold/5 p-6">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-gold" />
          <h2 className="font-serif text-2xl">Come funziona davvero il conto {name}</h2>
        </div>
        <p className="mt-3 text-base leading-relaxed text-foreground/90">{facts.operationalSummary}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          Dati verificati sulle fonti ufficiali il {formatDate(facts.verifiedOn)}.
        </p>
      </section>

      {facts.withdrawals.length > 0 ? (
        <section className="mt-10">
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-gold" />
            <h2 className="font-serif text-2xl">Prelievi {name}: metodi, limiti e tempi dichiarati</h2>
          </div>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            I tempi indicati decorrono dalla conferma della richiesta e valgono solo a documento
            convalidato: nessun concessionario ADM può liquidare un prelievo prima della verifica
            dell'identità. Sabato e domenica non sono giorni lavorativi.
          </p>
          <PaymentTable rows={facts.withdrawals} caption={`Metodi di prelievo dichiarati da ${name}`} />
        </section>
      ) : null}

      {facts.deposits.length > 0 ? (
        <section className="mt-10">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-gold" />
            <h2 className="font-serif text-2xl">Depositi {name}: importi minimi, massimi e costi</h2>
          </div>
          <PaymentTable rows={facts.deposits} caption={`Metodi di deposito dichiarati da ${name}`} />
        </section>
      ) : null}

      <WithdrawalComparison currentSlug={facts.slug} />


      <section className="mt-10">
        <h2 className="font-serif text-2xl">Verifica documenti {name}: iter, tempi e blocchi</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{facts.verification.intro}</p>

        <h3 className="mt-6 font-serif text-lg">Documenti accettati</h3>
        <ul className="mt-3 space-y-2">
          {facts.verification.documents.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-foreground/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {d}
            </li>
          ))}
        </ul>

        <h3 className="mt-6 font-serif text-lg">La procedura passo per passo</h3>
        <ol className="mt-3 space-y-3">
          {facts.verification.steps.map((s, i) => (
            <li key={s} className="flex items-start gap-3 text-sm text-foreground/90">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-xs font-medium text-gold">
                {i + 1}
              </span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ol>

        <h3 className="mt-6 font-serif text-lg">Cosa si può fare prima della convalida</h3>
        <ul className="mt-3 space-y-2">
          {facts.verification.beforeValidation.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-warning/40 bg-warning/5 p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h3 className="font-serif text-lg">Perché la verifica o il prelievo si blocca</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {facts.verification.blockers.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Landmark className="h-5 w-5 text-gold" />
          <h2 className="font-serif text-2xl">Limiti di deposito e strumenti di autotutela</h2>
        </div>
        <ul className="mt-4 space-y-2.5">
          {facts.limits.map((l) => (
            <li key={l} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {l}
            </li>
          ))}
        </ul>
      </section>

      {facts.recentChanges.length > 0 ? (
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-2xl">Cosa è cambiato di recente su {name}</h2>
          <ul className="mt-4 space-y-3">
            {facts.recentChanges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {c}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Assistenza: canali dichiarati</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {facts.support.map((s) => (
            <div key={s.channel} className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-medium text-foreground">{s.channel}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <SourcesBlock facts={facts} />
    </>
  );
}
