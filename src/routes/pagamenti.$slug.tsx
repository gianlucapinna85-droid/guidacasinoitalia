import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { socialImageMeta } from "@/lib/social-image";
import { getPaymentMethod, operatorsForMethod } from "@/lib/payments";
import { getCasinoMeta } from "@/data/casinos";

export const Route = createFileRoute("/pagamenti/$slug")({
  loader: ({ params }) => {
    const method = getPaymentMethod(params.slug);
    if (!method) throw notFound();
    return { method };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Metodo non disponibile" }, { name: "robots", content: "noindex" }],
      };
    }
    const { method } = loaderData;
    const title = `${method.name} nei casinò ADM 2026 | Guida Casinò Italia`;
    const desc = `${method.short} Elenco degli operatori con concessione ADM che dichiarano ${method.name} per depositi e prelievi. +18.`;
    const url = `https://www.guidacasino-italia.it/pagamenti/${method.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `${method.name} casino italia, casino online ${method.name.toLowerCase()}, depositi e prelievi ${method.name}, casino adm italia` },
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
  component: Page,
});

function Page() {
  const { method } = Route.useLoaderData();
  const list = operatorsForMethod(method);

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 py-5 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
          <Link to="/pagamenti" className="hover:text-foreground">Pagamenti</Link> / {method.name}
        </nav>
        <h1 className="mt-2 font-serif text-xl md:text-4xl">
          {method.name} nei casinò online ADM
        </h1>
        <p className="mt-2 max-w-3xl text-[13px] leading-snug text-muted-foreground md:text-base">
          {method.intro}
        </p>

        <h2 className="mt-6 font-serif text-lg md:text-2xl">
          Operatori ADM che dichiarano {method.name}
        </h2>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((op) => {
            const meta = getCasinoMeta(op.slug);
            return (
              <article key={op.slug} className="rounded-xl border border-border bg-card p-3">
                <div className="flex h-14 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                  {op.logo ? (
                    <img
                      src={op.logo}
                      alt={`Logo ${op.name}`}
                      width={192}
                      height={80}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm text-neutral-800">{op.name}</span>
                  )}
                </div>
                <h3 className="mt-2 font-serif text-base">{op.name}</h3>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {op.concessionN}
                </p>
                <dl className="mt-2 grid grid-cols-2 gap-1 text-[11px]">
                  <div>
                    <dt className="uppercase tracking-wide text-muted-foreground">Deposito min.</dt>
                    <dd className="font-semibold">{meta?.minDeposit ?? "n.d."}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wide text-muted-foreground">Prelievo min.</dt>
                    <dd className="font-semibold">{meta?.minWithdrawal ?? "n.d."}</dd>
                  </div>
                </dl>
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="gc-cta mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gold px-3 py-2 text-[12px] font-bold text-primary-foreground"
                >
                  Visita qui <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/operatori/$slug"
                  params={{ slug: op.slug }}
                  className="mt-1.5 block text-center text-[11px] text-muted-foreground underline hover:text-gold"
                >
                  Recensione {op.name}
                </Link>
              </article>
            );
          })}
        </div>

        <ComplianceBadges />
      </section>
    </PageShell>
  );
}
