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

      {/* render unico (niente testo duplicato nel DOM): accordion responsive */}
      <div className="mt-4 space-y-2.5 md:mt-6 md:space-y-4">
        {items.map((f) => (
          <details key={f.q} className="rounded-xl border border-border bg-card p-3.5 md:p-5">
            <summary className="flex cursor-pointer items-start gap-2 font-medium">
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-[13px] leading-snug md:text-base">{f.q}</span>
            </summary>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground md:mt-3 md:text-sm">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
