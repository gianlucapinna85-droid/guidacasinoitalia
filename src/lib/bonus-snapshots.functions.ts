import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type BonusSnapshot = {
  slug: string;
  no_deposit: string | null;
  deposit: string | null;
  verified_at: string;
};

/** Lettura pubblica degli ultimi bonus verificati dal controllo automatico. */
export const getBonusSnapshots = createServerFn({ method: "GET" }).handler(
  async (): Promise<BonusSnapshot[]> => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabasePublic = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { data } = await supabasePublic
      .from("bonus_snapshots")
      .select("slug, no_deposit, deposit, verified_at")
      .eq("status", "auto");
    return data ?? [];
  },
);
