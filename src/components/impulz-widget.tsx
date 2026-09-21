import { useEffect } from "react";
import { useConsent } from "@/hooks/use-consent";

const IMPULZ_SCRIPT_ID = "impulz-betting-chat-loader";
const IMPULZ_SCRIPT_URL = "https://betting.affilroi.com/dist/betting-chat-widget.js";
const GUIDA_CASINO_PUBLISHER_TOKEN = "f037cd48-d548-48b1-8b92-609ff5907de3";

const POS_STYLE_ID = "gc-impulz-position";

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

    const impulzWindow = window as ImpulzWindow;
    let posTimer = 0;

    const initialise = () => {
      if (document.documentElement.dataset["impulzInitialised"] === "true") return;
      if (typeof impulzWindow.initBettingChat !== "function") return;

      impulzWindow.initBettingChat(
        GUIDA_CASINO_PUBLISHER_TOKEN,
        "italian",
        true,
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
