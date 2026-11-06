/* ═══════════════════════════════════════════════════════════════════════════
   PICKLE CORP™ 2.0 — script.js
   Creative Technology Collective
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

/* ── Reduced-motion preference ───────────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Stamp rotate: disable under reduced motion ──────────────────────────── */
if (prefersReducedMotion) {
  document.querySelectorAll('.stamp-rotate').forEach(function (el) {
    el.style.animation = 'none';
  });
}

/* ── Scroll progress bar ─────────────────────────────────────────────────── */
var scrollBar = document.getElementById('scroll-bar');

function updateScrollBar() {
  if (!scrollBar) return;
  var scrolled = window.scrollY;
  var total = document.documentElement.scrollHeight - window.innerHeight;
  var pct = total > 0 ? (scrolled / total) * 100 : 0;
  scrollBar.style.width = pct + '%';
}

/* ── Sticky nav scroll behaviour ────────────────────────────────────────────
   Adds .scrolled class to #nav when user scrolls past 40px.
   Changes the nav from transparent to frosted/solid.
─────────────────────────────────────────────────────────────────────────── */
var nav = document.getElementById('nav');

function updateNav() {
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

/* ── Combined scroll handler (passive for performance) ──────────────────── */
window.addEventListener('scroll', function () {
  updateScrollBar();
  updateNav();
}, { passive: true });

// Run once on load in case user starts mid-page
updateScrollBar();
updateNav();

/* ── Scroll-reveal (Intersection Observer) ──────────────────────────────── */
(function initReveal() {
  var reveals = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    // Show everything immediately — no motion
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(function (el) {
    observer.observe(el);
  });
}());

/* ── Mobile menu ─────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  var burger = document.getElementById('burger');
  var menu   = document.getElementById('mobile-menu');

  if (!burger || !menu) return;

  // All focusable elements inside the menu (for focus trap)
  function getFocusable() {
    return Array.from(menu.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openMenu() {
    menu.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scroll

    // Focus first menu item
    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    burger.focus(); // return focus to trigger
  }

  // Toggle on burger click
  burger.addEventListener('click', function () {
    var isOpen = burger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when any .mm-close link is clicked
  menu.querySelectorAll('.mm-close').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // ESC key closes menu
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  // Focus trap inside menu
  menu.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;

    var focusable = getFocusable();
    if (!focusable.length) return;

    var first = focusable[0];
    var last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: if on first, wrap to last
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: if on last, wrap to first
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}());

/* ── Smooth scroll for anchor links ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

/* ── Ticker: pause on reduced motion ─────────────────────────────────────── */
if (prefersReducedMotion) {
  document.querySelectorAll('.ticker-track').forEach(function (el) {
    el.style.animation = 'none';
  });
}

/* ── Active nav link highlight on scroll ─────────────────────────────────── */
(function initActiveNav() {
  var sections = document.querySelectorAll('section[id], div[id]');
  var navLinks = document.querySelectorAll('.nav-link, .footer-link');

  if (!sections.length || !navLinks.length) return;

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.getAttribute('id');
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    });
  }, {
    threshold: 0.4,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(function (s) {
    sectionObserver.observe(s);
  });
}());

/* ── Service item micro-interaction ──────────────────────────────────────── */
(function initServiceHover() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('.service-item').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var num = item.querySelector('.service-num');
      if (num) num.style.opacity = '1';
    });
    item.addEventListener('mouseleave', function () {
      var num = item.querySelector('.service-num');
      if (num) num.style.opacity = '';
    });
  });
}());

/* ── Work card: subtle mouse-parallax tilt ───────────────────────────────── */
(function initCardTilt() {
  if (prefersReducedMotion) return;
  // Only on pointer devices with hover
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll('.work-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect   = card.getBoundingClientRect();
      var cx     = rect.left + rect.width / 2;
      var cy     = rect.top  + rect.height / 2;
      var dx     = (e.clientX - cx) / (rect.width  / 2);
      var dy     = (e.clientY - cy) / (rect.height / 2);
      var rotX   = -dy * 3;  // max ±3deg
      var rotY   =  dx * 3;
      card.style.transform = 'perspective(600px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateZ(4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
}());

/* ── Team card reveal stagger ────────────────────────────────────────────── */
// Already handled by CSS delay classes (.reveal-delay-*) but we ensure
// team cards get a slight additional stagger if JS loads.
(function staggerTeamCards() {
  if (prefersReducedMotion) return;
  document.querySelectorAll('.team-card').forEach(function (card, i) {
    card.style.transitionDelay = (i * 80) + 'ms';
  });
}());

/* ── Favour step counter animation ───────────────────────────────────────── */
(function initFavourSteps() {
  if (prefersReducedMotion) return;

  var steps = document.querySelectorAll('.favour-step');
  if (!steps.length || !('IntersectionObserver' in window)) return;

  var stepObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('favour-step--active');
        stepObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  steps.forEach(function (step) {
    stepObserver.observe(step);
  });
}());

/* ── Hero headline: stagger letter reveal (decorative, reduced-motion off) ── */
(function initHeroKinetic() {
  if (prefersReducedMotion) return;

  var headline = document.querySelector('.hero-headline');
  if (!headline) return;

  // Add a subtle entrance class after a short delay
  setTimeout(function () {
    headline.classList.add('hero-headline--loaded');
  }, 100);
}());

/* ── Print: ensure clean output ─────────────────────────────────────────── */
window.addEventListener('beforeprint', function () {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('visible');
  });
});
