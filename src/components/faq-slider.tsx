import { HelpCircle } from "lucide-react";

export type FaqItem = { q: string; a: string };

/**
 * FAQ compatte: slider orizzontale su mobile, griglia su desktop.
 * Il testo resta sempre nel DOM (SEO-safe).
 */
export function FaqSlider({ items, title }: { items: FaqItem[]; title: string }) {
  return (
    <section id="faq" className="mt-10">
      <h2 className="font-serif text-xl md:text-2xl">{title}</h2>

      {/* mobile: slider orizzontale */}
      <div className="mt-4 -mx-2.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((f) => (
          <div
            key={f.q}
            className="w-[82%] shrink-0 snap-start rounded-xl border border-border bg-card p-3.5"
          >
            <div className="flex items-start gap-2">
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <h3 className="text-[13px] font-semibold leading-snug">{f.q}</h3>
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground md:hidden">Scorri per vedere altre risposte →</p>

      {/* desktop: accordion */}
      <div className="mt-6 hidden space-y-4 md:block">
        {items.map((f) => (
          <details key={f.q} className="rounded-xl border border-border bg-card p-5">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
