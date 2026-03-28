[English](README.md) | [日本語](README.ja.md) | [Español](README.es.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Italiano](README.it.md)

# NuModeX Ext Maker

![License: BSL 1.1](https://img.shields.io/badge/License-BSL%201.1-blue.svg) ![Change License: Apache 2.0](https://img.shields.io/badge/Change%20License-Apache%202.0%20(2030)-green.svg) ![Chrome](https://img.shields.io/badge/Chrome-Supported-brightgreen?logo=googlechrome&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-Supported-brightgreen?logo=microsoftedge&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-Supported-brightgreen?logo=firefox&logoColor=white) ![Whale](https://img.shields.io/badge/Whale-Supported-brightgreen?logo=naver&logoColor=white) ![Opera](https://img.shields.io/badge/Opera-Supported-brightgreen?logo=opera&logoColor=white) ![Languages](https://img.shields.io/badge/Languages-9-blueviolet)

Creez des extensions de navigateur Manifest V3 et des sites web statiques avec l'IA.

Un constructeur d'extensions de navigateur Manifest V3 et de sites web statiques par SoraVantia GK. Sans connexion, sans abonnement, sans backend. Utilisez des fournisseurs d'IA cloud, des modeles embarques ou votre propre serveur d'IA local ou distant.

**Site web :** https://numodex.com/numodexextmaker

**Firefox Add-ons:** https://addons.mozilla.org/firefox/addon/numodex-ext-maker/

## Fonctionnalites

- Generation d'extensions de navigateur par IA (Manifest V3)
- Support multi-fournisseur. Utilisez votre propre cle API de Google, OpenAI ou Anthropic
- Modeles d'IA embarques. Utilisez l'IA fournie par le navigateur sans cle API requise
- Support de modeles personnalises. Connectez-vous a tout serveur d'IA local ou distant supportant l'API /v1/chat/completions
- Interface de chat conversationnelle avec historique complet des conversations
- Support de prompts texte et image
- Edition par IA. Editez des fichiers individuels, ajoutez de nouveaux fichiers ou ameliorez l'extension entiere avec un seul prompt
- Edition manuelle du code avec editeur integre
- Support d'annulation pour les modifications IA
- Affichage des modifications. Comparez les differences avant/apres en vue unifiee ou cote a cote
- Apercu en direct. Visualisez un apercu de votre extension generee dans un iframe isole
- Copiez le contenu des fichiers dans le presse-papiers en un clic
- Visionneuse de code avec coloration syntaxique et arborescence de fichiers integrees
- Telechargement ZIP des extensions generees en un clic
- Support de projets multiples. Creez, renommez, basculez entre et supprimez des projets
- Nommage automatique. Les projets sont automatiquement nommes a partir du manifest de l'extension generee
- Persistance des projets. Votre travail est sauvegarde automatiquement et restaure a la reouverture
- Raccourcis clavier. Entree pour envoyer, Maj+Entree pour nouvelle ligne, Ctrl/Cmd+Entree pour construire l'extension, Ctrl/Cmd+Maj+Entree pour construire le site web
- Detection du mode sombre systeme. S'adapte automatiquement a la preference de votre OS au premier lancement
- Bouton de basculement du mode sombre pour le changement manuel
- Support multi-navigateur. Construisez pour Chrome, Edge et Firefox
- 9 langues : anglais, japonais, espagnol, francais, coreen, chinois, allemand, portugais, italien
- Guide d'aide integre et conditions d'utilisation dans l'application
- Aucun compte requis. Fonctionne entierement dans votre navigateur
- Construisez des sites web statiques (HTML/CSS/JS) avec l'IA - meme flux de travail base sur le chat, sortie differente
- Disponible pour un usage personnel et commercial

## Flux de Donnees

```mermaid
graph LR
    A[Votre Navigateur] --> B[NuModeX Ext Maker]
    B --> C[Stockage Local<br/>IndexedDB + Stockage d'Extension]
    B --> D[Apercu en Sandbox<br/>iframe]
    B --> E[Fournisseurs d'IA Cloud<br/>Votre Cle API]
    B --> F[IA Embarquee<br/>Traite sur Votre Appareil]
    B --> G[Serveur Local Personnalise<br/>Votre Endpoint Configure]
    B --> H[Serveur Distant Personnalise<br/>Votre Endpoint Configure]

    style A fill:#6b7280,color:#fff,stroke:#4b5563
    style B fill:#f97316,color:#fff,stroke:#ea580c
    style C fill:#f97316,color:#fff,stroke:#ea580c
    style D fill:#f97316,color:#fff,stroke:#ea580c
    style E fill:#169cef,color:#fff,stroke:#1280c4
    style F fill:#f97316,color:#fff,stroke:#ea580c
    style G fill:#f97316,color:#fff,stroke:#ea580c
    style H fill:#169cef,color:#fff,stroke:#1280c4
```

> 🟠 Orange = reste sur votre appareil | 🔵 Bleu = transmis en utilisant votre cle API | SoraVantia GK n'est pas dans le chemin des donnees.

## Pour Commencer

1. Acceptez les Conditions d'Utilisation (premier lancement).
2. Entrez votre cle API de votre fournisseur d'IA cloud dans les Parametres.
3. Selectionnez un modele, decrivez ce que vous souhaitez et cliquez sur "Construire l'Extension" ou "Construire le Site Web".
4. Telechargez les fichiers generes en ZIP et chargez-les dans votre navigateur.

Pour des instructions detaillees de configuration, la configuration de l'IA embarquee, le depannage et les conseils, consultez le [Guide de Demarrage](getting-started-fr-3-26-2026.md).

## Cles API

Vous avez besoin de votre propre cle API pour utiliser cette extension. Obtenez-en une aupres de votre fournisseur cloud. Les cles API sont stockees localement dans votre navigateur et ne sont jamais envoyees a SoraVantia GK ni a un tiers.

## Langues

Anglais, japonais, espagnol, francais, coreen, chinois, allemand, portugais, italien

## Licence

NuModeX Ext Maker est source available et licencie sous la Business Source License 1.1 (BSL 1.1). Le code source est disponible publiquement dans le depot du projet.

**Business Source License 1.1** Le code source est disponible sous la BSL 1.1. Vous pouvez utiliser, modifier et creer des oeuvres derivees a des fins personnelles ou professionnelles internes. Le 23 mars 2030, la licence se convertit automatiquement en Apache License, Version 2.0. Consultez [LICENSE](LICENSE) pour le texte integral.

**Concession d'Usage Supplementaire** Vous pouvez faire un usage en production de l'Oeuvre Licenciee, a condition que votre usage n'inclue pas la redistribution de l'Oeuvre Licenciee (ou de toute oeuvre derivee) sur un marketplace d'extensions de navigateur.

### Ce que vous POUVEZ faire

- Utiliser l'extension a des fins personnelles ou professionnelles internes
- Cloner le depot et construire ou charger lateralement l'extension vous-meme
- Modifier le code source et creer des oeuvres derivees pour un usage hors marketplace
- Distribuer par tout canal autre que les marketplaces d'extensions de navigateur
- Etudier, apprendre et faire reference au code source
- Charger lateralement ou deployer directement aux utilisateurs (par ex., deploiement en entreprise)
- Signaler des bugs, demander des fonctionnalites et envoyer des suggestions via Issues
- Contribuer au projet original

### Ce qui necessite une autorisation

- Publication sur Chrome Web Store, Firefox Add-ons, Edge Add-ons, Safari Extensions, Naver Whale Store ou tout marketplace d'extensions de navigateur

### Date de Changement

Le 23 mars 2030, l'Oeuvre Licenciee sera automatiquement disponible sous la Apache License, Version 2.0.

Pour une Licence de Marketplace ou pour des demandes commerciales, contactez : numodex@soravantia.com

## Mentions Legales

En installant ou en utilisant NuModeX Ext Maker, vous acceptez le [Contrat de Licence Utilisateur Final](eula-fr-v2.5.md) et la [Politique de Confidentialite](privacy-policy-fr-v2.5.md).
Ce projet n'accepte pas les pull requests pour le moment. Veuillez utiliser les Issues pour signaler des bugs et demander des fonctionnalites. Cela pourrait changer a l'avenir.

## Avis Relatifs aux Tiers

NuModeX Ext Maker s'integre a des services d'IA tiers. SoraVantia GK n'est ni affiliee, ni approuvee, ni officiellement liee a aucun fournisseur d'IA tiers. Tous les noms de produits, marques commerciales et marques deposees sont la propriete de leurs detenteurs respectifs. Leur mention dans ce projet a uniquement un but d'identification. SoraVantia GK peut ajouter, supprimer ou modifier le support de fournisseurs et modeles d'IA a tout moment.

## Licences de Tiers

Consultez [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) pour plus de details.

## Droits d'Auteur

Copyright 2026 SoraVantia GK. Tous droits reserves.
