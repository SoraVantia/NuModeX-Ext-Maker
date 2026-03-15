# Datenschutzrichtlinie

[English](PRIVACY-POLICY.md) | [日本語](PRIVACY-POLICY.ja.md) | [Español](PRIVACY-POLICY.es.md) | [Français](PRIVACY-POLICY.fr.md) | [한국어](PRIVACY-POLICY.ko.md) | [中文](PRIVACY-POLICY.zh.md) | [Deutsch](PRIVACY-POLICY.de.md) | [Português](PRIVACY-POLICY.pt.md) | [Italiano](PRIVACY-POLICY.it.md)

> **Hinweis:** Diese Übersetzung dient ausschließlich Informationszwecken. Im Falle von Abweichungen zwischen dieser Übersetzung und der englischen Version hat die englische Version Vorrang und ist rechtlich bindend.

**NuModeX Ext Maker — Ein Produkt von SoraVantia GK**

Gültig ab: 15. März 2026
Letzte Aktualisierung: 15. März 2026

Website: https://numodex.com/numodexextmaker
Datenschutzrichtlinie URL: https://numodex.com/numodexextmaker/privacy

## 1. Einleitung

Diese Datenschutzrichtlinie beschreibt, wie NuModeX Ext Maker („Dienst", „Erweiterung" oder „Software"), entwickelt von SoraVantia GK („SoraVantia GK", „wir" oder „unser"), Ihre Informationen behandelt. Wir verpflichten uns zum Schutz Ihrer Privatsphäre.

NuModeX Ext Maker ist eine Browser-Erweiterung, die vollständig in Ihrem Browser ausgeführt wird. Wir betreiben keine Server, Datenbanken oder Cloud-Infrastruktur für dieses Produkt. Wir erheben, empfangen, speichern oder haben keinen Zugriff auf Ihre Daten.

## 2. Informationen, die wir erheben

**Wir erheben keine Daten.** SoraVantia GK erhebt, empfängt, speichert oder verarbeitet keine personenbezogenen Daten oder Nutzungsdaten von Benutzern von NuModeX Ext Maker. Wir haben keine Backend-Server, keine Analysen, keine Telemetrie und keinerlei Tracking.

## 3. Lokal auf Ihrem Gerät gespeicherte Informationen

NuModeX Ext Maker speichert Daten lokal in Ihrem Browser unter Verwendung standardmäßiger Browser-Speicher-APIs. Diese Daten verlassen niemals Ihr Gerät und werden niemals an SoraVantia GK oder einen Dritten unter unserer Kontrolle übertragen.

### 3.1 Chrome Storage API (chrome.storage.local)

Die folgenden Daten werden mit der integrierten Speicher-API von Chrome gespeichert:

- **API-Schlüssel** — Ihr von Ihnen eingegebener KI-Anbieter-API-Schlüssel. Lokal gespeichert und nur zur Authentifizierung von Anfragen an den von Ihnen ausgewählten KI-Anbieter verwendet.
- **EULA-Akzeptanzstatus** — Ob Sie die Nutzungsbedingungen akzeptiert haben und welche Version.
- **UI-Einstellungen** — Ihre ausgewählte Sprache und Dunkelmodus-Einstellung.
- **Ausgewähltes KI-Modell** — Das zuletzt im Dropdown ausgewählte KI-Modell.
- **Benutzerdefinierte Modellkonfiguration** — Die benutzerdefinierte KI-Server-Endpunkt-URL, der Modellname und der optionale API-Schlüssel, falls konfiguriert.

### 3.2 IndexedDB (über Dexie.js)

Die folgenden Daten werden mit IndexedDB, einer browserlokalen Datenbank, gespeichert:

- **Projekte** — Ihre gespeicherten Projekte, einschließlich Projektnamen, generierter Erweiterungsdateien (Quellcode), Gesprächsverlauf mit der KI und Zeitstempel.
- **Rückgängig-Verlauf** — Vorherige Dateizustände für die Rückgängig-Funktion, pro Projekt gespeichert.

### 3.3 Wie Sie lokal gespeicherte Daten löschen

Sie können alle lokal gespeicherten Daten jederzeit löschen durch:

- Deinstallation der Erweiterung (entfernt automatisch alle Daten)
- Löschen der Erweiterungsdaten Ihres Browsers über die Browsereinstellungen
- Verwenden der Schaltfläche „Schlüssel löschen" in der Erweiterung, um Ihren gespeicherten API-Schlüssel zu entfernen
- Verwenden der Schaltfläche „Löschen" in der Projektauswahl, um einzelne Projekte zu entfernen
- Verwenden der Schaltfläche „Neu starten", um den Inhalt des aktuellen Projekts zu löschen

## 4. An Dritte übermittelte Informationen

### 4.1 KI-API-Anbieter

