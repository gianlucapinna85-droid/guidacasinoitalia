import { createFileRoute, Link } from "@tanstack/react-router";
import { Wallet, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks, CasinoBadges, RatingBadge } from "@/components/casino-ui";
import { sortedOperators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";

const CANONICAL = "https://www.guidacasino-italia.it/casino-paypal";
const TITLE = "Casinò PayPal ADM 2026: siti legali che accettano PayPal";
const DESCRIPTION =
  "Elenco informativo dei casinò online con concessione ADM che dichiarano PayPal tra i metodi di pagamento: depositi, prelievi, tempi e verifiche. Solo +18.";

const FAQS = [
  {
    q: "PayPal è utilizzabile sui casinò ADM?",
    a: "Sì. PayPal è uno dei metodi di pagamento più diffusi tra i concessionari ADM. L'account PayPal deve essere intestato alla stessa persona titolare del conto di gioco, come previsto dalla normativa antiriciclaggio italiana.",
  },
  {
    q: "Quanto tempo richiede un prelievo con PayPal?",
    a: "I concessionari dichiarano in genere tempi tra poche ore e 3 giorni lavorativi, dopo il completamento della verifica dei documenti. I tempi effettivi sono indicati nella sezione informativa del singolo operatore.",
  },
  {
    q: "PayPal applica commissioni sui casinò ADM?",
    a: "Nella maggior parte dei casi i concessionari non applicano commissioni su depositi e prelievi con PayPal. Eventuali costi sono indicati nei Termini e Condizioni dell'operatore.",
  },
  {
    q: "Posso usare PayPal senza verificare l'identità?",
    a: "No. La verifica dell'identità è obbligatoria per legge su tutti i concessionari ADM prima di poter prelevare, indipendentemente dal metodo di pagamento scelto.",
  },
];

export const Route = createFileRoute("/casino-paypal")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "casino paypal, casino adm paypal, casino online paypal italia, prelievo paypal casino, siti scommesse paypal adm",
      },
      { name: "robots", content: "index, follow, max-snippet:-1" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "it-IT",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.guidacasino-italia.it/" },
            { "@type": "ListItem", position: 2, name: "Casinò PayPal ADM", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const SECTIONS = [
  { id: "cos-e", label: "PayPal sui casinò ADM" },
  { id: "elenco", label: "Operatori che dichiarano PayPal" },
  { id: "come-funziona", label: "Depositi e prelievi" },
  { id: "faq", label: "Domande frequenti" },
];

function Page() {
  const paypalOps = sortedOperators.filter((o) => getCasinoMeta(o.slug)?.paypal);

  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / Casinò PayPal ADM
        </nav>

        <header className="mt-6 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-gold">Guida informativa 2026</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight md:text-5xl">
            Casinò PayPal ADM: i concessionari legali che accettano PayPal
          </h1>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">{DESCRIPTION}</p>
        </header>

        <nav className="mt-8 rounded-xl border border-border bg-card p-5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Indice</p>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="cos-e" className="mt-12">
          <h2 className="font-serif text-2xl">PayPal sui casinò con concessione ADM</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            PayPal è tra i metodi di pagamento più utilizzati sui casinò online titolari di
            concessione ADM (ex AAMS) perché non richiede di comunicare i dati della carta
            all'operatore e consente di tracciare in un unico account depositi e prelievi. La
            normativa italiana impone che il conto PayPal sia intestato alla stessa persona titolare
            del conto di gioco: intestazioni diverse comportano il blocco del prelievo.
          </p>
        </section>

        <section id="elenco" className="mt-12">
          <h2 className="font-serif text-2xl">Operatori ADM che dichiarano PayPal</h2>
          <div className="mt-6 grid gap-4">
            {paypalOps.map((op) => {
              const meta = getCasinoMeta(op.slug);
              return (
                <div
                  key={op.slug}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div>
                    <h3 className="font-serif text-lg">{op.name}</h3>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {op.concessionN} — deposito min. {meta?.minDeposit ?? "n.d."} · prelievo min.{" "}
                      {meta?.minWithdrawal ?? "n.d."}
                    </p>
                    <div className="mt-2">
                      <CasinoBadges slug={op.slug} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {meta ? <RatingBadge rating={meta.rating} /> : null}
                    <Link
                      to="/operatori/$slug"
                      params={{ slug: op.slug }}
                      className="inline-flex items-center gap-1 rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/20"
                    >
                      Leggi l'analisi <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="come-funziona" className="mt-12">
          <h2 className="font-serif text-2xl">Come funzionano depositi e prelievi con PayPal</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Collega l'account PayPal al conto di gioco già verificato, con la stessa intestazione anagrafica.",
              "Il deposito è immediato e viene accreditato sul conto di gioco senza commissioni nella maggior parte dei casi.",
              "Il prelievo può essere richiesto solo dopo la verifica dei documenti imposta dalla normativa antiriciclaggio.",
              "L'accredito avviene in genere entro pochi giorni lavorativi, secondo i tempi indicati dal concessionario.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/5 p-5">
            <Wallet className="h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm text-foreground/90">
              PayPal non modifica le probabilità di gioco né l'RTP: incide solo sui tempi e sulla
              sicurezza delle transazioni.{" "}
              <Link to="/guida-rtp" className="underline hover:text-gold">
                Leggi la guida all'RTP
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl">Domande frequenti</h2>
          <div className="mt-6 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedLinks />

        <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Vietato ai minori di 18 anni. Il
          gioco può causare dipendenza patologica.
        </p>
      </article>
    </PageShell>
  );
}
