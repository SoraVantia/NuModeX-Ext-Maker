[English](getting-started-en-3-26-2026.md) | [日本語](getting-started-ja-3-26-2026.md) | [Español](getting-started-es-3-26-2026.md) | [Français](getting-started-fr-3-26-2026.md) | [한국어](getting-started-ko-3-26-2026.md) | [中文](getting-started-zh-3-26-2026.md) | [Português](getting-started-pt-3-26-2026.md) | [Italiano](getting-started-it-3-26-2026.md)

# Erste-Schritte-Anleitung für NuModeX Ext Maker

Diese Anleitung führt Sie durch die Einrichtung, den ersten Build und häufige Probleme mit mehr Details als das README.

## Voraussetzungen

- Ein Chromium-basierter Browser (Chrome, Edge, Brave, Whale) oder Firefox
- Ein API-Schlüssel von mindestens einem Cloud-KI-Anbieter - nicht erforderlich bei Verwendung geräteinterner Modelle
- Grundkenntnisse über Browsererweiterungen (hilfreich, aber nicht erforderlich)

## Cloud-Modell-Einrichtung

### 1. Erweiterung installieren

**Aus Browser-Erweiterungsstores (demnächst verfügbar):**
NuModeX Ext Maker ist noch in keinem Browser-Erweiterungsstore verfügbar. Die Store-Verfügbarkeit wird auf [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) und über GitHub Releases angekündigt.

**Aus dem Quellcode (Entwicklermodus):**
1. Klonen oder laden Sie das Repository herunter.
2. Öffnen Sie `chrome://extensions` (oder die entsprechende Seite in Ihrem Browser).
3. Aktivieren Sie den Entwicklermodus.
4. Klicken Sie auf "Entpackte Erweiterung laden" und wählen Sie den entsprechenden Browserordner (`browsers/chrome`, `browsers/edge` oder `browsers/firefox`).

### 2. API-Schlüssel erhalten

Sie benötigen einen API-Schlüssel von mindestens einem unterstützten Cloud-KI-Anbieter. Besuchen Sie die Entwicklerkonsole oder API-Plattform Ihres Anbieters, um einen Schlüssel zu generieren. Der Schlüssel jedes Anbieters wird separat in der Erweiterung gespeichert - Sie können frei zwischen Anbietern wechseln.

### 3. Konfigurieren und erstellen

1. Akzeptieren Sie die Nutzungsbedingungen (erscheint automatisch beim ersten Start).
2. Klicken Sie auf das Einstellungssymbol im Erweiterungs-Popup.
3. Fügen Sie Ihren API-Schlüssel ein und klicken Sie auf "Schlüssel speichern".
4. Wählen Sie ein KI-Modell aus dem Dropdown-Menü.
5. Beschreiben Sie im Chat, was Sie erstellen möchten.
6. Klicken Sie auf "Erweiterung erstellen" oder "Website erstellen" und warten Sie auf die Generierung.
7. Überprüfen und bearbeiten Sie die generierten Dateien nach Bedarf mit den integrierten Bearbeitungswerkzeugen.
8. Klicken Sie auf "Alles als ZIP herunterladen".
9. Für Erweiterungen: Entpacken Sie die ZIP-Datei, gehen Sie zu `chrome://extensions`, aktivieren Sie den Entwicklermodus und klicken Sie auf "Entpackte Erweiterung laden". Für Websites: Entpacken und `index.html` in Ihrem Browser öffnen.

> **Andere Browser:** Generierte Erweiterungen sind Manifest V3 und kompatibel mit Edge, Brave, Whale und anderen Chromium-basierten Browsern. Die Schritte zum Seitenladen variieren je nach Browser.

## Geräteinterne-Modell-Einrichtung

Geräteinterne Modelle laufen vollständig auf Ihrer Hardware ohne API-Schlüssel oder Cloud-Verbindung. **Diese Modelle sind nur in bestimmten Browsern verfügbar:** Gemini Nano in Google Chrome und Phi-4 Mini in Microsoft Edge. Andere Chromium-basierte Browser (Brave, Whale usw.) und Firefox unterstützen derzeit keine geräteinterne KI über Browser-APIs.

