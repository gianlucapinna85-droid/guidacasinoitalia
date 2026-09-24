import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";

type Item = { href: string; label: string; external?: boolean };

/** Voci principali del menu — link diretti, niente tendine espandibili. */
const MAIN_ITEMS: Item[] = [
  { href: "/", label: "Home" },
  { href: "/migliori-casino-online-adm", label: "Casinò ADM" },
  { href: "/bonus", label: "Bonus" },
  { href: "/slot", label: "Slot" },
  { href: "/recensioni", label: "Recensioni" },
  { href: "/scommesse-sportive-online-adm", label: "Scommesse" },
];

const INFO_ITEMS: Item[] = [
  { href: "/guida-casino-online-italia", label: "Guide" },
  { href: "/news", label: "News" },
  { href: "/blog", label: "Blog" },
  { href: "/pagamenti", label: "Pagamenti" },
  { href: "/gioco-responsabile", label: "Gioco responsabile" },
  { href: "/assistente-guida-casino", label: "Assistente GuidaCasinò" },
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
        className={`absolute right-0 top-0 flex max-h-full w-[86%] max-w-xs flex-col overflow-y-auto rounded-bl-2xl border-b border-l border-gold/25 bg-background shadow-[0_0_60px_-15px_rgba(28,22,8,0.35)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-secondary to-card px-3.5 py-2.5">
          <span className="font-serif text-base leading-none">
            GuidaCasinò<span className="text-gold">.IT</span>
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Chiudi il menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-card text-gold transition-colors hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-2.5">
          <p className="px-1.5 pb-1.5 text-[9px] font-bold uppercase tracking-widest text-gold">
            Sezioni principali
          </p>
          <ul className="grid grid-cols-2 gap-1.5">
            {MAIN_ITEMS.map((it) => (
              <li key={it.href}>
                <Link
                  to={it.href}
                  onClick={close}
                  className="flex h-full items-center rounded-lg border border-border bg-card px-2.5 py-2.5 text-[13px] font-semibold text-foreground transition-colors hover:border-gold/60 hover:bg-accent"
                  activeProps={{
                    className:
                      "flex h-full items-center rounded-lg border border-gold/60 bg-accent px-2.5 py-2.5 text-[13px] font-semibold text-gold",
                  }}
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="px-1.5 pb-1.5 pt-3 text-[9px] font-bold uppercase tracking-widest text-gold">
            Guide e informazioni
          </p>
          <ul className="grid gap-1">
            {INFO_ITEMS.map((it) => (
              <li key={it.href}>
                {it.external ? (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-transparent px-2.5 py-2 text-[13px] font-semibold text-gold transition-colors hover:bg-accent"
                  >
                    {it.label}
                    <span aria-hidden="true" className="text-[10px]">↗</span>
                  </a>
                ) : (
                  <Link
                    to={it.href}
                    onClick={close}
                    className="flex items-center justify-between rounded-lg border border-transparent px-2.5 py-2 text-[13px] text-foreground transition-colors hover:bg-accent"
                    activeProps={{
                      className:
                        "flex items-center justify-between rounded-lg border border-gold/40 bg-accent px-2.5 py-2 text-[13px] font-semibold text-gold",
                    }}
                  >
                    {it.label}
                    <span aria-hidden="true" className="text-[10px] text-muted-foreground">›</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-border px-3.5 py-2 text-[9px] leading-snug text-muted-foreground">
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
