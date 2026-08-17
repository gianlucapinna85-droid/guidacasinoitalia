import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getNewsEntries, renderUrlset } from "@/lib/site-urls";

export const Route = createFileRoute("/sitemap-news.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = renderUrlset(getNewsEntries());
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
