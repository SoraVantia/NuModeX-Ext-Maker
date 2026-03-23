[English](privacy-policy-en-v2.5.md) | [日本語](privacy-policy-ja-v2.5.md) | [Español](privacy-policy-es-v2.5.md) | [한국어](privacy-policy-ko-v2.5.md) | [中文](privacy-policy-zh-v2.5.md) | [Deutsch](privacy-policy-de-v2.5.md) | [Português](privacy-policy-pt-v2.5.md) | [Italiano](privacy-policy-it-v2.5.md)

# POLITIQUE DE CONFIDENTIALITÉ

> **Remarque :** La présente Politique de Confidentialité est rédigée en anglais. Les traductions dans d'autres langues sont fournies uniquement à titre informatif. En cas de divergence entre la version anglaise et la version française, la version anglaise prévaudra et constituera la seule version juridiquement contraignante.

**NuModeX Ext Maker - Un produit de SoraVantia GK**
Date d'entrée en vigueur : 23 mars 2026
Version : 2.5

## AVIS IMPORTANT

La présente Politique de Confidentialité explique comment NuModeX Ext Maker, développé par SoraVantia GK, gère vos informations. En résumé : NuModeX Ext Maker ne collecte, ne stocke ni ne transmet aucune donnée personnelle à SoraVantia GK. L'extension n'a pas de serveur backend, pas d'analyse, pas de télémétrie et pas de code de suivi. Tout reste dans votre navigateur.

La présente Politique de Confidentialité est rédigée en anglais. Les traductions dans d'autres langues sont fournies uniquement à titre informatif. En cas de divergence entre la version anglaise et toute version traduite, la version anglaise prévaudra et constituera la seule version juridiquement contraignante.

---

## 1. QUI SOMMES-NOUS

SoraVantia GK est une société japonaise et le développeur de NuModeX Ext Maker. Nous sommes soumis à la Loi sur la Protection des Informations Personnelles (APPI) du Japon.

**Contact :**
SoraVantia GK
E-mail : numodex@soravantia.com

---

## 2. QU'EST-CE QUE NUMODEX EXT MAKER

NuModeX Ext Maker est une extension de navigateur Manifest V3 qui utilise l'IA pour aider les utilisateurs à créer des extensions de navigateur et des sites web statiques. L'extension fonctionne entièrement dans votre navigateur. Il n'y a pas de serveur backend, pas de comptes utilisateur, pas de connexion, pas d'abonnement et pas d'inscription. Les utilisateurs fournissent leurs propres clés API pour les services d'IA.

---

## 3. DONNÉES QUE NOUS NE COLLECTONS PAS

SoraVantia GK ne collecte, ne reçoit, ne stocke, ne traite ni ne transmet aucune donnée personnelle via NuModeX Ext Maker. Spécifiquement, SoraVantia GK ne collecte pas :

- Votre nom, adresse e-mail ni aucune information de contact
- Votre adresse IP ni identifiants d'appareil
- Votre historique de navigation ni activité de navigation
- Vos données de localisation
- Vos clés API ni aucune information d'identification
- Vos prompts, historique de conversation ni aucun contenu que vous créez
- Aucune donnée d'utilisation, donnée comportementale ni donnée d'interaction
- Aucun cookie, empreinte numérique ni identifiant de suivi

SoraVantia GK ne dispose d'aucun serveur, base de données, plateforme d'analyse ni infrastructure de suivi pour NuModeX Ext Maker. L'extension ne contient aucun code d'analyse, aucun code de télémétrie et aucun code de suivi de quelque nature que ce soit.

---

## 4. DONNÉES STOCKÉES LOCALEMENT DANS VOTRE NAVIGATEUR

NuModeX Ext Maker stocke les données suivantes localement dans votre navigateur. Ces données ne quittent jamais votre appareil et ne sont jamais envoyées à SoraVantia GK :

- **Clé API :** La clé API de votre fournisseur de services d'IA est stockée dans le stockage local d'extensions du navigateur. Elle est utilisée uniquement pour authentifier les requêtes auprès du fournisseur d'IA que vous avez sélectionné. SoraVantia GK ne peut pas accéder à, consulter ni récupérer votre clé API.

- **Statut d'acceptation du EULA :** Un enregistrement indiquant si vous avez accepté le Contrat de Licence Utilisateur Final, stocké dans le stockage local d'extensions du navigateur.

- **Préférences d'interface :** Vos préférences d'interface telles que la langue sélectionnée et le paramètre du mode sombre, stockées dans le stockage local d'extensions du navigateur.

- **Modèle d'IA sélectionné :** Le modèle d'IA que vous avez choisi pour la génération, stocké dans le stockage local d'extensions du navigateur.

