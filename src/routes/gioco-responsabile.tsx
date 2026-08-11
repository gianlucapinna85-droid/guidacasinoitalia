import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { Phone, ExternalLink, ShieldAlert } from "lucide-react";
import { socialImageMeta } from "@/lib/social-image";

export const Route = createFileRoute("/gioco-responsabile")({
  head: () => ({
    meta: [
      { title: "Gioco responsabile e risorse di supporto — GuidaCasinò.IT" },
      { name: "description", content: "Informazioni sul Disturbo da Gioco d'Azzardo (DGA), autoesclusione RUA, numero verde 800 558822 e strumenti di tutela per i giocatori." },
      { property: "og:title", content: "Gioco responsabile — GuidaCasinò.IT" },
      ...socialImageMeta(),
      { property: "og:description", content: "Numeri di aiuto, autoesclusione e strumenti di autolimitazione." },
      { property: "og:url", content: "https://www.guidacasino-italia.it/gioco-responsabile" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "Gioco responsabile — GuidaCasinò.IT" },
      { name: "twitter:description", content: "Numeri di aiuto, autoesclusione RUA e strumenti di autolimitazione." },
    ],
    links: [{ rel: "canonical", href: "https://www.guidacasino-italia.it/gioco-responsabile" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Gioco responsabile", item: "/gioco-responsabile" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Gioco responsabile e risorse di supporto",
          inLanguage: "it-IT",
          about: "Disturbo da Gioco d'Azzardo (DGA)",
          keywords: "gioco responsabile, DGA, RUA, autoesclusione, 800558822",
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-2.5 md:px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-gold">Tutela del giocatore</p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">Gioco responsabile</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Il gioco d'azzardo può generare dipendenza. Riconoscere i segnali e conoscere gli
          strumenti di tutela è il primo passo per proteggere sé stessi e le persone care.
        </p>

        <div className="mt-10 rounded-xl border border-destructive/30 bg-destructive/10 p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-destructive" />
            <div>
              <h2 className="font-serif text-xl">Se hai bisogno di aiuto ora</h2>
              <p className="mt-2 text-sm text-foreground/90">
                Il <strong>Telefono Verde Nazionale per le problematiche legate al Gioco d'Azzardo</strong>{" "}
                dell'Istituto Superiore di Sanità è gratuito e anonimo.
              </p>
              <a
                href="tel:800558822"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-destructive px-5 py-3 text-sm font-semibold text-destructive-foreground hover:opacity-90"
              >
                <Phone className="h-4 w-4" /> 800 558 822
              </a>
            </div>
          </div>
        </div>

        <h2 className="mt-12 font-serif text-2xl">Segnali di allarme</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Pensare al gioco in modo persistente e intrusivo</li>
          <li>• Aumentare le somme giocate per ottenere lo stesso livello di eccitazione</li>
          <li>• Tentare ripetutamente di smettere senza riuscirci</li>
          <li>• Mentire a familiari o terapeuti sull'entità del gioco</li>
          <li>• Giocare per recuperare somme perse ("chasing")</li>
          <li>• Mettere a rischio relazioni, lavoro o studi a causa del gioco</li>
        </ul>

        <h2 className="mt-12 font-serif text-2xl">Strumenti di autotutela</h2>
        <div className="mt-4 space-y-4">
          <Card
            title="Registro Unico degli Autoesclusi (RUA)"
            body="Strumento gestito da ADM che consente di autoescludersi dal gioco su tutti i concessionari italiani. Attivabile online con SPID/CIE per periodi di 30/60/90 giorni oppure a tempo indeterminato."
            href="https://www.adm.gov.it"
          />
          <Card
            title="Limiti di deposito e di spesa"
            body="Ogni operatore concessionario ADM è obbligato a offrire strumenti di autolimitazione (giornaliera, settimanale, mensile). L'attivazione è immediata; la riduzione è immediata, l'aumento richiede un periodo di attesa."
          />
          <Card
            title="Servizi territoriali (Ser.D)"
            body="I Servizi per le Dipendenze delle ASL offrono percorsi terapeutici gratuiti per il Disturbo da Gioco d'Azzardo. L'accesso è diretto e non richiede impegnativa medica."
          />
        </div>

        <h2 className="mt-12 font-serif text-2xl">Altri contatti utili</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <ExtLink href="https://www.giocaresponsabile.it" label="giocaresponsabile.it" />
          <ExtLink href="https://www.iss.it" label="Istituto Superiore di Sanità" />
          <ExtLink href="https://www.giocanews.it" label="Osservatorio sul gioco d'azzardo" />
          <ExtLink href="https://www.adm.gov.it" label="ADM — Monopoli di Stato" />
        </div>

        <div className="mt-16">
          <Link to="/" className="text-sm text-gold hover:underline">← Torna alla home</Link>
        </div>
      </article>
    </PageShell>
  );
}

function Card({ title, body, href }: { title: string; body: string; href?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="font-serif text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-flex items-center gap-1 text-xs text-gold hover:underline">
          Vai al sito ufficiale <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

function ExtLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-gold/40">
      {label} <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
    </a>
  );
}
