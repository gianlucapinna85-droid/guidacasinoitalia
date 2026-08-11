import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getSiteEntries, renderUrlset } from "@/lib/site-urls";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Le voci sono generate dai registri (guide, news, operatori):
        // ogni nuova pagina entra in sitemap automaticamente.
        const xml = renderUrlset(getSiteEntries());

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
