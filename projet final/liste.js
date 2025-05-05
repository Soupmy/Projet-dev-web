// Données d'exemple pour les années, les sections, et les liens PDF
const annees = ["L1 Info", "L2 Info", "L3 ISIL", "L3 SI"];
const sections = {
    "L1 Info": ["A", "B", "C"],
    "L2 Info": ["A", "B", "C"],
    "L3 ISIL": ["A", "B", "C"],
    "L3 SI": ["A", "B", "C"]
};
const pdfLinks = {
    "L1 InfoA": "pdf/L1-info.pdf",
    "L1 InfoB": "pdf/L1-info.pdf",
    "L1 InfoC": "pdf/L1-info.pdf",
    "L2 InfoA": "pdf/L2-info.pdf",
    "L2 InfoB": "pdf/L2-info.pdf",
    "L2 InfoC": "pdf/L2-info.pdf",
    "L3 ISILA": "pdf/L1-info.pdf",
    "L3 ISILB": "pdf/L2-info.pdf",
    "L3 ISILC": "pdf/L2-info.pdf",
    "L3 SIA": "pdf/L1-info.pdf",
    "L3 SIB": "pdf/L2-info.pdf",
    "L3 SIC": "pdf/L1-info.pdf"
};

// Sélecteurs HTML
const anneeSelect = document.getElementById("annee");
const sectionSelect = document.getElementById("section");
const telechargerBtn = document.getElementById("telecharger");
const previewContainer = document.getElementById("preview-container");
const pdfPreview = document.getElementById("pdf-preview");

// Remplir les options d'année
annees.forEach(annee => {
    const option = document.createElement("option");
    option.value = annee;
    option.textContent = annee;
    anneeSelect.appendChild(option);
});

// Gestion du changement d'année
anneeSelect.addEventListener("change", () => {
    const anneeSelectionnee = anneeSelect.value;
    const sectionsPourAnnee = sections[anneeSelectionnee] || [];

    // Vider les options de section
    sectionSelect.innerHTML = "<option value=''>Sélectionnez une section</option>";

    // Remplir les options de section
    sectionsPourAnnee.forEach(section => {
        const option = document.createElement("option");
        option.value = section;
        option.textContent = section;
        sectionSelect.appendChild(option);
    });

    // Activer/désactiver le sélecteur de section et le bouton de téléchargement
    sectionSelect.disabled = !anneeSelectionnee;
    telechargerBtn.disabled = !anneeSelectionnee;

    // Cacher la prévisualisation PDF
    previewContainer.style.display = "none";
    pdfPreview.src = "";
});

// Gestion du changement de section
sectionSelect.addEventListener("change", () => {
    const anneeSelectionnee = anneeSelect.value;
    const sectionSelectionnee = sectionSelect.value;

    if (anneeSelectionnee && sectionSelectionnee) {
        const pdfLink = pdfLinks[`${anneeSelectionnee}${sectionSelectionnee}`];

        // Afficher la prévisualisation PDF
        previewContainer.style.display = "block";
        pdfPreview.src = pdfLink;
    } else {
        // Cacher la prévisualisation PDF
        previewContainer.style.display = "none";
        pdfPreview.src = "";
    }
});
/* pour le boutton de tékéchargement*/
telechargerBtn.addEventListener("click", () => {
    const anneeSelectionnee = anneeSelect.value;
    const sectionSelectionnee = sectionSelect.value;

    if (anneeSelectionnee && sectionSelectionnee) {
        const pdfLink = pdfLinks[`${anneeSelectionnee}${sectionSelectionnee}`];

        // Déclencher le téléchargement du fichier PDF
        window.open(pdfLink, "_blank");
    }
});