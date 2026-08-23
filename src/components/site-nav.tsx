import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";

type Item = { href: string; label: string; external?: boolean };

/** Voci principali del menu — link diretti, niente tendine espandibili. */
const NAV_ITEMS: Item[] = [
  { href: "/", label: "Home" },
  { href: "/migliori-casino-online-adm", label: "Casinò ADM" },
  { href: "/bonus", label: "Bonus" },
  { href: "/slot", label: "Slot" },
  { href: "/recensioni", label: "Recensioni" },
  { href: "/guida-casino-online-italia", label: "Guide" },
  { href: "/news", label: "News" },
  { href: "/blog", label: "Blog" },
  { href: "/scommesse-sportive-online-adm", label: "Scommesse" },
  { href: "/pagamenti", label: "Pagamenti" },
  { href: "/gioco-responsabile", label: "Gioco responsabile" },
  { href: EXTERNAL_BLOG_URL, label: "Approfondimenti extra", external: true },
];

/** Menu hamburger con elenco piatto di link diretti, senza tendine espandibili. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const trigger = (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-controls="menu-principale"
      aria-label={open ? "Chiudi il menu" : "Apri il menu di navigazione"}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-gold/50 bg-gradient-to-b from-card to-secondary px-3 text-gold shadow-sm transition-all duration-300 hover:border-gold hover:shadow-[0_6px_18px_-10px_var(--gc-glow)] active:scale-95"
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      <span className="hidden text-xs font-bold uppercase tracking-widest sm:inline">Menu</span>
    </button>
  );

  const overlay = (
    <div
      id="menu-principale"
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />
      <nav
        aria-label="Menu principale"
        className={`absolute right-0 top-0 flex h-full w-[90%] max-w-sm flex-col border-l border-gold/25 bg-background shadow-[0_0_60px_-15px_rgba(28,22,8,0.35)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-secondary to-card px-4 py-3.5">
          <div className="leading-tight">
            <span className="block font-serif text-base">
              GuidaCasinò<span className="text-gold">.IT</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Navigazione
            </span>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Chiudi il menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-card text-gold transition-colors hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-2 py-3">
          {NAV_ITEMS.map((it, i) => (
            <li
              key={it.href}
              className="gc-fade-up"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              {it.external ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-transparent px-4 py-3 font-serif text-[15px] font-semibold text-gold transition-colors hover:bg-accent"
                >
                  {it.label}
                </a>
              ) : (
                <Link
                  to={it.href}
                  onClick={close}
                  className="block rounded-xl border border-transparent px-4 py-3 font-serif text-[15px] text-foreground transition-colors hover:bg-accent hover:border-border"
                  activeProps={{
                    className:
                      "block rounded-xl border border-gold/40 bg-accent px-4 py-3 font-serif text-[15px] font-semibold text-gold",
                  }}
                >
                  {it.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <p className="px-4 py-3 text-[10px] leading-snug text-muted-foreground">
          Vietato ai minori di 18 anni. Il gioco può causare dipendenza patologica.
        </p>
      </nav>
    </div>
  );

  return (
    <>
      {trigger}
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
