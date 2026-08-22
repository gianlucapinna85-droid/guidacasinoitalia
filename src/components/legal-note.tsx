import { ShieldCheck } from "lucide-react";

/**
 * Nota legale unica del sito (art. 9 D.L. 87/2018).
 * Testo centralizzato per evitare blocchi duplicati nelle pagine: va usato
 * UNA sola volta per pagina, a fine contenuto.
 */
export function LegalNote({ className = "" }: { className?: string }) {
  return (
    <p className={`mt-8 flex items-start gap-2 text-xs text-muted-foreground ${className}`}>
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
      Contenuto informativo (art. 9 D.L. 87/2018), vietato ai minori di 18 anni. Supporto gratuito:
      Telefono Verde ISS 800 558822.
    </p>
  );
}
