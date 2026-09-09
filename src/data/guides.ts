// Registro centralizzato delle guide editoriali.
// Ogni nuova guida va aggiunta SOLO qui: sitemap, link interni automatici
// e sezione "Ultime guide" leggono da questo elenco.

export type Guide = {
  path: string; // percorso della rotta, es. "/guida-rtp"
  title: string; // titolo breve per i link interni
  description: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
};

export const guides: Guide[] = [
  {
    path: "/guida-casino-online-italia",
    title: "Guida casino online Italia",
    description:
      "Guida completa ai casino online ADM: bonus, slot, roulette, blackjack e recensioni affidabili.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/migliori-casino-online-adm",
    title: "Migliori casino online ADM",
    description: "Migliori casino online ADM e casino online autorizzati: criteri verificabili e tutele.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/bonus-casino-online-senza-deposito",
    title: "Bonus casino online senza deposito",
    description: "Come funzionano i bonus casino senza deposito: requisiti di puntata, scadenze e limiti.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/slot-online-soldi-veri",
    title: "Slot online soldi veri",
    description: "Slot online soldi veri sui casino ADM: RNG certificato, RTP, volatilità e provider.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/roulette-online-italia",
    title: "Roulette online Italia",
    description: "Roulette online in Italia: varianti europea, francese e americana, margine e tavoli live.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/blackjack-online-italia",
    title: "Blackjack online Italia",
    description: "Blackjack online in Italia: regole, varianti, basic strategy e tavoli live ADM.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/migliori-casino-online",
    title: "Migliori casinò online 2026",
    description: "Confronto dei migliori casinò online con concessione ADM: criteri e parametri verificabili.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-online-sicuri",
    title: "Casinò online sicuri ADM",
    description: "Come riconoscere un casinò online sicuro e verificare la concessione ADM (ex AAMS).",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-paypal",
    title: "Casinò con PayPal ADM 2026",
    description: "Concessionari ADM che dichiarano PayPal tra i metodi di pagamento: depositi, prelievi e tempi.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/bonus-senza-deposito",
    title: "Bonus senza deposito casinò ADM",
    description: "Come funzionano i bonus senza deposito, requisiti di puntata e condizioni da leggere.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/bonus-benvenuto-casino",
    title: "Bonus di benvenuto casinò",
    description: "Tipologie di bonus, wagering, giochi ammessi e come valutare le condizioni reali.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-online-italia",
    title: "Casinò online in Italia: guida 2026",
    description: "Come funzionano i casinò online in Italia: concessione ADM, giochi, pagamenti, tassazione e tutele.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-online-per-regione",
    title: "Casinò online per regione",
    description: "Dove si concentra l'interesse per i casinò online in Italia e cosa cambia davvero tra le regioni.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/scommesse-sportive-lazio",
    title: "Scommesse sportive nel Lazio",
    description: "Scommesse sportive online nel Lazio: concessione ADM nazionale, regole locali sulle sale e mercati più seguiti.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/slot-online-lazio",
    title: "Slot online nel Lazio",
    description: "Slot online nel Lazio: RNG certificato ADM, RTP, volatilità e differenze con le slot delle sale fisiche.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/scommesse-sportive-campania",
    title: "Scommesse sportive in Campania",
    description: "Scommesse sportive online in Campania: siti ADM, norme regionali sulle sale e strumenti di tutela.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/slot-online-campania",
    title: "Slot online in Campania",
    description: "Slot online in Campania: regole nazionali ADM, RTP dichiarati, volatilità e limiti di spesa.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/come-valutiamo-i-casino",
    title: "Come valutiamo i casinò ADM",
    description: "Metodo editoriale di GuidaCasinò.IT: criteri, fonti verificabili e uso dell'intelligenza artificiale.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/slot-online",
    title: "Slot online: RTP e volatilità",
    description: "Come funzionano le slot online sui casinò ADM, RNG certificato, RTP, volatilità e provider.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/slot-gratis-demo",
    title: "Slot gratis in versione demo",
    description: "Slot gratis sui casinò ADM: come funziona la modalità demo, RTP, limiti e ruolo dell'IA.",
    changefreq: "weekly",
    priority: "0.8",
  },

  {
    path: "/casino-live",
    title: "Casinò live con croupier dal vivo",
    description: "Roulette, blackjack e game show in streaming sui concessionari ADM: come funzionano.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/guida-rtp",
    title: "Guida all'RTP delle slot",
    description: "Che cos'è l'RTP, come si legge, differenza con la volatilità e perché non garantisce vincite.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/metodi-pagamento-casino",
    title: "Metodi di pagamento casinò",
    description: "Depositi e prelievi sui casinò ADM: carte, PayPal, Postepay, bonifico, tempi e limiti.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/prelievi-veloci",
    title: "Casinò con prelievi veloci",
    description: "Tempi reali di prelievo sui casinò ADM, verifica dei documenti e cause dei ritardi.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/come-registrarsi",
    title: "Come registrarsi con SPID o CIE",
    description: "Registrazione e verifica del conto di gioco su un casinò ADM, passo per passo.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/gioco-responsabile",
    title: "Gioco responsabile e autoesclusione",
    description: "Strumenti di autolimitazione, Registro Unico degli Autoesclusi (RUA) e contatti di supporto.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/bonus-scommesse-sportive",
    title: "Bonus scommesse sportive ADM 2026",
    description: "Tipologie di bonus bookmaker, requisiti di puntata, quote minime e scadenze da verificare.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/come-leggere-quote-calcio",
    title: "Come leggere le quote calcio",
    description: "Probabilità implicita, margine del bookmaker, mercati principali e costruzione della schedina.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/quote-live-vs-prematch",
    title: "Quote live vs quote pre-match",
    description: "Formazione del prezzo live, latenza, sospensioni, cash out e regole operative per il gioco in diretta.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/gestione-bankroll",
    title: "Gestione del bankroll",
    description: "Budget di gioco, unità di puntata, staking plan, varianza e strumenti di autolimitazione ADM.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/operatori-casino-e-scommesse",
    title: "Operatori ADM: casinò e scommesse",
    description: "Come valutare i concessionari multi-prodotto: conto unico, palinsesto, pagamenti e tutele.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/come-scegliere-casino-online-adm",
    title: "Come scegliere un casinò ADM sicuro",
    description: "Criteri verificabili per scegliere un casinò online con concessione ADM.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-adm-vs-esteri",
    title: "Casinò ADM e casinò esteri",
    description: "Differenze concrete tra concessionari ADM e siti con licenza estera.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/verificare-licenza-adm",
    title: "Come verificare una licenza ADM",
    description: "Procedura passo per passo per controllare la concessione di un operatore.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/requisiti-scommessa-bonus",
    title: "Requisiti di scommessa dei bonus",
    description: "Come funziona il wagering: base di calcolo, scadenze e contributo dei giochi.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/casino-online-principianti",
    title: "Casinò online per principianti",
    description: "Guida completa per chi inizia: conto di gioco, limiti, RTP ed errori da evitare.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/casino-mobile-adm",
    title: "Casinò da mobile: app e sicurezza",
    description: "App ufficiali e siti responsive dei concessionari ADM: differenze e consigli.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/slot-rtp-alto",
    title: "Slot con RTP alto",
    description: "Cosa significa RTP alto, dove si legge il valore corretto e come usarlo.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/pagamenti-sicuri-casino",
    title: "Metodi di pagamento più sicuri",
    description: "Carte, wallet, bonifico e prepagate sui casinò ADM: sicurezza e tempi.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/slot-alta-volatilita",
    title: "Slot ad alta volatilità",
    description: "Spiegazione semplice della volatilità delle slot: differenza con l'RTP ed effetti sul budget.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/scommesse-sportive-online-adm",
    title: "Scommesse sportive online ADM",
    description: "Come funzionano le scommesse sportive online sui siti con concessione ADM: quote, mercati e tutele.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/migliori-siti-scommesse-adm",
    title: "Migliori siti scommesse ADM",
    description: "Criteri di confronto tra i migliori siti scommesse ADM: margine sulle quote, prelievi e app.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/pronostici-calcio-come-analizzare",
    title: "Pronostici calcio: come analizzare",
    description: "Metodo per analizzare una partita di calcio: expected goals, contesto e probabilità implicita.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/scommesse-live-come-funzionano",
    title: "Scommesse live: come funzionano",
    description: "Quote in tempo reale, ritardo del segnale, cash out e rischi specifici delle scommesse live.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/scommesse-serie-a-guida",
    title: "Scommesse Serie A: mercati e statistiche",
    description: "Mercati, quote e statistiche da valutare sulla Serie A, con lettura del margine del bookmaker.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/casino-o-scommesse-sportive",
    title: "Casinò online o scommesse sportive",
    description: "Differenze tra casinò online e scommesse sportive: RTP, margine, ruolo dell'analisi e tutele.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/bonus-immediato-spid",
    title: "Bonus immediato con SPID",
    description:
      "Bonus immediato senza deposito e senza documento: come SPID rende la verifica dell'identità istantanea sui casinò ADM.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/bonus-50-euro-senza-deposito",
    title: "Bonus 50 euro senza deposito",
    description:
      "Cosa offrono davvero i casinò ADM dietro la ricerca \"50 euro senza deposito\": importi reali, requisiti di puntata e tetti di vincita.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/come-ottenere-bonus-senza-deposito",
    title: "Come ottenere un bonus senza deposito",
    description:
      "Procedura passo per passo per ottenere un bonus senza deposito su un casinò ADM: registrazione, verifica, attivazione e sblocco.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/siti-scommesse-bonus-senza-deposito",
    title: "Siti scommesse con bonus senza deposito",
    description:
      "Quali siti di scommesse ADM offrono un bonus senza deposito e come verificare condizioni, quota minima e requisiti.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-italiani-bonus-gratis-senza-deposito",
    title: "Casinò italiani con bonus gratis senza deposito",
    description:
      "Come individuare e confrontare i casinò italiani ADM con bonus gratis senza deposito, oltre l'importo nominale.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/slot-con-bonus-senza-deposito",
    title: "Slot con bonus senza deposito",
    description:
      "Free spin e saldo bonus sulle slot ADM: valore reale del pacchetto, contribuzione al requisito e tetto di conversione.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-online-che-pagano-subito",
    title: "Casinò che pagano subito",
    description:
      "Tempi reali di accredito sui casinò ADM: metodi più rapidi, soglie minime e cause dei ritardi.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/tempi-prelievo-casino-online",
    title: "Tempi di prelievo",
    description:
      "Quanto tempo ci vuole per prelevare da un casinò ADM: elaborazione, metodo di pagamento e verifica documenti.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-online-nuovi-2026",
    title: "Casinò nuovi 2026",
    description:
      "Come verificare un casinò online nuovo: concessione ADM, condizioni del bonus di lancio e segnali di affidabilità.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/casino-con-spid",
    title: "Casinò con SPID",
    description:
      "Registrazione e verifica dell'identità con SPID sui concessionari ADM: come funziona e quali operatori la dichiarano.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-deposito-minimo-5-euro",
    title: "Deposito minimo 5 euro",
    description:
      "Casinò ADM con deposito minimo basso: importi dichiarati, prelievo minimo e metodi di pagamento accettati.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/casino-apple-pay",
    title: "Casinò con Apple Pay",
    description:
      "Depositi con Apple Pay sui casinò ADM: come funziona da iPhone, tempi di accredito e limiti dichiarati.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/casino-postepay",
    title: "Casinò con Postepay",
    description:
      "Postepay sui casinò e siti scommesse ADM: deposito, prelievo, tempi e commissioni dichiarate dagli operatori.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/bonus-casino-ufficiali",
    title: "Bonus ufficiali dei concessionari",
    description:
      "Bonus con deposito e senza deposito dichiarati dai concessionari ADM, con requisiti di puntata e fonte ufficiale.",
    changefreq: "weekly",
    priority: "1.0",
  },
];







export const guideByPath = new Map(guides.map((g) => [g.path, g]));
