[English](getting-started-en-3-26-2026.md) | [日本語](getting-started-ja-3-26-2026.md) | [Español](getting-started-es-3-26-2026.md) | [Français](getting-started-fr-3-26-2026.md) | [한국어](getting-started-ko-3-26-2026.md) | [中文](getting-started-zh-3-26-2026.md) | [Deutsch](getting-started-de-3-26-2026.md) | [Português](getting-started-pt-3-26-2026.md)

# Guida Introduttiva di NuModeX Ext Maker

Questa guida ti accompagna nella configurazione, nella prima compilazione e nei problemi comuni con piu dettagli rispetto al README.

## Prerequisiti

- Un browser basato su Chromium (Chrome, Edge, Brave, Whale) o Firefox
- Una chiave API di almeno un fornitore di IA cloud - non necessaria se usi modelli su dispositivo
- Conoscenza di base delle estensioni del browser (utile ma non obbligatoria)

## Configurazione dei Modelli Cloud

### 1. Installare l'estensione

**Dai negozi di estensioni del browser (prossimamente):**
NuModeX Ext Maker non e ancora disponibile su nessun negozio di estensioni del browser. La disponibilita nei negozi sara annunciata su [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) e tramite GitHub Releases.

**Dal codice sorgente (modalita sviluppatore):**
1. Clona o scarica il repository.
2. Apri `chrome://extensions` (o l'equivalente per il tuo browser).
3. Attiva la modalita sviluppatore.
4. Clicca su "Carica estensione non compressa" e seleziona la cartella del browser appropriata (`browsers/chrome`, `browsers/edge` o `browsers/firefox`).

### 2. Ottenere la chiave API

Hai bisogno di una chiave API di almeno un fornitore di IA cloud supportato. Visita la console sviluppatore o la piattaforma API del tuo fornitore per generare una chiave. La chiave di ogni fornitore viene salvata separatamente nell'estensione - puoi passare da un fornitore all'altro liberamente.

### 3. Configurare e costruire

1. Accetta i Termini di Servizio (appare automaticamente al primo avvio).
2. Clicca sull'icona Impostazioni nel popup dell'estensione.
3. Incolla la tua chiave API e clicca su "Salva chiave".
4. Seleziona un modello di IA dal menu a tendina.
5. Descrivi cosa vuoi costruire nella chat.
6. Clicca su "Costruisci Estensione" o "Costruisci Sito Web" e attendi la generazione.
7. Rivedi e modifica i file generati secondo necessita usando gli strumenti di modifica integrati.
8. Clicca su "Scarica tutto come ZIP".
9. Per le estensioni: Estrai lo ZIP, vai a `chrome://extensions`, attiva la modalita sviluppatore e clicca su "Carica estensione non compressa". Per i siti web: Estrai e apri `index.html` nel tuo browser.

> **Altri browser:** Le estensioni generate sono Manifest V3 e compatibili con Edge, Brave, Whale e altri browser basati su Chromium. I passaggi per il caricamento laterale variano in base al browser.

## Configurazione dei Modelli su Dispositivo

I modelli su dispositivo funzionano interamente sul tuo hardware senza bisogno di chiave API o connessione cloud. **Questi modelli sono disponibili solo in browser specifici:** Gemini Nano in Google Chrome e Phi-4 Mini in Microsoft Edge. Altri browser basati su Chromium (Brave, Whale, ecc.) e Firefox non supportano attualmente l'IA su dispositivo tramite le API del browser.

**Differenze chiave rispetto ai modelli cloud:**
- I modelli su dispositivo possono essere usati solo per **chat e modifica dei file**, non per compilazioni complete.
- Il modello deve essere scaricato al primo utilizzo (potrebbe richiedere diversi minuti).
- I requisiti hardware sono rigorosi - verifica prima di tentare la risoluzione dei problemi.

### Chrome - Gemini Nano

1. Usa Chrome versione 127 o superiore (Dev o Canary consigliato per i migliori risultati).
2. Vai a `chrome://flags/#optimization-guide-on-device-model` e imposta su **Enabled BypassPerfRequirement**.
3. Vai a `chrome://flags/#prompt-api-for-gemini-nano` e imposta su **Enabled**.
4. Riavvia Chrome.
5. Vai a `chrome://on-device-internals` e verifica lo stato del modello. Se il modello non e scaricato, vai a `chrome://components/`, trova **Optimization Guide On Device Model** e clicca su **Check for update**.
6. Attendi il download del modello. Potrebbe richiedere diversi minuti. Mantieni Chrome aperto durante il download.

### Edge - Phi-4 Mini

1. Usa Edge Dev o Canary (versione 138+). Edge 139+ include Phi-4 Mini per impostazione predefinita.
2. Vai a `edge://flags/` e cerca **Prompt API for Phi mini**, imposta su **Enabled**.
3. Facoltativamente, attiva **Enable on device AI model debug logs** per la risoluzione dei problemi.
4. Riavvia Edge.
5. Vai a `edge://on-device-internals` e verifica che la tua **Device performance class** sia **High** o superiore.
6. Il modello viene scaricato automaticamente al primo utilizzo. Potrebbe richiedere diversi minuti. Mantieni Edge aperto durante il download.

### Requisiti hardware

**Edge:** Windows 10/11 o macOS 13.3+, almeno 20 GB di spazio libero, 5,5 GB+ di VRAM e una connessione internet non a consumo.

**Chrome:** 22 GB di spazio libero, piu di 4 GB di VRAM (GPU) o 16 GB+ di RAM con 4+ core CPU (modalita CPU) e una connessione non a consumo.

> **Nota:** I modelli su dispositivo possono essere usati solo per la chat e la modifica dei file. Per costruire estensioni o siti web completi, seleziona un modello cloud.

## Comprendere le modalita di compilazione

NuModeX Ext Maker ha due modalita di compilazione:

**Costruisci Estensione** - Genera un'estensione del browser Manifest V3 completa con manifest.json, file popup, script di contenuto e altri file necessari.

**Costruisci Sito Web** - Genera un sito web statico completo con file HTML, CSS e JavaScript.

Entrambe le modalita usano la stessa interfaccia di chat. L'IA legge l'intera cronologia della conversazione durante la generazione, quindi puoi perfezionare i tuoi requisiti attraverso piu messaggi prima di compilare.

## Revisione dei file generati

Dopo il completamento di una compilazione, il pannello destro dell'estensione mostra i file generati.

**Albero dei file** - Tutti i file generati appaiono in un elenco cliccabile nella parte superiore del pannello destro. Clicca su qualsiasi file per visualizzarne il contenuto. I file sono organizzati per nome, inclusi i percorsi delle sottodirectory (ad esempio, `assets/style.css`).

**Visualizzatore di codice** - Quando selezioni un file, il suo contenuto appare nel visualizzatore di codice sotto l'albero dei file con evidenziazione della sintassi. Il visualizzatore rileva automaticamente il tipo di file (JavaScript, JSON, HTML, CSS, Markdown) e applica l'evidenziazione appropriata. Puoi copiare il contenuto di qualsiasi file negli appunti usando il pulsante Copia.

**Modifica manuale** - Clicca sull'interruttore di modifica sopra il visualizzatore di codice per passare alla modalita di modifica manuale. Il visualizzatore di codice diventa un editor di testo dove puoi apportare modifiche direttamente a mano. Clicca di nuovo sull'interruttore per uscire dalla modalita di modifica manuale.

**Anteprima dal vivo** - Per vedere un'anteprima visuale della tua estensione o sito web, clicca su Altro (▾) > Anteprima. Si apre un modale con un'anteprima sandboxata che renderizza il tuo popup.html (per le estensioni) o index.html (per i siti web). L'anteprima integra automaticamente i tuoi file CSS e JavaScript per il corretto rendering. Nota che questa e un'anteprima solo visuale - le API delle estensioni del browser (come chrome.tabs, chrome.storage) e le risorse esterne non funzioneranno nell'anteprima. Se il tuo progetto non ha popup.html ne index.html, l'anteprima mostrera un messaggio informativo.

**Visualizza modifiche** - Dopo una modifica con IA, clicca su Visualizza modifiche per vedere un confronto prima e dopo di cio che e stato modificato. Puoi alternare tra vista unificata e vista affiancata. Se sono stati modificati piu file, le schede in alto ti permettono di passare da uno all'altro.

## Modifica dopo la compilazione

Dopo la prima compilazione, hai diverse opzioni di modifica:

**Modifica File** - Seleziona un singolo file e descrivi le modifiche. Ideale per correzioni mirate.

**Aggiungi File** - Crea un nuovo file e descrivi cosa deve contenere.

**Migliora Estensione** - Descrivi modifiche su tutto il progetto. L'IA puo modificare piu file contemporaneamente.

**Modifica Manuale** - Clicca direttamente nel visualizzatore di codice per modificare il codice a mano.

**Annulla** - Ripristina l'ultima modifica IA. E disponibile solo un livello di annullamento.

## Scegliere il modello giusto

Invece di consigliare modelli specifici (che cambiano frequentemente), ecco come scegliere in base a cio che conta:

**Dimensione della finestra di contesto** - Determina quanta cronologia della conversazione e codice il modello puo elaborare in una volta. Per estensioni semplici con pochi file, una finestra di contesto piccola e sufficiente. Per progetti complessi con piu file, scegli un modello con una finestra di contesto piu grande in modo che possa vedere tutti i tuoi file e la conversazione in una volta sola.

**Limite di token in uscita** - Determina quanto codice il modello puo generare in una singola risposta. Se vedi errori di analisi JSON o output troncato, passa a un modello con un limite di output maggiore. I progetti piu grandi necessitano di modelli che possano produrre piu token.

**Capacita di ragionamento** - Alcuni modelli sono migliori nella logica complessa, nelle istruzioni a piu passaggi e nel mantenimento della coerenza tra i file. Per estensioni semplici di popup, la maggior parte dei modelli funziona bene. Per estensioni con script di contenuto, worker in background e interazioni complesse, scegli un modello noto per il suo forte ragionamento.

**Costo** - I modelli piu grandi e capaci costano di piu per chiamata API. Inizia con un modello piu piccolo per la chat e le modifiche semplici, poi passa a un modello piu grande quando devi compilare o migliorare progetti complessi. I costi variano in base al modello e al fornitore di IA che selezioni. SoraVantia GK non e affiliata con alcun fornitore di IA e non controlla ne riceve alcuna parte delle tariffe API.

**Velocita** - I modelli piu piccoli rispondono piu velocemente. Se stai iterando rapidamente su piccole modifiche, un modello veloce fa risparmiare tempo. Per compilazioni complete dove la qualita conta piu della velocita, un modello piu grande vale l'attesa.

| Caso d'uso | Cosa cercare |
|----------|-----------------|
| Estensioni semplici (solo popup, piccoli script) | Qualsiasi modello con limiti di contesto e output moderati |
| Estensioni complesse (script di contenuto, worker in background, piu file) | Finestra di contesto grande, limite di output elevato, forte ragionamento |
| Domande rapide di chat e brainstorming | Qualsiasi modello - la velocita conta piu della dimensione dell'output |
| Modifiche a singolo file | Qualsiasi modello, incluso su dispositivo (gratuito, senza chiave API) |
| Sviluppo attento al budget | Modelli piccoli o medi per la chat, modelli grandi solo per le compilazioni |

Consulta la documentazione dei modelli del tuo fornitore di IA per le dimensioni attuali della finestra di contesto, i limiti di output e i prezzi.

## Consigli per i migliori risultati

- Inizia con una descrizione semplice e costruisci gradualmente. Descrivi prima la funzionalita principale, poi usa Modifica e Migliora per aggiungere piu funzionalita in modo incrementale.
- Usa un modello con una finestra di contesto piu grande per progetti complessi. I modelli piu grandi gestiscono output piu grandi meglio di quelli piu piccoli.
- Se vedi "Impossibile estrarre i file dell'estensione", il prompt era troppo complesso per una generazione. Semplifica il prompt iniziale e aggiungi funzionalita attraverso la modifica.
- Se vedi un errore di analisi JSON, la risposta del modello era troppo lunga ed e stata troncata. Prova un prompt piu semplice o passa a un modello con un limite di output maggiore.
- I modelli cloud, personalizzati e remoti possono tutti essere usati per costruire, modificare e chattare. Scegli il modello che meglio si adatta alle tue esigenze e al tuo budget.
- I modelli su dispositivo funzionano per la chat e la modifica ma non possono costruire estensioni o siti web completi. Usa un modello cloud o personalizzato per la costruzione.
- Invio per inviare un messaggio di chat. Shift+Invio per una nuova riga. Ctrl/Cmd+Invio per costruire un'estensione. Ctrl/Cmd+Shift+Invio per costruire un sito web.
- Dopo la costruzione, usa Modifica File per modifiche a singoli file e Migliora Estensione per modifiche su piu file.
- Importa file esistenti tramite Altro (▾) > Importa File per modificarli con l'IA.

## Risoluzione dei problemi

**Prima di tentare la risoluzione dei problemi, consulta le seguenti risorse:**
- La documentazione API del tuo fornitore di IA cloud per i limiti attuali del modello, i prezzi e lo stato del servizio.
- La documentazione per sviluppatori del tuo browser per i requisiti piu recenti dell'IA su dispositivo e i problemi noti.
- La sezione [Configurazione dei Modelli su Dispositivo](#configurazione-dei-modelli-su-dispositivo) sopra per i requisiti di flag e hardware.

### "Chiave API non configurata"
Apri le Impostazioni e incolla la tua chiave API per il fornitore selezionato. Ogni fornitore ha la propria chiave - assicurati di aver salvato la chiave del fornitore di cui hai selezionato il modello.

### "Impossibile estrarre i file dell'estensione"
La risposta dell'IA era troppo complessa o formattata in modo errato. Prova:
- A semplificare il tuo prompt (descrivi meno funzionalita alla volta)
- A passare a un modello con un limite di output maggiore
- A compilare prima una versione base, poi usare "Migliora Estensione" per aggiungere funzionalita

### "Errore di analisi JSON"
La risposta del modello era troppo lunga ed e stata troncata prima che il JSON potesse essere completato. Prova:
- Un prompt piu semplice
- Un modello con un limite di token in uscita maggiore

### Modello su dispositivo bloccato su "Download in corso"
Questo e un problema comune. Verifica:
1. **Requisiti hardware soddisfatti?** Vai a `edge://on-device-internals` (Edge) o `chrome://on-device-internals` (Chrome) e verifica la tua classe di dispositivo.
2. **Flag attivati?** Consulta la sezione [Configurazione dei Modelli su Dispositivo](#configurazione-dei-modelli-su-dispositivo) sopra.
3. **Spazio di archiviazione sufficiente?** Edge necessita di 20 GB liberi, Chrome necessita di 22 GB liberi.
4. **Connessione a consumo?** Il modello non verra scaricato su una connessione a consumo/con limite di dati.
5. **Il browser e rimasto aperto?** Il download si interrompe se chiudi il browser.
6. **Prova a riavviare il browser** e attendi 5-10 minuti.

### L'estensione non funziona dopo il caricamento
- Controlla la console del browser (`chrome://extensions` > clicca su "Errori" sulla tua estensione) per i messaggi di errore.
- Assicurati di aver caricato la cartella corretta (quella contenente manifest.json).
- Prova a rigenerare con un prompt piu dettagliato che specifichi il comportamento esatto.

### Il modello personalizzato non risponde
- Verifica che l'URL dell'endpoint sia corretto e raggiungibile.
- Conferma che il server supporti il formato API `/v1/chat/completions`.
- Verifica se il server richiede una chiave API e se ne hai fornita una.
- Concedi il permesso host dell'estensione quando richiesto.

## Scorciatoie da tastiera

| Scorciatoia | Azione |
|----------|--------|
| Invio | Inviare messaggio di chat |
| Shift+Invio | Nuova riga nella chat |
| Ctrl/Cmd+Invio | Costruisci Estensione |
| Ctrl/Cmd+Shift+Invio | Costruisci Sito Web |

## Prossimi passi

- Leggi il [README](README.it.md) per l'elenco completo delle funzionalita
- Consulta [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) per le informazioni sulle dipendenze
- Segnala bug o richiedi funzionalita tramite GitHub Issues
- Visita [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) per gli aggiornamenti
