// Autore editoriale unico del sito (E-E-A-T): firma, foto e data di verifica.
import authorPhoto from "@/assets/gianluca-pinna.jpg.asset.json";

export const SITE_URL = "https://www.guidacasino-italia.it";

/**
 * Data dell'ultimo aggiornamento del sito: iniettata a build time da vite.config.ts,
 * quindi si aggiorna automaticamente a ogni pubblicazione.
 */
declare const __BUILD_DATE__: string | undefined;

export const LAST_VERIFIED_ISO: string =
  typeof __BUILD_DATE__ === "string" ? __BUILD_DATE__ : new Date().toISOString();

export const AUTHOR = {
  name: "Gianluca Pinna",
  role: "Analista di casinò online e normativa ADM",
  slug: "gianluca-pinna",
  url: `${SITE_URL}/autore/gianluca-pinna`,
  photo: authorPhoto.url,
  photoAbsolute: `${SITE_URL}${authorPhoto.url}`,
  bio: "Seguo il mercato italiano del gioco a distanza dal 2018: verifico concessioni ADM, tempi di prelievo, iter di verifica documenti e condizioni pubblicate dai concessionari, confrontando ogni dato con le fonti ufficiali prima della pubblicazione.",
} as const;

/** Data in formato italiano (es. 21 agosto 2026). */
export function formatIt(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Blocco author per i JSON-LD Article. */
export function authorSchema() {
  return {
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    image: AUTHOR.photoAbsolute,
    jobTitle: AUTHOR.role,
    knowsAbout: ["casinò online ADM", "gioco responsabile", "bonus casinò", "slot online"],
  };
}
