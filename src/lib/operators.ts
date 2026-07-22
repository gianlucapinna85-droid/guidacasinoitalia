// Dati puramente illustrativi. Le concessioni ADM sono verificabili su adm.gov.it.
// Sostituisci con dati verificati e link ai T&C ufficiali prima della pubblicazione.
import leovegasLogo from "@/assets/logos/leovegas.png";
import netbetLogo from "@/assets/logos/netbet.png";

export type Operator = {
  slug: string;
  name: string;
  logo?: string;
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
    slug: "leovegas",
    name: "LeoVegas",
    logo: leovegasLogo,

    
    concessionN: "ADM n. 15216",
    founded: 2012,
    rtpAverage: "96,3%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Skrill", "Bonifico"],
    games: 2000,
    highlights: [
      "Concessione ADM n. 15216 in corso di validità",
      "Strumenti di autolimitazione e adesione al RUA",
      "Assistenza clienti in lingua italiana",
    ],
    officialUrl: "https://www.gambling-affiliation.com/cpc/v=QptH-A-Hwrgg7IxQRUHjDMEsUhWBNBY9a9pszbS0XIA_GA7331V2",
  },
  {
    slug: "netbet",
    name: "NetBet",
    logo: netbetLogo,
    concessionN: "ADM n. 15254",
    founded: 2001,
    rtpAverage: "96,2%",
    paymentMethods: ["Bonifico", "Carte", "PostePay", "PayPal", "Skrill"],
    games: 1800,
    highlights: [
      "Concessione ADM n. 15254 in corso di validità",
      "Strumenti di autolimitazione integrati",
      "Assistenza clienti in italiano 7/7",
    ],
    officialUrl: "https://www.gambling-affiliation.com/cpc/v=TsWva1YIp3UhwL9jgBymG724pB-oBUfAgKbFokBRsA8_GA7331V2&aff_var_1=",
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
    officialUrl: "https://www.gambling-affiliation.com/cpc/v/TsWva1YIp3UhwL9jgBymG724pB-oBUfAgKbFokBRsA8_GA7331V2&aff_var_1=",
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
  {
    slug: "operatore-delta",
    name: "Operatore Delta",
    concessionN: "ADM n. 15XXX",
    founded: 2013,
    rtpAverage: "96,1%",
    paymentMethods: ["Carte", "PayPal", "Neteller", "Bonifico"],
    games: 2100,
    highlights: [
      "App mobile certificata per mercato italiano",
      "Sessioni di gioco con limiti di tempo",
      "Rapporto annuale sulla trasparenza",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-epsilon",
    name: "Operatore Epsilon",
    concessionN: "ADM n. 15XXX",
    founded: 2017,
    rtpAverage: "96,4%",
    paymentMethods: ["Carte", "Skrill", "PostePay"],
    games: 1600,
    highlights: [
      "Registrazione con verifica documentale rapida",
      "Promemoria di spesa settimanale",
      "Collaborazione con centri di cura per il DGA",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-zeta",
    name: "Operatore Zeta",
    concessionN: "ADM n. 15XXX",
    founded: 2008,
    rtpAverage: "95,8%",
    paymentMethods: ["Bonifico", "Carte", "PayPal"],
    games: 900,
    highlights: [
      "Operatore storico del mercato italiano",
      "Info point fisici per assistenza",
      "Programma di autoesclusione semplificato",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-eta",
    name: "Operatore Eta",
    concessionN: "ADM n. 15XXX",
    founded: 2016,
    rtpAverage: "96,3%",
    paymentMethods: ["Carte", "PayPal", "Bonifico", "Paysafecard"],
    games: 1950,
    highlights: [
      "Interfaccia in lingua italiana",
      "Notifiche di attività sospette",
      "Riepilogo mensile del gioco",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-theta",
    name: "Operatore Theta",
    concessionN: "ADM n. 15XXX",
    founded: 2014,
    rtpAverage: "96,0%",
    paymentMethods: ["Carte", "Skrill", "PostePay", "PayPal"],
    games: 1750,
    highlights: [
      "Certificazione ADM aggiornata annualmente",
      "Strumento di budget giornaliero",
      "Supporto via chat in italiano",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-iota",
    name: "Operatore Iota",
    concessionN: "ADM n. 15XXX",
    founded: 2019,
    rtpAverage: "96,6%",
    paymentMethods: ["Carte", "PayPal", "Bonifico"],
    games: 1400,
    highlights: [
      "Piattaforma sviluppata per il mercato italiano",
      "Tutorial obbligatorio sul gioco responsabile",
      "Alert di protezione minori",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-kappa",
    name: "Operatore Kappa",
    concessionN: "ADM n. 15XXX",
    founded: 2012,
    rtpAverage: "95,7%",
    paymentMethods: ["Bonifico", "Carte", "PostePay", "Skrill"],
    games: 2200,
    highlights: [
      "Ampia offerta di titoli certificati",
      "Possibilità di sospendere l'account 24/7",
      "Informativa privacy dettagliata",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-lambda",
    name: "Operatore Lambda",
    concessionN: "ADM n. 15XXX",
    founded: 2010,
    rtpAverage: "96,2%",
    paymentMethods: ["Carte", "PayPal", "Paysafecard"],
    games: 1300,
    highlights: [
      "Esperienza utente semplificata",
      "Punti informativi sul rischio del gioco",
      "Link diretto al Telefono Verde 800 558822",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-mu",
    name: "Operatore Mu",
    concessionN: "ADM n. 15XXX",
    founded: 2018,
    rtpAverage: "96,5%",
    paymentMethods: ["Carte", "Skrill", "PostePay", "Bonifico"],
    games: 1700,
    highlights: [
      "Onboarding con test di conoscenza del rischio",
      "Limiti di perdita configurabili",
      "Report trasparenza trimestrale",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-nu",
    name: "Operatore Nu",
    concessionN: "ADM n. 15XXX",
    founded: 2020,
    rtpAverage: "96,3%",
    paymentMethods: ["Carte", "PayPal", "Bonifico"],
    games: 1100,
    highlights: [
      "Nuovo operatore con concessione ADM",
      "Focus su gioco responsabile",
      "Assistenza via email in italiano",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-xi",
    name: "Operatore Xi",
    concessionN: "ADM n. 15XXX",
    founded: 2007,
    rtpAverage: "95,6%",
    paymentMethods: ["Bonifico", "Carte", "PostePay", "Skrill", "PayPal"],
    games: 2500,
    highlights: [
      "Operatore tra i più longevi in Italia",
      "Ampia gamma di strumenti di autolimitazione",
      "Partnership con associazioni di tutela",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
  {
    slug: "operatore-omicron",
    name: "Operatore Omicron",
    concessionN: "ADM n. 15XXX",
    founded: 2021,
    rtpAverage: "96,4%",
    paymentMethods: ["Carte", "PayPal"],
    games: 800,
    highlights: [
      "Piattaforma leggera e accessibile",
      "Materiali informativi sul DGA",
      "Verifica identità tramite SPID",
    ],
    officialUrl: "https://www.adm.gov.it",
  },
];
