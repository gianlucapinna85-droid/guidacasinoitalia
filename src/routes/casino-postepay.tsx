import { createFileRoute } from "@tanstack/react-router";
import { KeywordLanding, CheckList, type LandingFaq } from "@/components/keyword-landing";
import { socialImageMeta } from "@/lib/social-image";
import { sortedOperators } from "@/lib/operators";

const CANONICAL = "https://www.guidacasino-italia.it/casino-postepay";
const TITLE = "Casinò Postepay: depositi e prelievi sui siti ADM 2026";
const DESCRIPTION =
  "Postepay sui casinò online e siti scommesse con concessione ADM: come depositare, tempi di prelievo, limiti e commissioni dichiarate dagli operatori. +18.";

const FAQS: LandingFaq[] = [
  {
    q: "Quali casinò ADM accettano Postepay?",
    a: "Postepay è tra i metodi più diffusi sui concessionari italiani: essendo una carta prepagata del circuito Mastercard o Visa, viene in genere accettata dove sono accettate le carte. L'elenco aggiornato è nella sezione cassa dell'operatore.",
  },
  {
    q: "Si può prelevare su Postepay?",
    a: "Sull'Evolution (dotata di IBAN) il prelievo è di norma possibile tramite bonifico o riaccredito su carta. Su alcune Postepay senza IBAN il rimborso può essere limitato all'importo depositato: verifica la pagina prelievi del concessionario.",
  },
  {
    q: "La carta deve essere intestata al titolare del conto di gioco?",
    a: "Sì. La normativa ADM impone che il metodo di pagamento sia intestato alla stessa persona titolare del conto di gioco: strumenti intestati a terzi vengono rifiutati.",
  },
  {
    q: "Ci sono commissioni?",
    a: "I concessionari in genere non applicano commissioni sui depositi con carta. Restano i costi previsti dal contratto Postepay (ricarica, canone, bonifico in uscita) indicati da Poste Italiane.",
  },
  {
    q: "Quanto tempo serve per ricevere il prelievo?",
    a: "Il tempo si compone dell'elaborazione interna del concessionario e dei tempi del circuito. Le tempistiche dichiarate dai singoli operatori sono riportate nelle rispettive schede di questo sito.",
  },
];

export const Route = createFileRoute("/casino-postepay")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "casino postepay, casino online postepay, siti scommesse postepay, deposito postepay casino, prelievo postepay casino adm",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
      ...socialImageMeta(),
      { name: "twitter:card", content: "summary_large_image" },
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.guidacasino-italia.it/" },
            { "@type": "ListItem", position: 2, name: "Casinò Postepay", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const withPostepay = sortedOperators.filter((op) =>
    op.paymentMethods.some((m) => m.toLowerCase().includes("postepay")),
  );

  return (
    <KeywordLanding
      breadcrumb="Casinò Postepay"
      h1="Casinò e siti scommesse che accettano Postepay"
      intro={DESCRIPTION}
      faqs={FAQS}
      offerOperators={withPostepay.slice(0, 4)}
      offerTitle="Concessionari ADM che dichiarano Postepay tra i metodi accettati"
      offerSubtitle="Metodi rilevati dalle pagine pubbliche degli operatori: verifica sempre la sezione cassa del sito ufficiale."
    >
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Operatori che dichiarano Postepay</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-3">Operatore</th>
                <th className="py-2 pr-3">Concessione</th>
                <th className="py-2">Altri metodi dichiarati</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {withPostepay.map((op) => (
                <tr key={op.slug} className="border-b border-border/60">
                  <td className="py-2 pr-3 font-medium text-foreground">{op.name}</td>
                  <td className="py-2 pr-3 text-xs">{op.concessionN}</td>
                  <td className="py-2 text-xs">{op.paymentMethods.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Cosa controllare prima di usare Postepay</h2>
        <CheckList
          items={[
            "La carta deve essere intestata al titolare del conto di gioco: è un obbligo previsto dalla normativa ADM.",
            "Per ricevere prelievi serve in genere una Postepay Evolution dotata di IBAN.",
            "Alcuni operatori rimborsano prima l'importo depositato sullo stesso strumento e solo l'eccedenza su altro canale.",
            "I costi di ricarica e di bonifico dipendono dal contratto Postepay, non dal concessionario.",
            "La verifica dei documenti va completata prima del primo prelievo, qualunque metodo si usi.",
          ]}
        />
      </section>
    </KeywordLanding>
  );
}
