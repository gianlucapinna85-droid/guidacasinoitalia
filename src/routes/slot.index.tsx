import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { slots } from "@/data/slots";
import { providers } from "@/lib/providers";
import { socialImageMeta } from "@/lib/social-image";

const BASE = "https://www.guidacasino-italia.it";
const TITLE = "Slot online in Italia per provider: elenco giochi e RTP";
const DESC =
  "Elenco delle slot online disponibili sui casinò ADM, raggruppate per provider con RTP dichiarato e volatilità. Contenuto informativo, +18, gioco responsabile.";
const URL = `${BASE}/slot`;

export const Route = createFileRoute("/slot/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "slot online italia, slot adm per provider, rtp slot italia, slot online lazio, slot online campania" },
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

function groupByProvider() {
  const map = new Map<string, typeof slots>();
  for (const s of slots) {
    const list = map.get(s.provider) ?? [];
    list.push(s);
    map.set(s.provider, list);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

function Page() {
  const groups = groupByProvider();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Slot online per provider",
    itemListElement: slots.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.name} (${s.provider}) — RTP ${s.rtp}`,
      url: `${BASE}/slot/${s.slug}`,
    })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto max-w-5xl px-2.5 py-5 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          / Slot
        </nav>

        <h1 className="mt-2 font-serif text-xl md:text-4xl">Slot online per provider e RTP</h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground md:text-base">
          Tutte le slot disponibili sui concessionari ADM raccolte per software provider, con RTP
          dichiarato dal produttore e volatilità. I valori sono indicativi: verifica sempre l&apos;RTP
          pubblicato nella scheda del singolo gioco sul sito del concessionario.
        </p>

        <div className="mt-4">
          <ComplianceBadges />
        </div>

        <h2 className="mt-8 font-serif text-lg md:text-2xl">RTP medio per provider</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[520px] text-left text-[12px] md:text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-semibold">Provider</th>
                <th className="px-3 py-2 font-semibold">RTP medio</th>
                <th className="px-3 py-2 font-semibold">Titolo di punta</th>
                <th className="px-3 py-2 font-semibold">Categoria</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p) => (
                <tr key={p.slug} className="border-t border-border">
                  <td className="px-3 py-2 font-semibold">{p.name}</td>
                  <td className="px-3 py-2 text-gold">{p.rtpAverage}</td>
                  <td className="px-3 py-2">
                    {p.topSlot} ({p.topSlotRtp})
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{p.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 font-serif text-lg md:text-2xl">Giochi disponibili per provider</h2>
        <div className="mt-4 space-y-8">
          {groups.map(([provider, list]) => (
            <div key={provider}>
              <h3 className="font-serif text-base md:text-xl">{provider}</h3>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {list.length} {list.length === 1 ? "gioco" : "giochi"} in elenco
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
                {list.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/slot/$slug"
                      params={{ slug: s.slug }}
                      className="flex h-full flex-col rounded-xl border border-border bg-card p-2.5 transition-colors hover:border-gold/60 md:p-3"
                    >
                      <span className="text-[13px] font-semibold md:text-base">{s.name}</span>
                      <span className="mt-1 text-[11px] text-gold md:text-xs">RTP {s.rtp}</span>
                      <span className="text-[11px] text-muted-foreground md:text-xs">
                        Volatilità {s.volatility}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card p-3 text-[12px] leading-relaxed text-muted-foreground md:p-5 md:text-sm">
          <p>
            L&apos;RTP (Return To Player) è un valore teorico calcolato su milioni di giocate e non
            garantisce alcun rendimento nel breve periodo. Il gioco può causare dipendenza
            patologica: è vietato ai minori di 18 anni.
          </p>
          <p className="mt-2">
            Approfondisci con la{" "}
            <Link to="/guida-rtp" className="text-gold underline">
              guida all&apos;RTP
            </Link>{" "}
            e con l&apos;elenco delle{" "}
            <Link to="/slot-piu-giocate" className="text-gold underline">
              slot più giocate in Italia
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
