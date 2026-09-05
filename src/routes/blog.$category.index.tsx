import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks } from "@/components/casino-ui";
import { BlogSidebar, ExternalBlogButton } from "@/components/blog-ui";
import {
  articlesByCategory,
  blogBySlug,
  blogPath,
  categoryHubs,
  hubBySlug,
  readingMinutes,
  CATEGORY_SLUG,
} from "@/data/blog";
import { socialImageMeta } from "@/lib/social-image";

const SITE_URL = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/blog/$category/")({
  // Questo percorso a un segmento serve due scopi:
  //  1. hub di categoria (/blog/slot-online, /blog/bonus-casino, ...)
  //  2. redirect 301 permanente dai vecchi URL piatti /blog/<slug>
  beforeLoad: ({ params }) => {
    const legacy = blogBySlug.get(params.category);
    if (legacy) {
      throw redirect({
        to: "/blog/$category/$slug",
        params: { category: CATEGORY_SLUG[legacy.category], slug: legacy.slug },
        statusCode: 301,
      });
    }
    if (!hubBySlug.has(params.category)) throw notFound();
  },
  loader: ({ params }) => {
    const hub = hubBySlug.get(params.category);
    if (!hub) throw notFound();
    return { hub, articles: articlesByCategory(hub.category) };
  },
  head: ({ params, loaderData }) => {
    const hub = loaderData?.hub;
    if (!hub) {
      return { meta: [{ title: "Categoria non disponibile" }, { name: "robots", content: "noindex" }] };
    }
    const canonical = `${SITE_URL}/blog/${params.category}`;
    return {
      meta: [
        { title: hub.title },
        { name: "description", content: hub.description },
        { name: "robots", content: (loaderData?.articles.length ?? 0) >= 3 ? "index, follow, max-snippet:-1, max-image-preview:large" : "noindex, follow" },
        { property: "og:title", content: hub.title },
        ...socialImageMeta(),
        { property: "og:description", content: hub.description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "it_IT" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: hub.title },
        { name: "twitter:description", content: hub.description },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: hub.h1,
            description: hub.description,
            url: canonical,
            inLanguage: "it-IT",
            isPartOf: { "@type": "Blog", name: "Blog Guida Casinò Italia", url: `${SITE_URL}/blog` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: (loaderData?.articles ?? []).map((a, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: a.h1,
                url: `${SITE_URL}/blog/${params.category}/${a.slug}`,
              })),
            },
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
              { "@type": "ListItem", position: 3, name: hub.h1, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: CategoryHubPage,
});

function CategoryHubPage() {
  const { hub, articles } = Route.useLoaderData();
  const others = categoryHubs.filter((h) => h.slug !== hub.slug);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 py-10 md:px-6 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/blog" className="hover:text-gold">
            Blog
          </Link>{" "}
          / {hub.category}
        </nav>

        <header className="mt-4 border-b border-border pb-6">
          <p className="text-xs uppercase tracking-widest text-gold">Categoria</p>
          <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">{hub.h1}</h1>
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-muted-foreground md:text-base">
            {hub.intro}
          </p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <ul className="grid gap-4">
              {articles.map((a) => (
                <li key={a.slug} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {new Date(a.updated ?? a.date).toLocaleDateString("it-IT")}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {readingMinutes(a)} min
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-lg leading-snug">
                    <Link
                      to="/blog/$category/$slug"
                      params={blogPath(a)}
                      className="hover:text-gold"
                    >
                      {a.h1}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                  <Link
                    to="/blog/$category/$slug"
                    params={blogPath(a)}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold"
                  >
                    Leggi la guida completa <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>

            <section className="mt-10 rounded-xl border border-border bg-card p-5">
              <h2 className="font-serif text-lg">Altre categorie del blog</h2>
              <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                {others.map((h) => (
                  <li key={h.slug}>
                    <Link
                      to="/blog/$category"
                      params={{ category: h.slug }}
                      className="text-muted-foreground hover:text-gold"
                    >
                      {h.h1}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <ExternalBlogButton size="sm" />
              </div>
            </section>
          </div>

          <BlogSidebar />
        </div>
        <RelatedLinks />
      </div>
    </PageShell>
  );
}
