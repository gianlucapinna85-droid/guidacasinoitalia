import { createFileRoute } from "@tanstack/react-router";
import {
  GuideArticle,
  guideHeadWithWebPage,
  SeoTable,
  ProsCons,
  InternalCtaLinks,
  type GuideConfig,
} from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/blackjack-online-italia",
  title: "Blackjack Online Italia 2026: regole e ADM | Guida Casinò Italia",
  h1: "Blackjack online in Italia: regole, varianti e margine del banco",
  description:
    "Blackjack online Italia sui casino ADM: regole, varianti, basic strategy, blackjack live e margine del banco. Guida informativa e non promozionale. Solo +18.",
  keywords:
    "blackjack online italia, blackjack online soldi veri, blackjack online adm, strategie blackjack online, basic strategy blackjack, blackjack live",
  eyebrow: "Guida Casinò Italia · aggiornata 2026",
  breadcrumb: "Blackjack online Italia",
  sections: [
    {
      id: "regole",
      label: "Regole di base",
      h2: "Le regole del blackjack online",
      paragraphs: [
        "L'obiettivo del blackjack è ottenere un punteggio più vicino a 21 rispetto al banco, senza superarlo. Le carte dal 2 al 10 valgono il loro valore nominale, le figure valgono 10 e l'asso vale 1 oppure 11 a seconda della combinazione più favorevole. Una mano composta da asso e carta da dieci punti al primo servito è un blackjack e viene pagata in genere 3:2.",
        "Dopo la distribuzione iniziale il giocatore può chiedere carta (hit), fermarsi (stand), raddoppiare la puntata ricevendo una sola carta (double), dividere una coppia in due mani separate (split) e, in alcune varianti, abbandonare la mano recuperando metà della posta (surrender).",
        "Il banco segue regole fisse e non discrezionali: deve chiedere carta fino a un determinato punteggio e fermarsi oltre quella soglia. È questa rigidità, unita al fatto che il giocatore agisce per primo e può sballare prima del banco, a generare il vantaggio strutturale della casa.",
      ],
      bullets: [
        "Blackjack pagato di norma 3:2",
        "Vincita standard 1:1",
        "Assicurazione pagata 2:1 sulla mezza posta",
        "Il banco segue regole fisse e prestabilite",
      ],
    },
    {
      id: "varianti",
      label: "Varianti",
      h2: "Varianti di blackjack disponibili sui concessionari ADM",
      paragraphs: [
        "Le varianti differiscono per numero di mazzi utilizzati, comportamento del banco sul punteggio di 17 con asso, possibilità di raddoppiare dopo lo split, disponibilità del surrender e pagamento del blackjack. Ognuno di questi dettagli modifica, anche in misura sensibile, il margine complessivo della casa.",
        "Il pagamento del blackjack è il parametro più rilevante: un tavolo che paga 6:5 anziché 3:2 aumenta in modo significativo il vantaggio del banco, a parità di tutte le altre regole. È il primo elemento da verificare nella scheda del tavolo prima di sedersi.",
        "Anche il numero di mazzi incide: a parità di regole, un numero inferiore di mazzi risulta leggermente più favorevole al giocatore. Le versioni multimano permettono di giocare più mani contemporaneamente, aumentando però il volume puntato per singolo turno.",
      ],
    },
    {
      id: "strategia",
      label: "Basic strategy",
      h2: "Strategie blackjack online: cosa può e cosa non può fare la basic strategy",
      paragraphs: [
        "La basic strategy è una tabella che indica la decisione statisticamente ottimale per ogni combinazione tra mano del giocatore e carta scoperta del banco. Non è un metodo per vincere, ma un modo per ridurre l'errore decisionale: applicata correttamente, porta il margine della casa vicino allo 0,5% nelle varianti con regole favorevoli.",
        "Anche giocando in modo perfetto il valore atteso resta negativo. La differenza rispetto al gioco intuitivo, però, è concreta: decisioni approssimative possono far salire il margine del banco di diversi punti percentuali, moltiplicando la perdita attesa sul lungo periodo.",
        "Il conteggio delle carte, efficace in contesti fisici particolari, non è applicabile al blackjack online: nelle versioni RNG il mazzo viene rimescolato virtualmente a ogni mano, mentre nei tavoli live si utilizzano scarpe con mescolamento frequente o continuo.",
        "L'assicurazione contro il blackjack del banco è, nella quasi totalità dei casi, una puntata sfavorevole: il pagamento 2:1 non compensa la probabilità reale che la carta coperta valga dieci punti.",
      ],
      bullets: [
        "La basic strategy riduce l'errore, non elimina il margine",
        "Le regole del tavolo incidono più della strategia",
        "Il conteggio delle carte non funziona online",
        "L'assicurazione è statisticamente sconveniente",
      ],
    },
    {
      id: "live",
      label: "Blackjack live",
      h2: "Blackjack live con croupier reale",
      paragraphs: [
        "Nei tavoli live le carte vengono distribuite fisicamente da un croupier in uno studio dedicato e lette da sistemi ottici. Il giocatore interviene tramite l'interfaccia entro un tempo definito per ciascuna decisione, con un ritmo più lento rispetto alle versioni RNG.",
        "Le regole del tavolo sono pubblicate nella scheda informativa prima dell'ingresso e comprendono numero di mazzi, comportamento del banco, pagamento del blackjack e limiti di puntata. Verificarle è il passaggio più utile, perché determinano il margine effettivo.",
        "Alcuni tavoli prevedono puntate laterali su combinazioni particolari: si tratta quasi sempre di scommesse con margine del banco molto più elevato rispetto al gioco principale, indipendentemente dall'attrattiva del pagamento.",
      ],
    },
    {
      id: "responsabile",
      label: "Gioco responsabile",
      h2: "Budget, limiti e tutele ADM",
      paragraphs: [
        "Il blackjack è tra i giochi da casinò con il margine teorico più basso, ma resta un gioco a valore atteso negativo. Sequenze positive prolungate sono normali e non indicano un vantaggio acquisito: sono l'effetto della varianza su un numero limitato di mani.",
        "Prima di iniziare è consigliabile definire un budget di sessione e impostare i limiti di deposito e di spesa che ogni concessionario ADM deve mettere a disposizione nell'area del conto. In caso di difficoltà, il Registro Unico degli Autoesclusi consente il blocco gratuito su tutti gli operatori italiani.",
        "Guida Casinò Italia pubblica queste informazioni a fini esclusivamente informativi: non promuove il gioco, non pubblica offerte commerciali e non suggerisce alcuna forma di partecipazione a giochi con vincite in denaro.",
      ],
    },
  ],
  faqs: [
    {
      q: "Il blackjack online è legale in Italia?",
      a: "Sì, quando è offerto da un operatore con concessione ADM. Le versioni RNG usano generatori certificati, mentre i tavoli live trasmettono da studi autorizzati con carte distribuite fisicamente.",
    },
    {
      q: "La basic strategy permette di vincere al blackjack?",
      a: "No. Riduce il margine del banco avvicinandolo allo 0,5% nelle varianti più favorevoli, ma il valore atteso resta negativo per il giocatore.",
    },
    {
      q: "Si possono contare le carte nel blackjack online?",
      a: "No. Nelle versioni RNG il mazzo viene rimescolato a ogni mano e nei tavoli live si utilizzano mescolatori continui o scarpe con rimescolamento frequente.",
    },
    {
      q: "Conviene accettare l'assicurazione?",
      a: "Nella quasi totalità dei casi no: il pagamento 2:1 non compensa la probabilità effettiva che la carta coperta del banco valga dieci punti.",
    },
    {
      q: "Perché alcuni tavoli pagano il blackjack 6:5?",
      a: "È una variazione di regola che aumenta in modo significativo il margine del banco rispetto al pagamento 3:2. Il dato è indicato nella scheda del tavolo e va verificato prima di giocare.",
    },
  ],
};

export const Route = createFileRoute("/blackjack-online-italia")({
  head: () => guideHeadWithWebPage(CFG),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Regole del tavolo e impatto sul margine"
        headers={["Regola", "Variante favorevole", "Variante penalizzante"]}
        rows={[
          ["Pagamento blackjack", "3:2", "6:5"],
          ["Numero di mazzi", "Pochi mazzi", "Otto mazzi"],
          ["Raddoppio dopo split", "Consentito", "Non consentito"],
          ["Surrender", "Disponibile", "Assente"],
          ["Puntate laterali", "Evitabili", "Margine molto elevato"],
        ]}
      />
      <ProsCons
        pros={[
          "Margine teorico tra i più bassi del casinò",
          "Regole del tavolo pubblicate prima del gioco",
          "Decisioni del giocatore con effetto misurabile",
          "Tavoli live con distribuzione fisica delle carte",
        ]}
        cons={[
          "Valore atteso comunque negativo",
          "Tavoli 6:5 sensibilmente più sfavorevoli",
          "Puntate laterali ad alto margine",
          "Conteggio delle carte non applicabile online",
        ]}
      />
      <InternalCtaLinks />
    </GuideArticle>
  );
}
