/**
 * Schede operative verificate sulle fonti ufficiali dei concessionari
 * (help center, FAQ, contratto di conto di gioco, pagine assistenza).
 * Stesse regole redazionali di src/data/operator-facts.ts: nessun valore
 * stimato, "Non dichiarato" dove il concessionario non pubblica il dato,
 * nessun dato ripreso da comparatori o siti affiliati.
 *
 * Operatori non presenti qui (AdmiralBet, Sportium, Betsson): le pagine
 * ufficiali di assistenza non sono consultabili in forma testuale, quindi
 * nessuna scheda operativa viene pubblicata finché i dati non sono verificabili.
 */
import type { OperatorFacts } from "./operator-facts";

const lottomatica: OperatorFacts = {
  slug: "lottomatica",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "Lottomatica (GBO Italy S.p.A.) richiede l'apertura di un conto di gioco unico e personale, con caricamento del documento di identità in fase di registrazione. Prima della convalida si può depositare e giocare ma non prelevare, e i versamenti complessivi sono limitati a 1.000 €. Dal 13 novembre 2025 il documento va caricato durante la registrazione e dal 4 agosto 2026 la carta d'identità cartacea non è più accettata per aprire un nuovo conto.",
  withdrawals: [
    { method: "Bonifico istantaneo (Instant SEPA)", min: "10 €", max: "100.000 €", time: "Generalmente immediato se la banca è abilitata; altrimenti secondo i tempi del circuito interbancario", fees: "Nessuna", note: "Su IBAN Postepay un prelievo superiore a 15.000 € può essere stornato. In assenza di accredito immediato il concessionario indica di attendere fino a 6 giorni lavorativi prima di contattare l'assistenza." },
    { method: "Quick2Cash", min: "10 €", max: "2.000 €", time: "Generalmente immediato", fees: "Nessuna", note: "Richiede un account Quick2Cash e l'approvazione del prelievo dall'app." },
    { method: "Carta di credito", min: "10 €", max: "2.000 €", time: "Generalmente entro 24-48 ore lavorative", fees: "Nessuna" },
    { method: "PostePay", min: "10 €", max: "2.000 €", time: "Generalmente entro 24-48 ore lavorative", fees: "Nessuna" },
    { method: "Apple Pay", min: "10 €", max: "2.000 €", time: "Entro 24-48 ore lavorative", fees: "Nessuna" },
    { method: "Google Pay", min: "10 €", max: "2.000 €", time: "Entro 24-48 ore lavorative", fees: "Nessuna" },
    { method: "PayPal", min: "10 €", max: "5.000 €", time: "Entro 24 ore", fees: "Nessuna" },
    { method: "Skrill", min: "10 €", max: "5.000 €", time: "Entro 24 ore", fees: "Nessuna" },
    { method: "Neteller", min: "10 €", max: "5.000 €", time: "Entro 24 ore", fees: "Nessuna" },
    { method: "Rapid Transfer", min: "10 €", max: "1.000 €", time: "Entro 24 ore", fees: "Nessuna" },
    { method: "MyPaysafe", min: "10 €", max: "2.000 €", time: "Entro 24 ore lavorative", fees: "Nessuna" },
    { method: "Bonifico bancario", min: "10 €", max: "100.000 €", time: "Entro 48-72 ore lavorative", fees: "Nessuna" },
    { method: "Domiciliato postale", min: "10 €", max: "6.000 €", time: "Ritirabile trascorsi 3-4 giorni lavorativi dalla conferma presso un ufficio postale", fees: "Nessuna" },
    { method: "Lottomatica Voucher", min: "2 €", max: "4.999 €", time: "Entro 12 ore", fees: "Nessuna" },
    { method: "Sonect", min: "20 €", max: "250 €", time: "Generalmente immediato", fees: "Nessuna" },
  ],
  deposits: [
    { method: "Carta di credito", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Apple Pay", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Google Pay", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "PostePay", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "PayPal", min: "10 €", max: "1.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "MuchBetter", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Skrill", min: "30 €", max: "1.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Neteller", min: "30 €", max: "1.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Rapid Transfer", min: "30 €", max: "1.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Paysafecard", min: "30 €", max: "1.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "MyBank", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Eventuali spese applicate dalla propria banca" },
    { method: "OnShop", min: "2 €", max: "4.999 €", time: "Immediato", fees: "Nessuna" },
    { method: "Lottomatica Voucher", min: "2 €", max: "4.999 €", time: "Immediato", fees: "Nessuna" },
    { method: "Ricarica diretta in ricevitoria", min: "2 €", max: "4.999 €", time: "Immediato", fees: "Nessuna" },
    { method: "Bonifico bancario", min: "5 €", max: "100.000 €", time: "Entro 2-3 giorni lavorativi", fees: "Eventuali spese applicate dalla propria banca" },
    { method: "Bollettino postale", min: "5 €", max: "Non dichiarato", time: "Entro 4-5 giorni lavorativi", fees: "Eventuali spese applicate da Poste Italiane" },
  ],
  verification: {
    intro:
      "Dal 13 novembre 2025 il caricamento del documento d'identità avviene direttamente in fase di registrazione, prima di completare l'apertura del conto di gioco.",
    documents: [
      "Carta d'identità (dal 4 agosto 2026 non più accettata in formato cartaceo per aprire un nuovo conto)",
      "Passaporto",
      "Patente di guida",
    ],
    steps: [
      "Inserimento dei dati anagrafici e accettazione di contratto e termini e condizioni",
      "Selezione del tipo di documento da caricare",
      "Acquisizione del documento da webcam, upload da computer oppure da smartphone tramite QR code o link SMS",
      "Conferma del caricamento e finalizzazione della registrazione",
    ],
    beforeValidation: [
      "È possibile depositare e giocare, ma non prelevare",
      "I versamenti complessivi non possono superare 1.000 € finché il documento non è approvato",
    ],
    blockers: [
      "Il concessionario ha 2 giorni per validare il conto dopo la registrazione",
      "Se il documento non viene validato entro 2 giorni il conto viene sospeso",
      "Se il documento manca oltre 60 giorni dalla registrazione il conto può essere chiuso",
    ],
  },
  limits: [
    "Il limite di ricarica settimanale va impostato obbligatoriamente all'apertura del conto ed è modificabile in Profilo > Gioco Responsabile",
    "Le riduzioni dei limiti hanno effetto immediato, gli aumenti diventano operativi dopo 7 giorni",
    "È possibile effettuare una sola richiesta di prelievo ogni 24 ore",
  ],
  recentChanges: [
    "Dal 13 novembre 2025 il documento d'identità va caricato durante la registrazione al portale",
    "Dal 4 agosto 2026 la carta d'identità cartacea non è più utilizzabile per aprire un nuovo conto di gioco",
    "Annunciati nuovi limiti giornalieri di deposito, spesa e tempo di gioco richiesti da ADM, operativi con le nuove regole tecniche",
  ],
  support: [{ channel: "Telefono", detail: "06 40400860, per assistenza su accesso, recupero credenziali e operazioni sul conto" }],
  faqs: [
    { q: "Dopo quanto tempo viene accreditato un prelievo con bonifico istantaneo su Lottomatica?", a: "L'accredito è generalmente immediato; in assenza di accredito immediato il concessionario indica di attendere fino a 6 giorni lavorativi dalla conferma prima di contattare l'assistenza." },
    { q: "Posso prelevare prima che il documento sia stato validato?", a: "No: prima della convalida è possibile depositare e giocare, ma non prelevare, e i versamenti complessivi restano entro 1.000 €." },
    { q: "Quali documenti accetta Lottomatica?", a: "Carta d'identità, passaporto o patente di guida in corso di validità; dal 4 agosto 2026 la carta d'identità cartacea non è più accettata per l'apertura di un nuovo conto." },
    { q: "Cosa succede se non invio il documento in tempo?", a: "Se il documento non viene validato entro 2 giorni dalla registrazione il conto viene sospeso; se manca oltre 60 giorni il conto può essere chiuso." },
    { q: "Quante richieste di prelievo posso fare al giorno?", a: "Una sola richiesta di prelievo ogni 24 ore." },
    { q: "Come modifico i limiti di gioco responsabile?", a: "Dall'area riservata, in Profilo > Gioco Responsabile: le riduzioni sono immediate, gli aumenti diventano effettivi dopo 7 giorni." },
  ],
  sources: [
    { label: "Lottomatica — Caricamento documento d'identità per la validazione", url: "https://lottomatica.zendesk.com/hc/it/articles/31737770516509-Caricamento-documento-d-identit%C3%A0-per-Validazione" },
    { label: "Lottomatica — Apertura conto gioco", url: "https://lottomatica.zendesk.com/hc/it/articles/5358833475613-Apertura-Conto-Gioco-Definizione" },
    { label: "Lottomatica — Prelievi (categoria assistenza)", url: "https://lottomatica.zendesk.com/hc/it/categories/5213386050333-Prelievi" },
    { label: "Lottomatica — Prelievo con Instant SEPA", url: "https://lottomatica.zendesk.com/hc/it/articles/24646810728989-Prelievo-con-Instant-SEPA" },
    { label: "Lottomatica — Prelievo con Quick2Cash", url: "https://lottomatica.zendesk.com/hc/it/articles/30192753521565-Prelievo-con-Quick2Cash" },
    { label: "Lottomatica — Come depositare", url: "https://lottomatica.zendesk.com/hc/it/articles/5438659829021-Come-depositare" },
    { label: "Lottomatica — Autolimitazione", url: "https://lottomatica.zendesk.com/hc/it/articles/5601466126749-Autolimitazione" },
  ],
};

