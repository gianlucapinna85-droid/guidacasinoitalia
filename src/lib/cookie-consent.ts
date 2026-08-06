// GDPR consent management (client-side only).
// Categorie: necessary (sempre attiva), preferences, analytics, marketing.
// Conforme alle Linee guida cookie del Garante Privacy (10 giugno 2021):
// - nessun cookie non tecnico prima del consenso
// - "Rifiuta" con lo stesso peso grafico di "Accetta"
// - riproposizione del banner dopo 6 mesi dall'ultima scelta
// - versionamento: un cambio di CONSENT_VERSION invalida i consensi precedenti

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export type ConsentState = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: number;
};

/** Incrementare a ogni modifica sostanziale dell'informativa o dei cookie usati. */
export const CONSENT_VERSION = 2;
export const CONSENT_STORAGE_KEY = "gc_consent_v2";
export const CONSENT_EVENT = "gc:consent-change";

/** Il consenso va rinnovato dopo 6 mesi (Garante Privacy). */
export const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 183;

export const DEFAULT_DENIED: ConsentState = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  timestamp: 0,
  version: CONSENT_VERSION,
};

/** Chiavi di versioni precedenti da ripulire al primo caricamento. */
const LEGACY_KEYS = ["gc_consent_v1"];

function purgeLegacy() {
  try {
    LEGACY_KEYS.forEach((k) => window.localStorage.removeItem(k));
  } catch {
    /* storage non disponibile */
  }
}

export function isExpired(state: ConsentState): boolean {
  return !state.timestamp || Date.now() - state.timestamp > CONSENT_MAX_AGE_MS;
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  purgeLegacy();
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    if (isExpired(parsed)) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

/* ---------------------------------------------------------------------- */
/* Google Consent Mode v2                                                  */
/* ---------------------------------------------------------------------- */

type Gtag = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: Gtag };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

/** Invia i segnali Consent Mode v2 corrispondenti allo stato corrente. */
export function pushConsentMode(state: ConsentState | null) {
  const c = state ?? DEFAULT_DENIED;
  const granted = (v: boolean) => (v ? "granted" : "denied");
  gtag("consent", "update", {
    ad_storage: granted(c.marketing),
    ad_user_data: granted(c.marketing),
    ad_personalization: granted(c.marketing),
    analytics_storage: granted(c.analytics),
    functionality_storage: granted(c.preferences),
    personalization_storage: granted(c.preferences),
    security_storage: "granted",
  });
}

export function writeConsent(
  partial: Partial<Omit<ConsentState, "necessary" | "version" | "timestamp">>,
): ConsentState {
  const next: ConsentState = {
    necessary: true,
    preferences: !!partial.preferences,
    analytics: !!partial.analytics,
    marketing: !!partial.marketing,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage non disponibile: il consenso vale per la sessione corrente */
  }
  pushConsentMode(next);
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: next }));
  return next;
}

export function acceptAll() {
  return writeConsent({ preferences: true, analytics: true, marketing: true });
}

export function rejectAll() {
  return writeConsent({ preferences: false, analytics: false, marketing: false });
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* noop */
  }
  pushConsentMode(null);
  window.dispatchEvent(new CustomEvent<ConsentState | null>(CONSENT_EVENT, { detail: null }));
}

/** Data di scadenza del consenso corrente, per mostrarla nel pannello preferenze. */
export function consentExpiryDate(state: ConsentState | null): Date | null {
  if (!state || !state.timestamp) return null;
  return new Date(state.timestamp + CONSENT_MAX_AGE_MS);
}
