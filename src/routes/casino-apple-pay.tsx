import { createFileRoute } from "@tanstack/react-router";
import { KeywordLanding, CheckList, type LandingFaq } from "@/components/keyword-landing";
import { socialImageMeta } from "@/lib/social-image";
import { sortedOperators } from "@/lib/operators";

const CANONICAL = "https://www.guidacasino-italia.it/casino-apple-pay";
const TITLE = "Casinò Apple Pay: come depositare dal telefono su siti ADM 2026";
const DESCRIPTION =
  "Apple Pay sui casinò online con concessione ADM: come funziona il deposito da iPhone, tempi, commissioni e perché il prelievo segue un canale diverso. +18.";

const FAQS: LandingFaq[] = [
  {
    q: "I casinò ADM accettano Apple Pay?",
    a: "Apple Pay è disponibile su una parte dei concessionari ADM, in genere all'interno dell'app o del sito mobile aperto con Safari su iPhone. La disponibilità è indicata nella sezione cassa dell'operatore.",
  },
  {
    q: "Si può prelevare con Apple Pay?",
    a: "No. Apple Pay è un sistema di pagamento in uscita: i prelievi vengono accreditati sulla carta collegata, su bonifico o sul wallet indicato nell'area conto, sempre con la stessa intestazione del conto di gioco.",
  },
  {
    q: "Apple Pay applica commissioni?",
    a: "Apple non applica costi all'utente. Eventuali commissioni dipendono dalla carta collegata o dalle condizioni pubblicate dal concessionario nei Termini e Condizioni.",
  },
  {
    q: "Il deposito con Apple Pay è immediato?",
    a: "Sì, l'accredito sul conto di gioco è in genere immediato, come per le carte. La conferma avviene con Face ID, Touch ID o codice del dispositivo.",
  },
  {
    q: "Serve comunque la verifica dei documenti?",
    a: "Sì. La verifica dell'identità è obbligatoria per legge su tutti i concessionari ADM prima di poter prelevare, qualunque sia il metodo di deposito usato.",
  },
];

export const Route = createFileRoute("/casino-apple-pay")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "casino apple pay, casino online apple pay, deposito apple pay casino, casino adm apple pay, pagamenti mobile casino",
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
            { "@type": "ListItem", position: 2, name: "Casinò Apple Pay", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <KeywordLanding
      breadcrumb="Casinò Apple Pay"
      h1="Casinò Apple Pay: depositi da iPhone sui concessionari ADM"
      intro={DESCRIPTION}
      faqs={FAQS}
      offerOperators={sortedOperators.slice(0, 4)}
      offerTitle="Concessionari ADM con app e cassa mobile"
      offerSubtitle="La disponibilità di Apple Pay va confermata nella sezione cassa dell'operatore: i metodi possono variare nel tempo."
    >
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Come si deposita con Apple Pay</h2>
        <CheckList
          items={[
            "Apri la sezione cassa dell'app o del sito mobile del concessionario da iPhone o iPad.",
            "Seleziona Apple Pay tra i metodi disponibili e scegli la carta collegata al Wallet.",
            "Conferma con Face ID, Touch ID o codice del dispositivo: l'accredito è in genere immediato.",
            "Per il prelievo scegli carta, bonifico o wallet intestati alla stessa persona del conto di gioco.",
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Perché Apple Pay non serve per i prelievi</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Apple Pay non è un conto che riceve denaro: è un livello di sicurezza che sostituisce il
          numero della carta con un token monouso. Per questo i concessionari ADM accreditano le
          vincite sulla carta collegata o su un altro strumento indicato nell'area conto. La
          normativa antiriciclaggio impone che lo strumento di prelievo sia intestato al titolare del
          conto di gioco, senza eccezioni.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Vantaggi e limiti rispetto ad altri metodi</h2>
        <CheckList
          items={[
            "I dati della carta non vengono comunicati all'operatore: viene trasmesso solo un token.",
            "Nessun inserimento manuale dei dati: utile sulle app mobile.",
            "Non consente prelievi diretti, a differenza di PayPal o Skrill.",
            "Non è disponibile su Android: in quel caso i concessionari propongono altri wallet o carte.",
          ]}
        />
      </section>
    </KeywordLanding>
  );
}
