import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { KeywordLanding, CheckList, type LandingFaq } from "@/components/keyword-landing";
import { socialImageMeta } from "@/lib/social-image";
import { operators, sortedOperators } from "@/lib/operators";
import { getOperatorBonus, BONUS_NOTE, BONUS_LAST_CHECK } from "@/data/bonuses";

const CANONICAL = "https://www.guidacasino-italia.it/bonus-casino-ufficiali";
const TITLE = "Bonus casinò ufficiali ADM: con e senza deposito 2026";
const DESCRIPTION =
  "Bonus di benvenuto dichiarati dai concessionari ADM: importi con deposito e senza deposito, condizioni di accredito e link alla pagina ufficiale. +18.";

const FAQS: LandingFaq[] = [
  {
    q: "Da dove provengono gli importi indicati in questa pagina?",
    a: `Dalle pagine promozionali pubblicate sui domini ufficiali dei concessionari, con ultimo controllo a ${BONUS_LAST_CHECK}. Quando un operatore non pubblica l'importo in forma verificabile riportiamo "dato non disponibile" e rimandiamo al suo sito.`,
  },
  {
    q: "Che differenza c'è tra bonus con deposito e senza deposito?",
    a: "Il bonus senza deposito viene accreditato dopo la registrazione e la verifica dell'identità, senza versare denaro. Il bonus con deposito richiede una prima ricarica di importo minimo indicato dall'operatore e viene calcolato in percentuale su di essa.",
  },
  {
    q: "Perché molti bonus sono indicati come «fino a»?",
    a: "Perché l'importo pubblicato è il massimale teorico della promozione, raggiungibile solo rispettando l'intero schema di depositi e di giocato previsto dai Termini e Condizioni. Non è una somma garantita.",
  },
  {
    q: "Cosa sono i requisiti di puntata?",
    a: "Sono il volume di gioco richiesto prima di poter convertire il bonus in saldo prelevabile. Sono indicati nei T&C dell'operatore insieme a scadenze, giochi validi e metodi di pagamento esclusi.",
  },
  {
    q: "I bonus cambiano spesso?",
    a: "Sì. Le promozioni dei concessionari hanno scadenze frequenti, spesso mensili. Prima di registrarti verifica sempre l'importo aggiornato sulla pagina ufficiale linkata in tabella.",
  },
];

export const Route = createFileRoute("/bonus-casino-ufficiali")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "bonus casino ufficiali, bonus benvenuto casino adm, bonus senza deposito casino, bonus primo deposito casino, bonus casino 2026",
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
            { "@type": "ListItem", position: 2, name: "Bonus ufficiali", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const rows = operators.map((op) => ({ op, bonus: getOperatorBonus(op.slug) }));

  return (
    <KeywordLanding
      breadcrumb="Bonus ufficiali"
      h1="Bonus casinò ufficiali: con deposito e senza deposito"
      intro={DESCRIPTION}
      faqs={FAQS}
      offerOperators={sortedOperators.slice(0, 4)}
      offerTitle="Bonus dichiarati dai concessionari ADM"
      offerSubtitle="Importi pubblicati dagli operatori sulle proprie pagine promozionali ufficiali."
    >
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Tabella completa dei bonus dichiarati</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-3">Operatore</th>
                <th className="py-2 pr-3">Senza deposito</th>
                <th className="py-2 pr-3">Con deposito</th>
                <th className="py-2">Fonte ufficiale</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground align-top">
              {rows.map(({ op, bonus }) => (
                <tr key={op.slug} className="border-b border-border/60">
                  <td className="py-3 pr-3">
                    <Link
                      to="/operatori/$slug"
                      params={{ slug: op.slug }}
                      className="font-medium text-foreground hover:text-gold"
                    >
                      {op.name}
                    </Link>
                    <span className="block text-[11px]">{op.concessionN}</span>
                  </td>
                  <td className="py-3 pr-3">
                    {bonus?.noDeposit ? (
                      <>
                        <span className="font-semibold text-gold">{bonus.noDeposit.amount}</span>
                        <span className="block text-[11px]">{bonus.noDeposit.condition}</span>
                      </>
                    ) : (
                      "dato non disponibile"
                    )}
                  </td>
                  <td className="py-3 pr-3">
                    {bonus?.deposit ? (
                      <>
                        <span className="font-medium text-foreground">{bonus.deposit.amount}</span>
                        <span className="block text-[11px]">{bonus.deposit.condition}</span>
                      </>
                    ) : (
                      "dato non disponibile"
                    )}
                  </td>
                  <td className="py-3">
                    {bonus ? (
                      <a
                        href={bonus.source}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs underline hover:text-gold"
                      >
                        Pagina ufficiale <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] leading-snug text-muted-foreground">{BONUS_NOTE}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Come leggere un bonus prima di attivarlo</h2>
        <CheckList
          items={[
            "Controlla il deposito minimo qualificante: spesso è superiore al minimo di cassa.",
            "Verifica il requisito di puntata e quali giochi contribuiscono a soddisfarlo.",
            "Guarda la scadenza: molti bonus decadono entro 7, 14 o 30 giorni dall'accredito.",
            "Alcuni metodi di pagamento (tipicamente il bonifico) sono esclusi dalle offerte.",
            "Il bonus senza deposito richiede quasi sempre la verifica del documento o SPID.",
            "Imposta i limiti di deposito nell'area conto prima di accettare qualsiasi promozione.",
          ]}
        />
      </section>
    </KeywordLanding>
  );
}
