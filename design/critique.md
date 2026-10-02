# Critique comparative des propositions de design

Les 3 propositions de l’écran Accueil / Portfolio ont été générées avec une IA (Claude) à partir de [brief.md](../brief.md), des wireframes et du brandboard ZL Design. Images : `design/propositions/`.

## Proposition A — « Matchday » (style zinedinelakhbir.ch)

![A](propositions/proposition-A-matchday.png)

- **Points forts :** même univers que mon site et mon brandboard : logo ZL., fond blanc rosé, bandeau orange, gros titres en majuscules (Nimbus Sans), boutons numérotés 01 / 02 / 03, cartes de réalisations numérotées et arrondies. L’app et le site forment une seule marque. Filtre actif et bouton principal bien visibles, faciles au pouce.
- **Points faibles :** le texte blanc sur orange n’a qu’un contraste de 2,7:1, donc il échoue au WCAG AA (le bouton, le slogan et les boutons 01 / 02 / 03). Le bandeau prend de la place et pousse les réalisations vers le bas.

## Proposition B — « Galerie »

![B](propositions/proposition-B-galerie.png)

- **Points forts :** très lisible, élégant, met en valeur le Branding. Contraste excellent (texte gris 7,1:1).
- **Points faibles :** trop calme pour du sport design, une seule colonne donc seulement 2 réalisations visibles, l’orange est presque absent, le bouton principal ne ressort pas assez.

## Proposition C — « Galaxie »

![C](propositions/proposition-C-galaxie.png)

- **Points forts :** original et moderne, effet premium, cartes bien séparées.
- **Points faibles :** ne reprend pas les couleurs ZL Design, dégradés et étoiles chargés sur un petit écran. Le bouton échoue au contraste WCAG AA (blanc sur bleu clair 2,2:1). Ressemble à une app tech plus qu’à une app sport.

## Tableau

| Critère | A Matchday | B Galerie | C Galaxie |
|---|---|---|---|
| Respect de l’ambiance du brief | ✅ | ❌ | ⚠️ |
| Identité ZL Design (brandboard + site) | ✅ | ⚠️ | ❌ |
| Contraste WCAG AA | ⚠️ (à corriger) | ✅ | ❌ |
| Bouton principal visible (48 px +) | ✅ | ⚠️ | ✅ |
| Réalisations visibles sans scroller | 2 (carrousel) | 2 | 4 |

## Choix final : Proposition A — « Matchday »

C’est celle qui répond le mieux au persona (Marc veut voir des exemples sport et commander vite) et à la direction artistique. En plus, elle est cohérente avec mon site et mon brandboard.

**Corrections à apporter :**
1. Contraste : texte **noir** sur les boutons orange (7,1:1), ou orange foncé derrière le texte blanc. Le grand titre blanc reste possible avec une ombre portée.
2. Bandeau un peu moins haut pour faire remonter les réalisations.
3. Reprendre la mise en page aérée de B pour la fiche réalisation et les formulaires.
