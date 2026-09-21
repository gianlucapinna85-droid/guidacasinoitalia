/**
 * Dati operativi verificati sulle fonti ufficiali del concessionario
 * (centro assistenza, condizioni contrattuali, comunicazioni ADM).
 *
 * Regole redazionali:
 * - nessun valore stimato: se il concessionario non pubblica il dato in forma
 *   testuale, il campo vale "Non dichiarato";
 * - ogni scheda riporta le fonti e la data di verifica;
 * - nessun dato copiato da altri siti di comparazione o affiliazione.
 */

export type FactSource = {
  label: string;
  url: string;
};

export type PaymentRow = {
  method: string;
  /** Importo minimo dichiarato, oppure "Non dichiarato". */
  min: string;
  /** Importo massimo dichiarato, oppure "Non dichiarato". */
  max: string;
  /** Tempo di accredito dichiarato. */
  time: string;
  /** Costi applicati dal concessionario. */
  fees: string;
  note?: string;
};

export type OperatorFacts = {
  slug: string;
  /** Data dell'ultima verifica sulle fonti ufficiali (ISO, YYYY-MM-DD). */
  verifiedOn: string;
  /** Sintesi in una frase di cosa distingue l'operatività di questo conto. */
  operationalSummary: string;
  withdrawals: PaymentRow[];
  deposits: PaymentRow[];
  verification: {
    intro: string;
    documents: string[];
    steps: string[];
    /** Cosa si può e non si può fare prima della convalida. */
    beforeValidation: string[];
    blockers: string[];
  };
  limits: string[];
  /** Novità operative o normative recenti dichiarate dal concessionario. */
  recentChanges: string[];
  support: { channel: string; detail: string }[];
  faqs: { q: string; a: string }[];
  sources: FactSource[];
};

const NOT_DECLARED = "Non dichiarato";

