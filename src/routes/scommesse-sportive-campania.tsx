import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, SeoTable, InternalCtaLinks, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/scommesse-sportive-campania",
  title: "Scommesse sportive in Campania: siti ADM e regole 2026",
  h1: "Scommesse sportive in Campania: siti ADM, regole locali e mercati più seguiti",
  description:
    "Guida alle scommesse sportive online per chi vive in Campania: concessione ADM nazionale, norme regionali sulle sale, calcio napoletano e strumenti di tutela. Solo +18.",
  keywords:
    "scommesse sportive campania, siti scommesse napoli, scommesse online campania, scommesse adm campania, scommesse calcio napoli",
  eyebrow: "Analisi regionale 2026",
  breadcrumb: "Scommesse sportive in Campania",
  sections: [
    {
      id: "quadro",
      label: "Quadro normativo",
      h2: "In Campania valgono le stesse regole nazionali sul gioco a distanza",
      paragraphs: [
        "Non esistono bookmaker autorizzati solo in Campania: la concessione per le scommesse a distanza è rilasciata dall'Agenzia delle Dogane e dei Monopoli e vale su tutto il territorio nazionale. Da Napoli, Salerno, Caserta, Avellino o Benevento si accede agli stessi operatori disponibili nel resto d'Italia.",
        "Per aprire un conto di gioco servono residenza in Italia, codice fiscale e un documento valido oppure SPID: la verifica dell'identità è obbligatoria per legge su ogni concessionario.",
      ],
      bullets: [
        "Concessione ADM valida in tutte le regioni",
        "Autoesclusione tramite RUA gestita a livello centrale",
        "Verifica documentale o SPID obbligatoria",
        "Divieto di pubblicità del gioco d'azzardo su tutto il territorio",
      ],
    },
    {
      id: "territorio",
      label: "Regole locali",
      h2: "Cosa cambia in Campania: sale fisiche e servizi di supporto",
      paragraphs: [
        "La Campania è tra le regioni che hanno adottato misure di contrasto al gioco problematico sul territorio, con distanze minime tra sale scommesse, sale slot e luoghi sensibili e limitazioni orarie decise dai comuni.",
        "Queste misure riguardano i punti vendita fisici e non i concessionari online, disciplinati dalla normativa nazionale. Le ASL campane gestiscono inoltre i Servizi per le Dipendenze (SerD) con sportelli dedicati al disturbo da gioco d'azzardo, gratuiti e ad accesso diretto.",
        "La Campania è anche una delle regioni con l'interesse relativo per il gioco online più alto rispetto alla popolazione: un dato che rende ancora più utili gli strumenti di autolimitazione.",
      ],
    },
    {
      id: "mercati",
      label: "Cosa si scommette",
      h2: "Il peso del calcio: Serie A, coppe europee e scommesse live",
      paragraphs: [
        "In Campania la domanda è fortemente concentrata sul calcio, con picchi in corrispondenza delle partite della squadra di Napoli in campionato e nelle competizioni europee. Seguono tennis, basket e volley.",
        "Tra i mercati più usati restano esito finale, doppia chance, under/over, gol/no gol e marcatori, insieme alle giocate live durante il match. Capire come si forma una quota e quanto pesa il margine del bookmaker è il primo passo per non sopravvalutare le proprie giocate.",
      ],
      bullets: [
        "Le multiple aumentano il margine a favore del bookmaker",
        "Le quote live cambiano rapidamente: attenzione alle giocate impulsive",
        "I bonus scommesse hanno sempre requisiti di puntata e scadenze",
        "Nessun pronostico garantisce un risultato",
      ],
    },
    {
      id: "scelta",
      label: "Come scegliere",
      h2: "Come scegliere un sito di scommesse se vivi in Campania",
      paragraphs: [
        "I criteri sono nazionali: concessione ADM verificabile sull'elenco pubblico, condizioni bonus trasparenti, metodi di pagamento supportati, tempi di prelievo dichiarati e assistenza in italiano.",
        "Vale la pena valutare anche la profondità del palinsesto sui campionati seguiti e la disponibilità di limiti di deposito, limiti di sessione e autoesclusione, da impostare fin dalla registrazione.",
      ],
    },
  ],
  faqs: [
    {
      q: "Esistono siti di scommesse riservati alla Campania?",
      a: "No. La concessione ADM è nazionale: gli operatori autorizzati sono gli stessi in tutte le regioni, Campania inclusa.",
    },
    {
      q: "Le limitazioni regionali campane valgono per il gioco online?",
      a: "No. Riguardano le sale scommesse e gli apparecchi fisici. Le scommesse online seguono la normativa nazionale e i regolamenti ADM.",
    },
    {
      q: "Perché in Campania si cerca molto \"scommesse online\"?",
      a: "È una delle regioni più popolose e con un interesse relativo sopra la media nazionale, trainato soprattutto dal seguito del calcio. Sono stime di volume di ricerca, non dati ufficiali di spesa.",
    },
    {
      q: "Dove chiedere aiuto in Campania per il gioco problematico?",
      a: "Il numero verde nazionale 800 558822 è attivo ovunque. In Campania i SerD delle ASL offrono sportelli gratuiti dedicati al disturbo da gioco d'azzardo.",
    },
  ],
};

export const Route = createFileRoute("/scommesse-sportive-campania")({
  head: () => guideHeadWithWebPage(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Scommesse in Campania: competenze nazionali e locali"
        headers={["Aspetto", "Chi decide", "Effetto per chi gioca online"]}
        rows={[
          ["Autorizzazione dell'operatore", "ADM (nazionale)", "Stessi bookmaker in tutte le regioni"],
          ["Distanze e orari delle sale", "Regione Campania e comuni", "Nessun effetto sul gioco a distanza"],
          ["Autoesclusione", "RUA (nazionale)", "Blocco valido su tutti i concessionari"],
          ["Supporto sulle dipendenze", "ASL campane", "SerD e sportelli locali gratuiti"],
        ]}
      />
      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Approfondimenti collegati</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link to="/casino-online-per-regione" className="text-gold hover:underline">Casinò online per regione in Italia</Link></li>
          <li><Link to="/slot-online-campania" className="text-gold hover:underline">Slot online in Campania</Link></li>
          <li><Link to="/scommesse-sportive-lazio" className="text-gold hover:underline">Scommesse sportive nel Lazio</Link></li>
          <li><Link to="/scommesse-sportive-online-adm" className="text-gold hover:underline">Scommesse sportive online ADM</Link></li>
          <li><Link to="/migliori-siti-scommesse-adm" className="text-gold hover:underline">Migliori siti scommesse ADM</Link></li>
          <li><Link to="/scommesse-live-come-funzionano" className="text-gold hover:underline">Come funzionano le scommesse live</Link></li>
          <li><Link to="/scommesse-serie-a-guida" className="text-gold hover:underline">Guida alle scommesse sulla Serie A</Link></li>
          <li><Link to="/gioco-responsabile" className="text-gold hover:underline">Gioco responsabile e strumenti di tutela</Link></li>
        </ul>
      </section>
      <InternalCtaLinks />
    </GuideArticle>
  ),
});
