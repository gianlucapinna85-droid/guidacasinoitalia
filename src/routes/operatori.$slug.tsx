import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, CreditCard, Calendar, Gauge, Layers } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { operators } from "@/lib/operators";
import { buildReview } from "@/lib/operator-review";

export const Route = createFileRoute("/operatori/$slug")({
  loader: ({ params }) => {
    const op = operators.find((o) => o.slug === params.slug);
    if (!op) throw notFound();
    return { operator: op, review: buildReview(op) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Scheda operatore non trovata — GuidaCasinò.IT" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { operator } = loaderData;
    const title = `${operator.name} — Scheda informativa concessionario ADM | GuidaCasinò.IT`;
    const description = `Scheda informativa neutrale su ${operator.name}: concessione ADM ${operator.concessionN}, RTP medio ${operator.rtpAverage}, ${operator.games}+ titoli, ${operator.paymentMethods.length} metodi di pagamento. Solo per +18.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/operatori/${operator.slug}` }],
    };
  },
  notFoundComponent: OperatorNotFound,
  component: OperatorPage,
});

function OperatorNotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl">Scheda non trovata</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          L'operatore richiesto non è presente nel nostro elenco informativo.
        </p>
        <Link
          to="/"
          hash="operatori"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm text-gold hover:bg-gold/20"
        >
          <ArrowLeft className="h-4 w-4" /> Torna all'elenco
        </Link>
      </section>
    </PageShell>
  );
}

function OperatorPage() {
  const { operator: op, review } = Route.useLoaderData();

  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <Link
          to="/"
          hash="operatori"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold"
        >
          <ArrowLeft className="h-3 w-3" /> Elenco concessionari
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-gold">Scheda informativa</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">{op.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Concessione <strong className="text-foreground">{op.concessionN}</strong> — dati riferiti
            all'elenco pubblico dei concessionari ADM.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FactCard icon={Calendar} label="Attivo dal" value={op.founded.toString()} />
          <FactCard icon={Gauge} label="RTP medio dichiarato" value={op.rtpAverage} />
          <FactCard icon={Layers} label="Titoli disponibili" value={`${op.games}+`} />
          <FactCard
            icon={CreditCard}
            label="Metodi di pagamento"
            value={`${op.paymentMethods.length}`}
          />
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-2xl">Analisi informativa</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{review.summary}</p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold" />
              <h2 className="font-serif text-xl">Elementi rilevati</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {review.strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-warning/40 bg-warning/5 p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <h2 className="font-serif text-xl">Punti di attenzione</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {review.attention.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-xl">Metodi di pagamento dichiarati</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {op.paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground/90"
              >
                {m}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
          <h2 className="font-serif text-xl text-destructive">Avvertenza</h2>
          <p className="mt-3 text-sm text-foreground/90">{review.suitability}</p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <a
            href={op.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-medium text-gold hover:bg-gold/20"
          >
            Verifica concessione su ADM <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/gioco-responsabile"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:bg-accent"
          >
            Gioco responsabile
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Non costituisce comunicazione
          commerciale né incentivo al gioco. Vietato ai minori di 18 anni.
        </p>
      </article>
    </PageShell>
  );
}

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-gold">
        <Icon className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      </div>
      <p className="mt-2 font-serif text-2xl text-foreground">{value}</p>
    </div>
  );
}