- **Projets :** Vos fichiers générés, l'historique de conversation et l'historique d'annulation sont stockés dans IndexedDB au sein de votre navigateur. Ce sont vos produits de travail et ils restent entièrement sous votre contrôle.

- **Configuration de modèle personnalisé :** Si vous configurez un point d'accès de serveur d'IA personnalisé, l'URL du point d'accès, le nom du modèle et la clé API optionnelle sont stockés dans le stockage local d'extensions du navigateur.

**Comment supprimer vos données stockées localement :**

- Désinstallez l'extension NuModeX Ext Maker de votre navigateur. Cela supprime toutes les données stockées localement.
- Utilisez les options de suppression dans l'application pour supprimer sélectivement les clés API et les projets individuels sans désinstaller.

---

## 5. DONNÉES ENVOYÉES AUX FOURNISSEURS D'IA TIERS

Lorsque vous utilisez NuModeX Ext Maker pour créer, modifier, améliorer ou discuter d'extensions et de sites web, l'extension envoie des requêtes directement depuis votre navigateur au fournisseur d'IA que vous avez sélectionné. SoraVantia GK n'agit pas en tant qu'intermédiaire et n'a accès à aucune donnée transmise entre votre navigateur et le fournisseur d'IA.

### 5.1 Ce qui est envoyé au fournisseur d'IA

Chaque requête au fournisseur d'IA comprend :

- Votre texte de prompt (les instructions que vous saisissez)
- L'historique de conversation de la session en cours
- Les images que vous joignez à votre prompt
- Le system prompt interne du Logiciel (instructions propriétaires qui guident le comportement et le format de sortie du modèle d'IA - elles ne vous sont pas visibles mais sont incluses dans chaque requête)

### 5.2 Comment ces données sont transmises

Vos données sont transmises directement depuis votre navigateur vers les serveurs du fournisseur d'IA en utilisant votre propre clé API. La transmission utilise le point d'accès API standard du fournisseur d'IA et est chiffrée via HTTPS. Les serveurs de SoraVantia GK ne sont impliqués dans cette transmission à aucun moment.

### 5.3 Fournisseurs d'IA pris en charge

NuModeX Ext Maker prend en charge l'intégration avec divers fournisseurs d'IA, y compris, sans s'y limiter :

- Google (Gemini)
- OpenAI (GPT)
- Anthropic (Claude)
- Points d'accès de serveur d'IA personnalisés configurés par l'utilisateur
- Modèles d'IA embarqués fournis par le navigateur

### 5.4 Politiques de confidentialité des fournisseurs d'IA

Chaque fournisseur d'IA dispose de sa propre politique de confidentialité régissant la manière dont il traite les données reçues via les requêtes API. SoraVantia GK n'a aucun contrôle sur la manière dont les fournisseurs d'IA traitent, stockent ou utilisent les données que vous leur envoyez. Vous êtes responsable de l'examen et de la compréhension des politiques de confidentialité des fournisseurs d'IA que vous choisissez d'utiliser.

### 5.5 Modèles d'IA embarqués

Si vous utilisez des modèles d'IA embarqués fournis par votre navigateur, NuModeX Ext Maker ne transmet pas vos prompts à un serveur externe. Cependant, SoraVantia GK ne contrôle pas l'implémentation des modèles d'IA embarqués par le fournisseur du navigateur. Le fournisseur du navigateur peut collecter des données de télémétrie, d'utilisation ou d'autres informations liées à l'utilisation des modèles embarqués dans le cadre de ses propres pratiques en matière de données. SoraVantia GK n'a aucune connaissance, aucun contrôle ni aucune responsabilité concernant toute collecte de données effectuée par le fournisseur du navigateur en lien avec les modèles d'IA embarqués. Vous devriez consulter la politique de confidentialité du fournisseur de votre navigateur pour obtenir des détails sur la manière dont les fonctionnalités d'IA embarquées gèrent vos données.

### 5.6 Points d'accès de serveur d'IA personnalisés

Si vous configurez un point d'accès de serveur d'IA personnalisé, vos prompts sont envoyés directement à l'adresse du serveur que vous avez configuré. SoraVantia GK n'a aucune connaissance, aucun contrôle ni aucune responsabilité concernant les points d'accès personnalisés. Vous êtes seul responsable de la compréhension des pratiques en matière de données, de la sécurité et des politiques de confidentialité de tout serveur personnalisé que vous configurez.

---

## 6. SYSTEM PROMPTS ET UTILISATION DES TOKENS

NuModeX Ext Maker comprend des system prompts internes qui sont envoyés avec chaque requête API pour guider le comportement et le format de sortie du modèle d'IA. Ces system prompts sont la propriété exclusive de SoraVantia GK et ne sont pas visibles par l'utilisateur. Ils ne contiennent aucune donnée personnelle vous concernant.

Les system prompts, ainsi que votre saisie et l'historique de conversation, contribuent au nombre total de tokens de chaque requête API. Cela affecte vos coûts d'API, qui sont facturés directement par le fournisseur d'IA. Pour des détails complets sur l'utilisation des tokens et les coûts, consultez la Section 3.4 du Contrat de Licence Utilisateur Final.

---

## 7. DONNÉES ANALYTIQUES DES PLACES DE MARCHÉ

Si NuModeX Ext Maker est distribué via une ou plusieurs places de marché d'extensions de navigateur (telles que le Chrome Web Store, Edge Add-ons, Firefox Add-ons, Safari Extensions via l'App Store ou le Naver Whale Store), l'opérateur de la place de marché peut collecter des données d'utilisation auprès des utilisateurs et fournir à SoraVantia GK des analyses agrégées et non identifiables personnellement via le tableau de bord du développeur de la place de marché.