Wenn Sie NuModeX Ext Maker zum Generieren, Bearbeiten oder Chatten über Browser-Erweiterungen verwenden, werden der Text Ihrer Eingaben und der Gesprächsverlauf direkt von Ihrem Browser an den von Ihnen ausgewählten KI-Anbieter übertragen. Diese Übertragung erfolgt über die API des KI-Anbieters mit Ihrem eigenen API-Schlüssel.

Die KI-Anbieter, die Ihre Eingabedaten erhalten können, umfassen:

- **Google** (Gemini API) — Unterliegt den API-Nutzungsbedingungen und der Datenschutzrichtlinie von Google
- **OpenAI** (GPT-Modelle) — Unterliegt den API-Nutzungsbedingungen und der Datenschutzrichtlinie von OpenAI
- **Anthropic** (Claude-Modelle) — Unterliegt den API-Nutzungsbedingungen und der Datenschutzrichtlinie von Anthropic

**Wichtig:**

- SoraVantia GK fungiert bei diesen Übertragungen nicht als Vermittler. Ihr Browser kommuniziert direkt mit den Servern des KI-Anbieters.
- SoraVantia GK hat keinen Zugriff auf Daten, die Sie an KI-Anbieter senden, und protokolliert oder überwacht diese nicht.
- Ihr API-Schlüssel wird zur Authentifizierung direkt an den KI-Anbieter gesendet. SoraVantia GK empfängt oder sieht Ihren API-Schlüssel niemals.
- Die an KI-Anbieter gesendeten Daten umfassen Ihre Texteingaben, den Gesprächsverlauf und alle angehängten Bilder. Sie umfassen nicht Ihre API-Schlüssel-Speicherung, UI-Einstellungen oder andere lokale Einstellungen.
- Ihre Nutzung von KI-Diensten Dritter unterliegt deren jeweiligen Datenschutzrichtlinien und Nutzungsbedingungen. Wir empfehlen Ihnen, diese Richtlinien zu lesen.

### 4.2 On-Device-KI-Modelle

Wenn Sie On-Device-KI-Modelle verwenden (wie Gemini Nano auf Chrome oder Phi-4 Mini auf Edge), werden Ihre Eingaben vollständig auf Ihrem Gerät verarbeitet. Bei der Nutzung von On-Device-Modellen werden keine Daten an externe Server übertragen.

### 4.3 Benutzerdefinierte / lokale KI-Server

Sie können einen benutzerdefinierten KI-Server-Endpunkt konfigurieren (z.B. einen lokal gehosteten Server auf Ihrem Rechner oder in Ihrem lokalen Netzwerk). Bei Verwendung eines benutzerdefinierten Endpunkts:

- Ihre Eingaben und der Gesprächsverlauf werden direkt an die von Ihnen konfigurierte Serveradresse gesendet.
- SoraVantia GK hat keine Kenntnis von, keine Kontrolle über und keine Verantwortung für benutzerdefinierte Endpunkte.
- Wenn Sie einen lokalen Server konfigurieren (z.B. auf localhost), bleiben Ihre Daten vollständig auf Ihrem Rechner.
- Wenn Sie einen Remote-Server konfigurieren, werden Ihre Daten an diesen Server gesendet. Sie sind dafür verantwortlich, die Datenschutzpraktiken jedes benutzerdefinierten Servers zu verstehen, mit dem Sie sich verbinden.
- Die benutzerdefinierte Endpunkt-URL, der Modellname und der optionale API-Schlüssel werden lokal in Ihrem Browser über chrome.storage.local gespeichert.

### 4.4 Keine weiteren Übertragungen an Dritte

NuModeX Ext Maker überträgt keine Daten an:

- Server von SoraVantia GK (wir haben keine für dieses Produkt)
- Analysedienste (keine werden verwendet)
- Werbenetzwerke (keine werden verwendet)
- Social-Media-Plattformen
- Andere Dritte, die nicht in den Abschnitten 4.1 und 4.3 aufgeführt sind

## 5. Cookies und Tracking

NuModeX Ext Maker verwendet keine Cookies, Web Beacons, Pixel oder andere Tracking-Technologien. Wir verfolgen Ihre Browsing-Aktivitäten, Nutzungsmuster oder Ihr Verhalten nicht.

## 6. Datenschutz für Kinder

NuModeX Ext Maker richtet sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich keine Informationen von Kindern. Wie in unseren Nutzungsbedingungen angegeben, müssen Benutzer mindestens 16 Jahre alt sein, um die Software zu nutzen. Da wir keinerlei Daten erheben, besteht kein Risiko, versehentlich Daten von Kindern zu erheben.

## 7. Datensicherheit

Da alle Daten lokal in Ihrem Browser gespeichert werden und wir keine Benutzerdaten empfangen oder speichern, hängt die Sicherheit Ihrer Daten ab von:

