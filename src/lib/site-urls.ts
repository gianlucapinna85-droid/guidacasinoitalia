// Registro unico delle URL pubbliche indicizzabili del sito.
// Usato da: sitemap.xml, invio automatico IndexNow (Bing/Yandex) e
// risottomissione della sitemap a Google Search Console.
// Aggiungendo una guida in src/data/guides.ts o una news in src/data/news.ts
// l'URL entra automaticamente in sitemap e nel flusso di indicizzazione.
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

/** Tutte le pagine pubbliche indicizzabili (index,follow). */
export function getSiteEntries(): SiteEntry[] {
  return [
    { path: "/", changefreq: "daily", priority: "1.0" },
    ...guides.map((g) => ({
      path: g.path,
      changefreq: g.changefreq,
      priority: g.priority,
    })),
    { path: "/news", changefreq: "daily", priority: "0.9" },
    ...news.map((n) => ({
      path: `/news/${n.slug}`,
      lastmod: n.date,
      changefreq: "weekly" as const,
      priority: "0.7",
    })),
    { path: "/blog", changefreq: "daily" as const, priority: "0.9" },
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
    { path: "/migliori-casino-scelti", changefreq: "weekly" as const, priority: "0.9" },
    { path: "/lista-casino-adm", changefreq: "weekly" as const, priority: "0.9" },
    { path: "/slot-piu-giocate", changefreq: "weekly" as const, priority: "0.9" },
    ...slots.map((s) => ({
      path: `/slot/${s.slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
    { path: "/recensioni", changefreq: "weekly" as const, priority: "0.9" },
    { path: "/pagamenti", changefreq: "monthly" as const, priority: "0.8" },
    ...activePaymentMethods.map((m) => ({
      path: `/pagamenti/${m.slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
    { path: "/note-legali", changefreq: "yearly" as const, priority: "0.4" },

    { path: "/privacy", changefreq: "yearly" as const, priority: "0.4" },
    ...operators.map((op) => ({
      path: `/operatori/${op.slug}`,
      changefreq: "weekly" as const,
      priority: "0.8",
    })),
    // Le pagine /provider/* restano escluse: contenuto quasi duplicato,
    // marcate noindex,follow nella rotta.
  ];
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
