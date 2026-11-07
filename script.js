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

/* ── 2-Second Studio Intro Animation ─────────────────────────────────────── */
(function initIntroCurtain() {
  var curtain = document.getElementById('intro-curtain');
  if (!curtain) return;

  if (prefersReducedMotion) {
    curtain.style.display = 'none';
    return;
  }

  document.body.classList.add('intro-active');
  var dismissed = false;

  function dismissIntro() {
    if (dismissed) return;
    dismissed = true;
    document.body.classList.remove('intro-active');
    curtain.classList.add('intro-hidden');
    setTimeout(function () {
      curtain.style.display = 'none';
    }, 700);
  }

  // Auto-dismiss after 2 seconds
  var timer = setTimeout(dismissIntro, 2000);

  // Instant skip on click or Esc / Space / Enter
  curtain.addEventListener('click', function () {
    clearTimeout(timer);
    dismissIntro();
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      clearTimeout(timer);
      dismissIntro();
    }
  });
}());

/* ── Interactive Rotating Stamp Delight ──────────────────────────────────── */
(function initStampDelight() {
  var stamp = document.querySelector('.stamp-rotate');
  if (!stamp || prefersReducedMotion) return;

  stamp.style.cursor = 'pointer';
  stamp.setAttribute('title', 'Click to spin stamp');
  stamp.addEventListener('click', function () {
    stamp.classList.remove('burst');
    void stamp.offsetWidth; // trigger reflow
    stamp.classList.add('burst');
    setTimeout(function () {
      stamp.classList.remove('burst');
    }, 750);
  });
}());

/* ── Interactive Favour Playground Tabs ──────────────────────────────────── */
(function initFavourPlayground() {
  var tabButtons = document.querySelectorAll('.favour-tab-btn');
  var panels = document.querySelectorAll('.favour-tab-panel');
  if (!tabButtons.length || !panels.length) return;

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (p) {
        p.classList.remove('active');
        p.hidden = true;
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      var targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
      }
    });

    // Keyboard navigation (Left / Right arrows)
    btn.addEventListener('keydown', function (e) {
      var index = Array.from(tabButtons).indexOf(btn);
      var nextBtn = null;
      if (e.key === 'ArrowRight') {
        nextBtn = tabButtons[(index + 1) % tabButtons.length];
      } else if (e.key === 'ArrowLeft') {
        nextBtn = tabButtons[(index - 1 + tabButtons.length) % tabButtons.length];
      }
      if (nextBtn) {
        nextBtn.focus();
        nextBtn.click();
      }
    });
  });
}());

/* ── Slower, Luxurious Smooth Scroll Architecture ────────────────────────── */
(function initSlowerScroll() {
  if (prefersReducedMotion) return;

  // 1. Deliberate, graceful smooth scrolling for all anchor links (1000ms duration)
  function smoothScrollTo(targetY, duration) {
    var startY = window.pageYOffset || document.documentElement.scrollTop;
    var distance = targetY - startY;
    var startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  // Intercept in-page anchor links for slower, elegant scroll pacing
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var hash = link.getAttribute('href');
    if (hash === '#' || hash === '') return;

    var targetEl = document.querySelector(hash);
    if (!targetEl) return;

    e.preventDefault();
    var navHeight = 72;
    var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
    if (targetPosition < 0) targetPosition = 0;

    // Slower, weighted duration (950ms - 1200ms based on distance)
    var dist = Math.abs(targetPosition - (window.pageYOffset || 0));
    var duration = Math.min(Math.max(dist * 0.45, 900), 1300);

    smoothScrollTo(targetPosition, duration);

    // Update history URL without jump
    if (history.pushState) {
      history.pushState(null, null, hash);
    }
  });

  // 2. Silky, Weighted Desktop Wheel Dampener (Slower Page Scroll Velocity)
  // Only applies on non-touch devices to ensure native touch feel on smartphones
  var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (isTouchDevice) return;

  var currentY = window.pageYOffset || 0;
  var targetY = currentY;
  var isAnimating = false;
  var maxScroll = 0;

  function updateMaxScroll() {
    maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ) - window.innerHeight;
  }

  updateMaxScroll();
  window.addEventListener('resize', updateMaxScroll, { passive: true });

  window.addEventListener('wheel', function (e) {
    // If user is inside a scrollable child element, do not intercept
    var scrollableChild = e.target.closest('.favour-tabs-nav, textarea, [data-scrollable]');
    if (scrollableChild) return;

    e.preventDefault();
    updateMaxScroll();

    // Scale delta down by 0.58 so scrolling feels weighted and deliberate, not rushed
    var delta = e.deltaY * 0.58;
    targetY = Math.max(0, Math.min(targetY + delta, maxScroll));

    if (!isAnimating) {
      isAnimating = true;
      currentY = window.pageYOffset || 0;
      window.requestAnimationFrame(lerpScroll);
    }
  }, { passive: false });

  function lerpScroll() {
    var diff = targetY - currentY;
    // Silky smooth dampening factor
    currentY += diff * 0.082;
    window.scrollTo(0, Math.round(currentY));

    if (Math.abs(diff) > 0.6) {
      window.requestAnimationFrame(lerpScroll);
    } else {
      window.scrollTo(0, Math.round(targetY));
      currentY = targetY;
      isAnimating = false;
    }
  }

  // Keep target in sync if user drags scrollbar directly
  window.addEventListener('scroll', function () {
    if (!isAnimating) {
      currentY = window.pageYOffset || 0;
      targetY = currentY;
    }
  }, { passive: true });
}());