const goldbet: OperatorFacts = {
  slug: "goldbet",
  verifiedOn: "2026-08-11",
  operationalSummary:
    "Il conto Goldbet si apre solo con caricamento del documento in fase di registrazione: la registrazione tramite SPID non è più disponibile dal 13 novembre 2025 e dal 4 agosto 2026 la carta d'identità cartacea non è più accettata per aprire un nuovo conto. Il concessionario ha 2 giorni per convalidare il documento e, prima della convalida, si può depositare e giocare ma non prelevare.",

  withdrawals: [
    {
      method: "Instant SEPA (bonifico istantaneo)",
      min: "10 €",
      max: "100.000 €",
      time: "Generalmente immediato, solo se la banca aderisce al servizio; in caso contrario secondo i tempi del circuito interbancario",
      fees: "Nessuno",
      note: "Su IBAN Postepay una richiesta superiore a 15.000 € può non andare a buon fine ed essere stornata. Se l'accredito non è immediato il concessionario indica di attendere 5-7 giorni lavorativi.",
    },
    {
      method: "Quick2Cash",
      min: "10 €",
      max: "2.000 €",
      time: "Generalmente immediato",
      fees: "Nessuno",
      note: "Richiede un account Quick2Cash: alla prima registrazione è previsto un riconoscimento dell'identità con caricamento del documento.",
    },
    {
      method: "PayPal",
      min: "10 €",
      max: "5.000 € nelle 24 ore",
      time: NOT_DECLARED,
      fees: NOT_DECLARED,
      note: "Disponibile solo se è già stata effettuata almeno una ricarica con PayPal.",
    },
    {
      method: "Skrill",
      min: "10 €",
      max: "5.000 € nelle 24 ore",
      time: "Richieste evase entro 3 giorni lavorativi dalla prenotazione; accredito entro 24 ore dalla data di conferma",
      fees: NOT_DECLARED,
      note: "Soglia di validazione automatica dei prelievi: 100 €. Richiede almeno una ricarica precedente con lo stesso metodo.",
    },
    {
      method: "Carta di credito o debito",
      min: NOT_DECLARED,
      max: NOT_DECLARED,
      time: "Generalmente 24-48 ore lavorative dalla conferma dell'operazione",
      fees: NOT_DECLARED,
      note: "Si prelevano solo le vincite. Serve almeno una ricarica andata a buon fine e il documento già inviato; si possono associare fino a 6 carte. Un prelievo richiesto il venerdì viene conteggiato a partire dal lunedì.",
    },
    {
      method: "Bonifico bancario",
      min: NOT_DECLARED,
      max: NOT_DECLARED,
      time: "Normalmente 3 giorni lavorativi",
      fees: NOT_DECLARED,
      note: "Il titolare del conto di gioco e il titolare del conto bancario devono coincidere; può essere richiesto un documento che attesti la titolarità dell'IBAN (screenshot home banking, estratto conto o contratto con IBAN, nome del titolare e istituto visibili).",
    },
    {
      method: "PostePay",
      min: NOT_DECLARED,
      max: NOT_DECLARED,
      time: NOT_DECLARED,
      fees: NOT_DECLARED,
      note: "Importi e tempi sono pubblicati nell'area Help del portale e il concessionario si riserva di applicare restrizioni. Serve almeno una ricarica riuscita, il documento inviato e una Postepay abilitata a ricevere fondi. Un prelievo del venerdì viene conteggiato dal lunedì.",
    },
    {
      method: "Sonect",
      min: "20 €",
      max: "250 € al giorno",
      time: NOT_DECLARED,
      fees: NOT_DECLARED,
      note: "Prelievi validati e autorizzati automaticamente; disponibile da mobile e app, con apertura di un conto di moneta elettronica e verifica KYC alla prima richiesta.",
    },
    {
      method: "Altri metodi elencati (Neteller, Paysafecard, Rapid Transfer, ApplePay, MuchBetter punto vendita, bonifico domiciliato)",
      min: NOT_DECLARED,
      max: NOT_DECLARED,
      time: NOT_DECLARED,
      fees: NOT_DECLARED,
      note: "Metodi presenti nell'elenco ufficiale dei prelievi; importi e tempistiche non sono pubblicati in forma testuale nelle rispettive schede.",
    },
  ],

  deposits: [
    { method: "Carta di credito o debito", min: "10 €", max: "2.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "ApplePay", min: "10 €", max: "2.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "Google Pay", min: "10 €", max: "2.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "PostePay", min: "10 €", max: "2.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "PayPal", min: "10 €", max: "1.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "MuchBetter", min: "10 €", max: "2.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna", note: "Ricarica dall'app MuchBetter da dispositivo mobile." },
    { method: "Skrill", min: "30 €", max: "1.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "Neteller", min: "30 €", max: "1.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "Paysafecard", min: "30 €", max: "1.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "Rapid Transfer", min: "30 €", max: "1.000 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "MyBank", min: "10 €", max: "10.000 € nelle 24 ore", time: "Immediato", fees: "Eventuali spese applicate dalla banca" },
    { method: "OnShop", min: "2 €", max: "4.999 € nelle 24 ore", time: "Immediato", fees: "Nessuna", note: "Richiede il conto già validato con documento inviato." },
    { method: "Ricarica digitale", min: "2 €", max: "4.999 € nelle 24 ore", time: "Immediato", fees: "Nessuna" },
    { method: "Bonifico bancario", min: "5 €", max: "100.000 € nelle 24 ore", time: "Entro 2-3 giorni lavorativi", fees: "Eventuali spese applicate dalla banca", note: "Titolare del conto di gioco e del conto bancario devono coincidere." },
    { method: "Bonifico postale", min: "5 €", max: "Nessun limite dichiarato", time: "Entro 2-3 giorni lavorativi", fees: "Eventuali spese applicate dalla banca" },
    { method: "Bollettino postale", min: "5 €", max: "Nessun limite dichiarato", time: "Entro 4-5 giorni lavorativi", fees: "Eventuali spese applicate dalla banca" },
  ],

  verification: {
    intro:
      "Su Goldbet il documento si carica durante la registrazione, non dopo: senza caricamento la procedura di apertura del conto non si completa. La registrazione tramite SPID, disponibile in passato, non è più attiva dal 13 novembre 2025.",
    documents: [
      "Carta d'identità (dal 4 agosto 2026 non è più accettata la versione cartacea per aprire un nuovo conto, anche se ancora valida)",
      "Passaporto",
      "Patente di guida",
      "Codice fiscale e dati anagrafici come riportati sulla tessera sanitaria",
    ],
    steps: [
      "Inserimento del codice fiscale e dei dati di accesso (username, password, e-mail, telefono).",
      "Scelta del bonus di benvenuto e inserimento dei dati anagrafici e di residenza.",
      "Impostazione obbligatoria del limite di ricarica: senza salvarlo non si prosegue.",
      "Caricamento del documento: acquisizione con webcam (fronte ed eventuale retro), caricamento da PC oppure da smartphone tramite QR code o link via SMS.",
      "Conferma via e-mail all'indirizzo indicato in registrazione a procedura completata.",
    ],
    beforeValidation: [
      "Prima della convalida definitiva si può depositare e giocare, ma non si può prelevare.",
      "Senza approvazione del documento non è possibile versare più di 1.000 € complessivi.",
      "Il concessionario ha 2 giorni per validare il conto.",
    ],
    blockers: [
      "Documento non validato entro 2 giorni: il conto viene sospeso.",
      "Documento ancora mancante dopo 60 giorni dalla registrazione: il conto viene chiuso automaticamente.",
      "File oltre 3 MB o in formato diverso da PNG, JPEG e JPG: il caricamento dall'area personale non va a buon fine (per l'invio via e-mail il limite dichiarato è 2 MB).",
      "Nome e cognome diversi da quelli riportati sulla tessera sanitaria.",
      "Per il prelievo su IBAN: intestatario del conto bancario diverso dal titolare del conto di gioco.",
    ],
  },

  limits: [
    "Il limite di ricarica va impostato in fase di apertura del conto e vale da lunedì a domenica: raggiunta la soglia non si ricarica più fino al lunedì successivo.",
    "I limiti si modificano dall'area riservata in Profilo > Gioco Responsabile.",
    "Una modifica più restrittiva ha effetto immediato; un ampliamento del limite entra in vigore dopo sette giorni.",
    "L'autolimitazione vale per il singolo conto e per il singolo concessionario: non si estende agli altri operatori.",
    "Nuovi limiti previsti dalle regole tecniche ADM: deposito giornaliero, spesa giornaliera (giocato meno vinto) e tempo giornaliero di connessione, impostabili su base giornaliera, settimanale, mensile e annuale.",
    "L'autoesclusione definitiva da tutti i concessionari passa dal Registro Unico degli Autoesclusi (RUA) gestito da ADM, non dal singolo operatore.",
  ],

  recentChanges: [
    "13 novembre 2025: la registrazione tramite SPID non è più disponibile; il documento va caricato durante la registrazione.",
    "13 maggio 2026: nuova normativa ADM sul gioco a distanza — alert informativo al raggiungimento di ogni prima ora di connessione continuativa, nuovi testi dei popup e nuova sezione limiti nell'area personale.",
    "13 maggio 2026: prelievi presso i punti vendita disabilitati e prelievo con voucher non più disponibile; restano MuchBetter e Sonect. I pagamenti in stato pending vengono stornati e riaccreditati sul conto di gioco.",
    "13 maggio 2026: ricarica digitale in contanti consentita fino a 4.999 € al giorno per conto di gioco, con approvazione dalla sezione Cassa > Ricariche da approvare entro 30 giorni.",
    "4 agosto 2026: la carta d'identità in formato cartaceo non è più utilizzabile per aprire un nuovo conto di gioco.",
  ],

  support: [
    { channel: "Centro assistenza online", detail: "Guide ufficiali su registrazione, validazione, depositi e prelievi (goldbet1.zendesk.com)." },
    { channel: "Messaggi nell'area riservata", detail: "Sezione Messaggi > Scrivi messaggio: è il canale indicato per inviare la documentazione sulla titolarità dell'IBAN e le ricevute di bonifico." },
    { channel: "E-mail per i documenti", detail: "contrattigoldbet@lottomatica.com, indicata dal concessionario per l'invio del documento entro 60 giorni dalla registrazione (max 2 MB per file)." },
    { channel: "Assistenza telefonica", detail: "Indicata dal concessionario nella pagina Contatti del portale ufficiale; il recapito non è pubblicato in forma stabile nel centro assistenza." },
  ],

  faqs: [
    {
      q: "Ci si può registrare su Goldbet con SPID?",
      a: "No. Il concessionario indica che dal 13 novembre 2025 non è più possibile registrarsi tramite SPID: durante la registrazione va caricato un documento d'identità (carta d'identità, passaporto o patente). Dal 4 agosto 2026 la carta d'identità cartacea non è più accettata per aprire un nuovo conto.",
    },
    {
      q: "Quanto tempo serve per la verifica dei documenti su Goldbet?",
      a: "Il concessionario dichiara 2 giorni per validare il conto dopo il completamento della registrazione. In quella finestra si può depositare e giocare ma non prelevare, e senza approvazione del documento non si possono versare più di 1.000 € complessivi. Oltre i 2 giorni il conto viene sospeso; dopo 60 giorni senza documento viene chiuso.",
    },
    {
      q: "Quanto tempo serve per un prelievo su Goldbet?",
      a: "Dipende dal metodo: Instant SEPA è generalmente immediato se la banca aderisce al servizio, la carta di credito è indicata in 24-48 ore lavorative dalla conferma, il bonifico bancario normalmente in 3 giorni lavorativi e Skrill entro 24 ore dalla conferma, con richieste evase entro 3 giorni lavorativi. Sabato e domenica non sono giorni lavorativi.",
    },
    {
      q: "Qual è il prelievo minimo su Goldbet?",
      a: "Dove il concessionario pubblica il dato, il minimo è 10 € per Instant SEPA, Quick2Cash, PayPal e Skrill, e 20 € per Sonect. Per carta, bonifico e PostePay gli importi minimi e massimi non sono pubblicati in forma testuale nelle schede ufficiali ma vengono mostrati nell'area Cassa al momento della richiesta.",
    },
    {
      q: "Perché non riesco a prelevare su Goldbet?",
      a: "Le cause indicate dal concessionario sono: documento non ancora validato, pagamenti non tutti confermati, assenza di una ricarica precedente con lo stesso metodo, carta scaduta, superamento del limite di importo o del plafond della carta, oppure IBAN intestato a una persona diversa dal titolare del conto di gioco.",
    },
    {
      q: "Si può ancora prelevare in contanti nei punti vendita Goldbet?",
      a: "No. Dal 13 maggio 2026 i prelievi presso i punti vendita sono disabilitati e il prelievo con voucher non è più disponibile: restano MuchBetter e Sonect. I pagamenti rimasti in stato pending vengono stornati e riaccreditati sul conto di gioco.",
    },
    {
      q: "Come si modificano i limiti di deposito su Goldbet?",
      a: "Dall'area riservata, in Profilo > Gioco Responsabile. Una riduzione del limite ha effetto immediato, mentre un aumento entra in vigore dopo sette giorni. Il limite di ricarica vale da lunedì a domenica e riguarda solo il conto Goldbet: per bloccarsi su tutti i concessionari serve il RUA di ADM.",
    },
    {
      q: "Si può giocare su Goldbet prima che il documento sia approvato?",
      a: "Sì, ma con vincoli: nella finestra di 2 giorni prima della convalida si può depositare e giocare, non prelevare, e il versato complessivo non può superare 1.000 € finché il documento non è approvato.",
    },
  ],

  sources: [
    { label: "Goldbet — Caricamento documento d'identità per validazione", url: "https://goldbet1.zendesk.com/hc/it/articles/31740348076445-Caricamento-documento-d-identit%C3%A0-per-Validazione" },
    { label: "Goldbet — Come registrarsi?", url: "https://goldbet1.zendesk.com/hc/it/articles/31731491479837-Come-registrarsi" },
    { label: "Goldbet — Registrazione con SPID", url: "https://goldbet1.zendesk.com/hc/it/articles/10765632036893-Registrazione-con-SPID" },
    { label: "Goldbet — Come depositare (tabella metodi, limiti e tempi)", url: "https://goldbet1.zendesk.com/hc/it/articles/5659447141661-Come-depositare" },
    { label: "Goldbet — Metodi di prelievo (elenco ufficiale)", url: "https://goldbet1.zendesk.com/hc/it/sections/5560226319261-Metodi-di-Prelievo" },
    { label: "Goldbet — Prelievo con Instant SEPA", url: "https://goldbet1.zendesk.com/hc/it/articles/24760523980189-Prelievo-con-Instant-SEPA" },
    { label: "Goldbet — Prelievo con bonifico bancario", url: "https://goldbet1.zendesk.com/hc/it/articles/24760374458397-Prelievo-con-Bonifico-bancario" },
    { label: "Goldbet — Prelievo con carta di credito", url: "https://goldbet1.zendesk.com/hc/it/articles/15273862901789-Prelievo-con-Carta-di-credito" },
    { label: "Goldbet — Prelievo con Skrill", url: "https://goldbet1.zendesk.com/hc/it/articles/15979324820381-Prelievo-con-Skrill" },
    { label: "Goldbet — Prelievo con PayPal", url: "https://goldbet1.zendesk.com/hc/it/articles/15987914879645-Prelievo-con-Paypal-Nuova-Area-personale" },
    { label: "Goldbet — Prelievo con Quick2Cash", url: "https://goldbet1.zendesk.com/hc/it/articles/30194348365981-Prelievo-con-Quick2Cash" },
    { label: "Goldbet — Prelievo con Sonect", url: "https://goldbet1.zendesk.com/hc/it/articles/17195870648861-Prelievo-con-Sonect" },
    { label: "Goldbet — Autolimitazione", url: "https://goldbet1.zendesk.com/hc/it/articles/5601933206941-Autolimitazione" },
    { label: "Goldbet — Nuova normativa ADM sul gioco a distanza", url: "https://goldbet1.zendesk.com/hc/it/articles/36024572371997-Nuova-normativa-ADM-sul-Gioco-a-Distanza" },
    { label: "ADM — Autoesclusione dal gioco a distanza (RUA)", url: "https://www.adm.gov.it/portale/autoesclusione-dal-gioco-a-distanza-giochi/" },
  ],
};

const snai: OperatorFacts = {
  slug: "snai",
  verifiedOn: "2026-08-20",
  operationalSummary:
    "Su Snai il conto si apre online, da app o in punto vendita, ma il documento va caricato entro 3 giorni dalla registrazione: oltre quel termine il conto viene sospeso e dopo 60 giorni chiuso definitivamente. Si prelevano solo le vincite (non ricariche e bonus) e solo con un metodo già usato almeno una volta per ricaricare; la maggior parte dei prelievi elettronici è dichiarata generalmente immediata, salvo controlli a campione che portano l'autorizzazione entro 12 ore.",

  withdrawals: [
    {
      method: "Istituto di pagamento (contanti)",
      min: "10 €",
      max: "999 € per operazione giornaliera",
      time: "Autorizzazione generalmente immediata; entro 12 ore in caso di controlli a campione",
      fees: "Gratis",
      note: "Limite cumulativo di 4.999 € su 7 giorni consecutivi e 9.999 € su 30 giorni. Il ritiro va fatto di persona entro 7 giorni presso un istituto abilitato con carta d'identità: oltre il termine la richiesta viene annullata e l'importo riaccreditato. Nessuna delega ammessa.",
    },
    {
      method: "Visa / Mastercard",
      min: "10 €",
      max: "5.000 €",
      time: "Generalmente immediato; entro 12 ore in caso di controlli a campione",
      fees: "Gratis",
      note: "L'accredito dipende dalla banca: immediato se aderisce ai protocolli real time Visa/Mastercard, altrimenti generalmente 2-3 giorni lavorativi. La carta deve essere abilitata al trasferimento del credito.",
    },
    { method: "PostePay", min: "10 €", max: "5.000 €", time: "Generalmente immediato; entro 12 ore con controlli a campione", fees: "Gratis" },
    { method: "PayPal", min: "10 €", max: "5.000 €", time: "Generalmente immediato; entro 12 ore con controlli a campione", fees: "Gratis" },
    { method: "Apple Pay", min: "10 €", max: "5.000 €", time: "Generalmente immediato; entro 12 ore con controlli a campione", fees: "Gratis" },
    { method: "Skrill", min: "10 €", max: "5.000 €", time: "Generalmente immediato; entro 12 ore con controlli a campione", fees: "Gratis" },
    { method: "Neteller", min: "10 €", max: "5.000 €", time: "Generalmente immediato; entro 12 ore con controlli a campione", fees: "Gratis" },
    {
      method: "Instant SEPA (bonifico istantaneo)",
      min: "10 €",
      max: "5.000 €",
      time: "Generalmente immediato; entro 12 ore con controlli a campione",
      fees: "Gratis",
      note: "Il sistema applica il controllo VOP (Verification of Payee): l'IBAN deve essere intestato al titolare del conto di gioco.",
    },
    {
      method: "Bonifico bancario",
      min: "10 €",
      max: "30.000 €",
      time: "Entro 1-2 giorni lavorativi",
      fees: "Gratis",
      note: "Anche qui vale il controllo VOP sull'intestazione dell'IBAN.",
    },
    { method: "Domiciliazione postale", min: "10 €", max: "6.000 €", time: "Disponibile in 4-5 giorni lavorativi", fees: "Gratis" },
  ],

  deposits: [
    { method: "Punto vendita (PIN ricarica)", min: "1 €", max: "4.999 € al giorno (999 € con documentazione incompleta o scaduta)", time: "Immediato dopo l'inserimento del PIN", fees: "Gratis", note: "Il PIN ricarica scade dopo 90 giorni dalla data di acquisto. Servono tessera sanitaria e documento d'identità." },
    { method: "Istituto di pagamento", min: "10 €", max: "999 € per operazione giornaliera", time: "Immediato", fees: "Gratis", note: "Limiti cumulativi di 4.999 € su 7 giorni e 9.999 € su 30 giorni. Non disponibile per i conti con documentazione non verificata." },
    { method: "Visa / Mastercard", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis", note: "Carta intestata al titolare del conto, emessa in Italia, iscritta a 3D Secure e abilitata alle transazioni di gaming." },
    { method: "PostePay", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis" },
    { method: "Apple Pay", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis" },
    { method: "PayPal", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis" },
    { method: "Skrill", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis" },
    { method: "Neteller", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis" },
    { method: "Paysafecard", min: "10 €", max: "1.000 €", time: "Immediato", fees: "Gratis" },
    { method: "MyBank", min: "10 €", max: "10.000 €", time: "Immediato", fees: "Gratis" },
    { method: "Bonifico bancario", min: NOT_DECLARED, max: "25.000 €", time: "1-2 giorni lavorativi, anche in caso di bonifico istantaneo", fees: "Gratis", note: "Il titolare del conto di gioco deve coincidere con quello del conto bancario e il numero di conto gioco va indicato nella causale." },
  ],

  verification: {
    intro:
      "Su Snai la registrazione si completa senza documento, ma il caricamento va fatto entro 3 giorni: è l'unico modo per mantenere il conto attivo e per poter prelevare. La registrazione online può avvenire manualmente oppure con scansione OCR del documento; i dati devono coincidere esattamente con quelli ufficiali perché anche piccoli errori bloccano i controlli ADM e SOGEI.",
    documents: [
      "Carta d'identità elettronica",
      "Passaporto",
      "Patente di guida",
      "Fronte e retro a colori, integro e leggibile, in formato .jpg, .jpeg o .png (max 5 MB per file)",
    ],
    steps: [
      "Registrazione online, da app oppure in un Punto Snai con documento valido e codice fiscale.",
      "Inserimento dei dati anagrafici (manuale o con scansione OCR del documento), e-mail valida e cellulare attivo.",
      "Creazione delle credenziali: username da 6 a 16 caratteri e password di almeno 8 caratteri con maiuscola, minuscola, numero e carattere speciale.",
      "Impostazione obbligatoria del limite di ricarica settimanale e accettazione delle condizioni.",
      "Caricamento del documento entro 3 giorni dall'Area Personale, sezione Profilo (foto a colori fronte e retro).",
    ],
    beforeValidation: [
      "Si preleva soltanto dopo che Snai ha ricevuto la copia di un documento in corso di validità.",
      "Con documentazione incompleta o scaduta la ricarica da punto vendita è limitata a 999 €.",
      "Le ricariche tramite istituto di pagamento non sono disponibili per i conti con documentazione non verificata.",
      "Se il conto è stato aperto in un Punto Snai con ricevuta username e PIN, la registrazione va completata entro 90 giorni.",
    ],
    blockers: [
      "Documento non inviato entro 3 giorni: il conto viene temporaneamente sospeso; dopo 60 giorni viene chiuso definitivamente e non è più riattivabile.",
      "Documento scaduto: nessun prelievo finché non se ne carica uno valido.",
      "Si prelevano solo le vincite: ricariche e bonus non sono prelevabili.",
      "Serve una ricarica precedente con lo stesso metodo (es. per prelevare su Visa occorre aver ricaricato con una carta Visa).",
      "L'intestatario dello strumento di prelievo deve coincidere con il titolare del conto; su bonifico e Instant SEPA il controllo VOP verifica l'IBAN in automatico.",
      "Carta non abilitata al trasferimento del credito o importo oltre il plafond del metodo scelto.",
    ],
  },

  limits: [
    "Il limite di ricarica settimanale si imposta obbligatoriamente in fase di registrazione.",
    "Il tetto complessivo di ricarica è di 25.000 € ogni 7 giorni consecutivi, indipendentemente dal metodo.",
    "Per l'istituto di pagamento valgono limiti cumulativi di 4.999 € su 7 giorni e 9.999 € su 30 giorni, sia in ricarica sia in prelievo.",
    "Una richiesta di prelievo può essere annullata entro 24 ore e solo se non è ancora stata pagata: se lo stato è «Emessa» o «Autorizzata» si contatta il Servizio Clienti, se è «Pagata» non è più annullabile.",
    "L'autoesclusione definitiva da tutti i concessionari passa dal Registro Unico degli Autoesclusi (RUA) gestito da ADM, non dal singolo operatore.",
  ],

  recentChanges: [
    "Il controllo VOP (Verification of Payee) verifica in automatico che l'IBAN indicato per bonifico e Instant SEPA sia intestato al titolare del conto di gioco.",
    "La registrazione online può essere completata con scansione OCR del documento, in alternativa all'inserimento manuale dei dati.",
    "Il termine per l'invio del documento è fissato a 3 giorni dalla registrazione, con sospensione del conto oltre tale termine e chiusura definitiva dopo 60 giorni.",
  ],

  support: [
    { channel: "Domande frequenti ufficiali", detail: "Sezioni dedicate ad apertura conto, ricariche, prelievi, sicurezza e autoesclusione su snai.it/faq." },
    { channel: "Servizio Clienti", detail: "Contattabile dalla sezione Contatti del portale, indicato per annullamento prelievi e verifiche sui pagamenti non ricevuti." },
    { channel: "Area Riservata", detail: "Sezioni Movimenti conto e Ultimi prelievi per lo stato di ogni richiesta (Emessa, Autorizzata, Pagata)." },
    { channel: "Punti Snai", detail: "Apertura conto, ricarica e assistenza allo sportello con documento d'identità e tessera sanitaria." },
  ],

  faqs: [
    {
      q: "Quanto tempo serve per un prelievo su Snai?",
      a: "Snai dichiara tempi generalmente immediati per carte, PostePay, PayPal, Apple Pay, Skrill, Neteller e Instant SEPA, salvo controlli a campione che spostano l'autorizzazione entro 12 ore. Il bonifico bancario è indicato entro 1-2 giorni lavorativi e la domiciliazione postale in 4-5 giorni lavorativi. Sulle carte l'accredito finale dipende dalla banca: immediato se aderisce ai protocolli real time, altrimenti 2-3 giorni lavorativi.",
    },
    {
      q: "Qual è il prelievo minimo su Snai?",
      a: "Il minimo dichiarato è 10 € per tutti i metodi di prelievo. I massimi cambiano: 999 € per l'istituto di pagamento, 5.000 € per carte e portafogli elettronici, 6.000 € per la domiciliazione postale e 30.000 € per il bonifico bancario.",
    },
    {
      q: "Quanto tempo ho per inviare il documento a Snai?",
      a: "Tre giorni dalla registrazione. Se il documento non arriva entro quel termine il conto viene temporaneamente sospeso; se non viene inviato entro 60 giorni il conto viene chiuso definitivamente e non è più riattivabile.",
    },
    {
      q: "Perché non riesco a prelevare su Snai?",
      a: "Le cause indicate dal concessionario sono: si prelevano solo le vincite (non ricariche né bonus), serve una ricarica precedente con lo stesso metodo, l'intestatario dello strumento di prelievo deve coincidere con il titolare del conto, la carta deve essere abilitata al trasferimento del credito, l'importo non deve superare il plafond del metodo e il documento d'identità deve essere valido e già consegnato.",
    },
    {
      q: "Si può annullare una richiesta di prelievo su Snai?",
      a: "Sì, entro 24 ore e solo se il prelievo non è ancora stato pagato. Con stato «Emessa» o «Autorizzata» si richiede l'annullamento al Servizio Clienti; con stato «Pagata» non è più possibile e occorre attendere l'accredito.",
    },
    {
      q: "Il prelievo risulta «Pagato» ma non l'ho ricevuto: cosa fare?",
      a: "Snai indica di attendere 2-3 giorni lavorativi, perché l'operazione può non andare a buon fine per motivi legati alla banca e l'importo viene riaccreditato sul conto di gioco. Se lo stato resta «Autorizzato» oltre 5-7 giorni lavorativi senza pagamento né riaccredito, va contattato il Customer Care.",
    },
    {
      q: "Quali documenti accetta Snai per la verifica?",
      a: "Carta d'identità elettronica, passaporto o patente di guida, caricati fronte e retro a colori, integri e leggibili, in formato .jpg, .jpeg o .png con un massimo di 5 MB per file.",
    },
    {
      q: "Quanto si può ricaricare al massimo su Snai?",
      a: "Il tetto complessivo è di 25.000 € ogni 7 giorni consecutivi. Sui singoli metodi i massimi per operazione sono 10.000 € per carte e portafogli, 1.000 € per Paysafecard, 999 € per l'istituto di pagamento e 4.999 € al giorno da punto vendita (999 € con documentazione incompleta o scaduta).",
    },
  ],

  sources: [
    { label: "Snai — Domande frequenti sui prelievi (tabella metodi, limiti e tempi)", url: "https://www.snai.it/faq/prelievi" },
    { label: "Snai — Domande frequenti sulle ricariche", url: "https://www.snai.it/faq/ricariche" },
    { label: "Snai — Domande frequenti sull'apertura del conto", url: "https://www.snai.it/faq/apertura-conto" },
    { label: "Snai — Sicurezza del conto", url: "https://www.snai.it/faq/sicurezza-conto" },
    { label: "Snai — Autoesclusione", url: "https://www.snai.it/faq/autoesclusione" },
    { label: "ADM — Autoesclusione dal gioco a distanza (RUA)", url: "https://www.adm.gov.it/portale/autoesclusione-dal-gioco-a-distanza-giochi/" },
  ],
};

const FACTS: OperatorFacts[] = [goldbet, snai, ...extraOperatorFacts];

/** Riga della tabella comparativa dei tempi di prelievo (solo operatori con dati verificati). */
export type WithdrawalComparisonRow = {
  slug: string;
  name: string;
  fastestMethod: string;
  fastestTime: string;
  minWithdrawal: string;
  bankTransferTime: string;
  documentDeadline: string;
  verifiedOn: string;
};

export const withdrawalComparison: WithdrawalComparisonRow[] = [
  {
    slug: "goldbet",
    name: "Goldbet",
    fastestMethod: "Instant SEPA / Quick2Cash",
    fastestTime: "Generalmente immediato",
    minWithdrawal: "10 €",
    bankTransferTime: "Normalmente 3 giorni lavorativi",
    documentDeadline: "Documento in registrazione, convalida entro 2 giorni",
    verifiedOn: "2026-08-11",
  },
  {
    slug: "snai",
    name: "Snai",
    fastestMethod: "Instant SEPA / carte / e-wallet",
    fastestTime: "Generalmente immediato (entro 12 ore con controlli a campione)",
    minWithdrawal: "10 €",
    bankTransferTime: "Entro 1-2 giorni lavorativi",
    documentDeadline: "Documento entro 3 giorni dalla registrazione",
    verifiedOn: "2026-08-20",
  },
];

export function getOperatorFacts(slug: string): OperatorFacts | undefined {
  return FACTS.find((f) => f.slug === slug);
}

export function hasOperatorFacts(slug: string): boolean {
  return FACTS.some((f) => f.slug === slug);
}
