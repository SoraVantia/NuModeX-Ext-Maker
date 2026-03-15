# Politique de Confidentialité

[English](PRIVACY-POLICY.md) | [日本語](PRIVACY-POLICY.ja.md) | [Español](PRIVACY-POLICY.es.md) | [Français](PRIVACY-POLICY.fr.md) | [한국어](PRIVACY-POLICY.ko.md) | [中文](PRIVACY-POLICY.zh.md) | [Deutsch](PRIVACY-POLICY.de.md) | [Português](PRIVACY-POLICY.pt.md) | [Italiano](PRIVACY-POLICY.it.md)

> **Note :** Cette traduction est fournie à titre informatif uniquement. En cas de divergence entre cette traduction et la version anglaise, la version anglaise prévaudra et sera juridiquement contraignante.

**NuModeX Ext Maker — Un produit de SoraVantia GK**

Date d'entrée en vigueur : 15 mars 2026
Dernière mise à jour : 15 mars 2026

Site web : https://numodex.com/numodexextmaker
URL de la Politique de Confidentialité : https://numodex.com/numodexextmaker/privacy

## 1. Introduction

La présente Politique de Confidentialité décrit comment NuModeX Ext Maker (« Service », « Extension » ou « Logiciel »), développé par SoraVantia GK (« SoraVantia GK », « nous » ou « notre »), traite vos informations. Nous nous engageons à protéger votre vie privée.

NuModeX Ext Maker est une extension de navigateur qui fonctionne entièrement dans votre navigateur. Nous n'exploitons aucun serveur, base de données ou infrastructure cloud pour ce produit. Nous ne collectons, recevons, stockons ni n'avons accès à aucune de vos données.

## 2. Informations que nous collectons

**Nous ne collectons aucune donnée.** SoraVantia GK ne collecte, reçoit, stocke ni ne traite aucune information personnelle ni donnée d'utilisation des utilisateurs de NuModeX Ext Maker. Nous n'avons aucun serveur backend, aucune analyse, aucune télémétrie et aucun suivi d'aucune sorte.

## 3. Informations stockées localement sur votre appareil

NuModeX Ext Maker stocke des données localement dans votre navigateur en utilisant les API de stockage standard du navigateur. Ces données ne quittent jamais votre appareil et ne sont jamais transmises à SoraVantia GK ni à aucun tiers sous notre contrôle.

### 3.1 Chrome Storage API (chrome.storage.local)

Les données suivantes sont stockées à l'aide de l'API de stockage intégrée de Chrome :

- **Clé API** — Votre clé API de fournisseur d'IA, saisie par vous. Stockée localement et utilisée uniquement pour authentifier les requêtes auprès du fournisseur d'IA que vous avez sélectionné.
- **Statut d'acceptation du CLUF** — Si vous avez accepté les Conditions d'utilisation et quelle version.
- **Préférences d'interface** — Votre langue sélectionnée et le paramètre du mode sombre.
- **Modèle d'IA sélectionné** — Le dernier modèle d'IA que vous avez sélectionné dans le menu déroulant.
- **Configuration du modèle personnalisé** — L'URL du point de terminaison du serveur d'IA personnalisé, le nom du modèle et la clé API optionnelle, si configuré.

### 3.2 IndexedDB (via Dexie.js)

Les données suivantes sont stockées à l'aide d'IndexedDB, une base de données locale du navigateur :

- **Projets** — Vos projets sauvegardés, y compris les noms de projets, les fichiers d'extension générés (code source), l'historique des conversations avec l'IA et les horodatages.
- **Historique d'annulation** — Les états précédents des fichiers pour la fonction d'annulation, stockés par projet.

### 3.3 Comment supprimer les données stockées localement

Vous pouvez supprimer toutes les données stockées localement à tout moment en :

- Désinstallant l'extension (supprime automatiquement toutes les données)
- Effaçant les données d'extension de votre navigateur via les paramètres du navigateur
- Utilisant le bouton « Supprimer la clé » dans l'extension pour supprimer votre clé API stockée
- Utilisant le bouton « Supprimer » dans le sélecteur de projets pour supprimer des projets individuels
- Utilisant le bouton « Recommencer » pour effacer le contenu du projet actuel

