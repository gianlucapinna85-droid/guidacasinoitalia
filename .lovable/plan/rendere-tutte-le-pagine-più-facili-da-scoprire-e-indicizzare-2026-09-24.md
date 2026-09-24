# Rendere tutte le pagine più facili da scoprire e indicizzare

## Risultato atteso
Google deve poter raggiungere direttamente ogni pagina pubblica importante, riconoscere date editoriali attendibili e ricevere una sitemap aggiornata con segnali coerenti. Non verranno create altre pagine riempitive.

## Interventi

1. **Creare una mappa del sito HTML realmente navigabile**
   - Aggiungere `/mappa-sito` con collegamenti normali e raggruppati a recensioni, guide, articoli, news, slot e metodi di pagamento.
   - Collegarla stabilmente nel fondo di ogni pagina.
   - Inserirla nella sitemap XML principale.
   - In questo modo ogni indirizzo indicizzabile sarà raggiungibile dalla struttura globale in non più di due passaggi.

2. **Rafforzare i collegamenti verso le pagine oggi sconosciute a Google**
   - Rendere esplicito il percorso Home → Recensioni → singolo operatore.
   - Mantenere Blog → categoria → articolo e aggiungere accesso dalla mappa HTML ai nuovi articoli.
   - Usare esclusivamente gli indirizzi canonici `/operatori/...`; nessun nuovo rimando o duplicato `/casino/...`.

3. **Correggere i segnali di aggiornamento artificiali**
   - Non dichiarare più che ogni guida, recensione e news è stata pubblicata o modificata alla data di ogni nuova pubblicazione del sito.
   - Per blog e news usare le date editoriali già presenti nei contenuti.
   - Per le recensioni usare la data di verifica reale quando disponibile; altrimenti omettere la data invece di inventarla.
   - Allineare anche `lastmod` delle sitemap alle sole date reali disponibili.

4. **Verifica completa prima della pubblicazione**
   - Controllare che tutte le URL della sitemap rispondano direttamente `200`, senza redirect, `noindex` o canonical discordanti.
   - Controllare che la nuova mappa HTML contenga tutte le URL indicizzabili e sia presente nell'HTML iniziale.
   - Verificare su telefono e computer che l'elenco resti leggibile.
   - Eseguire i controlli del progetto e il controllo SEO esistente.

5. **Dopo la pubblicazione**
   - Reinviare una sola volta `https://www.guidacasino-italia.it/sitemap.xml` a Google.
   - Ricontrollare con Google le pagine campione oggi sconosciute: `/operatori/goldbet` e il nuovo articolo sull'intelligenza artificiale.
   - Questo elimina gli ostacoli tecnici e migliora la scoperta; Google mantiene comunque la decisione finale e i tempi di inserimento nell'indice.

## Dettagli tecnici
- Riutilizzare il registro centrale delle URL già usato dalle sitemap, evitando due elenchi separati che potrebbero divergere.
- Conservare il dominio canonico `https://www.guidacasino-italia.it` e gli attuali redirect intenzionali.
- Non modificare testi commerciali, widget, DNS, email, login o dati degli operatori.
