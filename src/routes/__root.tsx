import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import interFontUrl from "@/fonts/inter.woff2?url";
import playfairFontUrl from "@/fonts/playfair.woff2?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieBanner } from "../components/cookie-banner";
import { AnalyticsLoader } from "../components/analytics-loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guida Casino Italia 2026 | Migliori Casinò ADM, Bonus Senza Deposito e Recensioni AAMS" },
      { name: "description", content: "Confronta i migliori casinò online ADM/AAMS, bonus senza deposito, recensioni verificate e guide complete sui siti legali italiani aggiornati al 2026." },

      { name: "author", content: "GuidaCasinò IT" },
      { name: "keywords", content: "casinò ADM, concessione ADM, gioco responsabile, comparatore casinò, RUA, autoesclusione, +18" },
      { name: "rating", content: "adult" },
      { httpEquiv: "content-language", content: "it" },
      { property: "og:site_name", content: "Guida Casino Italia" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "ga-site-verification", content: "RwL30R0PEfu27ruq0gqBSzrB" },
      { name: "google-site-verification", content: "HhcCYnFE0-bjVDSP36wy43sJXySOc1G7bRlVhupj7Po" },
      { property: "og:title", content: "Guida Casino Italia 2026 | Migliori Casinò ADM e Bonus Senza Deposito" },
      { name: "twitter:title", content: "Guida Casino Italia 2026 | Migliori Casinò ADM e Bonus Senza Deposito" },
      { property: "og:description", content: "Guida Casino Italia: confronto indipendente dei casinò online con concessione ADM, bonus senza deposito, RTP e pagamenti sicuri. Aggiornato 2026. Solo +18." },
      { name: "twitter:description", content: "Guida Casino Italia: confronto indipendente dei casinò online con concessione ADM, bonus senza deposito, RTP e pagamenti sicuri. Aggiornato 2026. Solo +18." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cf8e0514-8e16-4a73-b5c2-c762d8a04391" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cf8e0514-8e16-4a73-b5c2-c762d8a04391" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      // Font self-hosted: nessuna richiesta a fonts.googleapis.com / fonts.gstatic.com
      { rel: "preload", as: "font", type: "font/woff2", href: interFontUrl, crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: playfairFontUrl, crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        // Google Consent Mode v2 — stato di default "denied" impostato prima
        // di qualsiasi tag, come richiesto in UE. Aggiornato dal banner cookie.
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}" +
          "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'," +
          "analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied'," +
          "security_storage:'granted',wait_for_update:500});gtag('set','ads_data_redaction',true);" +
          "gtag('set','url_passthrough',true);",
      },
      {

        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Guida Casino Italia",
          alternateName: ["GuidaCasinò.IT", "GuidaCasino IT", "Guida Casinò Italia"],
          url: "https://www.guidacasino-italia.it/",
          inLanguage: "it-IT",
          description: "Portale informativo indipendente sui casinò online con concessione ADM in Italia.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.guidacasino-italia.it/#organization",
          name: "Guida Casino Italia",
          alternateName: ["GuidaCasinò.IT", "Guida Casinò Italia"],
          url: "https://www.guidacasino-italia.it/",
          description: "Editore indipendente di informazioni comparative sui concessionari ADM.",
          areaServed: "IT",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <AnalyticsLoader />
      <CookieBanner />
    </QueryClientProvider>
  );
}
