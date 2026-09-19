import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { casinos, CASINOS_LAST_CHECK } from "@/data/casinos";
import { operatorBonuses } from "@/data/bonuses";

const SITE = "https://www.guidacasino-italia.it";

const toOperatorJson = (slug: string) => {
  const meta = casinos.find((c) => c.slug === slug);
  const bonus = operatorBonuses.find((b) => b.slug === slug);
  return {
    slug,
    reviewUrl: `${SITE}/operatori/${slug}`,
    rating: meta?.rating ?? null,
    paypal: meta?.paypal ?? null,
    fastWithdrawal: meta?.fastWithdrawal ?? null,
    spid: meta?.spid ?? null,
    minDeposit: meta?.minDeposit ?? null,
    minWithdrawal: meta?.minWithdrawal ?? null,
    summary: meta?.short ?? null,
    noDepositBonus: bonus?.noDeposit
      ? { amount: bonus.noDeposit.amount, condition: bonus.noDeposit.condition }
      : null,
    depositBonus: bonus?.deposit
      ? { amount: bonus.deposit.amount, condition: bonus.deposit.condition }
      : null,
  };
};

export default defineTool({
  name: "list_operators",
  title: "Elenco operatori ADM",
  description:
    "Elenca i concessionari ADM recensiti da GuidaCasinò.IT con valutazione redazionale, metodi di pagamento e bonus dichiarati. Solo dati editoriali pubblici.",
  inputSchema: {
    spid: z
      .boolean()
      .optional()
      .describe("Se true, mostra solo gli operatori con registrazione SPID dichiarata."),
    paypal: z
      .boolean()
      .optional()
      .describe("Se true, mostra solo gli operatori che accettano PayPal."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ spid, paypal }) => {
    let slugs = casinos.map((c) => c.slug);
    if (spid) slugs = slugs.filter((s) => casinos.find((c) => c.slug === s)?.spid);
    if (paypal) slugs = slugs.filter((s) => casinos.find((c) => c.slug === s)?.paypal);
    const operators = slugs.map(toOperatorJson);
    return {
      content: [
        {
          type: "text",
          text:
            `${operators.length} operatori ADM recensiti (ultimo controllo: ${CASINOS_LAST_CHECK}). ` +
            `Gli importi dei bonus sono massimali dichiarati dagli operatori, soggetti a T&C. Gioco riservato ai maggiorenni (+18).`,
        },
      ],
      structuredContent: { lastCheck: CASINOS_LAST_CHECK, operators },
    };
  },
});
