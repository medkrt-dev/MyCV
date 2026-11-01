// Navigation mobile + language switcher. French is the default language.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setLanguage(language) {
  const lang = language === 'en' ? 'en' : 'fr';
  document.documentElement.lang = lang;
  const cvDownload = document.getElementById('cv-download');
  if (cvDownload) {
    cvDownload.href = lang === 'en' ? 'cv-en.pdf' : 'cv-fr.pdf';
    cvDownload.setAttribute('download', lang === 'en' ? 'Mohamed-Kharrat-CV-EN.pdf' : 'Mohamed-Kharrat-CV-FR.pdf');
  }
  document.querySelectorAll('[data-fr][data-en]').forEach(element => {
    const value = element.dataset[lang];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('.lang-btn').forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.title = lang === 'fr'
    ? 'Mohamed Kharrat — Consultant senior .NET'
    : 'Mohamed Kharrat — Senior .NET Consultant';
  try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
}

document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

// Always open in French on a fresh visit. Keep the visitor's selected language on return.
let initialLanguage = 'fr';
try { initialLanguage = localStorage.getItem('portfolio-language') || 'fr'; } catch (_) {}
setLanguage(initialLanguage);
