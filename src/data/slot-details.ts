// Approfondimenti editoriali per ogni slot (contenuto informativo, non promozionale).
// Chiave = slug della slot in src/data/slots.ts.

export type SlotDetail = {
  /** paragrafi "come funziona" */
  howItWorks: string[];
  /** caratteristiche tecniche sintetiche */
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
};

const commonFaq = (name: string, rtp: string) => [
  {
    q: `Qual è l'RTP di ${name}?`,
    a: `Il provider dichiara un RTP teorico del ${rtp}. È una percentuale calcolata su milioni di giocate simulate: non indica quanto restituisce una singola sessione, che resta determinata dal generatore di numeri casuali certificato.`,
  },
  {
    q: `Si può provare ${name} in versione demo?`,
    a: "Molti concessionari ADM mettono a disposizione la modalità di prova con crediti virtuali dopo l'accesso al conto di gioco. La demo serve solo a conoscere le regole: le probabilità restano identiche a quelle della versione con denaro reale.",
  },
  {
    q: "La slot è disponibile sui casinò con concessione ADM?",
    a: "Sì, il titolo è presente nei cataloghi di diversi concessionari autorizzati dall'Agenzia delle Dogane e dei Monopoli. La disponibilità può variare nel tempo in base agli accordi tra operatore e provider.",
  },
  {
    q: "Esistono strategie per aumentare le vincite?",
    a: "No. Ogni giro è indipendente e determinato da un RNG certificato: nessuna sequenza di puntate modifica le probabilità. L'unico approccio ragionevole è la gestione del budget e l'uso degli strumenti di autolimitazione previsti dai concessionari ADM.",
  },
];