/* ── Top-Down Physical Studio Stamp Station (Dramatic Unboxed Edition) ─────── */
(function initStampStation() {
  var stage = document.getElementById('stamp-stage');
  var plunger = document.getElementById('stamp-plunger');
  var shockwave1 = document.getElementById('stamp-shockwave');
  var shockwave2 = document.getElementById('stamp-shockwave-2');
  var imprint = document.getElementById('stamp-imprint');
  var replayBtn = document.getElementById('stamp-replay-btn');
  var statusText = document.getElementById('paper-status-text');
  var deskWrap = document.getElementById('stamp-desk-wrap');

  if (!stage || !plunger || !imprint) return;

  var isSlamming = false;
  var hasAutoStamped = false;

  /* Resonant, heavy acoustic stamp thud (Web Audio API) */
  function playDramaticStampThud() {
    try {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      var ctx = new AudioContext();

      // Master low-pass & volume gain
      var masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.4, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);
      masterGain.connect(ctx.destination);

      // Deep resonant sub thump (90Hz down to 24Hz)
      var subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(95, ctx.currentTime);
      subOsc.frequency.exponentialRampToValueAtTime(24, ctx.currentTime + 0.28);
      subOsc.connect(masterGain);
      subOsc.start(ctx.currentTime);
      subOsc.stop(ctx.currentTime + 0.3);

      // Solid hardwood table body knock (220Hz -> 48Hz)
      var woodOsc = ctx.createOscillator();
      var woodGain = ctx.createGain();
      woodOsc.type = 'triangle';
      woodOsc.frequency.setValueAtTime(220, ctx.currentTime);
      woodOsc.frequency.exponentialRampToValueAtTime(48, ctx.currentTime + 0.18);
      woodGain.gain.setValueAtTime(0.28, ctx.currentTime);
      woodGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      woodOsc.connect(woodGain);
      woodGain.connect(ctx.destination);
      woodOsc.start(ctx.currentTime);
      woodOsc.stop(ctx.currentTime + 0.2);

      // Sharp mechanical die contact snap
      var snapOsc = ctx.createOscillator();
      var snapGain = ctx.createGain();
      snapOsc.type = 'sawtooth';
      snapOsc.frequency.setValueAtTime(540, ctx.currentTime);
      snapOsc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);
      snapGain.gain.setValueAtTime(0.12, ctx.currentTime);
      snapGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      snapOsc.connect(snapGain);
      snapGain.connect(ctx.destination);
      snapOsc.start(ctx.currentTime);
      snapOsc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Graceful silent fallback if Web Audio is blocked
    }
  }

  function triggerStampSlam() {
    if (isSlamming) return;
    isSlamming = true;

    if (prefersReducedMotion) {
      imprint.classList.add('stamped');
      if (statusText) statusText.textContent = 'OFFICIAL SEAL STAMPED';
      isSlamming = false;
      return;
    }

    // Reset previous animation classes
    plunger.classList.remove('slamming');
    stage.classList.remove('slammed');
    if (shockwave1) shockwave1.classList.remove('active');
    if (shockwave2) shockwave2.classList.remove('active');
    void plunger.offsetWidth; // force DOM reflow

    // Start dramatic 2.1s plunger sequence
    plunger.classList.add('slamming');

    // Impact moment calibrated with the 38% keyframe (~800ms)
    setTimeout(function () {
      playDramaticStampThud();
      stage.classList.add('slammed');
      if (shockwave1) shockwave1.classList.add('active');
      if (shockwave2) shockwave2.classList.add('active');
      imprint.classList.add('stamped');
      if (statusText) statusText.textContent = 'OFFICIAL SEAL STAMPED';
    }, 800);

    // Sequence completion (after plunger lifts high above at ~2100ms)
    setTimeout(function () {
      plunger.classList.remove('slamming');
      stage.classList.remove('slammed');
      isSlamming = false;
    }, 2150);
  }

  // Auto-trigger dramatically when visitor scrolls down to the stamp station
  if ('IntersectionObserver' in window && deskWrap) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !hasAutoStamped) {
          hasAutoStamped = true;
          // Wait 350ms for scroll to settle, then begin dramatic descent!
          setTimeout(triggerStampSlam, 350);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.32
    });
    observer.observe(deskWrap);
  }

  // Interactive re-stamp on click or keyboard
  stage.addEventListener('click', function () {
    triggerStampSlam();
  });

  stage.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerStampSlam();
    }
  });

  if (replayBtn) {
    replayBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      triggerStampSlam();
    });
  }
}());

/* ── Print: ensure clean output ─────────────────────────────────────────── */
window.addEventListener('beforeprint', function () {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('visible');
  });
});
