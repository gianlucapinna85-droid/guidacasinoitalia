import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  "path": "/baccarat-online",
  "title": "Baccarat online: regole Punto Banco e punteggi",
  "h1": "Baccarat online: regole del Punto Banco",
  "description": "Regole del baccarat Punto Banco: valore delle carte, punteggi, terza carta, commissioni e differenze fra Banco, Punto e Pareggio. Solo +18.",
  "keywords": "baccarat online",
  "breadcrumb": "Baccarat online",
  "sections": [
    {
      "id": "punteggi",
      "label": "Come si calcola il punteggio",
      "h2": "Come si calcola il punteggio",
      "paragraphs": [
        "Nel Punto Banco si confrontano due mani, chiamate Punto e Banco, cercando il totale più vicino a 9. L’asso vale 1, le carte da 2 a 9 il loro valore, dieci e figure valgono 0.",
        "Si considera solo l’ultima cifra della somma: 7 e 8 danno 15, quindi il punteggio è 5; un re e un asso danno 1. Il nome Banco non significa che chi vi punta gestisce il tavolo."
      ]
    },
    {
      "id": "naturale",
      "label": "Distribuzione e naturale",
      "h2": "Distribuzione e naturale",
      "paragraphs": [
        "Si distribuiscono inizialmente due carte a ciascuna mano. Un totale iniziale di 8 o 9 è un naturale: in quel caso non si distribuisce la terza carta.",
        "Se non c’è un naturale, le regole prestabilite determinano se Punto e Banco ricevono un’altra carta. Il giocatore nel Punto Banco non decide di chiedere carta come nel blackjack."
      ]
    },
    {
      "id": "terza-carta",
      "label": "Regole della terza carta",
      "h2": "Regole della terza carta",
      "paragraphs": [
        "Il Punto pesca con totale da 0 a 5 e sta con 6 o 7. Se il Punto sta, il Banco pesca da 0 a 5 e sta con 6 o 7.",
        "Se il Punto pesca, il Banco pesca sempre con 0, 1 o 2; con 3 salvo che la terza carta del Punto sia 8; con 4 se è da 2 a 7; con 5 se è da 4 a 7; con 6 se è 6 o 7. Con 7 il Banco sta. Questa tabella vale per il Punto Banco standard, non per ogni variante di baccarat."
      ]
    },
    {
      "id": "pagamenti",
      "label": "Puntate, commissioni e varianti",
      "h2": "Puntate, commissioni e varianti",
      "paragraphs": [
        "Le puntate principali sono Punto, Banco e Pareggio. Nella variante classica la vincita sul Banco prevede una commissione, spesso del 5%; i tavoli senza commissione possono compensare con pagamenti ridotti su particolari risultati.",
        "Leggi la tabella prima della puntata: il pagamento del Pareggio e le side bet variano. Un pagamento più alto non significa una probabilità più favorevole. Non applicare automaticamente i margini di una versione a un’altra."
      ]
    },
    {
      "id": "limiti",
      "label": "Perché lo storico non prevede la prossima mano",
      "h2": "Perché lo storico non prevede la prossima mano",
      "paragraphs": [
        "Le tabelle dei risultati mostrano mani passate, non una sequenza affidabile per anticipare il futuro. Le progressioni di puntata aumentano l’esposizione e non eliminano il margine della casa.",
        "Controlla versione, regole e concessione ADM; imposta limiti di tempo e deposito. La disponibilità di tavoli RNG o live dipende dal catalogo aggiornato del singolo concessionario."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Chi decide la terza carta?",
      "a": "Nel Punto Banco la decide il regolamento, non il giocatore."
    },
    {
      "q": "Quanto valgono le figure?",
      "a": "Re, regina e fante valgono zero, come il dieci."
    },
    {
      "q": "Banco e Punto sono i giocatori?",
      "a": "Sono i nomi delle due mani su cui si può puntare, non ruoli che il partecipante assume."
    }
  ]
};

export const Route = createFileRoute("/baccarat-online")({
 head: () => { const head = guideHead(CFG); return { ...head, scripts: head.scripts.filter((script) => !script.children.includes('"@type":"FAQPage"')) }; },
 component: () => <GuideArticle cfg={CFG}><section className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Fonti e verifica delle regole</h2><p className="mt-2 text-sm text-muted-foreground">Consultate il 6 ottobre 2026. Prevalgono sempre le regole della versione effettivamente disponibile presso il concessionario.</p><ul className="mt-3 space-y-2"><li><a href="https://www.casinoitaliani.it/baccarat/regole" target="_blank" rel="noopener noreferrer" className="text-gold underline">Regole del baccarat</a></li></ul></section></GuideArticle>,
});
