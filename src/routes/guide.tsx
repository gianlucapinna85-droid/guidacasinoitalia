import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { guides } from "@/data/guides";

const SITE = "https://www.guidacasino-italia.it";
const TITLE = "Tutte le guide casinò e scommesse ADM 2026 | GuidaCasinò.IT";
const DESCRIPTION =
  "Indice completo delle guide di GuidaCasinò.IT: bonus senza deposito, slot, pagamenti, prelievi, scommesse sportive e sicurezza sui concessionari ADM.";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "guide casino online italia, guide scommesse adm, casino online lazio, casino online campania, casino online lombardia, guide bonus senza deposito italia" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE}/guide` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/guide` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          url: `${SITE}/guide`,
          hasPart: guides.map((g) => ({
            "@type": "Article",
            headline: g.title,
            description: g.description,
            url: `${SITE}${g.path}`,
          })),
        }),
      },
    ],
  }),
  component: GuideIndexPage,
});

function GuideIndexPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 py-8 md:px-6 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / Guide
        </nav>

        <header className="mt-4 border-b border-border pb-6">
          <p className="text-xs uppercase tracking-widest text-gold">Indice completo</p>
          <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">
            Tutte le guide su casinò e scommesse ADM
          </h1>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {guides.length} guide editoriali scritte dalla redazione: bonus, giochi, pagamenti,
            prelievi, sicurezza e scommesse sportive sui concessionari con licenza italiana.
          </p>
        </header>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.path} className="rounded-xl border border-border bg-card p-4">
              <Link
                to={g.path}
                className="inline-flex items-center gap-1 font-medium hover:text-gold"
              >
                {g.title} <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{g.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Contenuto informativo ai sensi dell&apos;art. 9 D.L. 87/2018. Vietato ai minori di 18
          anni. Il gioco può causare dipendenza patologica: numero verde 800 558822.
        </p>
      </article>
    </PageShell>
  );
}
