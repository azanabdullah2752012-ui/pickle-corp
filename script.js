/**
 * Pickle Corp™ — script.js
 * Gummy: Authentic 2D Kawaii Gumdrop matching original Pickle Corp brand identity.
 * Flat mint palette, cute black bead eyes with glints, soft pill blush, sweet smile.
 * Features: smooth cursor tracking, squash & stretch hops, and happy blinks.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Lenis Premium Momentum Smooth Scrolling ──────────────────────────────
  let lenis = null;
  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('scroll-progress');

  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', (e) => {
      if (nav) {
        nav.classList.toggle('scrolled', e.scroll > 25);
      }
      if (progressBar) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (e.scroll / maxScroll) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    });
  } else {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (nav) nav.classList.toggle('scrolled', scrollY > 25);
      if (progressBar) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }, { passive: true });
  }

  // ── Mobile menu ────────────────────────────────────────────────────────────
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
    });
    mobileMenu.querySelectorAll('.mm-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ── Smooth scroll for anchor links via Lenis ───────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target, { offset: -70, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });



  // ═══════════════════════════════════════════════════════════════════════════
  // AUTHENTIC 2D KAWAII GUMMY SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════

  const COLOR_THEMES = {
    theme: {
      fill: '#ab947e',      // Exact color from user reference image: Warm Oatmeal Taupe
      fillLight: '#ab947e', // Pure authentic 2D flat fill
      stroke: '#593d3b',    // Exact color from user reference image: Dark Roast Truffle
      blush: '#c0a692',     // Exact color from user reference image: Soft Rosy Taupe Highlight
      eye: '#593d3b'        // Exact color from user reference image: Dark Roast Truffle
    },
    green: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    olive: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    caramel: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    blue: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    orange: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    pink: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    purple: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    yellow: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    },
    cyan: {
      fill: '#ab947e',
      fillLight: '#ab947e',
      stroke: '#593d3b',
      blush: '#c0a692',
      eye: '#593d3b'
    }
  };

  const THEME_KEYS = Object.keys(COLOR_THEMES);

  function resolveTheme(color) {
    if (COLOR_THEMES[color]) return COLOR_THEMES[color];
    const c = String(color).toLowerCase();
    if (c.includes('olive') || c.includes('green')) return COLOR_THEMES.green;
    if (c.includes('caramel') || c.includes('biscuit')) return COLOR_THEMES.caramel;
    return COLOR_THEMES.theme;
  }

  let gummyCounter = 0;

  function createGummyDOM(color) {
    const theme = resolveTheme(color);
    const id = `g-${++gummyCounter}`;
    const ns = 'http://www.w3.org/2000/svg';

    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 110 52');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.overflow = 'visible';
    svg.style.display = 'block';

    svg.innerHTML = `
      <defs>
        <!-- Dark roast ground contact shadow -->
        <radialGradient id="${id}-sh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#593d3b" stop-opacity="0.32" />
          <stop offset="65%" stop-color="#593d3b" stop-opacity="0.09" />
          <stop offset="100%" stop-color="#593d3b" stop-opacity="0" />
        </radialGradient>
        <!-- Canonical Gumdrop body fill (#bda793 to #ab947e) -->
        <linearGradient id="${id}-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#bda793" />
          <stop offset="100%" stop-color="#ab947e" />
        </linearGradient>
      </defs>

      <!-- Soft ground contact shadow -->
      <ellipse class="gummy-shadow" cx="55" cy="44.5" rx="44" ry="3.8" fill="url(#${id}-sh)" />

      <!-- Body motion container -->
      <g class="gummy-body-group" style="transform-origin: 55px 44px;">
        <!-- Wide Low-Profile Mound Path - Canonical Gummy -->
        <path class="gummy-body-shape"
              d="M 15,44
                 C 9,44 6.5,39.5 9,34
                 C 13.5,23.5 26,12 44,8.5
                 C 50,7.2 60,7.2 66,8.5
                 C 84,12 96.5,23.5 101,34
                 C 103.5,39.5 101,44 95,44
                 Z"
              fill="url(#${id}-body)"
              stroke="#593d3b"
              stroke-width="3.4"
              stroke-linejoin="round"
              stroke-linecap="round" />

        <!-- Cute horizontal oval blush cheeks -->
        <ellipse cx="36" cy="30" rx="4.6" ry="2.3" fill="#c0a692" opacity="0.9" />
        <ellipse cx="74" cy="30" rx="4.6" ry="2.3" fill="#c0a692" opacity="0.9" />

        <!-- Open Eyes Container (for cursor tracking) -->
        <g class="gummy-eyes-group">
          <!-- Left Eye: Cute bead with top-left sparkle -->
          <g class="gummy-eye-left">
            <circle cx="46" cy="26" r="3.3" fill="#593d3b" />
            <circle cx="44.8" cy="24.8" r="1.1" fill="#ffffff" />
          </g>

          <!-- Right Eye: Cute bead with top-left sparkle -->
          <g class="gummy-eye-right">
            <circle cx="64" cy="26" r="3.3" fill="#593d3b" />
            <circle cx="62.8" cy="24.8" r="1.1" fill="#ffffff" />
          </g>
        </g>

        <!-- Closed Eyes for Happy Blink: ⌒  ⌒ -->
        <g class="gummy-eyes-blink" display="none" pointer-events="none">
          <path d="M 42.5,27 Q 46,24 49.5,27" fill="none" stroke="#593d3b" stroke-width="2.2" stroke-linecap="round" />
          <path d="M 60.5,27 Q 64,24 67.5,27" fill="none" stroke="#593d3b" stroke-width="2.2" stroke-linecap="round" />
        </g>

        <!-- Sweet Smile -->
        <path class="gummy-mouth"
              d="M 52.4,27.8 Q 55,30.2 57.6,27.8"
              fill="none"
              stroke="#593d3b"
              stroke-width="2"
              stroke-linecap="round" />
      </g>
    `;

    return {
      svg,
      bodyGroup: svg.querySelector('.gummy-body-group'),
      shadow: svg.querySelector('.gummy-shadow'),
      eyesGroup: svg.querySelector('.gummy-eyes-group'),
      eyesBlink: svg.querySelector('.gummy-eyes-blink'),
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // GUMMY CONTROLLER
  // ═══════════════════════════════════════════════════════════════════════════
  class GummyInstance {
    constructor(container, color = 'green') {
      if (!container) return;
      this.container = container;

      const dom = createGummyDOM(color);
      this.svg = dom.svg;
      this.bodyGroup = dom.bodyGroup;
      this.shadow = dom.shadow;
      this.eyesGroup = dom.eyesGroup;
      this.eyesBlink = dom.eyesBlink;

      this.container.innerHTML = '';
      this.container.appendChild(this.svg);

      // Eye tracking
      this.eyeX = 0;
      this.eyeY = 0;
      this.targetEyeX = 0;
      this.targetEyeY = 0;

      // Squash and stretch
      this.scaleX = 1;
      this.scaleY = 1;
      this.targetScaleX = 1;
      this.targetScaleY = 1;
      this.translateY = 0;
      this.targetTranslateY = 0;

      // Hop physics
      this.isHopping = false;
      this.hopStartTime = 0;
      this.hopDuration = 480;
      this.hopHeight = 14;

      // Natural blinking
      this.isBlinking = false;
      this.nextBlinkTime = performance.now() + 2000 + Math.random() * 3200;
      this.blinkEndTime = 0;

      // Autonomous life & movement timers
      this.lastUserMouseMoveTime = performance.now();
      this.nextAutonomousGazeTime = performance.now() + 800 + Math.random() * 2000;
      this.nextAutonomousHopTime = performance.now() + 2500 + Math.random() * 4500;
      this.nextSuperJumpTime = performance.now() + 9000 + Math.random() * 14000;
      this.isSuperJumping = false;
      this.rotation = 0;
      this.clickCount = 0;
      this.lastClickTime = 0;

      // First-class procedural 360° backflip physics
      this.isBackflipping = false;
      this.backflipStartTime = 0;
      this.backflipDuration = 1100;
      this.backflipCallback = null;

      this.bindInteractions();
      this.rafId = requestAnimationFrame((t) => this.tick(t));
    }

    bindInteractions() {
      // Hover: cheerful high hop
      this.container.addEventListener('mouseenter', () => {
        if (!this.isBackflipping) this.hop(36, 520);
      });

      // Click: squish and launch! Rapid clicks trigger SUPER JUMP!
      this.container.addEventListener('click', (e) => {
        if (this.isBackflipping) return;
        const now = performance.now();
        if (now - this.lastClickTime < 420) {
          this.clickCount++;
        } else {
          this.clickCount = 1;
        }
        this.lastClickTime = now;

        if (this.clickCount >= 2 || e.shiftKey) {
          // Double click: SUPER JUMP!
          this.clickCount = 0;
          this.superJump(105, 860);
          return;
        }

        this.targetScaleX = 1.35;
        this.targetScaleY = 0.65;
        this.triggerBlink(240);
        setTimeout(() => {
          this.hop(62, 640);
        }, 90);
      });
    }

    backflip(onComplete) {
      this.isBackflipping = true;
      this.backflipStartTime = performance.now();
      this.backflipDuration = 1100;
      this.backflipCallback = onComplete || null;

      // Cancel ongoing hops/super jumps
      this.isHopping = false;
      this.isSuperJumping = false;
      this.rotation = 0;
    }

    superJump(height = 98, duration = 820) {
      if (this.isHopping || this.isBackflipping) return;
      this.isSuperJumping = true;
      // Pre-jump dramatic deep compression
      this.targetScaleX = 1.50;
      this.targetScaleY = 0.50;
      this.targetTranslateY = 5;
      this.triggerBlink(350);

      setTimeout(() => {
        this.hop(height, duration);
      }, 130);
    }

    hop(height = 42, duration = 540) {
      if (this.isHopping || this.isBackflipping) return;
      this.isHopping = true;
      this.hopStartTime = performance.now();
      this.hopDuration = duration;
      this.hopHeight = height;
      // Pre-jump squash
      this.targetScaleX = 1.25;
      this.targetScaleY = 0.75;
    }

    triggerBlink(duration = 160) {
      this.isBlinking = true;
      this.blinkEndTime = performance.now() + duration;
      if (this.eyesGroup) this.eyesGroup.style.display = 'none';
      if (this.eyesBlink) this.eyesBlink.style.display = 'block';
    }

    trackCursor(clientX, clientY) {
      this.lastUserMouseMoveTime = performance.now();
      const rect = this.container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.hypot(dx, dy);

      const maxDist = 320;
      const influence = Math.min(1, dist / maxDist);
      const angle = Math.atan2(dy, dx);

      // Max eye travel: 1.8px (keeps eyes perfectly positioned on face)
      this.targetEyeX = Math.cos(angle) * (1.8 * influence);
      this.targetEyeY = Math.sin(angle) * (1.4 * influence);
    }

    tick(time) {
      this.rafId = requestAnimationFrame((t) => this.tick(t));

      // Autonomous Gaze Shifts (glance around curiously when mouse is still)
      if (time - this.lastUserMouseMoveTime > 1400 && time > this.nextAutonomousGazeTime) {
        this.nextAutonomousGazeTime = time + 1800 + Math.random() * 3200;
        this.targetEyeX = (Math.random() - 0.5) * 2.8;
        this.targetEyeY = (Math.random() - 0.5) * 2.0;
      }

      // 1. Smooth eye movement
      this.eyeX += (this.targetEyeX - this.eyeX) * 0.16;
      this.eyeY += (this.targetEyeY - this.eyeY) * 0.16;
      if (this.eyesGroup) {
        this.eyesGroup.style.transform = `translate(${this.eyeX.toFixed(2)}px, ${this.eyeY.toFixed(2)}px)`;
      }

      // 2. Natural blinking
      if (!this.isBlinking && time > this.nextBlinkTime) {
        this.triggerBlink(150);
        this.nextBlinkTime = time + 2500 + Math.random() * 4000;
      } else if (this.isBlinking && time > this.blinkEndTime) {
        this.isBlinking = false;
        if (this.eyesGroup) this.eyesGroup.style.display = 'block';
        if (this.eyesBlink) this.eyesBlink.style.display = 'none';
      }

      // Autonomous SUPER JUMP once in a while!
      if (!this.isHopping && time > this.nextSuperJumpTime) {
        this.nextSuperJumpTime = time + 16000 + Math.random() * 24000;
        this.superJump(96 + Math.random() * 16, 820);
      }

      // Autonomous spontaneous small hops & joyful wiggles
      else if (!this.isHopping && time > this.nextAutonomousHopTime) {
        this.nextAutonomousHopTime = time + 3000 + Math.random() * 5200;
        const roll = Math.random();
        if (roll < 0.45) {
          // Playful autonomous hop!
          this.hop(24 + Math.random() * 22, 480 + Math.random() * 100);
        } else if (roll < 0.70) {
          // Autonomous curious wiggle
          this.targetScaleX = 1.14;
          this.targetScaleY = 0.88;
          setTimeout(() => {
            this.targetScaleX = 0.92;
            this.targetScaleY = 1.10;
            setTimeout(() => {
              this.targetScaleX = 1;
              this.targetScaleY = 1;
            }, 140);
          }, 140);
        } else if (roll < 0.85) {
          // Extra happy spontaneous blink
          this.triggerBlink(240);
        } else {
          // Big excited spontaneous leap!
          this.hop(50 + Math.random() * 14, 620);
        }
      }

      // 3. Movement Physics (Backflip, Standard Hop, or Idle Breathing)
      if (this.isBackflipping) {
        const elapsed = time - this.backflipStartTime;
        const progress = Math.min(1, elapsed / this.backflipDuration);

        // Stage 1: Anticipation Crouch (0% - 14%, ~155ms) - deep crouch into floor
        if (progress < 0.14) {
          const p = progress / 0.14;
          const ease = Math.sin(p * Math.PI * 0.5);
          this.targetTranslateY = ease * 7;
          this.targetScaleX = 1 + ease * 0.40;
          this.targetScaleY = 1 - ease * 0.36;
          this.rotation = -ease * 7;
          if (this.bodyGroup) this.bodyGroup.style.transformOrigin = '55px 44px';
          if (this.shadow) {
            this.shadow.style.transform = `scale(${1 + ease * 0.25})`;
            this.shadow.style.transformOrigin = '55px 44.5px';
            this.shadow.style.opacity = '0.36';
          }
          if (this.eyesGroup) this.eyesGroup.style.display = 'none';
          if (this.eyesBlink) this.eyesBlink.style.display = 'block';
        }
        // Stage 2: Aerial Liftoff, Apex & 360° Backflip Somersault (14% - 78%, ~700ms)
        else if (progress < 0.78) {
          const fp = (progress - 0.14) / (0.78 - 0.14);
          const arc = Math.sin(fp * Math.PI);

          // Jump trajectory: -55px apex (stays 100% visible, perfectly safe from clipping)
          this.targetTranslateY = -arc * 55;

          // Full, continuous 360° backward rotation around center of mass (55px 26px)
          if (this.bodyGroup) this.bodyGroup.style.transformOrigin = '55px 26px';
          this.rotation = -(fp * 360);

          // Dynamic physics squash & stretch during the flip
          if (fp < 0.22) {
            this.targetScaleX = 0.82;
            this.targetScaleY = 1.30;
          } else if (fp < 0.65) {
            this.targetScaleX = 1.02;
            this.targetScaleY = 0.98;
          } else {
            this.targetScaleX = 0.88;
            this.targetScaleY = 1.22;
          }

          if (this.shadow) {
            const sScale = Math.max(0.18, 1 - arc * 0.72);
            this.shadow.style.transform = `scale(${sScale})`;
            this.shadow.style.transformOrigin = '55px 44.5px';
            this.shadow.style.opacity = `${Math.max(0.06, 1 - arc * 0.82)}`;
          }

          if (this.eyesGroup) this.eyesGroup.style.display = 'none';
          if (this.eyesBlink) this.eyesBlink.style.display = 'block';
        }
        // Stage 3: Ground Impact Cushion (78% - 90%, ~130ms) - Pancake splash!
        else if (progress < 0.90) {
          const p = (progress - 0.78) / (0.90 - 0.78);
          const impact = 1 - p;
          if (this.bodyGroup) this.bodyGroup.style.transformOrigin = '55px 44px';
          this.rotation = -360;
          this.targetTranslateY = impact * 8;
          this.targetScaleX = 1 + impact * 0.46;
          this.targetScaleY = 1 - impact * 0.40;

          if (this.shadow) {
            this.shadow.style.transform = `scale(${1 + impact * 0.28})`;
            this.shadow.style.transformOrigin = '55px 44.5px';
            this.shadow.style.opacity = '0.36';
          }

          if (this.eyesGroup) this.eyesGroup.style.display = 'block';
          if (this.eyesBlink) this.eyesBlink.style.display = 'none';
        }
        // Stage 4: Elastic Spring Recovery & Settle (90% - 100%, ~110ms)
        else {
          const p = (progress - 0.90) / 0.10;
          const spring = Math.sin(p * Math.PI);
          this.rotation = 0;
          this.targetTranslateY = -spring * 4;
          this.targetScaleX = 1 - spring * 0.12;
          this.targetScaleY = 1 + spring * 0.14;

          if (this.shadow) {
            this.shadow.style.transform = 'scale(1)';
            this.shadow.style.opacity = '1';
          }

          if (this.eyesGroup) this.eyesGroup.style.display = 'block';
          if (this.eyesBlink) this.eyesBlink.style.display = 'none';
        }

        if (progress >= 1) {
          this.isBackflipping = false;
          this.rotation = 0;
          this.targetScaleX = 1;
          this.targetScaleY = 1;
          this.targetTranslateY = 0;
          if (this.bodyGroup) this.bodyGroup.style.transformOrigin = '55px 44px';
          if (this.eyesGroup) this.eyesGroup.style.display = 'block';
          if (this.eyesBlink) this.eyesBlink.style.display = 'none';
          if (this.backflipCallback) {
            this.backflipCallback();
            this.backflipCallback = null;
          }
        }
      } else if (this.isHopping) {
        const elapsed = time - this.hopStartTime;
        const progress = Math.min(1, elapsed / this.hopDuration);
        const arc = Math.sin(progress * Math.PI);

        this.targetTranslateY = -arc * this.hopHeight;

        if (this.isSuperJumping) {
          // SUPER JUMP: Rocket stretch + acrobatic aerial spin!
          if (progress < 0.40) {
            this.targetScaleX = 1 - arc * 0.32;
            this.targetScaleY = 1 + arc * 0.55;
            this.rotation = Math.sin(progress * Math.PI * 2.5) * 12;
          } else if (progress < 0.75) {
            // Apex mid-air float with playful spin
            this.targetScaleX = 0.95;
            this.targetScaleY = 1.12;
            this.rotation = Math.sin(progress * Math.PI * 4) * 18;
          } else {
            // Descending towards landing
            this.targetScaleX = 1 + (1 - progress) * 0.28;
            this.targetScaleY = 1 - (1 - progress) * 0.18;
            this.rotation = 0;
          }

          if (this.shadow) {
            const shadowScale = Math.max(0.06, 1 - arc * 0.88);
            this.shadow.style.transform = `scale(${shadowScale})`;
            this.shadow.style.transformOrigin = '55px 44.5px';
            this.shadow.style.opacity = `${Math.max(0.04, 1 - arc * 0.92)}`;
          }

          if (progress >= 1) {
            this.isHopping = false;
            this.isSuperJumping = false;
            this.targetTranslateY = 0;
            this.rotation = 0;
            // Massive pancake splash squash upon super jump landing!
            this.targetScaleX = 1.58;
            this.targetScaleY = 0.46;
            this.triggerBlink(280);
            setTimeout(() => {
              this.targetScaleX = 0.88;
              this.targetScaleY = 1.14;
              setTimeout(() => {
                this.targetScaleX = 1;
                this.targetScaleY = 1;
              }, 160);
            }, 180);
          }
        } else {
          // Standard hop
          if (progress < 0.5) {
            this.targetScaleX = 1 - arc * 0.22;
            this.targetScaleY = 1 + arc * 0.36;
          } else {
            this.targetScaleX = 1 + arc * 0.16;
            this.targetScaleY = 1 - arc * 0.12;
          }

          if (this.shadow) {
            const shadowScale = Math.max(0.18, 1 - arc * 0.65);
            this.shadow.style.transform = `scale(${shadowScale})`;
            this.shadow.style.transformOrigin = '55px 44.5px';
            this.shadow.style.opacity = `${Math.max(0.08, 1 - arc * 0.75)}`;
          }

          if (progress >= 1) {
            this.isHopping = false;
            this.targetTranslateY = 0;
            this.targetScaleX = 1.36;
            this.targetScaleY = 0.68;
            setTimeout(() => {
              this.targetScaleX = 1;
              this.targetScaleY = 1;
            }, 180);
          }
        }
      } else {
        // Subtle idle breathing
        const breath = Math.sin(time * 0.0022) * 0.01;
        this.targetScaleX = 1 - breath * 0.5;
        this.targetScaleY = 1 + breath;
        this.targetTranslateY = 0;
        this.rotation = 0;
        if (this.shadow) {
          this.shadow.style.transform = 'scale(1)';
          this.shadow.style.opacity = '1';
        }
      }

      // 4. Transform interpolation
      const interpSpeed = this.isBackflipping ? 0.36 : 0.2;
      this.scaleX += (this.targetScaleX - this.scaleX) * interpSpeed;
      this.scaleY += (this.targetScaleY - this.scaleY) * interpSpeed;
      this.translateY += (this.targetTranslateY - this.translateY) * (this.isBackflipping ? 0.38 : 0.25);

      if (this.bodyGroup) {
        const rotStr = this.rotation ? ` rotate(${this.rotation.toFixed(1)}deg)` : '';
        this.bodyGroup.style.transform = `translate(0px, ${this.translateY.toFixed(2)}px) scale(${this.scaleX.toFixed(3)}, ${this.scaleY.toFixed(3)})${rotStr}`;
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // MOUNT HERO GUMDROP
  // ═══════════════════════════════════════════════════════════════════════════
  function mount(id, color) {
    const el = document.getElementById(id);
    if (!el) return null;
    return new GummyInstance(el, color);
  }

  // The only gumdrop on the site
  const heroGummy = mount('gummy-hero', 'theme');
  window.heroGummy = heroGummy;

  // Hero greeting hop
  if (heroGummy) {
    setTimeout(() => {
      heroGummy.hop(48, 620);
    }, 400);
  }

  // Viewport observer to throttle Gummy calculations when off screen
  let isGummyInView = true;
  const heroGummyDom = document.getElementById('gummy-hero');
  if (heroGummyDom && 'IntersectionObserver' in window) {
    const gummyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isGummyInView = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    gummyObserver.observe(heroGummyDom);
  }

  // Cursor tracking for hero gumdrop (throttled when in view)
  window.addEventListener('pointermove', (e) => {
    if (heroGummy && isGummyInView) {
      heroGummy.trackCursor(e.clientX, e.clientY);
    }
  }, { passive: true });



  // ═══════════════════════════════════════════════════════════════════════════
  // KINETIC INTERACTIVE TYPOGRAPHY & MANIFESTO CONSOLE (P I C K L E)
  // ═══════════════════════════════════════════════════════════════════════════
  const PICKLE_RULES = [
    {
      letter: 'P',
      step: 'P • 01 OF 06',
      title: 'Pragmatic Craft',
      desc: 'Zero corporate fluff or 40-page discovery decks. We write fast, resilient code that solves the actual problem right now.',
      freq: 261.63 // C4
    },
    {
      letter: 'I',
      step: 'I • 02 OF 06',
      title: 'Independent Studio',
      desc: 'Built after school by two 14-year-olds. Zero investors, zero bureaucracy, 100% genuine independent craft.',
      freq: 293.66 // D4
    },
    {
      letter: 'C',
      step: 'C • 03 OF 06',
      title: 'Custom Craft',
      desc: 'Every interaction, micro-animation, and database schema is tailored by hand. No AI slop, no boilerplate templates.',
      freq: 329.63 // E4
    },
    {
      letter: 'K',
      step: 'K • 04 OF 06',
      title: 'Kept Promises',
      desc: 'We agree on the trade upfront and ship tested code before we ever call in our favor. Our word is our bond.',
      freq: 392.00 // G4
    },
    {
      letter: 'L',
      step: 'L • 05 OF 06',
      title: 'Lean Architecture',
      desc: 'Lightweight, zero bloated dependencies, instant load speeds. Built to stay snappy on any network or device.',
      freq: 440.00 // A4
    },
    {
      letter: 'E',
      step: 'E • 06 OF 06',
      title: 'Equal Barter',
      desc: 'Pure human exchange. An honest favor for serious engineering. No invoices, no late fees, just authentic trade.',
      freq: 523.25 // C5
    }
  ];

  const chars = document.querySelectorAll('.kinetic-letters .k-char');
  const dockBadge = document.getElementById('dock-badge');
  const dockTitle = document.getElementById('dock-title');
  const dockDesc = document.getElementById('dock-desc');
  const dockPills = document.querySelectorAll('.dock-nav-pills .dock-pill');

  function setPickleActive(idx, playSound = true) {
    const item = PICKLE_RULES[idx];
    if (!item) return;

    chars.forEach((c, i) => {
      c.classList.toggle('active', i === idx);
      c.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });

    dockPills.forEach((p, i) => {
      p.classList.toggle('active', i === idx);
    });

    if (dockBadge) dockBadge.textContent = item.step;
    if (dockTitle) dockTitle.textContent = item.title;
    if (dockDesc) dockDesc.textContent = item.desc;

    if (playSound && window.acoustic) {
      window.acoustic.playTone(item.freq);
    }
  }

  let dockSequence = [];
  function checkDockSequence(idx) {
    if (idx === 0) {
      dockSequence = [0];
    } else if (dockSequence.length === idx) {
      dockSequence.push(idx);
      if (dockSequence.length === 6) {
        setTimeout(() => {
          if (typeof triggerGummyEasterEgg === 'function') {
            triggerGummyEasterEgg();
          }
        }, 200);
        dockSequence = [];
      }
    } else {
      dockSequence = (idx === 0) ? [0] : [];
    }
  }

  chars.forEach((char, idx) => {
    char.addEventListener('click', (e) => {
      e.preventDefault();
      setPickleActive(idx, true);
      checkDockSequence(idx);
    });
    char.addEventListener('mouseenter', () => {
      if (chars[idx - 1]) chars[idx - 1].style.transform = 'translateY(-4px)';
      if (chars[idx + 1]) chars[idx + 1].style.transform = 'translateY(-4px)';
      setPickleActive(idx, true);
    });
    char.addEventListener('mouseleave', () => {
      if (chars[idx - 1]) chars[idx - 1].style.transform = '';
      if (chars[idx + 1]) chars[idx + 1].style.transform = '';
    });
  });

  dockPills.forEach((pill, idx) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      setPickleActive(idx, true);
      checkDockSequence(idx);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // NATIVE WEB AUDIO MICRO-ACOUSTIC SYNTHESIZER (Linear / Teenage Engineering)
  // ═══════════════════════════════════════════════════════════════════════════
  class AcousticEngine {
    constructor() {
      this.ctx = null;
      // Default to MUTED; user must explicitly click the sound toggle to enable
      this.enabled = localStorage.getItem('pickle_sound_enabled') === 'true';
      this.initToggle();
    }

    initCtx() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    initToggle() {
      const toggle = document.getElementById('snd-toggle');
      if (!toggle) return;

      const updateUI = () => {
        toggle.classList.toggle('active', this.enabled);
        const label = toggle.querySelector('.snd-label');
        if (label) label.textContent = this.enabled ? 'Sound on' : 'Sound off';
        toggle.setAttribute('aria-label', this.enabled ? 'Mute sound effects' : 'Turn sound on');
        toggle.setAttribute('title', this.enabled ? 'Sound on (Click to mute)' : 'Sound off (Click to enable)');
      };

      updateUI();

      toggle.addEventListener('click', () => {
        this.enabled = !this.enabled;
        localStorage.setItem('pickle_sound_enabled', this.enabled);
        updateUI();
        if (this.enabled) {
          this.initCtx();
          this.play('ping-high');
        }
      });
    }

    play(type) {
      if (!this.enabled) return;
      this.initCtx();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === 'switch') {
        // Crisp mechanical toggle
        osc.type = 'sine';
        osc.frequency.setValueAtTime(680, t);
        osc.frequency.exponentialRampToValueAtTime(940, t + 0.05);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
        osc.start(t);
        osc.stop(t + 0.06);
      } else if (type === 'ping-high') {
        // High crystal chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1180, t);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
        osc.start(t);
        osc.stop(t + 0.12);
      } else if (type === 'lock') {
        // Dual engagement chord
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, t);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
        osc.start(t);
        osc.stop(t + 0.14);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880, t + 0.04);
        gain2.gain.setValueAtTime(0.05, t + 0.04);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(t + 0.04);
        osc2.stop(t + 0.16);
      } else if (type === 'gummy-hop') {
        // Kawaii squishy chirp
        osc.type = 'sine';
        osc.frequency.setValueAtTime(420, t);
        osc.frequency.exponentialRampToValueAtTime(680, t + 0.08);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.start(t);
        osc.stop(t + 0.1);
      } else if (type === 'bell') {
        // Solid brass service desk bell with resonant harmonic decay
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1760, t);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
        osc.start(t);
        osc.stop(t + 0.55);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(3520, t);
        gain2.gain.setValueAtTime(0.04, t);
        gain2.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(t);
        osc2.stop(t + 0.28);
      } else if (type === 'shutter') {
        // Polaroid instant camera mechanical shutter click (double transient)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(240, t + 0.03);
        gain.gain.setValueAtTime(0.07, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
        osc.start(t);
        osc.stop(t + 0.035);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(950, t + 0.05);
        osc2.frequency.exponentialRampToValueAtTime(320, t + 0.09);
        gain2.gain.setValueAtTime(0.06, t + 0.05);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(t + 0.05);
        osc2.stop(t + 0.1);
      } else if (type === 'tape') {
        // Cassette tape mechanism latch
        osc.type = 'sine';
        osc.frequency.setValueAtTime(340, t);
        osc.frequency.exponentialRampToValueAtTime(180, t + 0.04);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        osc.start(t);
        osc.stop(t + 0.05);
      } else if (type === 'tea' || type === 'clink') {
        // Ceramic chai cup clink
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2400, t);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        osc.start(t);
        osc.stop(t + 0.18);
      } else if (type === 'pencil') {
        // Tactile graphite checkbox tick
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1400, t);
        osc.frequency.exponentialRampToValueAtTime(700, t + 0.03);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        osc.start(t);
        osc.stop(t + 0.04);
      } else if (type === 'keystroke') {
        // Mechanical keyboard switch click
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1100, t);
        osc.frequency.exponentialRampToValueAtTime(450, t + 0.03);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
        osc.start(t);
        osc.stop(t + 0.035);
      } else if (type === 'caliper') {
        // Precision brass gear ratchet
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1500, t);
        osc.frequency.exponentialRampToValueAtTime(2100, t + 0.02);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);
        osc.start(t);
        osc.stop(t + 0.025);
      }
    }

    playTone(freq = 440) {
      if (!this.enabled) return;
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.045, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.18);
    }

    startLoFiTape() {
      this.initCtx();
      if (!this.ctx) return;
      if (this.tapeTimer) return;
      // Procedural Web Audio Lo-Fi tape loop: Cmaj7 -> Am7 -> Fmaj7 -> G7
      const notes = [
        261.63, 329.63, 392.00, 493.88,
        220.00, 261.63, 329.63, 392.00,
        174.61, 220.00, 261.63, 329.63,
        196.00, 246.94, 293.66, 349.23
      ];
      let step = 0;
      this.tapeTimer = setInterval(() => {
        try {
          if (!this.ctx || this.ctx.state === 'suspended') return;
          const f = notes[step % notes.length];
          step++;
          const t = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, t);
          gain.gain.setValueAtTime(0.022, t);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.36);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.38);
        } catch(e) {}
      }, 320);
    }

    stopLoFiTape() {
      if (this.tapeTimer) {
        clearInterval(this.tapeTimer);
        this.tapeTimer = null;
      }
    }
  }

  const sound = new AcousticEngine();
  window.acoustic = sound;

  // Attach sound triggers to elements with data-sound
  document.querySelectorAll('[data-sound]').forEach(el => {
    el.addEventListener('click', () => {
      const snd = el.getAttribute('data-sound');
      if (snd) sound.play(snd);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // HANDCRAFTED VECTOR PARTICLE ENGINE (Zero Emojis, Pure SVG & Kinematics)
  // ═══════════════════════════════════════════════════════════════════════════
  function createCookieSVG() {
    return `<svg viewBox="0 0 30 30" width="26" height="26" class="vector-cookie-svg">
      <defs>
        <!-- Freshly baked golden cookie gradient -->
        <radialGradient id="cookie-bake-grad" cx="42%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#dfbe99"/>
          <stop offset="55%" stop-color="#be9368"/>
          <stop offset="100%" stop-color="#8a5a2e"/>
        </radialGradient>
        <!-- Glossy chocolate chip gradient -->
        <linearGradient id="choc-chip-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4a250a"/>
          <stop offset="100%" stop-color="#241004"/>
        </linearGradient>
      </defs>
      <!-- Cookie Base: Slightly organic scalloped round shape -->
      <path d="M 15,2.5
               C 21.5,2.2 27.5,7.5 27.5,14.5
               C 27.5,21.5 22,27.5 15,27.5
               C 7.5,27.5 2.5,22 2.5,15
               C 2.5,8 8,2.8 15,2.5 Z"
            fill="url(#cookie-bake-grad)"
            stroke="#582f0e"
            stroke-width="1.6"
            stroke-linejoin="round"/>
      
      <!-- Baked Crust Texture Ring / Crinkles -->
      <path d="M 7,10 Q 10,8 14,9" stroke="#936639" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.65"/>
      <path d="M 18,21 Q 22,20 23,16" stroke="#936639" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.65"/>
      <path d="M 8,19 Q 11,23 15,22" stroke="#936639" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.65"/>

      <!-- Chocolate Chips with delicious rounded triangular morsel facets -->
      <!-- Chip 1 (Top Left) -->
      <path d="M 9.5,7.5 Q 12,6.5 13,8.5 Q 11.5,11 9,10 Q 8,8.5 9.5,7.5 Z" fill="url(#choc-chip-grad)"/>
      <circle cx="10.2" cy="7.8" r="0.6" fill="#7a3f14" opacity="0.8"/>

      <!-- Chip 2 (Center Right) -->
      <path d="M 18,10.5 Q 21.5,9.5 22,12 Q 21,14.5 18.5,14 Q 17,12.5 18,10.5 Z" fill="url(#choc-chip-grad)"/>
      <circle cx="19" cy="11" r="0.6" fill="#7a3f14" opacity="0.8"/>

      <!-- Chip 3 (Center) -->
      <path d="M 12.5,14 Q 15.5,13 16,15.5 Q 14.5,17.5 12,17 Q 11,15.5 12.5,14 Z" fill="url(#choc-chip-grad)"/>
      <circle cx="13.2" cy="14.5" r="0.6" fill="#7a3f14" opacity="0.8"/>

      <!-- Chip 4 (Bottom Left) -->
      <path d="M 7.5,15.5 Q 10,15 10.5,17.5 Q 9,19.5 7,18.5 Q 6.5,17 7.5,15.5 Z" fill="url(#choc-chip-grad)"/>

      <!-- Chip 5 (Bottom Right) -->
      <path d="M 17,18.5 Q 19.5,17.5 20.5,19.5 Q 19,22 16.5,21.5 Q 15.5,20 17,18.5 Z" fill="url(#choc-chip-grad)"/>
      <circle cx="17.6" cy="19" r="0.5" fill="#7a3f14" opacity="0.8"/>

      <!-- Tiny Cookie Crumb Specks -->
      <circle cx="6" cy="13" r="0.7" fill="#582f0e" opacity="0.6"/>
      <circle cx="23.5" cy="8.5" r="0.6" fill="#582f0e" opacity="0.6"/>
      <circle cx="14" cy="6" r="0.5" fill="#582f0e" opacity="0.5"/>
      <circle cx="13.5" cy="24.5" r="0.6" fill="#582f0e" opacity="0.6"/>
      <circle cx="21" cy="23" r="0.5" fill="#582f0e" opacity="0.5"/>
    </svg>`;
  }

  function createDiamondStarSVG() {
    return `<svg viewBox="0 0 24 24" width="20" height="20">
      <defs>
        <linearGradient id="star-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff8dc"/>
          <stop offset="50%" stop-color="#e8bf68"/>
          <stop offset="100%" stop-color="#b8832a"/>
        </linearGradient>
      </defs>
      <polygon points="12,1 14.5,9.5 23,12 14.5,14.5 12,23 9.5,14.5 1,12 9.5,9.5" fill="url(#star-gold-grad)"/>
      <circle cx="12" cy="12" r="2" fill="#ffffff"/>
    </svg>`;
  }

  function createKineticRingSVG() {
    return `<svg viewBox="0 0 32 32" width="28" height="28" class="vector-ring-particle">
      <circle cx="16" cy="16" r="13" fill="none" stroke="#a4ac86" stroke-width="2" stroke-dasharray="3 2" opacity="0.85"/>
    </svg>`;
  }

  function spawnHandcraftedParticle(originX, originY, type = 'any') {
    const el = document.createElement('div');
    el.className = 'vector-particle';
    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;

    let svgHtml = '';
    const choice = type === 'any' ? Math.floor(Math.random() * 3) : type;
    if (choice === 0) svgHtml = createCookieSVG();
    else if (choice === 1) svgHtml = createDiamondStarSVG();
    else svgHtml = createKineticRingSVG();

    el.innerHTML = svgHtml;

    const angle = (Math.PI * 0.15) + Math.random() * (Math.PI * 0.7);
    const force = Math.random() * 110 + 75;
    const dir = (Math.random() - 0.5) * 2;
    const vx = dir * (Math.random() * 100 + 35);
    const vy = -Math.sin(angle) * force;
    const rot = (Math.random() - 0.5) * 540;

    el.style.setProperty('--vx', `${vx}px`);
    el.style.setProperty('--vy', `${vy}px`);
    el.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1150);
  }

  function spawnHandcraftedBurst(originX, originY, count = 18) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        spawnHandcraftedParticle(
          originX + (Math.random() * 40 - 20),
          originY + (Math.random() * 30 - 15)
        );
      }, i * 28);
    }
  }

  // Attach hop sound and handcrafted vector particles to gummy interactions
  const gummyEl = document.getElementById('gummy-hero');
  if (gummyEl) {
    gummyEl.addEventListener('click', () => {
      sound.play('gummy-hop');
      const rect = gummyEl.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 3;
      for (let i = 0; i < 4; i++) {
        setTimeout(() => spawnHandcraftedParticle(x, y), i * 75);
      }
    });

    gummyEl.addEventListener('dblclick', (e) => {
      e.preventDefault();
      triggerGummyEasterEgg();
    });

    let lastSparkleTime = 0;
    gummyEl.addEventListener('pointerenter', () => {
      const now = Date.now();
      if (now - lastSparkleTime > 1200) {
        lastSparkleTime = now;
        const rect = gummyEl.getBoundingClientRect();
        spawnHandcraftedParticle(rect.left + rect.width / 2, rect.top + rect.height / 3);
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DIRECTIONAL SPECULAR SPOTLIGHT & HAIRLINE BORDER LIGHTING (Linear)
  // ═══════════════════════════════════════════════════════════════════════════
  const spotlight = document.getElementById('cursor-spotlight');
  const specularCards = document.querySelectorAll('.specular-card');

  window.addEventListener('pointermove', (e) => {
    const { clientX, clientY } = e;

    // Smooth cursor spotlight
    if (spotlight) {
      spotlight.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
    }

    // Dynamic hairline border highlight on hovered cards
    specularCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  }, { passive: true });

  // ═══════════════════════════════════════════════════════════════════════════
  // MAGNETIC ATTRACTION ON BUTTONS & LINKS (.magnetic-btn, .magnetic-link)
  // ═══════════════════════════════════════════════════════════════════════════
  document.querySelectorAll('.magnetic-btn, .magnetic-link').forEach(el => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // TE-GRADE TELEMETRY CLOCK
  // ═══════════════════════════════════════════════════════════════════════════
  const clockEl = document.getElementById('nav-clock');
  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hh}:${mm}:${ss}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // ═══════════════════════════════════════════════════════════════════════════
  // SECRET GUMMY EASTER EGG (Handcrafted Vector Physics & Pure Web Audio)
  // ═══════════════════════════════════════════════════════════════════════════
  function triggerGummyEasterEgg() {
    if (!heroGummy) return;

    // Trigger true procedural 360° animated backflip!
    heroGummy.backflip();

    // Spawn celebratory handcrafted vector burst right as Gummy reaches aerial liftoff (160ms)
    const gummyEl = document.getElementById('gummy-hero');
    if (gummyEl) {
      setTimeout(() => {
        const rect = gummyEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        spawnHandcraftedBurst(centerX, centerY - 15, 24);
      }, 160);
    }

    // Play celebratory acoustic chords
    if (window.acoustic) {
      window.acoustic.play('lock');
      setTimeout(() => window.acoustic.playTone(523.25), 140);
      setTimeout(() => window.acoustic.playTone(659.25), 280);
      setTimeout(() => window.acoustic.playTone(783.99), 450);
    }

    // Show handcrafted vector toast badge (ZERO EMOJIS)
    let toast = document.getElementById('egg-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'egg-toast';
      toast.className = 'easter-egg-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <div class="toast-crest-icon" aria-hidden="true">
        ${createCookieSVG()}
      </div>
      <div class="toast-content-col">
        <span class="toast-primary-text">Fresh Cookie Unlocked</span>
        <span class="toast-sub-text">Procedural 360&deg; animated backflip &bull; Acoustic tone preserved</span>
      </div>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3400);
  }
  window.triggerGummyEasterEgg = triggerGummyEasterEgg;

  // Keyboard typing detector for "pickle" or "cookie"
  let secretBuffer = '';
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable) return;
    
    if (e.key === 'Backspace') {
      secretBuffer = secretBuffer.slice(0, -1);
      return;
    }
    if (e.key.length !== 1) return;

    secretBuffer += e.key.toLowerCase();
    if (secretBuffer.length > 20) secretBuffer = secretBuffer.slice(-20);

    if (secretBuffer.endsWith('pickle') || secretBuffer.endsWith('cookie')) {
      const hero = document.getElementById('hero');
      const isFar = window.scrollY > 250;
      if (hero && isFar) {
        if (lenis) {
          lenis.scrollTo(hero, { offset: 0, duration: 0.95 });
        } else {
          hero.scrollIntoView({ behavior: 'smooth' });
        }
      }
      const delay = isFar ? 920 : 60;
      setTimeout(() => {
        triggerGummyEasterEgg();
      }, delay);
      secretBuffer = '';
    }
  });

  // Card 04 Gummy click trigger ("Poke Gummy ↑")
  const cardGummyBtn = document.getElementById('card-gummy-trigger');
  if (cardGummyBtn) {
    cardGummyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const hero = document.getElementById('hero');
      if (hero) {
        if (lenis) {
          lenis.scrollTo(hero, { offset: 0, duration: 0.95 });
        } else {
          hero.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Wait for the viewport to arrive at hero so user SEES the entire animated flip!
      setTimeout(() => {
        triggerGummyEasterEgg();
      }, 920);
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PROJECT LIVE PREVIEW MODAL SYSTEM (Linear-Grade Viewport Experience)
  // ═══════════════════════════════════════════════════════════════════════════
  const PROJECTS_DATA = [
    {
      idx: 0,
      title: 'Pickle Studio',
      type: 'live',
      slug: 'builder.p-corp.live',
      category: 'Web App • Studio Builder',
      url: 'https://azanabdullah2752012-ui.github.io/builder/',
      desc: 'Visual no-code web builder & 1-click publisher crafted for instant layout experimentation.',
      tech: ['TypeScript', 'React', 'Vite', 'Canvas', 'LocalStorage'],
      status: 'Live Deployed',
      terminal: `$ pickle-studio --inspect\n[VITE] Hot Module Replacement active (18ms)\n[CANVAS] 60fps vector canvas renderer initialized\n[STORAGE] Local schema synced with zero telemetry\n[STATE] Ready for visual layout export.`,
      specs: [
        { label: 'Engine', val: 'React 18 + Vite Canvas' },
        { label: 'Footprint', val: '42 kB gzip / Zero bloat' },
        { label: 'Persistence', val: 'LocalStorage + JSON' },
        { label: 'Deploy', val: 'GitHub Pages Deployed' }
      ]
    },
    {
      idx: 1,
      title: 'JEE Mentor OS',
      type: 'live',
      slug: 'jee-os.p-corp.live',
      category: 'Web App • Study OS',
      url: 'https://azanabdullah2752012-ui.github.io/jee-app-for-friends/',
      desc: 'Study OS with Raycast & Linear inspired keyboard navigation and high-focus tools.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Web Audio', 'State Engine'],
      status: 'Live Deployed',
      terminal: `$ jee-os --focus-session active\n[POMODORO] 50m deep work sprint started\n[KEYBINDINGS] Raycast & Linear quick-jump enabled\n[AUDIO] Ambient binaural focus synthesis active\n[METRICS] Daily target: 120 practice problems.`,
      specs: [
        { label: 'Framework', val: 'React + TypeScript' },
        { label: 'Navigation', val: 'Command-K Palette & Quick-Keys' },
        { label: 'Audio', val: 'Web Audio Focus Synthesizer' },
        { label: 'Storage', val: 'Realtime State Persistence' }
      ]
    },
    {
      idx: 2,
      title: 'JEE Elevate Hub',
      type: 'live',
      slug: 'elevate.p-corp.live',
      category: 'Platform • Exam Prep',
      url: 'https://azanabdullah2752012-ui.github.io/jee-elevate-hub/',
      desc: 'Curated lectures, authentic past-year questions, and instant formula quizzing platform.',
      tech: ['JavaScript', 'CSS Grid', 'MathJax', 'JSON Database'],
      status: 'Live Deployed',
      terminal: `$ elevate-hub test-suite\n[DB] 4,200 past exam questions loaded\n[MATHJAX] LaTeX formula rendering at 12ms/eq\n[QUIZ] Instant diagnostic scoring enabled\n[SPEED] 100/100 Google Lighthouse audit.`,
      specs: [
        { label: 'Rendering', val: 'MathJax 3 + CSS Grid' },
        { label: 'Dataset', val: '4,000+ Curated Questions' },
        { label: 'Latency', val: '< 15ms Client Route Swaps' },
        { label: 'Architecture', val: 'Static Edge-Cached Database' }
      ]
    },
    {
      idx: 3,
      title: 'SafeSpace',
      type: 'live',
      slug: 'safespace.p-corp.live',
      category: 'Web Product • School Tool',
      url: 'https://azanabdullah2752012-ui.github.io/anti-bullying/',
      desc: 'Confidential anti-bullying reporting platform built for students and school communities.',
      tech: ['HTML5', 'Vanilla CSS', 'Security API', 'Zero Bloat'],
      status: 'Live Deployed',
      terminal: `$ safespace verify-crypto\n[CIPHER] Zero-knowledge encrypted report queue\n[PRIVACY] Zero IP logging • Zero third-party trackers\n[SUBMISSION] Encrypted dispatch token verified\n[SECURITY] Peer-reviewed safe community reporting.`,
      specs: [
        { label: 'Privacy', val: 'Zero Tracking • No Analytics' },
        { label: 'Security', val: 'Client-Side Encrypted Payloads' },
        { label: 'Accessibility', val: 'WCAG AAA High Contrast' },
        { label: 'Platform', val: 'Universal Device Support' }
      ]
    },
    {
      idx: 4,
      title: 'Foundu',
      type: 'live',
      slug: 'foundu.p-corp.live',
      category: 'Interactive Web • Math Platform',
      url: 'https://azanabdullah2752012-ui.github.io/FoundU/',
      desc: 'Intuition-first mathematics and physics learning web platform with visual explanations.',
      tech: ['HTML5', 'CSS Motion', 'Interactive SVG', 'JavaScript'],
      status: 'Live Deployed',
      terminal: `$ foundu --visualize-proof\n[GEOMETRY] Interactive SVG coordinate system online\n[PHYSICS] Numerical calculus solver running (60fps)\n[INTUITION] Real-time visual equation scrubbing active\n[RENDER] Zero-lag vector graphics pipeline.`,
      specs: [
        { label: 'Graphics', val: 'Handcrafted Interactive SVGs' },
        { label: 'Engine', val: 'Numerical Physics Solver' },
        { label: 'Framerate', val: '60 FPS Smooth Scrubbing' },
        { label: 'Responsive', val: 'Fluid Vector Layout' }
      ]
    },
    {
      idx: 5,
      title: 'J.A.R.V.I.S. (AZAN OS)',
      type: 'repo',
      slug: 'github.com/azanabdullah2752012-ui/AZAN',
      category: 'Python Tool • Autonomous Daemon',
      url: 'https://github.com/azanabdullah2752012-ui/AZAN',
      desc: 'Autonomous macOS intelligence & FastAPI background daemon designed for high-throughput automation.',
      tech: ['Python 3.11', 'FastAPI', 'macOS IPC', 'Uvicorn', 'Shell Daemons'],
      status: 'GitHub Repository',
      terminal: `$ azan-os status\n[DAEMON] Active on PID 4209 • macOS Sonoma 14.6\n[FASTAPI] Uvicorn listening on http://127.0.0.1:8000\n[MEMORY] 18.4 MB resident • Zero background CPU bleed\n[INTELLIGENCE] Ready for command dispatch.`,
      specs: [
        { label: 'Runtime', val: 'Python 3.11 + FastAPI' },
        { label: 'Latency', val: '< 12ms Local Dispatch' },
        { label: 'Footprint', val: '18.4 MB Resident' },
        { label: 'Platform', val: 'macOS Native Daemon' }
      ]
    },
    {
      idx: 6,
      title: 'CivilOS & AmbientSpaces',
      type: 'repo',
      slug: 'github.com/azanabdullah2752012-ui/azanaiprojext',
      category: 'Interactive Toy • Simulation',
      url: 'https://github.com/azanabdullah2752012-ui/azanaiprojext',
      desc: 'Persistent artificial civilization simulation sandbox world with emergent entity behavior.',
      tech: ['HTML5 Canvas', 'Agent Sim', 'Physics Engine', 'Generative Rules'],
      status: 'GitHub Repository',
      terminal: `$ civilos --world-seed 9924\n[TERRAIN] Procedural biosphere generated (1024x1024)\n[ENTITIES] 240 autonomous agents spawned\n[TICKS] 60 TPS simulation loop locked\n[OUTPUT] Real-time visual canvas renderer online.`,
      specs: [
        { label: 'Engine', val: 'Custom 2D Canvas' },
        { label: 'Framerate', val: '60 FPS Physics Loop' },
        { label: 'Agents', val: '240 Persistent Entities' },
        { label: 'State', val: 'Deterministic Seeded' }
      ]
    },
    {
      idx: 7,
      title: "Azan's Studio Hub",
      type: 'live',
      slug: 'azan.p-corp.live',
      category: 'Portfolio • Personal Hub',
      url: 'https://azanabdullah2752012-ui.github.io',
      desc: 'Personal builder site and experimental portfolio showcasing software shipping after school.',
      tech: ['HTML5', 'CSS Design System', 'Dynamic JavaScript', 'Lenis Scroll'],
      status: 'Live Deployed',
      terminal: `$ azan-hub status\n[PORTFOLIO] After-school freelance projects indexed\n[LENIS] Inertia scroll physics locked at 120hz\n[DESIGN] Curated warm editorial color system\n[AUTHOR] Azan Abdullah (14) • Co-Founder.`,
      specs: [
        { label: 'Type', val: 'Personal Engineering Studio' },
        { label: 'Motion', val: 'Lenis Inertial Smooth Scrolling' },
        { label: 'Palette', val: '10-Color Tailored Caramel System' },
        { label: 'Audio', val: 'Web Audio Synthesizer' }
      ]
    }
  ];

  let currentProjectIdx = 0;
  let currentModalMode = 'live';
  let loaderSafetyTimer = null;

  const modalEl = document.getElementById('project-preview-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalLoader = document.getElementById('modal-loader');
  const modalDeviceFrame = document.getElementById('modal-device-frame');
  const modalDeviceSwitcher = document.getElementById('modal-device-switcher');
  const modalRepoBlueprint = document.getElementById('modal-repo-blueprint');
  const modalTitle = document.getElementById('modal-title');
  const modalUrlSlug = document.getElementById('modal-url-slug');
  const modalStatusText = document.getElementById('modal-status-text');
  const modalExternalLink = document.getElementById('modal-external-link');
  const modalDesc = document.getElementById('modal-desc');
  const modalCounter = document.getElementById('modal-counter');
  const modalTechPills = document.getElementById('modal-tech-pills');
  const modalTabLive = document.getElementById('modal-tab-live');
  const modalTabBlueprint = document.getElementById('modal-tab-blueprint');

  function openProjectPreview(index) {
    const proj = PROJECTS_DATA[index];
    if (!proj || !modalEl) return;

    currentProjectIdx = index;
    document.body.classList.add('modal-open');
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');

    // Default to desktop device view
    setDeviceView('desktop');

    if (window.acoustic) window.acoustic.play('lock');
    renderModalContent(proj);
  }

  function setModalMode(mode) {
    currentModalMode = mode;
    const proj = PROJECTS_DATA[currentProjectIdx];

    if (modalTabLive) {
      modalTabLive.classList.toggle('active', mode === 'live');
      modalTabLive.setAttribute('aria-selected', mode === 'live' ? 'true' : 'false');
    }
    if (modalTabBlueprint) {
      modalTabBlueprint.classList.toggle('active', mode === 'blueprint');
      modalTabBlueprint.setAttribute('aria-selected', mode === 'blueprint' ? 'true' : 'false');
    }

    if (mode === 'blueprint') {
      if (modalDeviceSwitcher) {
        modalDeviceSwitcher.style.opacity = '0.35';
        modalDeviceSwitcher.style.pointerEvents = 'none';
      }
      if (modalIframe) modalIframe.style.display = 'none';
      if (modalLoader) modalLoader.classList.add('hidden');
      if (modalRepoBlueprint) {
        modalRepoBlueprint.style.display = 'flex';
        renderBlueprintContent(proj);
      }
    } else {
      // mode === 'live'
      if (modalDeviceSwitcher) {
        modalDeviceSwitcher.style.opacity = '1';
        modalDeviceSwitcher.style.pointerEvents = 'auto';
      }
      if (modalRepoBlueprint) modalRepoBlueprint.style.display = 'none';

      if (proj && proj.type === 'repo') {
        // Repo projects open blueprint view with terminal focus
        if (modalRepoBlueprint) {
          modalRepoBlueprint.style.display = 'flex';
          renderBlueprintContent(proj);
        }
      } else if (modalIframe && proj) {
        modalIframe.style.display = 'block';
        if (modalLoader) modalLoader.classList.remove('hidden');

        clearTimeout(loaderSafetyTimer);
        loaderSafetyTimer = setTimeout(() => {
          if (modalLoader) modalLoader.classList.add('hidden');
        }, 1200);

        modalIframe.onload = () => {
          clearTimeout(loaderSafetyTimer);
          if (modalLoader) modalLoader.classList.add('hidden');
        };
        modalIframe.src = proj.url;
      }
    }

    if (window.acoustic) window.acoustic.play('switch');
  }

  function renderBlueprintContent(proj) {
    if (!proj) return;
    const bpTitle = document.getElementById('blueprint-title');
    const bpDesc = document.getElementById('blueprint-desc');
    const bpTypePill = document.getElementById('blueprint-type-pill');
    const bpTerm = document.getElementById('blueprint-terminal-code');
    const bpCta = document.getElementById('blueprint-cta');
    const bpGrid = document.getElementById('blueprint-specs-grid');

    if (bpTitle) bpTitle.textContent = proj.title;
    if (bpDesc) bpDesc.textContent = proj.desc;
    if (bpTypePill) bpTypePill.textContent = proj.category;
    if (bpTerm && proj.terminal) bpTerm.textContent = proj.terminal;
    if (bpCta) {
      bpCta.href = proj.url;
      bpCta.innerHTML = proj.type === 'repo' 
        ? `<span>View Code Repository</span><span aria-hidden="true">&nearr;</span>`
        : `<span>Open Live App</span><span aria-hidden="true">&nearr;</span>`;
    }
    if (bpGrid && proj.specs) {
      bpGrid.innerHTML = proj.specs.map(s => `
        <div class="blueprint-spec-item">
          <span class="blueprint-spec-label">${s.label}</span>
          <span class="blueprint-spec-val">${s.val}</span>
        </div>
      `).join('');
    }
  }

  function renderModalContent(proj) {
    if (modalTitle) modalTitle.textContent = proj.title;
    if (modalUrlSlug) modalUrlSlug.textContent = proj.slug;
    if (modalStatusText) modalStatusText.textContent = proj.status;
    if (modalDesc) modalDesc.textContent = proj.desc;
    if (modalCounter) modalCounter.textContent = `${String(proj.idx + 1).padStart(2, '0')} / ${String(PROJECTS_DATA.length).padStart(2, '0')}`;
    if (modalExternalLink) {
      modalExternalLink.href = proj.url;
      modalExternalLink.setAttribute('aria-label', `Open ${proj.title} in a new tab`);
    }

    if (modalTechPills) {
      modalTechPills.innerHTML = proj.tech.map(t => `<span class="m-pill">${t}</span>`).join('');
    }

    // Default mode: repos open to Blueprint, live apps open to Live App
    const targetMode = proj.type === 'repo' ? 'blueprint' : 'live';
    setModalMode(targetMode);
  }

  function closeProjectPreview() {
    if (!modalEl) return;
    clearTimeout(loaderSafetyTimer);
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (modalIframe) {
      setTimeout(() => {
        modalIframe.src = 'about:blank';
      }, 250);
    }
    if (window.acoustic) window.acoustic.play('switch');
  }

  function setDeviceView(device) {
    if (!modalDeviceFrame) return;
    modalDeviceFrame.className = `modal-device-frame frame-${device}`;

    document.querySelectorAll('.device-tab').forEach(tab => {
      const isMatch = tab.getAttribute('data-device') === device;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    if (window.acoustic) window.acoustic.play('switch');
  }

  function nextProjectPreview() {
    const nextIdx = (currentProjectIdx + 1) % PROJECTS_DATA.length;
    openProjectPreview(nextIdx);
  }

  function prevProjectPreview() {
    const prevIdx = (currentProjectIdx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    openProjectPreview(prevIdx);
  }

  // Bind project preview triggers
  document.querySelectorAll('.btn-preview-launch[data-project-idx]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(btn.getAttribute('data-project-idx'), 10);
      if (!isNaN(idx)) openProjectPreview(idx);
    });
  });

  // Modal controls
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseDot = document.getElementById('modal-close-dot');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalReloadBtn = document.getElementById('modal-reload-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');
  const modalPrevBtn = document.getElementById('modal-prev-btn');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectPreview);
  if (modalCloseDot) modalCloseDot.addEventListener('click', closeProjectPreview);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectPreview);

  if (modalReloadBtn) {
    modalReloadBtn.addEventListener('click', () => {
      const proj = PROJECTS_DATA[currentProjectIdx];
      if (proj && proj.type === 'live' && modalIframe) {
        if (modalLoader) modalLoader.classList.remove('hidden');
        modalIframe.src = proj.url;
      }
      if (window.acoustic) window.acoustic.play('switch');
    });
  }

  if (modalNextBtn) modalNextBtn.addEventListener('click', nextProjectPreview);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevProjectPreview);

  // Mode switcher tabs
  if (modalTabLive) {
    modalTabLive.addEventListener('click', () => setModalMode('live'));
  }
  if (modalTabBlueprint) {
    modalTabBlueprint.addEventListener('click', () => setModalMode('blueprint'));
  }

  // Device switcher tabs
  document.querySelectorAll('.device-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const dev = tab.getAttribute('data-device');
      if (dev) setDeviceView(dev);
    });
  });

  // Keyboard navigation for modal
  window.addEventListener('keydown', (e) => {
    if (!modalEl || !modalEl.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeProjectPreview();
    } else if (e.key === 'ArrowRight') {
      nextProjectPreview();
    } else if (e.key === 'ArrowLeft') {
      prevProjectPreview();
    } else if (e.key === '1') {
      setModalMode('live');
    } else if (e.key === '2') {
      setModalMode('blueprint');
    } else if (e.key === 'd' || e.key === 'D') {
      setDeviceView('desktop');
    } else if (e.key === 't' || e.key === 'T') {
      setDeviceView('tablet');
    } else if (e.key === 'm' || e.key === 'M') {
      setDeviceView('mobile');
    }
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 07: 3D INTERACTIVE BUSINESS CARD & BARTER MARKER CONTROLLER
  // ═══════════════════════════════════════════════════════════════════════════
  const cardScene = document.getElementById('siteCardScene');
  const card3D = document.getElementById('siteCard3D');
  const btnFlip = document.getElementById('btnMainFlip');

  if (cardScene && card3D) {
    let isFlipped = false;
    let cardTiltX = 0, cardTiltY = 0, targetTiltX = 0, targetTiltY = 0;

    const flipCard = () => {
      isFlipped = !isFlipped;
      card3D.classList.toggle('is-flipped', isFlipped);
      if (window.acoustic) window.acoustic.play('lock');
    };

    if (btnFlip) btnFlip.addEventListener('click', flipCard);

    // Spacebar to flip when viewing card section
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        const rect = cardScene.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          e.preventDefault();
          flipCard();
        }
      }
    });

    // Click on card to flip
    let startX = 0, startY = 0;
    cardScene.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      startY = e.clientY;
    });
    cardScene.addEventListener('mouseup', (e) => {
      if (Math.abs(e.clientX - startX) < 6 && Math.abs(e.clientY - startY) < 6) {
        flipCard();
      }
    });

    // 3D Mouse Tilt & Specular Light
    cardScene.addEventListener('mousemove', (e) => {
      const rect = cardScene.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      targetTiltY = ((x - cx) / cx) * 12;
      targetTiltX = -((y - cy) / cy) * 12;

      const px = ((x / rect.width) * 100).toFixed(1) + '%';
      const py = ((y / rect.height) * 100).toFixed(1) + '%';
      card3D.style.setProperty('--card-mouse-x', px);
      card3D.style.setProperty('--card-mouse-y', py);
    });

    cardScene.addEventListener('mouseleave', () => {
      targetTiltX = 0;
      targetTiltY = 0;
    });

    const loopCardPhysics = () => {
      cardTiltX += (targetTiltX - cardTiltX) * 0.12;
      cardTiltY += (targetTiltY - cardTiltY) * 0.12;
      const baseRotY = isFlipped ? 180 : 0;
      card3D.style.transform = `rotateX(${cardTiltX.toFixed(2)}deg) rotateY(${(baseRotY + cardTiltY).toFixed(2)}deg)`;
      requestAnimationFrame(loopCardPhysics);
    };
    loopCardPhysics();

    // Founder Toggle
    const mainProfiles = {
      studio: {
        reg: 'PC-MARKER // № 0026',
        tag: 'Studio Collective',
        name: 'Azan, Thanvi & Viren',
        focus: 'Pickle Corp Creative Studio',
        trades: 'Mutually agreed reasonable favours',
        quote: '“This marker represents a collaborative partnership with <strong>Azan &amp; Thanvi</strong>, with launch distribution by <strong>Viren</strong>. We work for mutual, reasonable favours rather than invoices. When you have an ambitious idea, we build it together.”'
      },
      azan: {
        reg: 'PC-MBR // AZAN-01',
        tag: 'Studio Co-Founder',
        name: 'Azan',
        focus: 'Pickle Corp Creative Studio',
        trades: 'Mutually agreed reasonable favours',
        quote: '“Building ambitious software and web products for students and young creators. Every project is approached with genuine craft and mutual respect.”'
      },
      thanvi: {
        reg: 'PC-MBR // THANVI-02',
        tag: 'Studio Co-Founder',
        name: 'Thanvi',
        focus: 'Pickle Corp Creative Studio',
        trades: 'Mutually agreed reasonable favours',
        quote: '“Crafting thoughtful design, interaction feel, and visual identity. Bringing ambitious creative ideas into reality through close collaboration.”'
      },
      viren: {
        reg: 'PC-MBR // VIREN-03',
        tag: 'Studio Team Member',
        name: 'Viren',
        focus: 'Pickle Corp Creative Studio',
        trades: 'Mutually agreed reasonable favours',
        quote: '“Helping student projects launch into the world and connect with real audiences. Focused on creative distribution and storytelling.”'
      }
    };

    const dispReg = document.getElementById('main-reg-id');
    const dispTag = document.getElementById('main-founder-tag');
    const dispName = document.getElementById('main-founder-name');
    const dispFocus = document.getElementById('main-founder-focus');
    const dispCovenant = document.getElementById('main-covenant-text');
    const dispTrades = document.getElementById('main-trades-list');

    document.querySelectorAll('[data-main-founder]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-main-founder');
        if (!mainProfiles[key]) return;

        document.querySelectorAll('[data-main-founder]').forEach(b => b.classList.toggle('active', b === btn));
        card3D.setAttribute('data-founder', key);

        const p = mainProfiles[key];
        if (dispReg) dispReg.textContent = p.reg;
        if (dispTag) dispTag.textContent = p.tag;
        if (dispName) dispName.textContent = p.name;
        if (dispFocus) dispFocus.textContent = p.focus;
        if (dispTrades) dispTrades.textContent = p.trades;
        if (dispCovenant) dispCovenant.innerHTML = p.quote;

        if (window.acoustic) window.acoustic.play('switch');
      });
    });
  }

  // ── Contact Form Validation & Submission Handler (Privacy-First) ─────────
  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');

  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const typeInput = document.getElementById('contact-type');
      const ideaInput = document.getElementById('contact-idea');

      let isValid = true;

      // Reset errors
      document.querySelectorAll('.field-error-msg').forEach(el => el.textContent = '');
      [nameInput, emailInput, typeInput, ideaInput].forEach(el => el && el.classList.remove('input-error'));

      if (!nameInput.value.trim()) {
        const err = document.getElementById('name-error');
        if (err) err.textContent = 'Please enter your name or nickname.';
        nameInput.classList.add('input-error');
        isValid = false;
      }

      if (!emailInput.value.trim() || !emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        const err = document.getElementById('email-error');
        if (err) err.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('input-error');
        isValid = false;
      }

      if (!typeInput.value) {
        const err = document.getElementById('type-error');
        if (err) err.textContent = 'Please select a project category.';
        typeInput.classList.add('input-error');
        isValid = false;
      }

      if (!ideaInput.value.trim() || ideaInput.value.trim().length < 10) {
        const err = document.getElementById('idea-error');
        if (err) err.textContent = 'Please tell us a bit about your idea (at least 10 characters).';
        ideaInput.classList.add('input-error');
        isValid = false;
      }

      if (!isValid) {
        if (window.acoustic) window.acoustic.play('switch');
        return;
      }

      // Safe client-side submission feedback (Zero unauthorized external network calls)
      contactFeedback.style.display = 'block';
      contactFeedback.className = 'contact-feedback-box feedback-success';
      contactFeedback.innerHTML = `
        <div class="feedback-title">✦ Project Inquiry Captured</div>
        <p class="feedback-desc">
          Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. Your inquiry has been received.
        </p>
        <p class="feedback-note">
          <strong>Guardian Oversight Notice:</strong> Inquiries are reviewed directly by the studio team with parent/guardian oversight. We review incoming messages after school hours and on weekends, and will reply directly to <em>${escapeHtml(emailInput.value.trim())}</em>.
        </p>
      `;

      if (window.acoustic) window.acoustic.play('lock');
      contactForm.reset();
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // ── Scroll Reveal Intersection Observer ──────────────────────────────────
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-revealed');
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TACTILE MAKER ATELIER: INTERACTIVE SANDBOXES, PROPS & HUD TELEMETRY
  // ═══════════════════════════════════════════════════════════════════════════

  // 1. Hero Laptop Live Terminal Simulation
  (function initHeroLaptop() {
    const laptop = document.getElementById('hero-laptop');
    if (!laptop) return;

    const logLine = document.getElementById('laptop-log-line');
    const subStatus = document.getElementById('laptop-sub-status');

    const traces = [
      { log: '[ok] 60fps canvas engine ready', status: 'studio online' },
      { log: '[ok] 4 bespoke apps (0kb bloat)', status: '100% vanilla TS' },
      { log: '[ok] pure craft • barter mode on', status: 'favors over cash' },
      { log: '[ok] Gummy physics: calibrated', status: 'after-school sprint' },
      { log: '[ok] all systems green • released', status: 'ready to trade' }
    ];

    let traceIdx = 0;

    function advanceTrace() {
      traceIdx = (traceIdx + 1) % traces.length;
      if (logLine) logLine.textContent = traces[traceIdx].log;
      if (subStatus) subStatus.textContent = traces[traceIdx].status;
      laptop.classList.add('terminal-flash');
      setTimeout(() => laptop.classList.remove('terminal-flash'), 350);
    }

    laptop.addEventListener('click', () => {
      advanceTrace();
      if (window.acoustic) window.acoustic.play('keystroke');
    });

    laptop.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advanceTrace();
        if (window.acoustic) window.acoustic.play('keystroke');
      }
    });

    // Gentle auto-tick every 4.8 seconds
    setInterval(advanceTrace, 4800);
  })();

  // 2. Interactive Chai Mug Clink & Steam
  // 2. Interactive Chai Mug Clink & Steam
  (function initChaiMug() {
    const mug = document.getElementById('hero-chai-mug');
    if (!mug) return;

    let clinkTimeout = null;
    let sipCount = 0;
    const toast = document.getElementById('mug-toast');
    const sipPhrases = [
      '☕ Sip #1: Warm cardamom chai!',
      '☕ Sip #2: Coding fuel replenished!',
      '☕ Sip #3: 3 students, 0 caffeine crashes!',
      '☕ Sip #4: Pure artisanal ginger brew!',
      '☕ Sip #5: Ready to ship pure craft!'
    ];

    mug.addEventListener('click', () => {
      if (window.acoustic) window.acoustic.play('tea');
      mug.classList.add('mug-clinked');
      clearTimeout(clinkTimeout);
      sipCount++;
      if (toast) {
        toast.textContent = sipPhrases[(sipCount - 1) % sipPhrases.length];
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
      }
      clinkTimeout = setTimeout(() => {
        mug.classList.remove('mug-clinked');
        if (toast) {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(-50%) translateY(6px)';
        }
      }, 2200);
    });

    mug.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mug.click();
      }
    });
  })();

  // 3. Vignette Props (subtle hover & click feedback)
  (function initVignetteProps() {
    const props = document.querySelectorAll('.vignette-prop[data-prop]');
    props.forEach(prop => {
      const type = prop.getAttribute('data-prop');
      const soundType = prop.getAttribute('data-sound') || 'switch';

      prop.addEventListener('click', () => {
        if (window.acoustic) window.acoustic.play(soundType);

        if (type === 'bell') {
          prop.classList.remove('bell-ringing');
          void prop.offsetWidth;
          prop.classList.add('bell-ringing');
        } else if (type === 'lamp') {
          prop.classList.toggle('lamp-lit');
        } else if (type === 'caliper') {
          prop.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
          prop.style.transform = 'scale(1.08) rotate(-6deg)';
          setTimeout(() => prop.style.transform = '', 350);
        } else if (type === 'pantone') {
          prop.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
          prop.style.transform = 'scale(1.08) rotate(6deg)';
          setTimeout(() => prop.style.transform = '', 350);
        } else if (type === 'pickle-jar') {
          prop.style.transition = 'transform 0.25s ease';
          prop.style.transform = 'scale(1.05)';
          setTimeout(() => prop.style.transform = '', 250);
        }
      });
    });

    // Auto-sync flip clock to real hours and minutes
    const flipClockHours = document.getElementById('flip-clock-hours');
    const flipClockMinutes = document.getElementById('flip-clock-minutes');
    function syncFlipClock() {
      const now = new Date();
      if (flipClockHours) flipClockHours.textContent = String(now.getHours()).padStart(2, '0');
      if (flipClockMinutes) flipClockMinutes.textContent = String(now.getMinutes()).padStart(2, '0');
    }
    syncFlipClock();
    setInterval(syncFlipClock, 1000);
  })();

  // 4. Project Card 01: Pickle Studio Interactive Sandbox
  (function initPickleStudioSandbox() {
    const toolBtns = document.querySelectorAll('.studio-tool-strip .tool-icon');
    const toolPill = document.getElementById('studio-active-tool-pill');
    const previewShape = document.getElementById('studio-preview-card');
    const swatchBtns = document.querySelectorAll('.studio-swatch-strip .swatch-dot');

    toolBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toolBtns.forEach(b => b.classList.remove('tool-active'));
        btn.classList.add('tool-active');
        const toolName = btn.getAttribute('data-tool') || 'Tool';
        if (toolPill) toolPill.textContent = `${toolName} Tool`;
        if (window.acoustic) window.acoustic.play('switch');
      });
    });

    swatchBtns.forEach(dot => {
      dot.addEventListener('click', () => {
        swatchBtns.forEach(d => d.classList.remove('is-active-swatch'));
        dot.classList.add('is-active-swatch');
        const color = dot.getAttribute('data-color');
        if (previewShape && color) {
          previewShape.style.borderColor = color;
          previewShape.style.background = `${color}22`;
        }
        if (window.acoustic) window.acoustic.play('ping-high');
      });
    });
  })();

  // 5. Project Card 02: SafeSpace Interactive Cipher Test
  (function initSafeSpaceCipher() {
    const testBtn = document.getElementById('btn-test-cipher');
    const hashHex = document.getElementById('safespace-hash-hex');
    if (!testBtn || !hashHex) return;

    testBtn.addEventListener('click', () => {
      if (window.acoustic) window.acoustic.play('lock');
      testBtn.disabled = true;
      testBtn.style.opacity = '0.6';

      let frames = 0;
      const interval = setInterval(() => {
        const randHex = '0x' + Array.from({ length: 20 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
        hashHex.textContent = randHex;
        frames++;
        if (frames > 7) {
          clearInterval(interval);
          testBtn.disabled = false;
          testBtn.style.opacity = '1';
          if (window.acoustic) window.acoustic.play('ping-high');
        }
      }, 50);
    });
  })();

  // 6. Project Card 03: Nuvio Journal Checklist
  (function initNuvioChecklist() {
    const tasks = document.querySelectorAll('.nuvio-task-item');
    const streakPill = document.getElementById('nuvio-streak-pill');

    tasks.forEach(task => {
      task.addEventListener('click', () => {
        const isChecked = task.classList.toggle('is-checked');
        task.setAttribute('aria-checked', isChecked ? 'true' : 'false');
        if (window.acoustic) window.acoustic.play('pencil');

        const allChecked = [...tasks].every(t => t.classList.contains('is-checked'));
        if (streakPill) {
          streakPill.textContent = allChecked ? '🔥 25 Day Streak!' : '🔥 24 Day Streak';
          streakPill.style.transform = 'scale(1.08)';
          setTimeout(() => streakPill.style.transform = '', 200);
        }
      });
    });
  })();

  // 7. Project Card 04: Foundu Math Tangent Scrubber
  (function initFounduTangent() {
    const track = document.getElementById('foundu-slider-track');
    const fill = document.getElementById('foundu-slider-fill');
    const thumb = document.getElementById('foundu-slider-thumb');
    const valText = document.getElementById('foundu-slider-val');
    const tangentLine = document.getElementById('foundu-tangent-line');
    const tangentPoint = document.getElementById('foundu-tangent-point');
    const coordText = document.getElementById('foundu-coord-text');

    if (!track || !fill || !thumb || !tangentLine || !tangentPoint) return;

    function updateTangent(pct) {
      pct = Math.max(0.1, Math.min(0.9, pct));
      fill.style.width = (pct * 100) + '%';
      thumb.style.left = (pct * 100) + '%';

      // Polynomial curve coordinates: x in [30, 280]
      const px = 30 + pct * 250;
      // y on curve approximation
      const normX = (pct - 0.5) * 2; // -1 to 1
      const py = 52 - normX * 34 + Math.pow(normX, 3) * 6;
      // Derivative slope
      const slope = -1.2 + 3 * Math.pow(normX, 2);

      tangentPoint.setAttribute('cx', px.toFixed(1));
      tangentPoint.setAttribute('cy', py.toFixed(1));

      // Tangent line span
      const dx = 55;
      const dy = dx * (slope * -0.4);
      tangentLine.setAttribute('x1', (px - dx).toFixed(1));
      tangentLine.setAttribute('y1', (py + dy).toFixed(1));
      tangentLine.setAttribute('x2', (px + dx).toFixed(1));
      tangentLine.setAttribute('y2', (py - dy).toFixed(1));

      if (valText) {
        valText.textContent = `slope m = ${slope >= 0 ? '+' : ''}${slope.toFixed(2)}`;
      }
      if (coordText) {
        coordText.textContent = `P(${(pct * 3).toFixed(1)}, ${(py / 20).toFixed(1)})`;
      }
    }

    let isDragging = false;
    function handlePointer(e) {
      const rect = track.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const pct = (clientX - rect.left) / rect.width;
      updateTangent(pct);
    }

    track.addEventListener('mousedown', (e) => {
      isDragging = true;
      handlePointer(e);
      if (window.acoustic) window.acoustic.play('caliper');
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) handlePointer(e);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    track.addEventListener('touchstart', (e) => {
      handlePointer(e);
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      handlePointer(e);
    }, { passive: true });
  })();

  // 8. Section 03: Propose This Trade Quick-Fill
  (function initTradeProposalPills() {
    const btns = document.querySelectorAll('.btn-favor-propose');
    const contactMsg = document.getElementById('contact-message');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const favorName = btn.getAttribute('data-favor');
        if (contactMsg && favorName) {
          contactMsg.value = `Hi Pickle Corp! I'd love to propose a trade: [${favorName}]. Let's build together!`;
        }
        if (window.acoustic) window.acoustic.play('switch');
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (contactMsg) contactMsg.focus();
          }, 600);
        }
      });
    });
  })();

  // 9. Section 05: 3D Card Live Telemetry HUD Hook
  (function init3DCardTelemetryHUD() {
    const cardScene = document.getElementById('siteCardScene');
    const hudX = document.getElementById('hud-tilt-x');
    const hudY = document.getElementById('hud-tilt-y');
    if (!cardScene || !hudX || !hudY) return;

    cardScene.addEventListener('mousemove', (e) => {
      const rect = cardScene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (-y * 30).toFixed(1);
      const ry = (x * 30).toFixed(1);
      hudX.textContent = `${rx >= 0 ? '+' : ''}${rx}°`;
      hudY.textContent = `${ry >= 0 ? '+' : ''}${ry}°`;
    });

    cardScene.addEventListener('mouseleave', () => {
      hudX.textContent = '0.0°';
      hudY.textContent = '0.0°';
    });
  })();

  // 10. Cinematic Studio Craft Intro (2.0s Handcrafted Preloader)
  (function initStudioIntro() {
    const overlay = document.getElementById('studio-intro-overlay');
    if (!overlay) return;

    // Check query param forceIntro=true or first visit in session
    const urlParams = new URLSearchParams(window.location.search);
    const forceIntro = urlParams.has('intro') || urlParams.has('v');
    if (!forceIntro && sessionStorage.getItem('pickle_intro_seen') === 'true') {
      overlay.style.display = 'none';
      return;
    }

    sessionStorage.setItem('pickle_intro_seen', 'true');
    setTimeout(() => {
      overlay.classList.add('intro-dismissed');
      setTimeout(() => overlay.remove(), 700);
    }, 2000);
  })();

  // 11. Cute Mini Gummy Mascot Custom Cursor & Click-Squish
  (function initGummyCursor() {
    const cursor = document.getElementById('gummy-cursor');
    if (!cursor) return;

    const isFine = window.matchMedia('(pointer: fine)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || isReduced) return;

    document.body.classList.add('has-gummy-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let prevX = -100;
    let tilt = 0;
    const eyesNormal = cursor.querySelector('.cur-eyes-normal');
    const eyesBlink = cursor.querySelector('.cur-eyes-blink');

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      cursor.classList.add('cursor-squished');
      if (eyesBlink && eyesNormal) {
        eyesNormal.style.display = 'none';
        eyesBlink.style.display = 'block';
      }
    });

    window.addEventListener('mouseup', () => {
      cursor.classList.remove('cursor-squished');
      if (eyesBlink && eyesNormal) {
        setTimeout(() => {
          eyesNormal.style.display = 'block';
          eyesBlink.style.display = 'none';
        }, 120);
      }
    });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, input, select, textarea, [role="button"]')) {
        cursor.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, input, select, textarea, [role="button"]')) {
        cursor.classList.remove('cursor-hover');
      }
    });

    function cursorLoop() {
      curX += (mouseX - curX) * 0.35;
      curY += (mouseY - curY) * 0.35;
      
      const dx = curX - prevX;
      prevX = curX;
      tilt += (dx * 1.2 - tilt) * 0.2;
      tilt = Math.max(-16, Math.min(16, tilt));

      cursor.style.transform = `translate(${curX.toFixed(1)}px, ${curY.toFixed(1)}px) rotate(${tilt.toFixed(1)}deg)`;
      requestAnimationFrame(cursorLoop);
    }
    requestAnimationFrame(cursorLoop);
  })();

  // 12. Living Ink Fountain Pen Founder Signatures
  (function initLivingInkSignatures() {
    const cards = document.querySelectorAll('.tactile-member-card, .site-card');
    if (!cards.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sig-animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      cards.forEach(card => observer.observe(card));
    } else {
      cards.forEach(card => card.classList.add('sig-animated'));
    }
  })();

  // 13. Multi-Palette Studio Theme Switcher (Warm / Dark / Blueprint)
  (function initThemeSwitcher() {
    const btn = document.getElementById('theme-toggle-btn');
    const label = document.getElementById('theme-label-text');
    if (!btn) return;

    const themes = [
      { id: 'warm', name: 'Warm Earth' },
      { id: 'dark', name: 'Obsidian' },
      { id: 'blueprint', name: 'Blueprint' }
    ];

    let saved = localStorage.getItem('pickle_theme') || 'warm';
    // Validate saved theme
    if (!themes.some(t => t.id === saved)) saved = 'warm';

    function applyTheme(themeId) {
      document.documentElement.setAttribute('data-theme', themeId);
      localStorage.setItem('pickle_theme', themeId);
      const match = themes.find(t => t.id === themeId);
      if (label && match) {
        label.textContent = match.name;
      }
    }

    applyTheme(saved);

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'warm';
      const currentIndex = themes.findIndex(t => t.id === current);
      const nextIndex = (currentIndex + 1) % themes.length;
      const nextTheme = themes[nextIndex];
      applyTheme(nextTheme.id);

      // Play soft click sound if audio manager exists
      if (typeof playSound === 'function') {
        playSound('click');
      }
    });
  })();

  // 14. Kodak 400TX 35mm Studio Film Negative Strip Interactive Navigation
  (function initFilmStripInteraction() {
    const frameAzan = document.getElementById('film-frame-azan');
    const frameThanvi = document.getElementById('film-frame-thanvi');
    const frameViren = document.getElementById('film-frame-viren');
    const memberCards = document.querySelectorAll('.tactile-team-grid .tactile-member-card');

    if (!frameAzan || !frameThanvi || !frameViren || memberCards.length < 3) return;

    const frames = [
      { el: frameAzan, target: memberCards[0] },
      { el: frameThanvi, target: memberCards[1] },
      { el: frameViren, target: memberCards[2] }
    ];

    frames.forEach(({ el, target }) => {
      el.addEventListener('click', () => {
        // Toggle selected outline on SVG frame
        frames.forEach(f => f.el.classList.remove('film-frame-selected'));
        el.classList.add('film-frame-selected');

        // Smooth scroll to card
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Flash target card border
        target.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
        target.style.borderColor = '#d9381e';
        target.style.boxShadow = '0 0 24px rgba(217, 56, 30, 0.35)';
        setTimeout(() => {
          target.style.borderColor = '';
          target.style.boxShadow = '';
        }, 1200);

        // Sound trigger
        if (typeof playSound === 'function') {
          playSound('shutter');
        }
      });
    });
  })();

  // Expose modal API to window
  window.openProjectPreview = openProjectPreview;
  window.setModalMode = setModalMode;
  window.closeProjectPreview = closeProjectPreview;

});


