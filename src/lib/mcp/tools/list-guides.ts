import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { guides } from "@/data/guides";

const SITE = "https://www.guidacasino-italia.it";

export default defineTool({
  name: "list_guides",
  title: "Guide editoriali",
  description:
    "Elenca le guide editoriali di GuidaCasinò.IT su casinò ADM, bonus, slot, pagamenti e gioco responsabile, con link alle pagine complete.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Parola chiave per filtrare le guide per titolo o descrizione, es. \"bonus\" o \"rtp\"."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const matches = q
      ? guides.filter(
          (g) =>
            g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q),
        )
      : guides;
    const result = matches.map((g) => ({
      title: g.title,
      description: g.description,
      url: `${SITE}${g.path}`,
    }));
    return {
      content: [
        {
          type: "text",
          text: `${result.length} guide trovate${q ? ` per "${q}"` : ""} su GuidaCasinò.IT.`,
        },
      ],
      structuredContent: { guides: result },
    };
  },
});
