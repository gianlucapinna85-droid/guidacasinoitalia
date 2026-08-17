import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ComplianceBadges } from "@/components/site-layout";
import { operators } from "@/lib/operators";
import { socialImageMeta } from "@/lib/social-image";

const BASE = "https://www.guidacasino-italia.it";
const TITLE = "Bonus Casino Online: sottocategorie, requisiti e condizioni";
const DESC =
  "Hub dei bonus casino ADM: senza deposito, di benvenuto, immediati con SPID, requisiti di scommessa e bonus scommesse. Informativa, +18, gioco responsabile.";
const URL = `${BASE}/bonus`;

type Sub = {
  to: string;
  title: string;
  text: string;
  tag: string;
};

const SUBCATEGORIES: Sub[] = [
  {
    to: "/bonus-casino-online-senza-deposito",
    title: "Bonus senza deposito",
    text: "Come funzionano i bonus erogati alla sola verifica del conto, con limiti di prelievo e scadenze.",
    tag: "Senza deposito",
  },
  {
    to: "/bonus-senza-deposito",
    title: "Guida ai bonus senza deposito",
    text: "Requisiti di puntata, giochi ammessi e condizioni da leggere prima di accettare l'offerta.",
    tag: "Senza deposito",
  },
  {
    to: "/bonus-benvenuto-casino",
    title: "Bonus di benvenuto",
    text: "Tipologie di welcome bonus sul primo deposito, percentuali, tetti massimi e wagering.",
    tag: "Primo deposito",
  },
  {
    to: "/bonus-immediato-spid",
    title: "Bonus immediato con SPID",
    text: "Registrazione con identità digitale e accredito rapido senza caricamento manuale dei documenti.",
    tag: "Registrazione",
  },
  {
    to: "/requisiti-scommessa-bonus",
    title: "Requisiti di scommessa",
    text: "Cosa significa wagering x30 o x50 e come calcolare il volume di gioco richiesto.",
    tag: "Condizioni",
  },
  {
    to: "/bonus-scommesse-sportive",
    title: "Bonus scommesse sportive",
    text: "Offerte dei bookmaker ADM: quote minime, mercati esclusi e scadenze dei bonus sportivi.",
    tag: "Scommesse",
  },
];

export const Route = createFileRoute("/bonus/")({
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
  const withNoDeposit = operators.filter((o) => o.noDepositBonus?.amount);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sottocategorie bonus casino online ADM",
    itemListElement: SUBCATEGORIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${BASE}${s.to}`,
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
          / Bonus
        </nav>

        <h1 className="mt-2 font-serif text-xl md:text-4xl">Bonus casino online ADM</h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground md:text-base">
          Le promozioni dei concessionari ADM cambiano spesso e sono sempre soggette a termini e
          condizioni. In questa sezione trovi le sottocategorie principali con la spiegazione dei
          meccanismi: requisiti di scommessa, scadenze, giochi ammessi e limiti di prelievo.
        </p>

        <div className="mt-4">
          <ComplianceBadges />
        </div>

        <h2 className="mt-8 font-serif text-lg md:text-2xl">Sottocategorie</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-4">
          {SUBCATEGORIES.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-3 transition-colors hover:border-gold/60 md:p-4"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                  {s.tag}
                </span>
                <span className="mt-1 font-serif text-[15px] md:text-lg">{s.title}</span>
                <span className="mt-1 text-[12px] leading-relaxed text-muted-foreground md:text-sm">
                  {s.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {withNoDeposit.length > 0 && (
          <>
            <h2 className="mt-10 font-serif text-lg md:text-2xl">
              Operatori con bonus senza deposito dichiarato
            </h2>
            <div className="mt-3 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[520px] text-left text-[12px] md:text-sm">
                <thead className="bg-muted/40 text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Operatore</th>
                    <th className="px-3 py-2 font-semibold">Bonus senza deposito</th>
                    <th className="px-3 py-2 font-semibold">Condizioni sintetiche</th>
                    <th className="px-3 py-2 font-semibold">Scheda</th>
                  </tr>
                </thead>
                <tbody>
                  {withNoDeposit.map((o) => (
                    <tr key={o.slug} className="border-t border-border">
                      <td className="px-3 py-2 font-semibold">{o.name}</td>
                      <td className="px-3 py-2 text-gold">{o.noDepositBonus!.amount}</td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {o.noDepositBonus!.description}
                      </td>
                      <td className="px-3 py-2">
                        <Link
                          to="/operatori/$slug"
                          params={{ slug: o.slug }}
                          className="text-gold underline"
                        >
                          Recensione
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <div className="mt-10 rounded-xl border border-border bg-card p-3 text-[12px] leading-relaxed text-muted-foreground md:p-5 md:text-sm">
          <p>
            Nessun bonus è &quot;gratuito&quot;: ogni promozione prevede requisiti di puntata,
            scadenze e limiti di prelievo indicati nei termini e condizioni dell&apos;operatore, che
            restano l&apos;unica fonte valida. Il gioco è vietato ai minori di 18 anni e può causare
            dipendenza patologica.
          </p>
          <p className="mt-2">
            Vedi anche la{" "}
            <Link to="/gioco-responsabile" className="text-gold underline">
              pagina sul gioco responsabile
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
