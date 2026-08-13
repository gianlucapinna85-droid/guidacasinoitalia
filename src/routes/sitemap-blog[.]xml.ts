import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogArticles } from "@/data/blog";
import { renderUrlset, type SiteEntry } from "@/lib/site-urls";

export const Route = createFileRoute("/sitemap-blog.xml")({
  server: {
    handlers: {
      GET: async () => {
        // lastmod deriva dal dato dell'articolo (updated, altrimenti date):
        // ogni nuova pubblicazione aggiorna automaticamente la sitemap.
        const entries: SiteEntry[] = [
          { path: "/blog", changefreq: "daily", priority: "0.9" },
          ...blogArticles.map((a) => ({
            path: `/blog/${a.slug}`,
            lastmod: a.updated ?? a.date,
            changefreq: "weekly" as const,
            priority: "0.8",
          })),
        ];

        const xml = renderUrlset(entries);
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
