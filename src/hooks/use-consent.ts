import { useEffect, useState, useCallback } from "react";
import {
  CONSENT_EVENT,
  DEFAULT_DENIED,
  readConsent,
  writeConsent,
  pushConsentMode,
  acceptAll as acceptAllFn,
  rejectAll as rejectAllFn,
  type ConsentCategory,
  type ConsentState,
} from "@/lib/cookie-consent";

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const initial = readConsent();
    setConsent(initial);
    setHydrated(true);
    // Riallinea Google Consent Mode allo stato salvato a ogni caricamento.
    pushConsentMode(initial);

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState | null>).detail;
      setConsent(detail ?? readConsent());
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  const has = useCallback(
    (category: ConsentCategory) => {
      const c = consent ?? DEFAULT_DENIED;
      return !!c[category];
    },
    [consent],
  );

  return {
    consent,
    hydrated,
    hasDecision: !!consent,
    has,
    acceptAll: acceptAllFn,
    rejectAll: rejectAllFn,
    save: (p: Partial<Omit<ConsentState, "necessary" | "version" | "timestamp">>) => writeConsent(p),
  };
}
