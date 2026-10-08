# Prédictions — e1-8 La caisse du kiosque

| N° | Scénario | Ma prédiction | Résultat réel | Juste ? |
|---|---|---|---|---|
| 1 | Frites | 6 CHF | 06 CHF | ❌ |
| 2 | Frites, puis Boisson | 064 CHF | 064 CHF | ✅ |
| 3 | Frites, code PALEO, Appliquer | Le total revient à 0 | Non, reste 06 CHF | ❌ |
| 4 | Frites, Vider, Frites | 6 CHF | 066 CHF | ❌ |

**Score : 1 / 4**

## Mes erreurs expliquées

**Scénario 1 :** la boîte `total` vaut le nombre 0, mais on lui ajoute le texte `"6"` (entre guillemets). Le `+` colle alors au lieu d'additionner : 0 et "6" donnent "06".

**Scénario 3 :** le code compare avec `=== "paleo"` en minuscules. J'ai tapé `PALEO` en majuscules comme sur l'affiche. Pour `===`, ce n'est pas le même texte, donc la condition est fausse et rien ne se passe.

**Scénario 4 :** Vider change seulement la vitrine (l'écran affiche « 0 CHF »), mais pas la boîte `total`, qui vaut toujours "06". Au clic suivant sur Frites, on colle encore "6" : "06" + "6" donne "066".
