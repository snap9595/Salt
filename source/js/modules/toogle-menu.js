let navToggle = document.querySelector('.header__toggle');
let navMain = document.querySelector('.nav');

const initToggle = () => {
  navMain.classList.remove('no-js');

  navToggle.addEventListener('click', function () {
    toggleMenu();
  });

  function toggleMenu() {
    navMain.classList.toggle('is-open');
    navToggle.classList.toggle('is-open');
  }
};

export {initToggle};
