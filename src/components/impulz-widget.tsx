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
    const adjustPosition = () => {
      const root = document.getElementById("betting-chat-widget-root");
      const shadowRoot = root?.shadowRoot;
      if (!shadowRoot) return;

      if (!shadowRoot.getElementById(POSITION_STYLE_ID)) {
        const style = document.createElement("style");
        style.id = POSITION_STYLE_ID;
        style.textContent = `
        .chatbot-toggler.bt2-closed-entry {
          width: 220px !important;
          height: 64px !important;
          padding: 0 22px !important;
          gap: 12px !important;
          justify-content: flex-start !important;
          border: 2px solid #d4a82f !important;
          border-radius: 999px !important;
          background: #1e3f66 !important;
          color: #ffffff !important;
          box-shadow: 0 12px 30px rgba(8, 25, 45, .32) !important;
        }
        .chatbot-toggler.bt2-closed-entry::after {
          content: "Chiedi all'assistente";
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .chatbot-toggler.bt2-closed-entry .bt2-closed-entry__mark {
          width: 36px !important;
          height: 36px !important;
          flex: 0 0 36px !important;
          color: #d4a82f !important;
        }
        .chatbot-toggler.bt2-closed-entry .bt2-closed-entry__status {
          position: absolute !important;
          top: 8px !important;
          right: 10px !important;
          width: 10px !important;
          height: 10px !important;
          border: 2px solid #1e3f66 !important;
          border-radius: 50% !important;
          background: #36c978 !important;
        }
        .chatbot-toggler.bt2-closed-entry:hover {
          transform: translateY(-3px) translateZ(0) !important;
          box-shadow: 0 16px 34px rgba(8, 25, 45, .4) !important;
        }
        @media (max-width: 767px) {
          .betting-chat-widget,
          .chatbot,
          .chatbot.show { bottom: 96px !important; }
          .chatbot-toggler.bt2-closed-entry {
            right: 12px !important;
            bottom: 96px !important;
            width: 206px !important;
            height: 58px !important;
            padding: 0 17px !important;
          }
          .chatbot-toggler.bt2-closed-entry::after {
            font-size: 14px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .chatbot-toggler.bt2-closed-entry { transition: none !important; }
        }
      `;
        shadowRoot.appendChild(style);
      }

      const launcher = shadowRoot.querySelector<HTMLButtonElement>(".chatbot-toggler.bt2-closed-entry");
      if (!launcher) return;
      const expectedWidth = window.innerWidth < 768 ? "206px" : "220px";
      const expectedHeight = window.innerWidth < 768 ? "58px" : "64px";
      if (launcher.getAttribute("aria-label") !== "Apri l’assistente GuidaCasinò") {
        launcher.setAttribute("aria-label", "Apri l’assistente GuidaCasinò");
      }
      if (launcher.title !== "Chiedi all’assistente") launcher.title = "Chiedi all’assistente";
      if (launcher.style.getPropertyValue("width") !== expectedWidth) {
        launcher.style.setProperty("width", expectedWidth, "important");
      }
      if (launcher.style.getPropertyValue("height") !== expectedHeight) {
        launcher.style.setProperty("height", expectedHeight, "important");
      }

      if (!widgetObserver) {
        widgetObserver = new MutationObserver(adjustPosition);
        widgetObserver.observe(shadowRoot, { childList: true, subtree: true, attributes: true });
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
    };

    const existingScript = document.getElementById(IMPULZ_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (typeof impulzWindow.initBettingChat === "function") initialise();
      else existingScript.addEventListener("load", initialise, { once: true });
      return () => {
        existingScript.removeEventListener("load", initialise);
        widgetObserver?.disconnect();
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
    };
  }, [canLoad]);

  return null;
}