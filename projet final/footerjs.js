// Fonction pour rechercher un emplacement
const locations = {
    'benbadis': { lat: 36.7741833, lng: 3.0597806 },
    'sienceB': { lat: 36.774937
      , lng: 3.0587344 },
    'matiben': { lat: 36.7746929
      , lng: 3.0589905 }
  };
  
  function searchLocation() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const location = locations[input];
    if (location) {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
      window.open(mapUrl, '_blank');
    } else {
      alert(`Désolé, aucun emplacement trouvé pour "${input}".`);
    }
  }
  
  document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchLocation();
    }
  });
  