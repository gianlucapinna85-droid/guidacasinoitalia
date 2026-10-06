import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  "path": "/poker-online-italia",
  "title": "Poker online in Italia: regole Texas Hold’em e tornei",
  "h1": "Poker online: regole del Texas Hold’em, mani e formati",
  "description": "Come funziona il poker online: carte, turni di puntata, classifica delle mani, cash game e tornei. Guida informativa per adulti sui siti ADM.",
  "keywords": "poker online italia",
  "breadcrumb": "Poker online",
  "sections": [
    {
      "id": "regole",
      "label": "Regole del Texas Hold’em",
      "h2": "Regole del Texas Hold’em",
      "paragraphs": [
        "Il Texas Hold’em si gioca con un mazzo standard di 52 carte. Ogni partecipante riceve due carte personali coperte; sul tavolo vengono distribuite fino a cinque carte comuni. La mano finale è la migliore combinazione di cinque carte, usando zero, una o entrambe le carte personali.",
        "Il piccolo e il grande buio sono puntate obbligatorie prima della distribuzione. Il bottone indica la posizione del mazziere e si sposta fra le mani: l’ordine di azione dipende da questa posizione."
      ]
    },
    {
      "id": "turni",
      "label": "Preflop, flop, turn e river",
      "h2": "Preflop, flop, turn e river",
      "paragraphs": [
        "Preflop: si agisce dopo aver ricevuto le due carte personali. Il flop aggiunge tre carte comuni, il turn la quarta e il river la quinta; ogni fase ha un giro di puntate.",
        "Le azioni possibili, secondo la situazione, sono check, bet, call, raise e fold. Se resta un solo giocatore non ritirato, la mano termina senza mostrare necessariamente le carte. Altrimenti lo showdown confronta le migliori mani."
      ]
    },
    {
      "id": "mani",
      "label": "Classifica delle mani: dalla carta alta alla scala reale",
      "h2": "Classifica delle mani: dalla carta alta alla scala reale",
      "paragraphs": [
        "In ordine crescente: carta alta, coppia, doppia coppia, tris, scala, colore, full, poker, scala colore. La scala reale è una scala colore da dieci ad asso.",
        "A parità di categoria si confrontano i valori delle carte e gli eventuali kicker. I semi non decidono quale mano vince; con combinazioni identiche il piatto si divide. L’asso può chiudere la scala A-2-3-4-5 oppure 10-J-Q-K-A, ma non crea una scala circolare."
      ]
    },
    {
      "id": "formati",
      "label": "Cash game, tornei e poker contro il banco",
      "h2": "Cash game, tornei e poker contro il banco",
      "paragraphs": [
        "Nel cash game le fiches rappresentano denaro secondo il tavolo. Nel torneo si paga un ingresso e si riceve uno stack: i bui crescono e i premi seguono il regolamento. Una fiches da torneo non è direttamente convertibile al valore stampato.",
        "Casino Hold’em e altre varianti contro il banco non sono Texas Hold’em fra giocatori: cambiano avversario, pagamenti e decisioni. Nel poker fra giocatori la piattaforma può trattenere rake o commissioni; controlla sempre costi e struttura dei premi."
      ]
    },
    {
      "id": "tutele",
      "label": "Controlli, budget e limiti del poker online",
      "h2": "Controlli, budget e limiti del poker online",
      "paragraphs": [
        "Verifica la concessione nell’elenco ADM e leggi le regole della sala prima di aprire un conto. Imposta limiti di deposito e un budget che puoi permetterti di perdere; non aumentarlo per recuperare perdite.",
        "La competenza influisce sulle decisioni, ma non elimina casualità, commissioni e rischio di perdita. Non esiste una strategia che garantisca profitto. Le descrizioni delle mani spiegano il gioco, non sono consigli di investimento."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Il poker è uguale al blackjack?",
      "a": "No: nel Texas Hold’em fra giocatori si compete contro gli altri partecipanti; nel blackjack si confronta la propria mano con il banco."
    },
    {
      "q": "Si devono usare entrambe le carte personali?",
      "a": "No. Nel Texas Hold’em si possono usare entrambe, una sola o nessuna, scegliendo la migliore mano di cinque carte."
    },
    {
      "q": "Le fiches di un torneo sono denaro?",
      "a": "No. Servono a determinare la permanenza nel torneo; gli eventuali premi seguono la struttura pubblicata."
    }
  ]
};

export const Route = createFileRoute("/poker-online-italia")({
 head: () => { const head = guideHead(CFG); return { ...head, scripts: head.scripts.filter((script) => !script.children.includes('"@type":"FAQPage"')) }; },
 component: () => <GuideArticle cfg={CFG}><section className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Fonti e verifica delle regole</h2><p className="mt-2 text-sm text-muted-foreground">Consultate il 6 ottobre 2026. Prevalgono sempre le regole della versione effettivamente disponibile presso il concessionario.</p><ul className="mt-3 space-y-2"><li><a href="https://www.pokerstars.it/poker/strategy/" target="_blank" rel="noopener noreferrer" className="text-gold underline">Regole e approfondimenti PokerStars</a></li></ul></section></GuideArticle>,
});