const sisal: OperatorFacts = {
  slug: "sisal",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "Sisal Italia S.p.A. è concessionario ADM per il gioco a distanza e prevede un solo conto di gioco per cliente, la cui attivazione è subordinata alla convalida del contratto da parte del sistema centrale ADM e all'attivazione degli strumenti di autolimitazione. Il documento di identità va trasmesso entro 30 giorni dalla registrazione, pena la sospensione del conto. Gli importi e i tempi dei singoli metodi di prelievo non sono pubblicati in forma testuale sulle pagine ufficiali consultate.",
  withdrawals: [],
  deposits: [],
  verification: {
    intro:
      "L'attivazione del conto di gioco è subordinata alla convalida del contratto da parte del sistema centrale ADM e alla trasmissione di un documento di identità in corso di validità.",
    documents: ["Documento di identità in corso di validità, copia fronte e retro"],
    steps: [
      "Accettazione del contratto di gioco a distanza, dei termini e condizioni e presa visione dell'informativa privacy",
      "Inserimento dei dati personali e del codice fiscale",
      "Attivazione degli strumenti di autolimitazione",
      "Convalida del contratto da parte del sistema centrale ADM",
      "Invio della copia fronte e retro del documento di identità",
    ],
    beforeValidation: ["Non dichiarato"],
    blockers: [
      "In caso di mancata trasmissione del documento entro 30 giorni il conto viene sospeso, con esclusione dal gioco e dai prelievi",
      "Se il documento non arriva entro ulteriori 60 giorni dalla sospensione il contratto si risolve e il conto non è più riattivabile",
      "Non è possibile aprire un nuovo conto prima di 15 giorni dalla chiusura del precedente",
    ],
  },
  limits: [
    "Limite di ricarica modificabile dalla sezione Strumenti di protezione",
    "Limite di tempo giornaliero impostabile per casinò, slot e quick games",
    "Sezione Movimento conto per monitorare tutte le operazioni del conto di gioco",
    "Autoesclusione gestibile dagli strumenti di protezione del conto",
  ],
  recentChanges: [],
  support: [{ channel: "Chat, telefono ed email", detail: "Customer care dichiarato attivo 24 ore su 24, 7 giorni su 7" }],
  faqs: [
    { q: "Entro quanto tempo devo inviare il documento a Sisal?", a: "Entro 30 giorni dalla registrazione, altrimenti l'operatività del conto viene sospesa." },
    { q: "Cosa succede se non invio il documento nei termini?", a: "Il conto viene sospeso ed escluso da gioco e prelievi; se il documento non arriva entro ulteriori 60 giorni il contratto si risolve e il conto non è più riattivabile." },
    { q: "Posso avere più conti di gioco su Sisal?", a: "No, il cliente può detenere un solo contratto di conto di gioco attivo." },
    { q: "Posso riaprire subito un conto dopo averlo chiuso?", a: "No, occorre attendere almeno 15 giorni dalla chiusura del conto precedente." },
    { q: "Come imposto un limite di tempo di gioco?", a: "Dalla sezione Strumenti di protezione si imposta un limite di tempo giornaliero per casinò, slot e quick games." },
  ],
  sources: [
    { label: "Sisal — Termini e condizioni (PDF)", url: "https://www.sisal.it/content/dam/new-dam/italy/canali/sisal-it/doc-pdf/doc-vari/doc-istituzionali/Sisal_termini_e_condizioni.pdf" },
    { label: "Sisal — Strumenti di autolimitazione e autoesclusione", url: "https://www.sisal.it/gioco-responsabile/strumenti" },
    { label: "Sisal — Domande frequenti sui prelievi", url: "https://www.sisal.it/faq/prelievi" },
    { label: "Sisal — Domande frequenti sulla gestione del conto", url: "https://www.sisal.it/faq/gestione-conto" },
    { label: "Sisal — Domande frequenti sulle ricariche", url: "https://www.sisal.it/faq/ricariche" },
  ],
};

