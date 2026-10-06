import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  "path": "/craps-regole",
  "title": "Craps: regole dei dadi, Pass Line e punto",
  "h1": "Craps: come funzionano i dadi e la Pass Line",
  "description": "Regole del craps spiegate con esempi: come-out roll, Pass Line, punto, probabilità dei due dadi e differenze fra le puntate. Guida +18.",
  "keywords": "craps regole",
  "breadcrumb": "Craps",
  "sections": [
    {
      "id": "dadi",
      "label": "Due dadi e somme possibili",
      "h2": "Due dadi e somme possibili",
      "paragraphs": [
        "Il craps utilizza due dadi a sei facce. Le somme vanno da 2 a 12, ma non hanno la stessa probabilità: con dadi equi il 7 ha sei combinazioni su 36, il 2 e il 12 una sola ciascuno.",
        "Il risultato da considerare dipende dalla puntata scelta e dalla fase del gioco. Non tutte le puntate si risolvono in un singolo lancio."
      ]
    },
    {
      "id": "come-out",
      "label": "Il lancio iniziale: come-out roll",
      "h2": "Il lancio iniziale: come-out roll",
      "paragraphs": [
        "Per la puntata Pass Line, un 7 o un 11 nel lancio iniziale vince; 2, 3 o 12 perdono. Un 4, 5, 6, 8, 9 o 10 stabilisce il punto.",
        "Queste regole non si estendono automaticamente alla Don’t Pass o alle altre puntate, che hanno condizioni diverse. Prima di giocare va letta la tabella completa del tavolo."
      ]
    },
    {
      "id": "punto",
      "label": "Come si risolve il punto",
      "h2": "Come si risolve il punto",
      "paragraphs": [
        "Una volta stabilito il punto, la Pass Line vince se quel numero si ripete prima del 7. Se esce prima il 7, la Pass Line perde. Altre somme non risolvono quella puntata.",
        "Esempio: con punto 6, un successivo 8 non chiude la Pass Line; un 6 la vince, un 7 la perde. Un 11 durante questa fase non assegna la vittoria prevista nel lancio iniziale."
      ]
    },
    {
      "id": "puntate",
      "label": "Pass Line, odds e puntate aggiuntive",
      "h2": "Pass Line, odds e puntate aggiuntive",
      "paragraphs": [
        "Le odds associate a una puntata base possono avere pagamenti legati alla probabilità del punto, secondo i limiti del tavolo. Non annullano però il rischio né la componente di svantaggio della puntata base.",
        "Hardways e proposition bets hanno regole e pagamenti differenti. Confronta probabilità e pagamenti anziché scegliere soltanto il premio nominale più alto."
      ]
    },
    {
      "id": "sicurezza",
      "label": "Versioni online e disponibilità",
      "h2": "Versioni online e disponibilità",
      "paragraphs": [
        "Craps tradizionale, semplificato e altre varianti di dadi non sono necessariamente identici. Un titolo con grafica di dadi può seguire un regolamento diverso.",
        "Questa guida non certifica la disponibilità del craps presso un concessionario italiano: verifica il catalogo corrente e l’autorizzazione ADM. Nessuna progressione garantisce recupero delle perdite."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Il 7 vince sempre?",
      "a": "No. Sulla Pass Line vince nel come-out, ma perde se esce dopo che è stato stabilito il punto."
    },
    {
      "q": "Che cosa significa punto?",
      "a": "È il 4, 5, 6, 8, 9 o 10 uscito nel come-out: va ripetuto prima del 7 per vincere la Pass Line."
    },
    {
      "q": "Le somme dei dadi sono equiprobabili?",
      "a": "No. Ci sono sei combinazioni per il 7 e una per il 2 o il 12, su 36 combinazioni possibili."
    }
  ]
};

export const Route = createFileRoute("/craps-regole")({
 head: () => { const head = guideHead(CFG); return { ...head, scripts: head.scripts.filter((script) => !script.children.includes('"@type":"FAQPage"')) }; },
 component: () => <GuideArticle cfg={CFG}><section className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Fonti e verifica delle regole</h2><p className="mt-2 text-sm text-muted-foreground">Consultate il 6 ottobre 2026. Prevalgono sempre le regole della versione effettivamente disponibile presso il concessionario.</p><ul className="mt-3 space-y-2"><li><a href="https://www.betnero.it/blog/altri-giochi/come-si-gioca-a-craps-regole-dadi.html" target="_blank" rel="noopener noreferrer" className="text-gold underline">Regole ed esempi di craps</a></li></ul></section></GuideArticle>,
});
