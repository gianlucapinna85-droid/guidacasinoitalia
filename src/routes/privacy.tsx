import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy e Cookie Policy — GuidaCasinò.IT" },
      { name: "description", content: "Informativa privacy ai sensi del GDPR (Reg. UE 2016/679) e cookie policy di GuidaCasinò.IT." },
      { property: "og:title", content: "Privacy & Cookie — GuidaCasinò.IT" },
      { property: "og:description", content: "Trattamento dei dati personali e utilizzo dei cookie." },
      { property: "og:url", content: "https://www.guidacasino-italia.it/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://www.guidacasino-italia.it/privacy" }],
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

        <Block title="Cookie e strumenti di tracciamento">
          Ai sensi dell'art. 122 del D.Lgs. 196/2003 e delle Linee guida cookie del Garante Privacy del
          10 giugno 2021, i cookie tecnici sono installati senza consenso; tutti gli altri solo dopo una
          tua azione positiva. Il rifiuto non limita in alcun modo la navigazione. La tua scelta viene
          conservata per 6 mesi, al termine dei quali il banner ti verrà riproposto; puoi revocarla o
          modificarla in qualsiasi momento dal link «Preferenze cookie» nel piè di pagina.
        </Block>

        <CookieTable />

        <Block title="Google Consent Mode v2">
          Gli strumenti di misurazione di Google sono configurati con Consent Mode v2 in stato di default
          «denied»: fino al tuo consenso non vengono impostati cookie di misurazione né trasmessi
          identificatori pubblicitari. In assenza di consenso Google può ricevere unicamente segnali
          aggregati e senza cookie (ping privi di identificatori).
        </Block>

        <Block title="Trasferimenti extra-UE">
          Il sito non trasferisce autonomamente dati fuori dallo Spazio Economico Europeo. Se presti il
          consenso alla categoria statistica, i dati di misurazione sono trattati da Google Ireland Ltd.
          e possono essere trasferiti negli Stati Uniti sulla base del Data Privacy Framework UE-USA e
          delle Clausole Contrattuali Standard.
        </Block>

        <Block title="Conservazione">
          I log tecnici sono conservati per un periodo massimo di 12 mesi. I dati statistici
          anonimizzati sono conservati in forma aggregata per un massimo di 14 mesi. Il record del
          consenso ai cookie è conservato per 6 mesi.
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

const COOKIES = [
  { name: "gc_consent_v2", type: "Tecnico (localStorage)", owner: "GuidaCasinò.IT", purpose: "Memorizza le categorie di cookie autorizzate.", life: "6 mesi" },
  { name: "_ga", type: "Statistico", owner: "Google Ireland Ltd.", purpose: "Distingue gli utenti in forma pseudonima con IP anonimizzato.", life: "13 mesi" },
  { name: "_ga_<container>", type: "Statistico", owner: "Google Ireland Ltd.", purpose: "Mantiene lo stato della sessione di misurazione GA4.", life: "13 mesi" },
  { name: "_gid", type: "Statistico", owner: "Google Ireland Ltd.", purpose: "Distingue gli utenti nelle statistiche giornaliere.", life: "24 ore" },
];

function CookieTable() {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl">Elenco dei cookie utilizzati</h2>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[36rem] text-left text-xs">
          <thead className="bg-card/60 text-muted-foreground">
            <tr>
              <th scope="col" className="px-3 py-2 font-semibold">Nome</th>
              <th scope="col" className="px-3 py-2 font-semibold">Categoria</th>
              <th scope="col" className="px-3 py-2 font-semibold">Titolare</th>
              <th scope="col" className="px-3 py-2 font-semibold">Finalità</th>
              <th scope="col" className="px-3 py-2 font-semibold">Durata</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {COOKIES.map((c) => (
              <tr key={c.name} className="border-t border-border align-top">
                <td className="px-3 py-2 font-mono text-[11px] text-foreground">{c.name}</td>
                <td className="px-3 py-2">{c.type}</td>
                <td className="px-3 py-2">{c.owner}</td>
                <td className="px-3 py-2">{c.purpose}</td>
                <td className="px-3 py-2">{c.life}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        I cookie statistici vengono installati solo dopo il consenso e rimossi in caso di revoca.
        Sul sito non sono presenti cookie di profilazione pubblicitaria.
      </p>
    </section>
  );
}