**Wichtige Unterschiede zu Cloud-Modellen:**
- Geräteinterne Modelle können nur für **Chat und Dateibearbeitung** verwendet werden, nicht für vollständige Builds.
- Das Modell muss bei der ersten Verwendung heruntergeladen werden (dies kann einige Minuten dauern).
- Die Hardwareanforderungen sind streng - überprüfen Sie diese vor der Fehlerbehebung.

### Chrome - Gemini Nano

1. Verwenden Sie Chrome Version 127 oder höher (Dev oder Canary für beste Ergebnisse empfohlen).
2. Gehen Sie zu `chrome://flags/#optimization-guide-on-device-model` und setzen Sie auf **Enabled BypassPerfRequirement**.
3. Gehen Sie zu `chrome://flags/#prompt-api-for-gemini-nano` und setzen Sie auf **Enabled**.
4. Starten Sie Chrome neu.
5. Gehen Sie zu `chrome://on-device-internals` und überprüfen Sie den Modellstatus. Wenn das Modell nicht heruntergeladen ist, gehen Sie zu `chrome://components/`, suchen Sie **Optimization Guide On Device Model** und klicken Sie auf **Check for update**.
6. Warten Sie, bis das Modell heruntergeladen ist. Dies kann einige Minuten dauern. Lassen Sie Chrome während des Downloads geöffnet.

### Edge - Phi-4 Mini

1. Verwenden Sie Edge Dev oder Canary (Version 138+). Edge 139+ enthält Phi-4 Mini standardmäßig.
2. Gehen Sie zu `edge://flags/` und suchen Sie nach **Prompt API for Phi mini**, setzen Sie auf **Enabled**.
3. Optional aktivieren Sie **Enable on device AI model debug logs** zur Fehlerbehebung.
4. Starten Sie Edge neu.
5. Gehen Sie zu `edge://on-device-internals` und überprüfen Sie, ob Ihre **Device performance class** **High** oder höher ist.
6. Das Modell wird bei der ersten Verwendung automatisch heruntergeladen. Dies kann einige Minuten dauern. Lassen Sie Edge während des Downloads geöffnet.

### Hardwareanforderungen

**Edge:** Windows 10/11 oder macOS 13.3+, mindestens 20 GB freier Speicherplatz, 5,5 GB+ VRAM und eine nicht-volumenbegrenzte Internetverbindung.

**Chrome:** 22 GB freier Speicherplatz, mehr als 4 GB VRAM (GPU) oder 16 GB+ RAM mit 4+ CPU-Kernen (CPU-Modus) und eine nicht-volumenbegrenzte Verbindung.

> **Hinweis:** Geräteinterne Modelle können nur für Chat und Dateibearbeitung verwendet werden. Um vollständige Erweiterungen oder Websites zu erstellen, wählen Sie ein Cloud-Modell.

## Build-Modi verstehen

NuModeX Ext Maker hat zwei Build-Modi:

**Erweiterung erstellen** - Generiert eine vollständige Manifest V3 Browsererweiterung mit manifest.json, Popup-Dateien, Content-Scripts und anderen erforderlichen Dateien.

**Website erstellen** - Generiert eine vollständige statische Website mit HTML-, CSS- und JavaScript-Dateien.

Beide Modi verwenden dieselbe Chat-Oberfläche. Die KI liest bei der Generierung Ihren gesamten Gesprächsverlauf, sodass Sie Ihre Anforderungen über mehrere Nachrichten verfeinern können, bevor Sie erstellen.

## Generierte Dateien überprüfen

Nach Abschluss eines Builds zeigt das rechte Panel der Erweiterung Ihre generierten Dateien an.

**Dateibaum** - Alle generierten Dateien erscheinen in einer anklickbaren Liste oben im rechten Panel. Klicken Sie auf eine beliebige Datei, um ihren Inhalt anzuzeigen. Dateien sind nach Name organisiert, einschließlich Unterverzeichnispfaden (z.B. `assets/style.css`).

