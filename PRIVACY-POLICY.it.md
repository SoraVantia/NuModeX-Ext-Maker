# Informativa sulla Privacy

[English](PRIVACY-POLICY.md) | [日本語](PRIVACY-POLICY.ja.md) | [Español](PRIVACY-POLICY.es.md) | [Français](PRIVACY-POLICY.fr.md) | [한국어](PRIVACY-POLICY.ko.md) | [中文](PRIVACY-POLICY.zh.md) | [Deutsch](PRIVACY-POLICY.de.md) | [Português](PRIVACY-POLICY.pt.md) | [Italiano](PRIVACY-POLICY.it.md)

> **Nota:** Questa traduzione è fornita esclusivamente a scopo informativo. In caso di discrepanze tra questa traduzione e la versione inglese, la versione inglese prevarrà e sarà giuridicamente vincolante.

**NuModeX Ext Maker — Un prodotto di SoraVantia GK**

Data di entrata in vigore: 15 marzo 2026
Ultimo aggiornamento: 15 marzo 2026

Sito web: https://numodex.com/numodexextmaker
URL dell'Informativa sulla Privacy: https://numodex.com/numodexextmaker/privacy

## 1. Introduzione

La presente Informativa sulla Privacy descrive come NuModeX Ext Maker ("Servizio", "Estensione" o "Software"), sviluppato da SoraVantia GK ("SoraVantia GK", "noi" o "nostro"), gestisce le tue informazioni. Ci impegniamo a proteggere la tua privacy.

NuModeX Ext Maker è un'estensione del browser che funziona interamente nel tuo browser. Non operiamo server, database o infrastruttura cloud per questo prodotto. Non raccogliamo, riceviamo, memorizziamo né abbiamo accesso ai tuoi dati.

## 2. Informazioni che raccogliamo

**Non raccogliamo alcun dato.** SoraVantia GK non raccoglie, riceve, memorizza né elabora alcuna informazione personale o dato di utilizzo dagli utenti di NuModeX Ext Maker. Non abbiamo server backend, analisi, telemetria né alcun tipo di tracciamento.

## 3. Informazioni memorizzate localmente sul tuo dispositivo

NuModeX Ext Maker memorizza dati localmente nel tuo browser utilizzando le API di archiviazione standard del browser. Questi dati non lasciano mai il tuo dispositivo e non vengono mai trasmessi a SoraVantia GK né a terze parti sotto il nostro controllo.

### 3.1 Chrome Storage API (chrome.storage.local)

I seguenti dati vengono memorizzati utilizzando l'API di archiviazione integrata di Chrome:

- **Chiave API** — La tua chiave API del fornitore di IA, inserita da te. Memorizzata localmente e utilizzata solo per autenticare le richieste al fornitore di IA selezionato.
- **Stato di accettazione dell'EULA** — Se hai accettato i Termini di Servizio e quale versione.
- **Preferenze dell'interfaccia** — La lingua selezionata e l'impostazione della modalità scura.
- **Modello IA selezionato** — L'ultimo modello IA selezionato dal menu a discesa.
- **Configurazione del modello personalizzato** — L'URL dell'endpoint del server IA personalizzato, il nome del modello e la chiave API opzionale, se configurato.

### 3.2 IndexedDB (tramite Dexie.js)

I seguenti dati vengono memorizzati utilizzando IndexedDB, un database locale del browser:

- **Progetti** — I tuoi progetti salvati, inclusi nomi dei progetti, file di estensione generati (codice sorgente), cronologia delle conversazioni con l'IA e timestamp.
- **Cronologia annullamenti** — Stati precedenti dei file per la funzione di annullamento, memorizzati per progetto.

### 3.3 Come eliminare i dati memorizzati localmente

Puoi eliminare tutti i dati memorizzati localmente in qualsiasi momento:

- Disinstallando l'estensione (rimuove automaticamente tutti i dati)
- Cancellando i dati dell'estensione del browser nelle impostazioni del browser
- Utilizzando il pulsante "Elimina chiave" nell'estensione per rimuovere la chiave API memorizzata
- Utilizzando il pulsante "Elimina" nel selettore progetti per rimuovere progetti individuali
- Utilizzando il pulsante "Ricomincia" per cancellare il contenuto del progetto corrente

