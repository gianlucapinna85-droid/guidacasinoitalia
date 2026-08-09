import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks, RelatedProjectBox } from "@/components/casino-ui";
import { ReadMore } from "@/components/read-more";
import { FaqSlider } from "@/components/faq-slider";



export const SITE_URL = "https://www.guidacasino-italia.it";

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

/** Come guideHead, con in più lo schema WebPage (per le landing SEO tematiche). */
export function guideHeadWithWebPage(cfg: GuideConfig) {
  const base = guideHead(cfg);
  const canonical = `${SITE_URL}${cfg.path}`;
  return {
    ...base,
    scripts: [
      ...base.scripts,
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: cfg.h1,
          headline: cfg.h1,
          description: cfg.description,
          url: canonical,
          inLanguage: "it-IT",
          isPartOf: {
            "@type": "WebSite",
            name: "Guida Casinò Italia",
            url: `${SITE_URL}/`,
          },
          publisher: { "@type": "Organization", name: "Guida Casinò Italia", url: `${SITE_URL}/` },
        }),
      },
    ],
  };
}

/** Tabella comparativa riutilizzabile nelle landing SEO. */
export function SeoTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl">{caption}</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-card">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-3 py-2.5 text-[11px] uppercase tracking-wider text-gold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.join("|")} className="border-t border-border">
                {r.map((c, i) => (
                  <td key={i} className="px-3 py-2.5 text-muted-foreground">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/** Blocco vantaggi / svantaggi. */
export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl text-gold">Vantaggi</h2>
        <ul className="mt-3 space-y-2 text-sm text-foreground/90">
          {pros.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Svantaggi e limiti</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {cons.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Link interni verso home e comparatore. */
export function InternalCtaLinks() {
  return (
    <section className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-5">
      <h2 className="font-serif text-xl">Continua su Guida Casinò Italia</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Guida Casinò Italia confronta i casino online ADM più affidabili con schede aggiornate,
        recensioni complete e guide informative.
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        <Link
          to="/"
          className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-gold hover:bg-gold/20"
        >
          Home Guida Casinò Italia
        </Link>
        <Link
          to="/"
          hash="comparatore"
          className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-gold hover:bg-gold/20"
        >
          Comparatore casinò ADM
        </Link>
        <Link
          to="/migliori-casino-online"
          className="rounded-full border border-border px-3 py-1.5 hover:border-gold/50"
        >
          Migliori casinò online
        </Link>
      </div>
    </section>
  );
}

export function GuideArticle({ cfg, children }: { cfg: GuideConfig; children?: ReactNode }) {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 md:px-6 py-12 md:py-16">
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
          <section key={s.id} id={s.id} className="mt-10">
            <h2 className="font-serif text-2xl">{s.h2}</h2>
            <ReadMore collapsedHeight="5.5rem" className="mt-1">
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
            </ReadMore>
          </section>
        ))}


        {children}

        <FaqSlider items={cfg.faqs} title="Domande frequenti" />


        <RelatedProjectBox className="mt-12" />

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
