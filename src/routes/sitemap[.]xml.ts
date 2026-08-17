import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderSitemapIndex } from "@/lib/site-urls";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Indice sitemap: rimanda alle sitemap per categoria generate dai
        // registri (pagine, guide, recensioni, blog, news).
        const xml = renderSitemapIndex();

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
