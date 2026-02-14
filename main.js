// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
    toggle.classList.toggle('active');
  });
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
      toggle.classList.remove('active');
    });
  });
}

// Scroll-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.project-card, .contribution-card, .about-content, .tech-card, .contact-card').forEach((el) => {
  el.classList.add('animate-in');
  observer.observe(el);
});

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener(
    'scroll',
    () => {
      nav.classList.toggle('scrolled', window.scrollY > 4);
    },
    { passive: true },
  );
}
