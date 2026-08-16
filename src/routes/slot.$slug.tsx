import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { slots } from "@/data/slots";
import { slotDetails } from "@/data/slot-details";
import { operators } from "@/lib/operators";
import { socialImageMeta } from "@/lib/social-image";

const BASE = "https://www.guidacasino-italia.it";

export const Route = createFileRoute("/slot/$slug")({
  loader: ({ params }) => {
    const slot = slots.find((s) => s.slug === params.slug);
    if (!slot) throw notFound();
    return { slug: slot.slug, name: slot.name, provider: slot.provider, rtp: slot.rtp };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Slot non disponibile" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} (${loaderData.provider}): RTP, funzioni e come funziona`;
    const desc = `Guida informativa alla slot ${loaderData.name} di ${loaderData.provider}: RTP dichiarato ${loaderData.rtp}, volatilità, funzioni bonus e casinò ADM su cui è disponibile. +18.`;
    const url = `${BASE}/slot/${loaderData.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...socialImageMeta(),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: SlotNotFound,
  component: Page,
});

function SlotNotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-3 py-16 text-center">
        <h1 className="font-serif text-2xl">Slot non trovata</h1>
        <Link to="/slot-piu-giocate" className="mt-4 inline-block text-gold underline">
          Vedi tutte le slot più giocate
        </Link>
      </section>
    </PageShell>
  );
}

function Page() {
  const { slug } = Route.useParams();
  const slot = slots.find((s) => s.slug === slug)!;
  const detail = slotDetails[slug];
  const op = operators.find((o) => o.slug === slot.operatorSlug);

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-2.5 py-5 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
          <Link to="/slot-piu-giocate" className="hover:text-foreground">Slot più giocate</Link> /{" "}
          {slot.name}
        </nav>

        <h1 className="mt-2 font-serif text-xl md:text-4xl">
          {slot.name}: come funziona, RTP e volatilità
        </h1>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
          Provider {slot.provider} · RTP {slot.rtp} · Volatilità {slot.volatility}
        </p>

        <img
          src={slot.image}
          alt={`Illustrazione della slot ${slot.name} di ${slot.provider}`}
          width={640}
          height={512}
          decoding="async"
          className="mt-3 aspect-[5/4] w-full rounded-xl object-cover md:aspect-[16/7]"
        />

        {op ? (
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold px-3 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-gold/25 hover:brightness-110"
          >
            Visita qui · {op.name} <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        ) : null}

        <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-muted-foreground md:text-base">
          {(detail?.howItWorks ?? [slot.description]).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {detail ? (
          <>
            <h2 className="mt-6 font-serif text-lg md:text-2xl">Caratteristiche tecniche</h2>
            <dl className="mt-2 grid grid-cols-2 gap-2 text-[12px] md:text-sm">
              {detail.specs.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-2.5">
                  <dt className="uppercase tracking-wide text-muted-foreground">{s.label}</dt>
                  <dd className="font-semibold text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-6 font-serif text-lg md:text-2xl">Domande frequenti</h2>
            <div className="mt-2 space-y-2">
              {detail.faq.map((f) => (
                <details key={f.q} className="rounded-lg border border-border bg-card p-3">
                  <summary className="cursor-pointer text-[13px] font-semibold">{f.q}</summary>
                  <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground md:text-sm">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </>
        ) : null}

        {op ? (
          <p className="mt-6 text-[12px] text-muted-foreground">
            Titolo disponibile nel catalogo di <strong className="text-foreground">{op.name}</strong>{" "}
            ({op.concessionN}).{" "}
            <Link to="/operatori/$slug" params={{ slug: op.slug }} className="text-gold underline">
              Leggi la recensione di {op.name}
            </Link>
            .
          </p>
        ) : null}

        <p className="mt-4 text-[11px] leading-snug text-muted-foreground">
          Contenuto informativo. Le immagini sono illustrazioni originali a scopo editoriale e non
          riproducono materiale protetto dei provider. Vietato ai minori di 18 anni: il gioco può
          causare dipendenza patologica.
        </p>

        <ComplianceBadges />
      </article>
    </PageShell>
  );
}
