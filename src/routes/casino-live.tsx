import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/casino-live",
  title: "Casinò live 2026: come funziona il croupier dal vivo",
  h1: "Casinò live: come funziona il gioco con croupier dal vivo sui siti ADM",
  description:
    "Guida al casinò live sui concessionari ADM: come funzionano roulette, blackjack e game show con croupier reali, streaming, limiti di puntata e differenze con i giochi RNG. Solo +18.",
  keywords:
    "casino live, casino live adm, roulette live, blackjack live, croupier dal vivo, evolution gaming, game show casino live",
  breadcrumb: "Casinò live",
  sections: [
    {
      id: "come-funziona",
      label: "Come funziona",
      h2: "Che cos'è il casinò live e come funziona",
      paragraphs: [
        "Il casinò live trasmette in streaming un tavolo reale gestito da un croupier in carne e ossa, all'interno di studi certificati. Le puntate si effettuano dall'interfaccia digitale e vengono registrate dal sistema del concessionario, collegato al totalizzatore nazionale ADM.",
        "A differenza delle slot e dei giochi RNG, l'esito dipende da un evento fisico — la pallina della roulette, il mazzo di carte — ripreso dalle telecamere e validato da sensori ottici.",
      ],
    },
    {
      id: "giochi",
      label: "Giochi disponibili",
      h2: "Quali giochi trovi nella sezione live",
      paragraphs: [
        "L'offerta live dei concessionari italiani comprende i classici da tavolo e i più recenti game show, con tavoli in lingua italiana in gran parte della giornata.",
      ],
      bullets: [
        "Roulette live nelle varianti europea, francese e a moltiplicatori",
        "Blackjack live con tavoli a posti limitati o infiniti",
        "Baccarat e Punto Banco",
        "Poker da casinò (Casino Hold'em, Three Card Poker)",
        "Game show con conduttore, ruote e round bonus",
      ],
    },
    {
      id: "differenze",
      label: "Live o RNG",
      h2: "Casinò live o giochi RNG: quali differenze contano",
      paragraphs: [
        "I tavoli live hanno un ritmo imposto dal croupier e limiti di puntata minimi e massimi più definiti; i giochi RNG consentono di giocare al proprio ritmo e spesso con puntate minime più basse. L'RTP teorico dei giochi da tavolo dipende dalla variante e dalle regole del tavolo, non dal fatto che sia live.",
        "Il ritmo continuo dei tavoli dal vivo può ridurre la percezione del tempo trascorso: impostare limiti di deposito e di sessione prima di iniziare è la misura di tutela più efficace.",
      ],
    },
  ],
  faqs: [
    {
      q: "Il casinò live è truccato?",
      a: "I tavoli live dei concessionari ADM si svolgono in studi certificati, con riprese continue e verifica dei risultati. L'attività è soggetta al controllo dell'Agenzia delle Dogane e dei Monopoli.",
    },
    {
      q: "Serve una connessione veloce per il casinò live?",
      a: "Il gioco live è basato su streaming video: una connessione stabile è consigliata. Molte piattaforme consentono di ridurre la qualità video per limitare il consumo di dati.",
    },
    {
      q: "I bonus valgono anche sui tavoli live?",
      a: "Dipende dal concessionario. Molti bonus escludono o riducono il contributo dei giochi da tavolo ai requisiti di puntata: la percentuale è indicata nei Termini e Condizioni della promozione.",
    },
    {
      q: "Qual è la puntata minima ai tavoli live?",
      a: "Varia per tavolo e provider: in genere parte da pochi centesimi sulle roulette e da importi più alti sui tavoli VIP. Il limite è sempre indicato nella lobby del tavolo.",
    },
  ],
};

export const Route = createFileRoute("/casino-live")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
