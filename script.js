const experiences = {
  menu: {
    title: 'Menú digital',
    copy: 'Actualiza contenido, precios o promociones sin tocar el hardware.',
    kicker: 'LA TERRAZA',
    headline: 'Nuestro menú.',
    sub: 'Sabores del día, siempre actualizados.',
    tone: 'menu'
  },
  reviews: {
    title: 'Reseñas',
    copy: 'Lleva a tus clientes directamente al lugar correcto para compartir su experiencia.',
    kicker: 'TU OPINIÓN IMPORTA',
    headline: '¿Cómo fue tu visita?',
    sub: 'Comparte tu experiencia en unos segundos.',
    tone: 'reviews'
  },
  whatsapp: {
    title: 'WhatsApp',
    copy: 'Abre una conversación con un mensaje prellenado para reducir fricción.',
    kicker: 'HABLEMOS',
    headline: 'Estamos aquí.',
    sub: 'Toca para iniciar una conversación.',
    tone: 'whatsapp'
  },
  wifi: {
    title: 'Wi-Fi',
    copy: 'Comparte tu red de forma simple, sin dictar contraseñas ni imprimir tarjetas nuevas.',
    kicker: 'BIENVENIDO',
    headline: 'Conéctate.',
    sub: 'Tu acceso está a un tap.',
    tone: 'wifi'
  },
  loyalty: {
    title: 'Lealtad',
    copy: 'Convierte cada visita en una oportunidad para construir una relación que regresa.',
    kicker: 'TU PRÓXIMA VISITA',
    headline: 'Suma. Vuelve. Gana.',
    sub: 'Un programa de lealtad simple.',
    tone: 'loyalty'
  },
  custom: {
    title: 'Link personalizado',
    copy: 'Conecta TapBridg con cualquier experiencia web, campaña o herramienta que ya utilices.',
    kicker: 'TÚ DECIDES',
    headline: 'Cualquier destino.',
    sub: 'Una identidad física. Posibilidades abiertas.',
    tone: 'custom'
  }
};

const tabs = document.querySelectorAll('.exp-tab');
const phone = document.getElementById('phoneContent');
const copyBox = document.getElementById('experienceCopy');

function renderExperience(key) {
  const exp = experiences[key];
  tabs.forEach(t => t.classList.toggle('active', t.dataset.exp === key));
  copyBox.querySelector('h3').textContent = exp.title;
  copyBox.querySelector('p').textContent = exp.copy;
  phone.innerHTML = `
    <div class="phone-status"><span>9:41</span><span>•••</span></div>
    <div class="experience-view ${exp.tone}">
      <span class="view-kicker">${exp.kicker}</span>
      <h3>${exp.headline}</h3>
      <p>${exp.sub}</p>
      <div class="menu-photo"><div class="plate"></div></div>
      <div class="menu-lines"><i></i><i></i><i></i></div>
    </div>`;
}

tabs.forEach(tab => tab.addEventListener('click', () => renderExperience(tab.dataset.exp)));

const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
