import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks } from "@/components/casino-ui";
import { sortedNews } from "@/data/news";
import { socialImageMeta } from "@/lib/social-image";

const CANONICAL = "https://www.guidacasino-italia.it/news";
const TITLE = "News Casinò Online ADM Oggi: Bonus, Slot e Novità (Settembre 2026)";
const DESCRIPTION =
  "Aggiornamenti informativi su casinò online ADM: nuove iniziative bonus, slot appena uscite, novità normative, metodi di pagamento e tornei. Solo +18.";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "news casino italia, notizie adm gioco online, aggiornamenti casino italiani 2026" },
      {
        name: "keywords",
        content:
          "news casino online, aggiornamenti adm, nuovi bonus casino, nuove slot online, normativa gioco online italia",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      ...socialImageMeta(),
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
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
          "@type": "ItemList",
          name: "News casinò e bonus",
          inLanguage: "it-IT",
          itemListElement: sortedNews.map((n, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.guidacasino-italia.it/news/${n.slug}`,
            name: n.h1,
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
            { "@type": "ListItem", position: 2, name: "News casinò", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-2.5 md:px-6 py-10 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / News casinò
        </nav>

        <header className="mt-4 border-b border-border pb-6">
          <p className="text-xs uppercase tracking-widest text-gold">Aggiornamenti informativi</p>
          <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">
            News casinò e bonus: aggiornamenti sui concessionari ADM
          </h1>
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground md:text-base">
            {DESCRIPTION}
          </p>
        </header>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {sortedNews.map((n) => (
            <article key={n.slug} className="rounded-xl border border-border bg-card p-3 md:p-5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-gold">
                  {n.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3 w-3" />
                  {new Date(n.date).toLocaleDateString("it-IT")}
                </span>
              </div>
              <h2 className="mt-2 font-serif text-base leading-snug md:text-xl">
                <Link to="/news/$slug" params={{ slug: n.slug }} className="hover:text-gold">
                  {n.h1}
                </Link>
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{n.summary}</p>
              <Link
                to="/news/$slug"
                params={{ slug: n.slug }}
                className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline"
              >
                Leggi l'aggiornamento <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
        <RelatedLinks />
      </div>
    </PageShell>
  );
}
