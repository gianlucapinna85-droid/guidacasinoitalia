import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { Gift, ShieldCheck, AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/bonus-senza-deposito")({
  head: () => ({
    meta: [
      { title: "Bonus Senza Deposito Casinò ADM 2026 — Guida Completa e Come Funzionano" },
      { name: "description", content: "Bonus senza deposito casinò ADM: cosa sono, perché i concessionari li offrono, come funzionano i requisiti di puntata (wagering), condizioni, verifica identità e differenze con i bonus di benvenuto. Guida informativa aggiornata 2026." },
      { name: "keywords", content: "bonus senza deposito, casinò ADM, no deposit bonus, bonus benvenuto, requisiti di puntata, wagering, free spin senza deposito, bonus casinò 2026, concessione ADM" },
      { property: "og:title", content: "Bonus Senza Deposito Casinò ADM — Guida Completa 2026" },
      { property: "og:description", content: "Come funzionano i bonus senza deposito nei casinò ADM: wagering, condizioni, verifica identità e trasparenza. Guida informativa." },
      { property: "og:url", content: "https://guidacasinoitalia.lovable.app/bonus-senza-deposito" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bonus Senza Deposito Casinò ADM — Guida 2026" },
      { name: "twitter:description", content: "Guida informativa: cosa sono i bonus senza deposito, perché vengono offerti e come funzionano nei casinò con concessione ADM." },
    ],
    links: [{ rel: "canonical", href: "https://guidacasinoitalia.lovable.app/bonus-senza-deposito" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Bonus Senza Deposito Casinò ADM 2026 — Guida Completa",
          description: "Cosa sono i bonus senza deposito, perché i concessionari ADM li offrono e come funzionano i requisiti di puntata.",
          inLanguage: "it-IT",
          author: { "@type": "Organization", name: "GuidaCasinò.IT" },
          publisher: { "@type": "Organization", name: "GuidaCasinò.IT" },
          datePublished: "2026-07-01",
          dateModified: new Date().toISOString().slice(0, 10),
          keywords: "bonus senza deposito, casinò ADM, wagering, requisiti di puntata, no deposit bonus",
          mainEntityOfPage: "https://guidacasinoitalia.lovable.app/bonus-senza-deposito",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Cos'è un bonus senza deposito?",
              acceptedAnswer: { "@type": "Answer", text: "È un credito di gioco o un pacchetto di free spin riconosciuto dal concessionario ADM al completamento della registrazione e della verifica documentale, senza obbligo di effettuare un deposito." },
            },
            {
              "@type": "Question",
              name: "Perché i casinò offrono bonus senza deposito?",
              acceptedAnswer: { "@type": "Answer", text: "Consentono al nuovo utente di provare la piattaforma in un ambiente regolamentato e di valutare l'esperienza di gioco prima di decidere se effettuare un deposito." },
            },
            {
              "@type": "Question",
              name: "Cosa sono i requisiti di puntata (wagering)?",
              acceptedAnswer: { "@type": "Answer", text: "Sono il numero di volte in cui l'importo del bonus deve essere giocato prima di poter richiedere un prelievo delle vincite generate dal bonus stesso." },
            },
            {
              "@type": "Question",
              name: "I bonus senza deposito sono legali in Italia?",
              acceptedAnswer: { "@type": "Answer", text: "Sì, se offerti da un operatore titolare di concessione ADM (ex AAMS) e nel rispetto delle condizioni pubblicate dal concessionario e della normativa vigente." },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://guidacasinoitalia.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Bonus senza deposito", item: "https://guidacasinoitalia.lovable.app/bonus-senza-deposito" },
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
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <nav className="mb-6 text-xs text-neutral-500">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <span>Bonus senza deposito</span>
        </nav>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          <Gift className="h-3.5 w-3.5" /> Guida informativa 2026
        </div>

        <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Bonus senza deposito nei casinò ADM: cosa sono, perché vengono offerti e come funzionano
        </h1>
        <p className="mt-4 text-sm text-neutral-600 md:text-base">
          Guida completa e neutrale ai <strong>bonus senza deposito</strong> proposti dai casinò online con
          <strong> concessione ADM</strong> (ex AAMS). Analizziamo la natura di questi crediti di gioco,
          le ragioni per cui i concessionari li offrono, i <strong>requisiti di puntata (wagering)</strong>,
          le condizioni contrattuali e le tutele previste dalla normativa italiana. Contenuto informativo
          riservato a maggiorenni.
        </p>

        <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              <strong>Avvertenza +18.</strong> Il gioco è vietato ai minori di 18 anni e può causare
              dipendenza patologica. Consulta la nostra pagina{" "}
              <Link to="/gioco-responsabile" className="underline">gioco responsabile</Link> e il numero verde
              <strong> 800 558822</strong>.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground">Video: il bonus senza deposito spiegato con voce narrante</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Un riepilogo visivo e informativo su cosa sono i bonus senza deposito, perché i concessionari ADM li
            offrono e come funzionano i requisiti di puntata. Il video parte automaticamente senza audio: tocca
            l'icona dell'altoparlante per attivare la voce narrante e la musica.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 shadow-sm">
            <video
              className="aspect-video w-full"
              controls
              autoPlay
              muted
              loop
              preload="auto"
              playsInline
              poster="/video/bonus-poster.jpg"
            >
              <source src={bonusVideoUrl.url} type="video/mp4" />
              Il tuo browser non supporta la riproduzione video.
            </video>
          </div>
        </section>


        <h2 className="mt-10 text-2xl font-semibold text-foreground">Cos'è un bonus senza deposito</h2>
        <p className="mt-3 text-neutral-700">
          Il <strong>bonus senza deposito</strong> (in inglese <em>no deposit bonus</em>) è un credito di gioco
          — o un pacchetto di <strong>free spin</strong> sulle slot machine — che il concessionario ADM
          riconosce all'utente al completamento della registrazione e della <strong>verifica documentale
          dell'identità</strong>, senza che sia necessario effettuare alcun versamento di denaro. È uno
          strumento previsto e regolamentato dalla normativa italiana sui giochi a distanza.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">
          Perché i casinò ADM offrono bonus senza deposito
        </h2>
        <ul className="mt-3 space-y-3 text-neutral-700">
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Prova della piattaforma.</strong> Consentono di valutare l'interfaccia, il catalogo giochi e la qualità dell'assistenza clienti in un ambiente regolamentato.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Verifica identità obbligatoria.</strong> L'accredito è subordinato all'invio del documento, in linea con la normativa antiriciclaggio e con la tutela dei minori.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Differenziazione competitiva.</strong> Nel mercato dei concessionari ADM il bonus senza deposito rappresenta un elemento di posizionamento fra operatori.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Fidelizzazione dell'utenza.</strong> Un'esperienza iniziale positiva incentiva l'utente a rimanere sulla piattaforma nel lungo periodo.</span></li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Come funzionano: i requisiti di puntata</h2>
        <p className="mt-3 text-neutral-700">
          Ogni <strong>bonus senza deposito casinò</strong> è soggetto a <strong>requisiti di puntata</strong>
          (chiamati anche <em>wagering</em> o <em>rollover</em>). Si tratta del numero di volte in cui l'importo
          del bonus deve essere giocato prima di poter richiedere il prelievo delle eventuali vincite. Esempio:
          un bonus da <strong>10 €</strong> con wagering <strong>x30</strong> richiede un volume di gioco
          complessivo pari a <strong>300 €</strong> prima dello sblocco.
        </p>
        <p className="mt-3 text-neutral-700">
          Le condizioni pubblicate dal concessionario indicano anche: <strong>giochi ammessi</strong> (in
          genere slot al 100%, giochi da tavolo con percentuale ridotta), <strong>scadenza del bonus</strong>,
          <strong> puntata massima consentita</strong> con il credito bonus e <strong>limite di vincita
          prelevabile</strong>. Leggi sempre i Termini e Condizioni ufficiali prima di aderire.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">
          Bonus senza deposito vs bonus di benvenuto
        </h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-neutral-200">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-left text-neutral-700">
              <tr>
                <th className="px-4 py-3">Caratteristica</th>
                <th className="px-4 py-3">Senza deposito</th>
                <th className="px-4 py-3">Di benvenuto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-700">
              <tr><td className="px-4 py-3 font-medium">Deposito richiesto</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Sì</td></tr>
              <tr><td className="px-4 py-3 font-medium">Importo medio</td><td className="px-4 py-3">5–50 €</td><td className="px-4 py-3">Fino a 1.000 €</td></tr>
              <tr><td className="px-4 py-3 font-medium">Verifica identità</td><td className="px-4 py-3">Obbligatoria</td><td className="px-4 py-3">Obbligatoria</td></tr>
              <tr><td className="px-4 py-3 font-medium">Wagering tipico</td><td className="px-4 py-3">x30 – x60</td><td className="px-4 py-3">x20 – x40</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Come valutare un bonus senza deposito</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-neutral-700">
          <li>Verifica la <strong>concessione ADM</strong> dell'operatore sul sito <a className="underline" href="https://www.adm.gov.it" target="_blank" rel="noopener noreferrer">adm.gov.it</a>.</li>
          <li>Leggi i <strong>Termini e Condizioni</strong> completi pubblicati dal concessionario.</li>
          <li>Controlla il <strong>wagering</strong>, la scadenza e i giochi ammessi.</li>
          <li>Valuta il <strong>limite massimo di vincita prelevabile</strong> derivante dal bonus.</li>
          <li>Verifica gli strumenti di <strong>autolimitazione</strong> e adesione al <strong>RUA</strong>.</li>
        </ol>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Tutele previste dalla normativa ADM</h2>
        <p className="mt-3 text-neutral-700">
          Tutti i <strong>casinò ADM sicuri</strong> devono garantire: identificazione certa del giocatore,
          strumenti di <strong>autolimitazione</strong> (deposito, perdita, tempo di sessione),
          <strong> autoesclusione</strong> tramite il Registro Unico degli Autoesclusi (RUA), assistenza in
          lingua italiana e trasparenza sulle condizioni promozionali. Il bonus senza deposito non fa
          eccezione: è soggetto a controllo e alle regole tecniche approvate dall'Agenzia delle Dogane e dei Monopoli.
        </p>

        <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-800">
            <ShieldCheck className="h-4 w-4 text-gold" /> Nota di trasparenza editoriale
          </div>
          <p className="text-sm text-neutral-700">
            Questa pagina ha finalità esclusivamente informative. Non costituisce un invito al gioco. Le
            condizioni economiche dei bonus possono variare nel tempo: fanno fede esclusivamente i Termini
            e Condizioni pubblicati dal concessionario ADM sul proprio sito ufficiale.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Domande frequenti (FAQ)</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Il bonus senza deposito è davvero gratuito?",
              a: "L'importo viene accreditato senza versamento, ma è vincolato a requisiti di puntata e alle altre condizioni pubblicate dal concessionario.",
            },
            {
              q: "Posso prelevare subito le vincite del bonus?",
              a: "No. Prima è necessario completare il wagering indicato nei Termini e Condizioni; solo dopo l'importo diventa prelevabile nei limiti previsti.",
            },
            {
              q: "Serve inviare un documento d'identità?",
              a: "Sì, la verifica documentale è obbligatoria per legge in Italia e condizione necessaria per l'accredito del bonus.",
            },
            {
              q: "Posso ricevere più bonus senza deposito da concessionari diversi?",
              a: "Sì, ogni operatore ADM ha promozioni indipendenti. Ricorda però di attivare gli strumenti di autolimitazione e di giocare in modo responsabile.",
            },
          ].map((f) => (
            <details key={f.q} className="group rounded-lg border border-neutral-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-neutral-800">
                <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-gold" />{f.q}</span>
                <span className="text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-gold/90"
          >
            Vedi la lista dei casinò ADM
          </Link>
          <Link
            to="/gioco-responsabile"
            className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            Gioco responsabile
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
