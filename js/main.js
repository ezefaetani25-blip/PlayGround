import * as THREE from '../vendor/three.module.js';
import { createWorld, heightAt, pathX } from './world.js';
import { DreamAudio } from './audio.js';

/* ── boot ──────────────────────────────────────────────────── */

const canvas = document.getElementById('scene');
const loader = document.getElementById('loader');
const titleEl = document.getElementById('title');
const hudEl = document.getElementById('hud');
const countEl = document.getElementById('mem-count');
const pipsEl = document.getElementById('pips');
const poemEl = document.getElementById('poem');
const poemText = document.getElementById('poem-text');
const promptEl = document.getElementById('prompt');
const hintEl = document.getElementById('hint');
const toastEl = document.getElementById('toast');
const touchUI = document.getElementById('touch-ui');
const stickEl = document.getElementById('stick');
const knobEl = document.getElementById('knob');
const actEl = document.getElementById('act');
const pauseBtn = document.getElementById('pause-btn');
const pauseEl = document.getElementById('pause');
const endingEl = document.getElementById('ending');

const coarseQuery = window.matchMedia('(pointer: coarse)');
const touchCapable = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
// Phones and tablets sometimes report a fine pointer even though they are
// driven with a finger, so fall back to touch capability on narrow screens.
let coarse = coarseQuery.matches || (touchCapable && window.innerWidth < 1180);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const audio = new DreamAudio();

if (coarse) document.body.classList.add('touch');

let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !coarse,
    powerPreference: 'high-performance',
    alpha: false,
  });
} catch (err) {
  loader.innerHTML = '<div class="loader-spark">✦</div><p>this dream needs webgl</p>';
  throw err;
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.7 : 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(coarse ? 72 : 66, window.innerWidth / window.innerHeight, 0.08, 600);
camera.rotation.order = 'YXZ';

const world = createWorld(scene, { mobile: coarse });

/* ── player + game state ──────────────────────────────────── */

const START_Z = 28;
const START_X = pathX(START_Z);
const DOOR = world.door.position;
const baseYaw = Math.atan2(-(DOOR.x - START_X), -(DOOR.z - START_Z));

const state = {
  mode: 'title',
  paused: false,
  yaw: baseYaw,
  pitch: -0.035,
  pos: new THREE.Vector3(START_X, 0, START_Z),
  vel: new THREE.Vector3(),
  walkPhase: 0,
  bob: 0,
  eyeY: heightAt(START_X, START_Z) + 1.62,
  collected: 0,
  near: -1,
  nearDoor: false,
  startedAt: 0,
  lastStep: 0,
  look: { active: false, id: null, x: 0, y: 0 },
  joy: { x: 0, y: 0 },
  justLocked: false,
};

const keys = new Set();
const clock = new THREE.Clock();
let elapsed = 0;

world.colliders.push(
  { x: DOOR.x - 2.35, z: DOOR.z, r: 0.85 },
  { x: DOOR.x + 2.35, z: DOOR.z, r: 0.85 },
);

// pips
const pipEls = [];
for (let i = 0; i < 6; i++) {
  const p = document.createElement('i');
  p.className = 'pip';
  pipsEl.appendChild(p);
  pipEls.push(p);
}

camera.position.set(state.pos.x, state.eyeY, state.pos.z);
camera.rotation.set(state.pitch, state.yaw, 0);

/* ── UI helpers ───────────────────────────────────────────── */

let poemTimer = 0;
let toastTimer = 0;
let hintTimer = 0;

function showPoem(text) {
  poemText.textContent = text;
  poemEl.classList.add('show');
  window.clearTimeout(poemTimer);
  poemTimer = window.setTimeout(() => poemEl.classList.remove('show'), 10500);
}

function showToast(text, ms = 3800) {
  toastEl.textContent = text;
  toastEl.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('show'), ms);
}

function showHint(text, ms = 7000) {
  hintEl.textContent = text;
  hintEl.classList.add('show');
  window.clearTimeout(hintTimer);
  hintTimer = window.setTimeout(() => hintEl.classList.remove('show'), ms);
}