const eplay24: OperatorFacts = {
  slug: "eplay24",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "E-Play24 è concessionario ADM con concessione n. 16004. L'attivazione del conto richiede la sottoscrizione del contratto, l'impostazione dei limiti di gioco e l'invio del documento di identità e del codice fiscale, con convalida da parte del sistema centrale ADM. Fino al completamento dell'attivazione il conto resta sospeso: non si può depositare, prelevare né giocare.",
  withdrawals: [],
  deposits: [
    { method: "Carta di credito (Visa, Mastercard)", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "PayPal", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Skrill", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Neteller", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Paysafecard", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Bonifico bancario", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Postepay e servizi Poste Italiane (bollettino, bonifico postale, postagiro)", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato", note: "Ricarica disponibile anche nei punti vendita convenzionati della rete E-Play24." },
  ],
  verification: {
    intro:
      "L'attivazione del conto è subordinata alla stipula del contratto, all'impostazione dei limiti di gioco, all'invio del documento di identità e del codice fiscale e alla convalida da parte del sistema centrale ADM.",
    documents: ["Carta di identità fronte e retro", "Patente di guida", "Passaporto", "Codice fiscale"],
    steps: [
      "Sottoscrizione del contratto di conto di gioco con i dati personali",
      "Impostazione dei limiti di gioco",
      "Invio del documento di identità fronte e retro e del codice fiscale",
      "Convalida del documento e del codice fiscale",
      "Convalida da parte del sistema centrale ADM",
    ],
    beforeValidation: [
      "Fino al completamento dell'attivazione il conto resta sospeso: non sono consentiti versamenti, prelievi né servizi di gioco",
    ],
    blockers: [
      "L'omessa trasmissione della documentazione entro 60 giorni dalla registrazione ha conseguenze sulla validità del conto",
    ],
  },
  limits: [
    "L'impostazione dei limiti di gioco è un passaggio obbligatorio per l'attivazione del conto",
    "Iscrizione riservata ai maggiorenni, con verifica del documento e del codice fiscale e controlli periodici a campione sull'identità del titolare",
  ],
  recentChanges: [],
  support: [
    { channel: "Live chat", detail: "Dal sito di gioco, tutti i giorni festivi compresi dalle 9:00 alle 22:00" },
    { channel: "Telefono", detail: "199 299 024, tutti i giorni dalle 9:00 alle 22:00" },
    { channel: "Email", detail: "info@e-play24.it" },
  ],
  faqs: [
    { q: "Quali documenti servono per attivare il conto su Eplay24?", a: "Un documento di identità in corso di validità fronte e retro (carta di identità, patente o passaporto) e il codice fiscale." },
    { q: "Posso giocare mentre il conto è in attesa di convalida?", a: "No: fino al completamento dell'attivazione il conto resta sospeso e non consente depositi, prelievi né gioco." },
    { q: "Cosa succede se non invio il documento in tempo?", a: "L'omessa trasmissione entro 60 giorni dalla registrazione incide sulla validità del conto, come indicato nei termini e condizioni." },
    { q: "Quali metodi di deposito accetta Eplay24?", a: "Carte Visa e Mastercard, PayPal, Skrill, Neteller, Paysafecard, bonifico bancario e i servizi Poste Italiane." },
    { q: "In che orari è attiva l'assistenza?", a: "Tutti i giorni, festivi compresi, dalle 9:00 alle 22:00 via live chat, telefono ed email." },
  ],
  sources: [
    { label: "Eplay24 — Termini e condizioni", url: "https://eplay24-scommesse.it/termini-e-condizioni/" },
    { label: "Eplay24 — Gioco responsabile", url: "https://eplay24-scommesse.it/gioco-responsabile/" },
    { label: "E-Play24 — Sistemi di pagamento", url: "https://www.e-play24.com/servizi/sistemi-di-pagamento/" },
    { label: "E-Play24 — Assistenza clienti", url: "https://www.e-play24.com/servizi/assistenza-clienti-7-7/" },
  ],
};

