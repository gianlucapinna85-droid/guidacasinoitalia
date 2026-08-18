// Configurazione e tracking del popup exit-intent.
// I dati dei casinò NON sono duplicati: il popup usa gli stessi operatori
// (src/lib/operators.ts) e metadati (src/data/casinos.ts) del comparatore.
// Qui si salvano solo le preferenze editoriali (quali 3 slot, testi, frequenza)
// e gli eventi di impression/click.

import { supabase } from "@/integrations/supabase/client";

export type ExitPopupFrequency = "session" | "cooldown" | "always";

export type ExitPopupConfig = {
  id: number;
  enabled: boolean;
  title: string;
  body_text: string;
  cta_label: string;
  badge_label: string;
  frequency: ExitPopupFrequency;
  cooldown_hours: number;
  slot_1: string;
  slot_2: string;
  slot_3: string;
};

export const DEFAULT_EXIT_POPUP_CONFIG: ExitPopupConfig = {
  id: 1,
  enabled: true,
  title: "🔥 ASPETTA! PRIMA DI ANDARE VIA",
  body_text: "Scopri i nostri 3 casinò consigliati del momento.",
  cta_label: "Visita il sito ufficiale",
  badge_label: "Consigliato",
  frequency: "session",
  cooldown_hours: 24,
  slot_1: "leovegas",
  slot_2: "lottomatica",
  slot_3: "netbet",
};

export async function fetchExitPopupConfig(): Promise<ExitPopupConfig> {
  const { data, error } = await supabase
    .from("exit_popup_config")
    .select(
      "id, enabled, title, body_text, cta_label, badge_label, frequency, cooldown_hours, slot_1, slot_2, slot_3",
    )
    .eq("id", 1)
    .maybeSingle();
  if (error || !data) return DEFAULT_EXIT_POPUP_CONFIG;
  return { ...DEFAULT_EXIT_POPUP_CONFIG, ...data } as ExitPopupConfig;
}

export async function saveExitPopupConfig(
  patch: Partial<Omit<ExitPopupConfig, "id">>,
): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from("exit_popup_config")
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq("id", 1);
  return { error: error?.message ?? null };
}

/** Registra impression/click. Non usa cookie: solo una insert anonima aggregabile. */
export async function logExitPopupEvent(
  event_type: "impression" | "click",
  operator_slug?: string,
) {
  try {
    await supabase.from("exit_popup_events").insert({ event_type, operator_slug: operator_slug ?? null });
  } catch {
    /* il tracking non deve mai bloccare la navigazione */
  }
}
