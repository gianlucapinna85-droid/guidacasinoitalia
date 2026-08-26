import { Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { AUTHOR, LAST_VERIFIED_ISO, formatIt } from "@/lib/author";

/** Firma compatta con foto autore + data di verifica, sotto il titolo dell'articolo. */
export function AuthorByline({
  verifiedIso = LAST_VERIFIED_ISO,
  className = "",
}: {
  verifiedIso?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        loading="lazy"
        decoding="async"
        src={AUTHOR.photo}
        alt={`${AUTHOR.name}, ${AUTHOR.role}`}
        width={44}
        height={44}
        loading="lazy"
        className="h-11 w-11 shrink-0 rounded-full border border-gold/50 object-cover"
      />
      <div className="text-xs leading-snug">
        <p className="text-foreground">
          Scritto da{" "}
          <Link to="/autore/$slug" params={{ slug: AUTHOR.slug }} className="text-gold hover:underline">
            {AUTHOR.name}
          </Link>
        </p>
        <p className="mt-0.5 inline-flex items-center gap-1 text-muted-foreground">
          <BadgeCheck className="h-3.5 w-3.5 text-gold" />
          Verificato il{" "}
          <time dateTime={verifiedIso.slice(0, 10)} className="text-foreground/90">
            {formatIt(verifiedIso)}
          </time>
        </p>
      </div>
    </div>
  );
}

/** Box autore esteso da mostrare a fine articolo. */
export function AuthorBox({ verifiedIso = LAST_VERIFIED_ISO }: { verifiedIso?: string }) {
  return (
    <section className="mt-10 rounded-xl border border-border bg-card p-5">
      <div className="flex items-start gap-4">
        <img
          loading="lazy"
          decoding="async"
          src={AUTHOR.photo}
          alt={`Foto di ${AUTHOR.name}`}
          width={72}
          height={72}
          loading="lazy"
          className="h-16 w-16 shrink-0 rounded-full border border-gold/50 object-cover md:h-[72px] md:w-[72px]"
        />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            A cura di
          </p>
          <h2 className="font-serif text-lg">
            <Link to="/autore/$slug" params={{ slug: AUTHOR.slug }} className="hover:text-gold">
              {AUTHOR.name}
            </Link>
          </h2>
          <p className="text-xs text-gold">{AUTHOR.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{AUTHOR.bio}</p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
            <BadgeCheck className="h-3.5 w-3.5 text-gold" />
            Contenuto verificato il{" "}
            <time dateTime={verifiedIso.slice(0, 10)}>{formatIt(verifiedIso)}</time>
          </p>
        </div>
      </div>
    </section>
  );
}
