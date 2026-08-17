// Registro unico delle URL pubbliche indicizzabili del sito.
// Usato da: sitemap index + sitemap per categoria, invio automatico IndexNow
// (Bing/Yandex) e risottomissione della sitemap a Google Search Console.
// Aggiungendo una guida in src/data/guides.ts, una news in src/data/news.ts o
// un articolo in src/data/blog l'URL entra automaticamente nelle sitemap e nel
// flusso di indicizzazione.
import { operators } from "@/lib/operators";
import { guides } from "@/data/guides";
import { news } from "@/data/news";
import { blogArticles, categoryHubs, CATEGORY_SLUG } from "@/data/blog";
import { slots } from "@/data/slots";
import { activePaymentMethods } from "@/lib/payments";


export const BASE_URL = "https://www.guidacasino-italia.it";

export type SiteEntry = {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

/** Pagine statiche, hub, slot e pagamenti (tutto ciò che non è guida/recensione/blog/news). */
export function getPageEntries(): SiteEntry[] {
  return [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/migliori-casino-scelti", changefreq: "weekly", priority: "0.9" },
    { path: "/lista-casino-adm", changefreq: "weekly", priority: "0.9" },
    { path: "/slot-piu-giocate", changefreq: "weekly", priority: "0.9" },
    ...slots.map((s) => ({
      path: `/slot/${s.slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
    { path: "/recensioni", changefreq: "weekly", priority: "0.9" },
    { path: "/pagamenti", changefreq: "monthly", priority: "0.8" },
    ...activePaymentMethods.map((m) => ({
      path: `/pagamenti/${m.slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
    { path: "/note-legali", changefreq: "yearly", priority: "0.4" },
    { path: "/privacy", changefreq: "yearly", priority: "0.4" },
  ];
}

/** Guide editoriali (registro src/data/guides.ts). */
export function getGuideEntries(): SiteEntry[] {
  return guides.map((g) => ({
    path: g.path,
    changefreq: g.changefreq,
    priority: g.priority,
  }));
}

/**
 * Schede operatore: la URL canonica è /operatori/<slug>.
 * /casino/<slug> è solo un alias 301 e resta fuori dalla sitemap.
 */
export function getReviewEntries(): SiteEntry[] {
  return operators.map((op) => ({
    path: `/operatori/${op.slug}`,
    changefreq: "weekly" as const,
    priority: "0.8",
  }));
}

/** Blog a silo: hub + articoli, con lastmod dal dato reale dell'articolo. */
export function getBlogEntries(): SiteEntry[] {
  return [
    { path: "/blog", changefreq: "daily", priority: "0.9" },
    ...categoryHubs.map((h) => ({
      path: `/blog/${h.slug}`,
      changefreq: "daily" as const,
      priority: "0.8",
    })),
    ...blogArticles.map((a) => ({
      path: `/blog/${CATEGORY_SLUG[a.category]}/${a.slug}`,
      lastmod: a.updated ?? a.date,
      changefreq: "weekly" as const,
      priority: "0.8",
    })),
  ];
}

/** News: lastmod dalla data di pubblicazione dell'articolo. */
export function getNewsEntries(): SiteEntry[] {
  return [
    { path: "/news", changefreq: "daily", priority: "0.9" },
    ...news.map((n) => ({
      path: `/news/${n.slug}`,
      lastmod: n.date,
      changefreq: "weekly" as const,
      priority: "0.7",
    })),
  ];
}

/** Le sitemap per categoria referenziate dall'indice /sitemap.xml. */
export const SITEMAP_SECTIONS: { file: string; entries: () => SiteEntry[] }[] = [
  { file: "/sitemap-pages.xml", entries: getPageEntries },
  { file: "/sitemap-guides.xml", entries: getGuideEntries },
  { file: "/sitemap-reviews.xml", entries: getReviewEntries },
  { file: "/sitemap-blog.xml", entries: getBlogEntries },
  { file: "/sitemap-news.xml", entries: getNewsEntries },
];

/** Tutte le pagine pubbliche indicizzabili (index,follow), senza duplicati. */
export function getSiteEntries(): SiteEntry[] {
  const seen = new Set<string>();
  const all: SiteEntry[] = [];
  for (const section of SITEMAP_SECTIONS) {
    for (const entry of section.entries()) {
      if (seen.has(entry.path)) continue;
      seen.add(entry.path);
      all.push(entry);
    }
  }
  return all;
  // Le pagine /provider/* e gli alias /casino/* restano esclusi:
  // rispettivamente noindex e redirect 301.
}

/** URL assolute canoniche, deduplicate. */
export function getSiteUrls(): string[] {
  return Array.from(new Set(getSiteEntries().map((e) => `${BASE_URL}${e.path}`)));
}

export function renderUrlset(entries: SiteEntry[]): string {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

/** Indice sitemap: lastmod solo quando deriva da date reali dei contenuti. */
export function renderSitemapIndex(): string {
  const items = SITEMAP_SECTIONS.map((section) => {
    const lastmods = section
      .entries()
      .map((e) => e.lastmod)
      .filter((d): d is string => !!d)
      .sort();
    const lastmod = lastmods.length ? lastmods[lastmods.length - 1] : undefined;
    return [
      `  <sitemap>`,
      `    <loc>${BASE_URL}${section.file}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      `  </sitemap>`,
    ]
      .filter(Boolean)
      .join("\n");
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...items,
    `</sitemapindex>`,
  ].join("\n");
}
