import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getBlogEntries, renderUrlset } from "@/lib/site-urls";

export const Route = createFileRoute("/sitemap-blog.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = renderUrlset(getBlogEntries());
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
