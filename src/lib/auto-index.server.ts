// Indicizzazione automatica: a ogni nuova pubblicazione (nuovo deploy del
// worker) le URL della sitemap vengono inviate a IndexNow (Bing, Yandex,
// Naver, Seznam) e la sitemap viene risottomessa a Google Search Console.
// Google ha dismesso il "sitemap ping" HTTP nel 2023: l'unico canale
// automatico supportato e' l'API Search Console (Sitemaps: submit).
import { BASE_URL, getSiteUrls } from "@/lib/site-urls";

// Chiave IndexNow: e' pubblica per definizione e deve essere raggiungibile
// su https://www.guidacasino-italia.it/<key>.txt (file in public/).
export const INDEXNOW_KEY = "44e0631aa489f9354a3a6b35db7c0b53";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const HOST = new URL(BASE_URL).hostname;
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;
// IndexNow accetta fino a 10.000 URL per richiesta.
const MAX_URLS = 10000;

export type StepResult = { ok: boolean; status?: number; detail: string };
export type AutoIndexResult = {
  urlCount: number;
  indexNow: StepResult;
  google: StepResult;
};

/** Invio bulk a IndexNow (Bing Webmaster Tools & co.). */
export async function submitToIndexNow(urls: string[]): Promise<StepResult> {
  const urlList = urls.slice(0, MAX_URLS);
  if (urlList.length === 0) return { ok: false, detail: "Nessuna URL da inviare" };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });
    const body = await response.text();
    // 200 = accettato, 202 = accettato ma chiave in verifica.
    return {
      ok: response.ok,
      status: response.status,
      detail: response.ok ? `${urlList.length} URL inviate a IndexNow` : `IndexNow ha risposto ${response.status}: ${body.slice(0, 300)}`,
    };
  } catch (error) {
    return { ok: false, detail: `IndexNow non raggiungibile: ${String(error)}` };
  }
}

function gatewayHeaders(): Record<string, string> | undefined {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const connectionApiKey = process.env["GOOGLE_SEARCH_CONSOLE_API_KEY"];
  if (!lovableApiKey || !connectionApiKey) return undefined;
  return {
    Authorization: `Bearer ${lovableApiKey}`,
    "X-Connection-Api-Key": connectionApiKey,
  };
}

function coversTarget(siteUrl: string, target: URL): boolean {
  if (siteUrl.startsWith("sc-domain:")) {
    const domain = siteUrl.slice("sc-domain:".length).toLowerCase();
    const host = target.hostname.toLowerCase();
    return host === domain || host.endsWith(`.${domain}`);
  }
  try {
    return target.href.startsWith(new URL(siteUrl).href);
  } catch {
    return false;
  }
}

/**
 * Risottomette la sitemap a Google Search Console: Google rilegge tutte le
 * URL (comprese quelle nuove) alla scansione successiva.
 */
export async function submitSitemapToGoogle(): Promise<StepResult> {
  const headers = gatewayHeaders();
  if (!headers) {
    return { ok: false, detail: "Credenziali Search Console non disponibili nel runtime" };
  }

  try {
    const sitesResponse = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers });
    if (!sitesResponse.ok) {
      const body = await sitesResponse.text();
      return {
        ok: false,
        status: sitesResponse.status,
        detail: `Elenco proprieta' Search Console non disponibile [${sitesResponse.status}]: ${body.slice(0, 300)}`,
      };
    }

    const { siteEntry = [] } = (await sitesResponse.json()) as {
      siteEntry?: { siteUrl: string; permissionLevel?: string }[];
    };
    const target = new URL(BASE_URL);
    const matches = siteEntry.filter(
      (entry) => entry.permissionLevel !== "siteUnverifiedUser" && coversTarget(entry.siteUrl, target),
    );
    if (matches.length !== 1) {
      return {
        ok: false,
        detail:
          matches.length === 0
            ? "Nessuna proprieta' Search Console verificata copre il dominio"
            : `Piu' proprieta' Search Console coprono il dominio: ${matches.map((m) => m.siteUrl).join(", ")}`,
      };
    }

    const siteUrl = matches[0]!.siteUrl;
    const submitResponse = await fetch(
      `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`,
      { method: "PUT", headers },
    );
    if (!submitResponse.ok) {
      const body = await submitResponse.text();
      return {
        ok: false,
        status: submitResponse.status,
        detail: `Invio sitemap a Google fallito [${submitResponse.status}]: ${body.slice(0, 300)}`,
      };
    }
    return { ok: true, status: submitResponse.status, detail: `Sitemap risottomessa a Google per ${siteUrl}` };
  } catch (error) {
    return { ok: false, detail: `Search Console non raggiungibile: ${String(error)}` };
  }
}

/** Flusso completo: sitemap aggiornata -> Google -> Bing/IndexNow. */
export async function runAutoIndex(): Promise<AutoIndexResult> {
  const urls = getSiteUrls();
  const [google, indexNow] = await Promise.all([submitSitemapToGoogle(), submitToIndexNow(urls)]);
  return { urlCount: urls.length, google, indexNow };
}

// Il worker viene ricreato a ogni deploy: la prima richiesta utile dopo una
// pubblicazione fa partire l'invio automatico una sola volta per rilascio.
let autoIndexStarted = false;

export function triggerAutoIndexOnce(): void {
  if (autoIndexStarted) return;
  autoIndexStarted = true;
  void runAutoIndex()
    .then((result) => {
      console.log(
        `[auto-index] ${result.urlCount} URL | Google: ${result.google.detail} | IndexNow: ${result.indexNow.detail}`,
      );
    })
    .catch((error) => console.error("[auto-index] errore", error));
}