## 4. Informations transmises à des tiers

### 4.1 Fournisseurs d'API d'IA

Lorsque vous utilisez NuModeX Ext Maker pour générer, modifier ou discuter d'extensions de navigateur, le texte de vos instructions et l'historique des conversations sont transmis directement depuis votre navigateur vers le fournisseur d'IA que vous avez sélectionné. Cette transmission s'effectue via l'API du fournisseur d'IA en utilisant votre propre clé API.

Les fournisseurs d'IA susceptibles de recevoir vos données d'instructions incluent :

- **Google** (Gemini API) — Soumis aux Conditions d'utilisation de l'API de Google et à sa Politique de Confidentialité
- **OpenAI** (modèles GPT) — Soumis aux Conditions d'utilisation de l'API d'OpenAI et à sa Politique de Confidentialité
- **Anthropic** (modèles Claude) — Soumis aux Conditions d'utilisation de l'API d'Anthropic et à sa Politique de Confidentialité

**Important :**

- SoraVantia GK n'agit pas en tant qu'intermédiaire dans ces transmissions. Votre navigateur communique directement avec les serveurs du fournisseur d'IA.
- SoraVantia GK n'a pas accès, n'enregistre ni ne surveille les données que vous envoyez aux fournisseurs d'IA.
- Votre clé API est envoyée directement au fournisseur d'IA pour l'authentification. SoraVantia GK ne reçoit ni ne voit jamais votre clé API.
- Les données envoyées aux fournisseurs d'IA comprennent vos instructions textuelles, l'historique des conversations et toutes les images que vous joignez. Elles n'incluent pas votre stockage de clé API, vos préférences d'interface ni d'autres paramètres locaux.
- Votre utilisation des services d'IA tiers est régie par leurs politiques de confidentialité et conditions d'utilisation respectives. Nous vous encourageons à consulter ces politiques.

### 4.2 Modèles d'IA embarqués

Si vous utilisez des modèles d'IA embarqués (tels que Gemini Nano sur Chrome ou Phi-4 Mini sur Edge), vos instructions sont traitées entièrement sur votre appareil. Aucune donnée n'est transmise à un serveur externe pour l'utilisation de modèles embarqués.

### 4.3 Serveurs d'IA personnalisés / locaux

Vous pouvez configurer un point de terminaison de serveur d'IA personnalisé (tel qu'un serveur hébergé localement sur votre machine ou réseau local). Lors de l'utilisation d'un point de terminaison personnalisé :

- Vos instructions et l'historique des conversations sont envoyés directement à l'adresse du serveur que vous avez configuré.
- SoraVantia GK n'a aucune connaissance, aucun contrôle ni aucune responsabilité concernant les points de terminaison personnalisés.
- Si vous configurez un serveur local (par exemple, fonctionnant sur localhost), vos données restent entièrement sur votre machine.
- Si vous configurez un serveur distant, vos données sont envoyées à ce serveur. Vous êtes responsable de comprendre les pratiques de confidentialité de tout serveur personnalisé auquel vous vous connectez.
- L'URL du point de terminaison personnalisé, le nom du modèle et la clé API optionnelle sont stockés localement dans votre navigateur via chrome.storage.local.

### 4.4 Aucune autre transmission à des tiers

NuModeX Ext Maker ne transmet pas de données à :

