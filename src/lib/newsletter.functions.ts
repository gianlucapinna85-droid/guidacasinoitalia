import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
  source: z.string().trim().max(40).optional(),
});

/**
 * Iscrizione pubblica alla newsletter.
 * L'inserimento avviene con il client privilegiato lato server: la tabella
 * non è leggibile né scrivibile dal browser.
 */
export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }): Promise<{ ok: boolean; already: boolean }> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const email = data.email.toLowerCase();

    const { error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .insert({ email, source: data.source ?? "site" });

    if (error) {
      // 23505 = email già iscritta
      if (error.code === "23505") return { ok: true, already: true };
      throw new Error("Iscrizione non riuscita");
    }
    return { ok: true, already: false };
  });
