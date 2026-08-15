import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { SlotsGrid } from "@/components/slots-grid";
import { slots } from "@/data/slots";
import { socialImageMeta } from "@/lib/social-image";

const TITLE = "Le 10 slot più giocate in Italia 2026 | Guida Casinò Italia";
const DESC =
  "Book of Ra, Book of Dead, Megaways e le altre slot più giocate nei casinò ADM: RTP, volatilità, provider e dove trovarle. Informativo, +18.";
const URL = "https://www.guidacasino-italia.it/slot-piu-giocate";

export const Route = createFileRoute("/slot-piu-giocate")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Le 10 slot più giocate in Italia",
          numberOfItems: slots.length,
          itemListElement: slots.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${s.name} (${s.provider})`,
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-2.5 py-5 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> / Slot più giocate
        </nav>
        <h1 className="mt-2 font-serif text-xl md:text-4xl">Le 10 slot più giocate in Italia</h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-snug text-muted-foreground md:text-base">
          Una selezione dei titoli più conosciuti sui casinò con concessione ADM, con RTP dichiarato
          dal provider, volatilità e operatore su cui sono disponibili. Le immagini sono
          illustrazioni originali. Contenuto informativo, vietato ai minori di 18 anni.
        </p>
        <SlotsGrid />
      </section>
    </PageShell>
  );
}
