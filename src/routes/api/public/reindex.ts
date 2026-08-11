// Endpoint di indicizzazione manuale/on-demand (utile per pianificatori esterni
// o per forzare il reinvio senza attendere il prossimo deploy).
// Protetto da token: REINDEX_TOKEN come header "x-reindex-token" o query "token".
import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/api/public/reindex")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env["REINDEX_TOKEN"];
        if (!expected) {
          return Response.json({ error: "REINDEX_TOKEN non configurato" }, { status: 503 });
        }
        const url = new URL(request.url);
        const provided = request.headers.get("x-reindex-token") ?? url.searchParams.get("token") ?? "";
        if (provided.length !== expected.length || provided !== expected) {
          return new Response("Unauthorized", { status: 401 });
        }

        const { runAutoIndex } = await import("@/lib/auto-index.server");
        const result = await runAutoIndex();
        return Response.json(result, { status: result.google.ok && result.indexNow.ok ? 200 : 207 });
      },
    },
  },
});
