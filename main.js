(function () {
  'use strict';

  // Theme toggle functionality
  var THEME_KEY = 'frank-alayza-theme';
  var themeToggle = document.getElementById('theme-toggle');

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    if (themeToggle) {
      var label = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      themeToggle.setAttribute('aria-label', label);
    }
  }

  function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme toggle button
  if (themeToggle) {
    // Set initial aria-label
    var currentTheme = getStoredTheme();
    var label = currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    themeToggle.setAttribute('aria-label', label);

    themeToggle.addEventListener('click', toggleTheme);
  }

  // Remove no-transition class after initial load
  window.addEventListener('load', function() {
    document.documentElement.classList.remove('no-transition');
  });

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

  // Projects filter functionality
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(function(b) {
          b.classList.remove('filter-btn--active');
        });
        btn.classList.add('filter-btn--active');

        var filter = btn.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(function(card) {
          var category = card.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.classList.remove('project-card--hidden');
          } else {
            card.classList.add('project-card--hidden');
            setTimeout(function() {
              if (card.classList.contains('project-card--hidden')) {
                card.style.display = 'none';
              }
            }, 300);
          }
        });
      });
    });
  }
})();
