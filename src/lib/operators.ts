// Dati puramente illustrativi. Le concessioni ADM sono verificabili su adm.gov.it.
// Sostituisci con dati verificati e link ai T&C ufficiali prima della pubblicazione.
import leovegasLogo from "@/assets/logos/leovegas.png";
import netbetLogo from "@/assets/logos/netbet.png";
import betflagLogo from "@/assets/logos/betflag.png";
import logo888 from "@/assets/logos/888.png";
import sunbetLogo from "@/assets/logos/sunbet.png";
import williamhillLogo from "@/assets/logos/williamhill.png";
import lottomaticaLogo from "@/assets/logos/lottomatica.png";
import goldbetLogo from "@/assets/logos/goldbet.png";
import snaiLogo from "@/assets/logos/snai.png";
import sisalLogo from "@/assets/logos/sisal.png";
import eplay24Logo from "@/assets/logos/eplay24.png";


export type NoDepositBonus = {
  amount: string;
  description: string;
};

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
  noDepositBonus?: NoDepositBonus;
};


function parseNoDepositAmount(amount?: string): number {
  if (!amount) return 0;
  const cleaned = amount.replace(/[€\s]/g, "").replace(/\./g, "").replace(",", ".");
  const value = parseFloat(cleaned);
  return Number.isNaN(value) ? 0 : value;
}

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
    noDepositBonus: {
      amount: "Fino a 250 FREE SPINS",
      description:
        "Importo di gioco riconosciuto dopo la verifica dell'identità, senza necessità di effettuare alcun deposito. Soggetto ai requisiti di puntata e alle condizioni pubblicate dal concessionario.",
    },

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
    noDepositBonus: {
      amount: "€ 250",
      description:
        "Credito di gioco accreditato al completamento della registrazione e della verifica documentale, senza obbligo di deposito. Utilizzabile secondo i termini pubblicati dal concessionario.",
    },
  },

 
  {
    slug: "888",
    name: "888",
    logo: logo888,
    concessionN: "ADM n. 15014",
    founded: 1997,
    rtpAverage: "96,6%",
    paymentMethods: ["Carte", "PayPal", "Skrill", "Neteller", "Bonifico"],
    games: 1500,
    highlights: [
      "Piattaforma di gioco proprietaria",
      "Strumenti di autolimitazione e gioco responsabile",
      "Assistenza clienti dedicata",
    ],
    noDepositBonus: {
      amount: "€ 50",
      description: "Bonus senza deposito accreditato alla registrazione con SPID, utilizzabile secondo i termini e le condizioni pubblicate dal concessionario.",
    },
    officialUrl: "https://www.gambling-affiliation.com/cpc/v=xBkL0SQeG1L69qeCbRpuVzHccnxw8FpRkjHVhT-tYbA_GA7331V2&aff_var_1=",
  },  
  {slug: "betflag",
    name: "Betflag",
    logo: betflagLogo,
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
    noDepositBonus: {
      amount: "€ 5.000",
      description: "Bonus senza deposito accreditato alla registrazione con verifica dei documenti, utilizzabile secondo i termini e le condizioni pubblicate dal concessionario.",
    },
    officialUrl: "https://www.gambling-affiliation.com/cpc/v=czbkTrTha5NkIDGy3O9i.yfHqtS5S3i52BJh.ziioP8_GA7331V2&aff_var_1=",
  },
    {
    slug: "sunbet",
    name: "Sunbet",
    logo: sunbetLogo,
    concessionN: "ADM n. 16039",
    founded: 2020,
    rtpAverage: "96,0%",
    paymentMethods: ["Carte", "PayPal", "Skrill"],
    games: 2000,
    highlights: [
      "Ampia gamma di slot e giochi",
      "Strumenti di gioco responsabile",
      "Partnership ADM"
    ],
    noDepositBonus: {
      amount: "€ 10",
      description: "Bonus senza deposito accreditato alla convalida del documento (5€ Sport + 5€ Casinò).",
    },
  officialUrl: "https://www.gambling-affiliation.com/cpc/v=r-pjVdIlD.awE540kQttwJhlChLVX9pg98I6gO07Ikk_GA7331V2",
    },
  {
    slug: "william-hill",
    name: "William Hill",
    logo: williamhillLogo,
    concessionN: "ADM n. 16044",
    founded: 1999,
    rtpAverage: "96,4%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Skrill", "Bonifico"],
    games: 1200,
    highlights: [
      "Operatore storico attivo dal 2018, in Italia con concessione ADM",
      "Registrazione e verifica immediata dell'identità con SPID",
      "Strumenti di autolimitazione e adesione al RUA",
    ],
    noDepositBonus: {
      amount: "€ 50",
      description:
        "Credito di gioco riconosciuto ai nuovi utenti che completano la registrazione con SPID e la verifica dell'identità, senza obbligo di deposito. Soggetto ai requisiti di puntata e alle condizioni pubblicate dal concessionario.",
    },
  officialUrl:"https://www.gambling-affiliation.com/cpc/v=gqQBo.2b6e.KfTQV7nTXKskb73-G6EmaG7DESllWKnI_GA7331V2&aff_var_1=",
  },
  {

    slug: "lottomatica",
    name: "Lottomatica",
    logo: lottomaticaLogo,
    concessionN: "ADM n. 15215",
    founded: 1990,
    rtpAverage: "96,2%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Bonifico", "Punti vendita"],
    games: 2500,
    highlights: [
      "Operatore storico del mercato italiano regolamentato",
      "Registrazione con SPID/CIE e verifica immediata",
      "Strumenti di autolimitazione e adesione al RUA",
    ],
    noDepositBonus: {
      amount: "€ 250",
      description:
        "Credito di gioco indicato dal concessionario per i nuovi conti verificati, senza obbligo di deposito. Importo e condizioni possono variare: verifica i Termini e Condizioni ufficiali.",
    },
    officialUrl: "https://bonus.affilroi.com/Guidacasino/lottomaticaBonus/c",
  },
  {
    slug: "goldbet",
    name: "Goldbet",
    logo: goldbetLogo,
    concessionN: "ADM n. 15226",
    founded: 2011,
    rtpAverage: "96,1%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Bonifico", "Punti vendita"],
    games: 2300,
    highlights: [
      "Rete di punti vendita fisici in tutta Italia",
      "Verifica dell'identità con SPID o documento",
      "Limiti di deposito personalizzabili",
    ],
    noDepositBonus: {
      amount: "real bonus 30€",
      description:
        "Importo di gioco indicato dal concessionario alla convalida del documento, senza deposito. Soggetto a requisiti di puntata e alle condizioni ufficiali pubblicate.",
    },
    officialUrl: "https://bonus.affilroi.com/Guidacasino/goldbetBONUS/c",
  },
  {
    slug: "snai",
    name: "Snai",
    logo: snaiLogo,
    concessionN: "ADM n. 15219",
    founded: 1990,
    rtpAverage: "96,0%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Bonifico", "Punti vendita"],
    games: 2600,
    highlights: [
      "Operatore storico con rete di agenzie sul territorio",
      "Assistenza clienti in lingua italiana",
      "Strumenti di gioco responsabile e adesione al RUA",
    ],
    noDepositBonus: {
      amount: "€ 500",
      description:
        "Credito di gioco riconosciuto ai nuovi utenti dopo la verifica dei documenti, senza necessità di deposito. Condizioni complete sul sito ufficiale del concessionario.",
    },
    officialUrl: "https://bonus.affilroi.com/Guidacasino/snaiBONUS/c",
  },
  {
    slug: "sisal",
    name: "Sisal",
    logo: sisalLogo,
    concessionN: "ADM n. 15220",
    founded: 1946,
    rtpAverage: "96,1%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Bonifico", "Punti vendita"],
    games: 2200,
    highlights: [
      "Concessionario storico dei giochi pubblici in Italia",
      "Registrazione con SPID e verifica immediata",
      "Limiti di deposito e autoesclusione disponibili",
    ],
    noDepositBonus: {
      amount: "€ 5000",
      description:
        "Importo di gioco indicato dal concessionario per i nuovi conti verificati, senza deposito iniziale. Verifica requisiti di puntata e scadenze nei Termini ufficiali.",
    },
    officialUrl: "https://bonus.affilroi.com/Guidacasino/sisalBONUS/c",
  },
  {
    slug: "planetwin365",
    name: "Planetwin365",
    concessionN: "ADM n. 15207",
    founded: 2010,
    rtpAverage: "96,0%",
    paymentMethods: ["Carte", "PayPal", "Postepay", "Bonifico", "Punti vendita"],
    games: 2100,
    highlights: [
      "Ampio catalogo di slot certificate ADM",
      "Verifica dell'identità obbligatoria prima dei prelievi",
      "Strumenti di autolimitazione integrati",
    ],
    noDepositBonus: {
      amount: "real bonus 50€",
      description:
        "Credito di gioco indicato dal concessionario alla verifica del conto, senza obbligo di deposito. Soggetto alle condizioni ufficiali pubblicate.",
    },
    officialUrl: "https://bonus.affilroi.com/Guidacasino/planetBONUS/c",
  },
  {
    slug: "eplay24",
    name: "Eplay24",
    logo: eplay24Logo,
    concessionN: "ADM n. 15229",
    founded: 2014,
    rtpAverage: "96,0%",
    paymentMethods: ["Carte", "Postepay", "Bonifico", "Punti vendita"],
    games: 1600,
    highlights: [
      "Concessione ADM in corso di validità",
      "Catalogo slot con provider internazionali",
      "Adesione al Registro Unico degli Autoesclusi",
    ],
    noDepositBonus: {
      amount: "€ 50",
      description:
        "Importo di gioco indicato dal concessionario ai nuovi utenti verificati, senza deposito. Consulta i Termini e Condizioni ufficiali per requisiti e scadenze.",
    },
    officialUrl: "https://bonus.affilroi.com/Guidacasino/eplay24BONUS/c",
  },
];

export const sortedOperators = [...operators].sort((a, b) => {
  const aVal = parseNoDepositAmount(a.noDepositBonus?.amount);
  const bVal = parseNoDepositAmount(b.noDepositBonus?.amount);
  return bVal - aVal;
});

