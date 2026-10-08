# Prédictions — e1-6 Prédis avant de cliquer

| N° | Extrait | Ma prédiction | Résultat réel | Juste ? |
|---|---|---|---|---|
| 1 | Afficher | « Bonjour la classe » | Bonjour la classe | ✅ |
| 2 | Calculer | 43 | 7 | ❌ |
| 3 | Compter | 3 | 3 | ✅ |
| 4 | Condition | suffisant | suffisant | ✅ |
| 5 | Boucle simple | 1 2 3 | 1 2 3 | ✅ |
| 6 | Clic (3 clics) | 3 | 3 | ✅ |

**Score : 5 / 6**

## Mon erreur

**Extrait 2 :** j'ai cru que `a + b` collait les deux chiffres (43). Mais `a` et `b` sont des nombres (sans guillemets), donc le `+` additionne : 4 + 3 = 7. Le `+` ne colle que quand il y a du texte entre guillemets.

## 7e extrait (inventé par moi)

```js
let prix = 10;
let rabais = 3;
prix = prix - rabais;
document.getElementById("out7").textContent = "Prix : " + prix + " CHF";
```

**Prédiction de Marlon Pavid (avant de lancer) :** « Je pense que l'écran va afficher : Prix : 7 CHF. »

**Résultat réel :** Prix : 7 CHF ✅

**Pourquoi :** `prix` et `rabais` sont des nombres, donc `10 - 3` donne 7. Ensuite le `+` colle le texte « Prix : », le nombre 7 et « CHF ».
