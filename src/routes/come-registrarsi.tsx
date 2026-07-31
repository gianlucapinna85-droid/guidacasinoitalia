import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { UserPlus, ShieldCheck, AlertTriangle, CheckCircle2, IdCard } from "lucide-react";

const CANON = "https://guidacasinoitalia.lovable.app/come-registrarsi";

export const Route = createFileRoute("/come-registrarsi")({
  head: () => ({
    meta: [
      { title: "Come Registrarsi su un Casinò ADM 2026 — Guida Passo Passo con SPID" },
      {
        name: "description",
        content:
          "Come registrarsi su un casinò online con concessione ADM: documenti richiesti, verifica identità, registrazione con SPID o CIE, limiti di deposito e attivazione del bonus senza deposito. Guida informativa +18.",
      },
      {
        name: "keywords",
        content:
          "come registrarsi casinò online, registrazione casino ADM, verifica identità casinò, registrazione con SPID, conto gioco ADM, bonus senza deposito registrazione, casino AAMS registrazione",
      },
      { property: "og:title", content: "Come Registrarsi su un Casinò ADM — Guida Passo Passo 2026" },
      {
        property: "og:description",
        content:
          "Documenti, verifica dell'identità, SPID/CIE e limiti di gioco: la procedura di registrazione su un concessionario ADM spiegata passo per passo.",
      },
      { property: "og:url", content: CANON },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Come Registrarsi su un Casinò ADM — Guida 2026" },
      {
        name: "twitter:description",
        content: "Guida informativa alla registrazione su un casinò online con concessione ADM.",
      },
    ],
    links: [{ rel: "canonical", href: CANON }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Come registrarsi su un casinò online con concessione ADM",
          description:
            "Procedura di registrazione su un sito di gioco legale in Italia: verifica della concessione ADM, compilazione del modulo, verifica dell'identità e impostazione dei limiti.",
          inLanguage: "it-IT",
          totalTime: "PT10M",
          supply: [
            { "@type": "HowToSupply", name: "Documento d'identità in corso di validità" },
            { "@type": "HowToSupply", name: "Codice fiscale o tessera sanitaria" },
            { "@type": "HowToSupply", name: "In alternativa: SPID o CIE" },
          ],
          step: [
            { "@type": "HowToStep", name: "Verifica la concessione ADM", text: "Controlla il numero di concessione dell'operatore sull'elenco pubblico di adm.gov.it." },
            { "@type": "HowToStep", name: "Compila il modulo di registrazione", text: "Inserisci dati anagrafici, codice fiscale, email e recapito telefonico veritieri." },
            { "@type": "HowToStep", name: "Verifica la tua identità", text: "Carica fronte e retro del documento oppure accedi con SPID o CIE per la verifica immediata." },
            { "@type": "HowToStep", name: "Imposta i limiti di gioco", text: "Definisci limiti di deposito e di sessione prima di iniziare a giocare." },
          ],
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
              name: "Quali documenti servono per registrarsi su un casinò ADM?",
              acceptedAnswer: { "@type": "Answer", text: "Un documento d'identità in corso di validità (carta d'identità, patente o passaporto) e il codice fiscale. In alternativa è possibile registrarsi con SPID o CIE, che completano la verifica in modo immediato." },
            },
            {
              "@type": "Question",
              name: "Quanto tempo richiede la verifica dell'identità?",
              acceptedAnswer: { "@type": "Answer", text: "Con SPID o CIE la verifica è immediata. Con il caricamento manuale del documento i concessionari indicano in genere da poche ore fino a 72 ore lavorative." },
            },
            {
              "@type": "Question",
              name: "Posso avere più conti di gioco sullo stesso sito?",
              acceptedAnswer: { "@type": "Answer", text: "No. La normativa italiana consente un solo conto di gioco per persona su ciascun concessionario ADM; i conti duplicati vengono chiusi." },
            },
            {
              "@type": "Question",
              name: "Il bonus senza deposito arriva subito dopo la registrazione?",
              acceptedAnswer: { "@type": "Answer", text: "In genere no: l'accredito avviene dopo la convalida dei documenti, secondo i termini e le condizioni pubblicati dal concessionario." },
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
            { "@type": "ListItem", position: 2, name: "Come registrarsi", item: CANON },
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
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <span>Come registrarsi</span>
        </nav>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          <UserPlus className="h-3.5 w-3.5" /> Guida alla registrazione 2026
        </div>

        <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Come registrarsi su un casinò ADM: documenti, verifica dell'identità e SPID
        </h1>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Guida informativa completa alla <strong>registrazione su un casinò online</strong> titolare di
          <strong> concessione ADM</strong> (ex AAMS). Vediamo quali documenti servono, come funziona la
          <strong> verifica dell'identità</strong>, come registrarsi con <strong>SPID o CIE</strong>, quando
          viene accreditato l'eventuale <strong>bonus senza deposito</strong> e come impostare i limiti di
          gioco. Contenuto riservato ai maggiorenni.
        </p>

        <div className="mt-8 rounded-xl border border-warning/40 bg-warning/10 p-4 text-sm text-foreground/90">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
            <p>
              <strong>Avvertenza +18.</strong> La registrazione è consentita esclusivamente ai maggiorenni. Il
              gioco può causare dipendenza patologica: consulta la pagina{" "}
              <Link to="/gioco-responsabile" className="underline">gioco responsabile</Link> e il numero verde{" "}
              <strong>800 558822</strong>.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground">
            Video: la registrazione su un casinò ADM spiegata passo passo
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Un riepilogo visivo dei requisiti, della procedura di iscrizione e della verifica dei documenti
            richiesta dai concessionari ADM.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-neutral-900 shadow-sm">
            <video
              className="aspect-video w-full"
              controls
              preload="metadata"
              playsInline
              poster="/video/registrazione-poster.jpg"
            >
              <source src="/video/come-registrarsi.mp4" type="video/mp4" />
              Il tuo browser non supporta la riproduzione video.
            </video>
          </div>
        </section>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Requisiti per aprire un conto di gioco</h2>
        <ul className="mt-3 space-y-3 text-foreground/90">
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Maggiore età.</strong> È il requisito inderogabile: la registrazione dei minori di 18 anni è vietata dalla legge.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Documento d'identità valido.</strong> Carta d'identità, patente o passaporto, leggibili fronte e retro.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Codice fiscale.</strong> Necessario per l'apertura nominativa del conto di gioco.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>SPID o CIE (alternativa).</strong> L'identità digitale consente la verifica immediata senza caricare file.</span></li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><strong>Non essere iscritto al RUA.</strong> Chi ha aderito al Registro Unico degli Autoesclusi non può aprire conti di gioco.</span></li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">
          Registrazione su un casinò ADM: la procedura passo passo
        </h2>
        <ol className="mt-4 space-y-4">
          {[
            ["Verifica la concessione ADM", "Prima di iscriverti, controlla che l'operatore compaia nell'elenco pubblico dei concessionari su adm.gov.it. Il numero di concessione è indicato anche nel footer del sito di gioco."],
            ["Compila il modulo di registrazione", "Inserisci dati anagrafici, codice fiscale, indirizzo email e numero di telefono. I dati devono essere veritieri: verranno confrontati con il documento."],
            ["Scegli username, password e limiti", "Imposta credenziali robuste e definisci subito il limite di deposito settimanale o mensile: è uno strumento di tutela previsto dalla normativa."],
            ["Verifica l'identità", "Carica fronte e retro del documento oppure accedi con SPID/CIE. Fino alla convalida il conto resta limitato e non è possibile prelevare."],
            ["Attiva il conto e l'eventuale bonus", "A verifica conclusa il conto di gioco è pienamente operativo e viene accreditato l'eventuale bonus senza deposito, secondo i termini pubblicati dal concessionario."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-sm font-bold text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">
          Registrazione con SPID o CIE: come funziona
        </h2>
        <p className="mt-3 text-foreground/90">
          Molti concessionari ADM permettono di completare l'iscrizione tramite <strong>SPID</strong> o
          <strong> Carta d'Identità Elettronica</strong>. L'identità digitale trasmette al concessionario i
          dati anagrafici già verificati dallo Stato: la <strong>verifica del conto di gioco</strong> avviene
          quindi in pochi secondi, senza upload di documenti e senza attese. È la modalità più rapida per
          rendere operativo il conto e sbloccare l'eventuale bonus senza deposito.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/5 p-4">
          <IdCard className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <p className="text-sm text-foreground/90">
            <strong>Nota.</strong> Un solo conto di gioco per persona su ciascun operatore. Conti multipli,
            intestazioni a terzi o dati non veritieri comportano la chiusura del conto e la perdita di
            eventuali bonus.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">
          Perché è obbligatoria la verifica dei documenti
        </h2>
        <p className="mt-3 text-foreground/90">
          La <strong>verifica dell'identità</strong> non è una formalità dell'operatore: è imposta dalla
          normativa antiriciclaggio e dalle regole ADM a tutela dei minori. Serve a garantire che il conto
          appartenga a una persona maggiorenne realmente esistente, a impedire l'accesso a chi si è
          autoescluso tramite <strong>RUA</strong> e a consentire prelievi tracciabili verso strumenti di
          pagamento intestati allo stesso titolare.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Errori frequenti in fase di iscrizione</h2>
        <ul className="mt-3 space-y-3 text-foreground/90">
          <li className="flex gap-2"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>Caricare foto del documento sfocate, tagliate o scadute: è la causa più comune di rifiuto della verifica.</span></li>
          <li className="flex gap-2"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>Usare un metodo di pagamento intestato ad altri: i prelievi verrebbero bloccati.</span></li>
          <li className="flex gap-2"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>Non leggere i Termini e Condizioni del bonus prima dell'attivazione.</span></li>
          <li className="flex gap-2"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>Rimandare l'impostazione dei limiti di deposito: conviene definirli al primo accesso.</span></li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-foreground">Domande frequenti sulla registrazione</h2>
        <div className="mt-4 space-y-4">
          {[
            ["Quali documenti servono per registrarsi su un casinò ADM?", "Un documento d'identità in corso di validità e il codice fiscale. Con SPID o CIE la verifica è immediata e non serve caricare file."],
            ["Quanto tempo richiede la verifica dell'identità?", "Immediata con SPID o CIE; da poche ore fino a 72 ore lavorative con il caricamento manuale dei documenti."],
            ["Posso avere più conti di gioco sullo stesso sito?", "No: la normativa italiana consente un solo conto di gioco per persona su ciascun concessionario ADM."],
            ["Il bonus senza deposito arriva subito dopo la registrazione?", "In genere viene accreditato solo dopo la convalida dei documenti, secondo le condizioni pubblicate dall'operatore."],
            ["La registrazione è gratuita?", "Sì, l'apertura del conto di gioco su un concessionario ADM non prevede costi."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground">{q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <Link
            to="/bonus-senza-deposito"
            className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-medium text-gold hover:bg-gold/20"
          >
            Info sui bonus senza deposito
          </Link>
          <Link
            to="/"
            hash="operatori"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:bg-accent"
          >
            Elenco concessionari ADM
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Contenuto informativo ai sensi dell'art. 9 D.L. 87/2018. Non costituisce comunicazione commerciale
          né incentivo al gioco. Vietato ai minori di 18 anni.
        </p>
      </article>
    </PageShell>
  );
}
