import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, SeoTable, InternalCtaLinks, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/scommesse-sportive-lazio",
  title: "Scommesse sportive nel Lazio: siti ADM e regole 2026",
  h1: "Scommesse sportive nel Lazio: come funzionano i siti ADM e cosa cambia sul territorio",
  description:
    "Guida alle scommesse sportive online per chi vive nel Lazio: concessione ADM valida in tutta Italia, regole regionali sulle sale fisiche, calcio locale e tutele. Solo +18.",
  keywords:
    "scommesse sportive lazio, siti scommesse lazio, scommesse online roma, scommesse adm lazio, betting lazio, scommesse serie a roma",
  eyebrow: "Analisi regionale 2026",
  breadcrumb: "Scommesse sportive nel Lazio",
  sections: [
    {
      id: "quadro",
      label: "Quadro normativo",
      h2: "Nel Lazio si scommette online con le stesse regole del resto d'Italia",
      paragraphs: [
        "Non esistono siti di scommesse \"del Lazio\": la concessione per il gioco a distanza è rilasciata dall'Agenzia delle Dogane e dei Monopoli su base nazionale. Chi risiede a Roma, Latina, Frosinone, Viterbo o Rieti accede quindi esattamente agli stessi operatori autorizzati disponibili in Lombardia o in Sicilia.",
        "La residenza incide solo sui dati anagrafici richiesti in fase di apertura del conto di gioco e sulla verifica dell'identità, obbligatoria per legge su ogni concessionario, con documento valido oppure con SPID.",
      ],
      bullets: [
        "Concessione ADM valida su tutto il territorio nazionale",
        "Registro Unico degli Autoesclusi (RUA) gestito a livello centrale",
        "Verifica dell'identità obbligatoria prima del primo prelievo",
        "Divieto di pubblicità del gioco (Decreto Dignità) uguale in ogni regione",
      ],
    },
    {
      id: "territorio",
      label: "Regole locali",
      h2: "Cosa cambia davvero nel Lazio: le norme sulle sale fisiche",
      paragraphs: [
        "La Regione Lazio è intervenuta negli anni sul gioco fisico con norme di contrasto al disturbo da gioco d'azzardo, tra cui distanze minime tra sale scommesse, sale slot e luoghi sensibili come scuole, ospedali e centri di aggregazione, oltre a limiti orari decisi da molti comuni.",
        "Queste regole riguardano i punti vendita sul territorio, non i concessionari online, che restano disciplinati dal quadro nazionale e dai regolamenti ADM. È una distinzione importante: chi cerca informazioni locali spesso trova notizie sul distanziometro che non si applicano al gioco a distanza.",
        "Sul fronte tutele, i Servizi per le Dipendenze (SerD) delle ASL del Lazio offrono sportelli dedicati al gioco problematico, con accesso diretto e gratuito.",
      ],
    },
    {
      id: "mercati",
      label: "Cosa si scommette",
      h2: "Calcio, derby e mercati più seguiti nel Lazio",
      paragraphs: [
        "Nel Lazio la domanda di scommesse è trainata dal calcio: Serie A, coppe europee e in particolare le partite delle due squadre della capitale concentrano gran parte dell'interesse, con picchi nelle giornate di derby.",
        "Accanto al calcio restano molto seguiti tennis, basket e volley, oltre alle scommesse live durante gli eventi serali. I mercati più utilizzati sono esito finale, doppia chance, under/over e marcatori: prima di puntare conviene capire come si legge una quota e come cambia il margine del bookmaker.",
      ],
      bullets: [
        "Serie A e coppe europee: volumi più alti dell'anno",
        "Live betting: quote in movimento durante la partita",
        "Multiple: rischio più alto, non un modo per recuperare perdite",
        "Bonus scommesse: sempre soggetti a requisiti di puntata",
      ],
    },
    {
      id: "scelta",
      label: "Come scegliere",
      h2: "Come scegliere un sito di scommesse se vivi nel Lazio",
      paragraphs: [
        "I criteri sono gli stessi in tutta Italia: numero di concessione ADM verificabile sull'elenco pubblico, condizioni bonus chiare, metodi di pagamento supportati, tempi di prelievo dichiarati e assistenza in italiano.",
        "Utile anche controllare la profondità del palinsesto sui campionati che segui davvero e la presenza di strumenti di autolimitazione: limiti di deposito, limiti di sessione e autoesclusione vanno impostati subito, non quando il gioco è già diventato un problema.",
      ],
    },
  ],
  faqs: [
    {
      q: "Esistono siti di scommesse autorizzati solo nel Lazio?",
      a: "No. La concessione ADM è nazionale: gli stessi operatori autorizzati sono accessibili da tutte le regioni italiane, Lazio compreso, senza differenze di offerta o di tutele.",
    },
    {
      q: "Il distanziometro del Lazio vale anche per le scommesse online?",
      a: "No. Le norme regionali su distanze minime e orari riguardano le sale scommesse e gli apparecchi fisici. Il gioco a distanza è regolato dalla normativa nazionale e dai regolamenti ADM.",
    },
    {
      q: "Serve la residenza nel Lazio per aprire un conto di gioco?",
      a: "Serve la residenza in Italia, il codice fiscale e un documento valido oppure SPID. La regione indicata non cambia l'offerta né i limiti applicati.",
    },
    {
      q: "Dove trovo aiuto nel Lazio se il gioco diventa un problema?",
      a: "Il numero verde nazionale 800 558822 è attivo in tutta Italia. Nel Lazio le ASL dispongono di SerD con sportelli dedicati al disturbo da gioco d'azzardo, ad accesso gratuito.",
    },
  ],
};

export const Route = createFileRoute("/scommesse-sportive-lazio")({
  head: () => guideHeadWithWebPage(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Scommesse sportive nel Lazio: cosa è nazionale e cosa è locale"
        headers={["Aspetto", "Chi decide", "Effetto per chi gioca online"]}
        rows={[
          ["Concessione dell'operatore", "ADM (nazionale)", "Stessi siti autorizzati in tutte le regioni"],
          ["Distanze e orari delle sale", "Regione Lazio e comuni", "Nessun effetto sul gioco a distanza"],
          ["Autoesclusione", "RUA (nazionale)", "Vale su tutti i concessionari, ovunque"],
          ["Supporto sulle dipendenze", "ASL del Lazio", "SerD e sportelli locali gratuiti"],
        ]}
      />
      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Approfondimenti collegati</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link to="/casino-online-per-regione" className="text-gold hover:underline">Casinò online per regione in Italia</Link></li>
          <li><Link to="/slot-online-lazio" className="text-gold hover:underline">Slot online nel Lazio</Link></li>
          <li><Link to="/scommesse-sportive-campania" className="text-gold hover:underline">Scommesse sportive in Campania</Link></li>
          <li><Link to="/scommesse-sportive-online-adm" className="text-gold hover:underline">Scommesse sportive online ADM</Link></li>
          <li><Link to="/migliori-siti-scommesse-adm" className="text-gold hover:underline">Migliori siti scommesse ADM</Link></li>
          <li><Link to="/scommesse-serie-a-guida" className="text-gold hover:underline">Guida alle scommesse sulla Serie A</Link></li>
          <li><Link to="/come-leggere-quote-calcio" className="text-gold hover:underline">Come si leggono le quote del calcio</Link></li>
          <li><Link to="/gioco-responsabile" className="text-gold hover:underline">Gioco responsabile e strumenti di tutela</Link></li>
        </ul>
      </section>
      <InternalCtaLinks />
    </GuideArticle>
  ),
});
