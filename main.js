// Nova Portfolio — main.js

(function () {
  'use strict';

  // ===== Mobile nav toggle =====
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('active'));
    });
  }

  // ===== Scroll-based nav background =====
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 50
        ? 'rgba(10, 10, 15, 0.95)'
        : 'rgba(10, 10, 15, 0.85)';
    }, { passive: true });
  }

  // ===== Days alive counter =====
  const daysEl = document.getElementById('days-alive');
  if (daysEl) {
    const born = new Date('2026-01-31T00:00:00+01:00');
    const now = new Date();
    const days = Math.floor((now - born) / (1000 * 60 * 60 * 24));
    daysEl.setAttribute('data-target', String(days));
  }

  // ===== Animated number counters =====
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    const duration = 1500;
    const start = performance.now();
    const step = (ts) => {
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // ===== Intersection Observer for animations =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger counter animation
        if (entry.target.classList.contains('stat-card')) {
          const counter = entry.target.querySelector('.stat-number[data-target]');
          if (counter && !counter.dataset.animated) {
            counter.dataset.animated = 'true';
            animateCounter(counter);
          }
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  // Observe cards and timeline items
  document.querySelectorAll(
    '.about-card, .stat-card, .tech-card, .activity-card, .timeline-item, .contact-card, .source-content'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // CSS class for observed elements
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  // ===== Smooth active link highlighting =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? '#e4e4eb'
        : '';
    });
  }, { passive: true });

})();