### 7.1 Ce que les opérateurs de places de marché peuvent fournir à SoraVantia GK

Les types de données agrégées que les opérateurs de places de marché peuvent fournir incluent, sans s'y limiter :

- Nombre d'installations et de désinstallations
- Impressions et vues de la page de la boutique
- Nombre d'utilisateurs actifs hebdomadaires ou quotidiens
- Répartition géographique des utilisateurs (au niveau du pays ou de la région)
- Répartition par système d'exploitation et par langue
- Taux d'adoption des versions de l'extension
- Métriques de rétention des utilisateurs
- Attribution de campagnes et de sources de référence (si des paramètres UTM sont utilisés)

### 7.2 Nature des données analytiques des places de marché

Ces données sont de nature agrégée et statistique. Elles ne contiennent pas d'informations permettant d'identifier des personnes, telles que des noms, des adresses e-mail, des adresses IP ou l'activité de navigation individuelle. SoraVantia GK ne peut pas identifier des utilisateurs individuels à partir de ces données.

### 7.3 Comment SoraVantia GK utilise les données analytiques des places de marché

SoraVantia GK utilise les données analytiques des places de marché uniquement pour :

- Comprendre les tendances d'adoption et la croissance des utilisateurs
- Améliorer le Logiciel en se basant sur l'adoption des versions et les modèles de rétention
- Évaluer l'efficacité des canaux de distribution

### 7.4 Source des données analytiques des places de marché

Ces données sont collectées et traitées entièrement par l'opérateur de la place de marché conformément à sa propre politique de confidentialité et à ses conditions d'utilisation. NuModeX Ext Maker ne contient aucun code qui collecte ou transmet des données d'analyse, de télémétrie ou de suivi. L'extension elle-même ne joue aucun rôle dans la collecte des données analytiques des places de marché.

### 7.5 Politiques de confidentialité des places de marché

Votre utilisation d'une place de marché d'extensions de navigateur est régie par la politique de confidentialité de l'opérateur de cette place de marché. SoraVantia GK n'est pas responsable des pratiques de collecte de données des opérateurs de places de marché. Pour des informations sur la manière dont chaque place de marché gère vos données, consultez :

- Google Chrome Web Store : https://policies.google.com/privacy
- Microsoft Edge Add-ons : https://privacy.microsoft.com/privacystatement
- Mozilla Firefox Add-ons : https://www.mozilla.org/privacy/
- Apple App Store : https://www.apple.com/privacy/
- Naver Whale Store : https://whale.naver.com/legal/privacy/

---

## 8. DONNÉES QUE NOUS NE PARTAGEONS PAS

Étant donné que SoraVantia GK ne collecte aucune donnée personnelle via NuModeX Ext Maker, il n'y a aucune donnée personnelle à partager. SoraVantia GK ne :

- Vend de données personnelles à des tiers
- Partage de données personnelles avec des annonceurs
- Partage de données personnelles avec des courtiers en données
- Fournit de données personnelles à un gouvernement ou une agence chargée de l'application de la loi
- Utilise de données personnelles à des fins de profilage, de publicité ciblée ou de prise de décision automatisée

---

## 9. CONFIDENTIALITÉ DES ENFANTS

NuModeX Ext Maker n'est pas destiné aux enfants. Comme indiqué dans le Contrat de Licence Utilisateur Final, les utilisateurs doivent avoir au moins 16 ans ou l'âge minimum requis pour conclure un accord contraignant en vertu des lois de leur juridiction, le plus élevé des deux étant retenu.

