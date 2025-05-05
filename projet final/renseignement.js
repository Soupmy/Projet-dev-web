// Données des employés
const employees = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '0555555555', role: 'enseignant' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678', role: 'encadreur' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-9012', role: 'département' },
    { name: 'Marie Dupont', email: 'marie.dupont@example.com', phone: '0111111111', role: 'enseignant' },
    { name: 'Pierre Leblanc', email: 'pierre.leblanc@example.com', phone: '0222222222', role: 'encadreur' },
    { name: 'Sophie Martin', email: 'sophie.martin@example.com', phone: '0333333333', role: 'département' },
    { name: 'Jacques Laurent', email: 'jacques.laurent@example.com', phone: '0444444444', role: 'enseignant' },
    { name: 'Isabelle Garcia', email: 'isabelle.garcia@example.com', phone: '0555555555', role: 'encadreur' },
    { name: 'Thomas Lefevre', email: 'thomas.lefevre@example.com', phone: '0666666666', role: 'département' },
    { name: 'Julie Dubois', email: 'julie.dubois@example.com', phone: '0777777777', role: 'enseignant' },
    { name: 'Antoine Reynaud', email: 'antoine.reynaud@example.com', phone: '0888888888', role: 'encadreur' },
    { name: 'Camille Leroy', email: 'camille.leroy@example.com', phone: '0999999999', role: 'département' },
    { name: 'Philippe Moreau', email: 'philippe.moreau@example.com', phone: '0101010101', role: 'enseignant' },
    { name: 'Alice Martin', email: 'alice.martin@example.com', phone: '0112345678', role: 'enseignant' },
    { name: 'Paul Dubois', email: 'paul.dubois@example.com', phone: '0223456789', role: 'encadreur' },
    { name: 'Émilie Lefebvre', email: 'emilie.lefebvre@example.com', phone: '0334567890', role: 'département' },
    { name: 'Lucien Durand', email: 'lucien.durand@example.com', phone: '0445678901', role: 'enseignant' },
    { name: 'Sophie Laurent', email: 'sophie.laurent@example.com', phone: '0556789012', role: 'encadreur' },
    { name: 'Antoine Petit', email: 'antoine.petit@example.com', phone: '0667890123', role: 'département' },
    { name: 'Marie Moreau', email: 'marie.moreau@example.com', phone: '0778901234', role: 'enseignant' },
    { name: 'Jeanne Rousseau', email: 'jeanne.rousseau@example.com', phone: '0889012345', role: 'encadreur' },
    { name: 'Théo Girard', email: 'theo.girard@example.com', phone: '0990123456', role: 'département' },
    { name: 'Élise Bernard', email: 'elise.bernard@example.com', phone: '0101234567', role: 'enseignant' }
];

// Fonction pour créer une carte d'employé
function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${employee.name}</h3>
        <p>Email: ${employee.email}</p>
        <p>Téléphone: ${employee.phone}</p>
        <p>Rôle: ${employee.role}</p>
    `;
    return card;
}

// Fonction pour afficher les cartes d'employés
function displayEmployeeCards(employees, currentPage) {
    const cardGrid = document.getElementById('cardGrid');
    cardGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * 9;
    const endIndex = startIndex + 9;
    const visibleEmployees = employees.slice(startIndex, endIndex);

    visibleEmployees.forEach(employee => {
        const card = createEmployeeCard(employee);
        cardGrid.appendChild(card);
    });
}

// Fonction pour filtrer les employés
function filterEmployees(searchTerm, role) {
    const filteredEmployees = employees.filter(employee => {
        const fullName = `${employee.name.toLowerCase()} ${employee.email.toLowerCase()} ${employee.phone.toLowerCase()}`;
        const isRoleMatch = role === 'all' || employee.role === role;
        return fullName.includes(searchTerm.toLowerCase()) && isRoleMatch;
    });
    return filteredEmployees;
}

// Gestion de la pagination
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');
let currentPage = 1;
let maxPages = Math.ceil(employees.length / 9);

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayEmployeeCards(filteredEmployees, currentPage);
        updatePaginationButtons();
    }
});

nextPageButton.addEventListener('click', () => {
    if (currentPage < maxPages) {
        currentPage++;
        displayEmployeeCards(filteredEmployees, currentPage);
        updatePaginationButtons();
    }
});

function updatePaginationButtons() {
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === maxPages;
    currentPageSpan.textContent = currentPage;
}

// Gestion de la recherche et du filtre
const searchInput = document.getElementById('searchInputt');
const roleRadios = document.querySelectorAll('input[name="role"]');
let filteredEmployees = employees;

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    const role = Array.from(roleRadios).find(radio => radio.checked).value;
    filteredEmployees = filterEmployees(searchTerm, role);
    currentPage = 1;
    maxPages = Math.ceil(filteredEmployees.length / 9);
    displayEmployeeCards(filteredEmployees, currentPage);
    updatePaginationButtons();
});

roleRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const searchTerm = searchInput.value;
        const role = radio.value;
        filteredEmployees = filterEmployees(searchTerm, role);
        currentPage = 1;
        maxPages = Math.ceil(filteredEmployees.length / 9);
        displayEmployeeCards(filteredEmployees, currentPage);
        updatePaginationButtons();
    });
});

// Initialisation
displayEmployeeCards(employees, currentPage);
updatePaginationButtons();


// effet de click sur la radio (selecteurs)//
