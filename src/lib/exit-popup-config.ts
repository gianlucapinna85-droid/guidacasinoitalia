// Configurazione del popup di exit-intent.
// I dati sono locali al browser (localStorage): nessun cookie di tracciamento,
// nessuna attribuzione artificiale. I click usano SOLO i link affiliati gia'
// presenti in src/lib/operators.ts.

export type ExitPopupFrequency = "session" | "daily" | "weekly";

export type ExitPopupConfig = {
  enabled: boolean;
  slugs: string[]; // esattamente 3 slug di operatori esistenti, nell'ordine di visualizzazione
  title: string;
  text: string;
  cta: string;
  frequency: ExitPopupFrequency;
};

export const DEFAULT_EXIT_POPUP_CONFIG: ExitPopupConfig = {
  enabled: true,
  slugs: ["leovegas", "snai", "sisal"],
  title: "Prima di uscire: 3 casinò ADM selezionati",
  text: "Concessionari con licenza ADM analizzati dalla redazione. Contenuto informativo riservato ai maggiorenni: il gioco può causare dipendenza patologica.",
  cta: "Visita il sito ufficiale",
  frequency: "session",
};

const CONFIG_KEY = "gci_exit_popup_config_v1";
const SHOWN_KEY = "gci_exit_popup_shown_v1";
const STATS_KEY = "gci_exit_popup_stats_v1";

export function loadExitPopupConfig(): ExitPopupConfig {
  if (typeof window === "undefined") return DEFAULT_EXIT_POPUP_CONFIG;
  try {
    const raw = window.localStorage.getItem(CONFIG_KEY);
    if (!raw) return DEFAULT_EXIT_POPUP_CONFIG;
    const parsed = JSON.parse(raw) as Partial<ExitPopupConfig>;
    return { ...DEFAULT_EXIT_POPUP_CONFIG, ...parsed };
  } catch {
    return DEFAULT_EXIT_POPUP_CONFIG;
  }
}

export function saveExitPopupConfig(config: ExitPopupConfig): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

/** Il popup e' gia' stato mostrato secondo la frequenza scelta? */
export function alreadyShown(frequency: ExitPopupFrequency): boolean {
  if (typeof window === "undefined") return true;
  if (frequency === "session") return window.sessionStorage.getItem(SHOWN_KEY) === "1";
  try {
    const last = Number(window.localStorage.getItem(SHOWN_KEY) ?? 0);
    if (!last) return false;
    const days = frequency === "daily" ? 1 : 7;
    return Date.now() - last < days * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export function markShown(frequency: ExitPopupFrequency): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(SHOWN_KEY, "1");
  if (frequency !== "session") window.localStorage.setItem(SHOWN_KEY, String(Date.now()));
}

export type ExitPopupStats = Record<string, number>;

export function loadExitPopupStats(): ExitPopupStats {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STATS_KEY) ?? "{}") as ExitPopupStats;
  } catch {
    return {};
  }
}

export function trackExitPopupClick(slug: string): void {
  if (typeof window === "undefined") return;
  const stats = loadExitPopupStats();
  stats[slug] = (stats[slug] ?? 0) + 1;
  window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function resetExitPopupStats(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STATS_KEY);
}
