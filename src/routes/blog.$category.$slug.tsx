import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { CalendarDays, Clock, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks, RelatedProjectBox } from "@/components/casino-ui";
import { FaqSlider } from "@/components/faq-slider";
import { BlogSidebar, ExternalBlogButton } from "@/components/blog-ui";
import { withInternalLinks, newLinkBudget, PRONOSTICI_URL } from "@/lib/internal-links";
import {
  blogBySlug,
  relatedArticles,
  readingMinutes,
  blogPath,
  CATEGORY_SLUG,
  hubBySlug,
  type BlogArticle,
} from "@/data/blog";
import { socialImageMeta } from "@/lib/social-image";

const SITE_URL = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/blog/$category/$slug")({
  // Un solo URL canonico per articolo: se la categoria nel percorso non
  // corrisponde a quella dell'articolo si reindirizza 301 a quella corretta.
  beforeLoad: ({ params }) => {
    const article = blogBySlug.get(params.slug);
    if (!article) throw notFound();
    const canonicalCategory = CATEGORY_SLUG[article.category];
    if (params.category !== canonicalCategory) {
      throw redirect({
        to: "/blog/$category/$slug",
        params: { category: canonicalCategory, slug: article.slug },
        statusCode: 301,
      });
    }
  },
  loader: ({ params }) => {
    const article = blogBySlug.get(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const canonical = `${SITE_URL}/blog/${params.category}/${params.slug}`;
    const a = loaderData?.article as BlogArticle | undefined;
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
        { property: "article:modified_time", content: a.updated ?? a.date },
        { property: "article:section", content: a.category },
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
            dateModified: a.updated ?? a.date,
            articleSection: a.category,
            keywords: a.keywords,
            mainEntityOfPage: canonical,
            author: { "@type": "Organization", name: "Guida Casinò Italia", url: `${SITE_URL}/` },
            publisher: { "@type": "Organization", name: "Guida Casinò Italia", url: `${SITE_URL}/` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "it-IT",
            mainEntity: a.faqs.map((f) => ({
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
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: hubBySlug.get(params.category)?.h1 ?? a.category,
                item: `${SITE_URL}/blog/${params.category}`,
              },
              { "@type": "ListItem", position: 4, name: a.h1, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const article = Route.useLoaderData().article as BlogArticle;
  const budget = newLinkBudget();
  const related = relatedArticles(article, 6);

  return (
    <PageShell>
      <div className="mx-auto grid max-w-6xl gap-8 px-2.5 py-10 md:px-6 md:py-16 lg:grid-cols-[1fr_320px]">
        <article>
          <nav className="text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/blog" className="hover:text-gold">
              Blog
            </Link>{" "}
            /{" "}
            <Link
              to="/blog/$category"
              params={{ category: CATEGORY_SLUG[article.category] }}
              className="hover:text-gold"
            >
              {article.category}
            </Link>
          </nav>

          <header className="mt-4 border-b border-border pb-6">
            <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-gold">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                {new Date(article.updated ?? article.date).toLocaleDateString("it-IT")}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingMinutes(article)} min di lettura
              </span>
            </div>
            <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">{article.h1}</h1>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground md:text-base">
              {article.summary}
            </p>
          </header>

          <nav className="mt-6 rounded-xl border border-border bg-card p-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Indice</p>
            <ul className="mt-2 grid gap-1.5 text-sm md:grid-cols-2">
              {article.sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#s${i + 1}`} className="text-muted-foreground hover:text-gold">
                    {s.h2}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-gold">
                  Domande frequenti
                </a>
              </li>
            </ul>
          </nav>

          {article.sections.map((s, i) => (
            <section key={s.h2} id={`s${i + 1}`} className="mt-9">
              <h2 className="font-serif text-xl md:text-2xl">{s.h2}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {withInternalLinks(p, budget)}
                </p>
              ))}
              {s.bullets ? (
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{withInternalLinks(b, budget)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.subsections?.map((sub) => (
                <div key={sub.h3} className="mt-6 border-l-2 border-gold/30 pl-4">
                  <h3 className="font-serif text-lg">{sub.h3}</h3>
                  {sub.paragraphs.map((p) => (
                    <p key={p} className="mt-2 leading-relaxed text-muted-foreground">
                      {withInternalLinks(p, budget)}
                    </p>
                  ))}
                  {sub.bullets ? (
                    <ul className="mt-2 space-y-2">
                      {sub.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{withInternalLinks(b, budget)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </section>
          ))}

          {article.category === "Sport" ? (
            <section className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="font-serif text-lg">Analisi e statistiche sul calcio</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Per vedere le schedine gratuite, le selezioni VIP e le analisi aggiornate delle
                partite visita{" "}
                <a
                  href={PRONOSTICI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold underline underline-offset-2"
                >
                  Pronostici Vincenti
                </a>
                .
              </p>
            </section>
          ) : null}

          <FaqSlider items={article.faqs} title="Domande frequenti" />

          <section className="mt-10 rounded-xl border border-border bg-card p-5">
            <h2 className="font-serif text-lg">Continua a leggere</h2>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/blog/$category/$slug"
                    params={blogPath(r)}
                    className="text-muted-foreground hover:text-gold"
                  >
                    {r.h1}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ExternalBlogButton size="sm" />
            </div>
          </section>

          <RelatedProjectBox className="mt-10" />
          <RelatedLinks />

          <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Vietato ai minori di 18 anni.
            Il gioco può causare dipendenza patologica. Telefono Verde ISS 800 558822.
          </p>
        </article>

        <BlogSidebar currentSlug={article.slug} />
      </div>
    </PageShell>
  );
}
