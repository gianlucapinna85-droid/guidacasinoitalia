import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { operators } from "@/lib/operators";

const BASE_URL = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/sitemap-reviews.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = operators.map((op) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}/operatori/${op.slug}</loc>`,
            `    <changefreq>weekly</changefreq>`,
            `    <priority>0.8</priority>`,
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