- Des serveurs de SoraVantia GK (nous n'en avons aucun pour ce produit)
- Des services d'analyse (aucun n'est utilisé)
- Des réseaux publicitaires (aucun n'est utilisé)
- Des plateformes de médias sociaux
- Tout autre tiers non listé dans les Sections 4.1 et 4.3

## 5. Cookies et suivi

NuModeX Ext Maker n'utilise pas de cookies, de balises web, de pixels ni aucune autre technologie de suivi. Nous ne suivons pas votre activité de navigation, vos habitudes d'utilisation ni votre comportement.

## 6. Vie privée des enfants

NuModeX Ext Maker n'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons sciemment aucune information auprès d'enfants. Comme indiqué dans nos Conditions d'utilisation, les utilisateurs doivent avoir au moins 16 ans pour utiliser le Logiciel. Puisque nous ne collectons aucune donnée, il n'y a aucun risque de collecter par inadvertance des données d'enfants.

## 7. Sécurité des données

Étant donné que toutes les données sont stockées localement dans votre navigateur et que nous ne recevons ni ne stockons aucune donnée utilisateur, la sécurité de vos données dépend de :

- La sécurité de votre appareil et de votre navigateur
- Votre gestion des clés API de votre fournisseur d'IA
- Les mécanismes de protection des données intégrés à votre navigateur

Nous recommandons :

- De supprimer ou désactiver votre clé API lorsqu'elle n'est pas utilisée
- De ne pas partager votre appareil ou profil de navigateur avec des personnes non fiables
- De maintenir votre navigateur et votre système d'exploitation à jour

## 8. Vos droits

### 8.1 Droits généraux

Étant donné que SoraVantia GK ne collecte ni ne stocke aucune de vos données, les droits traditionnels des personnes concernées (accès, rectification, suppression, portabilité) s'exercent directement sur votre appareil :

- **Accès** — Toutes vos données sont visibles dans l'interface de l'extension (projets, fichiers, historique des conversations).
- **Suppression** — Supprimez des projets individuels, effacez votre clé API ou désinstallez l'extension pour supprimer toutes les données.
- **Portabilité** — Vos fichiers d'extension générés peuvent être téléchargés sous forme de ZIP à tout moment.

### 8.2 Espace Économique Européen (RGPD)

Si vous êtes dans l'EEE, vous avez des droits en vertu du Règlement Général sur la Protection des Données. Puisque nous ne collectons ni ne traitons vos données personnelles, ces droits sont intrinsèquement satisfaits. Aucun accord de traitement des données avec nous n'est nécessaire car aucune donnée ne nous est transmise.

### 8.3 Californie (CCPA/CPRA)

Si vous résidez en Californie, vous avez des droits en vertu de la California Consumer Privacy Act. Nous ne vendons, partageons ni divulguons aucune information personnelle car nous n'en collectons aucune. Il n'y a aucune information personnelle à vendre, partager ou divulguer.

### 8.4 Japon (APPI)

SoraVantia GK est une société japonaise soumise à la Loi sur la Protection des Informations Personnelles. Puisque nous ne collectons, stockons ni ne traitons de données personnelles via NuModeX Ext Maker, aucune obligation APPI ne découle de votre utilisation de ce produit.

## 9. Modifications de cette Politique de Confidentialité

Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Si nous apportons des modifications importantes, nous mettrons à jour la date de « Dernière mise à jour » en haut de ce document. Nous vous encourageons à consulter cette Politique de Confidentialité périodiquement.

Si une modification altère matériellement la manière dont les données sont traitées (par exemple, si une version future introduit des analyses ou un traitement côté serveur), nous en informerons les utilisateurs via l'interface de l'extension avant que la modification ne prenne effet.

## 10. Transparence open source

NuModeX Ext Maker est sous double licence Apache License 2.0 et Marketplace Publication License. Le code source est publiquement disponible, permettant à quiconque de vérifier nos pratiques de confidentialité en inspectant directement le code.

## 11. Nous contacter

Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité, veuillez nous contacter :

**SoraVantia GK**
E-mail : numodex@soravantia.com
Site web : https://numodex.com/numodexextmaker

## 12. Résumé

| Question | Réponse |
|----------|---------|
| Collectez-vous des données personnelles ? | Non |
| Utilisez-vous des cookies ou du suivi ? | Non |
| Avez-vous un serveur backend ? | Non |
| Où sont stockées mes données ? | Uniquement localement dans votre navigateur |
| Qui peut voir mes données ? | Vous seul, sur votre appareil |
| Des données sont-elles envoyées à SoraVantia GK ? | Non, jamais |
| Des données sont-elles envoyées aux fournisseurs d'IA ? | Oui, vos instructions sont envoyées directement au fournisseur d'IA que vous sélectionnez, en utilisant votre propre clé API |
| Puis-je supprimer mes données ? | Oui, en désinstallant l'extension ou en utilisant les options de suppression dans l'application |
| Vendez-vous des données ? | Non |
| Le code source est-il disponible ? | Oui, sous double licence Apache License 2.0 et Marketplace Publication License |

---

Copyright 2026 SoraVantia GK. All rights reserved.
