import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks } from "@/components/casino-ui";
import { ReadMore } from "@/components/read-more";
import { newsBySlug, sortedNews, type NewsArticle } from "@/data/news";
import { socialImageMeta } from "@/lib/social-image";

const SITE_URL = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = newsBySlug.get(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const canonical = `${SITE_URL}/news/${params.slug}`;
    const a = loaderData?.article as NewsArticle | undefined;
    if (!a) {
      return { meta: [{ title: "Articolo non disponibile" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: a.title },
        { name: "description", content: a.description },
        { name: "keywords", content: a.keywords },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
        { property: "og:title", content: a.title },
        ...socialImageMeta(),
        { property: "og:description", content: a.description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "it_IT" },
        { property: "article:published_time", content: a.date },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.h1,
            description: a.description,
            inLanguage: "it-IT",
            datePublished: a.date,
            dateModified: a.date,
            articleSection: a.category,
            mainEntityOfPage: canonical,
            author: { "@type": "Organization", name: "GuidaCasinò.IT" },
            publisher: { "@type": "Organization", name: "GuidaCasinò.IT" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "News casinò", item: `${SITE_URL}/news` },
              { "@type": "ListItem", position: 3, name: a.h1, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: NewsDetail,
});

function NewsDetail() {
  const article = Route.useLoaderData().article as NewsArticle;
  const others = sortedNews.filter((n) => n.slug !== article.slug).slice(0, 4);

  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 md:px-6 py-10 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/news" className="hover:text-gold">
            News
          </Link>{" "}
          / {article.category}
        </nav>

        <header className="mt-4 border-b border-border pb-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-gold">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              {new Date(article.date).toLocaleDateString("it-IT")}
            </span>
          </div>
          <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">{article.h1}</h1>
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground md:text-base">
            {article.description}
          </p>
        </header>

        {article.sections.map((s) => (
          <section key={s.h2} className="mt-8">
            <h2 className="font-serif text-xl md:text-2xl">{s.h2}</h2>
            <ReadMore collapsedHeight="5.5rem" className="mt-1">
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.bullets ? (
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </ReadMore>
          </section>
        ))}

        <section className="mt-10 rounded-xl border border-border bg-card p-5">
          <h2 className="font-serif text-lg">Altri aggiornamenti</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {others.map((n) => (
              <li key={n.slug}>
                <Link to="/news/$slug" params={{ slug: n.slug }} className="hover:text-gold">
                  {n.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <RelatedLinks />

        <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Vietato ai minori di 18 anni. Il
          gioco può causare dipendenza patologica. Telefono Verde ISS 800 558822.
        </p>
      </article>
    </PageShell>
  );
}
