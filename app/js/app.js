// =========================================================
// ZL DESIGN — Chargement des réalisations avec fetch()
// Les 4 états de l'interface : chargement, succès, vide, erreur
// Pas de framework : DOM pur et asynchrone.
// =========================================================

const CHEMIN_DONNEES = "../data.json"; // data.json est à la racine du dépôt

const conteneur = document.getElementById("liste-cartes");
const compteur = document.getElementById("compteur");

// Petite sécurité : on échappe le texte avant de l'injecter dans le HTML
function echapper(texte) {
  return String(texte)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Fabrique le HTML d'une carte à partir d'une fiche du JSON
function creerCarte(item, index) {
  const numero = String(index + 1).padStart(2, "0");
  const visuel = "visuel--" + ((index % 6) + 1); // visuels provisoires (6 variantes CSS)
  const dispo = item.estDisponible
    ? "<span class='badge badge--dispo'>Disponible</span>"
    : "<span class='badge badge--complet'>Complet</span>";

  return `
    <article>
      <a class="carte" href="#">
        <div class="carte__visuel ${visuel}" role="img" aria-label="${echapper(item.titre)}"></div>
        <span class="carte__num">${numero}</span>
        ${dispo}
        <div class="carte__texte">
          <p class="carte__cat">${echapper(item.categorie)} · ${echapper(item.type)}</p>
          <h3>${echapper(item.titre)}</h3>
          <p class="carte__prix">dès ${item.prixDes.toFixed(0)} CHF · ${echapper(item.commune)}</p>
        </div>
      </a>
    </article>
  `;
}

async function chargerRealisations() {
  if (!conteneur) return;

  // État 1 — Chargement
  conteneur.innerHTML = "<p class='etat etat-chargement'>Chargement des réalisations en cours…</p>";
  compteur.textContent = "";

  try {
    const reponse = await fetch(CHEMIN_DONNEES);
    if (!reponse.ok) {
      throw new Error("Erreur réseau : code HTTP " + reponse.status);
    }
    const donnees = await reponse.json();

    // État 3 — Vide
    if (!Array.isArray(donnees) || donnees.length === 0) {
      conteneur.innerHTML = "<p class='etat etat-vide'>Aucune réalisation pour le moment. Revenez bientôt !</p>";
      compteur.textContent = "0 réalisation";
      return;
    }

    // État 2 — Succès
    conteneur.innerHTML = donnees.map(creerCarte).join("");
    compteur.textContent = donnees.length + " réalisations";
  } catch (erreur) {
    // État 4 — Erreur
    console.error("Détail technique :", erreur);
    conteneur.innerHTML = "<p class='etat etat-erreur'>⚠️ Impossible de charger les réalisations. Vérifiez votre connexion puis rafraîchissez la page.</p>";
    compteur.textContent = "";
  }
}

// Lancement automatique au chargement de la page
chargerRealisations();
