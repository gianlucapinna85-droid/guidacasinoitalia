import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks } from "@/components/casino-ui";
import { BlogSidebar, ExternalBlogButton } from "@/components/blog-ui";
import { sortedBlog, readingMinutes, blogPath, categoryHubs, CATEGORY_SLUG } from "@/data/blog";
import { socialImageMeta } from "@/lib/social-image";

const SITE_URL = "https://www.guidacasino-italia.it";
const CANONICAL = `${SITE_URL}/blog`;
const TITLE = "Blog Casinò e Scommesse: Guide Pratiche e Analisi Indipendenti 2026";
const DESCRIPTION =
  "Blog editoriale su slot, roulette, blackjack, live casino, RTP, bonus, pagamenti e sport: guide approfondite e analisi indipendenti. Solo +18.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "blog casino italia, approfondimenti scommesse adm, guide gioco online italia" },
      {
        name: "keywords",
        content:
          "blog casino online, guide slot online, guide roulette, blackjack strategia, rtp slot, bonus senza deposito, analisi serie a, approfondimenti scommesse",
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
          "@type": "Blog",
          name: "Blog Guida Casinò Italia",
          description: DESCRIPTION,
          url: CANONICAL,
          inLanguage: "it-IT",
          publisher: { "@type": "Organization", name: "Guida Casinò Italia", url: `${SITE_URL}/` },
          blogPost: sortedBlog.map((a) => ({
            "@type": "BlogPosting",
            headline: a.h1,
            description: a.description,
            datePublished: a.date,
            dateModified: a.updated ?? a.date,
            url: `${SITE_URL}/blog/${CATEGORY_SLUG[a.category]}/${a.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 py-10 md:px-6 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / Blog
        </nav>

        <header className="mt-4 border-b border-border pb-6">
          <p className="text-xs uppercase tracking-widest text-gold">Blog editoriale</p>
          <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">
            Blog casinò e sport: guide, analisi e approfondimenti
          </h1>
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-muted-foreground md:text-base">
            Articoli lunghi e verificabili su slot, giochi da tavolo, casinò live, RTP e volatilità,
            bonus, pagamenti e sicurezza, più una sezione sportiva dedicata all'analisi statistica.
            Contenuti informativi, non promozionali.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <ExternalBlogButton size="sm" />
            <Link
              to="/migliori-casino-online-adm"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs hover:border-gold/50"
            >
              Migliori casinò online ADM <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="flex flex-wrap gap-2">
              {categoryHubs.map((h) => (
                <Link
                  key={h.slug}
                  to="/blog/$category"
                  params={{ category: h.slug }}
                  className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-gold transition-colors hover:bg-gold/20"
                >
                  {h.category}
                </Link>
              ))}
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {sortedBlog.map((a) => (
                <li key={a.slug} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-gold">
                      {a.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {new Date(a.date).toLocaleDateString("it-IT")}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {readingMinutes(a)} min
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-lg leading-snug">
                    <Link to="/blog/$category/$slug" params={blogPath(a)} className="hover:text-gold">
                      {a.h1}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                  <Link
                    to="/blog/$category/$slug"
                    params={blogPath(a)}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold"
                  >
                    Leggi l'articolo <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <BlogSidebar />
        </div>
        <RelatedLinks />
      </div>
    </PageShell>
  );
}
