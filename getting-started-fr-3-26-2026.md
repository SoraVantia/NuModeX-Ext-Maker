[English](getting-started-en-3-26-2026.md) | [日本語](getting-started-ja-3-26-2026.md) | [Español](getting-started-es-3-26-2026.md) | [한국어](getting-started-ko-3-26-2026.md) | [中文](getting-started-zh-3-26-2026.md) | [Deutsch](getting-started-de-3-26-2026.md) | [Português](getting-started-pt-3-26-2026.md) | [Italiano](getting-started-it-3-26-2026.md)

# Guide de Demarrage de NuModeX Ext Maker

Ce guide vous accompagne dans la configuration, la premiere compilation et les problemes courants avec plus de details que le README.

## Prerequis

- Un navigateur base sur Chromium (Chrome, Edge, Brave, Whale) ou Firefox
- Une cle API d'au moins un fournisseur d'IA cloud - non necessaire si vous utilisez des modeles embarques
- Une connaissance de base des extensions de navigateur (utile mais pas obligatoire)

## Configuration des Modeles Cloud

### 1. Installer l'extension

**Depuis les magasins d'extensions de navigateur (prochainement) :**
NuModeX Ext Maker n'est pas encore disponible sur aucun magasin d'extensions de navigateur. La disponibilite en magasin sera annoncee sur [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) et via GitHub Releases.

