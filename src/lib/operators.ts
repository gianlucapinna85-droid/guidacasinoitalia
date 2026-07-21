// Dati puramente illustrativi. Le concessioni ADM sono verificabili su adm.gov.it.
// Sostituisci con dati verificati e link ai T&C ufficiali prima della pubblicazione.
export type Operator = {
  slug: string;
  name: string;
  concessionN: string;
  founded: number;
  rtpAverage: string;
  paymentMethods: string[];
  games: number;
  highlights: string[];
  officialUrl: string;
};

export const operators: Operator[] = [
  {
    slug: "operatore-alfa",
    name: "Operatore Alfa",
    concessionN: "ADM n. 15XXX",
    founded: 2011,
    rtpAverage: "96,2%",
    paymentMethods: ["Bonifico", "Carte", "PostePay", "PayPal"],
    games: 1800,
    highlights: [
      "Concessione ADM in corso di validità",
      "Strumenti di autolimitazione integrati",
      "Assistenza clienti in italiano 7/7",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-beta",
    name: "Operatore Beta",
    concessionN: "ADM n. 15XXX",
    founded: 2015,
    rtpAverage: "96,5%",
    paymentMethods: ["Carte", "PayPal", "Skrill"],
    games: 2400,
    highlights: [
      "Verifica SPID/CIE dell'identità",
      "Limiti di deposito personalizzabili",
      "Adesione al RUA",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-gamma",
    name: "Operatore Gamma",
    concessionN: "ADM n. 15XXX",
    founded: 2009,
    rtpAverage: "95,9%",
    paymentMethods: ["Bonifico", "Carte", "PostePay"],
    games: 1200,
    highlights: [
      "Storico operatore concessionario",
      "Sezione dedicata al gioco responsabile",
      "Test di autovalutazione disponibile",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
];
