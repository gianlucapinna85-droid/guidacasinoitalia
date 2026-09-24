import { useEffect } from "react";
import { useConsent } from "@/hooks/use-consent";

const IMPULZ_SCRIPT_ID = "impulz-betting-chat-loader";
const IMPULZ_SCRIPT_URL = "https://betting.affilroi.com/dist/betting-chat-widget.js";
const GUIDA_CASINO_PUBLISHER_TOKEN = "f037cd48-d548-48b1-8b92-609ff5907de3";

const POS_STYLE_ID = "gc-impulz-position";
const GUARD_STYLE_ID = "gc-impulz-no-auto-open";
const OPENED_ATTR = "impulzUserOpened";

// Selectors that may auto-open / auto-expand without a user click
// (teaser bubbles, proactive messages, expanded chat windows).
const AUTO_OPEN_SELECTORS = [
  ".bt2-teaser",
  ".teaser",
  "[class*='proactive']",
  "[class*='auto-open']",
  "[class*='autopen']",
  ".bt2-chat-window",
  ".chat-window",
  ".bt2-expanded",
  ".chatbot-window",
].join(", ");

function guardCss(): string {
  return `
    html:not([data-${OPENED_ATTR}="true"]) ${AUTO_OPEN_SELECTORS} {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    @media (max-width: 767px) {
      .chatbot-toggler, .betting-chat-widget, .bt2-closed-entry {
        bottom: 140px !important;
      }
    }
  `;
}

function upsertStyle(parent: HTMLElement | ShadowRoot, id: string, css: string) {
  let el = parent.querySelector(`#${id}`) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = id;
    parent.appendChild(el);
  }
  if (el.textContent !== css) el.textContent = css;
}

function markUserOpened() {
  document.documentElement.dataset[OPENED_ATTR] = "true";
}

function applyGuards() {
  const root = document.getElementById("betting-chat-widget-root");
  const css = guardCss();
  upsertStyle(document.head, GUARD_STYLE_ID, css);
  if (!root) return;

  const sr = (root as unknown as { shadowRoot?: ShadowRoot | null }).shadowRoot;
  if (sr) {
    upsertStyle(sr, GUARD_STYLE_ID, css);
    upsertStyle(sr, POS_STYLE_ID, css);
    // Any click inside the widget (toggler) counts as explicit user intent.
    if (!sr.getAttribute("data-gc-guard")) {
      sr.setAttribute("data-gc-guard", "1");
      sr.addEventListener("click", markUserOpened, true);
    }
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
    let guardTimer = 0;

    // Explicit clicks on the document-level toggler also count.
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(".chatbot-toggler") ||
        target.closest(".bt2-closed-entry") ||
        target.closest("#betting-chat-widget-root")
      ) {
        markUserOpened();
      }
    };
    document.addEventListener("click", onDocClick, true);

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
      applyGuards();
      // The widget renders asynchronously / re-renders, so keep guards applied.
      guardTimer = window.setInterval(applyGuards, 800);
    };

    const existingScript = document.getElementById(IMPULZ_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (typeof impulzWindow.initBettingChat === "function") initialise();
      else existingScript.addEventListener("load", initialise, { once: true });

      return () => {
        existingScript.removeEventListener("load", initialise);
        document.removeEventListener("click", onDocClick, true);
        if (guardTimer) window.clearInterval(guardTimer);
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
      document.removeEventListener("click", onDocClick, true);
      if (guardTimer) window.clearInterval(guardTimer);
    };
  }, [canLoad]);

  return null;
}
