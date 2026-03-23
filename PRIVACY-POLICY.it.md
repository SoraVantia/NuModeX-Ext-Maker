[English](privacy-policy-en-v2.5.md) | [日本語](privacy-policy-ja-v2.5.md) | [Español](privacy-policy-es-v2.5.md) | [Français](privacy-policy-fr-v2.5.md) | [한국어](privacy-policy-ko-v2.5.md) | [中文](privacy-policy-zh-v2.5.md) | [Deutsch](privacy-policy-de-v2.5.md) | [Português](privacy-policy-pt-v2.5.md)

# INFORMATIVA SULLA PRIVACY

> **Nota:** La presente Informativa sulla Privacy è redatta in lingua inglese. Le traduzioni in altre lingue sono fornite esclusivamente a scopo informativo. In caso di discrepanza tra la versione inglese e la versione italiana, la versione inglese prevarrà e sarà l'unica versione giuridicamente vincolante.

**NuModeX Ext Maker - Un prodotto di SoraVantia GK**
Data di entrata in vigore: 23 marzo 2026
Versione: 2.5

## AVVISO IMPORTANTE

La presente Informativa sulla Privacy spiega come NuModeX Ext Maker, sviluppato da SoraVantia GK, gestisce le informazioni dell'utente. In sintesi: NuModeX Ext Maker non raccoglie, archivia né trasmette alcun dato personale a SoraVantia GK. L'estensione non dispone di server backend, analisi, telemetria né codice di tracciamento. Tutto rimane nel browser dell'utente.

La presente Informativa sulla Privacy è redatta in lingua inglese. Le traduzioni in altre lingue sono fornite esclusivamente a scopo informativo. In caso di discrepanza tra la versione inglese e qualsiasi versione tradotta, la versione inglese prevarrà e sarà l'unica versione giuridicamente vincolante.

---

## 1. CHI SIAMO

SoraVantia GK è una società giapponese e la sviluppatrice di NuModeX Ext Maker. Siamo soggetti alla Legge sulla Protezione delle Informazioni Personali (APPI) del Giappone.

**Contatto:**
SoraVantia GK
E-mail: numodex@soravantia.com

---

## 2. COS'È NUMODEX EXT MAKER

NuModeX Ext Maker è un'estensione del browser Manifest V3 che utilizza l'IA per aiutare gli utenti a creare estensioni del browser e siti web statici. L'estensione opera interamente all'interno del browser dell'utente. Non ci sono server backend, account utente, accesso, abbonamento né registrazione. Gli utenti forniscono le proprie chiavi API per i servizi di IA.

---

## 3. DATI CHE NON RACCOGLIAMO

SoraVantia GK non raccoglie, riceve, archivia, elabora né trasmette alcun dato personale tramite NuModeX Ext Maker. Nello specifico, SoraVantia GK non raccoglie:

- Il nome, l'indirizzo e-mail né alcuna informazione di contatto dell'utente
- L'indirizzo IP né gli identificatori del dispositivo dell'utente
- La cronologia di navigazione né l'attività di navigazione dell'utente
- I dati di localizzazione dell'utente
- Le chiavi API né alcuna credenziale dell'utente
- I prompt, la cronologia della conversazione né alcun contenuto creato dall'utente
- Dati di utilizzo, dati comportamentali né dati di interazione
- Cookie, impronte digitali né identificatori di tracciamento

SoraVantia GK non dispone di server, database, piattaforme di analisi né infrastrutture di tracciamento per NuModeX Ext Maker. L'estensione non contiene codice di analisi, codice di telemetria né codice di tracciamento di alcun tipo.

---

## 4. DATI ARCHIVIATI LOCALMENTE NEL BROWSER

NuModeX Ext Maker archivia i seguenti dati localmente nel browser dell'utente. Questi dati non lasciano mai il dispositivo dell'utente e non vengono mai inviati a SoraVantia GK:

- **Chiave API:** La chiave API del fornitore di servizi di IA dell'utente è archiviata nell'archiviazione locale delle estensioni del browser. Viene utilizzata esclusivamente per autenticare le richieste al fornitore di IA selezionato dall'utente. SoraVantia GK non può accedere, visualizzare né recuperare la chiave API dell'utente.

- **Stato di accettazione dell'EULA:** Un registro che indica se l'utente ha accettato il Contratto di Licenza per l'Utente Finale, archiviato nell'archiviazione locale delle estensioni del browser.

- **Preferenze dell'interfaccia:** Le preferenze dell'interfaccia dell'utente come la lingua selezionata e l'impostazione della modalità scura, archiviate nell'archiviazione locale delle estensioni del browser.

- **Modello di IA selezionato:** Il modello di IA scelto dall'utente per la generazione, archiviato nell'archiviazione locale delle estensioni del browser.

- **Progetti:** I file generati, la cronologia della conversazione e la cronologia di annullamento dell'utente sono archiviati in IndexedDB all'interno del browser. Questi sono i prodotti del lavoro dell'utente e rimangono interamente sotto il suo controllo.

- **Configurazione del modello personalizzato:** Se l'utente configura un endpoint di server IA personalizzato, l'URL dell'endpoint, il nome del modello e la chiave API opzionale sono archiviati nell'archiviazione locale delle estensioni del browser.

**Come eliminare i dati archiviati localmente:**

- Disinstallare l'estensione NuModeX Ext Maker dal browser. Questo rimuove tutti i dati archiviati localmente.
- Utilizzare le opzioni di eliminazione nell'applicazione per rimuovere selettivamente chiavi API e singoli progetti senza disinstallare.

---

## 5. DATI INVIATI A FORNITORI DI IA DI TERZE PARTI

Quando l'utente utilizza NuModeX Ext Maker per creare, modificare, migliorare o discutere di estensioni e siti web, l'estensione invia richieste direttamente dal browser dell'utente al fornitore di IA selezionato. SoraVantia GK non funge da intermediario e non ha accesso ad alcun dato trasmesso tra il browser dell'utente e il fornitore di IA.

### 5.1 Cosa viene inviato al fornitore di IA

Ogni richiesta al fornitore di IA include:

