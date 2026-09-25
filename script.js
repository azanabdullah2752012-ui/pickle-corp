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
    });
    mobileMenu.querySelectorAll('.mm-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('open');
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
    green: {
      fill: '#ab947e',
      stroke: '#593d3b',
      blush: '#c3a995',
      eye: '#593d3b'
    },
    blue: {
      fill: '#8a7968',
      stroke: '#593d3b',
      blush: '#c3a995',
      eye: '#593d3b'
    },
    orange: {
      fill: '#c3a995',
      stroke: '#6f5e53',
      blush: '#ab947e',
      eye: '#593d3b'
    },
    pink: {
      fill: '#c3a995',
      stroke: '#593d3b',
      blush: '#8a7968',
      eye: '#593d3b'
    },
    purple: {
      fill: '#6f5e53',
      stroke: '#593d3b',
      blush: '#c3a995',
      eye: '#ffffff'
    },
    yellow: {
      fill: '#ab947e',
      stroke: '#6f5e53',
      blush: '#c3a995',
      eye: '#593d3b'
    },
    cyan: {
      fill: '#8a7968',
      stroke: '#6f5e53',
      blush: '#c3a995',
      eye: '#593d3b'
    }
  };

  const THEME_KEYS = Object.keys(COLOR_THEMES);

  function resolveTheme(color) {
    if (COLOR_THEMES[color]) return COLOR_THEMES[color];
    const c = String(color).toLowerCase();
    if (c.includes('7b94f8') || c.includes('blue'))   return COLOR_THEMES.blue;
    if (c.includes('f4a55a') || c.includes('orange')) return COLOR_THEMES.orange;
    if (c.includes('f08070') || c.includes('pink') || c.includes('red')) return COLOR_THEMES.pink;
    if (c.includes('a98de8') || c.includes('purple')) return COLOR_THEMES.purple;
    if (c.includes('yellow') || c.includes('lemon'))  return COLOR_THEMES.yellow;
    if (c.includes('cyan')   || c.includes('aqua'))   return COLOR_THEMES.cyan;
    return COLOR_THEMES.green;
  }

  let gummyCounter = 0;

  function createGummyDOM(color) {
    const theme = resolveTheme(color);
    const id = `g-${++gummyCounter}`;
    const ns = 'http://www.w3.org/2000/svg';

    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.overflow = 'visible';
    svg.style.display = 'block';

    svg.innerHTML = `
      <defs>
        <!-- Soft Ground Shadow -->
        <radialGradient id="${id}-sh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.32" />
          <stop offset="60%" stop-color="#000000" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Soft ground contact shadow -->
      <ellipse class="gummy-shadow" cx="50" cy="88" rx="28" ry="4.5" fill="url(#${id}-sh)" />

      <!-- Body motion container -->
      <g class="gummy-body-group" style="transform-origin: 50px 80px;">
        <!-- Flat Gumdrop Body (smooth wide dome, gentle slope to broad rounded base) -->
        <path class="gummy-body-shape"
              d="M 28,78 
                 C 20,78 18,65 24,42 
                 C 28,26 38,16 50,16 
                 C 62,16 72,26 76,42 
                 C 82,65 80,78 72,78 
                 C 64,80 36,80 28,78 Z"
              fill="${theme.fill}"
              stroke="${theme.stroke}"
              stroke-width="3"
              stroke-linejoin="round"
              stroke-linecap="round" />

        <!-- Cute horizontal oval blush cheeks -->
        <ellipse cx="36" cy="50" rx="4" ry="2.2" fill="${theme.blush}" opacity="0.88" />
        <ellipse cx="64" cy="50" rx="4" ry="2.2" fill="${theme.blush}" opacity="0.88" />

        <!-- Open Eyes Container (for cursor tracking) -->
        <g class="gummy-eyes-group">
          <!-- Left Eye: Cute black bead with top-left sparkle -->
          <g class="gummy-eye-left">
            <circle cx="43" cy="44" r="3.8" fill="${theme.eye}" />
            <circle cx="41.8" cy="42.6" r="1.3" fill="#ffffff" />
          </g>

          <!-- Right Eye: Cute black bead with top-left sparkle -->
          <g class="gummy-eye-right">
            <circle cx="57" cy="44" r="3.8" fill="${theme.eye}" />
            <circle cx="55.8" cy="42.6" r="1.3" fill="#ffffff" />
          </g>
        </g>

        <!-- Closed Eyes for Happy Blink: ⌒  ⌒ -->
        <g class="gummy-eyes-blink" style="opacity: 0; pointer-events: none;">
          <path d="M 39.5,45.5 Q 43,42 46.5,45.5" fill="none" stroke="${theme.eye}" stroke-width="2.2" stroke-linecap="round" />
          <path d="M 53.5,45.5 Q 57,42 60.5,45.5" fill="none" stroke="${theme.eye}" stroke-width="2.2" stroke-linecap="round" />
        </g>

        <!-- Sweet Smile -->
        <path class="gummy-mouth"
              d="M 47.8,48.5 Q 50,51 52.2,48.5"
              fill="none"
              stroke="${theme.eye}"
              stroke-width="1.8"
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

      this.bindInteractions();
      this.rafId = requestAnimationFrame((t) => this.tick(t));
    }

    bindInteractions() {
      // Hover: cheerful high hop
      this.container.addEventListener('mouseenter', () => {
        this.hop(36, 520);
      });

      // Click: squish and launch! Rapid clicks trigger SUPER JUMP!
      this.container.addEventListener('click', (e) => {
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

    superJump(height = 98, duration = 820) {
      if (this.isHopping) return;
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
      if (this.isHopping) return;
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
      this.eyesGroup.style.opacity = '0';
      this.eyesBlink.style.opacity = '1';
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
        this.eyesGroup.style.opacity = '1';
        this.eyesBlink.style.opacity = '0';
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

      // 3. Hopping physics (high leap with springy squash & stretch)
      if (this.isHopping) {
        const elapsed = time - this.hopStartTime;
        const progress = Math.min(1, elapsed / this.hopDuration);
        const arc = Math.sin(progress * Math.PI);

        this.targetTranslateY = -arc * this.hopHeight;

        if (this.isSuperJumping) {
          // 🚀 SUPER JUMP: Rocket stretch + acrobatic aerial spin!
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
            this.shadow.style.transformOrigin = '50px 88px';
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
            this.shadow.style.transformOrigin = '50px 88px';
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
      this.scaleX += (this.targetScaleX - this.scaleX) * 0.2;
      this.scaleY += (this.targetScaleY - this.scaleY) * 0.2;
      this.translateY += (this.targetTranslateY - this.translateY) * 0.25;

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
  const heroGummy = mount('gummy-hero', 'green');

  // Hero greeting hop
  if (heroGummy) {
    setTimeout(() => {
      heroGummy.hop(48, 620);
    }, 400);
  }

  // Cursor tracking for hero gumdrop
  window.addEventListener('pointermove', (e) => {
    if (heroGummy) heroGummy.trackCursor(e.clientX, e.clientY);
  }, { passive: true });



  // ═══════════════════════════════════════════════════════════════════════════
  // KINETIC INTERACTIVE TYPOGRAPHY (P I C K L E)
  // ═══════════════════════════════════════════════════════════════════════════
  const chars = document.querySelectorAll('.kinetic-letters .k-char');
  chars.forEach((char, idx) => {
    char.addEventListener('mouseenter', () => {
      if (chars[idx - 1]) chars[idx - 1].style.transform = 'translateY(-4px)';
      if (chars[idx + 1]) chars[idx + 1].style.transform = 'translateY(-4px)';
    });
    char.addEventListener('mouseleave', () => {
      if (chars[idx - 1]) chars[idx - 1].style.transform = '';
      if (chars[idx + 1]) chars[idx + 1].style.transform = '';
    });
    char.addEventListener('click', () => {
      char.style.transform = 'translateY(-20px) scale(1.15) rotate(4deg)';
      setTimeout(() => {
        char.style.transform = '';
      }, 300);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // NATIVE WEB AUDIO MICRO-ACOUSTIC SYNTHESIZER (Linear / Teenage Engineering)
  // ═══════════════════════════════════════════════════════════════════════════
  class AcousticEngine {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('pickle_sound_enabled') !== 'false';
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
        const icon = toggle.querySelector('.snd-icon');
        if (label) label.textContent = this.enabled ? 'SND: ON' : 'SND: OFF';
        if (icon) icon.textContent = this.enabled ? '🔊' : '🔈';
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
      }
    }
  }

  const sound = new AcousticEngine();

  // Attach sound triggers to elements with data-sound
  document.querySelectorAll('[data-sound]').forEach(el => {
    el.addEventListener('click', () => {
      const snd = el.getAttribute('data-sound');
      if (snd) sound.play(snd);
    });
  });

  // Attach hop sound to gummy interactions
  const gummyEl = document.getElementById('gummy-hero');
  if (gummyEl) {
    gummyEl.addEventListener('click', () => {
      sound.play('gummy-hop');
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

});


