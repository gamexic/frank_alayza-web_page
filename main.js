(function () {
  'use strict';

  // Año en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú móvil
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Cerrar al hacer clic en cualquier enlace del menú
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Header: sombra al hacer scroll
  var header = document.querySelector('.header');
  if (header) {
    function onScroll() {
      if (window.scrollY > 30) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Animaciones al entrar en viewport (Intersection Observer)
  var animateEls = document.querySelectorAll('.animate-in');
  if (animateEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          if (el.classList.contains('is-visible')) return;
          var delay = el.getAttribute('data-delay');
          if (delay != null) {
            setTimeout(function () {
              el.classList.add('is-visible');
            }, parseInt(delay, 10));
          } else {
            el.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.05
      }
    );
    animateEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
