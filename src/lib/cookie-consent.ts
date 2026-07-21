// GDPR consent management (client-side only).
// Categories: necessary (always on), preferences, analytics, marketing.

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export type ConsentState = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: number;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "gc_consent_v1";
export const CONSENT_EVENT = "gc:consent-change";

export const DEFAULT_DENIED: ConsentState = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  timestamp: 0,
  version: CONSENT_VERSION,
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsent(partial: Partial<Omit<ConsentState, "necessary" | "version" | "timestamp">>): ConsentState {
  const next: ConsentState = {
    necessary: true,
    preferences: !!partial.preferences,
    analytics: !!partial.analytics,
    marketing: !!partial.marketing,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
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
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent<ConsentState | null>(CONSENT_EVENT, { detail: null }));
}