## 4. Informazioni trasmesse a terze parti

### 4.1 Fornitori di API di IA

Quando utilizzi NuModeX Ext Maker per generare, modificare o discutere di estensioni del browser, il testo delle tue istruzioni e la cronologia delle conversazioni vengono trasmessi direttamente dal tuo browser al fornitore di IA selezionato. Questa trasmissione avviene tramite l'API del fornitore di IA utilizzando la tua chiave API.

I fornitori di IA che possono ricevere i dati delle tue istruzioni includono:

- **Google** (Gemini API) — Soggetto ai Termini di Servizio dell'API di Google e alla sua Informativa sulla Privacy
- **OpenAI** (modelli GPT) — Soggetto ai Termini d'Uso dell'API di OpenAI e alla sua Informativa sulla Privacy
- **Anthropic** (modelli Claude) — Soggetto ai Termini di Servizio dell'API di Anthropic e alla sua Informativa sulla Privacy

**Importante:**

- SoraVantia GK non agisce come intermediario in queste trasmissioni. Il tuo browser comunica direttamente con i server del fornitore di IA.
- SoraVantia GK non ha accesso, non registra né monitora alcun dato che invii ai fornitori di IA.
- La tua chiave API viene inviata direttamente al fornitore di IA per l'autenticazione. SoraVantia GK non riceve né vede mai la tua chiave API.
- I dati inviati ai fornitori di IA includono le tue istruzioni testuali, la cronologia delle conversazioni e le immagini allegate. Non includono la memorizzazione della chiave API, le preferenze dell'interfaccia o altre impostazioni locali.
- L'utilizzo dei servizi di IA di terze parti è regolato dalle rispettive informative sulla privacy e termini di servizio. Ti incoraggiamo a consultare tali politiche.

### 4.2 Modelli di IA sul dispositivo

Se utilizzi modelli di IA sul dispositivo (come Gemini Nano su Chrome o Phi-4 Mini su Edge), le tue istruzioni vengono elaborate interamente sul tuo dispositivo. Nessun dato viene trasmesso a server esterni per l'utilizzo di modelli sul dispositivo.

### 4.3 Server IA personalizzati / locali

È possibile configurare un endpoint del server IA personalizzato (ad esempio un server ospitato localmente sulla propria macchina o rete locale). Quando si utilizza un endpoint personalizzato:

- Le istruzioni e la cronologia delle conversazioni vengono inviate direttamente all'indirizzo del server configurato.
- SoraVantia GK non ha conoscenza, controllo o responsabilità per gli endpoint personalizzati.
- Se si configura un server locale (ad esempio in esecuzione su localhost), i dati rimangono interamente sulla propria macchina.
- Se si configura un server remoto, i dati vengono inviati a quel server. L'utente è responsabile della comprensione delle pratiche sulla privacy di qualsiasi server personalizzato a cui si connette.
- L'URL dell'endpoint personalizzato, il nome del modello e la chiave API opzionale sono memorizzati localmente nel browser tramite chrome.storage.local.

### 4.4 Nessun'altra trasmissione a terze parti

NuModeX Ext Maker non trasmette dati a:

- Server di SoraVantia GK (non ne abbiamo per questo prodotto)
- Servizi di analisi (nessuno è utilizzato)
- Reti pubblicitarie (nessuna è utilizzata)
- Piattaforme di social media
- Qualsiasi altra terza parte non elencata nelle Sezioni 4.1 e 4.3

## 5. Cookie e tracciamento

NuModeX Ext Maker non utilizza cookie, web beacon, pixel o altre tecnologie di tracciamento. Non tracciamo la tua attività di navigazione, i tuoi modelli di utilizzo o il tuo comportamento.

## 6. Privacy dei minori

NuModeX Ext Maker non è destinato a minori di 16 anni. Non raccogliamo consapevolmente informazioni da minori. Come indicato nei nostri Termini di Servizio, gli utenti devono avere almeno 16 anni per utilizzare il Software. Poiché non raccogliamo alcun dato, non vi è alcun rischio di raccogliere inavvertitamente dati di minori.

## 7. Sicurezza dei dati

Poiché tutti i dati sono memorizzati localmente nel tuo browser e non riceviamo né memorizziamo alcun dato utente, la sicurezza dei tuoi dati dipende da:

- La sicurezza del tuo dispositivo e browser
- La tua gestione delle chiavi API del tuo fornitore di IA
- I meccanismi di protezione dei dati integrati nel tuo browser

Raccomandiamo:

- Di eliminare o disattivare la chiave API quando non è in uso
- Di non condividere il dispositivo o il profilo del browser con persone non fidate
- Di mantenere aggiornati il browser e il sistema operativo

## 8. I tuoi diritti

### 8.1 Diritti generali

Poiché SoraVantia GK non raccoglie né memorizza alcun dato, i tradizionali diritti dell'interessato (accesso, rettifica, cancellazione, portabilità) vengono esercitati direttamente sul tuo dispositivo:

- **Accesso** — Tutti i tuoi dati sono visibili nell'interfaccia dell'estensione (progetti, file, cronologia delle conversazioni).
- **Cancellazione** — Elimina progetti individuali, cancella la chiave API o disinstalla l'estensione per rimuovere tutti i dati.
- **Portabilità** — I file di estensione generati possono essere scaricati come ZIP in qualsiasi momento.

### 8.2 Spazio Economico Europeo (GDPR)

Se ti trovi nello SEE, hai diritti ai sensi del Regolamento Generale sulla Protezione dei Dati. Poiché non raccogliamo né elaboriamo i tuoi dati personali, questi diritti sono intrinsecamente soddisfatti. Non è necessario un accordo di trattamento dei dati con noi perché nessun dato viene trasmesso a noi.

### 8.3 California (CCPA/CPRA)

Se sei residente in California, hai diritti ai sensi del California Consumer Privacy Act. Non vendiamo, condividiamo né divulghiamo informazioni personali perché non ne raccogliamo. Non ci sono informazioni personali da vendere, condividere o divulgare.

### 8.4 Giappone (APPI)

SoraVantia GK è una società giapponese soggetta alla Legge sulla Protezione delle Informazioni Personali. Poiché non raccogliamo, memorizziamo né elaboriamo dati personali tramite NuModeX Ext Maker, nessun obbligo APPI deriva dal tuo utilizzo di questo prodotto.

## 9. Modifiche alla presente Informativa sulla Privacy

Potremmo aggiornare la presente Informativa sulla Privacy di tanto in tanto. Se apportiamo modifiche sostanziali, aggiorneremo la data di "Ultimo aggiornamento" nella parte superiore di questo documento. Ti incoraggiamo a consultare periodicamente la presente Informativa sulla Privacy.

Se una modifica altera sostanzialmente il modo in cui i dati vengono gestiti (ad esempio, se una versione futura introduce analisi o elaborazione lato server), informeremo gli utenti tramite l'interfaccia dell'estensione prima che la modifica entri in vigore.

## 10. Trasparenza open source

NuModeX Ext Maker è rilasciato con doppia licenza Apache License 2.0 e Marketplace Publication License. Il codice sorgente è disponibile pubblicamente, consentendo a chiunque di verificare le nostre pratiche sulla privacy ispezionando direttamente il codice.

## 11. Contattaci

Per domande o dubbi sulla presente Informativa sulla Privacy, contattaci:

**SoraVantia GK**
Email: numodex@soravantia.com
Sito web: https://numodex.com/numodexextmaker

## 12. Riepilogo

| Domanda | Risposta |
|---------|----------|
| Raccogliete dati personali? | No |
| Utilizzate cookie o tracciamento? | No |
| Avete un server backend? | No |
| Dove sono memorizzati i miei dati? | Solo localmente nel tuo browser |
| Chi può vedere i miei dati? | Solo tu, sul tuo dispositivo |
| I dati vengono inviati a SoraVantia GK? | No, mai |
| I dati vengono inviati ai fornitori di IA? | Sì, le tue istruzioni vengono inviate direttamente al fornitore di IA selezionato, utilizzando la tua chiave API |
| Posso eliminare i miei dati? | Sì, disinstallando l'estensione o utilizzando le opzioni di eliminazione nell'app |
| Vendete dati? | No |
| Il codice sorgente è disponibile? | Sì, con doppia licenza Apache License 2.0 e Marketplace Publication License |

---

Copyright 2026 SoraVantia GK. All rights reserved.
