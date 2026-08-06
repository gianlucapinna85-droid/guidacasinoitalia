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
    path: "/casino-paypal",
    title: "Casinò PayPal ADM",
    description: "Concessionari ADM che dichiarano PayPal tra i metodi di pagamento.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/bonus-senza-deposito",
    title: "Bonus senza deposito ADM",
    description: "Come funzionano i bonus senza deposito e i requisiti di puntata.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/guida-rtp",
    title: "Guida all'RTP",
    description: "Che cos'è l'RTP, come si legge e perché non garantisce vincite.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/come-registrarsi",
    title: "Registrazione con SPID",
    description: "Registrazione e verifica del conto di gioco su un casinò ADM.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/gioco-responsabile",
    title: "Gioco responsabile",
    description: "Strumenti di autolimitazione, RUA e contatti di supporto.",
    changefreq: "monthly",
    priority: "0.8",
  },
];

export const guideByPath = new Map(guides.map((g) => [g.path, g]));
