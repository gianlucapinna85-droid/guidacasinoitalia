import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks } from "@/components/casino-ui";
import { providers } from "@/lib/providers";
import { sortedOperators } from "@/lib/operators";
import { socialImageMeta } from "@/lib/social-image";

const CANONICAL = "https://www.guidacasino-italia.it/guida-rtp";
const TITLE = "Guida RTP 2026: cos'è il Return to Player e come si legge";
const DESCRIPTION =
  "Cos'è l'RTP (Return to Player), come si calcola, differenza con la volatilità e RTP medio dichiarato da provider e casinò con concessione ADM. Guida informativa. Solo +18.";

const FAQS = [
  {
    q: "Cosa significa RTP?",
    a: "RTP è l'acronimo di Return to Player: la percentuale teorica di reintegro al giocatore calcolata su un numero molto elevato di giocate. Un RTP del 96% indica che, statisticamente e nel lungo periodo, il gioco restituisce 96 € ogni 100 € puntati.",
  },
  {
    q: "Un RTP alto garantisce di vincere?",
    a: "No. L'RTP è un valore statistico di lungo periodo e non dice nulla sull'esito della singola sessione, determinato da generatori di numeri casuali certificati. Nessun valore di RTP rende il gioco una fonte di guadagno.",
  },
  {
    q: "Qual è la differenza tra RTP e volatilità?",
    a: "L'RTP indica quanto un gioco restituisce nel lungo periodo; la volatilità indica come queste restituzioni si distribuiscono. Un gioco ad alta volatilità paga di rado ma con importi maggiori, uno a bassa volatilità paga spesso con importi contenuti.",
  },
  {
    q: "Dove si verifica l'RTP di una slot?",
    a: "Nella scheda informativa del singolo gioco, all'interno del casinò con concessione ADM, alla voce 'informazioni' o 'paytable'. È il solo valore attendibile: gli RTP medi per provider sono indicativi.",
  },
  {
    q: "L'RTP cambia da casinò a casinò?",
    a: "Alcuni provider distribuiscono più configurazioni di RTP dello stesso titolo. Per questo il valore va sempre letto nella scheda del gioco sul concessionario in cui si sta giocando.",
  },
];

export const Route = createFileRoute("/guida-rtp")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "rtp, cos'è l'rtp, return to player, rtp slot, rtp medio casino adm, volatilità slot, rtp provider",
      },
      { name: "robots", content: "index, follow, max-snippet:-1" },
      { property: "og:title", content: TITLE },
      ...socialImageMeta(),
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "it-IT",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          inLanguage: "it-IT",
          author: { "@type": "Organization", name: "GuidaCasinò.IT" },
          publisher: { "@type": "Organization", name: "GuidaCasinò.IT" },
          mainEntityOfPage: CANONICAL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.guidacasino-italia.it/" },
            { "@type": "ListItem", position: 2, name: "Guida RTP", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const SECTIONS = [
  { id: "definizione", label: "Cos'è l'RTP" },
  { id: "calcolo", label: "Come si calcola" },
  { id: "volatilita", label: "RTP e volatilità" },
  { id: "provider", label: "RTP medio per provider" },
  { id: "operatori", label: "RTP medio per operatore" },
  { id: "faq", label: "Domande frequenti" },
];

function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 md:px-6 py-12 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / Guida RTP
        </nav>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-gold">Guida informativa 2026</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight md:text-5xl">
            Guida all'RTP: cos'è il Return to Player e come leggerlo
          </h1>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">{DESCRIPTION}</p>
        </header>

        <nav className="mt-8 rounded-xl border border-border bg-card p-5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Indice</p>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="definizione" className="mt-12">
          <h2 className="font-serif text-2xl">Cos'è l'RTP</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            L'RTP (Return to Player) è la percentuale teorica di reintegro al giocatore dichiarata
            dal produttore del gioco e certificata dagli organismi di verifica riconosciuti da ADM.
            Rappresenta il rapporto, calcolato su milioni di giocate simulate, tra l'importo
            complessivamente restituito e quello complessivamente puntato. La differenza rispetto al
            100% è il margine della casa (house edge).
          </p>
        </section>

        <section id="calcolo" className="mt-12">
          <h2 className="font-serif text-2xl">Come si calcola l'RTP</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Su un RTP dichiarato del 96%, 100 € puntati corrispondono a 96 € restituiti in media nel
            lungo periodo e 4 € di margine per l'operatore. Il calcolo è valido solo su volumi di
            giocate molto elevati: su una singola sessione la deviazione dal valore teorico può
            essere ampia in entrambe le direzioni. Per questo l'RTP non è, in nessun caso, una
            previsione del risultato di gioco.
          </p>
        </section>

        <section id="volatilita" className="mt-12">
          <h2 className="font-serif text-2xl">RTP e volatilità: due indicatori diversi</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-serif text-lg">RTP</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Quanto il gioco restituisce complessivamente nel lungo periodo. Si esprime in
                percentuale ed è indicato nella scheda del singolo titolo.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-serif text-lg">Volatilità</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Come le vincite si distribuiscono nel tempo. Alta volatilità significa esiti rari e
                più variabili; bassa volatilità significa esiti frequenti e contenuti.
              </p>
            </div>
          </div>
        </section>

        <section id="provider" className="mt-12">
          <h2 className="font-serif text-2xl">RTP medio dichiarato per provider</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-card text-left text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="p-3">Provider</th>
                  <th className="p-3">RTP medio</th>
                  <th className="p-3">Titolo più giocato</th>
                  <th className="p-3">RTP titolo</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p) => (
                  <tr key={p.slug} className="border-t border-border">
                    <td className="p-3 font-medium">{p.name}</td>
                    <td className="p-3 text-gold">{p.rtpAverage}</td>
                    <td className="p-3 text-muted-foreground">{p.topSlot}</td>
                    <td className="p-3 text-muted-foreground">{p.topSlotRtp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Valori indicativi dichiarati dai produttori: verifica sempre l'RTP pubblicato nella
            scheda del singolo gioco sul concessionario.
          </p>
        </section>

        <section id="operatori" className="mt-12">
          <h2 className="font-serif text-2xl">RTP medio dichiarato per operatore ADM</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {sortedOperators.map((op) => (
              <Link
                key={op.slug}
                to="/operatori/$slug"
                params={{ slug: op.slug }}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-gold/50"
              >
                <span className="font-medium">{op.name}</span>
                <span className="inline-flex items-center gap-1.5 text-gold">
                  <Gauge className="h-4 w-4" />
                  {op.rtpAverage}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl">Domande frequenti sull'RTP</h2>
          <div className="mt-6 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedLinks />

        <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Vietato ai minori di 18 anni. Il
          gioco può causare dipendenza patologica.
        </p>
      </article>
    </PageShell>
  );
}