**Code-Viewer** - Wenn Sie eine Datei auswählen, erscheint ihr Inhalt im Code-Viewer unterhalb des Dateibaums mit Syntaxhervorhebung. Der Viewer erkennt automatisch den Dateityp (JavaScript, JSON, HTML, CSS, Markdown) und wendet die entsprechende Hervorhebung an. Sie können den Inhalt jeder Datei mit dem Kopieren-Button in die Zwischenablage kopieren.

**Manuelle Bearbeitung** - Klicken Sie auf den Bearbeiten-Umschalter über dem Code-Viewer, um in den manuellen Bearbeitungsmodus zu wechseln. Der Code-Viewer wird zu einem Texteditor, in dem Sie Änderungen direkt von Hand vornehmen können. Klicken Sie erneut auf den Umschalter, um den manuellen Bearbeitungsmodus zu beenden.

**Live-Vorschau** - Um eine visuelle Vorschau Ihrer Erweiterung oder Website zu sehen, klicken Sie auf Mehr (▾) > Vorschau. Ein Modal öffnet sich mit einer sandboxierten Vorschau, die Ihre popup.html (für Erweiterungen) oder index.html (für Websites) rendert. Die Vorschau integriert automatisch Ihre CSS- und JavaScript-Dateien, damit sie korrekt gerendert werden. Beachten Sie, dass dies eine rein visuelle Vorschau ist - Browsererweiterungs-APIs (wie chrome.tabs, chrome.storage) und externe Ressourcen funktionieren in der Vorschau nicht. Wenn Ihr Projekt keine popup.html oder index.html hat, zeigt die Vorschau eine informative Nachricht an.

**Änderungen anzeigen** - Nach einer KI-Bearbeitung klicken Sie auf Änderungen anzeigen, um einen Vorher-Nachher-Vergleich der Änderungen zu sehen. Sie können zwischen einheitlicher und nebeneinanderliegender Ansicht wechseln. Wenn mehrere Dateien geändert wurden, können Sie über Tabs oben zwischen ihnen wechseln.

## Bearbeitung nach dem Build

Nach Ihrem ersten Build stehen Ihnen mehrere Bearbeitungsoptionen zur Verfügung:

**Datei bearbeiten** - Wählen Sie eine einzelne Datei und beschreiben Sie die Änderungen. Ideal für gezielte Korrekturen.

**Datei hinzufügen** - Erstellen Sie eine neue Datei und beschreiben Sie, was sie enthalten soll.

**Erweiterung verbessern** - Beschreiben Sie Änderungen über das gesamte Projekt hinweg. Die KI kann mehrere Dateien auf einmal ändern.

**Manuelle Bearbeitung** - Klicken Sie direkt in den Code-Viewer, um Code von Hand zu bearbeiten.

**Rückgängig** - Macht die letzte KI-Bearbeitung rückgängig. Nur eine Stufe des Rückgängigmachens ist verfügbar.

## Das richtige Modell wählen

Anstatt bestimmte Modelle zu empfehlen (die sich häufig ändern), erklären wir hier, wie Sie basierend auf dem Wichtigen wählen:

**Kontextfenstergröße** - Bestimmt, wie viel Gesprächsverlauf und Code das Modell auf einmal verarbeiten kann. Für einfache Erweiterungen mit wenigen Dateien reicht ein kleineres Kontextfenster aus. Für komplexe Mehrfachdateiprojekte wählen Sie ein Modell mit einem größeren Kontextfenster, damit es alle Ihre Dateien und die Konversation auf einmal sehen kann.

**Ausgabe-Token-Limit** - Bestimmt, wie viel Code das Modell in einer einzelnen Antwort generieren kann. Wenn Sie JSON-Parsing-Fehler oder abgeschnittene Ausgaben sehen, wechseln Sie zu einem Modell mit einem höheren Ausgabelimit. Größere Projekte benötigen Modelle, die mehr Tokens ausgeben können.

**Reasoning-Fähigkeit** - Einige Modelle sind besser bei komplexer Logik, mehrstufigen Anweisungen und der Aufrechterhaltung der Konsistenz über Dateien hinweg. Für einfache Popup-Erweiterungen funktionieren die meisten Modelle gut. Für Erweiterungen mit Content-Scripts, Background-Workern und komplexen Interaktionen wählen Sie ein Modell, das für starkes Reasoning bekannt ist.

