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

  const originalFetch = window.fetch.bind(window);
  window.fetch = async (...args: Parameters<typeof fetch>) => {
    const response = await originalFetch(...args);
    try {
      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("json")) return response;
      const clone = response.clone();
      const text = await clone.text();
      if (!text.includes("POPUP_OPEN")) return response;
      const data = JSON.parse(text) as {
        configuration?: { POPUP_OPEN?: { state?: number; ab_testing?: boolean } };
      };
      if (data?.configuration?.POPUP_OPEN) {
        data.configuration.POPUP_OPEN.state = 0;
        data.configuration.POPUP_OPEN.ab_testing = false;
        return new Response(JSON.stringify(data), {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      }
      return response;
    } catch {
      return response;
    }
  };
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
