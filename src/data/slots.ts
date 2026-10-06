// Registro delle slot più giocate in Italia (contenuto informativo).
// Ogni slot rimanda alla scheda di un concessionario ADM diverso: il link
// utilizzato è SEMPRE operator.officialUrl (nessun link definito qui).
import libroEgizio from "@/assets/slots/official-hq/book-of-ra.jpg.asset.json";
import libroEsploratore from "@/assets/slots/official-hq/book-of-dead.jpg.asset.json";
import minieraGemme from "@/assets/slots/official-hq/bonanza-megaways.jpg.asset.json";
import cittaOroJungla from "@/assets/slots/official-hq/gonzos-quest-megaways.png.asset.json";
import stellaGemme from "@/assets/slots/official-hq/starburst.jpg.asset.json";
import dolciFrutti from "@/assets/slots/official-hq/sweet-bonanza.jpg.asset.json";
import olimpoFulmini from "@/assets/slots/official-hq/gates-of-olympus.png.asset.json";
import pescaGrossa from "@/assets/slots/official-hq/big-bass-bonanza.png.asset.json";
import gallinaOro from "@/assets/slots/official-hq/fowl-play-gold.jpg.asset.json";
import reginaNilo from "@/assets/slots/official-hq/cleopatra.png.asset.json";

export type Slot = {
  /** slug indicizzabile: /slot/<slug> */
  slug: string;
  name: string;
  provider: string;
  rtp: string;
  volatility: "Bassa" | "Media" | "Alta";
  image: string;
  /** slug dell'operatore ADM su cui è disponibile (uno diverso per ogni slot) */
  operatorSlug: string;
  /** descrizione breve (2 righe) usata nelle card */
  description: string;
};

export const slots: Slot[] = [
  {
    slug: "book-of-ra",
    name: "Book of Ra",
    provider: "Novomatic",
    rtp: "95,1%",
    volatility: "Alta",
    image: libroEgizio.url,
    operatorSlug: "snai",
    description:
      "La slot egizia più giocata in Italia: 5 rulli, simbolo speciale espandibile e 10 giri gratuiti.",
  },
  {
    slug: "book-of-dead",
    name: "Book of Dead",
    provider: "Play'n GO",
    rtp: "96,2%",
    volatility: "Alta",
    image: libroEsploratore.url,
    operatorSlug: "leovegas",
    description:
      "Avventura archeologica con simbolo espandibile nei free spin e volatilità elevata.",
  },
  {
    slug: "bonanza-megaways",
    name: "Bonanza Megaways",
    provider: "Big Time Gaming",
    rtp: "96,0%",
    volatility: "Alta",
    image: minieraGemme.url,
    operatorSlug: "netbet",
    description:
      "La Megaways originale: fino a 117.649 modi di vincita e reazioni a catena.",
  },
  {
    slug: "gonzos-quest-megaways",
    name: "Gonzo's Quest Megaways",
    provider: "Red Tiger",
    rtp: "95,7%",
    volatility: "Alta",
    image: cittaOroJungla.url,
    operatorSlug: "888",
    description:
      "Versione Megaways del classico Avalanche, con moltiplicatori progressivi.",
  },
  {
    slug: "starburst",
    name: "Starburst",
    provider: "NetEnt",
    rtp: "96,1%",
    volatility: "Bassa",
    image: stellaGemme.url,
    operatorSlug: "betflag",
    description:
      "Slot iconica a bassa volatilità con wild espandibili e re-spin.",
  },
  {
    slug: "sweet-bonanza",
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    rtp: "96,5%",
    volatility: "Alta",
    image: dolciFrutti.url,
    operatorSlug: "sunbet",
    description:
      "Pay Anywhere, tumble e moltiplicatori fino a 100x nei giri gratuiti.",
  },
  {
    slug: "gates-of-olympus",
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    rtp: "96,5%",
    volatility: "Alta",
    image: olimpoFulmini.url,
    operatorSlug: "william-hill",
    description:
      "Tema mitologico con simboli cadenti e moltiplicatori cumulativi.",
  },
  {
    slug: "big-bass-bonanza",
    name: "Big Bass Bonanza",
    provider: "Reel Kingdom",
    rtp: "96,7%",
    volatility: "Media",
    image: pescaGrossa.url,
    operatorSlug: "lottomatica",
    description:
      "Serie di pesca molto popolare: simboli money e raccolta durante i free spin.",
  },
  {
    slug: "fowl-play-gold",
    name: "Fowl Play Gold",
    provider: "WMG",
    rtp: "95,0%",
    volatility: "Media",
    image: gallinaOro.url,
    operatorSlug: "goldbet",
    description:
      "Un classico dei casinò italiani, con bonus della gallina e uova d'oro.",
  },
  {
    slug: "cleopatra",
    name: "Cleopatra",
    provider: "IGT",
    rtp: "95,0%",
    volatility: "Media",
    image: reginaNilo.url,
    operatorSlug: "sisal",
    description:
      "Slot storica a tema egizio con 15 giri gratuiti e moltiplicatore 3x.",
  },
];