const leovegas: OperatorFacts = {
  slug: "leovegas",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "LeoVegas opera in Italia con concessione ADM. Il deposito minimo dichiarato è di 10 € e il prelievo richiede il conto convalidato in via definitiva e almeno un deposito effettuato. I bonifici sono eseguiti solo su conti correnti intestati al titolare del conto di gioco e il prelievo è ammesso con lo stesso metodo che ha generato la vincita.",
  withdrawals: [
    { method: "PayPal", min: "20 €", max: "4.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "Skrill", min: "20 €", max: "10.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "Visa / Mastercard", min: "20 €", max: "2.000 €", time: "2-5 giorni lavorativi", fees: "Gratuito", note: "Non tutte le Mastercard consentono il prelievo: in quel caso si usa il bonifico bancario con documentazione aggiuntiva." },
    { method: "PostePay", min: "20 €", max: "2.000 €", time: "2-5 giorni lavorativi", fees: "Gratuito" },
    { method: "Apple Pay", min: "20 €", max: "3.000 €", time: "2-5 giorni lavorativi", fees: "Gratuito" },
    { method: "Bonifico bancario", min: "20 €", max: "Non dichiarato", time: "Non dichiarato", fees: "Gratuito", note: "Indicato come alternativa quando il prelievo su carta non è disponibile; richiede il caricamento della documentazione." },
  ],
  deposits: [
    { method: "Visa", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "Mastercard", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "PostePay", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "Apple Pay", min: "10 €", max: "3.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "PayPal", min: "10 €", max: "4.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "Skrill", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "Paysafecard", min: "10 €", max: "2.000 €", time: "Immediato", fees: "Gratuito" },
  ],
  verification: {
    intro: "Il conto di gioco deve essere convalidato in via definitiva prima di poter richiedere un prelievo.",
    documents: ["Copia fronte e retro di un documento d'identità in corso di validità"],
    steps: [
      "Caricare la documentazione richiesta nell'area personale",
      "Attendere la convalida definitiva del conto di gioco",
    ],
    beforeValidation: [
      "Non è possibile richiedere prelievi prima della convalida definitiva e di almeno un deposito di 10 €",
    ],
    blockers: [
      "Deposito con carta prepagata anonima non accettato finché il conto non è verificato",
      "Prelievo su Mastercard non sempre disponibile: serve il bonifico bancario con documentazione aggiuntiva",
      "Bonifici solo su conti correnti intestati al titolare del conto di gioco",
    ],
  },
  limits: [
    "Deposito minimo dichiarato: 10 €",
    "Strumenti di autolimitazione su deposito, perdita, sessione e tempo di gioco",
    "Autoesclusione a tempo determinato (30, 60 o 90 giorni) oppure a tempo indeterminato tramite RUA",
  ],
  recentChanges: [
    "Dal 13 novembre 2025 il conto passa alla nuova concessione ADM con nuovo contratto di gioco e nuovi termini e condizioni",
    "Il nuovo regolamento introduce ulteriori autolimitazioni su spesa, sessione e deposito",
  ],
  support: [{ channel: "Assistenza sul sito", detail: "Area assistenza di leovegas.it per conto di gioco, depositi e prelievi" }],
  faqs: [
    { q: "Come si preleva dal conto LeoVegas?", a: "Dall'area personale, alla voce Prelievo, scegliendo il metodo di pagamento: il concessionario approva prelievi con lo stesso metodo che ha generato la vincita prelevabile." },
    { q: "Posso prelevare su un conto corrente non intestato a me?", a: "No: i bonifici sono eseguiti solo su conti correnti intestati al titolare del conto di gioco." },
    { q: "Perché il prelievo con Mastercard non va a buon fine?", a: "Non tutte le Mastercard consentono il prelievo; in quel caso si preleva tramite bonifico bancario caricando la documentazione richiesta." },
    { q: "Posso depositare con la carta di un'altra persona?", a: "No, non sono ammessi depositi con carte intestate a terzi." },
    { q: "Qual è il deposito minimo su LeoVegas?", a: "Il deposito minimo dichiarato è di 10 €." },
  ],
  sources: [
    { label: "LeoVegas — Metodi di pagamento", url: "https://www.leovegas.it/metodi-di-pagamento" },
    { label: "LeoVegas — Domande frequenti sui prelievi", url: "https://www.leovegas.it/blog/domande-frequenti/prelievi" },
    { label: "LeoVegas — Domande frequenti sui depositi", url: "https://www.leovegas.it/blog/domande-frequenti/depositi" },
    { label: "LeoVegas — Domande frequenti sul conto gioco", url: "https://www.leovegas.it/blog/domande-frequenti/conto-gioco" },
    { label: "LeoSafePlay — Strumenti di gioco responsabile", url: "https://www.leosafeplay.com/it/our-tools" },
  ],
};

