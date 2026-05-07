/* ================================
   HAMBURGER MENU
   ================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('ti-menu-2');
  icon.classList.toggle('ti-x');
});

// Cierra el menú al hacer click en un link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = hamburger.querySelector('i');
    icon.classList.add('ti-menu-2');
    icon.classList.remove('ti-x');
  });
});

/* ================================
   NAVBAR SOMBRA AL HACER SCROLL
   ================================ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
  }
});

/* ================================
   SCROLL REVEAL
   ================================ */
const revealEls = document.querySelectorAll(
  '.service-card, .step, .testi-card, .counter-item'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

/* ================================
   CONTADOR ANIMADO
   ================================ */
function animateCounter(el) {
  const target    = parseInt(el.dataset.target, 10);
  const suffix    = el.dataset.suffix || '';
  const duration  = 1800;
  const step      = 16;
  const increment = target / (duration / step);
  let current     = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, step);
}

const counterEls = document.querySelectorAll('.counter-num[data-target]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

/* ================================
   FORMULARIO → WHATSAPP
   ================================ */
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn      = form.querySelector('button[type="submit"]');
  const original = btn.textContent;

  // Feedback visual al enviar
  btn.textContent      = '✓ Solicitud enviada';
  btn.style.background = '#1EB854';
  btn.disabled         = true;

  // Arma el mensaje con los datos del formulario
  const nombre  = form.nombre.value.trim();
  const origen  = form.origen.value.trim();
  const destino = form.destino.value.trim();
  const mensaje = form.mensaje.value.trim();

  const texto = `Hola, soy ${nombre}. Quiero cotizar una mudanza de ${origen} a ${destino}. ${mensaje}`;
  const waUrl = `https://wa.me/56948423403?text=${encodeURIComponent(texto)}`;

  setTimeout(() => {
    window.open(waUrl, '_blank');
    btn.textContent      = original;
    btn.style.background = '';
    btn.disabled         = false;
    form.reset();
  }, 1200);
});