Étant donné que SoraVantia GK ne collecte aucune donnée personnelle, aucune donnée personnelle d'enfants n'est collectée, stockée ou traitée. Le Logiciel ne dispose pas de mécanismes de vérification de l'âge car il n'a pas de comptes utilisateur ni de système d'inscription.

---

## 10. CONFORMITÉ EN MATIÈRE DE PROTECTION DES DONNÉES

### 10.1 Loi sur la Protection des Informations Personnelles (APPI) - Japon

SoraVantia GK est une société japonaise soumise à l'APPI. Étant donné que SoraVantia GK ne collecte, ne reçoit, ne stocke ni ne traite aucune donnée personnelle via NuModeX Ext Maker, aucune obligation de traitement des données ne découle de l'APPI en ce qui concerne ce produit.

### 10.2 Règlement Général sur la Protection des Données (RGPD) - Union européenne

Étant donné que SoraVantia GK ne collecte ni ne traite aucune donnée personnelle des utilisateurs de NuModeX Ext Maker, les obligations de traitement des données du RGPD ne s'appliquent pas à l'exploitation de ce produit par SoraVantia GK. Il n'existe aucun rôle de responsable du traitement ni de sous-traitant pour SoraVantia GK en relation avec ce produit car aucune donnée personnelle ne transite vers SoraVantia GK.

Les utilisateurs de l'UE doivent être conscients que lorsqu'ils envoient des prompts à des fournisseurs d'IA tiers, ces fournisseurs peuvent traiter leurs données dans le cadre de leurs propres dispositifs de conformité au RGPD. Les utilisateurs doivent consulter les politiques de confidentialité des fournisseurs d'IA qu'ils choisissent.

### 10.3 Loi sur la Protection de la Vie Privée des Consommateurs de Californie (CCPA/CPRA) - États-Unis

Étant donné que SoraVantia GK ne collecte, ne vend ni ne partage aucune information personnelle des utilisateurs de NuModeX Ext Maker, les obligations de la CCPA/CPRA relatives aux droits des consommateurs (accès, suppression, refus de vente) ne s'appliquent pas à l'exploitation de ce produit par SoraVantia GK.

### 10.4 Architecture locale-d'abord

L'architecture locale-d'abord du Logiciel est conçue pour satisfaire par défaut les exigences applicables en matière de protection des données. Toutes les données de l'utilisateur restent dans le navigateur de l'utilisateur. SoraVantia GK n'a aucune capacité technique d'accéder à, de récupérer ou de consulter les données stockées localement par l'extension.

---

## 11. SÉCURITÉ

### 11.1 Sécurité des données locales

Toutes les données stockées par NuModeX Ext Maker sont stockées localement dans votre navigateur à l'aide de l'API de stockage d'extensions du navigateur et d'IndexedDB. La sécurité de ces données dépend de la sécurité de votre navigateur et de votre appareil. SoraVantia GK n'a pas accès à vos données stockées localement et ne peut pas les protéger contre les menaces présentes sur votre appareil.

### 11.2 Sécurité de la clé API

Votre clé API est stockée localement dans le stockage d'extensions du navigateur et est utilisée uniquement pour authentifier les requêtes auprès de votre fournisseur d'IA sélectionné. SoraVantia GK n'a pas accès à votre clé API. Vous êtes responsable de la sécurité de votre clé API et ne devez pas la partager avec d'autres personnes.

### 11.3 Données en transit

Lorsque des prompts sont envoyés à des fournisseurs d'IA tiers, ils sont transmis via HTTPS directement depuis votre navigateur vers le fournisseur d'IA. L'infrastructure de SoraVantia GK n'est pas impliquée dans cette transmission. La sécurité des données en transit vers les fournisseurs d'IA dépend des mesures de sécurité du fournisseur d'IA.

### 11.4 Sécurité du code généré

NuModeX Ext Maker génère du code d'extensions de navigateur et de sites web à l'aide de l'IA. SoraVantia GK ne révise, n'audite ni ne valide la sécurité du code généré. Le code généré peut contenir des vulnérabilités de sécurité. Vous êtes seul responsable de l'examen de la sécurité de tout code généré par le Logiciel avant l'installation, le déploiement ou la distribution.

---

## 12. SERVICES TIERS

NuModeX Ext Maker s'intègre à des fournisseurs d'IA tiers, à des points d'accès de serveur d'IA personnalisés configurés par l'utilisateur et à des modèles d'IA embarqués fournis par le navigateur. Ces services sont exploités par des tiers indépendants et ne sont pas sous le contrôle de SoraVantia GK.

