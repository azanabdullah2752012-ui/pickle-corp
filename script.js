/**
 * Pickle Corp™ — script.js
 * Editorial Luxury Autumn Atelier Architecture
 * Features: 2.0s Preloader, Flagship Vector Canvas, Living Gummy Mascot,
 * Interactive App Sandboxes (Cipher, Tangent Scrub, Sound Wave), and Smooth Navigation.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Handcrafted 2.0-Second Preloader Seal ──────────────────────────────
  const preloader = document.getElementById('studio-intro-overlay');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('intro-faded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    }, 2000);
  }

  // ── 2. Scroll Progress & Sticky Nav Shadow ────────────────────────────────
  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('scrolled', scrollY > 25);
    if (progressBar) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });

  // ── 3. Mobile Menu Toggle ─────────────────────────────────────────────────
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

  // ── 4. Web Audio Synthesizer (Acoustic Ambient Tones) ─────────────────────
  let audioCtx = null;
  let soundEnabled = false;
  const soundToggle = document.getElementById('soundToggle');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq = 440, type = 'sine', duration = 0.08, gainVal = 0.04) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      soundToggle.classList.toggle('sound-active', soundEnabled);
      soundToggle.title = soundEnabled ? 'Sound: On' : 'Sound: Off';
      const label = soundToggle.querySelector('.sound-label');
      if (label) label.textContent = soundEnabled ? 'Sound On' : 'Sound';
      if (soundEnabled) playTone(587.33, 'triangle', 0.15, 0.06); // D5 chime
    });
  }

  // Add subtle acoustic tone to primary buttons
  document.querySelectorAll('.btn-editorial-primary, .btn-editorial-secondary, .item-launch-btn, .dispatch-submit-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => playTone(329.63, 'sine', 0.04, 0.02));
    btn.addEventListener('click', () => playTone(523.25, 'triangle', 0.1, 0.05));
  });

  // ── 5. Living Gummy Mascot (Flagship Interactive SVG) ──────────────────────
  const gummyHero = document.getElementById('gummy-hero');
  if (gummyHero) {
    gummyHero.innerHTML = `
      <svg viewBox="0 0 110 52" width="96" height="46" style="overflow: visible;" aria-hidden="true">
        <defs>
          <radialGradient id="gh-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#2e1606" stop-opacity="0.22" />
            <stop offset="100%" stop-color="#2e1606" stop-opacity="0" />
          </radialGradient>
        </defs>
        <!-- Shadow -->
        <ellipse cx="55" cy="48" rx="46" ry="4" fill="url(#gh-shadow)" />
        <!-- Gumdrop Body -->
        <path id="gh-body" d="M 12,46 C 7,46 5,39 7,31 C 11,19 24,8 39,4.5 C 45,3 54,3 60,4.5 C 75,8 88,19 92,31 C 94,39 92,46 87,46 Z"
              fill="#ab947e" stroke="#4a2e2c" stroke-width="2.8" stroke-linecap="round" />
        <!-- Rosy Cheeks -->
        <ellipse cx="26" cy="34" rx="4.8" ry="2.4" fill="#c0a692" opacity="0.8" />
        <ellipse cx="73" cy="34" rx="4.8" ry="2.4" fill="#c0a692" opacity="0.8" />
        <!-- Eyes with Tracking Glints -->
        <circle id="gh-eye-l" cx="42" cy="24" r="3.2" fill="#1e130a" />
        <circle id="gh-glint-l" cx="41" cy="22.8" r="1.1" fill="#ffffff" />
        <circle id="gh-eye-r" cx="57" cy="24" r="3.2" fill="#1e130a" />
        <circle id="gh-glint-r" cx="56" cy="22.8" r="1.1" fill="#ffffff" />
        <!-- Sweet Smile -->
        <path d="M 47,26 Q 49.5,28.2 52,26" fill="none" stroke="#1e130a" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    `;

    // Interactive squish on click
    gummyHero.addEventListener('click', () => {
      playTone(659.25, 'triangle', 0.12, 0.08); // E5
      gummyHero.animate([
        { transform: 'scale(1.2, 0.75)' },
        { transform: 'scale(0.88, 1.18)' },
        { transform: 'scale(1.05, 0.95)' },
        { transform: 'scale(1, 1)' }
      ], { duration: 420, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
    });

    // Eye tracking towards mouse
    window.addEventListener('mousemove', (e) => {
      const rect = gummyHero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const dist = Math.min(2.5, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 60);

      const eyeL = document.getElementById('gh-eye-l');
      const eyeR = document.getElementById('gh-eye-r');
      const glintL = document.getElementById('gh-glint-l');
      const glintR = document.getElementById('gh-glint-r');

      if (eyeL && eyeR) {
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        eyeL.setAttribute('cx', `${42 + dx}`);
        eyeL.setAttribute('cy', `${24 + dy}`);
        eyeR.setAttribute('cx', `${57 + dx}`);
        eyeR.setAttribute('cy', `${24 + dy}`);
        if (glintL && glintR) {
          glintL.setAttribute('cx', `${41 + dx}`);
          glintL.setAttribute('cy', `${22.8 + dy}`);
          glintR.setAttribute('cx', `${56 + dx}`);
          glintR.setAttribute('cy', `${22.8 + dy}`);
        }
      }
    }, { passive: true });
  }

  // ── 6. Flagship Hero Canvas (Interactive Vector Sandbox) ───────────────────
  const canvas = document.getElementById('hero-flagship-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let currentColor = '#2e1606';
    let isDrawing = false;

    // Handle high-DPI retina display
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      renderDefaultArt();
    }

    function renderDefaultArt() {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw subtle warm coordinate grid
      ctx.strokeStyle = 'rgba(60, 32, 10, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 20; x < rect.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      for (let y = 20; y < rect.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      // Draw elegant editorial baseline artwork
      ctx.strokeStyle = '#d94e34';
      ctx.lineWidth = 2.4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(50, rect.height / 2 + 20);
      ctx.bezierCurveTo(rect.width * 0.35, rect.height / 2 - 50, rect.width * 0.65, rect.height / 2 + 70, rect.width - 60, rect.height / 2 - 20);
      ctx.stroke();

      // Soft circular node
      ctx.fillStyle = 'rgba(61, 74, 45, 0.15)';
      ctx.strokeStyle = '#3d4a2d';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(rect.width * 0.35, rect.height / 2 - 25, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Label
      ctx.fillStyle = '#1e130a';
      ctx.font = "bold 11px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("60 FPS Native Vector", rect.width * 0.35 - 55, rect.height / 2 - 58);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Brush drawing events
    function getCanvasCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    }

    function startDraw(e) {
      isDrawing = true;
      const pos = getCanvasCoords(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      playTone(440, 'sine', 0.03, 0.015);
    }

    function draw(e) {
      if (!isDrawing) return;
      const pos = getCanvasCoords(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }

    function endDraw() {
      isDrawing = false;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', endDraw);

    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDraw(e); }, { passive: false });
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); }, { passive: false });
    window.addEventListener('touchend', endDraw);

    // Swatches selection
    document.querySelectorAll('.hero-canvas-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        document.querySelectorAll('.hero-canvas-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        currentColor = swatch.getAttribute('data-color') || '#2e1606';
        playTone(520, 'sine', 0.05, 0.02);
      });
    });

    // Clear canvas
    const clearBtn = document.getElementById('hero-canvas-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        renderDefaultArt();
        playTone(300, 'triangle', 0.08, 0.04);
      });
    }
  }

  // ── 7. SafeSpace Interactive AES-256 Cipher Test ──────────────────────────
  const cipherBtn = document.getElementById('btn-test-cipher');
  const cipherTxt = document.getElementById('crypto-live-txt');
  if (cipherBtn && cipherTxt) {
    let encrypted = false;
    cipherBtn.addEventListener('click', () => {
      playTone(587.33, 'square', 0.06, 0.03);
      if (!encrypted) {
        cipherTxt.textContent = "0x7f4b82d90a1e3f88c52b (AES-GCM)";
        cipherTxt.style.color = "#d94e34";
        cipherBtn.textContent = "Decrypt 🔓";
        encrypted = true;
      } else {
        cipherTxt.textContent = '"Client-side encrypted payload"';
        cipherTxt.style.color = "#1e130a";
        cipherBtn.textContent = "Test Cipher ⚡";
        encrypted = false;
      }
    });
  }

  // ── 8. Foundu Math SVG Tangent Scrub Slider ───────────────────────────────
  const scrubInput = document.getElementById('math-scrub-input');
  const tangentLine = document.getElementById('math-tangent-line');
  const tangentPt = document.getElementById('math-tangent-pt');

  if (scrubInput && tangentLine && tangentPt) {
    scrubInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      // Parabolic model: y = 0.005 * (x - 110)^2 + 45
      const y = 0.004 * Math.pow(val - 110, 2) + 40;
      tangentPt.setAttribute('cx', `${val}`);
      tangentPt.setAttribute('cy', `${y}`);

      // Slope derivative: dy/dx = 0.008 * (val - 110)
      const slope = 0.008 * (val - 110);
      const dx = 40;
      const dy = slope * dx;
      tangentLine.setAttribute('x1', `${val - dx}`);
      tangentLine.setAttribute('y1', `${y - dy}`);
      tangentLine.setAttribute('x2', `${val + dx}`);
      tangentLine.setAttribute('y2', `${y + dy}`);
    });
  }

  // ── 9. Direct Dispatch Form Handler ───────────────────────────────────────
  const dispatchForm = document.getElementById('dispatch-form');
  const dispatchStatus = document.getElementById('dispatch-status');

  if (dispatchForm && dispatchStatus) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playTone(523.25, 'triangle', 0.2, 0.06);
      dispatchStatus.className = 'dispatch-status success';
      dispatchStatus.textContent = "✦ Inbound dispatch received! We'll review your trade proposal after homework.";
      dispatchForm.reset();
    });
  }

});