**Kosten** - Größere, leistungsfähigere Modelle kosten mehr pro API-Aufruf. Beginnen Sie mit einem kleineren Modell für Chat und einfache Bearbeitungen, und wechseln Sie dann zu einem größeren Modell, wenn Sie komplexe Projekte erstellen oder verbessern müssen. Die Kosten variieren je nach gewähltem Modell und KI-Anbieter. SoraVantia GK ist mit keinem KI-Anbieter verbunden und kontrolliert oder erhält keinen Teil der API-Gebühren.

**Geschwindigkeit** - Kleinere Modelle antworten schneller. Wenn Sie schnell an kleinen Änderungen iterieren, spart ein schnelles Modell Zeit. Für vollständige Builds, bei denen Qualität wichtiger ist als Geschwindigkeit, lohnt sich ein größeres Modell.

| Anwendungsfall | Worauf Sie achten sollten |
|----------|-----------------|
| Einfache Erweiterungen (nur Popup, kleine Scripts) | Jedes Modell mit moderatem Kontext und Ausgabelimits |
| Komplexe Erweiterungen (Content-Scripts, Background-Worker, mehrere Dateien) | Großes Kontextfenster, hohes Ausgabelimit, starkes Reasoning |
| Schnelle Chat-Fragen und Brainstorming | Jedes Modell - Geschwindigkeit ist wichtiger als Ausgabegröße |
| Einzeldatei-Bearbeitungen | Jedes Modell, einschließlich geräteintern (kostenlos, kein API-Schlüssel nötig) |
| Budgetbewusste Entwicklung | Kleinere oder mittlere Modelle für Chat, große Modelle nur für Builds |

Überprüfen Sie die Modelldokumentation Ihres KI-Anbieters für aktuelle Kontextfenstergrößen, Ausgabelimits und Preise.

## Tipps für beste Ergebnisse

- Beginnen Sie mit einer einfachen Beschreibung und bauen Sie schrittweise auf. Beschreiben Sie zuerst die Kernfunktion, dann verwenden Sie Bearbeiten und Verbessern, um weitere Funktionen schrittweise hinzuzufügen.
- Verwenden Sie ein Modell mit einem größeren Kontextfenster für komplexe Projekte. Größere Modelle verarbeiten umfangreichere Ausgaben besser als kleinere.
- Wenn Sie "Erweiterungsdateien konnten nicht extrahiert werden" sehen, war der Prompt für eine Generierung zu komplex. Vereinfachen Sie den anfänglichen Prompt und fügen Sie Funktionen durch Bearbeitung hinzu.
- Wenn Sie einen JSON-Parsing-Fehler sehen, war die Antwort des Modells zu lang und wurde abgeschnitten. Versuchen Sie einen einfacheren Prompt oder wechseln Sie zu einem Modell mit einem höheren Ausgabelimit.
- Cloud-, benutzerdefinierte und entfernte Modelle können alle zum Erstellen, Bearbeiten und Chatten verwendet werden. Wählen Sie das Modell, das am besten zu Ihren Bedürfnissen und Ihrem Budget passt.
- Geräteinterne Modelle funktionieren für Chat und Bearbeitung, können aber keine vollständigen Erweiterungen oder Websites erstellen. Verwenden Sie ein Cloud- oder benutzerdefiniertes Modell zum Erstellen.
- Enter zum Senden einer Chat-Nachricht. Shift+Enter für eine neue Zeile. Ctrl/Cmd+Enter zum Erstellen einer Erweiterung. Ctrl/Cmd+Shift+Enter zum Erstellen einer Website.
- Nach dem Erstellen verwenden Sie Datei bearbeiten für Änderungen an einzelnen Dateien und Erweiterung verbessern für Änderungen an mehreren Dateien.
- Importieren Sie vorhandene Dateien über Mehr (▾) > Dateien importieren, um sie mit KI zu bearbeiten.

## Fehlerbehebung

