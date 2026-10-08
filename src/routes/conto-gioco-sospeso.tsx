import { createFileRoute } from "@tanstack/react-router";
import {
  GuideArticle,
  guideHead,
  SeoTable,
  InternalCtaLinks,
  type GuideConfig,
} from "@/components/guide-article";
import { OperatorCardsGrid } from "@/components/operator-cards";

const CFG: GuideConfig = {
  path: "/conto-gioco-sospeso",
  title: "Conto gioco sospeso o bloccato: cause e come sbloccarlo (2026)",
  h1: "Conto gioco sospeso o bloccato: perché succede e cosa fare per sbloccarlo",
  description:
    "Conto gioco sospeso su un casinò ADM? Le cause più comuni, i documenti da inviare, il messaggio da scrivere all'assistenza, cosa succede al saldo e come fare reclamo. +18.",
  keywords:
    "conto gioco sospeso, conto gioco bloccato, conto snai sospeso, conto sisal bloccato, conto lottomatica sospeso, sbloccare conto gioco, conto gioco sospeso cosa fare",
  eyebrow: "Guida pratica",
  breadcrumb: "Conto gioco sospeso",
  sections: [
    {
      id: "risposta-rapida",
      label: "Risposta rapida",
      h2: "In breve: cosa fare se il conto gioco è sospeso",
      paragraphs: [
        "Nella grande maggioranza dei casi un conto gioco viene sospeso perché l'operatore deve completare una verifica: identità non ancora convalidata, dati anagrafici non coincidenti o un controllo previsto dalla normativa antiriciclaggio. La sospensione non cancella il saldo: il denaro resta sul conto finché la verifica non si chiude.",
        "La via più rapida è quasi sempre la stessa: leggere il messaggio o l'email dell'operatore, inviare esattamente i documenti richiesti dalla sezione del conto e scrivere all'assistenza indicando nome utente e data della sospensione.",
      ],
      bullets: [
        "Controlla email, notifiche e area personale: spesso il motivo è già indicato",
        "Invia documenti leggibili, in corso di validità e intestati al titolare",
        "Scrivi all'assistenza con nome utente, data e richiesta di chiarimento",
        "Conserva ogni risposta: serve se poi devi presentare reclamo",
      ],
    },
    {
      id: "cause",
      label: "Cause",
      h2: "Le cause più frequenti di sospensione",
      paragraphs: [
        "Sui siti con concessione ADM l'apertura del conto è legata all'identità reale del giocatore. Per questo quasi tutte le sospensioni dipendono da un dato che l'operatore non riesce a confermare o da un'attività che deve approfondire.",
      ],
      bullets: [
        "Documento d'identità non caricato o non convalidato entro i termini indicati dall'operatore",
        "Nome, codice fiscale o data di nascita non coincidenti con il documento",
        "Metodo di pagamento intestato a una persona diversa dal titolare del conto",
        "Più conti aperti dalla stessa persona presso lo stesso operatore",
        "Accessi o movimenti anomali che richiedono un controllo di sicurezza",
        "Verifiche antiriciclaggio su depositi o prelievi di importo rilevante",
        "Autoesclusione attiva o limiti impostati dallo stesso giocatore",
      ],
    },
    {
      id: "come-sbloccare",
      label: "Come sbloccarlo",
      h2: "Procedura passo passo per sbloccare il conto",
      paragraphs: [
        "1. Individua il motivo. Entra nell'area personale e cerca avvisi, richieste di documenti o messaggi in casella. Se non trovi nulla, contatta l'assistenza via chat o email e chiedi per iscritto il motivo della sospensione.",
        "2. Invia i documenti corretti. Di solito servono fronte e retro di un documento valido e il codice fiscale; in alcuni casi una prova di titolarità del metodo di pagamento. Le foto devono essere nitide, intere e senza riflessi.",
        "3. Scrivi un messaggio chiaro. Un testo utile: «Buongiorno, il mio conto (nome utente: …) risulta sospeso dal giorno …. Ho caricato i documenti richiesti in data …. Vi chiedo di indicarmi il motivo della sospensione e i tempi previsti per la verifica. Grazie.»",
        "4. Attendi la risposta e conserva tutto. I tempi dipendono dal tipo di verifica: un controllo documentale è spesso breve, un approfondimento antiriciclaggio può richiedere più tempo.",
      ],
    },
    {
      id: "saldo",
      label: "Saldo",
      h2: "Cosa succede ai soldi sul conto sospeso",
      paragraphs: [
        "La sospensione blocca temporaneamente gioco e prelievi, ma il saldo resta di tua proprietà. Una volta conclusa positivamente la verifica il conto torna operativo; se decidi di chiuderlo puoi chiedere la liquidazione del saldo disponibile secondo le condizioni contrattuali dell'operatore.",
        "I bonus non ancora sbloccati seguono invece le regole della promozione: in caso di violazione dei termini (per esempio conti multipli) l'operatore può annullarli.",
      ],
    },
    {
      id: "reclamo",
      label: "Reclamo",
      h2: "Se l'assistenza non risponde: reclamo e segnalazione ad ADM",
      paragraphs: [
        "Se dopo un tempo ragionevole non ricevi spiegazioni, invia un reclamo formale tramite il canale indicato nelle condizioni del conto gioco, allegando le comunicazioni precedenti. Ogni concessionario ADM è tenuto a gestire i reclami dei giocatori.",
        "Se il reclamo non porta a una soluzione, puoi segnalare la questione all'Agenzia delle Dogane e dei Monopoli tramite i canali indicati sul sito ufficiale adm.gov.it, specificando operatore, numero di concessione e cronologia dei contatti.",
      ],
    },
  ],
  faqs: [
    {
      q: "Quanto dura la sospensione di un conto gioco?",
      a: "Dipende dal motivo. Se manca solo un documento, il conto torna attivo di norma poco dopo la convalida. Controlli di sicurezza o antiriciclaggio richiedono più tempo. L'operatore deve comunque indicarti cosa serve per concludere la verifica.",
    },
    {
      q: "Perdo i soldi se il conto viene sospeso?",
      a: "No: il saldo reale resta tuo. Durante la sospensione non puoi giocare né prelevare, ma a verifica conclusa puoi usarlo o chiederne la liquidazione. Eventuali bonus seguono invece le regole della promozione.",
    },
    {
      q: "Posso aprire un conto su un altro casinò mentre il primo è sospeso?",
      a: "Sì, se non hai un'autoesclusione attiva: ogni concessionario ADM gestisce i propri conti. L'autoesclusione dal Registro unico ADM vale invece per tutti gli operatori e va rispettata.",
    },
    {
      q: "Perché mi chiedono la foto della carta o la prova del metodo di pagamento?",
      a: "Per confermare che il metodo usato sia intestato al titolare del conto. È un controllo previsto contro frodi e riciclaggio: copri le cifre centrali della carta lasciando visibili nome e ultime quattro cifre, se l'operatore lo consente.",
    },
    {
      q: "Lo SPID evita la sospensione per documenti?",
      a: "La registrazione con SPID o CIE consente in genere di convalidare subito l'identità, riducendo il rischio di blocchi per documenti mancanti. Non esclude però controlli di sicurezza o antiriciclaggio successivi.",
    },
    {
      q: "A chi mi rivolgo se l'operatore non risponde?",
      a: "Prima al canale reclami dell'operatore, conservando le comunicazioni. In seconda battuta puoi segnalare il caso ad ADM tramite i contatti indicati su adm.gov.it.",
    },
  ],
};

