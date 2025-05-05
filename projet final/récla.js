
// Sélectionner le bouton "En savoir plus"
const button = document.querySelector('.en-savoir-plus');

// Sélectionner l'élément à afficher
const elementToDisplay = document.querySelector('#plus');

// Ajouter un écouteur d'événements sur le bouton
button.addEventListener('click', () => {
  // Afficher ou cacher l'élément en fonction de sa visibilité actuelle
  if (elementToDisplay.style.display === 'none') {
    elementToDisplay.style.display = 'block';
  } else {
    elementToDisplay.style.display = 'none';
  }
});
// Fonction pour générer les options des sélecteurs de date
function genererOptionsDate() {
  const jourSelect = document.getElementById('jour');
  const moisSelect = document.getElementById('mois');
  const anneeSelect = document.getElementById('annee');

  // Générer les options pour les jours
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    jourSelect.add(option);
  }

  // Générer les options pour les mois
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  for (let i = 0; i < mois.length; i++) {
    const option = document.createElement('option');
    option.value = i + 1;
    option.text = mois[i];
    moisSelect.add(option);
  }

  // Générer les options pour les années
  const anneeActuelle = new Date().getFullYear();
  for (let i = anneeActuelle; i <= anneeActuelle + 2; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    anneeSelect.add(option);
  }
}

// Fonction pour afficher les heures disponibles
function afficherHeuresDisponibles(date) {
  const heuresDisponiblesDiv = document.getElementById('heures-disponibles');
  heuresDisponiblesDiv.innerHTML = '';

  // Simuler les heures disponibles (exemple)
  const heuresDisponibles = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  if (heuresDisponibles.length === 0) {
    heuresDisponiblesDiv.textContent = 'Pas de disponibilité';
  } else {
    const heuresList = document.createElement('ul');
    heuresDisponibles.forEach(heure => {
      const heureItem = document.createElement('li');
      heureItem.textContent = heure;
      heuresList.appendChild(heureItem);
    });
    heuresDisponiblesDiv.appendChild(heuresList);
  }
}

// Événements pour la sélection de la date
document.getElementById('jour').addEventListener('change', function() {
  const jour = this.value;
  const mois = document.getElementById('mois').value;
  const annee = document.getElementById('annee').value;
  const date = new Date(annee, mois - 1, jour);
  afficherHeuresDisponibles(date);
});

document.getElementById('mois').addEventListener('change', function() {
  const jour = document.getElementById('jour').value;
  const mois = this.value;
  const annee = document.getElementById('annee').value;
  const date = new Date(annee, mois - 1, jour);
  afficherHeuresDisponibles(date);
});

document.getElementById('annee').addEventListener('change', function() {
  const jour = document.getElementById('jour').value;
  const mois = document.getElementById('mois').value;
  const annee = this.value;
  const date = new Date(annee, mois - 1, jour);
  afficherHeuresDisponibles(date);
});



// Fonction pour afficher les heures disponibles
function afficherHeuresDisponibles(date) {
  const heuresDisponiblesDiv = document.getElementById('heures-disponibles');
  heuresDisponiblesDiv.innerHTML = '';

  // Simuler les heures disponibles (exemple)
  const heuresDisponibles = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  if (heuresDisponibles.length === 0) {
    heuresDisponiblesDiv.textContent = 'Pas de disponibilité';
  } else {
    const heureRadioGroup = document.createElement('div');
    heureRadioGroup.classList.add('heure-radio-group');
    heuresDisponibles.forEach((heure, index) => {
      const heureRadio = document.createElement('div');
      heureRadio.classList.add('heure-radio');
      const heureInput = document.createElement('input');
      heureInput.type = 'radio';
      heureInput.name = 'heure-selection';
      heureInput.id = `heure-${index}`;
      heureInput.value = heure;
      const heureLabel = document.createElement('label');
      heureLabel.htmlFor = `heure-${index}`;
      heureLabel.textContent = heure;
      heureRadio.appendChild(heureInput);
      heureRadio.appendChild(heureLabel);
      heureRadioGroup.appendChild(heureRadio);
    });
    heuresDisponiblesDiv.appendChild(heureRadioGroup);
  }
}

// Événements pour la sélection de la date (code inchangé)

// Initialiser les sélecteurs de date
genererOptionsDate();

// pop up bouttons

document.addEventListener('DOMContentLoaded', function() {
  const bouttonEnvoyer = document.getElementById('boutton-envoyer');
  const bouttonReserver = document.getElementById('boutton-reserver');

  bouttonEnvoyer.addEventListener('click', function(event) {
      event.preventDefault();
      alert("Votre demande a été envoyée !"); // Affiche le pop-up
  });

  bouttonReserver.addEventListener('click', function(event) {
      alert("Votre rendez-vous a été réservé !"); // Affiche le pop-up
  });
});
