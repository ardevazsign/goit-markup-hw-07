// const mobileMenuMain = document.querySelector('.mobile-menu-main');
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const closeButton = document.querySelector('.menu-items li a.close');

// mobileMenuMain.addEventListener('click', () => {
//   mobileMenuBtn.classList.toggle('active');
// });

// mobileMenuBtn.addEventListener('click', (e) => {
//   e.stopPropagation();
// });

// document.addEventListener('click', () => {
//   mobileMenuBtn.classList.remove('active');
// });

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();