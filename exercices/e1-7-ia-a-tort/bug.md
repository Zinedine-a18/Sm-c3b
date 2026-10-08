# Bug du compteur

Ce que je vois : quand je clique sur +1, le chiffre à l'écran reste à 0. Dans la console, « n vaut maintenant 1, 2, 3… » s'affiche quand même.
Ce que j'attendais : le chiffre à l'écran augmente de 1 à chaque clic.
La boîte qui change : la variable `n` (en mémoire), elle passe bien à 1, 2, 3…
Ce qui ne se met pas à jour : la vitrine, c'est-à-dire le paragraphe `#affiche` à l'écran. Personne ne recopie `n` dedans.

## Correction

J'ai ajouté une ligne dans la fonction du clic, juste après `n = n + 1;` :

```js
document.getElementById("affiche").textContent = n;
```

## Explication (comme à un camarade)

Le compteur avait deux mondes : la boîte `n` en mémoire et le chiffre affiché à l'écran. Le clic changeait bien la boîte, mais rien ne recopiait la nouvelle valeur à l'écran, donc la vitrine restait sur 0. La ligne ajoutée va chercher l'élément `affiche` et remplace son texte par la valeur de `n` à chaque clic.
