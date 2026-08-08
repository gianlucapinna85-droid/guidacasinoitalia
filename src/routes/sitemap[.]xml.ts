import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { operators } from "@/lib/operators";
import { guides } from "@/data/guides";
import { news } from "@/data/news";


const BASE_URL = "https://www.guidacasino-italia.it";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          // Guide: generate automaticamente dal registro src/data/guides.ts
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
          { path: "/note-legali", changefreq: "yearly", priority: "0.4" },
          { path: "/privacy", changefreq: "yearly", priority: "0.4" },

          ...operators.map((op) => ({
            path: `/operatori/${op.slug}`,
            changefreq: "weekly" as const,
            priority: "0.8",
          })),
          // Le pagine /provider/* sono escluse dalla sitemap: contenuto quasi
          // duplicato tra operatori, marcate noindex,follow nella rotta.
        ];

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

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
