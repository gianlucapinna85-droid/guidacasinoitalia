import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { AUTHOR, SITE_URL, authorSchema } from "@/lib/author";

const CANONICAL = `${SITE_URL}/autore/${AUTHOR.slug}`;

export const Route = createFileRoute("/autore/$slug")({
  loader: ({ params }) => {
    if (params.slug !== AUTHOR.slug) throw notFound();
    return null;
  },
  head: () => ({
    meta: [
      { title: `${AUTHOR.name} — autore e revisore | Guida Casinò Italia` },
      {
        name: "description",
        content: `${AUTHOR.name}, ${AUTHOR.role}: chi scrive e verifica guide, news e recensioni sui casinò online con concessione ADM.`,
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: `${AUTHOR.name} — autore e revisore` },
      {
        property: "og:description",
        content: `Chi scrive e verifica i contenuti di Guida Casinò Italia: ${AUTHOR.role}.`,
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: AUTHOR.photoAbsolute },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: AUTHOR.photoAbsolute },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          ...authorSchema(),
          description: AUTHOR.bio,
          worksFor: { "@type": "Organization", name: "Guida Casinò Italia", url: `${SITE_URL}/` },
        }),
      },
    ],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-2.5 py-12 md:px-6 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / Autore
        </nav>

        <header className="mt-6 flex flex-col items-start gap-5 border-b border-border pb-8 sm:flex-row sm:items-center">
          <img
            src={AUTHOR.photo}
            alt={`Foto di ${AUTHOR.name}, ${AUTHOR.role}`}
            width={120}
            height={120}
            className="h-28 w-28 rounded-full border-2 border-gold/50 object-cover"
          />
          <div>
            <h1 className="font-serif text-3xl leading-tight md:text-4xl">{AUTHOR.name}</h1>
            <p className="mt-1 text-sm text-gold">{AUTHOR.role}</p>
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <BadgeCheck className="h-3.5 w-3.5 text-gold" />
              Contenuti verificati sulle fonti ufficiali indicate nelle singole pagine
            </p>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="font-serif text-2xl">Chi sono</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{AUTHOR.bio}</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ogni contenuto pubblicato su Guida Casinò Italia è scritto e rivisto personalmente:
            nessun testo viene pubblicato senza un controllo diretto delle fonti ufficiali dei
            concessionari e dell'elenco pubblico dell'Agenzia delle Dogane e dei Monopoli.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl">Come verifico i contenuti</h2>
          <ul className="mt-3 space-y-2.5 text-sm text-foreground/90">
            {[
              "Controllo di concessione ADM, ragione sociale e dominio nell'elenco ufficiale",
              "Lettura diretta di FAQ, termini e condizioni pubblicati dal concessionario",
              "Verifica di metodi, minimi e tempi di prelievo dichiarati, con data di rilevazione",
              "Aggiornamento della data di verifica a ogni revisione del contenuto",
              "Nessun link tracciato di affiliazione: i pulsanti puntano ai siti ufficiali",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl">Dove trovi i miei contenuti</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <Link to="/blog" className="rounded-full border border-border px-3 py-1.5 hover:border-gold/50">
              Blog
            </Link>
            <Link to="/news" className="rounded-full border border-border px-3 py-1.5 hover:border-gold/50">
              News
            </Link>
            <Link
              to="/come-valutiamo-i-casino"
              className="rounded-full border border-border px-3 py-1.5 hover:border-gold/50"
            >
              Metodologia di valutazione
            </Link>
          </div>
        </section>

        <p className="mt-10 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Vietato ai minori di 18 anni. Il
          gioco può causare dipendenza patologica. Telefono Verde ISS 800 558822.
        </p>
      </article>
    </PageShell>
  );
}
