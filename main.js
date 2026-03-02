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
    function closeMobileMenu() {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    function openMobileMenu() {
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Cerrar menú');
      nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Cerrar al hacer clic en cualquier enlace del menú
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  // Header: sombra al hacer scroll
  var header = document.querySelector('.header');
  if (header) {
    function syncHeaderHeight() {
      document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    }

    function onScroll() {
      if (window.scrollY > 30) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    window.addEventListener('resize', syncHeaderHeight);
    window.addEventListener('load', syncHeaderHeight);
    syncHeaderHeight();
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

  // Generic filter functionality (works for projects, blog, certificates)
  function initFilters(filterSelector, cardSelector) {
    var filterBtns = document.querySelectorAll(filterSelector + ' .filter-btn');
    var cards = document.querySelectorAll(cardSelector);

    if (filterBtns.length && cards.length) {
      filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          // Update active button within this filter group
          filterBtns.forEach(function(b) {
            b.classList.remove('filter-btn--active');
          });
          btn.classList.add('filter-btn--active');

          var filter = btn.getAttribute('data-filter');

          // Filter cards
          cards.forEach(function(card) {
            var category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
              card.style.display = '';
              card.classList.remove('project-card--hidden');
              card.classList.remove('blog-card--hidden');
              card.classList.remove('cert-card--hidden');
            } else {
              card.classList.add('project-card--hidden');
              card.classList.add('blog-card--hidden');
              card.classList.add('cert-card--hidden');
              setTimeout(function() {
                if (card.classList.contains('project-card--hidden') ||
                    card.classList.contains('blog-card--hidden') ||
                    card.classList.contains('cert-card--hidden')) {
                  card.style.display = 'none';
                }
              }, 300);
            }
          });
        });
      });
    }
  }

  // Initialize filters for different pages
  initFilters('.projects-filters', '.project-card');
  initFilters('.blog-filters', '.blog-card');
  initFilters('.cert-filters', '.cert-card');

  // FAQ Accordion functionality
  var faqItems = document.querySelectorAll('.faq-item__question');
  if (faqItems.length) {
    function closeFaqItem(btn) {
      btn.setAttribute('aria-expanded', 'false');
      var parent = btn.closest('.faq-item');
      if (parent) {
        parent.classList.remove('faq-item--open');
      }

      var answer = btn.nextElementSibling;
      if (answer) {
        answer.classList.remove('is-open');
        answer.style.maxHeight = null;
      }
    }

    function openFaqItem(btn) {
      btn.setAttribute('aria-expanded', 'true');
      var parent = btn.closest('.faq-item');
      if (parent) {
        parent.classList.add('faq-item--open');
      }

      var answer = btn.nextElementSibling;
      if (answer) {
        answer.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    }

    faqItems.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var isExpanded = btn.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs
        faqItems.forEach(function(otherBtn) {
          if (otherBtn !== btn) {
            closeFaqItem(otherBtn);
          }
        });

        // Toggle current FAQ
        if (isExpanded) {
          closeFaqItem(btn);
        } else {
          openFaqItem(btn);
        }
      });
    });

    // Keep open panel height in sync on resize
    window.addEventListener('resize', function() {
      faqItems.forEach(function(btn) {
        if (btn.getAttribute('aria-expanded') === 'true') {
          var answer = btn.nextElementSibling;
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        }
      });
    });
  }

  // Certificate accordion functionality
  var certAccordionToggle = document.querySelector('.cert-accordion__toggle');
  if (certAccordionToggle) {
    certAccordionToggle.addEventListener('click', function() {
      var isExpanded = certAccordionToggle.getAttribute('aria-expanded') === 'true';
      var content = certAccordionToggle.nextElementSibling;

      certAccordionToggle.setAttribute('aria-expanded', !isExpanded);
      if (content) {
        content.classList.toggle('is-open');
      }
    });
  }

  // Contact form: validate and compose email draft
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var subject = document.getElementById('subject');
      var message = document.getElementById('message');
      var isValid = true;

      // Remove previous error states
      [name, email, subject, message].forEach(function(input) {
        if (input) {
          input.style.borderColor = '';
        }
      });

      // Validate name
      if (name && name.value.trim().length < 2) {
        name.style.borderColor = '#ef4444';
        isValid = false;
      }

      // Validate email
      if (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          email.style.borderColor = '#ef4444';
          isValid = false;
        }
      }

      // Validate subject
      if (subject && !subject.value) {
        subject.style.borderColor = '#ef4444';
        isValid = false;
      }

      // Validate message
      if (message && message.value.trim().length < 10) {
        message.style.borderColor = '#ef4444';
        isValid = false;
      }

      if (isValid) {
        var subjectText = 'Contacto web';
        if (subject) {
          var selectedOption = subject.options[subject.selectedIndex];
          if (selectedOption && selectedOption.text && subject.value) {
            subjectText = 'Contacto web - ' + selectedOption.text;
          }
        }

        var bodyLines = [
          'Hola Frank,',
          '',
          'Te escribo desde el formulario de contacto de tu web.',
          '',
          'Nombre: ' + (name ? name.value.trim() : ''),
          'Email: ' + (email ? email.value.trim() : ''),
          'Asunto: ' + (subject && subject.value ? subject.options[subject.selectedIndex].text : 'No especificado'),
          '',
          'Mensaje:',
          (message ? message.value.trim() : '')
        ];

        var mailtoUrl = 'mailto:frankalayzah@gmail.com'
          + '?subject=' + encodeURIComponent(subjectText)
          + '&body=' + encodeURIComponent(bodyLines.join('\n'));

        window.location.href = mailtoUrl;
      } else {
        alert('Debes completar todos los campos para poder enviar el mensaje.');
      }
    });
  }

  // Newsletter form
  var newsletterForms = document.querySelectorAll('.blog-newsletter__form');
  newsletterForms.forEach(function(form) {
    var action = (form.getAttribute('action') || '').trim();

    // Fallback only for demo/local forms without real endpoint.
    if (!action || action === '#') {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          alert('¡Gracias por suscribirte! Recibirás contenido sobre IA y datos.');
          form.reset();
        }
      });
      return;
    }

    form.addEventListener('submit', function(e) {
      var emailInput = form.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value) {
        e.preventDefault();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
    });
  });
})();
