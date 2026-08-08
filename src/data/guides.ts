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
];




export const guideByPath = new Map(guides.map((g) => [g.path, g]));
