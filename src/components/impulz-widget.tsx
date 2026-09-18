import { useEffect } from "react";
import { useConsent } from "@/hooks/use-consent";

const IMPULZ_SCRIPT_ID = "impulz-betting-chat-loader";
const IMPULZ_SCRIPT_URL = "https://betting.affilroi.com/dist/betting-chat-widget.js";
const GUIDA_CASINO_PUBLISHER_TOKEN = "f037cd48-d548-48b1-8b92-609ff5907de3";
const POSITION_STYLE_ID = "gc-impulz-position";

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
    const adjustPosition = () => {
      const root = document.getElementById("betting-chat-widget-root");
      const shadowRoot = root?.shadowRoot;
      if (!shadowRoot || shadowRoot.getElementById(POSITION_STYLE_ID)) return;

      const style = document.createElement("style");
      style.id = POSITION_STYLE_ID;
      style.textContent = `
        @media (max-width: 767px) {
          .betting-chat-widget,
          .chatbot-toggler,
          .chatbot,
          .chatbot.show { bottom: 96px !important; }
        }
      `;
      shadowRoot.appendChild(style);
    };
    const initialise = () => {
      if (document.documentElement.dataset.impulzInitialised === "true") return;
      if (typeof impulzWindow.initBettingChat !== "function") return;

      impulzWindow.initBettingChat(
        GUIDA_CASINO_PUBLISHER_TOKEN,
        "italian",
        true,
        undefined,
        "right",
      );
      document.documentElement.dataset.impulzInitialised = "true";
      adjustPosition();
      window.setTimeout(adjustPosition, 250);
    };

    const existingScript = document.getElementById(IMPULZ_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (typeof impulzWindow.initBettingChat === "function") initialise();
      else existingScript.addEventListener("load", initialise, { once: true });
      return () => existingScript.removeEventListener("load", initialise);
    }

    const script = document.createElement("script");
    script.id = IMPULZ_SCRIPT_ID;
    script.src = IMPULZ_SCRIPT_URL;
    script.async = false;
    script.addEventListener("load", initialise, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener("load", initialise);
  }, [canLoad]);

  return null;
}