const netbet: OperatorFacts = {
  slug: "netbet",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "NetBet.it è gestito da BPG S.r.l. con concessione ADM n. 15015. Il documento di identità va inviato entro 30 giorni dall'apertura del conto: si può giocare temporaneamente, ma senza documento non si preleva. La convalida avviene entro 72 ore dall'invio di una copia fronte e retro a colori.",
  withdrawals: [
    { method: "PayPal", min: "10 €", max: "50.000 €", time: "Immediato dall'approvazione", fees: "Gratuito", note: "Consentito solo se è già stato effettuato un deposito con lo stesso conto PayPal." },
    { method: "Skrill", min: "10 €", max: "10.000 €", time: "Immediato dall'approvazione", fees: "Gratuito" },
    { method: "Neteller", min: "10 €", max: "10.000 €", time: "Immediato dall'approvazione", fees: "Gratuito" },
    { method: "Visa / Mastercard", min: "10 €", max: "50.000 €", time: "1-3 giorni lavorativi", fees: "Gratuito" },
    { method: "Bonifico bancario", min: "10 €", max: "Non dichiarato", time: "3-5 giorni lavorativi", fees: "Gratuito" },
  ],
  deposits: [
    { method: "Carta bancaria personale", min: "10 €", max: "50.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "PostePay", min: "10 €", max: "1.000 €", time: "Immediato", fees: "Gratuito" },
    { method: "PayPal", min: "10 €", max: "50.000 €", time: "Da 2 a 48 ore", fees: "Gratuito" },
    { method: "Paysafecard", min: "10 €", max: "1.000 €", time: "Immediato", fees: "Gratuito" },
  ],
  verification: {
    intro: "La convalida del conto avviene entro 72 ore dall'invio di una copia fronte e retro a colori di un documento valido.",
    documents: ["Carta di identità", "Passaporto", "Patente di guida"],
    steps: [
      "Caricare il documento dal conto di gioco nella sezione Documenti",
      "In alternativa inviarlo via email a info@netbet.it con oggetto «Documenti»",
      "Attendere l'email di conferma da parte del concessionario",
    ],
    beforeValidation: [
      "È possibile giocare temporaneamente sul conto non ancora convalidato",
      "Senza documento trasmesso entro 30 giorni non si possono prelevare vincite né rimborsi",
    ],
    blockers: [
      "Trascorsi 30 giorni dall'apertura senza documento il conto viene sospeso fino alla ricezione",
      "Trascorsi 90 giorni dall'apertura senza documento il contratto viene risolto e il conto estinto",
    ],
  },
  limits: [
    "Prelievo minimo di 10 € su tutti i metodi dichiarati",
    "Massimali di prelievo differenziati per metodo: fino a 50.000 € per carte e bonifico, 10.000 € per Skrill e Neteller",
  ],
  recentChanges: [],
  support: [
    { channel: "Live chat", detail: "Disponibile dalle 10:00 alle 22:00" },
    { channel: "Email", detail: "info@netbet.it" },
  ],
  faqs: [
    { q: "Quanto tempo serve per convalidare il conto NetBet?", a: "La convalida avviene entro 72 ore dall'invio di una copia fronte e retro a colori del documento di identità." },
    { q: "Si può giocare senza aver convalidato il conto?", a: "Sì, temporaneamente, ma senza documento entro 30 giorni non si preleva e dopo 90 giorni il conto viene estinto." },
    { q: "Quali sono i limiti di prelievo con carta?", a: "Minimo 10 € e massimo 50.000 €, con esecuzione in 1-3 giorni lavorativi e senza costi." },
    { q: "Posso prelevare su PayPal senza aver depositato con PayPal?", a: "No: il prelievo su PayPal è consentito solo se è già stato effettuato un deposito con lo stesso conto." },
    { q: "Come contatto l'assistenza NetBet?", a: "Tramite live chat dalle 10:00 alle 22:00 oppure via email a info@netbet.it." },
  ],
  sources: [
    { label: "NetBet — Conto gioco", url: "https://aiuto.netbet.it/hc/it-it/articles/14733887779484-Conto-gioco" },
    { label: "NetBet — Prelievi", url: "https://aiuto.netbet.it/hc/it-it/articles/14733621942556-Prelievi" },
    { label: "NetBet — Pagamenti", url: "https://aiuto.netbet.it/hc/it-it/articles/14734089252636-Pagamenti" },
    { label: "NetBet — Contatti", url: "https://aiuto.netbet.it/hc/it-it/articles/15280226774428-Contatti" },
    { label: "NetBet — Termini e condizioni", url: "https://www.netbet.it/aiuto/termini-condizioni/termini-condizioni" },
  ],
};

const w888: OperatorFacts = {
  slug: "888",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "888casino.it è gestito da 888 Italia Limited con concessione ADM. Le richieste di prelievo vengono elaborate entro 24 ore lavorative e dopo tale termine non sono più annullabili. Il documento di identità va caricato entro 30 giorni dalla registrazione, altrimenti il conto viene sospeso. Gli importi minimi e massimi dei singoli prelievi non sono pubblicati in forma testuale.",
  withdrawals: [
    { method: "Bonifico rapido", min: "Non dichiarato", max: "Non dichiarato", time: "Stesso giorno", fees: "Gratuito" },
    { method: "PayPal", min: "Non dichiarato", max: "Non dichiarato", time: "Stesso giorno", fees: "Gratuito" },
    { method: "Skrill", min: "Non dichiarato", max: "Non dichiarato", time: "Stesso giorno", fees: "Gratuito" },
    { method: "Carta di credito (Visa / Mastercard)", min: "Non dichiarato", max: "Non dichiarato", time: "Dallo stesso giorno a 3 giorni lavorativi", fees: "Gratuito" },
    { method: "Neteller", min: "Non dichiarato", max: "Non dichiarato", time: "Dallo stesso giorno a 3 giorni lavorativi", fees: "Gratuito" },
    { method: "Apple Pay", min: "Non dichiarato", max: "Non dichiarato", time: "Fino a 3 giorni lavorativi", fees: "Gratuito" },
    { method: "Bonifico bancario", min: "Non dichiarato", max: "Non dichiarato", time: "Da 2 a 5 giorni lavorativi", fees: "Gratuito" },
  ],
  deposits: [
    { method: "Visa / Mastercard", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
    { method: "Apple Pay", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
    { method: "Bonifico rapido", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
    { method: "PayPal", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
    { method: "Skrill", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
    { method: "Neteller", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
    { method: "Paysafecard", min: "10 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito", note: "Utilizzabile solo per ricaricare, non per prelevare." },
    { method: "OnShop", min: "24 €", max: "Non dichiarato", time: "Mediamente fino a 10 minuti", fees: "Gratuito" },
  ],
  verification: {
    intro: "Il conto va verificato al momento della registrazione con l'invio di un documento di riconoscimento valido.",
    documents: ["Carta d'identità elettronica", "Patente di guida", "Passaporto"],
    steps: [
      "Scegliere un documento in corso di validità",
      "Scattare una foto chiara e leggibile del documento, fronte e retro dove previsto",
      "Caricarlo in fase di registrazione oppure nella sezione Verifica identità dopo l'accesso",
    ],
    beforeValidation: ["Il caricamento del documento entro 30 giorni dalla registrazione è necessario per continuare a giocare"],
    blockers: [
      "Documento non inviato entro 30 giorni: il conto viene sospeso",
      "Dopo ulteriori 60 giorni senza documento il conto viene chiuso definitivamente",
      "Possono essere richiesti documenti aggiuntivi per verificare i dati di registrazione o i metodi di pagamento",
    ],
  },
  limits: [
    "Ricarica minima di 10 € sui principali metodi e di 24 € con OnShop",
    "Limiti personali di ricarica impostabili su 1, 7 o 30 giorni dalla sezione Imposta limiti personali",
    "Il concessionario può modificare gli importi minimi di ricarica del singolo conto dopo averne analizzato la cronologia",
  ],
  recentChanges: [],
  support: [
    { channel: "Live chat", detail: "Tutti i giorni dalle 8:00 alle 24:00" },
    { channel: "Email", detail: "assistenza@888.it" },
  ],
  faqs: [
    { q: "Quali sono i tempi di elaborazione dei prelievi su 888?", a: "Le richieste vengono elaborate entro 24 ore lavorative; superato quel termine il prelievo non può più essere annullato." },
    { q: "Quanto tempo impiega una ricarica?", a: "I tempi medi dichiarati sono fino a 10 minuti, ma in alcuni casi possono servire fino a 24 ore." },
    { q: "Con quali metodi non è possibile prelevare?", a: "Con Paysafecard si può solo ricaricare, non prelevare." },
    { q: "Cosa succede se non invio il documento entro 30 giorni?", a: "Il conto viene sospeso e, dopo ulteriori 60 giorni senza documento, chiuso definitivamente." },
    { q: "Come modifico i limiti di ricarica?", a: "Dalla Cassa, icona personale, voce Imposta limiti personali, per aumentare o diminuire i limiti." },
  ],
  sources: [
    { label: "888 — Metodi di ricarica accettati", url: "https://www.888casino.it/come-ricaricare/ricarica/metodi-di-ricarica-accettati/" },
    { label: "888 — Limiti di ricarica", url: "https://www.888casino.it/come-ricaricare/ricarica/limiti-di-ricarica/" },
    { label: "888 — Tempi di elaborazione dei prelievi", url: "https://www.888casino.it/come-ricaricare/prelievi/tempi-di-elaborazione-dei-prelievi/" },
    { label: "888 — Informativa sui prelievi", url: "https://www.888casino.it/come-ricaricare/prelievi/informativa-sui-prelievi/" },
    { label: "888 — Verifica identità", url: "https://www.888casino.it/come-iniziare/verifica-identita/" },
    { label: "888 — Gioco responsabile", url: "https://www.888casino.it/gioco-responsabile/" },
  ],
};

const betflag: OperatorFacts = {
  slug: "betflag",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "BetFlag (concessione ADM n. 16008) consente prelievi solo dopo la validazione del documento inviato in registrazione. Il saldo prelevabile è richiedibile in qualsiasi momento, i bonus non sono prelevabili e una richiesta può essere stornata finché è in lavorazione. Gli importi e i tempi dei singoli metodi non sono pubblicati in forma testuale.",
  withdrawals: [
    { method: "PostePay", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato", note: "Utilizzabile anche se non usata per depositare; la carta deve essere intestata al titolare del conto." },
    { method: "Carta di credito o prepagata (Visa, Visa Electron, Mastercard)", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato", note: "Richiede l'abilitazione al trasferimento del credito e un deposito con la stessa carta negli ultimi 11 mesi." },
    { method: "PayPal, Skrill, Neteller, MuchBetter", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato", note: "Utilizzabili solo se già impiegati per un deposito e intestati al titolare del conto." },
    { method: "Bonifico bancario", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Bonifico domiciliato allo sportello", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
  ],
  deposits: [
    { method: "Carta di credito o prepagata (Visa, Visa Electron, Mastercard, Maestro)", min: "Non dichiarato", max: "Non dichiarato", time: "Immediato", fees: "Non dichiarato", note: "Soggetta al protocollo 3D Secure; la carta deve essere intestata al titolare del conto." },
    { method: "PostePay", min: "Non dichiarato", max: "Non dichiarato", time: "Immediato", fees: "Non dichiarato" },
  ],
  verification: {
    intro: "Il prelievo delle vincite nette è possibile solo dopo l'invio e la validazione della copia fronte e retro del documento usato in registrazione.",
    documents: ["Documento di riconoscimento in corso di validità, fronte e retro"],
    steps: [
      "Accedere all'area personale e caricare il documento nella sezione dedicata",
      "Attendere la validazione da parte del concessionario",
    ],
    beforeValidation: [
      "Si può giocare e vincere, ma non prelevare finché il documento non è validato",
      "Lo stato del conto di gioco deve risultare «Registrato»",
    ],
    blockers: [
      "Documento mancante o non validato",
      "Metodo di prelievo mai utilizzato per un deposito, nel caso di carte ed e-wallet",
      "Intestatario del metodo di pagamento diverso dal titolare del conto",
    ],
  },
  limits: [
    "Limite massimo di ricarica settimanale impostato obbligatoriamente in registrazione e modificabile in Gioco Responsabile > Autolimitazione",
    "Le riduzioni del limite hanno effetto immediato, gli aumenti dopo 7 giorni",
    "Autoesclusione su tutti i giochi o su una singola famiglia, temporanea da 7 a 270 giorni oppure permanente con minimo 270 giorni",
  ],
  recentChanges: [
    "Nuove modalità ed effetti dell'autoesclusione in vigore dal 1° febbraio 2026, con autoesclusione valida presso tutti i concessionari",
  ],
  support: [
    { channel: "Numero verde", detail: "800 900 333 da rete fissa" },
    { channel: "Telefono da mobile", detail: "02 91645111, secondo il proprio piano tariffario" },
    { channel: "Live chat", detail: "Tutti i giorni dalle 9:00 alle 21:00" },
    { channel: "Email gioco responsabile", detail: "giocoresponsabile@betflag.it" },
  ],
  faqs: [
    { q: "Quali metodi di prelievo prevede BetFlag?", a: "PostePay, carta di credito, bonifico bancario, bonifico domiciliato allo sportello e i portafogli PayPal, Skrill, Neteller e MuchBetter." },
    { q: "Posso prelevare in qualsiasi momento?", a: "Sì, il saldo prelevabile è richiedibile sempre, a condizione che il documento sia già stato inviato e validato." },
    { q: "Posso prelevare i bonus?", a: "No, i bonus non rientrano nel saldo prelevabile e possono essere usati solo per giocare." },
    { q: "Posso annullare una richiesta di prelievo?", a: "Sì, finché è in lavorazione, cliccando su «Storna» nella sezione Prelievo: l'importo torna subito disponibile." },
    { q: "Come funziona l'autolimitazione al versamento?", a: "È il limite massimo di deposito settimanale impostato in registrazione: la riduzione è immediata, l'aumento diventa efficace dopo 7 giorni." },
  ],
  sources: [
    { label: "BetFlag — Prelievi", url: "https://info.betflag.it/info-conto/gestione-conto/prelievi/" },
    { label: "BetFlag — Versamenti", url: "https://info.betflag.it/info-conto/gestione-conto/versamenti/" },
    { label: "BetFlag — FAQ prelievi", url: "https://info.betflag.it/faq/prelievi/" },
    { label: "BetFlag — Autolimitazione al deposito", url: "https://info.betflag.it/info-conto/gioco-responsabile/autolimitazione-al-deposito/" },
    { label: "BetFlag — Autoesclusione", url: "https://info.betflag.it/info-conto/gioco-responsabile/autoesclusione/" },
    { label: "BetFlag — Condizioni generali", url: "https://info.betflag.it/info-conto/regolamenti-e-sicurezza/condizioni-generali" },
  ],
};

const sunbet: OperatorFacts = {
  slug: "sunbet",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "Sunbet è gestito da Betpremium S.r.l. con concessione ADM n. 16039. Per prelevare occorre aver inviato copia fronte e retro di un documento valido e il codice fiscale entro 30 giorni dalla registrazione. Il prelievo è limitato all'importo indicato come saldo prelevabile e non è ammesso su carte intestate a terzi.",
  withdrawals: [
    { method: "PostePay prepagata", min: "5 €", max: "Non dichiarato", time: "Generalmente entro 24 ore", fees: "Non dichiarato", note: "Non è possibile prelevare con carte intestate a terzi." },
    { method: "Carta di credito", min: "10 €", max: "Non dichiarato", time: "Entro 48 ore lavorative", fees: "Non dichiarato" },
    { method: "Skrill", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Bonifico su conto corrente bancario o postale", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
  ],
  deposits: [
    { method: "Carta di credito", min: "10 €", max: "Non dichiarato", time: "Immediato", fees: "Non dichiarato" },
    { method: "PostePay e carte tramite Poste.it", min: "10 €", max: "1.999,99 €", time: "Immediato", fees: "Non dichiarato" },
    { method: "Skrill", min: "25 €", max: "999,99 €", time: "Immediato", fees: "Non dichiarato" },
    { method: "Paysafecard", min: "25 €", max: "999,99 €", time: "Immediato", fees: "Non dichiarato" },
    { method: "OnShop", min: "7 €", max: "Non dichiarato", time: "Immediato", fees: "Non dichiarato" },
    { method: "Bonifico su conto corrente bancario o postale", min: "5 €", max: "100.000 €", time: "2-3 giorni lavorativi", fees: "Non dichiarato" },
    { method: "Ricarica nominale presso punto vendita", min: "Non dichiarato", max: "Non dichiarato", time: "Immediato", fees: "Non dichiarato" },
  ],
  verification: {
    intro:
      "Per regolarizzare il conto occorre inviare copia leggibile del codice fiscale e copia fronte e retro del documento usato in registrazione, entro 30 giorni.",
    documents: ["Documento di identità in corso di validità, fronte e retro", "Codice fiscale"],
    steps: [
      "Invio via email a documenti@sunbet.it",
      "In alternativa invio per posta ordinaria a Betpremium S.r.l., Via Circonvallazione Nomentana 486-486/A, 00162 Roma",
    ],
    beforeValidation: ["Fino all'invio dei documenti non è possibile prelevare dal conto di gioco"],
    blockers: [
      "Documento non inviato o non valido",
      "Documentazione aggiuntiva richiesta dal concessionario per ragioni di sicurezza",
      "Prelievo limitato al solo importo indicato come saldo prelevabile",
    ],
  },
  limits: [
    "Limiti di deposito e promemoria di sessione impostabili dalla sezione Gioco Responsabile",
    "Autolimitazioni di deposito e di spesa impostabili già in fase di registrazione",
  ],
  recentChanges: ["Termini e condizioni aggiornati all'11 novembre 2025"],
  support: [
    { channel: "Live chat", detail: "Tutti i giorni dalle 10:00 alle 22:30" },
    { channel: "Telefono", detail: "06 66181436, dalle 10:00 alle 19:00" },
    { channel: "Email assistenza", detail: "info@sunbet.it" },
    { channel: "Email invio documenti", detail: "documenti@sunbet.it" },
  ],
  faqs: [
    { q: "Quali documenti servono per regolarizzare il conto Sunbet?", a: "Copia leggibile del codice fiscale e copia fronte e retro del documento di riconoscimento usato in registrazione, entro 30 giorni." },
    { q: "Posso prelevare senza aver inviato i documenti?", a: "No: fino all'invio del documento valido non è possibile effettuare prelievi." },
    { q: "Quali metodi sono disponibili per il prelievo?", a: "Carte di credito, PostePay prepagata, Skrill e bonifico su conto corrente bancario o postale." },
    { q: "Qual è il deposito minimo con carta di credito?", a: "Il minimo dichiarato è di 10 €." },
    { q: "Posso prelevare su una carta intestata a un'altra persona?", a: "No, non è ammesso il prelievo su carte intestate a soggetti diversi dal titolare del conto." },
  ],
  sources: [
    { label: "Sunbet — Modalità di prelievo", url: "https://www.sunbet.it/supporto/modalita-prelievo" },
    { label: "Sunbet — Modalità di versamento", url: "https://www.sunbet.it/supporto/modalita-versamento" },
    { label: "Sunbet — Supporto", url: "https://www.sunbet.it/supporto/supporto" },
    { label: "Sunbet — Contratto di gioco", url: "https://www.sunbet.it/supporto/contratto-gioco" },
    { label: "Sunbet — Gioco responsabile", url: "https://www.sunbet.it/supporto/gioco-responsabile" },
  ],
};

const williamHill: OperatorFacts = {
  slug: "william-hill",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "William Hill Italia opera con concessione ADM n. 16044. La verifica del documento è richiesta prima di qualsiasi operazione: fino al buon esito della verifica non è possibile depositare né giocare, e la revisione del documento avviene entro 24 ore dalla ricezione. Importi e tempi dei singoli metodi di pagamento non sono pubblicati in forma testuale sulle pagine ufficiali.",
  withdrawals: [],
  deposits: [],
  verification: {
    intro:
      "Come previsto dal contratto di gioco, il concessionario richiede l'invio di un documento d'identità per la verifica dell'età legale al gioco secondo la regolamentazione ADM.",
    documents: [
      "Carta d'identità elettronica, fronte e retro, con i quattro angoli visibili e firmata",
      "Patente, fronte, con i quattro angoli visibili e firmata",
      "Passaporto, con pagine dati e firma visibili",
      "Altro documento equipollente previsto dalla legge",
    ],
    steps: [
      "Caricare il documento dal modulo di invio online, con dimensione massima 20 MB",
      "In alternativa inviarlo via email a verifica@williamhill.it, con dimensione massima 5 MB",
      "La revisione del documento avviene entro 24 ore dalla ricezione",
    ],
    beforeValidation: ["Fino al buon esito della verifica non è possibile depositare né giocare"],
    blockers: [
      "Documento non ricevuto durante la registrazione",
      "File non in formato JPEG o PDF, oppure non chiaramente leggibile",
    ],
  },
  limits: ["Limite di deposito settimanale impostabile e modificabile dal titolare del conto"],
  recentChanges: ["Termini e condizioni applicabili dal 13 novembre 2025 in virtù della concessione ADM n. 16044"],
  support: [
    { channel: "Centro assistenza", detail: "help.williamhill.it, con articoli e domande frequenti" },
    { channel: "Email verifica documenti", detail: "verifica@williamhill.it" },
  ],
  faqs: [
    { q: "Come verifico il conto William Hill?", a: "Inviando un documento valido dal modulo online oppure via email a verifica@williamhill.it: la revisione avviene entro 24 ore." },
    { q: "Posso depositare prima della verifica?", a: "No: fino al buon esito della verifica del documento non è possibile depositare né giocare." },
    { q: "Quali documenti sono accettati?", a: "Carta d'identità elettronica, patente, passaporto o altro documento equipollente, con requisiti precisi di leggibilità." },
    { q: "Perché il mio deposito ha generato un errore?", a: "Le cause più comuni sono caratteri non validi nell'importo, superamento del limite di deposito settimanale impostato oppure blocchi dell'istituto di pagamento." },
  ],
  sources: [
    { label: "William Hill — Come verificare il proprio conto", url: "https://help.williamhill.it/hc/it-it/articles/25211748222365-Come-verificare-il-proprio-conto" },
    { label: "William Hill — Termini e condizioni", url: "https://help.williamhill.it/hc/it-it/articles/21699849718557-Termini-e-Condizioni" },
    { label: "William Hill — Errori di deposito", url: "https://help.williamhill.it/hc/it-it/articles/25224884409501-Perch%C3%A8-il-mio-deposito-ha-generato-un-errore" },
  ],
};

const starcasino: OperatorFacts = {
  slug: "starcasino",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "StarCasinò pubblica la tabella completa dei metodi di ricarica con importi minimi, massimi, tempi e commissioni, mentre per i prelievi indica solo i metodi ammessi senza importi né tempi. All'apertura del conto il sistema applica limiti predefiniti di 3 ore di connessione e 100 € di spesa al giorno, modificabili dall'utente.",
  withdrawals: [
    { method: "Visa", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato", note: "Indicato tra i metodi di prelievo nella pagina ufficiale sul conto di gioco." },
    { method: "PostePay", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "PayPal", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Neteller", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Skrill", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
    { method: "Bonifico bancario", min: "Non dichiarato", max: "Non dichiarato", time: "Non dichiarato", fees: "Non dichiarato" },
  ],
  deposits: [
    { method: "Visa, PostePay, Cartasì", min: "5 €", max: "10.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Mastercard", min: "5 €", max: "10.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Google Pay", min: "5 €", max: "10.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Apple Pay", min: "5 €", max: "10.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "PayPal", min: "5 €", max: "2.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Skrill", min: "5 €", max: "10.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "Neteller", min: "5 €", max: "10.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "MyBank", min: "5 €", max: "5.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "MuchBetter", min: "5 €", max: "9.000 €", time: "Immediato", fees: "Nessuna" },
    { method: "OnShop", min: "5 €", max: "300 €", time: "Immediato", fees: "Nessuna" },
    { method: "Paysafecard", min: "5 €", max: "200 €", time: "Immediato", fees: "Nessuna" },
    { method: "Neosurf", min: "5 €", max: "100 €", time: "Immediato", fees: "Nessuna" },
    { method: "StarCasinò Voucher", min: "10 €", max: "100 €", time: "Immediato", fees: "Nessuna" },
  ],
  verification: {
    intro:
      "Le pagine ufficiali consultate non dettagliano in forma testuale l'iter documentale; indicano che ADM effettua un controllo di corrispondenza tra i dati inseriti in registrazione e quelli associati al codice fiscale.",
    documents: ["Non dichiarato"],
    steps: [
      "Essere titolare di un conto di gioco StarCasinò",
      "Impostare i limiti di ricarica personali al primo accesso",
    ],
    beforeValidation: ["Non dichiarato"],
    blockers: ["Non dichiarato"],
  },
  limits: [
    "Tempo giornaliero massimo di connessione impostato di default a 3 ore",
    "Spesa massima giornaliera impostata di default a 100 €",
    "Limiti predefiniti applicati all'attivazione del conto e modificabili secondo le regole tecniche ADM",
  ],
  recentChanges: [],
  support: [
    { channel: "Centro assistenza", detail: "support.starcasino.it" },
    { channel: "Email", detail: "assistenza@starcasino.it" },
  ],
  faqs: [
    { q: "Quali sono gli importi minimi e massimi di ricarica su StarCasinò?", a: "Variano per metodo: carte, Google Pay, Apple Pay, Skrill e Neteller vanno da 5 € a 10.000 €, PayPal arriva a 2.000 €, il voucher StarCasinò va da 10 € a 100 €." },
    { q: "In quanto tempo viene accreditata una ricarica?", a: "La pagina ufficiale indica tempi immediati e nessuna commissione per tutti i metodi di deposito elencati." },
    { q: "Con quali metodi si può prelevare?", a: "Visa, PostePay, PayPal, Neteller, Skrill e bonifico bancario, secondo la pagina ufficiale sul conto di gioco." },
    { q: "Quali limiti sono attivi all'apertura del conto?", a: "Di default 3 ore di connessione giornaliera e 100 € di spesa massima al giorno, modificabili dall'utente." },
  ],
  sources: [
    { label: "StarCasinò — Ricariche e prelievi", url: "https://www.starcasino.it/ricariche-e-prelievi" },
    { label: "StarCasinò — Il conto di gioco", url: "https://www.starcasino.it/conto-gioco" },
    { label: "StarCasinò — Gioco responsabile", url: "https://www.starcasino.it/gioco-responsabile/informazioni" },
  ],
};

const stake: OperatorFacts = {
  slug: "stake",
  verifiedOn: "2026-09-21",
  operationalSummary:
    "Stake.it opera in Italia con concessione ADM. Le FAQ ufficiali documentano assistenza, sicurezza del conto e autoesclusione, ma non pubblicano in forma testuale importi, tempi o commissioni di depositi e prelievi: quei campi restano quindi non dichiarati.",
  withdrawals: [],
  deposits: [],
  verification: {
    intro: "Le pagine ufficiali consultate non dettagliano in forma testuale l'iter di verifica documentale.",
    documents: ["Non dichiarato"],
    steps: ["Non dichiarato"],
    beforeValidation: ["Non dichiarato"],
    blockers: ["Un documento d'identità scaduto può impedire l'accesso al conto di gioco"],
  },
  limits: [
    "Autoesclusione richiedibile per 30, 60, 90 giorni oppure permanente, dall'area riservata alla voce sicurezza",
    "L'autoesclusione è trasversale a tutti i concessionari e non è selezionabile per singolo gioco",
    "Durante l'autoesclusione si accede al conto solo per consultare i report ed eseguire eventuali prelievi",
  ],
  recentChanges: [],
  support: [
    { channel: "Live chat", detail: "Disponibile sul sito, dichiarata attiva 24 ore su 24, 7 giorni su 7" },
    { channel: "Email", detail: "Assistenza dichiarata attiva 24 ore su 24, 7 giorni su 7" },
  ],
  faqs: [
    { q: "Come e quando posso ricevere assistenza su Stake?", a: "L'assistenza è dichiarata attiva 24 ore su 24, 7 giorni su 7, tramite email o live chat del sito." },
    { q: "Non riesco più ad accedere al conto: cosa posso fare?", a: "Può dipendere da troppi tentativi di accesso falliti, dalla password dimenticata o da un documento scaduto: occorre contattare l'assistenza." },
    { q: "Posso chiedere l'autoesclusione?", a: "Sì, dall'area riservata alla voce sicurezza, per 30, 60, 90 giorni o in modo permanente; vale per tutti i concessionari." },
    { q: "Il mio conto può essere usato da altri?", a: "No, il conto di gioco può essere utilizzato soltanto dal titolare." },
  ],
  sources: [{ label: "Stake.it — Domande frequenti ufficiali", url: "https://www.stake.it/info/faq.html" }],
};

export const extraOperatorFacts: OperatorFacts[] = [
  lottomatica,
  sisal,
  eplay24,
  leovegas,
  netbet,
  w888,
  betflag,
  sunbet,
  williamHill,
  starcasino,
  stake,
];