- Il testo del prompt dell'utente (le istruzioni inserite)
- La cronologia della conversazione della sessione corrente
- Eventuali immagini allegate al prompt
- Il system prompt interno del Software (istruzioni proprietarie che guidano il comportamento e il formato di output del modello di IA - non sono visibili all'utente ma sono incluse in ogni richiesta)

### 5.2 Come vengono trasmessi questi dati

I dati dell'utente vengono trasmessi direttamente dal browser ai server del fornitore di IA utilizzando la propria chiave API. La trasmissione utilizza l'endpoint API standard del fornitore di IA ed è crittografata tramite HTTPS. I server di SoraVantia GK non sono coinvolti in questa trasmissione in alcun momento.

### 5.3 Fornitori di IA supportati

NuModeX Ext Maker supporta l'integrazione con vari fornitori di IA, inclusi, a titolo esemplificativo e non esaustivo:

- Google (Gemini)
- OpenAI (GPT)
- Anthropic (Claude)
- Endpoint di server IA personalizzati configurati dall'utente
- Modelli di IA su dispositivo forniti dal browser

### 5.4 Informative sulla privacy dei fornitori di IA

Ogni fornitore di IA ha la propria informativa sulla privacy che disciplina il trattamento dei dati ricevuti tramite richieste API. SoraVantia GK non ha alcun controllo su come i fornitori di IA elaborano, archiviano o utilizzano i dati inviati dall'utente. L'utente è responsabile della revisione e comprensione delle informative sulla privacy dei fornitori di IA che sceglie di utilizzare.

### 5.5 Modelli di IA su dispositivo

Se l'utente utilizza modelli di IA su dispositivo forniti dal proprio browser, NuModeX Ext Maker non trasmette i prompt a nessun server esterno. Tuttavia, SoraVantia GK non controlla l'implementazione dei modelli di IA su dispositivo da parte del fornitore del browser. Il fornitore del browser potrebbe raccogliere telemetria, dati di utilizzo o altre informazioni relative all'uso dei modelli su dispositivo nell'ambito delle proprie pratiche relative ai dati. SoraVantia GK non è a conoscenza, non ha il controllo né la responsabilità di qualsiasi raccolta di dati effettuata dal fornitore del browser in relazione ai modelli di IA su dispositivo. L'utente dovrebbe consultare l'informativa sulla privacy del fornitore del proprio browser per i dettagli su come le funzionalità di IA su dispositivo gestiscono i propri dati.

### 5.6 Endpoint di server IA personalizzati

Se l'utente configura un endpoint di server IA personalizzato, i prompt vengono inviati direttamente all'indirizzo del server configurato. SoraVantia GK non è a conoscenza, non ha il controllo né la responsabilità degli endpoint personalizzati. L'utente è l'unico responsabile della comprensione delle pratiche relative ai dati, della sicurezza e delle informative sulla privacy di qualsiasi server personalizzato configurato.

---

## 6. SYSTEM PROMPT E UTILIZZO DEI TOKEN

NuModeX Ext Maker include system prompt interni che vengono inviati con ogni richiesta API per guidare il comportamento e il formato di output del modello di IA. Questi system prompt sono di proprietà di SoraVantia GK e non sono visibili all'utente. Non contengono alcun dato personale relativo all'utente.

I system prompt, insieme all'input dell'utente e alla cronologia della conversazione, contribuiscono al conteggio totale dei token di ogni richiesta API. Questo influisce sui costi dell'API, che vengono fatturati direttamente dal fornitore di IA. Per i dettagli completi sull'utilizzo dei token e sui costi, consultare la Sezione 3.4 del Contratto di Licenza per l'Utente Finale.

---

## 7. DATI ANALITICI DEL MARKETPLACE

Se NuModeX Ext Maker viene distribuito attraverso uno o più marketplace di estensioni del browser (come Chrome Web Store, Edge Add-ons, Firefox Add-ons, Safari Extensions tramite l'App Store o il Naver Whale Store), l'operatore del marketplace può raccogliere dati di utilizzo dagli utenti e fornire a SoraVantia GK analisi aggregate e non identificabili personalmente attraverso il pannello di controllo dello sviluppatore del marketplace.

### 7.1 Cosa possono fornire gli operatori dei marketplace a SoraVantia GK

I tipi di dati aggregati che gli operatori dei marketplace possono fornire includono, a titolo esemplificativo e non esaustivo:

- Conteggi di installazioni e disinstallazioni
- Impressioni e visualizzazioni della pagina dello store
- Conteggi di utenti attivi settimanali o giornalieri
- Distribuzione geografica degli utenti (a livello di paese o regione)
- Distribuzione per sistema operativo e lingua
- Tassi di adozione delle versioni dell'estensione
- Metriche di fidelizzazione degli utenti
- Attribuzione di campagne e fonti di riferimento (se vengono utilizzati parametri UTM)

### 7.2 Natura dei dati analitici del marketplace

Questi dati sono di natura aggregata e statistica. Non contengono informazioni di identificazione personale come nomi, indirizzi e-mail, indirizzi IP o attività di navigazione individuali. SoraVantia GK non è in grado di identificare singoli utenti da questi dati.

### 7.3 Come SoraVantia GK utilizza i dati analitici del marketplace

SoraVantia GK utilizza i dati analitici del marketplace esclusivamente per:

- Comprendere le tendenze di adozione e la crescita degli utenti
- Migliorare il Software sulla base dell'adozione delle versioni e dei modelli di fidelizzazione
- Valutare l'efficacia dei canali di distribuzione

### 7.4 Fonte dei dati analitici del marketplace

Questi dati sono raccolti ed elaborati interamente dall'operatore del marketplace ai sensi della propria informativa sulla privacy e dei propri termini di servizio. NuModeX Ext Maker non contiene alcun codice che raccolga o trasmetta dati di analisi, telemetria o tracciamento. L'estensione stessa non svolge alcun ruolo nella raccolta dei dati analitici del marketplace.

### 7.5 Informative sulla privacy dei marketplace

L'utilizzo di un marketplace di estensioni del browser da parte dell'utente è disciplinato dall'informativa sulla privacy dell'operatore di tale marketplace. SoraVantia GK non è responsabile delle pratiche di raccolta dati degli operatori dei marketplace. Per informazioni su come ciascun marketplace gestisce i dati dell'utente, consultare:

- Google Chrome Web Store: https://policies.google.com/privacy
- Microsoft Edge Add-ons: https://privacy.microsoft.com/privacystatement
- Mozilla Firefox Add-ons: https://www.mozilla.org/privacy/
- Apple App Store: https://www.apple.com/privacy/
- Naver Whale Store: https://whale.naver.com/legal/privacy/

---

## 8. DATI CHE NON CONDIVIDIAMO

Poiché SoraVantia GK non raccoglie alcun dato personale tramite NuModeX Ext Maker, non vi sono dati personali da condividere. SoraVantia GK non:

- Vende dati personali a terzi
- Condivide dati personali con inserzionisti
- Condivide dati personali con intermediari di dati
- Fornisce dati personali ad alcun governo o agenzia di applicazione della legge
- Utilizza dati personali per profilazione, pubblicità mirata o processo decisionale automatizzato

---

## 9. PRIVACY DEI MINORI

NuModeX Ext Maker non è rivolto ai minori. Come indicato nel Contratto di Licenza per l'Utente Finale, gli utenti devono avere almeno 16 anni di età, o l'età minima richiesta per stipulare un accordo vincolante ai sensi delle leggi della propria giurisdizione, a seconda di quale sia superiore.

Poiché SoraVantia GK non raccoglie alcun dato personale, nessun dato personale di minori viene raccolto, archiviato o elaborato. Il Software non dispone di meccanismi di verifica dell'età in quanto non ha account utente né sistema di registrazione.

---

## 10. CONFORMITÀ ALLA PROTEZIONE DEI DATI

### 10.1 Legge sulla Protezione delle Informazioni Personali (APPI) - Giappone

SoraVantia GK è una società giapponese soggetta all'APPI. Poiché SoraVantia GK non raccoglie, riceve, archivia né elabora alcun dato personale tramite NuModeX Ext Maker, non sorgono obblighi di trattamento dei dati ai sensi dell'APPI in relazione a questo prodotto.

### 10.2 Regolamento Generale sulla Protezione dei Dati (GDPR) - Unione Europea

Poiché SoraVantia GK non raccoglie né elabora alcun dato personale degli utenti di NuModeX Ext Maker, gli obblighi di trattamento dei dati del GDPR non si applicano al funzionamento di questo prodotto da parte di SoraVantia GK. Non esiste un ruolo di titolare del trattamento né di responsabile del trattamento per SoraVantia GK in relazione a questo prodotto poiché nessun dato personale affluisce a SoraVantia GK.

Gli utenti nell'UE dovrebbero essere consapevoli che quando inviano prompt a fornitori di IA di terze parti, tali fornitori possono elaborare i loro dati nell'ambito dei propri quadri di conformità al GDPR. Gli utenti dovrebbero consultare le informative sulla privacy dei fornitori di IA che scelgono.

### 10.3 California Consumer Privacy Act (CCPA/CPRA) - Stati Uniti

Poiché SoraVantia GK non raccoglie, vende né condivide alcuna informazione personale degli utenti di NuModeX Ext Maker, gli obblighi CCPA/CPRA relativi ai diritti dei consumatori (accesso, cancellazione, rinuncia alla vendita) non si applicano al funzionamento di questo prodotto da parte di SoraVantia GK.

### 10.4 Architettura local-first

L'architettura local-first del Software è progettata per soddisfare per impostazione predefinita i requisiti applicabili in materia di protezione dei dati. Tutti i dati dell'utente rimangono nel browser dell'utente. SoraVantia GK non ha la capacità tecnica di accedere, recuperare o visualizzare alcun dato archiviato localmente dall'estensione.

---

## 11. SICUREZZA

### 11.1 Sicurezza dei dati locali

Tutti i dati archiviati da NuModeX Ext Maker sono archiviati localmente nel browser dell'utente utilizzando l'API di archiviazione delle estensioni del browser e IndexedDB. La sicurezza di questi dati dipende dalla sicurezza del browser e del dispositivo dell'utente. SoraVantia GK non ha accesso ai dati archiviati localmente dall'utente e non può proteggerli dalle minacce presenti sul dispositivo dell'utente.

### 11.2 Sicurezza della chiave API

La chiave API dell'utente è archiviata localmente nell'archiviazione delle estensioni del browser e viene utilizzata solo per autenticare le richieste al fornitore di IA selezionato. SoraVantia GK non ha accesso alla chiave API dell'utente. L'utente è responsabile della sicurezza della propria chiave API e non dovrebbe condividerla con altri.

### 11.3 Dati in transito

Quando i prompt vengono inviati a fornitori di IA di terze parti, vengono trasmessi tramite HTTPS direttamente dal browser dell'utente al fornitore di IA. L'infrastruttura di SoraVantia GK non è coinvolta in questa trasmissione. La sicurezza dei dati in transito verso i fornitori di IA dipende dalle misure di sicurezza del fornitore di IA.

### 11.4 Sicurezza del codice generato

NuModeX Ext Maker genera codice di estensioni del browser e siti web utilizzando l'IA. SoraVantia GK non esamina, non verifica né valida la sicurezza del codice generato. Il codice generato può contenere vulnerabilità di sicurezza. L'utente è l'unico responsabile della revisione della sicurezza di qualsiasi codice generato dal Software prima dell'installazione, della distribuzione o della diffusione.

---

## 12. SERVIZI DI TERZE PARTI

NuModeX Ext Maker si integra con fornitori di IA di terze parti, endpoint di server IA personalizzati configurati dall'utente e modelli di IA su dispositivo forniti dal browser. Questi servizi sono gestiti da terze parti indipendenti e non sono sotto il controllo di SoraVantia GK.

SoraVantia GK non è affiliata, approvata, sponsorizzata né in alcun modo ufficialmente collegata a Google LLC, OpenAI Inc., Anthropic PBC, né ad alcuna delle loro controllate o società affiliate. Tutti i nomi di prodotti, marchi commerciali e marchi registrati (inclusi, a titolo esemplificativo e non esaustivo, Google, Gemini, OpenAI, GPT, Anthropic e Claude) sono di proprietà dei rispettivi titolari. La loro menzione in questo Software e nella sua documentazione ha esclusivamente scopo di identificazione e non implica alcuna approvazione, partnership o affiliazione. SoraVantia GK può aggiungere, rimuovere o modificare il supporto per fornitori e modelli di IA in qualsiasi momento. L'aggiunta del supporto per qualsiasi fornitore di IA non implica alcuna affiliazione con tale fornitore né alcuna approvazione da parte dello stesso.

SoraVantia GK non è responsabile per:

- Qualsiasi trattamento, archiviazione o gestione dei dati effettuati da fornitori di servizi di terze parti
- Qualsiasi modifica alle API, ai prezzi, ai termini di servizio o alle informative sulla privacy di terze parti
- Qualsiasi contenuto generato, restituito o elaborato da servizi di terze parti
- Qualsiasi dato trasmesso, elaborato o archiviato su endpoint di server IA personalizzati configurati dall'utente

L'utilizzo dei servizi di terze parti da parte dell'utente è disciplinato dai rispettivi termini di servizio e dalle informative sulla privacy di ciascun servizio.

---

## 13. MODIFICHE ALLA PRESENTE INFORMATIVA SULLA PRIVACY

### 13.1 Diritti di modifica

SoraVantia GK si riserva il diritto di modificare la presente Informativa sulla Privacy in qualsiasi momento. Le modifiche non sostanziali saranno efficaci al momento della pubblicazione con un numero di versione aggiornato. Le modifiche sostanziali entreranno in vigore non prima di trenta (30) giorni dalla notifica, salvo che la legge applicabile richieda un periodo più lungo.

### 13.2 Notifica

Le modifiche sostanziali alla presente Informativa sulla Privacy saranno comunicate attraverso uno o più dei seguenti canali:

- Mediante l'inclusione dell'Informativa sulla Privacy aggiornata in una nuova versione del Software distribuita attraverso qualsiasi marketplace di estensioni del browser in cui il Software è pubblicato (se applicabile)
- Mediante la visualizzazione di un avviso dell'Informativa sulla Privacy aggiornata attraverso l'interfaccia del Software
- Mediante la pubblicazione dell'Informativa sulla Privacy aggiornata sul sito web ufficiale del prodotto (attualmente https://numodex.com/numodexextmaker/privacy, che può cambiare in caso di trasferimento di proprietà o rebranding)
- Mediante l'aggiornamento dell'Informativa sulla Privacy nel repository del codice sorgente del progetto (se disponibile pubblicamente)

In caso di cessione o trasferimento del Software ai sensi della Sezione 20.6 del Contratto di Licenza per l'Utente Finale, l'entità successore può notificare gli utenti attraverso canali equivalenti sotto il proprio controllo, a condizione che almeno un metodo di notifica consegni l'Informativa sulla Privacy aggiornata direttamente attraverso il Software stesso.

### 13.3 Accettazione

L'uso continuato del Software dopo la data di entrata in vigore di qualsiasi modifica costituisce accettazione dell'Informativa sulla Privacy modificata. Se l'utente non accetta i termini modificati, deve cessare l'utilizzo del Software.

---

## 14. I DIRITTI DELL'UTENTE

Poiché SoraVantia GK non raccoglie alcun dato personale tramite NuModeX Ext Maker, i tradizionali diritti dell'interessato (accesso, rettifica, cancellazione, portabilità) non si applicano nel contesto di questo prodotto poiché non vi sono dati personali detenuti da SoraVantia GK contro i quali esercitare tali diritti.

Tuttavia, l'utente ha il pieno controllo su tutti i dati archiviati localmente dall'estensione:

- **Accesso:** L'utente può visualizzare i propri dati archiviati localmente in qualsiasi momento attraverso l'interfaccia dell'estensione.
- **Cancellazione:** L'utente può eliminare le proprie chiavi API e i progetti attraverso le opzioni di eliminazione nell'applicazione, oppure eliminare tutti i dati archiviati localmente disinstallando l'estensione.
- **Portabilità:** L'utente può scaricare ed esportare le proprie estensioni e siti web generati in qualsiasi momento attraverso la funzionalità di download dell'estensione.

Se l'utente ha domande o dubbi riguardo ai propri dati in relazione a fornitori di IA di terze parti, dovrebbe contattare direttamente tali fornitori.

---

## 15. INFORMAZIONI DI CONTATTO

Per domande o dubbi sulla presente Informativa sulla Privacy, contattare:

**SoraVantia GK**
E-mail: numodex@soravantia.com

---

Copyright 2026 SoraVantia GK. Tutti i diritti riservati.

Ultimo aggiornamento: 23 marzo 2026
Versione: 2.5
