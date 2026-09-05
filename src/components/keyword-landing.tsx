import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { RelatedLinks, RatingBadge } from "@/components/casino-ui";
import { sortedOperators, type Operator } from "@/lib/operators";
import { getCasinoMeta, DECLARED_DATA_NOTE } from "@/data/casinos";
import { getOperatorBonus, BONUS_NOTE } from "@/data/bonuses";
import { guides } from "@/data/guides";

/**
 * Rete di rimandi tra le guide: ogni pagina informativa segnala le altre
 * guide principali (esclusa quella corrente), così i crawler trovano sempre
 * percorsi interni verso ogni contenuto e le pagine nuove ricevono link
 * dalle pagine già indicizzate.
 */
function GuideNetwork() {
  const pathname = useLocation({ select: (l) => l.pathname });
  const related = guides
    .filter((g) => g.path !== pathname)
    .sort((a, b) => Number(b.priority) - Number(a.priority))
    .slice(0, 8);
  return (
    <section className="mt-12" aria-label="Guide collegate">
      <h2 className="font-serif text-2xl">Guide collegate</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((g) => (
          <li key={g.path} className="rounded-xl border border-border bg-card p-4">
            <Link to={g.path} className="font-medium hover:text-gold">
              {g.title}
            </Link>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{g.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Bonus ufficiali (senza deposito e con deposito) dichiarati dal concessionario. */
export function BonusLines({ slug }: { slug: string }) {
  const bonus = getOperatorBonus(slug);
  if (!bonus) return null;
  return (
    <div className="mt-1 space-y-0.5">
      <p className="text-sm font-semibold text-gold">
        Senza deposito:{" "}
        {bonus.noDeposit ? (
          bonus.noDeposit.amount
        ) : (
          <span className="font-normal text-muted-foreground">dato non disponibile</span>
        )}
      </p>
      <p className="text-[12px] text-foreground/80">
        Con deposito:{" "}
        {bonus.deposit ? bonus.deposit.amount : <span className="text-muted-foreground">dato non disponibile</span>}
      </p>
    </div>
  );
}

/**
 * Blocco offerte ad alta visibilità: logo, dato dichiarato dall'operatore e
 * pulsante verso il sito ufficiale (nessun claim promozionale aggiunto).
 */
export function OfferBoard({
  operators,
  title = "Offerte dichiarate dai concessionari ADM",
  subtitle,
  limit = 4,
}: {
  operators?: Operator[];
  title?: string;
  subtitle?: string;
  limit?: number;
}) {
  const list = (operators ?? sortedOperators).slice(0, limit);

  return (
    <section className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-4 md:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-xl md:text-2xl">{title}</h2>
        <span className="rounded-full border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-gold">
          Solo +18
        </span>
      </div>
      {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}

      <div className="mt-5 grid gap-3">
        {list.map((op, i) => {
          const meta = getCasinoMeta(op.slug);
          return (
            <div
              key={op.slug}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-card p-3 md:p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold/10 text-sm font-bold text-gold">
                  {i + 1}
                </span>
                {op.logo ? (
                  <img
                    src={op.logo}
                    alt={`Logo ${op.name}`}
                    loading="lazy"
                    width={96}
                    height={40}
                    className="hidden h-10 w-24 shrink-0 rounded bg-white/90 object-contain p-1 sm:block"
                  />
                ) : null}
                <div className="min-w-0">
                  <p className="truncate font-serif text-base md:text-lg">{op.name}</p>
                  <p className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">
                    {op.concessionN}
                  </p>
                  <BonusLines slug={op.slug} />
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Deposito min. {meta?.minDeposit ?? "n.d."} · Prelievo min.{" "}
                    {meta?.minWithdrawal ?? "n.d."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                {meta ? <RatingBadge rating={meta.rating} size="sm" /> : null}
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-background shadow-sm transition-transform hover:scale-[1.02] md:text-sm"
                >
                  Vai al sito <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/operatori/$slug"
                  params={{ slug: op.slug }}
                  className="text-[11px] text-muted-foreground underline hover:text-gold"
                >
                  Recensione
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] leading-snug text-muted-foreground">{DECLARED_DATA_NOTE}</p>
      <p className="mt-2 text-[11px] leading-snug text-muted-foreground">{BONUS_NOTE}</p>
    </section>
  );
}

export type LandingFaq = { q: string; a: string };

/** Struttura condivisa delle landing informative su query specifiche. */
export function KeywordLanding({
  breadcrumb,
  eyebrow = "Guida informativa 2026",
  h1,
  intro,
  faqs,
  offerOperators,
  offerTitle,
  offerSubtitle,
  children,
}: {
  breadcrumb: string;
  eyebrow?: string;
  h1: string;
  intro: string;
  faqs: LandingFaq[];
  offerOperators?: Operator[];
  offerTitle?: string;
  offerSubtitle?: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-2.5 py-8 md:px-6 md:py-16">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          / {breadcrumb}
        </nav>

        <header className="mt-4 border-b border-border pb-6">
          <p className="text-xs uppercase tracking-widest text-gold">{eyebrow}</p>
          <h1 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">{h1}</h1>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">{intro}</p>
        </header>

        <OfferBoard operators={offerOperators} title={offerTitle} subtitle={offerSubtitle} />

        {children}

        <section className="mt-12">
          <h2 className="font-serif text-2xl">Domande frequenti</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-4">
                <summary className="cursor-pointer text-sm font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-center">
          <p className="font-serif text-lg">Confronta tutti i concessionari ADM</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Filtra per metodo di pagamento, deposito minimo e tempi di prelievo dichiarati.
          </p>
          <Link
            to="/"
            hash="operatori"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-background"
          >
            Apri il comparatore <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <GuideNetwork />

        <RelatedLinks currentPath={pathname} />

        <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Contenuto informativo ai sensi dell&apos;art. 9 D.L. 87/2018. Vietato ai minori di 18 anni.
          Il gioco può causare dipendenza patologica: numero verde 800 558822.
        </p>
      </article>
    </PageShell>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          {t}
        </li>
      ))}
    </ul>
  );
}
