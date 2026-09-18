import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, CheckCircle2, Cookie, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";

const SITE = "https://www.guidacasino-italia.it";
const TITLE = "Assistente GuidaCasinò: cos’è e come funziona | GuidaCasinò.IT";
const DESCRIPTION =
  "Scopri l’assistente interattivo di GuidaCasinò.IT: cosa fa, perché è stato introdotto, come tutela la privacy e quali sono i suoi limiti.";

export const Route = createFileRoute("/assistente-guida-casino")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE}/assistente-guida-casino` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE}/assistente-guida-casino` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Assistente GuidaCasinò: cos’è, cosa fa e perché lo abbiamo introdotto",
          description: DESCRIPTION,
          inLanguage: "it-IT",
          author: { "@type": "Person", name: "Gianluca Pinna" },
          publisher: {
            "@type": "Organization",
            name: "GuidaCasinò.IT",
            url: SITE,
          },
          mainEntityOfPage: `${SITE}/assistente-guida-casino`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            {
              "@type": "ListItem",
              position: 2,
              name: "Assistente GuidaCasinò",
              item: `${SITE}/assistente-guida-casino`,
            },
          ],
        }),
      },
    ],
  }),
  component: AssistenteGuidaCasinoPage,
});

const FEATURES = [
  {
    icon: MessageCircleQuestion,
    title: "Risposte più immediate",
    text: "Permette di fare domande in linguaggio semplice senza dover cercare manualmente tra tutte le pagine del sito.",
  },
  {
    icon: ShieldCheck,
    title: "Contesto italiano",
    text: "È configurato per GuidaCasinò.IT, in italiano, con attenzione agli operatori autorizzati ADM e al gioco responsabile.",
  },
  {
    icon: Cookie,
    title: "Scelta sulla privacy",
    text: "Il servizio esterno viene caricato soltanto dopo il consenso ai cookie di marketing, revocabile in qualsiasi momento.",
  },
];

function AssistenteGuidaCasinoPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 py-10 md:px-6 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">Home</Link> / Assistente GuidaCasinò
        </nav>

        <header className="mt-5 border-b border-border pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-gold/10 text-gold">
            <Bot className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gold">Nuovo servizio interattivo</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight md:text-5xl">
            Assistente GuidaCasinò: cos’è e perché lo abbiamo creato
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            È il pulsante circolare che trovi sul lato destro del sito. Apre uno spazio di conversazione
            pensato per rendere più semplice e veloce la consultazione dei contenuti di GuidaCasinò.IT.
          </p>
        </header>

        <section className="py-9">
          <h2 className="font-serif text-2xl md:text-3xl">Cosa può fare</h2>
          <p className="mt-3 text-muted-foreground">
            L’assistente aiuta a orientarsi tra informazioni su casinò online, giochi, operatori e temi
            collegati. Puoi usarlo per porre una domanda, approfondire un argomento o trovare più
            rapidamente un contenuto utile. Le risposte hanno finalità esclusivamente informative.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-border bg-card p-5">
                <feature.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border py-9">
          <h2 className="font-serif text-2xl md:text-3xl">Perché lo abbiamo introdotto</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground md:text-base">
            {[
              "Ridurre il tempo necessario per trovare una risposta tra guide, recensioni e approfondimenti.",
              "Offrire un accesso più semplice ai contenuti anche da telefono.",
              "Aiutare i lettori a comprendere termini tecnici e regole del settore italiano.",
              "Rendere più visibili i messaggi su maggiore età, concessione ADM e gioco responsabile.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-9">
          <h2 className="font-serif text-2xl md:text-3xl">Limiti e uso responsabile</h2>
          <p className="mt-3 text-muted-foreground">
            L’assistente non accetta giocate, non garantisce vincite e non sostituisce le fonti ufficiali,
            i termini degli operatori o il parere di un professionista. Le risposte automatiche possono
            contenere inesattezze: prima di prendere decisioni verifica sempre le informazioni su ADM e
            sui siti ufficiali dei concessionari.
          </p>
          <div className="mt-6 rounded-lg border border-warning/40 bg-warning/10 p-5">
            <p className="text-sm font-semibold text-warning">Servizio riservato ai maggiorenni</p>
            <p className="mt-2 text-sm text-foreground/90">
              Il gioco può causare dipendenza patologica. Se senti di perdere il controllo, consulta la
              nostra pagina sul gioco responsabile o chiama gratuitamente il numero 800 558822.
            </p>
            <Link to="/gioco-responsabile" className="mt-4 inline-flex text-sm font-semibold text-gold hover:underline">
              Strumenti e contatti per il gioco responsabile →
            </Link>
          </div>
        </section>

        <section className="border-t border-border pt-9">
          <h2 className="font-serif text-2xl md:text-3xl">Privacy e controllo</h2>
          <p className="mt-3 text-muted-foreground">
            Il widget è fornito da un servizio esterno e non viene caricato prima del consenso ai cookie
            di marketing. Puoi modificare la scelta in ogni momento tramite “Gestisci cookie” nel piè di
            pagina. Evita di inserire nella conversazione dati personali, documenti o informazioni di pagamento.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("gc:open-cookie-preferences"))}
              className="gc-btn-secondary px-4 py-2.5 text-sm"
            >
              Gestisci cookie
            </button>
            <Link to="/privacy" className="gc-btn-secondary px-4 py-2.5 text-sm">
              Leggi la privacy
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}