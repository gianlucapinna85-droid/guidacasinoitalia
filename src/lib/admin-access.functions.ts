import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Attiva il ruolo admin per l'utente autenticato solo se fornisce il codice
 * invito riservato (secret ADMIN_INVITE_CODE). Nessuna auto-promozione.
 */
export const claimAdminWithInvite = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ code: z.string().min(8).max(200) }).parse(data))
  .handler(async ({ data, context }) => {
    const expected = process.env["ADMIN_INVITE_CODE"];
    if (!expected || data.code !== expected) {
      return { ok: false as const, message: "Codice invito non valido." };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: context.userId, role: "admin" });
    if (error && !error.message.includes("duplicate")) {
      return { ok: false as const, message: "Attivazione non riuscita." };
    }
    return { ok: true as const, message: "Ruolo amministratore attivato." };
  });
