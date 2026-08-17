import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getReviewEntries, renderUrlset } from "@/lib/site-urls";

export const Route = createFileRoute("/sitemap-reviews.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = renderUrlset(getReviewEntries());
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
