document.addEventListener('DOMContentLoaded', function () {
    const anneeSelect = document.getElementById('annee');
    const sectionSelect = document.getElementById('section');
    const groupeSelect = document.getElementById('groupe');
    const emploiDuTempsTable = document.getElementById('emploiDuTemps');

    // Pour prendre enconsidération les changements
    anneeSelect.addEventListener('change', updateEmploiDuTemps);
    sectionSelect.addEventListener('change', updateEmploiDuTemps);
    groupeSelect.addEventListener('change', updateEmploiDuTemps);

    // Pour actualiser l'emploi du temps a chaque changement
    function updateEmploiDuTemps() {
        const annee = anneeSelect.value;
        const section = sectionSelect.value;
        const groupe = groupeSelect.value;

        // Appeler une fonction pour récupérer l'emploi du temps en fonction de l'année et du groupe
        const emploiDuTemps = getEmploiDuTemps(annee, section, groupe);

        // Mettre à jour le tableau de l'emploi du temps
        displayEmploiDuTemps(emploiDuTemps);
        
    }

    function getEmploiDuTemps(annee, section, groupe) {
        const emploiDuTemps = {
            // Exemple d'emploi du temps sur les L2
            '2l_a_1': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_a_2': [
                ['Samedi', 'TD THL', 'Cours BDD', 'TD BDD', 'TD SE', ' ', ' '],
                ['Dimanche', 'TP Dev Web', 'TP THL', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', ' ', 'Cours Dev Web', ' ', ' ', 'Cours SE'],
                ['Mardi', 'TD Réseaux', 'TP BDD', 'TP Réseaux', 'Cours Réseaux','TP POO' ,'TP SE' ],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', 'Anglais ', ' ', ' ', ' '],
                
            ],
            '2l_a_3': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_a_4': [
                ['Samedi', 'TD THL', 'Cours BDD', 'TD BDD', 'TD SE', ' ', ' '],
                ['Dimanche', 'TP Dev Web', 'TP THL', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', ' ', 'Cours Dev Web', ' ', ' ', 'Cours SE'],
                ['Mardi', 'TD Réseaux', 'TP BDD', 'TP Réseaux', 'Cours Réseaux','TP POO' ,'TP SE' ],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', 'Anglais ', ' ', ' ', ' '],
                
            ],
            '2l_a_5': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_b_1': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_b_2': [
                ['Samedi', 'TD THL', 'Cours BDD', 'TD BDD', 'TD SE', ' ', ' '],
                ['Dimanche', 'TP Dev Web', 'TP THL', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', ' ', 'Cours Dev Web', ' ', ' ', 'Cours SE'],
                ['Mardi', 'TD Réseaux', 'TP BDD', 'TP Réseaux', 'Cours Réseaux','TP POO' ,'TP SE' ],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', 'Anglais ', ' ', ' ', ' '],
                
            ],
            '2l_b_3': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_b_4': [
                ['Samedi', 'TD THL', 'Cours BDD', 'TD BDD', 'TD SE', ' ', ' '],
                ['Dimanche', 'TP Dev Web', 'TP THL', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', ' ', 'Cours Dev Web', ' ', ' ', 'Cours SE'],
                ['Mardi', 'TD Réseaux', 'TP BDD', 'TP Réseaux', 'Cours Réseaux','TP POO' ,'TP SE' ],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', 'Anglais ', ' ', ' ', ' '],
                
            ],
            '2l_b_5': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_c_1': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_c_2': [
                ['Samedi', 'TD THL', 'Cours BDD', 'TD BDD', 'TD SE', ' ', ' '],
                ['Dimanche', 'TP Dev Web', 'TP THL', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', ' ', 'Cours Dev Web', ' ', ' ', 'Cours SE'],
                ['Mardi', 'TD Réseaux', 'TP BDD', 'TP Réseaux', 'Cours Réseaux','TP POO' ,'TP SE' ],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', 'Anglais ', ' ', ' ', ' '],
                
            ],
            '2l_c_3': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '2l_c_4': [
                ['Samedi', 'TD THL', 'Cours BDD', 'TD BDD', 'TD SE', ' ', ' '],
                ['Dimanche', 'TP Dev Web', 'TP THL', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', ' ', 'Cours Dev Web', ' ', ' ', 'Cours SE'],
                ['Mardi', 'TD Réseaux', 'TP BDD', 'TP Réseaux', 'Cours Réseaux','TP POO' ,'TP SE' ],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', 'Anglais ', ' ', ' ', ' '],
                
            ],
            '2l_c_5': [
                ['Samedi', 'TP Dev Web', 'Cours BDD', 'TP THL', 'TD SE', 'TP POO', ' '],
                ['Dimanche', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Lundi', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],
            '1l_a_1': [
                ['Samedi', 'Cours Analyse', 'TD algèbre', 'TP ASD2','TD ASD2', 'Cours BDD', ' '],
                ['Dimanche', 'Cours POO', 'TD Réseaux', 'Cours Dev Web', 'TP SE', ' ', 'Cours SE'],
                ['Lundi', 'TD THL', 'TD BDD', 'Cours THL', ' ', ' ', ' '],
                ['Mardi', ' ', 'TP BDD', 'TP Réseaux', 'Cours Réseaux', ' ', ' '],
                ['Mercredi', ' ', ' ', ' ', ' ', ' ', ' '],
                ['Jeudi', ' ', ' ', ' ', ' ', ' ', ' '],
                
            ],

                //reste des emplois
        };

        return emploiDuTemps[annee + '_' + section + '_' + groupe] || [];
    }

    // Fonction pour afficher l'emploi du temps dans le tableau
    function displayEmploiDuTemps(emploiDuTemps) {
        // Ajouter la classe animate pour déclencher l'animation
        emploiDuTempsTable.classList.add('animate');
      
        // Réinitialiser le contenu du tableau après l'animation
        setTimeout(() => {
          emploiDuTempsTable.innerHTML = '';
      
          // Ajouter les en-têtes de colonne
          const joursSemaine = [' ', '8h - 9h30', '9h30 - 11h', '11h - 13h30', '13h30 - 15h', '15h - 16h30', '16h30 - 17h25'];
          const headerRow = emploiDuTempsTable.insertRow();
          joursSemaine.forEach(jour => {
            const cell = headerRow.insertCell();
            cell.textContent = jour;
          });
      
          // Ajouter les données de l'emploi du temps
          emploiDuTemps.forEach(jour => {
            const row = emploiDuTempsTable.insertRow();
            jour.forEach(cours => {
              const cell = row.insertCell();
              cell.textContent = cours;
            });
          });
      
          // Supprimer la classe animate après l'animation
          emploiDuTempsTable.classList.remove('animate');
        }, 3000); // Délai correspondant à la durée de l'animation
      }

    // Initialiser l'emploi du temps avec les valeurs par défaut
    updateEmploiDuTemps();
});