export const slotDetails: Record<string, SlotDetail> = {
  "book-of-ra": {
    howItWorks: [
      "Book of Ra è la slot a tema egizio che ha definito il genere \"book\" nei casinò italiani. La griglia è a 5 rulli e 3 file con 9 linee di pagamento selezionabili: le combinazioni si formano da sinistra verso destra partendo dal primo rullo.",
      "Il simbolo del libro svolge contemporaneamente la funzione di wild e di scatter. Tre o più libri in qualsiasi posizione attivano 10 giri gratuiti e determinano l'estrazione di un simbolo speciale espandibile, che durante i free spin copre l'intero rullo e paga anche in posizioni non adiacenti.",
      "La volatilità è alta: le sessioni possono restare a lungo senza pagamenti significativi, con i risultati concentrati nella fase di giri gratuiti. L'RTP teorico dichiarato è del 95,1%, inferiore alla media dei titoli più recenti.",
      "Nelle versioni distribuite in Italia il gioco è certificato e collegato ai sistemi di controllo ADM. La funzione gamble, quando presente, consente di raddoppiare la vincita indovinando il colore di una carta coperta: è una scelta ad alto rischio che non modifica l'RTP complessivo.",
    ],
    specs: [
      { label: "Rulli e file", value: "5 x 3" },
      { label: "Linee", value: "9 selezionabili" },
      { label: "Funzione principale", value: "Simbolo espandibile nei free spin" },
      { label: "Giri gratuiti", value: "10, riattivabili" },
    ],
    faq: commonFaq("Book of Ra", "95,1%"),
  },
  "book-of-dead": {
    howItWorks: [
      "Book of Dead riprende la struttura \"book\" con 5 rulli, 3 file e 10 linee di pagamento fisse. Il protagonista è l'esploratore Rich Wilde, simbolo dal valore più alto della tabella pagamenti.",
      "Il libro funge da wild e scatter: tre simboli attivano 10 giri gratuiti con un simbolo speciale estratto casualmente, che si espande su tutto il rullo quando compare in almeno tre posizioni.",
      "L'RTP teorico è del 96,2% con volatilità alta. La distribuzione delle vincite è sbilanciata verso i free spin, dove l'espansione del simbolo di valore elevato può generare i risultati più consistenti della sessione.",
      "Il titolo è tra i più diffusi nei cataloghi dei concessionari ADM ed è disponibile sia da desktop sia da mobile, con adattamento automatico della griglia allo schermo verticale.",
    ],
    specs: [
      { label: "Rulli e file", value: "5 x 3" },
      { label: "Linee", value: "10 fisse" },
      { label: "Funzione principale", value: "Simbolo espandibile" },
      { label: "Giri gratuiti", value: "10, riattivabili" },
    ],
    faq: commonFaq("Book of Dead", "96,2%"),
  },
  "bonanza-megaways": {
    howItWorks: [
      "Bonanza è la slot che ha introdotto il motore Megaways: a ogni giro il numero di simboli su ciascun rullo cambia, generando fino a 117.649 modi di vincita differenti.",
      "Il rullo orizzontale superiore aggiunge ulteriori simboli, mentre la meccanica di reazione a catena elimina i simboli vincenti e li sostituisce con quelli soprastanti, permettendo vincite consecutive nello stesso giro.",
      "Nei giri gratuiti il moltiplicatore cresce di una unità a ogni reazione a catena e non si azzera fino alla fine della funzione: è la fase in cui si concentra la maggior parte del potenziale del gioco.",
      "L'RTP teorico dichiarato è del 96% con volatilità molto alta: le sessioni tendono ad alternare lunghe fasi negative a rari risultati elevati.",
    ],
    specs: [
      { label: "Motore", value: "Megaways" },
      { label: "Modi di vincita", value: "Fino a 117.649" },
      { label: "Funzione principale", value: "Reazioni a catena con moltiplicatore" },
      { label: "Giri gratuiti", value: "Attivabili con scatter" },
    ],
    faq: commonFaq("Bonanza Megaways", "96,0%"),
  },
  "gonzos-quest-megaways": {
    howItWorks: [
      "La versione Megaways del classico Gonzo's Quest sostituisce i rulli tradizionali con una griglia variabile, mantenendo la meccanica Avalanche che fa cadere nuovi simboli al posto di quelli vincenti.",
      "A ogni valanga consecutiva il moltiplicatore aumenta secondo una scala progressiva; nella fase di giri gratuiti la scala parte da valori più alti e non si azzera tra una caduta e l'altra.",
      "L'RTP teorico è del 95,7% con volatilità alta. Il gioco include una funzione di acquisto della fase bonus in alcune versioni, non sempre disponibile sui concessionari italiani.",
      "L'ambientazione riprende la ricerca della città d'oro: i simboli sono blocchi di pietra incisi, con animazioni che accompagnano ogni reazione a catena.",
    ],
    specs: [
      { label: "Motore", value: "Megaways + Avalanche" },
      { label: "Modi di vincita", value: "Fino a 117.649" },
      { label: "Funzione principale", value: "Moltiplicatori progressivi" },
      { label: "Giri gratuiti", value: "Con moltiplicatore illimitato" },
    ],
    faq: commonFaq("Gonzo's Quest Megaways", "95,7%"),
  },
  starburst: {
    howItWorks: [
      "Starburst è una slot a 5 rulli e 3 file con 10 linee di pagamento che pagano in entrambe le direzioni, da sinistra e da destra.",
      "L'unica funzione speciale è il wild espandibile: quando compare sui rulli centrali si espande sull'intera colonna, resta bloccato e attiva un re-spin, fino a un massimo di tre re-spin consecutivi.",
      "La volatilità è bassa e l'RTP teorico è del 96,1%: le vincite sono frequenti ma di importo contenuto, con una variabilità di sessione più ridotta rispetto ai titoli ad alta volatilità.",
      "L'assenza di giri gratuiti e di funzioni complesse la rende uno dei titoli più semplici da comprendere per chi si avvicina per la prima volta alle slot online.",
    ],
    specs: [
      { label: "Rulli e file", value: "5 x 3" },
      { label: "Linee", value: "10 bidirezionali" },
      { label: "Funzione principale", value: "Wild espandibile con re-spin" },
      { label: "Giri gratuiti", value: "Assenti" },
    ],
    faq: commonFaq("Starburst", "96,1%"),
  },
  "sweet-bonanza": {
    howItWorks: [
      "Sweet Bonanza adotta il sistema Pay Anywhere su una griglia 6x5: le vincite si formano quando compaiono almeno 8 simboli uguali in qualsiasi posizione, senza linee di pagamento.",
      "La meccanica tumble rimuove i simboli vincenti e li sostituisce con nuovi, permettendo catene di vincite nello stesso giro.",
      "Quattro o più simboli lecca-lecca attivano 10 giri gratuiti, durante i quali cadono bombe moltiplicatore con valori da 2x a 100x che si sommano tra loro e si applicano al totale della sequenza.",
      "L'RTP teorico dichiarato è del 96,5% e la volatilità è alta: la fase di giri gratuiti concentra la quasi totalità del potenziale del gioco.",
    ],
    specs: [
      { label: "Griglia", value: "6 x 5 Pay Anywhere" },
      { label: "Vincita minima", value: "8 simboli uguali" },
      { label: "Funzione principale", value: "Tumble + bombe moltiplicatore" },
      { label: "Giri gratuiti", value: "10, riattivabili" },
    ],
    faq: commonFaq("Sweet Bonanza", "96,5%"),
  },
  "gates-of-olympus": {
    howItWorks: [
      "Gates of Olympus utilizza una griglia 6x5 con sistema Pay Anywhere: servono almeno 8 simboli identici in qualunque posizione per generare una vincita.",
      "Dopo ogni combinazione i simboli vincenti scompaiono e vengono sostituiti da quelli superiori, con possibili vincite a catena all'interno dello stesso giro.",
      "I simboli moltiplicatore possono comparire in qualsiasi momento con valori da 2x a 500x: nei giri gratuiti i valori si accumulano progressivamente e si applicano a tutte le vincite successive.",
      "L'RTP teorico è del 96,5% e la volatilità è alta. Il gioco è disponibile nei cataloghi di numerosi concessionari ADM in versione desktop e mobile.",
    ],
    specs: [
      { label: "Griglia", value: "6 x 5 Pay Anywhere" },
      { label: "Moltiplicatori", value: "Da 2x a 500x" },
      { label: "Funzione principale", value: "Moltiplicatori cumulativi" },
      { label: "Giri gratuiti", value: "15, riattivabili" },
    ],
    faq: commonFaq("Gates of Olympus", "96,5%"),
  },
  "big-bass-bonanza": {
    howItWorks: [
      "Big Bass Bonanza è una slot a tema pesca con 5 rulli, 3 file e 10 linee di pagamento fisse.",
      "La funzione principale si attiva con tre simboli scatter, che assegnano 10 giri gratuiti. Durante la fase bonus i simboli money mostrano un valore in denaro e il simbolo del pescatore, quando compare, raccoglie tutti i valori presenti sulla griglia.",
      "Ogni quattro pescatori raccolti si ottengono giri gratuiti aggiuntivi e un moltiplicatore crescente applicato ai valori dei simboli money.",
      "L'RTP teorico è del 96,7% con volatilità media: la struttura risulta più regolare rispetto ai titoli Megaways, pur mantenendo un potenziale concentrato nella fase bonus.",
    ],
    specs: [
      { label: "Rulli e file", value: "5 x 3" },
      { label: "Linee", value: "10 fisse" },
      { label: "Funzione principale", value: "Simboli money + pescatore" },
      { label: "Giri gratuiti", value: "10, estendibili" },
    ],
    faq: commonFaq("Big Bass Bonanza", "96,7%"),
  },
  "fowl-play-gold": {
    howItWorks: [
      "Fowl Play Gold è uno dei titoli storici delle sale da gioco italiane, poi trasposto online sui concessionari ADM. La struttura è a 5 rulli con linee di pagamento fisse e simboli legati al tema della fattoria.",
      "La funzione bonus si attiva con la comparsa dei simboli dedicati e propone la selezione delle galline, che rivelano premi in crediti o l'accesso a livelli successivi.",
      "L'RTP teorico è del 95% con volatilità media: il gioco alterna piccole vincite di linea a bonus di importo più rilevante.",
      "L'interfaccia mantiene l'estetica classica delle AWP italiane, con comandi essenziali e tabella pagamenti sempre consultabile prima di iniziare.",
    ],
    specs: [
      { label: "Rulli", value: "5" },
      { label: "Linee", value: "Fisse" },
      { label: "Funzione principale", value: "Bonus a selezione" },
      { label: "Stile", value: "Classico italiano" },
    ],
    faq: commonFaq("Fowl Play Gold", "95,0%"),
  },
  "rise-of-merlin": {
    howItWorks: [
      "Rise of Merlin è una slot di Play'n GO ispirata alle leggende arturiane, con Merlino protagonista, 5 rulli e 10 linee di pagamento.",
      "La sfera magica svolge la funzione di wild e scatter. Tre o più sfere attivano 8 giri gratuiti: un simbolo regolare viene scelto casualmente per diventare espandibile durante la funzione.",
      "Quando compare un numero sufficiente di simboli scelti, questi si espandono coprendo i rulli. Tre o più scatter nei giri gratuiti assegnano altri 8 giri e un ulteriore simbolo speciale espandibile.",
      "La volatilità è alta. La configurazione RTP di riferimento è del 96,58%, ma esistono versioni con percentuali differenti: il valore effettivo va controllato nelle informazioni del gioco presso l'operatore. L'RTP teorico non garantisce il risultato di una singola sessione.",
    ],
    specs: [
      { label: "Rulli e file", value: "5 x 3" },
      { label: "Linee", value: "10" },
      { label: "Funzione principale", value: "Simboli espandibili nei free spin" },
      { label: "Giri gratuiti", value: "8, riattivabili" },
    ],
    faq: [
      { q: "Qual è l'RTP di Rise of Merlin?", a: "La configurazione di riferimento è del 96,58%. Sono disponibili anche configurazioni diverse: consulta la percentuale indicata nelle regole della versione che stai utilizzando." },
      { q: "Come si attivano i giri gratuiti?", a: "Tre o più sfere magiche attivano 8 giri gratuiti con un simbolo espandibile scelto casualmente. La funzione può essere riattivata con altri scatter." },
      { q: "Chi produce Rise of Merlin?", a: "Rise of Merlin è sviluppata da Play'n GO. La scheda ufficiale del produttore presenta il gioco e una versione dimostrativa." },
      { q: "Dove verificare la disponibilità in Italia?", a: "Consulta il catalogo aggiornato di un concessionario ADM: la disponibilità del titolo e la configurazione RTP devono essere verificate presso il singolo operatore." },
    ],
  },
};
