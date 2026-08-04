// Dati provider a scopo informativo. RTP medi indicativi dichiarati dai produttori:
// verifica sempre il valore RTP pubblicato nella scheda di ogni singolo gioco.
import pragmaticLogo from "@/assets/providers/pragmatic.png";
import evolutionLogo from "@/assets/providers/evolution.png";
import netentLogo from "@/assets/providers/netent.png";
import redTigerLogo from "@/assets/providers/red_tiger.png";
import nolimitLogo from "@/assets/providers/nolimit.png";
import btgLogo from "@/assets/providers/btg.png";
import yggdrasilLogo from "@/assets/providers/yggdrasil.png";
import novomaticLogo from "@/assets/providers/novomatic.png";

export type Provider = {
  slug: string;
  name: string;
  logo: string;
  rtpAverage: string;
  topSlot: string;
  topSlotRtp: string;
  category: string;
  note: string;
};

export const providers: Provider[] = [
  {
    slug: "pragmatic-play",
    name: "Pragmatic Play",
    logo: pragmaticLogo,
    rtpAverage: "96,5%",
    topSlot: "Gates of Olympus",
    topSlotRtp: "96,5%",
    category: "Slot, live casinò, giochi da tavolo",
    note: "Catalogo tra i più diffusi sui concessionari ADM, con rilasci mensili certificati.",
  },
  {
    slug: "netent",
    name: "NetEnt",
    logo: netentLogo,
    rtpAverage: "96,0%",
    topSlot: "Starburst",
    topSlotRtp: "96,1%",
    category: "Slot classiche e jackpot",
    note: "Studio svedese del gruppo Evolution, storico fornitore del mercato italiano.",
  },
  {
    slug: "play-n-go",
    name: "Play'n GO",
    logo: "",
    rtpAverage: "96,2%",
    topSlot: "Book of Dead",
    topSlotRtp: "96,2%",
    category: "Slot ad alta volatilità",
    note: "Titoli disponibili su gran parte dei concessionari ADM.",
  },
  {
    slug: "evolution",
    name: "Evolution",
    logo: evolutionLogo,
    rtpAverage: "97,3%",
    topSlot: "Crazy Time",
    topSlotRtp: "96,1%",
    category: "Live casinò e game show",
    note: "Leader del segmento live dealer; tavoli in lingua italiana dedicati.",
  },
  {
    slug: "red-tiger",
    name: "Red Tiger",
    logo: redTigerLogo,
    rtpAverage: "95,8%",
    topSlot: "Gonzo's Quest Megaways",
    topSlotRtp: "95,7%",
    category: "Slot con jackpot giornalieri",
    note: "Studio del gruppo Evolution, noto per i daily jackpot.",
  },
  {
    slug: "nolimit-city",
    name: "Nolimit City",
    logo: nolimitLogo,
    rtpAverage: "96,0%",
    topSlot: "Mental",
    topSlotRtp: "96,1%",
    category: "Slot ad altissima volatilità",
    note: "Meccaniche xWays/xNudge; volatilità elevata, sessioni molto variabili.",
  },
  {
    slug: "big-time-gaming",
    name: "Big Time Gaming",
    logo: btgLogo,
    rtpAverage: "96,3%",
    topSlot: "Bonanza Megaways",
    topSlotRtp: "96,0%",
    category: "Slot Megaways",
    note: "Inventore del motore Megaways, oggi parte del gruppo Evolution.",
  },
  {
    slug: "yggdrasil",
    name: "Yggdrasil",
    logo: yggdrasilLogo,
    rtpAverage: "96,1%",
    topSlot: "Valley of the Gods",
    topSlotRtp: "96,2%",
    category: "Slot tematiche e grafica 3D",
    note: "Studio maltese con catalogo certificato per il mercato italiano.",
  },
  {
    slug: "novomatic",
    name: "Novomatic / Greentube",
    logo: novomaticLogo,
    rtpAverage: "95,9%",
    topSlot: "Book of Ra Deluxe",
    topSlotRtp: "95,1%",
    category: "Slot da sala e classiche",
    note: "Trasposizione digitale dei titoli storici delle sale da gioco italiane.",
  },
];
