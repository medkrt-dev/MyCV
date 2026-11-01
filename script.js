const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    toggle.textContent = isOpen ? '×' : '☰';
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});
