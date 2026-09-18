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
    let positionTimer: number | null = null;
    let userRequestedOpen = false;
    let explicitlyOpened = false;
    let openRequestTimer: number | null = null;
    const gatedLaunchers = new Set<HTMLButtonElement>();

    const handleExplicitOpen = (event: Event) => {
      if (!event.isTrusted) return;
      userRequestedOpen = true;
      explicitlyOpened = true;
      const root = document.getElementById("betting-chat-widget-root");
      root?.setAttribute("data-gc-explicit-open", "true");
      if (openRequestTimer !== null) window.clearTimeout(openRequestTimer);
      openRequestTimer = window.setTimeout(() => {
        userRequestedOpen = false;
        openRequestTimer = null;
        const currentRoot = document.getElementById("betting-chat-widget-root");
        const currentChat = currentRoot?.shadowRoot?.querySelector<HTMLElement>(".chatbot");
        if (!currentChat?.classList.contains("show")) {
          explicitlyOpened = false;
          currentRoot?.removeAttribute("data-gc-explicit-open");
        }
      }, 1500);
    };

    const enforceExplicitOpen = (shadowRoot: ShadowRoot) => {
      const widgetRoot = shadowRoot.host;
      const widget = shadowRoot.querySelector<HTMLElement>(".betting-chat-widget");
      const chat = shadowRoot.querySelector<HTMLElement>(".chatbot");
      const isOpen = widget?.classList.contains("chat-open") || chat?.classList.contains("show");

      if (!isOpen) {
        if (explicitlyOpened && !userRequestedOpen) {
          explicitlyOpened = false;
          widgetRoot.removeAttribute("data-gc-explicit-open");
        }
        return;
      }

      if (explicitlyOpened || userRequestedOpen) return;

      // Il provider può avviare la chat da timer/configurazioni remote.
      // Senza un clic reale sul pulsante, la riportiamo sempre allo stato chiuso.
      widget?.classList.remove("chat-open");
      chat?.classList.remove("show");
      chat?.setAttribute("aria-hidden", "true");
    };

    const adjustPosition = () => {
      const root = document.getElementById("betting-chat-widget-root");
      const shadowRoot = root?.shadowRoot;
      if (!shadowRoot) return;

      enforceExplicitOpen(shadowRoot);

      let positionStyle = shadowRoot.getElementById(POSITION_STYLE_ID) as HTMLStyleElement | null;
      if (!positionStyle) {
        const style = document.createElement("style");
        style.id = POSITION_STYLE_ID;
        style.textContent = `
          :host(:not([data-gc-explicit-open="true"])) .chatbot {
            display: none !important;
            visibility: hidden !important;
            pointer-events: none !important;
            opacity: 0 !important;
          }
          .chatbot-toggler.bt2-closed-entry {
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 64px !important;
            height: 64px !important;
            min-width: 64px !important;
            min-height: 64px !important;
            max-width: 64px !important;
            max-height: 64px !important;
            padding: 11px !important;
            right: 18px !important;
            bottom: 92px !important;
            border: 4px solid #d4a82f !important;
            border-radius: 999px !important;
            background: #ffffff !important;
            color: #1e3f66 !important;
            box-shadow: 0 7px 20px rgba(8, 25, 45, .28), 0 0 0 3px rgba(255, 255, 255, .96), 0 0 0 6px rgba(212, 168, 47, .28) !important;
            overflow: visible !important;
            transform: none !important;
            transition: transform .18s ease, box-shadow .18s ease !important;
            animation: gc-assistant-ring 2.8s ease-in-out infinite !important;
          }
          @keyframes gc-assistant-ring {
            0%, 100% {
              box-shadow: 0 7px 20px rgba(8, 25, 45, .28), 0 0 0 3px rgba(255, 255, 255, .96), 0 0 0 6px rgba(212, 168, 47, .22);
            }
            50% {
              box-shadow: 0 8px 22px rgba(8, 25, 45, .30), 0 0 0 3px rgba(255, 255, 255, .98), 0 0 0 10px rgba(212, 168, 47, .42);
            }
          }
          .chatbot-toggler.bt2-closed-entry:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 10px 26px rgba(8, 25, 45, .32), 0 0 0 3px rgba(255, 255, 255, .98), 0 0 0 8px rgba(212, 168, 47, .38) !important;
          }
          .chatbot-toggler.bt2-closed-entry:focus-visible {
            outline: 3px solid #1e3f66 !important;
            outline-offset: 3px !important;
          }
          .chatbot-toggler.bt2-closed-entry .bt2-closed-entry__mark {
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            color: #1e3f66 !important;
          }
          .chatbot-toggler.bt2-closed-entry svg,
          .chatbot-toggler.bt2-closed-entry img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
          }
          .chatbot-toggler.bt2-closed-entry .bt2-closed-entry__status {
            display: none !important;
          }
          .chatbot-toggler.bt2-closed-entry .gc-live-status {
            box-sizing: border-box !important;
            position: absolute !important;
            z-index: 2 !important;
            top: -5px !important;
            right: -5px !important;
            width: 16px !important;
            height: 16px !important;
            min-width: 16px !important;
            min-height: 16px !important;
            margin: 0 !important;
            border: 3px solid #ffffff !important;
            border-radius: 999px !important;
            background: #22a447 !important;
            box-shadow: 0 2px 6px rgba(8, 25, 45, .28);
            opacity: 1;
            transform: scale(1);
            transform-origin: center;
            animation: gc-live-pulse 1.4s ease-in-out infinite !important;
            will-change: transform, opacity, box-shadow;
          }
          @keyframes gc-live-pulse {
            0%, 100% {
              box-shadow: 0 2px 6px rgba(8, 25, 45, .28), 0 0 0 0 rgba(34, 164, 71, .72);
              opacity: 1;
              transform: scale(1);
            }
            50% {
              box-shadow: 0 2px 6px rgba(8, 25, 45, .28), 0 0 0 8px rgba(34, 164, 71, 0);
              opacity: .3;
              transform: scale(.68);
            }
          }
          @media (max-width: 767px) {
            .chatbot-toggler.bt2-closed-entry {
              right: 14px !important;
              bottom: 86px !important;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .chatbot-toggler.bt2-closed-entry,
            .chatbot-toggler.bt2-closed-entry .gc-live-status {
              animation: none !important;
              transition: none !important;
            }
          }
        `;
        shadowRoot.appendChild(style);
      }

      const launcher = shadowRoot.querySelector<HTMLButtonElement>(".chatbot-toggler.bt2-closed-entry");
      if (!launcher) return;
      launcher.setAttribute("aria-label", "Apri l’assistente GuidaCasinò");
      launcher.title = "Assistente GuidaCasinò";
      if (!launcher.querySelector(".gc-live-status")) {
        const liveStatus = document.createElement("span");
        liveStatus.className = "gc-live-status";
        liveStatus.setAttribute("aria-hidden", "true");
        launcher.appendChild(liveStatus);
      }
      if (!gatedLaunchers.has(launcher)) {
        launcher.addEventListener("pointerdown", handleExplicitOpen, { capture: true });
        launcher.addEventListener("touchstart", handleExplicitOpen, { capture: true, passive: true });
        launcher.addEventListener("click", handleExplicitOpen, { capture: true });
        gatedLaunchers.add(launcher);
      }

      if (!widgetObserver) {
        widgetObserver = new MutationObserver(() => {
          enforceExplicitOpen(shadowRoot);
          if (positionTimer !== null) window.clearTimeout(positionTimer);
          positionTimer = window.setTimeout(adjustPosition, 50);
        });
        widgetObserver.observe(shadowRoot, {
          attributes: true,
          attributeFilter: ["class"],
          childList: true,
          subtree: true,
        });
      }
    };
    const initialise = () => {
      if (document.documentElement.dataset.impulzInitialised === "true") return;
      if (typeof impulzWindow.initBettingChat !== "function") return;

      // expandOnMobile = false: il widget si apre SOLO dopo il tocco esplicito
      impulzWindow.initBettingChat(
        GUIDA_CASINO_PUBLISHER_TOKEN,
        "italian",
        false,
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
        gatedLaunchers.forEach((launcher) => {
          launcher.removeEventListener("pointerdown", handleExplicitOpen, { capture: true });
          launcher.removeEventListener("touchstart", handleExplicitOpen, { capture: true });
          launcher.removeEventListener("click", handleExplicitOpen, { capture: true });
        });
        if (positionTimer !== null) window.clearTimeout(positionTimer);
        if (openRequestTimer !== null) window.clearTimeout(openRequestTimer);
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
      gatedLaunchers.forEach((launcher) => {
        launcher.removeEventListener("pointerdown", handleExplicitOpen, { capture: true });
        launcher.removeEventListener("touchstart", handleExplicitOpen, { capture: true });
        launcher.removeEventListener("click", handleExplicitOpen, { capture: true });
      });
      if (positionTimer !== null) window.clearTimeout(positionTimer);
      if (openRequestTimer !== null) window.clearTimeout(openRequestTimer);
    };
  }, [canLoad]);

  return null;
}