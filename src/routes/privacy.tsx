import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy e Cookie Policy — GuidaCasinò.IT" },
      { name: "description", content: "Informativa privacy ai sensi del GDPR (Reg. UE 2016/679) e cookie policy di GuidaCasinò.IT." },
      { property: "og:title", content: "Privacy & Cookie — GuidaCasinò.IT" },
      { property: "og:description", content: "Trattamento dei dati personali e utilizzo dei cookie." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Privacy & Cookie", item: "/privacy" },
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
      <article className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs uppercase tracking-widest text-gold">GDPR</p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">Privacy & Cookie</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Informativa resa ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR) e del
          D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
        </p>

        <Block title="Titolare del trattamento">
          Il Titolare del trattamento è indicato nella sezione contatti. Puoi esercitare i tuoi
          diritti (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione)
          scrivendo all'indirizzo email fornito.
        </Block>

        <Block title="Dati raccolti">
          Il sito non richiede la registrazione. I dati raccolti automaticamente sono limitati a:
          log tecnici (indirizzo IP, user-agent, pagina visitata), utilizzati per finalità di
          sicurezza e statistica aggregata, e cookie tecnici necessari al funzionamento.
        </Block>

        <Block title="Cookie">
          Il sito utilizza esclusivamente cookie tecnici necessari, che non richiedono consenso
          preventivo. Eventuali cookie di misurazione anonimi vengono attivati solo dopo consenso
          esplicito tramite il banner dedicato.
        </Block>

        <Block title="Trasferimenti extra-UE">
          Non trasferiamo dati personali al di fuori dello Spazio Economico Europeo. Eventuali
          fornitori tecnici sono selezionati tra soggetti che garantiscono adeguate misure di
          sicurezza.
        </Block>

        <Block title="Diritti dell'interessato">
          Hai il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali
          (www.garanteprivacy.it) qualora ritieni che il trattamento violi il GDPR.
        </Block>

        <div className="mt-12">
          <Link to="/" className="text-sm text-gold hover:underline">← Torna alla home</Link>
        </div>
      </article>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}
