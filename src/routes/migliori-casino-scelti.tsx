import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { ComparisonTable } from "@/components/comparison-table";
import { OperatorCardsGrid } from "@/components/operator-cards";
import { socialImageMeta } from "@/lib/social-image";

const TITLE = "Migliori casinò ADM scelti da noi 2026 | Guida Casinò Italia";
const DESC =
  "La selezione redazionale dei migliori casinò online con concessione ADM: confronto di bonus, RTP, pagamenti e prelievi. Contenuto informativo, +18.";
const URL = "https://www.guidacasino-italia.it/migliori-casino-scelti";

export const Route = createFileRoute("/migliori-casino-scelti")({
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
          <Link to="/" className="hover:text-foreground">Home</Link> / Migliori casinò scelti da noi
        </nav>
        <h1 className="mt-2 font-serif text-xl md:text-4xl">
          I migliori casinò ADM scelti da <span className="text-gold">Guida Casinò Italia</span>
        </h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-snug text-muted-foreground md:text-base">
          Selezione redazionale dei concessionari ADM con le condizioni di conto più chiare tra
          quelli analizzati: bonus dichiarati, RTP medio, metodi di pagamento e tempi di prelievo.
          I valori sono indicativi e dichiarati dagli operatori: verifica sempre i Termini e
          Condizioni ufficiali. Vietato ai minori di 18 anni.
        </p>
      </section>

      <ComparisonTable />

      <section className="mx-auto max-w-6xl px-2.5 pb-10 md:px-6 md:pb-16">
        <h2 className="mb-3 font-serif text-lg md:text-3xl">Tutti gli operatori della selezione</h2>
        <OperatorCardsGrid />
      </section>
    </PageShell>
  );
}
