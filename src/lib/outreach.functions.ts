import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Invio delle candidature editoriali (Osservatorio Bonus ADM) alle redazioni.
 * Riservato agli amministratori: destinatari e testi sono fissi nei template,
 * il browser può solo scegliere quale candidatura avviare.
 */

// Le risposte delle redazioni arrivano a questo indirizzo.
export const OUTREACH_REPLY_TO = "info@guidacasino-italia.it";

const ALLOWED = ["outreach-jamma", "outreach-agipronews"] as const;
type OutreachTemplate = (typeof ALLOWED)[number];

const schema = z.object({ template: z.enum(ALLOWED) });

export const sendOutreachEmail = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data, context }): Promise<{ ok: boolean; detail: string }> => {
    const { supabase, userId } = context as any;

    const { data: role } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();
    if (!role) throw new Error("Solo gli amministratori possono inviare le candidature");

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    try {
      const result = await sendTemplateEmail(data.template as OutreachTemplate, "", {
        idempotencyKey: `outreach-${data.template}-2026-09`,
        replyTo: OUTREACH_REPLY_TO,
      });
      if (!result.sent) return { ok: false, detail: "Destinatario soppresso dal sistema di invio" };
      return { ok: true, detail: "Email inviata correttamente" };
    } catch (e: any) {
      console.error("[outreach] invio fallito", e?.code ?? e);
      return { ok: false, detail: `Invio non riuscito (${e?.code ?? "errore"})` };
    }
  });
