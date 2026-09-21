import { useEffect } from "react";
import { useConsent } from "@/hooks/use-consent";

const IMPULZ_SCRIPT_ID = "impulz-betting-chat-loader";
const IMPULZ_SCRIPT_URL = "https://betting.affilroi.com/dist/betting-chat-widget.js";
const GUIDA_CASINO_PUBLISHER_TOKEN = "f037cd48-d548-48b1-8b92-609ff5907de3";

const POS_STYLE_ID = "gc-impulz-position";

/**
 * The widget auto-opens after `configuration.POPUP_OPEN.state` milliseconds,
 * a value it receives from its own config endpoint. Setting it to 0 disables
 * the auto-open entirely (the widget guards the timer with `state > 0`).
 */
function disableAutoOpen() {
  const w = window as unknown as { __gcImpulzFetchPatched?: boolean };
  if (w.__gcImpulzFetchPatched) return;
  w.__gcImpulzFetchPatched = true;

  const patchBody = (text: string) => {
    if (!text.includes("POPUP_OPEN")) return null;
    try {
      const data = JSON.parse(text) as {
        configuration?: { POPUP_OPEN?: { state?: number; ab_testing?: boolean } };
      };
      if (!data?.configuration?.POPUP_OPEN) return null;
      data.configuration.POPUP_OPEN.state = 0;
      data.configuration.POPUP_OPEN.ab_testing = false;
      return JSON.stringify(data);
    } catch {
      return null;
    }
  };

  const originalFetch = window.fetch.bind(window);
  window.fetch = async (...args: Parameters<typeof fetch>) => {
    const response = await originalFetch(...args);
    try {
      const url = typeof args[0] === "string" ? args[0] : response.url;
      if (!url.includes("app-config")) return response;
      const text = await response.clone().text();
      const patched = patchBody(text);
      if (!patched) return response;
      return new Response(patched, {
        status: response.status,
        statusText: response.statusText,
        headers: { "content-type": "application/json" },
      });
    } catch {
      return response;
    }
  };

  // Some builds of the widget fetch the config through XMLHttpRequest.
  const XhrProto = XMLHttpRequest.prototype as XMLHttpRequest & {
    __gcPatched?: boolean;
  };
  if (!XhrProto.__gcPatched) {
    XhrProto.__gcPatched = true;
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (
      this: XMLHttpRequest & { __gcWatch?: boolean },
      method: string,
      url: string | URL,
      ...rest: unknown[]
    ) {
      this.__gcWatch = String(url).includes("app-config");
      if (this.__gcWatch) {
        this.addEventListener("readystatechange", () => {
          if (this.readyState !== 4) return;
          try {
            const patched = patchBody(this.responseText);
            if (!patched) return;
            Object.defineProperty(this, "responseText", { value: patched });
            Object.defineProperty(this, "response", { value: patched });
          } catch {
            /* leave the original response untouched */
          }
        });
      }
      return (originalOpen as unknown as (...a: unknown[]) => void).call(
        this,
        method,
        url,
        ...rest,
      );
    } as typeof XMLHttpRequest.prototype.open;
  }
}

function adjustPosition() {
  const root = document.getElementById("betting-chat-widget-root");
  if (!root) return;
  let style = document.getElementById(POS_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = POS_STYLE_ID;
    document.head.appendChild(style);
  }
  const css = `
    @media (max-width: 767px) {
      .chatbot-toggler, .betting-chat-widget, .bt2-closed-entry {
        bottom: 140px !important;
      }
    }
  `;
  if (style.textContent !== css) style.textContent = css;

  const sr = (root as unknown as { shadowRoot?: ShadowRoot | null }).shadowRoot;
  if (sr) {
    let inner = sr.getElementById(POS_STYLE_ID);
    if (!inner) {
      inner = document.createElement("style");
      inner.id = POS_STYLE_ID;
      sr.appendChild(inner);
    }
    if (inner.textContent !== css) inner.textContent = css;
  }
}

type ImpulzWindow = Window & {
  initBettingChat?: (
    publisherToken: string,
    language: string,
    expandOnMobile: boolean,
    placeholder: undefined,
    position: string,
  ) => void;
};

export function ImpulzWidget() {
  const { hydrated, has } = useConsent();
  const canLoad = hydrated && has("marketing");

  useEffect(() => {
    if (!canLoad) return;

    disableAutoOpen();

    const impulzWindow = window as ImpulzWindow;
    let posTimer = 0;

    const initialise = () => {
      if (document.documentElement.dataset["impulzInitialised"] === "true") return;
      if (typeof impulzWindow.initBettingChat !== "function") return;

      impulzWindow.initBettingChat(
        GUIDA_CASINO_PUBLISHER_TOKEN,
        "italian",
        false,
        undefined,
        "right",
      );
      document.documentElement.dataset["impulzInitialised"] = "true";
      adjustPosition();
      posTimer = window.setInterval(adjustPosition, 1000);
    };

    const existingScript = document.getElementById(IMPULZ_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (typeof impulzWindow.initBettingChat === "function") initialise();
      else existingScript.addEventListener("load", initialise, { once: true });

      return () => {
        existingScript.removeEventListener("load", initialise);
        if (posTimer) window.clearInterval(posTimer);
      };
    }

    const script = document.createElement("script");
    script.id = IMPULZ_SCRIPT_ID;
    script.src = IMPULZ_SCRIPT_URL;
    script.async = false;
    script.addEventListener("load", initialise, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initialise);
      if (posTimer) window.clearInterval(posTimer);
    };
  }, [canLoad]);

  return null;
}
