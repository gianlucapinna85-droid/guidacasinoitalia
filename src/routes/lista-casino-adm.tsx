import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { OperatorCardsGrid } from "@/components/operator-cards";
import { socialImageMeta } from "@/lib/social-image";

const TITLE = "Lista completa casinò ADM in Italia 2026 | Guida Casinò Italia";
const DESC =
  "Elenco completo dei casinò online con concessione ADM: numero di concessione, RTP medio, metodi di pagamento e recensione dedicata. Informativo, +18.";
const URL = "https://www.guidacasino-italia.it/lista-casino-adm";

export const Route = createFileRoute("/lista-casino-adm")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      ...socialImageMeta(),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-2.5 py-5 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> / Lista completa casinò ADM
        </nav>
        <h1 className="mt-2 font-serif text-xl md:text-4xl">Lista completa casinò online ADM</h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-snug text-muted-foreground md:text-base">
          Elenco informativo di tutti gli operatori con concessione dell'Agenzia delle Dogane e dei
          Monopoli presenti sul portale. Per ciascuno trovi numero di concessione, RTP medio
          dichiarato, catalogo giochi e una recensione dedicata.
        </p>
        <div className="mt-4">
          <OperatorCardsGrid />
        </div>
        <ComplianceBadges />
      </section>
    </PageShell>
  );
}
