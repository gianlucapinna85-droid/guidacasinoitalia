import { useEffect } from "react";
import { useConsent } from "@/hooks/use-consent";

/**
 * Conditionally loads analytics scripts only after the user grants
 * consent for the "analytics" category. Reads the measurement ID from
 * VITE_ANALYTICS_ID (Plausible domain or GA4 measurement ID).
 *
 * Detection:
 *  - IDs starting with "G-" load Google Analytics 4.
 *  - Any other value is treated as a Plausible domain.
 *  - If no env var is set, nothing loads — the consent flow still works.
 */
export function AnalyticsLoader() {
  const { has, hydrated } = useConsent();
  const enabled = hydrated && has("analytics");

  useEffect(() => {
    if (!enabled) return;
    const id = import.meta.env.VITE_ANALYTICS_ID as string | undefined;
    if (!id) return;

    const isGA4 = id.startsWith("G-");
    const scripts: HTMLScriptElement[] = [];

    if (isGA4) {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      s1.dataset.consent = "analytics";
      document.head.appendChild(s1);
      scripts.push(s1);

      const s2 = document.createElement("script");
      s2.dataset.consent = "analytics";
      s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`;
      document.head.appendChild(s2);
      scripts.push(s2);
    } else {
      const s = document.createElement("script");
      s.defer = true;
      s.src = "https://plausible.io/js/script.js";
      s.setAttribute("data-domain", id);
      s.dataset.consent = "analytics";
      document.head.appendChild(s);
      scripts.push(s);
    }

    return () => {
      scripts.forEach((s) => s.remove());
      // Best-effort cleanup of GA cookies if consent is revoked.
      if (isGA4) {
        document.cookie.split(";").forEach((c) => {
          const name = c.split("=")[0].trim();
          if (name.startsWith("_ga") || name === "_gid") {
            document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname.replace(/^www\./, "")}`;
            document.cookie = `${name}=; Max-Age=0; path=/`;
          }
        });
      }
    };
  }, [enabled]);

  return null;
}
