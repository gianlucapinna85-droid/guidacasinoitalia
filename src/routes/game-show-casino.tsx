import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  "path": "/game-show-casino",
  "title": "Game show casinò: ruote, bonus, RTP e regole",
  "h1": "Game show da casinò: come leggere regole e probabilità",
  "description": "Come funzionano i game show live: ruote, conduttori, moltiplicatori, round bonus e RTP. Differenze dai tavoli classici e limiti di gioco. +18.",
  "keywords": "game show casino",
  "breadcrumb": "Game show da casinò",
  "sections": [
    {
      "id": "formati",
      "label": "Che cosa distingue un game show live",
      "h2": "Che cosa distingue un game show live",
      "paragraphs": [
        "I game show da casinò combinano una presentazione in diretta con un regolamento di puntate e pagamenti. Possono utilizzare ruote fisiche, carte o altri dispositivi e includere funzioni digitali.",
        "Crazy Time e Dream Catcher sono esempi di giochi a ruota, non sinonimi dell’intera categoria. Ogni titolo e versione ha il proprio regolamento: le regole di uno non valgono automaticamente per un altro."
      ]
    },
    {
      "id": "round",
      "label": "Puntate e chiusura del round",
      "h2": "Puntate e chiusura del round",
      "paragraphs": [
        "L’interfaccia mostra le opzioni disponibili e una finestra temporale per le puntate. Dopo la chiusura, il risultato viene determinato e il sistema applica i pagamenti previsti per le opzioni effettivamente selezionate.",
        "Una sezione bonus sulla ruota non implica che chiunque ottenga un premio: conta la puntata effettuata e il regolamento del round. Controlla sempre la conferma della puntata, non solo l’animazione."
      ]
    },
    {
      "id": "moltiplicatori",
      "label": "Moltiplicatori e RTP: cosa controllare",
      "h2": "Moltiplicatori e RTP: cosa controllare",
      "paragraphs": [
        "Un moltiplicatore modifica il pagamento secondo condizioni specifiche. Va distinto dal valore della puntata e dalla probabilità di raggiungere quella funzione. Il massimo teorico non è una vincita tipica.",
        "L’RTP può differire fra opzioni dello stesso gioco e configurazioni. Non esiste una percentuale unica valida per tutti i game show: leggi le informazioni del titolo e l’eventuale tabella RTP per ciascuna puntata."
      ]
    },
    {
      "id": "connessione",
      "label": "Streaming, risultati e disconnessioni",
      "h2": "Streaming, risultati e disconnessioni",
      "paragraphs": [
        "Il video e l’interfaccia di puntata hanno funzioni diverse. Una connessione lenta può ritardare le immagini; non considerare il fotogramma visto sul telefono come unica conferma dell’operazione.",
        "Consulta le regole sulle disconnessioni, lo storico delle puntate e l’assistenza del concessionario. Tavoli live e giochi RNG differiscono nella presentazione e nelle meccaniche, non nella possibilità di garantire un profitto."
      ]
    },
    {
      "id": "rischi",
      "label": "Ritmo di gioco e controllo della spesa",
      "h2": "Ritmo di gioco e controllo della spesa",
      "paragraphs": [
        "Animazioni, conduttori e round continui possono rendere meno evidente il tempo trascorso. Imposta un limite di sessione e verifica periodicamente la spesa, non solo i premi mostrati.",
        "Evita di inseguire una funzione bonus o aumentare la puntata dopo una serie negativa. Verifica la concessione ADM e il catalogo aggiornato: questa guida non garantisce che un titolo specifico sia disponibile su ogni sito."
      ]
    }
  ],
  "faqs": [
    {
      "q": "I game show sono tutti giochi a ruota?",
      "a": "No. La categoria comprende diversi formati; le ruote sono solo uno degli esempi."
    },
    {
      "q": "Un moltiplicatore alto significa vincita probabile?",
      "a": "No. Pagamento possibile e probabilità sono concetti diversi."
    },
    {
      "q": "L’RTP è uguale per tutte le puntate?",
      "a": "Non necessariamente. Le informazioni del gioco possono indicare RTP differenti per ogni opzione."
    }
  ]
};

export const Route = createFileRoute("/game-show-casino")({
 head: () => { const head = guideHead(CFG); return { ...head, scripts: head.scripts.filter((script) => !script.children.includes('"@type":"FAQPage"')) }; },
 component: () => <GuideArticle cfg={CFG}><section className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Fonti e verifica delle regole</h2><p className="mt-2 text-sm text-muted-foreground">Consultate il 6 ottobre 2026. Prevalgono sempre le regole della versione effettivamente disponibile presso il concessionario.</p><ul className="mt-3 space-y-2"><li><a href="https://games.evolution.com/it/casino-live/game-show/crazy-time/" target="_blank" rel="noopener noreferrer" className="text-gold underline">Scheda ufficiale Evolution: Crazy Time</a></li></ul></section></GuideArticle>,
});
