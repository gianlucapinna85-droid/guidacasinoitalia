import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, SeoTable, InternalCtaLinks, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/slot-online-campania",
  title: "Slot online in Campania: RTP, regole ADM e tutele 2026",
  h1: "Slot online in Campania: regole nazionali, RTP e differenze con le sale",
  description:
    "Guida alle slot online per chi vive in Campania: RNG certificato ADM, RTP e volatilità, differenze con le slot delle sale fisiche e limiti di spesa. Solo +18.",
  keywords:
    "slot online campania, slot napoli, slot machine online campania, rtp slot campania, slot adm campania",
  eyebrow: "Analisi regionale 2026",
  breadcrumb: "Slot online in Campania",
  sections: [
    {
      id: "quadro",
      label: "Quadro normativo",
      h2: "In Campania le slot online seguono le regole nazionali ADM",
      paragraphs: [
        "Le slot dei concessionari online sono certificate a livello nazionale: il generatore di numeri casuali è verificato e ogni giro è indipendente dai precedenti. Nessuna regola regionale modifica il funzionamento del gioco.",
        "Chi vive in Campania trova quindi lo stesso catalogo, gli stessi provider e gli stessi RTP dichiarati disponibili nel resto d'Italia, con verifica dell'identità obbligatoria tramite documento o SPID.",
      ],
      bullets: [
        "RNG certificato e controllato da ADM",
        "RTP dichiarato consultabile nella scheda di ogni gioco",
        "Limiti di deposito e di sessione impostabili nel conto di gioco",
        "Autoesclusione tramite RUA valida su tutti gli operatori",
      ],
    },
    {
      id: "sale",
      label: "Sale fisiche",
      h2: "Sale slot in Campania: cosa dicono le regole locali",
      paragraphs: [
        "In Campania regione e comuni hanno introdotto misure sul gioco fisico: distanze minime tra sale slot e luoghi sensibili e fasce orarie di spegnimento degli apparecchi. Sono interventi mirati a ridurre l'accessibilità del gioco sul territorio.",
        "Il gioco a distanza non rientra in queste norme. Cambia però il rendimento teorico: gli apparecchi fisici hanno un payout medio inferiore, mentre le slot online dichiarano in genere RTP compresi tra il 94% e il 97%.",
      ],
    },
    {
      id: "rtp",
      label: "RTP e volatilità",
      h2: "Come leggere RTP e volatilità prima di puntare",
      paragraphs: [
        "L'RTP è la percentuale teorica restituita ai giocatori su un numero enorme di giri: descrive il comportamento del gioco nel lungo periodo, non l'esito della singola sessione, che resta imprevedibile.",
        "La volatilità indica quanto sono frequenti e quanto pesano le vincite. Titoli ad alta volatilità pagano raramente ma con importi maggiori; quelli a bassa volatilità distribuiscono vincite piccole e più frequenti.",
      ],
      bullets: [
        "Nessuna strategia modifica l'RTP di una slot",
        "Il budget va deciso prima di iniziare, non durante la sessione",
        "Le demo gratuite non riproducono l'andamento economico del gioco reale",
        "I bonus sulle slot hanno requisiti di puntata da leggere in anticipo",
      ],
    },
    {
      id: "scelta",
      label: "Come scegliere",
      h2: "Come scegliere dove giocare alle slot se vivi in Campania",
      paragraphs: [
        "Poiché l'offerta è identica in tutta Italia, contano la concessione ADM verificabile, la qualità dei provider, la chiarezza degli RTP indicati, i tempi di prelievo e l'assistenza in italiano.",
        "La Campania mostra un interesse per il gioco online superiore alla media rispetto alla popolazione: proprio per questo conviene impostare subito limiti di deposito e di sessione e trattare le slot come intrattenimento a costo definito.",
      ],
    },
  ],
  faqs: [
    {
      q: "Le slot online hanno RTP diversi in Campania?",
      a: "No. L'RTP è definito dal produttore del gioco e certificato a livello nazionale: non cambia in base alla regione di residenza.",
    },
    {
      q: "Le regole campane sulle sale slot valgono online?",
      a: "No. Distanze minime e orari riguardano gli apparecchi fisici. Il gioco a distanza segue la normativa nazionale e i regolamenti ADM.",
    },
    {
      q: "Conviene giocare online invece che in sala?",
      a: "Le slot online dichiarano un RTP teorico più alto, ma restano un gioco a esito casuale con perdita attesa: non sono una fonte di guadagno né in sala né online.",
    },
    {
      q: "Posso bloccarmi da solo l'accesso alle slot online?",
      a: "Sì. Puoi impostare limiti di deposito e di sessione oppure richiedere l'autoesclusione tramite il Registro Unico degli Autoesclusi, valido su tutti i concessionari ADM.",
    },
  ],
};

export const Route = createFileRoute("/slot-online-campania")({
  head: () => guideHeadWithWebPage(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Slot in Campania: sala fisica e gioco online a confronto"
        headers={["Aspetto", "Slot in sala", "Slot online ADM"]}
        rows={[
          ["Regole locali su distanze e orari", "Sì, regione e comuni", "No, quadro nazionale"],
          ["RTP tipico dichiarato", "Più basso, fissato per legge", "Spesso tra 94% e 97%, indicato nel gioco"],
          ["Strumenti di autolimitazione", "Limitati", "Limiti di deposito e sessione nel conto"],
          ["Autoesclusione", "Locale al punto vendita", "RUA valido su tutti i concessionari"],
        ]}
      />
      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Approfondimenti collegati</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link to="/casino-online-per-regione" className="text-gold hover:underline">Casinò online per regione in Italia</Link></li>
          <li><Link to="/scommesse-sportive-campania" className="text-gold hover:underline">Scommesse sportive in Campania</Link></li>
          <li><Link to="/slot-online-lazio" className="text-gold hover:underline">Slot online nel Lazio</Link></li>
          <li><Link to="/slot-online-soldi-veri" className="text-gold hover:underline">Slot online con soldi veri</Link></li>
          <li><Link to="/guida-rtp" className="text-gold hover:underline">Guida all'RTP delle slot</Link></li>
          <li><Link to="/slot-alta-volatilita" className="text-gold hover:underline">Slot ad alta volatilità</Link></li>
          <li><Link to="/slot-gratis-demo" className="text-gold hover:underline">Slot gratis in modalità demo</Link></li>
          <li><Link to="/gioco-responsabile" className="text-gold hover:underline">Gioco responsabile e strumenti di tutela</Link></li>
        </ul>
      </section>
      <InternalCtaLinks />
    </GuideArticle>
  ),
});
