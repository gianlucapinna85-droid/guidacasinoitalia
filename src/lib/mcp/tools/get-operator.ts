import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { casinos, CASINOS_LAST_CHECK, DECLARED_DATA_NOTE } from "@/data/casinos";
import { operatorBonuses, BONUS_LAST_CHECK } from "@/data/bonuses";

const SITE = "https://www.guidacasino-italia.it";

export default defineTool({
  name: "get_operator",
  title: "Dettaglio operatore ADM",
  description:
    "Restituisce la scheda completa di un concessionario ADM: valutazione redazionale, pro/contro, bonus dichiarati e link alla recensione completa.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("Slug dell'operatore, es. \"leovegas\". Usa list_operators per l'elenco."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const meta = casinos.find((c) => c.slug === slug);
    if (!meta) {
      throw new ToolError(
        `Operatore "${slug}" non trovato. Usa lo strumento list_operators per vedere gli slug disponibili.`,
      );
    }
    const bonus = operatorBonuses.find((b) => b.slug === slug);
    const operator = {
      slug: meta.slug,
      reviewUrl: `${SITE}/operatori/${meta.slug}`,
      rating: meta.rating,
      summary: meta.short,
      pros: meta.pros.map((p) => p),
      cons: meta.cons.map((c) => c),
      paypal: meta.paypal,
      fastWithdrawal: meta.fastWithdrawal,
      spid: meta.spid,
      minDeposit: meta.minDeposit,
      minWithdrawal: meta.minWithdrawal,
      featured: meta.featured,
      noDepositBonus: bonus?.noDeposit
        ? { amount: bonus.noDeposit.amount, condition: bonus.noDeposit.condition }
        : null,
      depositBonus: bonus?.deposit
        ? { amount: bonus.deposit.amount, condition: bonus.deposit.condition }
        : null,
      bonusSource: bonus?.source ?? null,
    };
    return {
      content: [
        {
          type: "text",
          text:
            `${meta.slug}: valutazione redazionale ${meta.rating}/10. ${DECLARED_DATA_NOTE} ` +
            `Bonus rilevati il ${BONUS_LAST_CHECK}; importi soggetti a T&C dell'operatore. Gioco riservato ai maggiorenni (+18).`,
        },
      ],
      structuredContent: { operator },
    };
  },
});
