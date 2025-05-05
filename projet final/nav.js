window.addEventListener('scroll', function() {
    const preNav = document.querySelector('.pre_nav');
    const nav = document.querySelector('.nav');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 150) {
      preNav.style.opacity = '0';
      nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      nav.style.top = '0'; /* Positionner la nav bar en haut lorsque la pré-nav disparaît */
    } else {
      preNav.style.opacity = '1';
      nav.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      nav.style.top = '4em'; /* Repositionner la nav bar en dessous de la pré-nav lorsqu'elle est visible */
    }
  });