function hideHint() {
  window.clearTimeout(hintTimer);
  hintEl.classList.remove('show');
}

function updateHUD() {
  countEl.textContent = String(state.collected);
  pipEls.forEach((p, i) => p.classList.toggle('on', i < state.collected));
  if (state.collected === 6) countEl.style.color = '#ffe9c4';
}

function setNearPrompt(on) {
  promptEl.classList.toggle('on', on && !coarse);
  actEl.classList.toggle('on', on && coarse);
  promptEl.setAttribute('aria-hidden', on ? 'false' : 'true');
}

// A real finger always wins, even on devices that report a fine pointer
// (some tablets and touchscreen laptops do).
function enableTouchMode() {
  if (coarse) return;
  coarse = true;
  document.body.classList.add('touch');
  lockWanted = false;
  if (document.pointerLockElement === canvas) document.exitPointerLock();
  if (state.mode === 'playing') {
    touchUI.classList.remove('hidden');
    setNearPrompt(state.near >= 0);
  }
  camera.fov = window.innerWidth / window.innerHeight < 0.85 ? 80 : 68;
  camera.updateProjectionMatrix();
}

window.addEventListener('pointerdown', (e) => {
  if (e.pointerType === 'touch') enableTouchMode();
}, { capture: true, passive: true });

/* ── start / pause / end ──────────────────────────────────── */

let lockWanted = false;

function requestLock() {
  if (coarse) return;
  lockWanted = true;
  try {
    const p = canvas.requestPointerLock?.();
    if (p && p.catch) p.catch(() => { lockWanted = false; });
  } catch {
    lockWanted = false;
  }
}

function enterGame() {
  if (state.mode !== 'title') return;
  state.mode = 'playing';
  state.startedAt = performance.now();
  titleEl.classList.add('gone');
  hudEl.classList.remove('hidden');
  hudEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('playing');
  if (coarse) touchUI.classList.remove('hidden');
  audio.start();
  if (!coarse) requestLock();
  window.setTimeout(() => {
    if (state.mode !== 'playing') return;
    showHint(
      coarse
        ? 'Follow the firefly. Drag to look, use the left thumb to walk.'
        : 'Follow the firefly. Press E beside a light to remember.',
      8200,
    );
  }, 5200);
}

function pauseGame() {
  if (state.mode !== 'playing' || state.paused) return;
  state.paused = true;
  pauseEl.classList.remove('hidden');
  setNearPrompt(false);
  hideHint();
  if (document.pointerLockElement === canvas) document.exitPointerLock();
}

function resumeGame() {
  if (!state.paused) return;
  state.paused = false;
  pauseEl.classList.add('hidden');
  if (!coarse) requestLock();
  if (coarse) touchUI.classList.remove('hidden');
}

function finishGame() {
  if (state.mode !== 'playing') return;
  state.mode = 'ending';
  state.paused = false;
  world.setPhase(1);
  document.body.classList.add('revealed');
  hideHint();
  setNearPrompt(false);
  promptEl.classList.remove('on');
  audio.ending();
  window.setTimeout(() => endingEl.classList.remove('hidden'), 1500);
  window.setTimeout(() => {
    hudEl.classList.add('hidden');
    touchUI.classList.add('hidden');
  }, 1100);
  if (document.pointerLockElement === canvas) document.exitPointerLock();
}

/* ── input ────────────────────────────────────────────────── */

window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  keys.add(e.code);

  if (state.mode === 'title' && (e.code === 'Enter' || e.code === 'Space')) {
    e.preventDefault();
    enterGame();
    return;
  }
  if (e.code === 'KeyM') {
    audio.start();
    const muted = audio.toggleMute();
    document.body.classList.toggle('muted', muted);
    document.getElementById('sound').setAttribute('aria-label', muted ? 'Unmute sound' : 'Mute sound');
    return;
  }
  if (state.mode === 'playing' && !state.paused) {
    if (e.code === 'KeyE' || e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      tryCollect();
    }
  }
  if (e.code === 'Escape' && state.paused) resumeGame();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => {
  keys.clear();
  state.joy.x = 0; state.joy.y = 0;
});

