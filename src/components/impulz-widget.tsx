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
    let widgetObserver: MutationObserver | null = null;
    let positionInterval: number | null = null;
    const adjustPosition = () => {
      const root = document.getElementById("betting-chat-widget-root");
      const shadowRoot = root?.shadowRoot;
      if (!shadowRoot) return;

      let positionStyle = shadowRoot.getElementById(POSITION_STYLE_ID) as HTMLStyleElement | null;
      if (!positionStyle) {
        const style = document.createElement("style");
        style.id = POSITION_STYLE_ID;
        style.textContent = `
        .chatbot-toggler.bt2-closed-entry {
          width: 52px !important;
          height: 52px !important;
          border: 2px solid #d4a82f !important;
          border-radius: 50% !important;
          background: #ffffff !important;
          box-shadow: 0 8px 22px rgba(8, 25, 45, .25) !important;
          overflow: hidden !important;
        }
        .chatbot-toggler.bt2-closed-entry .bt2-closed-entry__mark {
          color: #1e3f66 !important;
        }
        @media (max-width: 767px) {
          .betting-chat-widget,
          .chatbot,
          .chatbot.show { bottom: 96px !important; }
          .chatbot-toggler.bt2-closed-entry {
            right: 16px !important;
            bottom: 88px !important;
            width: 52px !important;
            height: 52px !important;
          }
        }
      `;
        shadowRoot.appendChild(style);
        positionStyle = style;
      }

      if (positionStyle !== shadowRoot.lastElementChild) shadowRoot.appendChild(positionStyle);

      const launcher = shadowRoot.querySelector<HTMLButtonElement>(".chatbot-toggler.bt2-closed-entry");
      if (!launcher) return;
      launcher.setAttribute("aria-label", "Apri l’assistente GuidaCasinò");
      launcher.title = "Assistente GuidaCasinò";
      launcher.style.setProperty("width", "52px", "important");
      launcher.style.setProperty("height", "52px", "important");
      launcher.style.setProperty("border-radius", "50%", "important");

      if (!widgetObserver) {
        widgetObserver = new MutationObserver(adjustPosition);
        widgetObserver.observe(shadowRoot, { childList: true, subtree: true });
      }
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
      window.setTimeout(adjustPosition, 1000);
      positionInterval = window.setInterval(adjustPosition, 400);
      window.setTimeout(() => {
        if (positionInterval !== null) window.clearInterval(positionInterval);
        positionInterval = null;
      }, 8000);
    };

    const existingScript = document.getElementById(IMPULZ_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (typeof impulzWindow.initBettingChat === "function") initialise();
      else existingScript.addEventListener("load", initialise, { once: true });
      return () => {
        existingScript.removeEventListener("load", initialise);
        widgetObserver?.disconnect();
        if (positionInterval !== null) window.clearInterval(positionInterval);
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
      widgetObserver?.disconnect();
      if (positionInterval !== null) window.clearInterval(positionInterval);
    };
  }, [canLoad]);

  return null;
}