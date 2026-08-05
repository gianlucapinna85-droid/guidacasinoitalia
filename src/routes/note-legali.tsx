import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/note-legali")({
  head: () => ({
    meta: [
      { title: "Note legali e disclaimer — GuidaCasinò.IT" },
      { name: "description", content: "Disclaimer, natura informativa del portale, riferimenti al D.L. 87/2018 e responsabilità editoriale di GuidaCasinò.IT." },
      { property: "og:title", content: "Note legali — GuidaCasinò.IT" },
      { property: "og:description", content: "Disclaimer editoriale e riferimenti normativi." },
      { property: "og:url", content: "https://guidacasinoitalia.lovable.app/note-legali" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://guidacasinoitalia.lovable.app/note-legali" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Note legali", item: "/note-legali" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 prose-invert">
        <p className="text-xs uppercase tracking-widest text-gold">Informazioni legali</p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">Note legali</h1>

        <Section title="1. Natura del sito">
          GuidaCasinò.IT è un portale di informazione editoriale indipendente. Non gestisce
          piattaforme di gioco, non raccoglie scommesse, non elabora pagamenti e non conclude
          contratti con gli utenti relativi a servizi di gioco con vincite in denaro.
        </Section>

        <Section title="2. Assenza di finalità promozionale">
          Ai sensi dell'art. 9 del D.L. 12 luglio 2018 n. 87 (c.d. Decreto Dignità), convertito
          con L. 96/2018, in Italia è vietata qualunque forma di pubblicità, anche indiretta,
          relativa a giochi o scommesse con vincite in denaro. I contenuti di questo sito sono
          redatti con finalità esclusivamente informative e non intendono promuovere, incoraggiare
          o incentivare in alcun modo la partecipazione ai giochi.
        </Section>

        <Section title="3. Affidabilità delle informazioni">
          Le informazioni pubblicate provengono da fonti pubbliche, in primis l'elenco dei
          concessionari dell'Agenzia delle Dogane e dei Monopoli (adm.gov.it). Nonostante l'impegno
          di verifica, non garantiamo l'assoluta esattezza o aggiornamento in tempo reale dei
          dati. L'utente è invitato a verificare autonomamente ogni informazione sul sito
          ufficiale dell'operatore e sul portale ADM.
        </Section>

        <Section title="4. Divieto per i minori">
          L'accesso ai giochi con vincite in denaro è vietato ai minori di 18 anni.
          Il presente sito è destinato a un pubblico adulto. In caso di navigazione da parte di
          minorenni si raccomanda l'uso di software di parental control.
        </Section>

        <Section title="5. Avvertenza sul rischio">
          Il gioco d'azzardo può causare dipendenza patologica (Disturbo da Gioco d'Azzardo — DGA).
          Le probabilità di vincita sono consultabili sui siti dei concessionari e su adm.gov.it.
          Per informazioni e supporto: Telefono Verde ISS 800 558822 e giocaresponsabile.it.
        </Section>

        <Section title="6. Proprietà intellettuale">
          Tutti i marchi, loghi e nomi commerciali eventualmente citati appartengono ai rispettivi
          titolari e sono utilizzati esclusivamente a fini informativi e descrittivi, ai sensi
          dell'art. 21 c.p.i.
        </Section>

        <Section title="7. Contatti">
          Per segnalazioni relative ai contenuti pubblicati o per esercitare i propri diritti
          scrivere all'indirizzo indicato nella sezione Privacy.
        </Section>

        <div className="mt-12">
          <Link to="/" className="text-sm text-gold hover:underline">← Torna alla home</Link>
        </div>
      </article>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}