document.addEventListener('mousemove', (e) => {
  if (state.mode !== 'playing' || state.paused) return;
  if (document.pointerLockElement === canvas) {
    applyLook(e.movementX * 0.0021, e.movementY * 0.0021);
  }
});

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (!locked && state.mode === 'playing' && !state.paused && lockWanted && !coarse) {
    // The browser releases the pointer on Esc — mirror that as a pause.
    pauseGame();
  }
  if (locked) lockWanted = true;
});

canvas.addEventListener('click', () => {
  if (state.mode === 'playing' && !state.paused && !coarse && document.pointerLockElement !== canvas) {
    requestLock();
  }
});

canvas.addEventListener('pointerdown', (e) => {
  if (state.mode !== 'playing' || state.paused) return;
  if (e.pointerType === 'touch' || (e.pointerType === 'mouse' && document.pointerLockElement !== canvas)) {
    state.look.active = true;
    state.look.id = e.pointerId;
    state.look.x = e.clientX;
    state.look.y = e.clientY;
  }
});

window.addEventListener('pointermove', (e) => {
  if (!state.look.active || e.pointerId !== state.look.id) return;
  if (state.mode !== 'playing' || state.paused) return;
  const dx = e.clientX - state.look.x;
  const dy = e.clientY - state.look.y;
  state.look.x = e.clientX;
  state.look.y = e.clientY;
  const sens = e.pointerType === 'touch' ? 0.0032 : 0.0028;
  applyLook(dx * sens, dy * sens);
});

function endLook(e) {
  if (state.look.id === e.pointerId) state.look.active = false;
}
window.addEventListener('pointerup', endLook);
window.addEventListener('pointercancel', endLook);

function applyLook(dx, dy) {
  state.yaw -= dx;
  state.pitch -= dy;
  state.pitch = Math.max(-1.28, Math.min(1.28, state.pitch));
}

// joystick
let stickId = null;
function stickPoint(e) {
  const r = stickEl.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const max = r.width * 0.34;
  let dx = e.clientX - cx;
  let dy = e.clientY - cy;
  const len = Math.hypot(dx, dy);
  if (len > max) { dx = (dx / len) * max; dy = (dy / len) * max; }
  state.joy.x = dx / max;
  state.joy.y = dy / max;
  knobEl.style.transform = `translate(${dx}px, ${dy}px)`;
}
stickEl.addEventListener('pointerdown', (e) => {
  if (state.mode !== 'playing' || state.paused) return;
  e.preventDefault();
  stickId = e.pointerId;
  try { stickEl.setPointerCapture?.(e.pointerId); } catch {}
  stickPoint(e);
});
stickEl.addEventListener('pointermove', (e) => {
  if (e.pointerId !== stickId) return;
  e.preventDefault();
  stickPoint(e);
});
function releaseStick(e) {
  if (e.pointerId !== stickId) return;
  stickId = null;
  state.joy.x = 0;
  state.joy.y = 0;
  knobEl.style.transform = 'translate(0px, 0px)';
}
stickEl.addEventListener('pointerup', releaseStick);
stickEl.addEventListener('pointercancel', releaseStick);

/* ── buttons ──────────────────────────────────────────────── */

document.getElementById('enter').addEventListener('click', enterGame);
document.getElementById('resume').addEventListener('click', resumeGame);
document.getElementById('again').addEventListener('click', () => window.location.reload());
pauseBtn.addEventListener('click', pauseGame);

actEl.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  tryCollect();
});
actEl.addEventListener('pointerdown', (e) => e.stopPropagation());

document.getElementById('sound').addEventListener('click', () => {
  audio.start();
  const muted = audio.toggleMute();
  document.body.classList.toggle('muted', muted);
  document.getElementById('sound').setAttribute('aria-label', muted ? 'Unmute sound' : 'Mute sound');
  if (!muted) showToast('sound on');
});

document.getElementById('fullscreen').addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
});

// keeping the audio context alive after backgrounding
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) audio.ctx?.resume?.();
});

/* ── collecting ───────────────────────────────────────────── */