**Bevor Sie mit der Fehlerbehebung beginnen, überprüfen Sie folgende Ressourcen:**
- Die API-Dokumentation Ihres Cloud-KI-Anbieters für aktuelle Modellgrenzen, Preise und Status.
- Die Entwicklerdokumentation Ihres Browsers für die neuesten Anforderungen an geräteinterne KI und bekannte Probleme.
- Den Abschnitt [Geräteinterne-Modell-Einrichtung](#geräteinterne-modell-einrichtung) oben für Flag- und Hardwareanforderungen.

### "API-Schlüssel nicht eingerichtet"
Öffnen Sie die Einstellungen und fügen Sie Ihren API-Schlüssel für den ausgewählten Anbieter ein. Jeder Anbieter hat seinen eigenen Schlüssel - stellen Sie sicher, dass Sie den Schlüssel für den Anbieter gespeichert haben, dessen Modell Sie ausgewählt haben.

### "Erweiterungsdateien konnten nicht extrahiert werden"
Die KI-Antwort war zu komplex oder fehlerhaft formatiert. Versuchen Sie:
- Ihren Prompt zu vereinfachen (beschreiben Sie weniger Funktionen auf einmal)
- Zu einem Modell mit einem größeren Ausgabelimit zu wechseln
- Zuerst eine Basisversion zu erstellen und dann "Erweiterung verbessern" zu verwenden, um Funktionen hinzuzufügen

### "JSON-Parsing-Fehler"
Die Antwort des Modells war zu lang und wurde abgeschnitten, bevor das JSON vervollständigt werden konnte. Versuchen Sie:
- Einen einfacheren Prompt
- Ein Modell mit einem höheren Ausgabe-Token-Limit

### Geräteinternes Modell bleibt beim "Herunterladen" hängen
Dies ist ein häufiges Problem. Überprüfen Sie:
1. **Hardwareanforderungen erfüllt?** Gehen Sie zu `edge://on-device-internals` (Edge) oder `chrome://on-device-internals` (Chrome) und überprüfen Sie Ihre Geräteklasse.
2. **Flags aktiviert?** Siehe den Abschnitt [Geräteinterne-Modell-Einrichtung](#geräteinterne-modell-einrichtung) oben.
3. **Genügend Speicherplatz?** Edge benötigt 20 GB frei, Chrome benötigt 22 GB frei.
4. **Volumenbegrenzte Verbindung?** Das Modell wird bei einer volumenbegrenzten/datenlimitierten Verbindung nicht heruntergeladen.
5. **Browser geöffnet geblieben?** Der Download stoppt, wenn Sie den Browser schließen.
6. **Versuchen Sie, den Browser neu zu starten** und warten Sie 5-10 Minuten.

### Erweiterung funktioniert nach dem Laden nicht
- Überprüfen Sie die Browserkonsole (`chrome://extensions` > klicken Sie auf "Fehler" bei Ihrer Erweiterung) auf Fehlermeldungen.
- Stellen Sie sicher, dass Sie den richtigen Ordner geladen haben (den, der manifest.json enthält).
- Versuchen Sie, mit einem detaillierteren Prompt zu regenerieren, der das genaue Verhalten spezifiziert.

### Benutzerdefiniertes Modell antwortet nicht
- Überprüfen Sie, ob die Endpoint-URL korrekt und erreichbar ist.
- Bestätigen Sie, dass der Server das `/v1/chat/completions` API-Format unterstützt.
- Überprüfen Sie, ob der Server einen API-Schlüssel erfordert und ob Sie einen angegeben haben.
- Gewähren Sie die Host-Berechtigung der Erweiterung, wenn Sie dazu aufgefordert werden.

## Tastaturkürzel

| Kürzel | Aktion |
|----------|--------|
| Enter | Chat-Nachricht senden |
| Shift+Enter | Neue Zeile im Chat |
| Ctrl/Cmd+Enter | Erweiterung erstellen |
| Ctrl/Cmd+Shift+Enter | Website erstellen |

## Nächste Schritte

- Lesen Sie das [README](README.de.md) für die vollständige Funktionsliste
- Überprüfen Sie [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) für Abhängigkeitsinformationen
- Melden Sie Fehler oder fordern Sie Funktionen über GitHub Issues an
- Besuchen Sie [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) für Updates
