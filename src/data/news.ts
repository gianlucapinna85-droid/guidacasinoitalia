// Registro centralizzato delle news editoriali (/news/<slug>).
// Ogni nuovo articolo va aggiunto SOLO qui: rotta dinamica, indice /news,
// sitemap news e link interni leggono da questo elenco.

export type NewsSection = { h2: string; paragraphs: string[]; bullets?: string[] };

export type NewsArticle = {
  slug: string;
  title: string; // <title> SEO
  h1: string;
  date: string; // ISO, data di pubblicazione/aggiornamento
  category: "Bonus" | "Slot" | "Normativa" | "Pagamenti" | "Operatori";
  description: string;
  keywords: string;
  summary: string;
  sections: NewsSection[];
};

export const news: NewsArticle[] = [
  {
    slug: "nuovi-bonus-casino-online",
    title: "Nuovi bonus casinò online: come cambiano le condizioni nel 2026",
    h1: "Nuovi bonus casinò online: cosa cambia nelle condizioni del 2026",
    date: "2026-08-05",
    category: "Bonus",
    description:
      "Come si stanno evolvendo le iniziative di benvenuto sui concessionari ADM: requisiti di puntata, scadenze e trasparenza delle condizioni. Informazione, non promozione. Solo +18.",
    keywords:
      "nuovi bonus casino online, bonus casino 2026, condizioni bonus adm, requisiti puntata bonus",
    summary:
      "Requisiti di puntata più leggibili, scadenze più brevi e maggiore chiarezza nelle tabelle di contribuzione: le tendenze osservate sulle condizioni pubblicate dai concessionari.",
    sections: [
      {
        h2: "Condizioni più leggibili, ma sempre nei termini del concessionario",
        paragraphs: [
          "Nel corso del 2026 diversi concessionari ADM hanno rivisto la struttura dei propri regolamenti promozionali, separando in modo più netto la base di calcolo del requisito di puntata dagli altri parametri contrattuali. Resta il fatto che le condizioni complete sono consultabili esclusivamente nella sezione termini del conto di gioco, spesso accessibile solo dopo la registrazione.",
          "Il divieto di pubblicità previsto dall'art. 9 del D.L. 87/2018 impedisce la divulgazione al pubblico dei dettagli delle singole iniziative: questo articolo descrive quindi il meccanismo e le tendenze osservabili, senza riportare importi o codici.",
        ],
      },
      {
        h2: "Cosa osservare nelle nuove formulazioni",
        paragraphs: [
          "Le differenze più rilevanti riguardano tre elementi ricorrenti: la base su cui si applica il moltiplicatore, la finestra temporale entro cui completare il requisito e la tabella che indica quanto ciascuna categoria di gioco contribuisce.",
        ],
        bullets: [
          "Base di calcolo: solo importo bonus oppure deposito più bonus",
          "Scadenza del requisito, in genere compresa fra pochi giorni e qualche settimana",
          "Contributo differenziato tra slot, giochi da tavolo e sezioni live",
          "Puntata massima consentita mentre il vincolo è attivo",
        ],
      },
      {
        h2: "Il criterio pratico resta il budget",
        paragraphs: [
          "Un'iniziativa è compatibile con una gestione prudente solo se il volume di gioco richiesto rientra nel budget già definito. Se per completare il requisito occorre giocare somme superiori a quelle abituali, l'offerta lavora contro il controllo della spesa, non a favore.",
        ],
      },
    ],
  },
  {
    slug: "slot-appena-uscite",
    title: "Slot appena uscite: come valutare i nuovi titoli nei casinò ADM",
    h1: "Slot appena uscite: come valutare i nuovi titoli sui casinò ADM",
    date: "2026-08-02",
    category: "Slot",
    description:
      "Nuove uscite dei provider certificati sui concessionari ADM: cosa controllare fra RTP dichiarato, volatilità, meccaniche e disponibilità della demo. Solo +18.",
    keywords:
      "slot appena uscite, nuove slot online, nuove slot adm, rtp nuove slot, provider slot 2026",
    summary:
      "Le nuove uscite arrivano sui concessionari con RTP e volatilità dichiarati nella scheda gioco: ecco i dati da leggere prima di provare un titolo.",
    sections: [
      {
        h2: "Le nuove uscite passano dagli stessi controlli",
        paragraphs: [
          "Ogni titolo distribuito da un concessionario ADM utilizza un generatore di numeri casuali certificato da laboratori indipendenti. Le novità di catalogo non fanno eccezione: cambiano grafica e meccaniche, non la natura aleatoria del risultato.",
          "Le software house più presenti sui cataloghi italiani continuano a essere Pragmatic Play, Play'n GO, NetEnt, Nolimit City, Red Tiger e Novomatic, con cicli di rilascio frequenti durante tutto l'anno.",
        ],
      },
      {
        h2: "I dati da leggere prima di provare un titolo nuovo",
        paragraphs: [
          "Nella scheda informativa del gioco sono indicati RTP teorico, volatilità e struttura dei pagamenti. Su un titolo appena uscito questi dati sono l'unico riferimento oggettivo disponibile, perché mancano statistiche d'uso consolidate.",
        ],
        bullets: [
          "RTP dichiarato nella scheda del gioco, non in liste esterne",
          "Volatilità, che incide sulla durata della sessione",
          "Presenza della modalità demo con saldo virtuale",
          "Meccaniche particolari come cluster, Megaways o acquisto del bonus",
        ],
      },
      {
        h2: "Nessuna novità modifica le probabilità",
        paragraphs: [
          "Le meccaniche innovative rendono l'esperienza diversa, non più favorevole. Il margine resta a favore del banco e ogni giro è indipendente dai precedenti: le nuove uscite vanno valutate come intrattenimento, mai come opportunità di guadagno.",
        ],
      },
    ],
  },
  {
    slug: "aggiornamenti-adm",
    title: "Aggiornamenti ADM: concessioni, controlli e gioco a distanza",
    h1: "Aggiornamenti ADM: concessioni, controlli e gioco a distanza",
    date: "2026-07-28",
    category: "Normativa",
    description:
      "Come seguire gli aggiornamenti dell'Agenzia delle Dogane e dei Monopoli su elenco concessionari, domini autorizzati e obblighi tecnici degli operatori. Solo +18.",
    keywords:
      "aggiornamenti adm, elenco concessionari adm, gioco a distanza, normativa gioco online italia",
    summary:
      "L'elenco pubblico dei concessionari e dei domini autorizzati resta la fonte primaria: come consultarlo e perché va riverificato periodicamente.",
    sections: [
      {
        h2: "La fonte primaria è l'elenco pubblico",
        paragraphs: [
          "L'Agenzia delle Dogane e dei Monopoli pubblica su adm.gov.it l'elenco dei concessionari abilitati alla raccolta del gioco a distanza, con ragione sociale, numero di concessione e domini autorizzati. È la sola fonte che consente di stabilire se un sito può operare legalmente in Italia.",
          "L'elenco è soggetto a variazioni per rinnovi, cessioni di ramo d'azienda e nuove attivazioni di dominio: una verifica fatta mesi prima può non essere più attuale.",
        ],
      },
      {
        h2: "Cosa cambia per chi ha un conto di gioco",
        paragraphs: [
          "In caso di riorganizzazione societaria il concessionario è tenuto a informare i titolari di conto sulle modalità di trasferimento di saldo, storico e limiti impostati. Gli strumenti di tutela, compresa l'autoesclusione tramite RUA, restano attivi indipendentemente dal marchio commerciale.",
        ],
        bullets: [
          "Ragione sociale e numero di concessione da riverificare periodicamente",
          "Domini autorizzati elencati e confrontabili con l'URL visitato",
          "Comunicazioni obbligatorie in caso di variazioni societarie",
          "RUA valido su tutti i concessionari italiani",
        ],
      },
      {
        h2: "Come lo trattiamo su questo portale",
        paragraphs: [
          "Le schede operatore riportano ragione sociale, numero di concessione e sito ufficiale così come dichiarati dai concessionari, per rendere immediato il confronto con l'elenco ADM. Non sostituiscono la consultazione diretta della fonte pubblica, che resta sempre prevalente.",
        ],
      },
    ],
  },
  {
    slug: "nuovi-metodi-pagamento",
    title: "Nuovi metodi di pagamento nei casinò ADM: cosa sta cambiando",
    h1: "Nuovi metodi di pagamento nei casinò ADM: cosa sta cambiando",
    date: "2026-07-22",
    category: "Pagamenti",
    description:
      "Bonifici istantanei, portafogli elettronici e autenticazione forte: come evolvono depositi e prelievi sui concessionari con concessione ADM. Solo +18.",
    keywords:
      "nuovi metodi pagamento casino, bonifico istantaneo casino, paypal casino adm, prelievi veloci casino",
    summary:
      "Bonifico istantaneo e wallet riducono i tempi di accredito, ma la verifica dell'identità resta il vero fattore che determina la velocità del primo prelievo.",
    sections: [
      {
        h2: "Accrediti più rapidi, verifiche invariate",
        paragraphs: [
          "La diffusione dei bonifici istantanei e dei portafogli elettronici ha ridotto i tempi tecnici di accredito su diversi concessionari. Il quadro degli obblighi resta però identico: prima del primo prelievo la verifica dell'identità è obbligatoria per legge.",
          "Nella pratica, chi completa la verifica documentale subito dopo la registrazione ottiene tempi di prelievo sensibilmente più brevi rispetto a chi la rimanda al momento della richiesta.",
        ],
      },
      {
        h2: "Cosa incide davvero sui tempi",
        paragraphs: [
          "Il tempo complessivo si compone di due fasi distinte, spesso confuse fra loro: la lavorazione interna dell'operatore e l'accredito da parte dell'istituto di pagamento.",
        ],
        bullets: [
          "Documenti caricati e approvati in anticipo",
          "Metodo di prelievo coincidente con quello di deposito",
          "Assenza di vincoli attivi legati a saldo bonus",
          "Finestre di lavorazione dichiarate dal concessionario",
        ],
      },
      {
        h2: "Autenticazione forte e sicurezza",
        paragraphs: [
          "Tutte le operazioni passano per l'autenticazione forte prevista dalla normativa europea sui pagamenti. Nessun concessionario chiede codici di carte prepagate o pagamenti verso conti personali: richieste di questo tipo sono un segnale di frode.",
        ],
      },
    ],
  },
  {
    slug: "promozioni-settimanali-casino",
    title: "Promozioni settimanali nei casinò ADM: come funzionano",
    h1: "Promozioni settimanali nei casinò ADM: come funzionano davvero",
    date: "2026-07-15",
    category: "Bonus",
    description:
      "Ricorrenze, tornei e iniziative periodiche sui concessionari ADM: struttura tipica, condizioni da verificare e limiti informativi imposti dal Decreto Dignità. Solo +18.",
    keywords:
      "promozioni casino settimanali, iniziative casino adm, tornei slot, condizioni promozioni casino",
    summary:
      "Le iniziative ricorrenti seguono schemi simili: partecipazione automatica o su adesione, finestra temporale definita e contributo differenziato dei giochi.",
    sections: [
      {
        h2: "Struttura tipica delle iniziative ricorrenti",
        paragraphs: [
          "Le iniziative periodiche pubblicate nell'area riservata dei concessionari seguono in genere uno schema comune: una finestra temporale definita, una modalità di adesione (automatica o esplicita) e un criterio di calcolo basato sul volume di gioco o sulla partecipazione a determinati titoli.",
          "Come per i bonus di benvenuto, il dettaglio delle condizioni non è divulgabile al pubblico: la normativa italiana consente solo la descrizione del funzionamento generale.",
        ],
      },
      {
        h2: "Cosa verificare prima di aderire",
        paragraphs: [
          "Il regolamento della singola iniziativa è un documento a sé, distinto dai termini generali del conto. Va letto per intero, perché contiene le esclusioni e i limiti che generano la maggior parte delle contestazioni.",
        ],
        bullets: [
          "Data e ora di apertura e chiusura della finestra",
          "Modalità di adesione e possibilità di rinuncia",
          "Giochi ammessi ed esclusi dal conteggio",
          "Eventuali vincoli su saldo e prelievi durante il periodo",
        ],
      },
      {
        h2: "Un promemoria sul controllo della spesa",
        paragraphs: [
          "La cadenza settimanale può indurre a giocare con maggiore frequenza per rientrare nei criteri di partecipazione. Limiti di deposito e limiti di tempo impostati dall'area personale restano lo strumento più efficace per evitare che l'iniziativa condizioni il ritmo di gioco.",
        ],
      },
    ],
  },
  {
    slug: "tornei-slot-online",
    title: "Tornei di slot online sui casinò ADM: regole e classifiche",
    h1: "Tornei di slot online sui casinò ADM: come funzionano le classifiche",
    date: "2026-07-08",
    category: "Slot",
    description:
      "Classifiche, criteri di punteggio, titoli ammessi e durata dei tornei di slot organizzati dai concessionari ADM. Guida informativa. Solo +18.",
    keywords:
      "tornei slot online, classifiche tornei casino, tornei slot adm, come funzionano i tornei slot",
    summary:
      "Punteggio basato su moltiplicatore di vincita o volume di gioco, elenco chiuso di titoli ammessi e classifica aggiornata in tempo reale: gli elementi ricorrenti.",
    sections: [
      {
        h2: "Come si costruisce la classifica",
        paragraphs: [
          "Nei tornei di slot il punteggio è quasi sempre calcolato su un parametro dichiarato nel regolamento: il moltiplicatore ottenuto su una singola giocata, la somma delle vincite in un intervallo definito oppure il volume di gioco complessivo.",
          "La classifica è aggiornata in tempo reale e visibile nell'area riservata. I titoli ammessi sono elencati in modo tassativo: le giocate su altri giochi non concorrono al punteggio.",
        ],
      },
      {
        h2: "Elementi ricorrenti dei regolamenti",
        paragraphs: [
          "Le regole variano da concessionario a concessionario, ma alcuni elementi si ripetono con costanza e vanno individuati prima di partecipare.",
        ],
        bullets: [
          "Puntata minima per far valere la giocata ai fini del punteggio",
          "Elenco chiuso dei titoli ammessi",
          "Durata esatta della sessione di torneo",
          "Criterio di spareggio in caso di parità",
        ],
      },
      {
        h2: "Attenzione al ritmo di gioco",
        paragraphs: [
          "La dinamica competitiva della classifica può spingere ad aumentare frequenza e importo delle giocate. Il risultato di ogni giro resta però determinato da un generatore di numeri casuali: nessuna strategia di torneo modifica le probabilità sottostanti.",
        ],
      },
    ],
  },
  {
    slug: "normativa-gioco-online-italia",
    title: "Normativa gioco online in Italia: aggiornamenti e tutele",
    h1: "Cambiamenti normativi sul gioco online in Italia: cosa sapere",
    date: "2026-06-30",
    category: "Normativa",
    description:
      "Decreto Dignità, riordino del gioco a distanza, tutele del giocatore e obblighi dei concessionari: il quadro normativo italiano aggiornato. Solo +18.",
    keywords:
      "normativa gioco online italia, decreto dignità, riordino gioco a distanza, tutele giocatore adm",
    summary:
      "Divieto di pubblicità, obblighi di autolimitazione e riordino delle concessioni: i pilastri che regolano il gioco a distanza in Italia.",
    sections: [
      {
        h2: "Il divieto di pubblicità e i suoi effetti",
        paragraphs: [
          "L'art. 9 del D.L. 87/2018, noto come Decreto Dignità, vieta qualsiasi forma di pubblicità, anche indiretta, relativa a giochi con vincite in denaro. Per i portali informativi ciò significa poter descrivere il funzionamento dei prodotti senza promuoverli, senza riportare importi promozionali e senza invitare al gioco.",
          "È la ragione per cui su questo sito non trovi codici promozionali, cifre di bonus o inviti alla registrazione: le informazioni commerciali restano consultabili solo sui siti dei concessionari.",
        ],
      },
      {
        h2: "Tutele obbligatorie per il giocatore",
        paragraphs: [
          "Il quadro normativo impone a tutti i concessionari strumenti di autolimitazione, informativa sulle probabilità di vincita, verifica dell'identità e adesione al Registro Unico degli Autoesclusi, che produce effetti simultanei su tutti gli operatori italiani.",
        ],
        bullets: [
          "Limiti di deposito e di spesa impostabili dall'utente",
          "Autoesclusione temporanea o a tempo indeterminato tramite RUA",
          "Divieto assoluto di gioco per i minori di 18 anni",
          "Telefono Verde ISS 800 558822 per il supporto",
        ],
      },
      {
        h2: "Riordino delle concessioni e prospettive",
        paragraphs: [
          "Il riordino del comparto a distanza ha ridefinito requisiti di accesso e obblighi tecnici dei concessionari, con un accento crescente su tracciabilità dei pagamenti e strumenti di gioco responsabile. Gli sviluppi vanno seguiti sulle fonti ufficiali: adm.gov.it e la Gazzetta Ufficiale.",
        ],
      },
    ],
  },
];

export const newsBySlug = new Map(news.map((n) => [n.slug, n]));
export const sortedNews = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