function tryCollect() {
  if (state.mode !== 'playing' || state.paused) return;
  if (state.near < 0) return;
  const mem = world.memories[state.near];
  if (!mem || mem.collected) return;
  if (world.collect(state.near, state.pos)) {
    state.collected += 1;
    state.near = -1;
    setNearPrompt(false);
    updateHUD();
    audio.chime(state.collected - 1);
    showPoem(mem.text);
    hideHint();
    if (state.collected >= 6) {
      world.setPhase(1);
      document.body.classList.add('revealed');
      window.setTimeout(() => {
        showToast('the doorway is awake', 5200);
        audio.door();
        showHint('Return to the light between the trees.', 9000);
      }, 1500);
    } else if (state.collected === 3) {
      window.setTimeout(() => showToast('the forest grows warmer', 4200), 2400);
    }
  }
}

/* ── main loop ────────────────────────────────────────────── */

const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const wish = new THREE.Vector3();
const guideTarget = new THREE.Vector3();

let fpsFrames = 0;
let fpsTime = 0;
let degraded = false;

function updatePlayer(dt) {
  const sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');
  const speed = sprint ? 7.1 : 4.5;

  let ix = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0) + state.joy.x;
  let iy = (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0) - state.joy.y;
  const len = Math.hypot(ix, iy);
  if (len > 1) { ix /= len; iy /= len; }

  forward.set(-Math.sin(state.yaw), 0, -Math.cos(state.yaw));
  right.set(Math.cos(state.yaw), 0, -Math.sin(state.yaw));
  wish.copy(forward).multiplyScalar(iy).addScaledVector(right, ix).multiplyScalar(speed);

  const accel = 1 - Math.exp(-(len > 0.02 ? 10 : 7) * dt);
  state.vel.lerp(wish, accel);
  state.pos.x += state.vel.x * dt;
  state.pos.z += state.vel.z * dt;

  // forest colliders
  for (const c of world.colliders) {
    const dx = state.pos.x - c.x;
    const dz = state.pos.z - c.z;
    const min = c.r + 0.38;
    const d2 = dx * dx + dz * dz;
    if (d2 < min * min && d2 > 0.00001) {
      const d = Math.sqrt(d2);
      state.pos.x = c.x + (dx / d) * min;
      state.pos.z = c.z + (dz / d) * min;
    }
  }

  // the dream has an edge
  const dist = Math.hypot(state.pos.x, state.pos.z);
  if (dist > 88) {
    const k = 88 / dist;
    state.pos.x *= k;
    state.pos.z *= k;
    if (dist > 90.5 && state.mode === 'playing') showHint('The dream ends here. Turn back toward the light.', 4200);
  }

  const moving = state.vel.length() > 0.35;
  if (moving) {
    state.walkPhase += dt * (sprint ? 11 : 7.4);
    const stepDist = sprint ? 2.4 : 1.9;
    if (state.walkPhase - state.lastStep > stepDist) {
      state.lastStep = state.walkPhase;
      audio.step();
    }
  }
  const bobAmp = reducedMotion ? 0.012 : 0.038;
  const targetBob = moving ? Math.sin(state.walkPhase * 1.15) * bobAmp * Math.min(1, state.vel.length() / 4.5) : 0;
  state.bob += (targetBob - state.bob) * (1 - Math.exp(-dt * 9));

  const groundY = heightAt(state.pos.x, state.pos.z);
  const targetEye = groundY + 1.62 + state.bob;
  state.eyeY += (targetEye - state.eyeY) * (1 - Math.exp(-dt * 14));

  camera.position.set(state.pos.x, state.eyeY, state.pos.z);
  const roll = (state.joy.x * -0.012) + (ix && !coarse ? -ix * 0.006 : 0);
  camera.rotation.set(state.pitch, state.yaw, roll);
}

function updateInteractions() {
  let nearest = -1;
  let nearestD = 3.7;
  world.memories.forEach((m, i) => {
    if (m.collected) return;
    const d = Math.hypot(m.group.position.x - state.pos.x, m.group.position.z - state.pos.z);
    if (d < nearestD) { nearestD = d; nearest = i; }
  });
  state.near = nearest;
  setNearPrompt(nearest >= 0);

  const doorD = Math.hypot(DOOR.x - state.pos.x, DOOR.z - state.pos.z);
  state.nearDoor = doorD < 6;

  if (state.collected >= 6 && doorD < 5.2 && state.mode === 'playing') {
    finishGame();
  }
}