**Depuis le code source (mode developpeur) :**
1. Clonez ou telechargez le depot.
2. Ouvrez `chrome://extensions` (ou l'equivalent pour votre navigateur).
3. Activez le mode developpeur.
4. Cliquez sur "Charger l'extension non empaquetee" et selectionnez le dossier du navigateur approprie (`browsers/chrome`, `browsers/edge` ou `browsers/firefox`).

### 2. Obtenir votre cle API

Vous avez besoin d'une cle API d'au moins un fournisseur d'IA cloud compatible. Visitez la console developpeur ou la plateforme API de votre fournisseur pour generer une cle. La cle de chaque fournisseur est sauvegardee separement dans l'extension - vous pouvez changer de fournisseur librement.

### 3. Configurer et construire

1. Acceptez les Conditions d'Utilisation (apparait automatiquement au premier lancement).
2. Cliquez sur l'icone Parametres dans le popup de l'extension.
3. Collez votre cle API et cliquez sur "Enregistrer la cle".
4. Selectionnez un modele d'IA dans le menu deroulant.
5. Decrivez ce que vous souhaitez construire dans le chat.
6. Cliquez sur "Construire l'Extension" ou "Construire le Site Web" et attendez la generation.
7. Passez en revue et editez les fichiers generes selon vos besoins avec les outils d'edition integres.
8. Cliquez sur "Tout telecharger en ZIP".
9. Pour les extensions : Extrayez le ZIP, allez a `chrome://extensions`, activez le mode developpeur et cliquez sur "Charger l'extension non empaquetee". Pour les sites web : Extrayez et ouvrez `index.html` dans votre navigateur.

> **Autres navigateurs :** Les extensions generees sont Manifest V3 et compatibles avec Edge, Brave, Whale et d'autres navigateurs bases sur Chromium. Les etapes de chargement lateral varient selon le navigateur.

## Configuration des Modeles Embarques

Les modeles embarques fonctionnent entierement sur votre materiel sans cle API ni connexion cloud. **Ces modeles ne sont disponibles que dans des navigateurs specifiques :** Gemini Nano dans Google Chrome et Phi-4 Mini dans Microsoft Edge. Les autres navigateurs bases sur Chromium (Brave, Whale, etc.) et Firefox ne supportent pas actuellement l'IA embarquee via les APIs du navigateur.

**Differences cles avec les modeles cloud :**
- Les modeles embarques ne peuvent etre utilises que pour le **chat et l'edition de fichiers**, pas pour les compilations completes.
- Le modele doit etre telecharge lors de la premiere utilisation (cela peut prendre plusieurs minutes).
- Les exigences materielles sont strictes - verifiez avant de tenter un depannage.

### Chrome - Gemini Nano

1. Utilisez Chrome version 127 ou superieure (Dev ou Canary recommande pour de meilleurs resultats).
2. Allez a `chrome://flags/#optimization-guide-on-device-model` et configurez sur **Enabled BypassPerfRequirement**.
3. Allez a `chrome://flags/#prompt-api-for-gemini-nano` et configurez sur **Enabled**.
4. Redemarrez Chrome.
5. Allez a `chrome://on-device-internals` et verifiez le statut du modele. Si le modele n'est pas telecharge, allez a `chrome://components/`, trouvez **Optimization Guide On Device Model** et cliquez sur **Check for update**.
6. Attendez que le modele se telecharge. Cela peut prendre plusieurs minutes. Gardez Chrome ouvert pendant le telechargement.

### Edge - Phi-4 Mini

1. Utilisez Edge Dev ou Canary (version 138+). Edge 139+ inclut Phi-4 Mini par defaut.
2. Allez a `edge://flags/` et recherchez **Prompt API for Phi mini**, configurez sur **Enabled**.
3. Optionnellement, activez **Enable on device AI model debug logs** pour le depannage.
4. Redemarrez Edge.
5. Allez a `edge://on-device-internals` et verifiez que votre **Device performance class** est **High** ou superieur.
6. Le modele se telecharge automatiquement lors de la premiere utilisation. Cela peut prendre plusieurs minutes. Gardez Edge ouvert pendant le telechargement.

### Configuration requise

**Edge :** Windows 10/11 ou macOS 13.3+, au moins 20 Go d'espace libre, 5,5 Go+ de VRAM et une connexion internet non limitee.

**Chrome :** 22 Go d'espace libre, plus de 4 Go de VRAM (GPU) ou 16 Go+ de RAM avec 4+ coeurs CPU (mode CPU) et une connexion non limitee.

> **Remarque :** Les modeles embarques ne peuvent etre utilises que pour le chat et l'edition de fichiers. Pour construire des extensions ou des sites web complets, selectionnez un modele cloud.

## Comprendre les modes de compilation

NuModeX Ext Maker dispose de deux modes de compilation :

**Construire l'Extension** - Genere une extension de navigateur Manifest V3 complete avec manifest.json, fichiers de popup, scripts de contenu et autres fichiers necessaires.

**Construire le Site Web** - Genere un site web statique complet avec des fichiers HTML, CSS et JavaScript.

Les deux modes utilisent la meme interface de chat. L'IA lit l'integralite de votre historique de conversation lors de la generation, vous pouvez donc affiner vos exigences a travers plusieurs messages avant de compiler.

## Revision des fichiers generes

Apres une compilation, le panneau droit de l'extension affiche vos fichiers generes.

**Arborescence de fichiers** - Tous les fichiers generes apparaissent dans une liste cliquable en haut du panneau droit. Cliquez sur n'importe quel fichier pour voir son contenu. Les fichiers sont organises par nom, y compris les chemins de sous-repertoires (par exemple, `assets/style.css`).

**Visionneuse de code** - Lorsque vous selectionnez un fichier, son contenu apparait dans la visionneuse de code sous l'arborescence de fichiers avec coloration syntaxique. La visionneuse detecte automatiquement le type de fichier (JavaScript, JSON, HTML, CSS, Markdown) et applique la coloration appropriee. Vous pouvez copier le contenu de n'importe quel fichier dans le presse-papiers en utilisant le bouton Copier.

**Edition manuelle** - Cliquez sur le bouton d'edition au-dessus de la visionneuse de code pour passer en mode edition manuelle. La visionneuse de code se transforme en editeur de texte ou vous pouvez effectuer des modifications directement a la main. Cliquez a nouveau sur le bouton pour quitter le mode edition manuelle.

**Apercu en direct** - Pour voir un apercu visuel de votre extension ou site web, cliquez sur Plus (▾) > Apercu. Un modal s'ouvre avec un apercu en sandbox qui affiche votre popup.html (pour les extensions) ou index.html (pour les sites web). L'apercu integre automatiquement vos fichiers CSS et JavaScript pour qu'ils s'affichent correctement. Notez qu'il s'agit d'un apercu uniquement visuel - les APIs d'extensions de navigateur (comme chrome.tabs, chrome.storage) et les ressources externes ne fonctionneront pas dans l'apercu. Si votre projet n'a pas de popup.html ni d'index.html, l'apercu affichera un message informatif.

**Voir les modifications** - Apres une edition par IA, cliquez sur Voir les modifications pour voir une comparaison avant/apres de ce qui a ete modifie. Vous pouvez basculer entre la vue unifiee et la vue cote a cote. Si plusieurs fichiers ont ete modifies, des onglets en haut vous permettent de basculer entre eux.

## Edition apres compilation

Apres votre premiere compilation, vous disposez de plusieurs options d'edition :

**Editer le Fichier** - Selectionnez un seul fichier et decrivez les modifications. Ideal pour les corrections ciblees.

**Ajouter un Fichier** - Creez un nouveau fichier et decrivez ce qu'il doit contenir.

**Ameliorer l'Extension** - Decrivez des modifications sur l'ensemble du projet. L'IA peut modifier plusieurs fichiers a la fois.

**Edition Manuelle** - Cliquez directement dans la visionneuse de code pour editer le code a la main.

**Annuler** - Revient sur la derniere modification IA. Un seul niveau d'annulation est disponible.

## Choisir le bon modele

Plutot que de recommander des modeles specifiques (qui changent frequemment), voici comment choisir en fonction de ce qui compte :

**Taille de la fenetre de contexte** - Determine la quantite d'historique de conversation et de code que le modele peut traiter en une fois. Pour des extensions simples avec peu de fichiers, une petite fenetre de contexte suffit. Pour des projets complexes a plusieurs fichiers, choisissez un modele avec une fenetre de contexte plus grande afin qu'il puisse voir tous vos fichiers et la conversation en une seule fois.

**Limite de tokens en sortie** - Determine la quantite de code que le modele peut generer en une seule reponse. Si vous voyez des erreurs d'analyse JSON ou une sortie tronquee, passez a un modele avec une limite de sortie plus elevee. Les projets plus importants necessitent des modeles capables de produire plus de tokens.

**Capacite de raisonnement** - Certains modeles sont meilleurs pour la logique complexe, les instructions en plusieurs etapes et le maintien de la coherence entre les fichiers. Pour des extensions simples de popup, la plupart des modeles conviennent. Pour des extensions avec des scripts de contenu, des workers en arriere-plan et des interactions complexes, choisissez un modele reconnu pour son raisonnement solide.

**Cout** - Les modeles plus grands et plus performants coutent plus cher par appel API. Commencez avec un modele plus petit pour le chat et les modifications simples, puis passez a un modele plus grand lorsque vous devez compiler ou ameliorer des projets complexes. Les couts varient en fonction du modele et du fournisseur d'IA que vous selectionnez. SoraVantia GK n'est affiliee a aucun fournisseur d'IA et ne controle ni ne recoit aucune partie des frais d'API.

**Vitesse** - Les modeles plus petits repondent plus rapidement. Si vous iterez rapidement sur de petites modifications, un modele rapide fait gagner du temps. Pour les compilations completes ou la qualite compte plus que la vitesse, un modele plus grand vaut l'attente.

| Cas d'utilisation | Ce qu'il faut rechercher |
|----------|-----------------|
| Extensions simples (popup uniquement, petits scripts) | N'importe quel modele avec des limites de contexte et de sortie moderees |
| Extensions complexes (scripts de contenu, workers en arriere-plan, plusieurs fichiers) | Grande fenetre de contexte, limite de sortie elevee, raisonnement solide |
| Questions rapides de chat et brainstorming | N'importe quel modele - la vitesse compte plus que la taille de sortie |
| Editions de fichier unique | N'importe quel modele, y compris embarque (gratuit, sans cle API) |
| Developpement soucieux du budget | Modeles petits ou moyens pour le chat, grands modeles uniquement pour les compilations |

Consultez la documentation des modeles de votre fournisseur d'IA pour connaitre les tailles de fenetre de contexte, limites de sortie et tarifs actuels.

## Conseils pour de meilleurs resultats

- Commencez par une description simple et construisez progressivement. Decrivez d'abord la fonctionnalite principale, puis utilisez Editer et Ameliorer pour ajouter plus de fonctionnalites de maniere incrementale.
- Utilisez un modele avec une fenetre de contexte plus grande pour les projets complexes. Les modeles plus grands gerent mieux les sorties volumineuses que les plus petits.
- Si vous voyez "Impossible d'extraire les fichiers de l'extension", le prompt etait trop complexe pour une generation. Simplifiez le prompt initial et ajoutez des fonctionnalites par l'edition.
- Si vous voyez une erreur d'analyse JSON, la reponse du modele etait trop longue et a ete coupee. Essayez un prompt plus simple ou passez a un modele avec une limite de sortie plus grande.
- Les modeles cloud, personnalises et distants peuvent tous etre utilises pour construire, editer et chatter. Choisissez le modele qui correspond le mieux a vos besoins et a votre budget.
- Les modeles embarques fonctionnent pour le chat et l'edition mais ne peuvent pas construire d'extensions ou de sites web complets. Utilisez un modele cloud ou personnalise pour la construction.
- Entree pour envoyer un message de chat. Maj+Entree pour une nouvelle ligne. Ctrl/Cmd+Entree pour construire une extension. Ctrl/Cmd+Maj+Entree pour construire un site web.
- Apres la construction, utilisez Editer le Fichier pour les modifications d'un seul fichier et Ameliorer l'Extension pour les modifications sur plusieurs fichiers.
- Importez des fichiers existants via Plus (▾) > Importer des Fichiers pour les editer avec l'IA.

## Depannage

**Avant de tenter un depannage, consultez les ressources suivantes :**
- La documentation API de votre fournisseur d'IA cloud pour les limites actuelles des modeles, les tarifs et l'etat du service.
- La documentation developpeur de votre navigateur pour les exigences les plus recentes en matiere d'IA embarquee et les problemes connus.
- La section [Configuration des Modeles Embarques](#configuration-des-modeles-embarques) ci-dessus pour les exigences de flags et de materiel.

### "Cle API non configuree"
Ouvrez les Parametres et collez votre cle API pour le fournisseur selectionne. Chaque fournisseur a sa propre cle - assurez-vous d'avoir sauvegarde la cle du fournisseur dont vous avez selectionne le modele.

### "Impossible d'extraire les fichiers de l'extension"
La reponse de l'IA etait trop complexe ou mal formatee. Essayez :
- De simplifier votre prompt (decrivez moins de fonctionnalites a la fois)
- De passer a un modele avec une limite de sortie plus grande
- De compiler d'abord une version de base, puis d'utiliser "Ameliorer l'Extension" pour ajouter des fonctionnalites

### "Erreur d'analyse JSON"
La reponse du modele etait trop longue et a ete tronquee avant que le JSON ne puisse etre complete. Essayez :
- Un prompt plus simple
- Un modele avec une limite de tokens en sortie plus elevee

### Modele embarque bloque sur "Telechargement"
C'est un probleme courant. Verifiez :
1. **Les exigences materielles sont-elles respectees ?** Allez a `edge://on-device-internals` (Edge) ou `chrome://on-device-internals` (Chrome) et verifiez votre classe d'appareil.
2. **Les flags sont-ils actives ?** Consultez la section [Configuration des Modeles Embarques](#configuration-des-modeles-embarques) ci-dessus.
3. **Assez d'espace de stockage ?** Edge necessite 20 Go libres, Chrome necessite 22 Go libres.
4. **Connexion limitee ?** Le modele ne se telechargera pas sur une connexion avec limite de donnees.
5. **Le navigateur est-il reste ouvert ?** Le telechargement s'arrete si vous fermez le navigateur.
6. **Essayez de redemarrer le navigateur** et attendez 5-10 minutes.

### L'extension ne fonctionne pas apres le chargement
- Verifiez la console du navigateur (`chrome://extensions` > cliquez sur "Erreurs" sur votre extension) pour les messages d'erreur.
- Assurez-vous d'avoir charge le bon dossier (celui contenant manifest.json).
- Essayez de regenerer avec un prompt plus detaille qui specifie le comportement exact.

### Le modele personnalise ne repond pas
- Verifiez que l'URL du endpoint est correcte et accessible.
- Confirmez que le serveur supporte le format d'API `/v1/chat/completions`.
- Verifiez si le serveur necessite une cle API et si vous en avez fourni une.
- Accordez la permission d'hote de l'extension lorsque demande.

## Raccourcis clavier

| Raccourci | Action |
|----------|--------|
| Entree | Envoyer un message de chat |
| Maj+Entree | Nouvelle ligne dans le chat |
| Ctrl/Cmd+Entree | Construire l'Extension |
| Ctrl/Cmd+Maj+Entree | Construire le Site Web |

## Prochaines etapes

- Lisez le [README](README.fr.md) pour la liste complete des fonctionnalites
- Consultez [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) pour les informations sur les dependances
- Signalez des bugs ou demandez des fonctionnalites via GitHub Issues
- Visitez [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) pour les mises a jour
