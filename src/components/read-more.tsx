import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Testo lungo compattato: mostra un'anteprima e il resto dietro
 * "Continua a leggere". Il contenuto resta sempre nel DOM (SEO-safe).
 */
export function ReadMore({
  children,
  className = "",
  collapsedHeight = "10rem",
  labelMore = "Continua a leggere",
  labelLess = "Mostra meno",
}: {
  children: ReactNode;
  className?: string;
  collapsedHeight?: string;
  labelMore?: string;
  labelLess?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <div
        className="relative overflow-hidden transition-[max-height] duration-300"
        style={open ? undefined : { maxHeight: collapsedHeight }}
        aria-expanded={open}
      >
        {children}
        {!open ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/50 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-gold transition hover:bg-gold/10"
      >
        {open ? labelLess : labelMore}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
