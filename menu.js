  function toggleMenu(){
      const menuToggle = document.querySelector('.menuToggle');
      menuToggle.classList.toggle('active');
      const header__menu = document.querySelector('.header__menu');
      header__menu.classList.toggle('active');
    }