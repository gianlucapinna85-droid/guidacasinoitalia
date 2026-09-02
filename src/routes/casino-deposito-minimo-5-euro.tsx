import { createFileRoute } from "@tanstack/react-router";
import { KeywordLanding, CheckList, type LandingFaq } from "@/components/keyword-landing";
import { socialImageMeta } from "@/lib/social-image";
import { sortedOperators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";

const CANONICAL = "https://www.guidacasino-italia.it/casino-deposito-minimo-5-euro";
const TITLE = "Casinò con deposito minimo 5 euro: concessionari ADM 2026";
const DESCRIPTION =
  "Casinò online ADM con deposito minimo basso: importi minimi dichiarati, prelievo minimo, metodi accettati e come impostare i limiti di spesa. Contenuto +18.";

const FAQS: LandingFaq[] = [
  {
    q: "Esistono casinò ADM con deposito minimo di 5 euro?",
    a: "Sì, diversi concessionari dichiarano un deposito minimo di 5 o 10 euro a seconda del metodo di pagamento scelto. L'importo minimo può cambiare tra carta, bonifico e wallet: è indicato nella sezione cassa dell'operatore.",
  },
  {
    q: "Il deposito minimo cambia in base al metodo di pagamento?",
    a: "Spesso sì. Bonifico e alcuni wallet possono avere soglie superiori rispetto alle carte. Le soglie aggiornate sono pubblicate nella pagina dei metodi di pagamento del concessionario.",
  },
  {
    q: "Con 5 euro si può ottenere il bonus di benvenuto?",
    a: "Dipende dai Termini e Condizioni: molti bonus richiedono un deposito qualificante superiore al minimo di cassa. Verifica sempre l'importo minimo richiesto dall'offerta prima di depositare.",
  },
  {
    q: "Qual è il prelievo minimo?",
    a: "Il prelievo minimo è indipendente dal deposito minimo e in genere si attesta intorno ai 10 euro. Il dato dichiarato dai concessionari analizzati è riportato nella tabella di questa pagina.",
  },
  {
    q: "Depositare poco riduce il rischio?",
    a: "Depositi contenuti aiutano a mantenere il controllo della spesa, ma lo strumento più efficace resta il limite di deposito impostabile nell'area conto, previsto dalla normativa ADM.",
  },
];

export const Route = createFileRoute("/casino-deposito-minimo-5-euro")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "casino deposito minimo 5 euro, casino deposito 1 euro, casino deposito minimo basso, deposito minimo casino adm, casino online 5 euro",
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
            { "@type": "ListItem", position: 2, name: "Deposito minimo 5 euro", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const rows = sortedOperators
    .map((op) => ({ op, meta: getCasinoMeta(op.slug) }))
    .filter((r) => r.meta);

  return (
    <KeywordLanding
      breadcrumb="Deposito minimo 5 euro"
      h1="Casinò con deposito minimo 5 euro: importi dichiarati dai concessionari ADM"
      intro={DESCRIPTION}
      faqs={FAQS}
      offerOperators={sortedOperators.slice(0, 4)}
      offerTitle="Concessionari ADM con soglie di deposito contenute"
      offerSubtitle="Importi dichiarati dagli operatori: verifica sempre la soglia aggiornata nella sezione cassa del sito ufficiale."
    >
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Depositi e prelievi minimi dichiarati</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-3">Operatore</th>
                <th className="py-2 pr-3">Deposito min.</th>
                <th className="py-2 pr-3">Prelievo min.</th>
                <th className="py-2">Concessione</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {rows.map(({ op, meta }) => (
                <tr key={op.slug} className="border-b border-border/60">
                  <td className="py-2 pr-3 font-medium text-foreground">{op.name}</td>
                  <td className="py-2 pr-3">{meta?.minDeposit ?? "n.d."}</td>
                  <td className="py-2 pr-3">{meta?.minWithdrawal ?? "n.d."}</td>
                  <td className="py-2 text-xs">{op.concessionN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Cosa controllare prima di un deposito basso</h2>
        <CheckList
          items={[
            "La soglia minima può variare per metodo di pagamento: carte e wallet spesso hanno il minimo più basso.",
            "Il deposito qualificante richiesto dal bonus può essere superiore al minimo di cassa.",
            "Alcuni metodi prevedono commissioni fisse che incidono molto su importi piccoli.",
            "Il prelievo minimo resta indipendente: con saldi bassi potresti non raggiungerlo subito.",
            "Imposta il limite di deposito nell'area conto prima di iniziare: è uno strumento previsto dalla normativa ADM.",
          ]}
        />
      </section>
    </KeywordLanding>
  );
}
