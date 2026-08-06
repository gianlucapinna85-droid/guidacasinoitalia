import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { operators } from "@/lib/operators";
import { providers } from "@/lib/providers";

function load(slug: string) {
  const op = operators.find((o) => o.slug === slug);
  if (!op) throw notFound();
  return { operator: op };
}

export const Route = createFileRoute("/provider/$slug")({
  loader: ({ params }) => load(params.slug),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Provider non trovati — GuidaCasinò.IT" }, { name: "robots", content: "noindex" }] };
    }
    const { operator } = loaderData;
    const canonical = `https://www.guidacasino-italia.it/provider/${operator.slug}`;
    const title = `Provider slot ${operator.name} 2026 — Elenco, RTP medio e slot più giocate`;
    const description = `Elenco dei provider di slot disponibili su ${operator.name} (concessione ${operator.concessionN}): loghi ufficiali, RTP medio dichiarato e slot più giocata di ogni fornitore. Contenuto informativo, solo +18.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Provider di slot disponibili su ${operator.name}`,
            itemListElement: providers.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              description: `RTP medio ${p.rtpAverage} — slot più giocata: ${p.topSlot} (RTP ${p.topSlotRtp})`,
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl">Pagina non trovata</h1>
        <Link to="/" hash="operatori" className="mt-8 inline-flex items-center gap-2 text-sm text-gold">
          <ArrowLeft className="h-4 w-4" /> Torna all'elenco
        </Link>
      </section>
    </PageShell>
  ),
  component: ProvidersPage,
});

function ProvidersPage() {
  const { operator: op } = Route.useLoaderData() as ReturnType<typeof load>;

  return (
    <PageShell>
      <article className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <Link
          to="/operatori/$slug"
          params={{ slug: op.slug }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold"
        >
          <ArrowLeft className="h-3 w-3" /> Scheda {op.name}
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-gold">Provider disponibili — aggiornato 2026</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">
            Provider di slot su {op.name}: RTP medio e titoli più giocati
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Elenco informativo dei fornitori di giochi presenti nel catalogo di {op.name} (concessione{" "}
            <strong className="text-foreground">{op.concessionN}</strong>). Il catalogo effettivo può variare:
            l'elenco aggiornato in tempo reale è pubblicato nella sezione casinò del concessionario.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <div key={p.slug} className="rounded-xl border border-border bg-card p-5">
              <div className="flex h-20 items-center justify-center overflow-hidden rounded-lg border border-gold/30 bg-background">
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="font-serif text-xl text-gold">{p.name}</span>
                )}
              </div>
              <h2 className="mt-4 font-serif text-lg">{p.name}</h2>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</p>
              <dl className="mt-3 space-y-1.5 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">RTP medio dichiarato</dt>
                  <dd className="font-medium text-gold">{p.rtpAverage}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Slot più giocata</dt>
                  <dd className="text-right font-medium text-foreground">{p.topSlot}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">RTP del titolo</dt>
                  <dd className="font-medium text-foreground">{p.topSlotRtp}</dd>
                </div>
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-xl">Come leggere l'RTP dei provider</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            L'RTP (Return To Player) è un valore statistico teorico calcolato su milioni di sessioni simulate:
            non indica quanto un singolo utente riceverà indietro. I valori indicati sono medie dichiarate dai
            produttori e possono variare da titolo a titolo e in base alla configurazione adottata dal
            concessionario. Il dato ufficiale di ogni gioco è pubblicato nella scheda informativa del titolo.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
          <h2 className="font-serif text-lg text-destructive">Avvertenza</h2>
          <p className="mt-2 text-sm text-foreground/90">
            Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018, privo di finalità promozionali. Il gioco è
            vietato ai minori di 18 anni e può causare dipendenza patologica. Telefono Verde ISS 800 558822.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
