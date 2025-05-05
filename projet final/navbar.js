window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 100) {
      preNav.style.opacity = '0';
      nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
      preNav.style.opacity = '1';
      nav.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
  });