import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { news } from "@/data/news";

const BASE_URL = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/sitemap-news.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = [
          [
            `  <url>`,
            `    <loc>${BASE_URL}/news</loc>`,
            `    <changefreq>daily</changefreq>`,
            `    <priority>0.9</priority>`,
            `  </url>`,
          ].join("\n"),
          ...news.map((n) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}/news/${n.slug}</loc>`,
              `    <lastmod>${n.date}</lastmod>`,
              `    <changefreq>weekly</changefreq>`,
              `    <priority>0.7</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
