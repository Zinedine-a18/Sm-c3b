# Brief — ZL DESIGN

## Pitch

ZL DESIGN est une application web pour vendre mes services de design sportif : on y découvre mon mini-portfolio (Branding / Sport Design), on commande une affiche, on laisse un avis et on me contacte. Elle s’adresse aux clubs, athlètes et associations de Suisse romande qui veulent des visuels pros sans passer par une agence.

## Public

Voir [design/persona.md](design/persona.md).  
Marc, 34 ans, responsable communication bénévole d’un club de basket. Il utilise surtout son téléphone, le soir ou à la salle. Il veut voir des exemples, connaître le prix et commander vite. Il ferme l’app si on lui demande un compte ou si le formulaire est trop long.

## Écrans

- Écran 1 : Accueil / Portfolio
- Écran 2 : Fiche réalisation
- Écran 3 : Commander une affiche
- Écran 4 : Contact / Rendez-vous
- Écran 5 : Confirmation (après commande ou message)

## Contenu de chaque écran

### Écran 1 — Accueil / Portfolio
- On y voit : le logo ZL, l’accroche « Des visuels qui imposent une présence. », les puces de filtre (Tout / Branding / Sport Design), la grille des réalisations en cartes (image, titre, catégorie).
- On peut y faire : filtrer par catégorie, ouvrir une réalisation.
- Bouton principal : « Commander une affiche »

### Écran 2 — Fiche réalisation
- On y voit : grande image, titre, client, catégorie, prix « dès … CHF », délai, note moyenne et liste des avis.
- On peut y faire : voir tous les avis (lien « Voir les avis »), laisser un avis (note 1–5 + commentaire), partager la réalisation, revenir au portfolio (bouton « ← Retour au portfolio »).
- Bouton principal : « Commander une affiche comme celle-ci »

### Écran 3 — Commander une affiche
- On y voit : un formulaire court (type d’affiche, club / nom, date, infos, e-mail) et le prix indicatif.
- On peut y faire : choisir le type (match, événement, présentation joueur), remplir et envoyer, revenir à la réalisation (« ← Retour »).
- Bouton principal : « Envoyer ma commande »

### Écran 4 — Contact / Rendez-vous
- On y voit : un formulaire de message, une option « Je veux un rendez-vous en personne » avec date souhaitée, les liens Instagram / e-mail.
- On peut y faire : envoyer un message ou demander un rendez-vous.
- Bouton principal : « Envoyer »

### Écran 5 — Confirmation
- On y voit : une coche, « Commande envoyée ! Réponse sous 48 h. »
- On peut y faire : partager, me contacter, revenir au portfolio.
- Bouton principal : « Retour au portfolio »

## Fonctions simulées (prototype)

L’app est un prototype : l’envoi des commandes et des messages, la demande de rendez-vous, l’enregistrement des avis et le partage sont **simulés** (données en JavaScript / stockage local, pas de serveur ni d’e-mail réel). L’écran de confirmation l’indique.

## Ambiance visuelle

Audacieuse, premium, sportive. Dans le même style que mon site zinedinelakhbir.ch : grand bandeau orange, gros titres en majuscules, cartes numérotées arrondies.

## Palette

- Fond : blanc rosé très clair
- Texte : noir profond
- Accent : orange vif (couleur ZL Design)
- Attention / erreur : rouge foncé, bien lisible sur fond clair

(Couleurs en mots pour l’instant ; hex en s7-s9. Référence : brandboard ZL Design.)

## Contraintes techniques

- Mobile first (largeur de référence 390 px)
- HTML5 sémantique, CSS avec variables, JavaScript natif
- Contraste WCAG AA (≥ 4,5:1), navigation au clavier, boutons d’au moins 48 × 48 px

## Interdits

- pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter
- pas de paiement en ligne
- pas de pop-up ni de bannière publicitaire
- pas de formulaire de plus de 5 champs

## Revue croisée — Marlon Pavid

1. L’app se comprend rapidement : portfolio → réalisation → commande / contact.
2. Pas d’écran manquant, mais ajouter des boutons clairs : retour au portfolio, retour après confirmation, accès aux avis.
3. Faisable en 4 semaines. Attention aux commandes réellement envoyées, au rendez-vous, aux avis et au partage : préciser que c’est simulé.

**Corrections apportées :** boutons « Retour au portfolio » (écrans 2 et 5) et « Retour » (écran 3), lien « Voir les avis » (écran 2), écran 5 Confirmation ajouté, section « Fonctions simulées » ajoutée.
