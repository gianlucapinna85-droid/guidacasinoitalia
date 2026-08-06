import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks } from "@/components/casino-ui";

export const SITE_URL = "https://guidacasino-italia.it";

export type GuideSection = {
  id: string;
  label: string;
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaq = { q: string; a: string };

export type GuideConfig = {
  path: string;
  title: string; // <title>
  h1: string;
  description: string;
  keywords: string;
  eyebrow?: string;
  breadcrumb: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
};

/** Head metadata + JSON-LD (Article, FAQPage, BreadcrumbList) per una guida. */
export function guideHead(cfg: GuideConfig) {
  const canonical = `${SITE_URL}${cfg.path}`;
  return {
    meta: [
      { title: cfg.title },
      { name: "description", content: cfg.description },
      { name: "keywords", content: cfg.keywords },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: cfg.title },
      { property: "og:description", content: cfg.description },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: cfg.title },
      { name: "twitter:description", content: cfg.description },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: cfg.h1,
          description: cfg.description,
          inLanguage: "it-IT",
          mainEntityOfPage: canonical,
          author: { "@type": "Organization", name: "GuidaCasinò.IT" },
          publisher: { "@type": "Organization", name: "GuidaCasinò.IT" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "it-IT",
          mainEntity: cfg.faqs.map((f) => ({
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
            { "@type": "ListItem", position: 2, name: cfg.breadcrumb, item: canonical },
          ],
        }),
      },
    ],
  };
}

export function GuideArticle({ cfg, children }: { cfg: GuideConfig; children?: ReactNode }) {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / {cfg.breadcrumb}
        </nav>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-gold">
            {cfg.eyebrow ?? "Guida informativa 2026"}
          </p>
          <h1 className="mt-2 font-serif text-3xl leading-tight md:text-5xl">{cfg.h1}</h1>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">{cfg.description}</p>
        </header>

        <nav className="mt-8 rounded-xl border border-border bg-card p-5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Indice</p>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            {cfg.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="hover:text-gold">
                Domande frequenti
              </a>
            </li>
          </ul>
        </nav>

        {cfg.sections.map((s) => (
          <section key={s.id} id={s.id} className="mt-12">
            <h2 className="font-serif text-2xl">{s.h2}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {s.bullets ? (
              <ul className="mt-4 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {children}

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl">Domande frequenti</h2>
          <div className="mt-6 space-y-4">
            {cfg.faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
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
