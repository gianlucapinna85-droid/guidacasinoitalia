// Approfondimenti editoriali ORIGINALI per ogni concessionario.
// Servono a rendere ogni recensione realmente diversa dalle altre:
// sezioni, esempi e osservazioni sono specifici del singolo operatore.
// Nessun contenuto promozionale: solo descrizione informativa (art. 9 D.L. 87/2018).

export type DeepDiveSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export const deepDive: Record<string, DeepDiveSection[]> = {
  leovegas: [
    {
      h2: "Struttura del catalogo e organizzazione delle sezioni",
      paragraphs: [
        "La caratteristica che distingue LeoVegas dagli altri concessionari analizzati è l'impostazione mobile-first: la piattaforma nasce come applicazione per smartphone e la versione desktop riprende la stessa griglia di navigazione. Nella pratica questo significa che i filtri per provider, volatilità e tipologia di tavolo sono raggiungibili con pochi tocchi, mentre l'utente abituato ai portali tradizionali può trovare la home iniziale piuttosto affollata di caroselli.",
        "Il catalogo è diviso in slot, tavoli live, giochi da tavolo digitali e sezione instant. La parte live è tra le più estese del confronto: oltre alle roulette e ai blackjack standard, sono presenti tavoli in lingua italiana con orari di apertura dichiarati direttamente nella scheda del tavolo. Ogni gioco riporta l'RTP teorico nella schermata delle informazioni, dato che consigliamo di controllare prima di ogni sessione perché può variare tra versioni diverse dello stesso titolo.",
      ],
    },
    {
      h2: "Verifica del conto e strumenti di autolimitazione osservati",
      paragraphs: [
        "La procedura di apertura conto accetta SPID, CIE e caricamento manuale del documento. Nel percorso di registrazione i limiti di deposito vengono proposti prima della prima ricarica e non a posteriori: è un dettaglio che differenzia LeoVegas da diversi concorrenti, dove la stessa impostazione è raggiungibile solo dall'area personale. Sono disponibili limite settimanale, mensile e pausa di riflessione temporanea, oltre al collegamento al Registro Unico degli Autoesclusi.",
        "Il pannello del conto mostra lo storico delle sessioni con saldo iniziale e finale. Per chi vuole tenere sotto controllo la spesa è lo strumento più utile della piattaforma, più della semplice cronologia delle transazioni presente su altri operatori.",
      ],
    },
  ],
  netbet: [
    {
      h2: "Un operatore nato sulle scommesse: cosa cambia nel casinò",
      paragraphs: [
        "NetBet arriva dal mondo delle scommesse sportive e la struttura del sito lo riflette: conto unico, saldo condiviso e passaggio immediato tra sezione sport e sezione casinò dalla barra superiore. Per chi usa entrambe le aree è un vantaggio pratico, perché depositi e prelievi restano centralizzati; per chi cerca solo il casinò, la navigazione risulta meno specializzata rispetto a piattaforme dedicate.",
        "La sezione casinò privilegia i titoli dei provider più diffusi e le raccolte tematiche, mentre l'area live è più contenuta rispetto ai concessionari con offerta più ampia del confronto. È una differenza che pesa soprattutto negli orari serali, quando i tavoli in italiano possono essere occupati.",
      ],
    },
    {
      h2: "Assistenza e documentazione contrattuale",
      paragraphs: [
        "L'assistenza in lingua italiana è attiva tutti i giorni via chat ed e-mail. Nelle nostre verifiche la documentazione contrattuale (termini generali, regole dei bonus, informativa privacy) è raggiungibile in due passaggi dal footer, senza pagine intermedie: un elemento di trasparenza che non tutti i concessionari rispettano.",
        "I termini delle promozioni riportano in modo esplicito requisito di puntata, scadenza e contributo dei giochi. Consigliamo comunque di rileggere la versione pubblicata al momento dell'adesione, perché le condizioni cambiano a ogni edizione dell'iniziativa.",
      ],
    },
  ],
  "888": [
    {
      h2: "Piattaforma proprietaria: implicazioni concrete",
      paragraphs: [
        "888 è tra i pochi operatori del confronto a sviluppare internamente la propria piattaforma di gioco anziché acquistarla da un fornitore terzo. La conseguenza più visibile è la presenza di titoli esclusivi non reperibili sugli altri concessionari ADM, insieme a una gestione della sessione più uniforme fra desktop e mobile.",
        "Il rovescio della medaglia è un catalogo di provider esterni meno esteso rispetto a chi aggrega decine di fornitori: chi cerca una slot molto specifica potrebbe non trovarla. In compenso l'RTP medio dichiarato sui titoli proprietari è tra i più alti rilevati nel nostro confronto, dato comunque teorico e calcolato su un numero molto elevato di giocate.",
      ],
    },
    {
      h2: "Prelievo minimo più alto: cosa comporta",
      paragraphs: [
        "Il prelievo minimo dichiarato è superiore alla media del confronto. Per chi gestisce importi contenuti significa dover accumulare un saldo maggiore prima di poter richiedere il trasferimento, oppure lasciare somme residue sul conto di gioco. È l'aspetto su cui suggeriamo maggiore attenzione in fase di scelta, insieme alla verifica dei tempi di accredito indicati per ciascun metodo di pagamento.",
      ],
    },
  ],
  betflag: [
    {
      h2: "Concessionario italiano con soglie d'ingresso basse",
      paragraphs: [
        "Betflag è un operatore interamente italiano e questo si nota nell'impostazione del conto di gioco: importi minimi contenuti, registrazione con SPID o CIE e interfaccia in italiano senza traduzioni automatiche. Il deposito minimo tra i più bassi del confronto lo rende una scelta frequente per chi vuole limitare l'esposizione economica fin dall'inizio.",
        "Il catalogo supera i duemila titoli e include una sezione di giochi di carte tradizionali italiani che non tutti i concessionari internazionali propongono. L'interfaccia desktop è però meno moderna della media: le griglie di gioco sono dense e la ricerca per provider richiede qualche passaggio in più.",
      ],
    },
    {
      h2: "Gestione dei limiti personalizzati",
      paragraphs: [
        "I limiti di deposito sono modificabili dall'area personale con effetto immediato in riduzione e differito in aumento, come previsto dalla normativa. La piattaforma mostra un riepilogo del limite attivo direttamente sopra il modulo di ricarica: è una soluzione semplice ma efficace, che rende la soglia visibile nel momento in cui conta davvero.",
      ],
    },
  ],
  sunbet: [
    {
      h2: "Operatore recente: cosa significa in termini di storico",
      paragraphs: [
        "Sunbet è tra i concessionari più giovani del confronto. La minore anzianità non incide sulla regolarità della concessione, che resta verificabile nell'elenco pubblico ADM, ma comporta uno storico pubblico più limitato: meno segnalazioni, meno recensioni indipendenti e meno dati storici su tempi di pagamento reali. Per questo motivo suggeriamo di partire con importi contenuti e di completare la verifica dei documenti prima di depositare.",
        "La piattaforma è volutamente leggera: poche animazioni, caricamento rapido anche su connessioni mobili instabili e menu essenziale. Chi cerca un'interfaccia ricca di sezioni tematiche la troverà spartana, chi privilegia la velocità la considererà un punto a favore.",
      ],
    },
    {
      h2: "Tempi di prelievo nella media di categoria",
      paragraphs: [
        "Nei materiali ufficiali non sono dichiarati prelievi accelerati: i tempi indicati rientrano nella media del mercato regolamentato e dipendono dal metodo scelto e dallo stato della verifica documentale. È l'elemento che distingue Sunbet dai concessionari che pubblicano invece finestre di pagamento ridotte.",
      ],
    },
  ],
  "william-hill": [
    {
      h2: "Marchio internazionale nel perimetro regolamentato italiano",
      paragraphs: [
        "William Hill è un marchio con lunga storia sui mercati esteri che opera in Italia attraverso concessione ADM. Il sito italiano è un ambiente separato da quello internazionale: conti, promozioni e cataloghi non sono trasferibili tra i due, ed è una precisazione utile per chi avesse già utilizzato il marchio all'estero.",
        "Il catalogo slot è più contenuto rispetto ai concessionari italiani con migliaia di titoli: la selezione privilegia i giochi più conosciuti e i tavoli classici, con una struttura di navigazione lineare e poche sottosezioni.",
      ],
    },
    {
      h2: "Registrazione con SPID e adesione al RUA",
      paragraphs: [
        "La registrazione con SPID consente l'attivazione immediata del conto senza attesa per la verifica manuale. L'adesione al Registro Unico degli Autoesclusi è dichiarata nelle condizioni contrattuali: chi risulta iscritto al RUA non può aprire né utilizzare un conto, su questo come su qualsiasi altro concessionario ADM.",
      ],
    },
  ],
  lottomatica: [
    {
      h2: "Integrazione tra rete fisica e conto online",
      paragraphs: [
        "L'elemento che distingue nettamente Lottomatica nel confronto è la rete di punti vendita sul territorio: consente ricariche e riscossioni in contanti collegate al conto online, opzione assente sugli operatori esclusivamente digitali. Per chi preferisce non collegare carte o conti bancari alla piattaforma è la differenza più rilevante rispetto agli altri concessionari analizzati.",
        "Il conto unico raggruppa casinò, scommesse, lotterie e giochi numerici. Ne deriva un'interfaccia molto ricca: la ricerca del singolo gioco richiede l'uso dei filtri, perché la home concentra prodotti di natura diversa.",
      ],
    },
    {
      h2: "Verifica dell'identità e gestione documentale",
      paragraphs: [
        "La verifica può essere completata con SPID, CIE o presso un punto vendita abilitato. Quest'ultima via è utile a chi ha difficoltà con l'identità digitale e non trova equivalenti tra gli operatori solo online. I limiti di deposito e la richiesta di autoesclusione sono raggiungibili dall'area conto e restano validi su tutte le sezioni collegate al medesimo profilo.",
      ],
    },
  ],
  goldbet: [
    {
      h2: "Presenza territoriale e profilo dell'offerta",
      paragraphs: [
        "Goldbet condivide con Lottomatica l'impostazione basata su una rete fisica diffusa, ma mantiene un'identità di prodotto più orientata alle scommesse. Nella sezione casinò questo si traduce in un catalogo solido sui titoli più richiesti e in una sezione live di dimensioni medie, senza le decine di tavoli tematici presenti sui concessionari più orientati al casinò.",
        "L'RTP medio dichiarato risulta leggermente inferiore ai valori migliori del confronto: si tratta di uno scarto di frazioni di punto percentuale, teorico e calcolato su volumi di gioco molto ampi, quindi non traducibile in una previsione sul singolo utilizzo.",
      ],
    },
    {
      h2: "Personalizzazione dei limiti di deposito",
      paragraphs: [
        "I limiti giornaliero, settimanale e mensile sono impostabili in modo indipendente. La piattaforma richiede una conferma esplicita quando si tenta di aumentarli e applica il ritardo previsto dalla normativa; le riduzioni sono invece immediate. È l'approccio corretto e coincide con quanto rilevato sui concessionari più strutturati.",
      ],
    },
  ],
  snai: [
    {
      h2: "Ampiezza del catalogo e agenzie sul territorio",
      paragraphs: [
        "Snai propone uno dei cataloghi più ampi tra i concessionari esaminati, con oltre duemilaseicento titoli distribuiti tra slot, tavoli digitali, giochi di carte e sezione live. L'ampiezza porta con sé una navigazione che richiede l'uso costante dei filtri: la ricerca per nome del gioco resta il metodo più rapido.",
        "La rete di agenzie fisiche affianca il conto online e consente operazioni allo sportello. È una caratteristica condivisa con pochi altri operatori italiani e assente su tutti i marchi esclusivamente digitali del confronto.",
      ],
    },
    {
      h2: "Assistenza in italiano e materiali informativi",
      paragraphs: [
        "L'assistenza è interamente in lingua italiana e affiancata da una sezione di guide sui singoli prodotti. Nelle pagine di gioco l'RTP teorico è indicato nella scheda informativa; le regole complete di ciascun titolo sono consultabili prima dell'avvio della sessione, senza necessità di aprire il gioco in modalità reale.",
      ],
    },
  ],
  sisal: [
    {
      h2: "Concessionario storico dei giochi pubblici",
      paragraphs: [
        "Sisal è presente nel settore dei giochi pubblici italiani da decenni e la sezione casinò si inserisce in un ecosistema che comprende lotterie e giochi numerici. L'impostazione grafica è più sobria rispetto ai concessionari internazionali: meno caroselli promozionali in home e maggiore spazio ai testi informativi e alle sezioni di tutela.",
        "La sezione live è meno estesa della media del confronto, mentre l'area slot copre i provider più diffusi sul mercato regolamentato italiano. Chi cerca varietà nei tavoli con croupier troverà offerte più ampie altrove.",
      ],
    },
    {
      h2: "Strumenti di autoesclusione integrati nel conto",
      paragraphs: [
        "Gli strumenti di autolimitazione sono raggiungibili dal menu principale del conto e non nascosti in sottosezioni: limiti di deposito, limite di spesa e autoesclusione tramite Registro Unico degli Autoesclusi. La piattaforma mostra un riepilogo periodico dell'attività di gioco, utile per una verifica autonoma delle proprie abitudini.",
      ],
    },
  ],
  eplay24: [
    {
      h2: "Catalogo internazionale e metodi di pagamento ridotti",
      paragraphs: [
        "Eplay24 punta su un catalogo che include provider internazionali meno frequenti sugli altri concessionari italiani: per chi cerca titoli fuori dal circuito più diffuso è l'elemento distintivo della piattaforma. La contropartita è un'offerta di metodi di pagamento più ristretta rispetto alla media del confronto, con PayPal che non risulta tra le opzioni dichiarate.",
        "Chi utilizza abitualmente il portafoglio elettronico per depositi e prelievi dovrà quindi ricorrere a carte o bonifico, con tempi di accredito differenti da verificare nella sezione pagamenti del sito ufficiale.",
      ],
    },
    {
      h2: "Adesione al RUA e trasparenza delle condizioni",
      paragraphs: [
        "L'adesione al Registro Unico degli Autoesclusi è dichiarata nelle condizioni contrattuali, come previsto per tutti i titolari di concessione ADM. Le pagine informative sono presenti ma meno approfondite rispetto ai concessionari storici: consigliamo di leggere per intero i termini della singola promozione prima di aderirvi, perché i riepiloghi sintetici non sempre riportano tutte le condizioni applicabili.",
      ],
    },
  ],
};

export function getDeepDive(slug: string): DeepDiveSection[] {
  return deepDive[slug] ?? [];
}
