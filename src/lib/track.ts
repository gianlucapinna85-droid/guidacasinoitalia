import { supabase } from "@/integrations/supabase/client";

export type SiteEventType =
  | "operator_click"
  | "assistant_click";

/**
 * Conteggio anonimo e senza cookie delle azioni chiave del sito
 * (clic verso gli operatori). Non registra
 * dati personali: solo tipo di evento, etichetta e percorso pagina.
 * Non deve mai bloccare o rallentare l'azione dell'utente.
 */
export function trackEvent(eventType: SiteEventType, label?: string) {
  if (typeof window === "undefined") return;
  const path = window.location.pathname.slice(0, 200);
  void supabase
    .from("site_events")
    .insert({ event_type: eventType, label: label?.slice(0, 64) ?? null, path })
    .then(
      () => undefined,
      () => undefined,
    );
}
