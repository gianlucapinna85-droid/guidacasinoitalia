import cards from "@/assets/games/cards.jpg";
import roulette from "@/assets/games/roulette.jpg";
import blackjack from "@/assets/games/blackjack.jpg";
import bingo from "@/assets/games/bingo.jpg";
import dice from "@/assets/games/dice.jpg";
import live from "@/assets/games/live.jpg";
import slot from "@/assets/slots/official-hq/starburst.jpg.asset.json";

export const gameCatalog = [
{ path: "/poker-online-italia" as const, name: "Poker", description: "Texas Hold\u2019em, mani e tornei", image: cards },
{ path: "/roulette-online-italia" as const, name: "Roulette", description: "Europea, francese e americana", image: roulette },
{ path: "/blackjack-online-italia" as const, name: "Blackjack", description: "Valore delle carte e regole del tavolo", image: blackjack },
{ path: "/baccarat-online" as const, name: "Baccarat", description: "Punto Banco, punteggi e terza carta", image: cards },
{ path: "/bingo-online" as const, name: "Bingo", description: "Cartelle, estrazioni e premi", image: bingo },
{ path: "/craps-regole" as const, name: "Craps", description: "Dadi, Pass Line e punto", image: dice },
{ path: "/casino-live" as const, name: "Casin\u00f2 live", description: "Croupier e tavoli in diretta", image: live },
{ path: "/game-show-casino" as const, name: "Game show", description: "Ruote, round bonus e probabilit\u00e0", image: live },
{ path: "/slot-online" as const, name: "Slot", description: "RTP, volatilit\u00e0 e RNG", image: slot.url }
];
