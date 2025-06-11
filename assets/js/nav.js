document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-menu > li.has-dropdown"); // finder alle html elementer, som matcher css selector udtrykket
  
    navItems.forEach(item => {
      // Kun tilføj klik-event til menupunkter med klasse dropdown-click
      if (item.classList.contains("dropdown-click")) {
        item.querySelector("a").addEventListener("click", (e) => {
          e.preventDefault();
  
          // Luk andre dropdowns
          navItems.forEach(other => {
            if (other !== item) other.classList.remove("active");
          });
  
          // Toggle nuværende
          item.classList.toggle("active");
        });
      }
    });
  
    // Klik udenfor lukker dropdowns
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-menu")) {
        navItems.forEach(item => item.classList.remove("active"));
      }
    });
  });
  

  // burger menu

  const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('#mobile-menu');

burger.addEventListener('click', () => {
  const isActive = mobileMenu.classList.toggle('active');

  // Opdater aria-attributes for bedre tilgængelighed
  burger.setAttribute('aria-expanded', isActive);
  mobileMenu.setAttribute('aria-hidden', !isActive);
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector('#mobile-menu');
  const dropdownItems = mobileNav.querySelectorAll('.dropdown-click');
// For hvert dropdown-element:
// Find <a>-linket og tilføj en klik-hændelse, der forhindrer standard-navigation,
// Bruger Eventlistener til at f.eks. åbne min drop-down.
  dropdownItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', e => {
      e.preventDefault();

      // Luk andre dropdowns i mobilmenu (valgfrit)
      dropdownItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle aktiv klasse for dropdown
      item.classList.toggle('active');
    });
  });

  // Klik udenfor mobilmenu lukker dropdowns (valgfrit)
  document.addEventListener('click', e => {
    if (!e.target.closest('#mobile-menu')) {
      dropdownItems.forEach(item => item.classList.remove('active'));
    }
  });
});

  
  