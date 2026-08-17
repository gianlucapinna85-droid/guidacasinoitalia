import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { CasinoComparator } from "@/components/casino-comparator";
import { socialImageMeta } from "@/lib/social-image";
import { operators } from "@/lib/operators";

const TITLE = "Recensioni casinò online ADM 2026 | Guida Casinò Italia";
const DESC =
  "Tutte le recensioni dei casinò online con concessione ADM: voto redazionale, bonus dichiarati, depositi, prelievi e metodi di pagamento a confronto. +18.";
const URL = "https://www.guidacasino-italia.it/recensioni";

export const Route = createFileRoute("/recensioni/")({
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
      <section className="mx-auto max-w-6xl px-2.5 pt-5 md:px-6 md:pt-10">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> / Recensioni
        </nav>
        <h1 className="mt-2 font-serif text-xl md:text-4xl">Recensioni casinò online ADM</h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-snug text-muted-foreground md:text-base">
          Hub delle recensioni redazionali: ogni scheda analizza concessione, catalogo giochi, RTP
          medio dichiarato, condizioni di deposito e prelievo e strumenti di gioco responsabile.
          Usa filtri e ordinamento per confrontare gli operatori, poi apri la recensione completa.
        </p>
      </section>

      <CasinoComparator
        title="Ranking recensioni"
        subtitle="Ordina per voto, bonus o numero di giochi e filtra per metodo di pagamento e condizioni di conto."
      />

      <section className="mx-auto max-w-6xl px-2.5 pb-10 md:px-6">
        <h2 className="font-serif text-lg md:text-2xl">Tutte le recensioni</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {operators.map((op) => (
            <li key={op.slug}>
              <Link
                to="/operatori/$slug"
                params={{ slug: op.slug }}
                className="block rounded-lg border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-gold/50 hover:text-gold"
              >
                Recensione {op.name}
                <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">
                  {op.concessionN}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ComplianceBadges />
      </section>
    </PageShell>
  );
}
