let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let countItem = items.length;
let itemActive = 0;

next.onclick = function() {
  itemActive++;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
}

prev.onclick = function() {
  itemActive--;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
}

let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }

  items[itemActive].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

showSlider();
function openEmailPage() {
  const emailAddress = "codeCrafters@gamil.com"; 
  const subject = "je veux rejoindre le club!"; 
  const body = ""; // Vous pouvez ajouter un contenu par défaut pour le corps de l'email

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(mailtoLink);
}