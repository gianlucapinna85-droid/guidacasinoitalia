import { BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";
import { sortedBlog, blogPath } from "@/data/blog";

/** Pulsante verso il blog esterno di approfondimento (apre in nuova scheda). */
export function ExternalBlogButton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const pad = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm";
  return (
    <a
      href={EXTERNAL_BLOG_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Approfondimenti Extra Casinò — blog esterno"
      className={`inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 font-semibold text-gold transition-colors hover:bg-gold/20 ${pad} ${className}`}
    >
      <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>📖 Approfondimenti Extra Casinò</span>
    </a>
  );
}

/** Sidebar del blog: articoli recenti, link tematici e blog esterno. */
export function BlogSidebar({ currentSlug }: { currentSlug?: string }) {
  const recent = sortedBlog.filter((a) => a.slug !== currentSlug).slice(0, 8);
  return (
    <aside className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-lg">Ultimi articoli</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {recent.map((a) => (
            <li key={a.slug}>
              <Link to="/blog/$category/$slug" params={blogPath(a)} className="text-muted-foreground hover:text-gold">
                {a.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-lg">Sezioni consigliate</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link to="/migliori-casino-online-adm" className="text-muted-foreground hover:text-gold">Migliori casinò online ADM</Link></li>
          <li><Link to="/bonus-casino-online-senza-deposito" className="text-muted-foreground hover:text-gold">Bonus senza deposito aggiornati</Link></li>
          <li><Link to="/slot-online-soldi-veri" className="text-muted-foreground hover:text-gold">Tutte le slot online consigliate</Link></li>
          <li><Link to="/roulette-online-italia" className="text-muted-foreground hover:text-gold">Guida completa alla roulette online</Link></li>
          <li><Link to="/blackjack-online-italia" className="text-muted-foreground hover:text-gold">Blackjack online in Italia</Link></li>
          <li><Link to="/prelievi-veloci" className="text-muted-foreground hover:text-gold">Prelievi rapidi</Link></li>
          <li><Link to="/gioco-responsabile" className="text-muted-foreground hover:text-gold">Gioco responsabile</Link></li>
        </ul>
      </div>

      <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
        <h2 className="font-serif text-lg">Approfondimenti extra</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Contenuti aggiuntivi pubblicati sul nostro blog esterno, con analisi e note di
          aggiornamento.
        </p>
        <ExternalBlogButton className="mt-3" size="sm" />
      </div>
    </aside>
  );
}
