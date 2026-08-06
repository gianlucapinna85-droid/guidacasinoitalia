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
    path: "/slot-online",
    title: "Slot online: RTP e volatilità",
    description: "Come funzionano le slot online sui casinò ADM, RNG certificato, RTP, volatilità e provider.",
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
];


export const guideByPath = new Map(guides.map((g) => [g.path, g]));