function updateGuide() {
  const px = state.pos.x, pz = state.pos.z;
  let tx, ty, tz;

  if (state.collected >= 6) {
    tx = DOOR.x; ty = DOOR.y + 3.4; tz = DOOR.z + 1.5;
  } else {
    let best = null;
    let bestD = Infinity;
    for (const m of world.memories) {
      if (m.collected) continue;
      const d = Math.hypot(m.group.position.x - px, m.group.position.z - pz);
      if (d < bestD) { bestD = d; best = m; }
    }
    if (best) {
      tx = best.group.position.x;
      ty = best.group.position.y;
      tz = best.group.position.z;
      const dx = tx - px;
      const dz = tz - pz;
      const l = Math.hypot(dx, dz) || 1;
      const reach = Math.min(3.1, bestD * 0.45);
      guideTarget.set(px + (dx / l) * reach, state.eyeY + 0.25, pz + (dz / l) * reach);
      return guideTarget;
    }
    tx = DOOR.x; ty = DOOR.y + 3.4; tz = DOOR.z + 1.5;
  }
  const dx = tx - px;
  const dz = tz - pz;
  const l = Math.hypot(dx, dz) || 1;
  guideTarget.set(px + (dx / l) * 3, state.eyeY + 0.4, pz + (dz / l) * 3);
  return guideTarget;
}

function animate() {
  requestAnimationFrame(animate);

  let dt = clock.getDelta();
  dt = Math.min(dt, 0.05);
  elapsed += dt;
  const t = elapsed;

  if (state.mode === 'title') {
    state.yaw = baseYaw + Math.sin(t * 0.11) * 0.12 + Math.sin(t * 0.043) * 0.05;
    state.pitch = -0.035 + Math.sin(t * 0.09) * 0.022;
    camera.position.set(state.pos.x + Math.sin(t * 0.07) * 0.22, state.eyeY + Math.sin(t * 0.4) * 0.03, state.pos.z);
    camera.rotation.set(state.pitch, state.yaw, 0);
  } else if (state.mode === 'playing' && !state.paused) {
    updatePlayer(dt);
    updateInteractions();
  } else if (state.mode === 'ending') {
    state.yaw += dt * 0.045;
    camera.position.set(state.pos.x, state.eyeY, state.pos.z);
    camera.rotation.set(state.pitch * 0.9, state.yaw, 0);
  }

  const target = state.mode === 'title' ? updateTitleGuide() : updateGuide();
  world.update(dt, t, camera, target);
  renderer.render(scene, camera);

  // adaptive quality, once
  fpsFrames++;
  fpsTime += dt;
  if (fpsTime > 2.5 && !degraded && state.mode === 'playing') {
    const fps = fpsFrames / fpsTime;
    if (fps < 42 && renderer.getPixelRatio() > 1) {
      renderer.setPixelRatio(Math.max(1, renderer.getPixelRatio() * 0.78));
      degraded = true;
    }
    fpsFrames = 0;
    fpsTime = 0;
  }
}

function updateTitleGuide() {
  const a = performance.now() * 0.00018;
  guideTarget.set(
    state.pos.x + Math.cos(a) * 3.4 + 1.2,
    state.eyeY + 0.9 + Math.sin(a * 2.2) * 0.2,
    state.pos.z - 3.4 + Math.sin(a) * 1.2,
  );
  return guideTarget;
}

/* ── resize ───────────────────────────────────────────────── */

function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.fov = (w / h < 0.85 && coarse) ? 80 : 68;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.7 : 2));
  renderer.setSize(w, h);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', () => window.setTimeout(onResize, 250));
onResize();

/* ── go ───────────────────────────────────────────────────── */

requestAnimationFrame(() => {
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    loader.classList.add('gone');
    window.setTimeout(() => loader.remove(), 1400);
  });
});

animate();

// exposed for automated checks / curious dreamers
window.__lucid = { scene, camera, world, state, renderer, THREE };
