import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const CANONICAL_HOST = "www.guidacasino-italia.it";

// 301 permanente dai vecchi domini *.lovable.app al dominio canonico.
// NB: il redirect apex -> www e' gestito dall'hosting: non duplicarlo qui,
// altrimenti si crea un loop di redirect infinito.
function canonicalHostRedirect(request: Request): Response | undefined {
  let url: URL;
  try {
    url = new URL(request.url);
  } catch {
    return undefined;
  }
  const host = url.hostname.toLowerCase();
  if (!host.endsWith(".lovable.app")) return undefined;
  // Preview e ambienti di sviluppo Lovable devono restare navigabili
  if (host.includes("-preview--") || host.endsWith("-dev.lovable.app")) return undefined;

  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";
  return new Response(null, {
    status: 301,
    headers: { location: url.toString(), "cache-control": "public, max-age=3600" },
  });
}

// Cache lunga (1 anno, immutable) per gli asset statici versionati dal build,
// cache media per i file statici serviti da /public (font, immagini, video).
const IMMUTABLE_PATH = /^\/(_build|assets|__l5e)\//;
const STATIC_EXT = /\.(avif|webp|png|jpe?g|gif|svg|ico|woff2?|ttf|otf|css|js|mjs|mp4|webm)$/i;

function withCacheHeaders(request: Request, response: Response): Response {
  if (request.method !== "GET" || response.status !== 200) return response;
  if (response.headers.has("cache-control")) return response;

  let pathname: string;
  try {
    pathname = new URL(request.url).pathname;
  } catch {
    return response;
  }
  if (!STATIC_EXT.test(pathname)) return response;

  const value = IMMUTABLE_PATH.test(pathname)
    ? "public, max-age=31536000, immutable"
    : "public, max-age=31536000, stale-while-revalidate=86400";

  const headers = new Headers(response.headers);
  headers.set("cache-control", value);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function maybeTriggerAutoIndex(request: Request): void {
  if (request.method !== "GET") return;
  try {
    if (new URL(request.url).hostname.toLowerCase() !== CANONICAL_HOST) return;
  } catch {
    return;
  }
  void import("./lib/auto-index.server")
    .then((m) => m.triggerAutoIndexOnce())
    .catch((error) => console.error("[auto-index] import fallito", error));
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const redirect = canonicalHostRedirect(request);
    if (redirect) return redirect;
    // Pubblicazione -> sitemap aggiornata -> invio automatico a Google e Bing.
    // Parte una sola volta per rilascio, solo sul dominio canonico di produzione.
    maybeTriggerAutoIndex(request);
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withCacheHeaders(request, await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

