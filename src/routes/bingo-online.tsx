import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  "path": "/bingo-online",
  "title": "Bingo online Italia: cartelle, cinquina e regole",
  "h1": "Bingo online: cartelle, estrazioni e regole in Italia",
  "description": "Guida al bingo online italiano: 90 numeri, cartelle, cinquina, bingo, premi e controlli ADM. Differenze con il bingo a 75 numeri e limiti di spesa.",
  "keywords": "bingo online",
  "breadcrumb": "Bingo online",
  "sections": [
    {
      "id": "cartelle",
      "label": "La cartella nel bingo a 90 numeri",
      "h2": "La cartella nel bingo a 90 numeri",
      "paragraphs": [
        "Il bingo tradizionale italiano utilizza numeri da 1 a 90. La cartella contiene 15 numeri su tre righe, con cinque numeri per riga e spazi vuoti fra le caselle.",
        "Non va confuso con il bingo a 75 numeri, che impiega spesso una griglia 5 × 5 e combinazioni diverse. Le immagini decorative non sostituiscono il regolamento della partita."
      ]
    },
    {
      "id": "premi",
      "label": "Cinquina e bingo: che cosa completare",
      "h2": "Cinquina e bingo: che cosa completare",
      "paragraphs": [
        "La cinquina si ottiene completando tutti e cinque i numeri di una riga; il bingo completando tutti i quindici numeri della cartella. L’ordine delle estrazioni determina quando una combinazione è raggiunta.",
        "Le modalità di verifica delle vincite, gli eventuali ex aequo e i premi aggiuntivi sono definiti dal regolamento della partita. Leggi il montepremi e le condizioni prima di acquistare cartelle."
      ]
    },
    {
      "id": "online",
      "label": "Come cambia la versione online",
      "h2": "Come cambia la versione online",
      "paragraphs": [
        "Nel gioco a distanza l’interfaccia mostra estrazioni e cartelle e può segnare automaticamente i numeri. Il sistema registra le operazioni; non bisogna dedurre le regole da una semplice chat della sala.",
        "L’ADM disciplina il bingo con partecipazione a distanza. Verifica che il sito e l’offerta di gioco siano autorizzati e consulta le informazioni ufficiali e le regole del concessionario."
      ]
    },
    {
      "id": "probabilita",
      "label": "Numero di cartelle e spesa complessiva",
      "h2": "Numero di cartelle e spesa complessiva",
      "paragraphs": [
        "Più cartelle aumentano il costo totale di partecipazione; non assicurano un premio. Le probabilità e la quota di montepremi dipendono dalla partita, dal numero di cartelle concorrenti e dal regolamento.",
        "Calcola la spesa prima dell’acquisto: costo per cartella moltiplicato per cartelle e partite. Premi progressivi e condizioni speciali vanno letti separatamente, senza confonderli con i premi ordinari."
      ]
    },
    {
      "id": "controlli",
      "label": "Controlli utili prima di una partita",
      "h2": "Controlli utili prima di una partita",
      "paragraphs": [
        "Controlla costo unitario, orario di inizio, modalità di convalida, ripartizione dei premi e gestione delle disconnessioni. La funzione automatica non sostituisce il controllo del budget.",
        "Scegli limiti di deposito e sessione, interrompi se il gioco crea disagio e considera l’autoesclusione. Il gioco con denaro è riservato ai maggiorenni."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Quanti numeri contiene una cartella?",
      "a": "Nel bingo italiano a 90 numeri la cartella ha 15 numeri, distribuiti in tre righe da cinque."
    },
    {
      "q": "Bingo e cinquina sono la stessa cosa?",
      "a": "No. La cinquina completa una riga, il bingo tutti i numeri della cartella."
    },
    {
      "q": "Acquistare più cartelle garantisce la vincita?",
      "a": "No. Aumenta la spesa e non garantisce un premio."
    }
  ]
};

export const Route = createFileRoute("/bingo-online")({
 head: () => { const head = guideHead(CFG); return { ...head, scripts: head.scripts.filter((script) => !script.children.includes('"@type":"FAQPage"')) }; },
 component: () => <GuideArticle cfg={CFG}><section className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Fonti e verifica delle regole</h2><p className="mt-2 text-sm text-muted-foreground">Consultate il 6 ottobre 2026. Prevalgono sempre le regole della versione effettivamente disponibile presso il concessionario.</p><ul className="mt-3 space-y-2"><li><a href="https://www.adm.gov.it/portale/documents/20182/1105777/Testo+coordinato+del+regolamento+del+gioco+del+Bingo.pdf/0584681a-5400-4788-9af2-8606ae8a8859" target="_blank" rel="noopener noreferrer" className="text-gold underline">Regolamento ufficiale ADM</a></li></ul></section></GuideArticle>,
});
