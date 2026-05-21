const burgerBtn = document.querySelector('.header-burger-btn');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const closeBtn = document.querySelector('.mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-btn');


if (burgerBtn && mobileMenuBackdrop && closeBtn) {
  const openMenu = () => {
    mobileMenuBackdrop.classList.add('is-open');
    document.body.classList.add('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenuBackdrop.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  };

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  mobileMenuBackdrop.addEventListener('click', event => {
    if (event.target === mobileMenuBackdrop) {
      closeMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenuBackdrop.classList.contains('is-open')) {
      closeMenu();
    }
  });
}