SoraVantia GK n'est ni affiliée, ni approuvée, ni parrainée, ni officiellement liée de quelque manière que ce soit à Google LLC, OpenAI Inc., Anthropic PBC, ni à aucune de leurs filiales ou sociétés affiliées. Tous les noms de produits, marques commerciales et marques déposées (y compris, sans s'y limiter, Google, Gemini, OpenAI, GPT, Anthropic et Claude) sont la propriété de leurs détenteurs respectifs. Leur mention dans ce Logiciel et sa documentation a uniquement un but d'identification et n'implique aucun soutien, partenariat ou affiliation. SoraVantia GK peut ajouter, supprimer ou modifier le support de fournisseurs et modèles d'IA à tout moment. L'ajout du support d'un fournisseur d'IA n'implique aucune affiliation avec ce fournisseur ni aucun soutien de sa part.

SoraVantia GK n'est pas responsable de :

- Tout traitement, stockage ou gestion de données effectué par des fournisseurs de services tiers
- Toute modification des API, tarifs, conditions d'utilisation ou politiques de confidentialité de tiers
- Tout contenu généré, renvoyé ou traité par les services tiers
- Toute donnée transmise, traitée ou stockée sur des points d'accès de serveur d'IA personnalisés configurés par l'utilisateur

Votre utilisation des services tiers est régie par les conditions d'utilisation et les politiques de confidentialité respectives de chaque service.

---

## 13. MODIFICATIONS DE CETTE POLITIQUE DE CONFIDENTIALITÉ

### 13.1 Droits de modification

SoraVantia GK se réserve le droit de modifier cette Politique de Confidentialité à tout moment. Les modifications non substantielles seront effectives dès leur publication avec un numéro de version mis à jour. Les modifications substantielles prendront effet au plus tôt trente (30) jours après notification, sauf si la loi applicable exige un délai plus long.

### 13.2 Notification

Les modifications substantielles de cette Politique de Confidentialité seront communiquées par un ou plusieurs des canaux suivants :

- En incluant la Politique de Confidentialité mise à jour dans une nouvelle version du Logiciel distribuée via une place de marché d'extensions de navigateur où le Logiciel est publié (le cas échéant)
- En affichant un avis de la Politique de Confidentialité mise à jour via l'interface du Logiciel
- En publiant la Politique de Confidentialité mise à jour sur le site web officiel du produit (actuellement https://numodex.com/numodexextmaker/privacy, susceptible de changer en cas de transfert de propriété ou de changement de marque)
- En mettant à jour la Politique de Confidentialité dans le dépôt de code source du projet (s'il est disponible publiquement)

En cas de cession ou de transfert du Logiciel en vertu de la Section 20.6 du Contrat de Licence Utilisateur Final, l'entité successeur peut notifier les utilisateurs par des canaux équivalents sous son contrôle, à condition qu'au moins une méthode de notification transmette la Politique de Confidentialité mise à jour directement via le Logiciel lui-même.

### 13.3 Acceptation

L'utilisation continue du Logiciel après la date d'entrée en vigueur de toute modification constitue l'acceptation de la Politique de Confidentialité modifiée. Si vous n'acceptez pas les termes modifiés, vous devez cesser d'utiliser le Logiciel.

---

## 14. VOS DROITS

Étant donné que SoraVantia GK ne collecte aucune donnée personnelle via NuModeX Ext Maker, les droits traditionnels des personnes concernées (accès, rectification, effacement, portabilité) ne s'appliquent pas dans le contexte de ce produit car SoraVantia GK ne détient aucune donnée personnelle contre laquelle exercer ces droits.

Cependant, vous avez un contrôle total sur toutes les données stockées localement par l'extension :

- **Accès :** Vous pouvez consulter vos données stockées localement à tout moment via l'interface de l'extension.
- **Suppression :** Vous pouvez supprimer vos clés API et projets via les options de suppression dans l'application, ou supprimer toutes les données stockées localement en désinstallant l'extension.
- **Portabilité :** Vous pouvez télécharger et exporter vos extensions et sites web générés à tout moment via la fonctionnalité de téléchargement de l'extension.

Si vous avez des questions ou des préoccupations concernant vos données en relation avec des fournisseurs d'IA tiers, vous devez contacter directement ces fournisseurs.

---

## 15. COORDONNÉES

Pour toute question ou préoccupation relative à cette Politique de Confidentialité, contactez :

**SoraVantia GK**
E-mail : numodex@soravantia.com

---

Copyright 2026 SoraVantia GK. Tous droits réservés.

Dernière mise à jour : 23 mars 2026
Version : 2.5
