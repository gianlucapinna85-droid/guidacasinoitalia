import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, CreditCard, Calendar, Gauge, Layers } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { operators } from "@/lib/operators";
import { buildReview } from "@/lib/operator-review";
import { getCasinoMeta } from "@/data/casinos";
import { getDeepDive } from "@/data/casino-deepdive";
import { getOperatorFacts } from "@/data/operator-facts";
import { OperatorFactsSections } from "@/components/operator-facts";
import { ReadMore } from "@/components/read-more";
import { FaqSlider } from "@/components/faq-slider";


import { RatingBadge, CasinoBadges, RelatedLinks, RelatedProjectBox } from "@/components/casino-ui";


function loadOperator(slug: string) {
  const op = operators.find((o) => o.slug === slug);
  if (!op) throw notFound();
  return { operator: op, review: buildReview(op) };
}

export const Route = createFileRoute("/operatori/$slug")({
  loader: ({ params }) => loadOperator(params.slug),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Scheda operatore non trovata — GuidaCasinò.IT" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { operator } = loaderData;
    const facts = getOperatorFacts(operator.slug);
    const canonical = `https://www.guidacasino-italia.it/operatori/${operator.slug}`;
    const nd = operator.noDepositBonus?.amount;
    const title = facts
      ? `${operator.name}: prelievi, tempi e verifica documenti 2026`
      : `${operator.name} Casinò ADM 2026: Recensione e Bonus`;
    const description = facts
      ? `${operator.name}: metodi di prelievo con limiti e tempi dichiarati, verifica documenti, limiti di deposito e novità 2026. Dati da fonti ufficiali. +18.`.slice(0, 158)
      : `${operator.name}: recensione del casinò ADM ${operator.concessionN}. ${nd ? `Bonus senza deposito ${nd}, ` : ""}RTP ${operator.rtpAverage}, ${operator.games}+ giochi. +18.`.slice(0, 158);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${operator.name}, ${operator.name} recensione, ${operator.name} opinioni, ${operator.name} casinò ADM, ${operator.name} bonus senza deposito, ${operator.name} prelievo, casino online sicuri, casino AAMS 2026, concessione ADM`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            inLanguage: "it-IT",
            author: { "@type": "Organization", name: "GuidaCasinò.IT" },
            publisher: { "@type": "Organization", name: "GuidaCasinò.IT" },
            dateModified: new Date().toISOString().slice(0, 10),
            mainEntityOfPage: canonical,
            about: {
              "@type": "Organization",
              name: operator.name,
              identifier: operator.concessionN,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            inLanguage: "it-IT",
            name: title,
            url: canonical,
            itemReviewed: {
              "@type": "Organization",
              name: operator.name,
              identifier: operator.concessionN,
              url: canonical,
            },
            author: { "@type": "Organization", name: "GuidaCasinò.IT" },
            publisher: { "@type": "Organization", name: "GuidaCasinò.IT" },
            datePublished: new Date().toISOString().slice(0, 10),
            reviewRating: {
              "@type": "Rating",
              ratingValue: getCasinoMeta(operator.slug)?.rating ?? 8.5,
              bestRating: 10,
              worstRating: 1,
            },
            reviewBody: description,
          }),
        },


        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.guidacasino-italia.it/" },
              { "@type": "ListItem", position: 2, name: "Operatori ADM", item: "https://www.guidacasino-italia.it/#operatori" },
              { "@type": "ListItem", position: 3, name: operator.name, item: canonical },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...(facts
                ? facts.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  }))
                : []),
              {
                "@type": "Question",
                name: `${operator.name} ha la concessione ADM?`,
                acceptedAnswer: { "@type": "Answer", text: `${operator.name} risulta titolare della concessione ${operator.concessionN}, verificabile sull'elenco pubblico dei concessionari pubblicato su adm.gov.it.` },
              },
              {
                "@type": "Question",
                name: `${operator.name} offre un bonus senza deposito?`,
                acceptedAnswer: { "@type": "Answer", text: nd ? `Secondo le condizioni pubblicate dal concessionario, ${operator.name} prevede un bonus senza deposito di ${nd}, accreditato dopo la verifica dei documenti e soggetto a requisiti di puntata.` : `Al momento non risultano bonus senza deposito pubblicati da ${operator.name}. Consulta i Termini e Condizioni ufficiali per gli aggiornamenti.` },
              },
              {
                "@type": "Question",
                name: `Quali metodi di pagamento accetta ${operator.name}?`,
                acceptedAnswer: { "@type": "Answer", text: `${operator.name} dichiara i seguenti metodi: ${operator.paymentMethods.join(", ")}.` },
              },
            ],
          }),
        },
      ],
    };
  },

  notFoundComponent: OperatorNotFound,
  component: OperatorPage,
});

function OperatorNotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-2.5 md:px-6 py-24 text-center">
        <h1 className="font-serif text-3xl">Scheda non trovata</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          L'operatore richiesto non è presente nel nostro elenco informativo.
        </p>
        <Link
          to="/"
          hash="operatori"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm text-gold hover:bg-gold/20"
        >
          <ArrowLeft className="h-4 w-4" /> Torna all'elenco
        </Link>
      </section>
    </PageShell>
  );
}

function OperatorPage() {
  const data = Route.useLoaderData() as ReturnType<typeof loadOperator>;
  const { operator: op, review } = data;
  const meta = getCasinoMeta(op.slug);
  const facts = getOperatorFacts(op.slug);


  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 md:px-6 py-12 md:py-16">
        <Link
          to="/"
          hash="operatori"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold"
        >
          <ArrowLeft className="h-3 w-3" /> Elenco concessionari
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-gold">Recensione informativa 2026</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">
            {facts
              ? `${op.name}: prelievi, verifica documenti e limiti — guida operativa`
              : `${op.name}: recensione casinò ADM e bonus senza deposito`}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Concessione <strong className="text-foreground">{op.concessionN}</strong> — dati riferiti
            all'elenco pubblico dei concessionari ADM (ex AAMS).
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {meta ? <RatingBadge rating={meta.rating} /> : null}
            <CasinoBadges slug={op.slug} />
          </div>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FactCard icon={Calendar} label="Attivo dal" value={op.founded.toString()} />
          <FactCard icon={Gauge} label="RTP medio dichiarato" value={op.rtpAverage} />
          <FactCard icon={Layers} label="Titoli disponibili" value={`${op.games}+`} />
          <FactCard
            icon={CreditCard}
            label="Metodi di pagamento"
            value={`${op.paymentMethods.length}`}
          />
        </div>

        <section className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Dati sintetici di {op.name}</caption>
            <tbody>
              {[
                ["Voto redazionale", meta ? `${meta.rating.toFixed(1)}/10` : "n.d."],
                ["Bonus senza deposito", op.noDepositBonus?.amount ?? "Non dichiarato"],
                ["Deposito minimo", meta?.minDeposit ?? "n.d."],
                ["Prelievo minimo", meta?.minWithdrawal ?? "n.d."],
                ["PayPal", meta?.paypal ? "Dichiarato" : "Non dichiarato"],
                ["Prelievo rapido", meta?.fastWithdrawal ? "Dichiarato" : "Non dichiarato"],
                ["RTP medio dichiarato", op.rtpAverage],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-border last:border-0">
                  <th scope="row" className="w-1/2 p-3 text-left font-normal text-muted-foreground">
                    {k}
                  </th>
                  <td className="p-3 font-medium text-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {meta ? (
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
              <h2 className="font-serif text-xl">Pro</h2>
              <ul className="mt-4 space-y-2.5">
                {meta.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl">Contro</h2>
              <ul className="mt-4 space-y-2.5">
                {meta.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {facts ? <OperatorFactsSections facts={facts} name={op.name} /> : null}



        <section className="mt-12">
          <h2 className="font-serif text-2xl">
            {op.name} è un casinò ADM sicuro? Analisi della concessione
          </h2>
          <ReadMore collapsedHeight="5.5rem" className="mt-1">
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{review.summary}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {op.name} opera in Italia con <strong>concessione ADM {op.concessionN}</strong>: significa che il
              catalogo giochi, i generatori di numeri casuali e i flussi di gioco sono collegati al totalizzatore
              nazionale e sottoposti al controllo dell'Agenzia delle Dogane e dei Monopoli. La verifica
              dell'identità è obbligatoria e il conto di gioco resta limitato fino alla convalida dei documenti.
              Puoi controllare in autonomia la validità della concessione sull'elenco pubblico di adm.gov.it.
            </p>
          </ReadMore>

        </section>

        {getDeepDive(op.slug).map((s) => (
          <section key={s.h2} className="mt-10">
            <h2 className="font-serif text-2xl">{s.h2}</h2>
            <ReadMore collapsedHeight="5.5rem" className="mt-1">
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.bullets ? (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </ReadMore>
          </section>
        ))}


        <section className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6">
          <h2 className="font-serif text-2xl">Bonus senza deposito {op.name}</h2>
          {op.noDepositBonus ? (
            <>
              <p className="mt-3 text-lg font-semibold text-gold">{op.noDepositBonus.amount}</p>
              <p className="mt-2 text-sm text-foreground/90">{op.noDepositBonus.description}</p>
            </>
          ) : (
            <p className="mt-3 text-sm text-foreground/90">
              Al momento non risultano <strong>bonus senza deposito</strong> pubblicati da {op.name}. Consulta
              i Termini e Condizioni ufficiali del concessionario per eventuali aggiornamenti.
            </p>
          )}
          <p className="mt-3 text-sm text-muted-foreground">
            Ogni bonus senza deposito è soggetto a <strong>requisiti di puntata (wagering)</strong>, scadenza,
            giochi ammessi e limite di vincita prelevabile.{" "}
            <Link to="/bonus-senza-deposito" className="underline hover:text-gold">
              Leggi come funzionano i bonus senza deposito
            </Link>{" "}
            oppure scopri{" "}
            <Link to="/come-registrarsi" className="underline hover:text-gold">
              come registrarsi su un casinò ADM
            </Link>
            .
          </p>
        </section>

        {facts ? null : (
          <section className="mt-10">
            <h2 className="font-serif text-2xl">Come registrarsi e verificare il conto su {op.name}</h2>
            <ReadMore collapsedHeight="4.5rem" className="mt-1">
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                La registrazione su {op.name} richiede la maggiore età, un documento d'identità valido e il codice
                fiscale; in alternativa è spesso disponibile l'accesso con SPID o CIE, che rende la verifica
                immediata. Solo al termine della verifica il conto di gioco diventa pienamente operativo e viene
                accreditato l'eventuale bonus senza deposito. Prima della prima giocata è consigliabile impostare i
                limiti di deposito previsti dalla normativa italiana.
              </p>
            </ReadMore>
          </section>
        )}


        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold" />
              <h2 className="font-serif text-xl">Elementi rilevati</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {review.strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-warning/40 bg-warning/5 p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <h2 className="font-serif text-xl">Punti di attenzione</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {review.attention.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-xl">Metodi di pagamento dichiarati</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {op.paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground/90"
              >
                {m}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">
            Opinioni e valutazione redazionale su {op.name}
          </h2>
          <ReadMore collapsedHeight="5rem" className="mt-1">
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Le opinioni raccolte sui <strong>casinò online ADM</strong> come {op.name} si concentrano
            quasi sempre su tre aspetti: la rapidità della verifica dei documenti, i tempi effettivi di
            prelievo e l'ampiezza del catalogo di slot e tavoli live. Su questi parametri {op.name}
            dichiara {meta?.fastWithdrawal ? "tempi di prelievo rapidi" : "tempi di prelievo in linea con la media di categoria"} e{" "}
            {meta?.paypal ? "l'accettazione di PayPal tra i metodi tracciabili" : "un insieme di metodi di pagamento tracciabili senza PayPal"}.
            Il voto redazionale {meta ? `di ${meta.rating.toFixed(1)}/10 ` : ""}sintetizza dati pubblici e
            verificabili, non accordi commerciali.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Per un confronto diretto con gli altri concessionari puoi consultare la{" "}
            <Link to="/migliori-casino-online" className="underline hover:text-gold">
              guida ai migliori casinò online
            </Link>
            , approfondire{" "}
            <Link to="/casino-online-sicuri" className="underline hover:text-gold">
              come riconoscere un casinò online sicuro
            </Link>{" "}
            oppure verificare i{" "}
            <Link to="/prelievi-veloci" className="underline hover:text-gold">
              tempi reali di prelievo
            </Link>
            .
          </p>
          </ReadMore>

        </section>

        <FaqSlider
          title={`Domande frequenti su ${op.name}`}
          items={[
              ...(facts ? facts.faqs.map((f) => ({ q: f.q, a: f.a })) : []),
              {
                q: `${op.name} è un casinò sicuro e legale in Italia?`,
                a: `${op.name} risulta titolare della concessione ${op.concessionN}, verificabile nell'elenco pubblico dei concessionari su adm.gov.it. I giochi sono collegati al totalizzatore nazionale e sottoposti al controllo dell'Agenzia delle Dogane e dei Monopoli.`,
              },
              {
                q: `${op.name} offre un bonus senza deposito?`,
                a: op.noDepositBonus
                  ? `Secondo le condizioni pubblicate dal concessionario è previsto un bonus senza deposito di ${op.noDepositBonus.amount}, accreditato dopo la verifica dei documenti e soggetto a requisiti di puntata, scadenza e giochi ammessi.`
                  : `Al momento non risultano bonus senza deposito pubblicati da ${op.name}. Verifica sempre i Termini e Condizioni ufficiali per eventuali aggiornamenti.`,
              },
              {
                q: `Quali metodi di pagamento accetta ${op.name}?`,
                a: `${op.name} dichiara i seguenti metodi tracciabili: ${op.paymentMethods.join(", ")}. Deposito minimo ${meta?.minDeposit ?? "n.d."}, prelievo minimo ${meta?.minWithdrawal ?? "n.d."}. Il metodo deve essere intestato al titolare del conto di gioco.`,
              },
              ...(facts
                ? []
                : [
                    {
                      q: `Quanto tempo richiede un prelievo su ${op.name}?`,
                      a: `I tempi dipendono dal metodo scelto e dallo stato della verifica documentale: senza documenti convalidati nessun concessionario ADM può liquidare un prelievo. ${meta?.fastWithdrawal ? "L'operatore dichiara tempi di elaborazione rapidi." : "I tempi dichiarati sono in linea con la media di categoria."}`,
                    },
                  ]),
              {
                q: `Qual è l'RTP medio dichiarato da ${op.name}?`,
                a: `L'RTP medio dichiarato è ${op.rtpAverage}. È un valore statistico teorico calcolato su un numero molto elevato di giocate: il dato attendibile per il singolo gioco è quello riportato nella sua scheda informativa.`,
              },
              ...(facts
                ? []
                : [
                    {
                      q: `Come ci si registra su ${op.name}?`,
                      a: `Servono maggiore età, codice fiscale e un documento d'identità valido; in alternativa è spesso disponibile l'accesso con SPID o CIE, che rende la verifica immediata. Prima della prima giocata è consigliabile impostare i limiti di deposito.`,
                    },
                  ]),
          ]}
        />



        <section className="mt-10 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
          <h2 className="font-serif text-xl text-destructive">Avvertenza</h2>
          <p className="mt-3 text-sm text-foreground/90">{review.suitability}</p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-medium text-gold hover:bg-gold/20"
          >
            Visita il sito ufficiale <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/gioco-responsabile"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:bg-accent"
          >
            Gioco responsabile
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Non costituisce comunicazione
          commerciale né incentivo al gioco. Vietato ai minori di 18 anni.
        </p>
        <RelatedProjectBox className="mt-12" />

        <RelatedLinks currentSlug={op.slug} />
      </article>

    </PageShell>
  );
}

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-gold">
        <Icon className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      </div>
      <p className="mt-2 font-serif text-2xl text-foreground">{value}</p>
    </div>
  );
}
