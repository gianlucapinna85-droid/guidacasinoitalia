import { Link } from "@tanstack/react-router";
import { ShieldCheck, Wallet, Zap, Star, ArrowRight } from "lucide-react";
import { getCasinoMeta } from "@/data/casinos";
import { operators } from "@/lib/operators";
import { guides } from "@/data/guides";

export function RatingBadge({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const big = size === "md";
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-lg border border-gold/50 bg-gold/10 ${
        big ? "px-3 py-1.5" : "px-2 py-1"
      }`}
      aria-label={`Voto redazionale ${rating.toFixed(1)} su 10`}
    >
      <Star className={big ? "h-4 w-4 text-gold" : "h-3 w-3 text-gold"} fill="currentColor" />
      <span className={`font-serif text-gold ${big ? "text-lg" : "text-sm"}`}>
        {rating.toFixed(1)}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">/10</span>
    </div>
  );
}

export function CasinoBadges({ slug }: { slug: string }) {
  const meta = getCasinoMeta(slug);
  return (
    <div className="flex flex-wrap gap-1.5">
      <Badge icon={ShieldCheck} label="ADM" />
      {meta?.paypal ? <Badge icon={Wallet} label="PayPal" /> : null}
      {meta?.fastWithdrawal ? <Badge icon={Zap} label="Prelievo rapido" /> : null}
    </div>
  );
}

function Badge({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/80">
      <Icon className="h-3 w-3 text-gold" />
      {label}
    </span>
  );
}

/**
 * Link interni generati automaticamente per ogni guida e recensione.
 * Le guide arrivano dal registro src/data/guides.ts, le recensioni da operators.
 * Non serve aggiungere link a mano: basta registrare la nuova guida/operatore.
 */
export function RelatedLinks({ currentSlug, currentPath }: { currentSlug?: string; currentPath?: string }) {
  const related = operators
    .filter((o) => o.slug !== currentSlug)
    .sort((a, b) => (getCasinoMeta(b.slug)?.rating ?? 0) - (getCasinoMeta(a.slug)?.rating ?? 0))
    .slice(0, 6);
  const guideLinks = guides.filter((g) => g.path !== currentPath).slice(0, 5);
  return (
    <section className="mt-12 rounded-xl border border-border bg-card p-6">
      <h2 className="font-serif text-xl">Contenuti correlati</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Guide</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link to="/" hash="comparatore" className="hover:text-gold">
                Comparatore casinò ADM 2026
              </Link>
            </li>
            {guideLinks.map((g) => (
              <li key={g.path}>
                <Link to={g.path} className="hover:text-gold">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Recensioni correlate
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            {related.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/operatori/$slug"
                  params={{ slug: o.slug }}
                  className="inline-flex items-center gap-1 hover:text-gold"
                >
                  Recensione {o.name} <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** CTA sticky mobile richiesta dalla specifica. */
export function StickyCompareCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Link
        to="/"
        hash="operatori"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-gold/30"
      >
        Lista completa casinò ADM <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