export const Route = createFileRoute("/conto-gioco-sospeso")({
  head: () => guideHead(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Motivo della sospensione e cosa fare"
        headers={["Motivo", "Cosa fare", "Tempi indicativi"]}
        rows={[
          ["Documento mancante o scaduto", "Caricare un documento valido dall'area personale", "Brevi, dopo la convalida"],
          ["Dati non coincidenti", "Chiedere la correzione all'assistenza con documento allegato", "Variabili"],
          ["Metodo intestato a terzi", "Usare solo metodi intestati al titolare", "Variabili"],
          ["Controllo di sicurezza", "Rispondere alle richieste dell'operatore", "Da giorni a settimane"],
          ["Verifica antiriciclaggio", "Fornire la documentazione richiesta", "Più lunghi"],
        ]}
      />
      <h2 className="mt-10 font-display text-2xl font-semibold">Casinò ADM con registrazione rapida via SPID</h2>
      <p className="mt-2 text-muted-foreground">
        Se vuoi un conto con identità convalidata fin dall'inizio, questi operatori con concessione ADM permettono la
        registrazione con SPID o CIE. Gioca solo se maggiorenne e con moderazione.
      </p>
      <div className="mt-6">
        <OperatorCardsGrid limit={3} />
      </div>
      <InternalCtaLinks />
    </GuideArticle>
  ),
});
