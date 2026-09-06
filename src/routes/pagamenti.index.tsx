import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { socialImageMeta } from "@/lib/social-image";
import { activePaymentMethods, operatorsForMethod } from "@/lib/payments";

const TITLE = "Metodi di pagamento casinò ADM 2026 | Guida Casinò Italia";
const DESC =
  "Hub dei metodi di pagamento accettati dai casinò ADM: PayPal, carte, PostePay, Skrill, Neteller e bonifico, con gli operatori che li dichiarano. +18.";
const URL = "https://www.guidacasino-italia.it/pagamenti";

export const Route = createFileRoute("/pagamenti/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "metodi pagamento casino italia, casino paypal italia, casino postepay, bonifico casino adm, prelievi casino italiani" },
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
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 py-5 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> / Pagamenti
        </nav>
        <h1 className="mt-2 font-serif text-xl md:text-4xl">Metodi di pagamento dei casinò ADM</h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-snug text-muted-foreground md:text-base">
          Ogni concessionario dichiara i metodi accettati per depositi e prelievi sul conto di
          gioco. Qui trovi una pagina dedicata per ciascun metodo, con l'elenco degli operatori che
          lo dichiarano nelle proprie condizioni.
        </p>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {activePaymentMethods.map((m) => (
            <Link
              key={m.slug}
              to="/pagamenti/$slug"
              params={{ slug: m.slug }}
              className="gc-card rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50"
            >
              <h2 className="font-serif text-base md:text-lg">{m.name}</h2>
              <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{m.short}</p>
              <p className="mt-2 text-[11px] font-semibold text-gold">
                {operatorsForMethod(m).length} operatori ADM lo dichiarano
              </p>
            </Link>
          ))}
        </div>

        <ComplianceBadges />
      </section>
    </PageShell>
  );
}