- Der Sicherheit Ihres Geräts und Browsers
- Ihrer Verwaltung der API-Schlüssel Ihres KI-Anbieters
- Den integrierten Datenschutzmechanismen Ihres Browsers

Wir empfehlen:

- Löschen oder Deaktivieren Ihres API-Schlüssels, wenn er nicht verwendet wird
- Teilen Sie Ihr Gerät oder Browserprofil nicht mit nicht vertrauenswürdigen Personen
- Halten Sie Ihren Browser und Ihr Betriebssystem auf dem neuesten Stand

## 8. Ihre Rechte

### 8.1 Allgemeine Rechte

Da SoraVantia GK keine Ihrer Daten erhebt oder speichert, werden traditionelle Betroffenenrechte (Zugang, Berichtigung, Löschung, Übertragbarkeit) direkt auf Ihrem Gerät ausgeübt:

- **Zugang** — Alle Ihre Daten sind in der Benutzeroberfläche der Erweiterung sichtbar (Projekte, Dateien, Gesprächsverlauf).
- **Löschung** — Löschen Sie einzelne Projekte, löschen Sie Ihren API-Schlüssel oder deinstallieren Sie die Erweiterung, um alle Daten zu entfernen.
- **Übertragbarkeit** — Ihre generierten Erweiterungsdateien können jederzeit als ZIP heruntergeladen werden.

### 8.2 Europäischer Wirtschaftsraum (DSGVO)

Wenn Sie sich im EWR befinden, haben Sie Rechte gemäß der Datenschutz-Grundverordnung. Da wir Ihre personenbezogenen Daten nicht erheben oder verarbeiten, sind diese Rechte inhärent erfüllt. Eine Datenverarbeitungsvereinbarung mit uns ist nicht erforderlich, da keine Daten an uns übermittelt werden.

### 8.3 Kalifornien (CCPA/CPRA)

Wenn Sie in Kalifornien ansässig sind, haben Sie Rechte gemäß dem California Consumer Privacy Act. Wir verkaufen, teilen oder offenbaren keine personenbezogenen Daten, da wir keine erheben. Es gibt keine personenbezogenen Daten, die wir verkaufen, teilen oder offenbaren könnten.

### 8.4 Japan (APPI)

SoraVantia GK ist ein japanisches Unternehmen, das dem Gesetz zum Schutz personenbezogener Daten unterliegt. Da wir über NuModeX Ext Maker keine personenbezogenen Daten erheben, speichern oder verarbeiten, entstehen aus Ihrer Nutzung dieses Produkts keine APPI-Verpflichtungen.

## 9. Änderungen dieser Datenschutzrichtlinie

Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wenn wir wesentliche Änderungen vornehmen, aktualisieren wir das Datum „Letzte Aktualisierung" oben in diesem Dokument. Wir empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig zu überprüfen.

Wenn eine Änderung die Art und Weise der Datenverarbeitung wesentlich verändert (z. B. wenn eine zukünftige Version Analysen oder serverseitige Verarbeitung einführt), werden wir die Benutzer über die Oberfläche der Erweiterung informieren, bevor die Änderung in Kraft tritt.

## 10. Open-Source-Transparenz

NuModeX Ext Maker steht unter einer Doppellizenz: Apache License 2.0 und Marketplace Publication License. Der Quellcode ist öffentlich zugänglich, sodass jeder unsere Datenschutzpraktiken durch direkte Codeinspektion überprüfen kann.

## 11. Kontakt

Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte:

**SoraVantia GK**
E-Mail: numodex@soravantia.com
Website: https://numodex.com/numodexextmaker

## 12. Zusammenfassung

| Frage | Antwort |
|-------|---------|
| Erheben Sie personenbezogene Daten? | Nein |
| Verwenden Sie Cookies oder Tracking? | Nein |
| Haben Sie einen Backend-Server? | Nein |
| Wo werden meine Daten gespeichert? | Nur lokal in Ihrem Browser |
| Wer kann meine Daten sehen? | Nur Sie, auf Ihrem Gerät |
| Werden Daten an SoraVantia GK gesendet? | Nein, niemals |
| Werden Daten an KI-Anbieter gesendet? | Ja, Ihre Eingaben werden mit Ihrem eigenen API-Schlüssel direkt an den von Ihnen ausgewählten KI-Anbieter gesendet |
| Kann ich meine Daten löschen? | Ja, durch Deinstallation der Erweiterung oder über die In-App-Löschoptionen |
| Verkaufen Sie Daten? | Nein |
| Ist der Quellcode verfügbar? | Ja, unter Doppellizenz Apache License 2.0 und Marketplace Publication License |

---

Copyright 2026 SoraVantia GK. All rights reserved.
