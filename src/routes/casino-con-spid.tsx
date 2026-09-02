import { createFileRoute } from "@tanstack/react-router";
import { KeywordLanding, CheckList, type LandingFaq } from "@/components/keyword-landing";
import { socialImageMeta } from "@/lib/social-image";
import { sortedOperators } from "@/lib/operators";

const CANONICAL = "https://www.guidacasino-italia.it/casino-con-spid";
const TITLE = "Casinò con SPID 2026: registrazione e verifica immediata ADM";
const DESCRIPTION =
  "Come registrarsi su un casinò ADM con SPID o CIE: verifica dell'identità immediata, documenti non necessari, conto di gioco attivo in pochi minuti. Solo +18.";

const FAQS: LandingFaq[] = [
  {
    q: "Quali casinò online accettano SPID?",
    a: "Diversi concessionari ADM hanno integrato l'accesso con SPID e CIE nel processo di registrazione. La disponibilità viene indicata nel modulo di iscrizione del singolo operatore: se compare il pulsante 'Entra con SPID', la verifica avviene tramite identità digitale.",
  },
  {
    q: "Registrarsi con SPID è più veloce che caricare i documenti?",
    a: "Sì. Con SPID i dati anagrafici arrivano al concessionario già verificati dallo Stato: la verifica del conto di gioco si conclude in pochi secondi, mentre con il caricamento manuale del documento i concessionari dichiarano da poche ore fino a 72 ore lavorative.",
  },
  {
    q: "SPID è sicuro sui siti di gioco?",
    a: "SPID trasmette solo i dati anagrafici necessari all'apertura del conto. Le credenziali SPID non vengono mai condivise con l'operatore: l'autenticazione avviene sui server del gestore di identità digitale.",
  },
  {
    q: "Posso usare la CIE al posto di SPID?",
    a: "Sì. La Carta d'Identità Elettronica funziona come alternativa a SPID e completa la verifica dell'identità con la stessa procedura, tramite app CieID o lettore NFC.",
  },
  {
    q: "Con SPID il bonus viene accreditato subito?",
    a: "L'accredito dell'eventuale bonus dipende dai termini pubblicati dal concessionario. Poiché con SPID la verifica è già completata, di norma non ci sono attese legate al controllo dei documenti.",
  },
];

export const Route = createFileRoute("/casino-con-spid")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "casino con spid, casino online spid, registrazione casino con spid, casino adm spid, verifica identità spid casino, casino con cie",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
      ...socialImageMeta(),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "it-IT",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.guidacasino-italia.it/" },
            { "@type": "ListItem", position: 2, name: "Casinò con SPID", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <KeywordLanding
      breadcrumb="Casinò con SPID"
      h1="Casinò con SPID: registrazione e verifica dell'identità immediata"
      intro={DESCRIPTION}
      faqs={FAQS}
      offerOperators={sortedOperators.slice(0, 4)}
      offerTitle="Concessionari ADM analizzati dalla redazione"
      offerSubtitle="Voto redazionale e condizioni di conto dichiarate. La disponibilità di SPID va verificata nel modulo di registrazione dell'operatore."
    >
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Come funziona la registrazione con SPID</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          SPID è il sistema pubblico di identità digitale italiano. Sui casinò online con concessione
          ADM sostituisce il caricamento manuale del documento: il gestore di identità conferma al
          concessionario nome, cognome, codice fiscale e data di nascita già verificati. Il conto di
          gioco nasce quindi in stato verificato, senza attese e senza upload di file.
        </p>
        <CheckList
          items={[
            "Apri il modulo di registrazione del concessionario e scegli 'Entra con SPID' o CIE.",
            "Autenticati sul portale del tuo gestore di identità digitale (le credenziali non passano dall'operatore).",
            "Conferma i dati trasmessi e imposta subito il limite di deposito settimanale o mensile.",
            "Il conto di gioco risulta verificato: depositi e prelievi seguono le condizioni pubblicate dall'operatore.",
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">SPID o documento caricato a mano: le differenze</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-3">Aspetto</th>
                <th className="py-2 pr-3">Con SPID / CIE</th>
                <th className="py-2">Con documento caricato</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["Tempi di verifica", "Pochi secondi", "Da poche ore a 72 ore lavorative"],
                ["Documenti da caricare", "Nessuno", "Fronte e retro del documento"],
                ["Rischio di rifiuto", "Molto basso", "Foto sfocate o scadute vengono respinte"],
                ["Prelievi", "Sbloccati subito", "Solo dopo la convalida"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-b border-border/60">
                  <td className="py-2 pr-3 font-medium text-foreground">{a}</td>
                  <td className="py-2 pr-3">{b}</td>
                  <td className="py-2">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Requisiti per usare SPID su un casinò ADM</h2>
        <CheckList
          items={[
            "Maggiore età: l'identità digitale è rilasciata solo a chi ha compiuto 18 anni.",
            "SPID di livello 2 (username, password e codice temporaneo) o CIE con PIN.",
            "Non risultare iscritto al RUA, il Registro Unico degli Autoesclusi.",
            "Un solo conto di gioco per persona su ciascun concessionario.",
          ]}
        />
      </section>
    </KeywordLanding>
  );
}
