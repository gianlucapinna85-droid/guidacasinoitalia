# Pilota: scheda operatore ad alta profondità (Goldbet)

## La decisione che hai delegato: il blog

Metto in pausa i 92 articoli restanti. Motivo concreto: oggi 62 delle 63 pagine
del sito risultano "sconosciute a Google", e in 3 mesi solo 3 pagine sono mai
comparse nei risultati. Aggiungere 92 pagine costruite sullo stesso template
peggiora il rapporto qualità/quantità proprio mentre Google sta decidendo quanto
vale la pena esplorare il sito. Gli 8 articoli già pubblicati restano online.

Riprenderemo con 10-15 pezzi davvero differenzianti solo dopo che le schede
operatore avranno iniziato a portare impression.

## Perché si parte dalle schede operatore

Dati Semrush (mercato italiano):

| Query | Volume | Difficoltà |
|---|---|---|
| migliori casino online | 9.900/mese | 100/100 |
| bonus immediato senza deposito e senza documento | 6.600/mese | 72/100 |
| goldbet verifica documenti | 20/mese | 0/100 |
| snai prelievo tempi | 20/mese | 0/100 |

Le head keyword sono fuori portata con autorità 0. Le domande operative per
operatore sono a difficoltà 0: singolarmente piccole, ma sono 15 operatori per
5-6 domande ricorrenti ciascuno, con intento altissimo (chi cerca "quanto tempo
per il prelievo" ha già un conto o sta per aprirlo).

## Cosa faccio nel pilota

Una sola scheda, `/operatori/goldbet`, ricostruita da pagina descrittiva a
pagina di riferimento operativo.

Contenuti nuovi, tutti verificabili:

- **Tabella prelievi**: per ogni metodo (carta, bonifico, PayPal, Skrill,
  contanti in ricevitoria) importo minimo, massimo nelle 24 ore e tempi di
  accredito dichiarati.
- **Verifica documenti**: documenti accettati, come si inviano, cosa blocca
  l'approvazione, cosa si può fare prima della verifica.
- **Depositi**: metodi, minimi, commissioni.
- **Limiti e autotutela**: limiti impostabili, autoesclusione, RUA.
- **Assistenza**: canali reali e orari.
- **FAQ operative** costruite sulle query effettive, non generiche.

Ogni dato riporta la fonte ufficiale (help center dell'operatore) e la data di
verifica. Dove un dato non è pubblicamente documentato, la tabella dice "non
dichiarato" invece di stimare.

## Come raccolgo i dati

Ricerca sulle fonti ufficiali: help center e pagine di assistenza
dell'operatore, termini e condizioni del conto di gioco, elenco concessionari
ADM per numero di concessione e ragione sociale. Nessun dato inventato, nessun
valore copiato da altri siti affiliati.

## Dettagli tecnici

- Estensione del tipo dati in `src/lib/operator-review.ts` (o nuovo
  `src/data/operator-facts.ts`) con struttura per metodi di pagamento, tempi,
  limiti, verifica e fonti — così le altre 14 schede si compilano poi con lo
  stesso schema.
- Nuovi componenti tabella riusabili nella scheda operatore.
- `head()` della rotta `/operatori/$slug` con title e description specifici per
  operatore, e schema JSON-LD `FAQPage` aggiunto a quelli già presenti.
- La pagina è già in sitemap e nel flusso IndexNow/Search Console: nessuna
  modifica all'indicizzazione.

## Come misuriamo

Dopo la pubblicazione controllo in Search Console che l'URL passi da
"sconosciuta a Google" a indicizzata, e le prime impression sulle query
operative. Se funziona, replico lo schema sulle altre 14 schede; se in 3-4
settimane la pagina non viene nemmeno indicizzata, il collo di bottiglia è
l'autorità del dominio e passiamo prima alla diversificazione dei link esterni.

## Fuori da questo intervento

Pulizia metadati duplicati, rimozione dei link sitewide alle pagine `/provider`
e revisione dei link da pronostici-vincenti.it: restano salvate come
opportunità 2 e 3, le affrontiamo dopo il pilota.
