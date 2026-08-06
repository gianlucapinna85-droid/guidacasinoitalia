import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { guides } from "@/data/guides";

const BASE_URL = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/sitemap-guides.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = guides.map((g) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${g.path}</loc>`,
            `    <changefreq>${g.changefreq}</changefreq>`,
            `    <priority>${g.priority}</priority>`,
            `  </url>`,
          ].join("\n"),
        );

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
