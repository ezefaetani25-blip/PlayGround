import {
  BASE_JUMP,
  COIN_TOTAL,
  FLAG_BASE_Y,
  FLAG_X,
  GRAVITY,
  JUMP_PER_COIN,
  MAX_FALL,
  MAX_SPEED,
  PLAYER_H,
  PLAYER_W,
  TAU,
  WORLD,
  clamp,
  damp,
  lerp,
} from './js/constants.js';
import { buildLevel } from './js/level.js';
import { AudioEngine } from './js/audio.js';
import {
  drawBush,
  drawCastle,
  drawCheckpoint,
  drawCoin,
  drawFlag,
  drawFlower,
  drawGoomba,
  drawGround,
  drawIsland,
  drawMario,
  drawParallax,
  drawPipe,
  drawSign,
  drawSky,
  drawVignette,
} from './js/art.js';

// ------------------------------------------------------------------- elements

const $ = (id) => document.getElementById(id);
const ui = {
  stage: $('stage'),
  canvas: $('game'),
  start: $('start-screen'),
  pause: $('pause-screen'),
  win: $('win-screen'),
  play: $('play-btn'),
  resume: $('resume-btn'),
  restart: $('restart-btn'),
  replay: $('replay-btn'),
  pauseBtn: $('btn-pause'),
  soundBtn: $('btn-sound'),
  fullscreenBtn: $('btn-fullscreen'),
  coinCount: $('coin-count'),
  coinTotal: document.querySelector('.coin-total'),
  jumpPower: $('jump-power'),
  jumpFill: $('jump-fill'),
  jumpChip: $('jump-chip'),
  progressFill: $('progress-fill'),
  tiltBadge: $('tilt-badge'),
  tiltToggle: $('tilt-toggle'),
  tiltCaption: $('tilt-caption'),
  menuSoundToggle: $('menu-sound-toggle'),
  pauseTiltBtn: $('pause-tilt-btn'),
  pauseSoundBtn: $('pause-sound-btn'),
  pausePower: $('pause-power'),
  toast: $('toast'),
  bestPill: $('best-pill'),
  bestTime: $('best-time'),
  winCoins: $('win-coins'),
  winPower: $('win-power'),
  winTime: $('win-time'),
  winBest: $('win-best'),
  btnLeft: $('btn-left'),
  btnRight: $('btn-right'),
  btnJump: $('btn-jump'),
};

const ctx = ui.canvas.getContext('2d', { alpha: false });
const audio = new AudioEngine();

const STEP = 1 / 120;
const input = {
  left: false,
  right: false,
  jumpHeld: false,
  jumpBuffer: 0,
  axis: 0,
};

let W = 1;
let H = 1;
let DPR = 1;
let scale = 1;
let viewW = 1000;
let viewH = 700;

let mode = 'menu';
let level = null;
let player = null;
let coins = 0;
let runTime = 0;
let gameTime = 0;
let spawnPoint = { x: 176, y: 1432 };
let checkpointIndex = -1;
let flagRaise = 0;
let winTimer = null;
let bestTime = 0;
let toastTimer = null;
let tiltWatchTimer = null;
let tiltEnabled = false;
let tiltBase = null;
let tiltAxis = 0;
let starting = false;
let hideStartOnRender = false;
let last = performance.now();
let accumulator = 0;

const cam = { x: 300, y: 1360 };
let shake = 0;
let shakeX = 0;
let shakeY = 0;
let dustClock = 0;
let hudCoins = -1;
let hudPower = '';
let particles = [];
let floaters = [];

// -------------------------------------------------------------------- helpers

function powerValue() {
  const v = BASE_JUMP + coins * JUMP_PER_COIN;
  return (v * v) / (BASE_JUMP * BASE_JUMP);
}

function powerLabel() {
  return `${powerValue().toFixed(2)}×`;
}

function haptic(ms) {
  if (navigator.vibrate) {
    try {
      navigator.vibrate(ms);
    } catch {
      // ignore
    }
  }
}

function formatTime(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function loadBest() {
  try {
    const value = Number(localStorage.getItem('coinClimbBest') || 0);
    bestTime = Number.isFinite(value) ? value : 0;
  } catch {
    bestTime = 0;
  }
  if (bestTime > 0) {
    ui.bestPill.hidden = false;
    ui.bestTime.textContent = formatTime(bestTime);
  }
}

function saveBest() {
  if (!bestTime || runTime < bestTime) {
    bestTime = runTime;
    try {
      localStorage.setItem('coinClimbBest', String(bestTime));
    } catch {
      // ignore
    }
    ui.bestPill.hidden = false;
    ui.bestTime.textContent = formatTime(bestTime);
    return true;
  }
  return false;
}

function showToast(text, duration = 1900) {
  if (!text) return;
  ui.toast.textContent = text;
  ui.toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    ui.toast.classList.remove('show');
    toastTimer = null;
  }, duration);
}

function setBodyMode(next) {
  document.body.classList.toggle('is-menu', next === 'menu');
  document.body.classList.toggle('is-playing', next === 'playing');
  document.body.classList.toggle('is-paused', next === 'paused');
  document.body.classList.toggle('is-won', next === 'won');
}

// --------------------------------------------------------------------- resize

function resize() {
  W = Math.max(320, window.innerWidth);
  H = Math.max(420, window.innerHeight);
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  ui.canvas.width = Math.round(W * DPR);
  ui.canvas.height = Math.round(H * DPR);
  ui.canvas.style.width = `${W}px`;
  ui.canvas.style.height = `${H}px`;
  scale = clamp(Math.min(W / 420, H / 680), 0.72, 2.1);
  viewW = W / scale;
  viewH = H / scale;
  clampCamera();
}

function clampCamera() {
  if (!Number.isFinite(cam.x) || !Number.isFinite(cam.y)) {
    cam.x = 300;
    cam.y = 1360;
  }
  if (viewW >= WORLD.w) cam.x = WORLD.w / 2;
  else cam.x = clamp(cam.x, viewW / 2, WORLD.w - viewW / 2);
  if (viewH >= WORLD.h) cam.y = WORLD.h / 2;
  else cam.y = clamp(cam.y, viewH / 2, WORLD.h - viewH / 2);
}

function snapCamera() {
  cam.x = 300;
  cam.y = 1360;
  clampCamera();
}

// ---------------------------------------------------------------------- setup

function makePlayer() {
  return {
    x: 176,
    y: WORLD.ground - PLAYER_H,
    w: PLAYER_W,
    h: PLAYER_H,
    vx: 0,
    vy: 0,
    facing: 1,
    grounded: true,
    coyote: 0.1,
    jumpBuffer: 0,
    runPhase: 0,
    squash: 0,
    invuln: 0,
    stun: 0,
    prevBottom: WORLD.ground,
    victory: false,
  };
}

function resetGame() {
  level = buildLevel();
  player = makePlayer();
  coins = 0;
  runTime = 0;
  flagRaise = 0;
  checkpointIndex = -1;
  spawnPoint = { x: level.spawn.x, y: level.spawn.y };
  particles = [];
  floaters = [];
  dustClock = 0;
  shake = 0;
  accumulator = 0;
  hudCoins = -1;
  hudPower = '';
  input.left = false;
  input.right = false;
  input.jumpHeld = false;
  input.jumpBuffer = 0;
  if (mode === 'menu') {
    cam.x = 300;
    cam.y = 1360;
  } else {
    cam.x = player.x + 120;
    cam.y = player.y - 60;
  }
  clampCamera();
  updateHUD(true);
}

function beginGame() {
  if (starting) return;
  starting = true;
  try {
    audio.ensure();
    resetGame();
    mode = 'playing';
    setBodyMode('playing');
    // Keep the start screen up until the first game frame is painted, so slow
    // devices never flash an empty canvas during the hand-off.
    hideStartOnRender = true;
    ui.pause.hidden = true;
    ui.win.hidden = true;
    if (winTimer) {
      clearTimeout(winTimer);
      winTimer = null;
    }
    updateTiltUI();
    updateHUD(true);
    last = performance.now();
    audio.startMusic();
    showToast('Every coin makes you jump higher!', 2100);
  } finally {
    starting = false;
  }
}

function restartGame() {
  if (winTimer) {
    clearTimeout(winTimer);
    winTimer = null;
  }
  audio.ensure();
  resetGame();
  mode = 'playing';
  setBodyMode('playing');
  ui.start.hidden = true;
  ui.pause.hidden = true;
  ui.win.hidden = true;
  updateTiltUI();
  updateHUD(true);
  last = performance.now();
  audio.startMusic();
  showToast('Fresh course. Collect every coin!', 1600);
}

function pauseGame() {
  if (mode !== 'playing') return;
  mode = 'paused';
  setBodyMode('paused');
  input.left = false;
  input.right = false;
  input.jumpHeld = false;
  input.jumpBuffer = 0;
  audio.stopMusic();
  ui.pause.hidden = false;
  ui.pausePower.textContent = powerLabel();
  updateTiltUI();
  updateSoundUI();
}

function resumeGame() {
  if (mode !== 'paused') return;
  mode = 'playing';
  setBodyMode('playing');
  ui.pause.hidden = true;
  input.left = false;
  input.right = false;
  input.jumpHeld = false;
  input.jumpBuffer = 0;
  last = performance.now();
  accumulator = 0;
  audio.startMusic();
}

function togglePause() {
  if (mode === 'playing') pauseGame();
  else if (mode === 'paused') resumeGame();
}

function triggerWin() {
  if (mode !== 'playing') return;
  mode = 'won';
  player.victory = true;
  player.vx = 0;
  player.vy = 0;
  setBodyMode('won');
  audio.stopMusic();
  audio.win();
  haptic([25, 50, 25, 50, 80]);
  shake = 6;
  spawnConfetti();
  ui.winCoins.textContent = `${coins} / ${COIN_TOTAL}`;
  ui.winPower.textContent = powerLabel();
  ui.winTime.textContent = formatTime(runTime);
  const newBest = saveBest();
  ui.winBest.textContent = newBest ? 'NEW BEST TIME!' : `BEST ${formatTime(bestTime)}`;
  if (winTimer) clearTimeout(winTimer);
  winTimer = setTimeout(() => {
    ui.win.hidden = false;
    winTimer = null;
  }, 1250);
}

function replay() {
  if (winTimer) {
    clearTimeout(winTimer);
    winTimer = null;
  }
  ui.win.hidden = true;
  restartGame();
}

// --------------------------------------------------------------------- motion

const motionAvailable = typeof window.DeviceOrientationEvent !== 'undefined';

function updateTiltUI() {
  ui.tiltToggle.setAttribute('aria-pressed', String(tiltEnabled));
  ui.pauseTiltBtn.setAttribute('aria-pressed', String(tiltEnabled));
  ui.tiltCaption.textContent = tiltEnabled
    ? 'motion steering is on'
    : motionAvailable
      ? 'optional motion steering'
      : 'not available on this device';
  ui.tiltBadge.hidden = !tiltEnabled;
  if (!motionAvailable) {
    ui.tiltToggle.disabled = true;
    ui.pauseTiltBtn.disabled = true;
  }
}

function handleTilt(event) {
  if (!tiltEnabled) return;
  const angle = Math.abs(Number(screen.orientation?.angle ?? window.orientation ?? 0)) % 180;
  const raw = angle === 90 ? event.beta : event.gamma;
  if (raw === null || raw === undefined || Number.isNaN(raw)) return;
  if (tiltBase === null) {
    tiltBase = raw;
    if (tiltWatchTimer) {
      clearTimeout(tiltWatchTimer);
      tiltWatchTimer = null;
    }
  }
  let delta = raw - tiltBase;
  if (Math.abs(delta) < 3.4) delta = 0;
  tiltAxis = clamp(delta / 21, -1, 1);
}

async function enableTilt(notify = true) {
  if (!motionAvailable) {
    showToast('Tilt is not available on this device.');
    return false;
  }
  try {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== 'granted') {
        showToast('Motion access was not granted. Touch controls still work.');
        return false;
      }
    }
  } catch {
    showToast('Motion access was not granted. Touch controls still work.');
    return false;
  }

  window.addEventListener('deviceorientation', handleTilt, true);
  tiltEnabled = true;
  tiltBase = null;
  tiltAxis = 0;
  updateTiltUI();
  if (notify) showToast('Tilt controls on — hold your device naturally.', 2200);
  if (tiltWatchTimer) clearTimeout(tiltWatchTimer);
  tiltWatchTimer = setTimeout(() => {
    if (tiltEnabled && tiltBase === null) {
      showToast('No tilt data yet — touch controls still work.');
    }
    tiltWatchTimer = null;
  }, 2000);
  return true;
}

function disableTilt() {
  window.removeEventListener('deviceorientation', handleTilt, true);
  tiltEnabled = false;
  tiltBase = null;
  tiltAxis = 0;
  if (tiltWatchTimer) {
    clearTimeout(tiltWatchTimer);
    tiltWatchTimer = null;
  }
  updateTiltUI();
  showToast('Tilt controls off.');
}

async function toggleTilt() {
  if (tiltEnabled) disableTilt();
  else await enableTilt(true);
}

function updateSoundUI() {
  const on = audio.enabled;
  document.body.classList.toggle('sound-off', !on);
  ui.menuSoundToggle.setAttribute('aria-pressed', String(on));
  ui.pauseSoundBtn.setAttribute('aria-pressed', String(on));
  ui.pauseSoundBtn.textContent = on ? 'Sound on' : 'Sound off';
  ui.soundBtn.setAttribute('aria-label', on ? 'Mute sound' : 'Unmute sound');
}

function setSound(on) {
  audio.setEnabled(on);
  if (on && mode === 'playing') audio.startMusic();
  updateSoundUI();
}

// ---------------------------------------------------------------------- input

function queueJump() {
  input.jumpBuffer = 0.13;
}

function releaseInputs() {
  input.left = false;
  input.right = false;
  input.jumpHeld = false;
  ui.btnLeft.classList.remove('active');
  ui.btnRight.classList.remove('active');
  ui.btnJump.classList.remove('active');
}

function bindHold(element, down, up) {
  const press = (event) => {
    event.preventDefault();
    element.setPointerCapture?.(event.pointerId);
    element.classList.add('active');
    down();
  };
  const release = (event) => {
    event.preventDefault();
    element.classList.remove('active');
    up();
  };
  element.addEventListener('pointerdown', press);
  element.addEventListener('pointerup', release);
  element.addEventListener('pointercancel', release);
  element.addEventListener('lostpointercapture', () => {
    element.classList.remove('active');
    up();
  });
  element.addEventListener('contextmenu', (event) => event.preventDefault());
}

function setupInput() {
  bindHold(
    ui.btnLeft,
    () => {
      input.left = true;
      haptic(5);
    },
    () => {
      input.left = false;
    },
  );
  bindHold(
    ui.btnRight,
    () => {
      input.right = true;
      haptic(5);
    },
    () => {
      input.right = false;
    },
  );
  bindHold(
    ui.btnJump,
    () => {
      input.jumpHeld = true;
      queueJump();
      haptic(8);
    },
    () => {
      input.jumpHeld = false;
    },
  );

  window.addEventListener('keydown', (event) => {
    const code = event.code;
    if (code === 'ArrowLeft' || code === 'KeyA') {
      input.left = true;
      event.preventDefault();
    } else if (code === 'ArrowRight' || code === 'KeyD') {
      input.right = true;
      event.preventDefault();
    } else if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') {
      if (!event.repeat) queueJump();
      input.jumpHeld = true;
      event.preventDefault();
    } else if (code === 'Escape' || code === 'KeyP') {
      if (mode === 'playing' || mode === 'paused') {
        togglePause();
        event.preventDefault();
      }
    } else if (code === 'Enter') {
      if (mode === 'menu') {
        beginGame();
        event.preventDefault();
      } else if (mode === 'won' && !ui.win.hidden) {
        replay();
        event.preventDefault();
      } else if (mode === 'paused') {
        resumeGame();
        event.preventDefault();
      }
    }
  });

  window.addEventListener('keyup', (event) => {
    const code = event.code;
    if (code === 'ArrowLeft' || code === 'KeyA') input.left = false;
    if (code === 'ArrowRight' || code === 'KeyD') input.right = false;
    if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') input.jumpHeld = false;
  });

  window.addEventListener('blur', releaseInputs);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && mode === 'playing') pauseGame();
  });

  ui.play.addEventListener('click', beginGame);
  ui.resume.addEventListener('click', resumeGame);
  ui.restart.addEventListener('click', restartGame);
  ui.replay.addEventListener('click', replay);
  ui.pauseBtn.addEventListener('click', togglePause);
  ui.soundBtn.addEventListener('click', () => {
    audio.ensure();
    setSound(!audio.enabled);
    audio.click();
  });
  ui.menuSoundToggle.addEventListener('click', () => {
    audio.ensure();
    setSound(!audio.enabled);
    audio.click();
  });
  ui.pauseSoundBtn.addEventListener('click', () => {
    audio.ensure();
    setSound(!audio.enabled);
    audio.click();
  });
  ui.tiltToggle.addEventListener('click', toggleTilt);
  ui.pauseTiltBtn.addEventListener('click', toggleTilt);
  ui.fullscreenBtn.addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await ui.stage.requestFullscreen?.();
      else await document.exitFullscreen?.();
    } catch {
      showToast('Fullscreen is not available here.');
    }
  });

  window.addEventListener('orientationchange', () => {
    tiltBase = null;
    setTimeout(resize, 120);
  });
}

// ------------------------------------------------------------------- particles

function addParticle(p) {
  particles.push({
    x: p.x,
    y: p.y,
    vx: p.vx || 0,
    vy: p.vy || 0,
    life: p.life || 0.6,
    maxLife: p.life || 0.6,
    size: p.size || 3,
    color: p.color || '#ffd447',
    gravity: p.gravity || 0,
    drag: p.drag ?? 0.98,
    type: p.type || 'spark',
    rot: p.rot || 0,
    spin: p.spin || 0,
  });
}

function burst(x, y, color, count = 8, speed = 180) {
  for (let i = 0; i < count; i += 1) {
    const a = Math.random() * TAU;
    const s = speed * (0.35 + Math.random() * 0.85);
    addParticle({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - 40,
      life: 0.35 + Math.random() * 0.4,
      size: 2 + Math.random() * 3.6,
      color,
      gravity: 380,
      drag: 0.975,
    });
  }
}

function dustPuff(x, y, count = 4) {
  for (let i = 0; i < count; i += 1) {
    addParticle({
      x: x + (Math.random() - 0.5) * 16,
      y: y - 2,
      vx: (Math.random() - 0.5) * 90,
      vy: -20 - Math.random() * 45,
      life: 0.32 + Math.random() * 0.3,
      size: 3 + Math.random() * 4.5,
      color: i % 2 ? '#f4e4bd' : '#d9c59a',
      gravity: -15,
      drag: 0.93,
    });
  }
}

function spawnConfetti() {
  const colors = ['#ffd447', '#e73c31', '#39b54a', '#4fc3ff', '#ffffff', '#ff8a3d'];
  for (let i = 0; i < 100; i += 1) {
    const fromFlag = i % 2 === 0;
    addParticle({
      x: fromFlag ? FLAG_X + (Math.random() - 0.5) * 100 : player.x + (Math.random() - 0.5) * 160,
      y: fromFlag ? FLAG_BASE_Y - 180 + (Math.random() - 0.5) * 100 : player.y - 60,
      vx: (Math.random() - 0.5) * 380,
      vy: -160 - Math.random() * 430,
      life: 1.6 + Math.random() * 1.8,
      size: 4 + Math.random() * 5,
      color: colors[i % colors.length],
      gravity: 430,
      drag: 0.988,
      type: 'confetti',
      rot: Math.random() * TAU,
      spin: (Math.random() - 0.5) * 13,
    });
  }
}

function addFloater(x, y, text, color = '#ffd447', size = 18) {
  floaters.push({ x, y, text, color, size, life: 0.9, maxLife: 0.9 });
}

function updateEffects(dt) {
  for (const p of particles) {
    p.life -= dt;
    p.vy += p.gravity * dt;
    p.vx *= Math.pow(p.drag, dt * 60);
    p.vy *= Math.pow(p.drag, dt * 60);
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.rot += p.spin * dt;
  }
  particles = particles.filter((p) => p.life > 0);
  for (const f of floaters) {
    f.life -= dt;
    f.y -= 42 * dt;
  }
  floaters = floaters.filter((f) => f.life > 0);

  shake = damp(shake, 0, 11, dt);
  if (shake < 0.08) shake = 0;
  shakeX = (Math.random() * 2 - 1) * shake;
  shakeY = (Math.random() * 2 - 1) * shake;

  if (mode === 'playing') {
    if (level) level.flagRaise = damp(level.flagRaise, 0, 5, dt);
  } else if (mode === 'won') {
    if (level) level.flagRaise = damp(level.flagRaise, 1, 2.4, dt);
  }
}

// ----------------------------------------------------------------------- game

function axisInput() {
  let axis = (input.right ? 1 : 0) - (input.left ? 1 : 0);
  if (axis === 0 && tiltEnabled) {
    axis = Math.abs(tiltAxis) < 0.045 ? 0 : tiltAxis;
  }
  input.axis = clamp(axis, -1, 1);
  return input.axis;
}

function performJump() {
  const jump = BASE_JUMP + coins * JUMP_PER_COIN;
  player.vy = -jump;
  player.grounded = false;
  player.coyote = 0;
  player.jumpBuffer = 0;
  player.squash = 0.28;
  dustPuff(player.x + player.w / 2, player.y + player.h, 4);
  audio.jump(powerValue());
  haptic(8);
}

function aabb(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax + aw > bx && ax < bx + bw && ay + ah > by && ay < by + bh;
}

function updatePlayer(dt) {
  const axis = axisInput();
  const wasGrounded = player.grounded;
  const fallSpeed = player.vy;
  const canControl = player.stun <= 0;

  if (canControl) {
    const target = axis * MAX_SPEED;
    const rate = player.grounded ? 15 : 7.5;
    player.vx = damp(player.vx, target, rate, dt);
    if (axis !== 0) player.facing = axis > 0 ? 1 : -1;
  } else {
    player.stun -= dt;
    player.vx = damp(player.vx, 0, 2.5, dt);
  }
  if (Math.abs(player.vx) < 1.5 && axis === 0 && canControl) player.vx = 0;

  input.jumpBuffer = Math.max(0, input.jumpBuffer - dt);
  if (input.jumpBuffer > 0 && (player.grounded || player.coyote > 0) && player.stun <= 0) {
    performJump();
  }

  const gravityScale = !input.jumpHeld && player.vy < -120 ? 2.05 : 1;
  player.vy = Math.min(MAX_FALL, player.vy + GRAVITY * gravityScale * dt);

  player.prevBottom = player.y + player.h;
  movePlayer(dt);

  if (player.grounded) {
    player.coyote = 0.1;
  } else {
    player.coyote = Math.max(0, player.coyote - dt);
  }

  if (!wasGrounded && player.grounded && fallSpeed > 410) {
    player.squash = 1;
    dustPuff(player.x + player.w / 2, player.y + player.h, 7);
    shake = Math.max(shake, Math.min(5.5, fallSpeed / 170));
    audio.land();
    haptic(10);
  }

  if (player.grounded && Math.abs(player.vx) > 150) {
    player.runPhase += Math.abs(player.vx) * dt * 0.055;
    dustClock -= dt;
    if (dustClock <= 0) {
      dustClock = 0.12;
      dustPuff(player.x + player.w / 2 - player.facing * 12, player.y + player.h, 1);
    }
  } else {
    player.runPhase += dt * 2;
  }

  player.squash = Math.max(0, player.squash - dt * 4.6);
  player.invuln = Math.max(0, player.invuln - dt);

  if (player.y > WORLD.h + 130) respawnPlayer();

  collectCoins();
  checkCheckpoints();
  checkEnemies(dt);
  checkGoal();

  if (player.x < -120) {
    player.x = -120;
    player.vx = Math.max(0, player.vx);
  }
}

function movePlayer(dt) {
  player.x += player.vx * dt;
  const solids = level.grounds;
  for (const s of solids) {
    if (aabb(player.x, player.y, player.w, player.h, s.x, s.y, s.w, s.h)) {
      if (player.vx > 0) player.x = s.x - player.w;
      else if (player.vx < 0) player.x = s.x + s.w;
      player.vx = 0;
    }
  }
  for (const p of level.pipes) {
    const s = { x: p.x, y: p.y - p.h, w: p.w, h: p.h };
    if (aabb(player.x, player.y, player.w, player.h, s.x, s.y, s.w, s.h)) {
      if (player.vx > 0) player.x = s.x - player.w;
      else if (player.vx < 0) player.x = s.x + s.w;
      player.vx = 0;
    }
  }

  player.y += player.vy * dt;
  player.grounded = false;

  for (const s of level.grounds) {
    if (aabb(player.x, player.y, player.w, player.h, s.x, s.y, s.w, s.h)) {
      if (player.vy > 0) {
        player.y = s.y - player.h;
        player.vy = 0;
        player.grounded = true;
      } else if (player.vy < 0) {
        player.y = s.y + s.h;
        player.vy = 0;
      }
    }
  }
  for (const p of level.pipes) {
    const s = { x: p.x, y: p.y - p.h, w: p.w, h: p.h };
    if (aabb(player.x, player.y, player.w, player.h, s.x, s.y, s.w, s.h)) {
      if (player.vy > 0) {
        player.y = s.y - player.h;
        player.vy = 0;
        player.grounded = true;
      } else if (player.vy < 0) {
        player.y = s.y + s.h;
        player.vy = 0;
      }
    }
  }

  if (player.vy >= 0) {
    for (const island of level.islands) {
      if (
        player.x + player.w > island.x + 3 &&
        player.x < island.x + island.w - 3 &&
        player.prevBottom <= island.y + 3 &&
        player.y + player.h >= island.y &&
        player.y + player.h <= island.y + 42
      ) {
        player.y = island.y - player.h;
        player.vy = 0;
        player.grounded = true;
        break;
      }
    }
  }
}

function collectCoins() {
  const px = player.x + player.w / 2;
  const py = player.y + player.h / 2;
  for (const coin of level.coins) {
    if (coin.collected) continue;
    const dx = coin.x - px;
    const dy = coin.y - py;
    if (dx * dx + dy * dy < 38 * 38) {
      coin.collected = true;
      coins += 1;
      const power = powerLabel();
      burst(coin.x, coin.y, '#ffd447', 10, 210);
      addFloater(coin.x, coin.y - 16, coins === COIN_TOTAL ? 'MAX POWER!' : '+ JUMP', '#ffe46b', coins === COIN_TOTAL ? 21 : 17);
      audio.coin();
      haptic(12);
      shake = Math.max(shake, 2.4);
      ui.jumpChip.classList.remove('pop');
      void ui.jumpChip.offsetWidth;
      ui.jumpChip.classList.add('pop');
      updateHUD(true);
      if (coins === COIN_TOTAL) {
        showToast('MAX POWER! You can reach the sky.', 2300);
        for (let i = 0; i < 26; i += 1) {
          addParticle({
            x: player.x + player.w / 2,
            y: player.y + 10,
            vx: (Math.random() - 0.5) * 280,
            vy: -100 - Math.random() * 300,
            life: 0.7 + Math.random() * 0.8,
            size: 2 + Math.random() * 4,
            color: '#ffe46b',
            gravity: 320,
            drag: 0.985,
          });
        }
      } else if (coins === 1) {
        showToast('Jump power up! Higher platforms are within reach.', 2200);
      }
      if (power === '9.9×') break;
    }
  }
}

function checkCheckpoints() {
  if (!player.grounded) return;
  for (const cp of level.checkpoints) {
    if (cp.active) continue;
    if (player.x + player.w > cp.x && Math.abs(player.y + player.h - cp.y) < 80) {
      cp.active = true;
      checkpointIndex = cp.id;
      spawnPoint = { x: cp.x + 54, y: cp.y - PLAYER_H };
      burst(cp.x, cp.y - 92, '#8bf0b0', 16, 180);
      addFloater(cp.x + 14, cp.y - 122, 'CHECKPOINT!', '#9ff7b7', 17);
      audio.checkpoint();
      haptic([15, 40, 20]);
      showToast(`${cp.label} checkpoint saved.`, 1500);
    }
  }
}

function checkEnemies(dt) {
  for (const enemy of level.enemies) {
    if (!enemy.active) continue;
    if (enemy.squish > 0) {
      enemy.squish += dt;
      if (enemy.squish > 0.34) enemy.active = false;
      continue;
    }
    enemy.x += enemy.dir * enemy.speed * dt;
    enemy.walk += dt * (4.4 + enemy.speed * 0.03);
    if (enemy.x < enemy.min) {
      enemy.x = enemy.min;
      enemy.dir = 1;
    } else if (enemy.x + enemy.w > enemy.max) {
      enemy.x = enemy.max - enemy.w;
      enemy.dir = -1;
    }

    if (!aabb(player.x, player.y, player.w, player.h, enemy.x, enemy.y, enemy.w, enemy.h)) continue;
    if (player.vy > 120 && player.prevBottom <= enemy.y + 18) {
      enemy.squish = 0.001;
      player.vy = -610;
      player.grounded = false;
      player.prevBottom = player.y + player.h;
      burst(enemy.x + enemy.w / 2, enemy.y + enemy.h - 8, '#c88745', 12, 190);
      addFloater(enemy.x + enemy.w / 2, enemy.y - 6, 'STOMP!', '#ffe7a1', 16);
      audio.stomp();
      haptic(18);
      shake = Math.max(shake, 4);
      continue;
    }
    if (player.invuln <= 0) hurtPlayer(enemy);
  }
}

function hurtPlayer(enemy) {
  const lost = coins > 0;
  if (lost) coins -= 1;
  player.invuln = 1.45;
  player.stun = 0.34;
  player.vx = (player.x + player.w / 2 < enemy.x + enemy.w / 2 ? -1 : 1) * 330;
  player.vy = -400;
  player.grounded = false;
  player.squash = 0.7;
  burst(player.x + player.w / 2, player.y + player.h / 2, '#ff7b5e', 12, 220);
  addFloater(
    player.x + player.w / 2,
    player.y - 12,
    lost ? 'OUCH! −1 COIN' : 'OUCH!',
    '#ff9a83',
    16,
  );
  audio.hurt();
  haptic([30, 30, 45]);
  shake = Math.max(shake, 9);
  if (lost) {
    updateHUD(true);
    showToast('A coin slipped away — your jump got smaller.', 1700);
  }
}

function checkGoal() {
  if (mode !== 'playing') return;
  if (
    player.x + player.w > FLAG_X - 14 &&
    player.x < FLAG_X + 38 &&
    player.y + player.h <= FLAG_BASE_Y + 12 &&
    player.y + player.h > FLAG_BASE_Y - 90
  ) {
    triggerWin();
  }
}

function respawnPlayer() {
  player.x = spawnPoint.x;
  player.y = spawnPoint.y;
  player.vx = 0;
  player.vy = 0;
  player.grounded = false;
  player.coyote = 0;
  player.stun = 0;
  player.squash = 0.4;
  player.invuln = 1.5;
  shake = Math.max(shake, 5);
  burst(player.x + player.w / 2, player.y + player.h, '#d8f4ff', 14, 200);
  audio.land();
  haptic(25);
  showToast(checkpointIndex >= 0 ? 'Back to your checkpoint.' : 'Back to the start — you got this.', 1500);
}

function updatePhysics(dt) {
  runTime += dt;
  updatePlayer(dt);
}

function updateMenu(dt) {
  if (!level) return;
  player.runPhase += dt * 1.8;
  player.squash = Math.max(0, player.squash - dt * 4);
  for (const enemy of level.enemies) enemy.walk += dt * 2.8;
}

function updateCamera(dt) {
  let tx;
  let ty;
  if (mode === 'menu') {
    tx = 300;
    ty = 1360;
  } else {
    tx = player.x + player.w / 2 + player.facing * 64;
    ty = player.y + player.h / 2 - 36;
  }
  const rateX = mode === 'menu' ? 1.2 : 6.4;
  const rateY = mode === 'menu' ? 1.2 : 4.8;
  cam.x = damp(cam.x, tx, rateX, dt);
  cam.y = damp(cam.y, ty, rateY, dt);
  clampCamera();
}

// ------------------------------------------------------------------------ HUD

function updateHUD(force = false) {
  if (!player || !level) return;
  const label = powerLabel();
  if (force || coins !== hudCoins) {
    ui.coinCount.textContent = String(coins);
    ui.coinTotal.textContent = `/ ${COIN_TOTAL}`;
    ui.jumpFill.style.width = `${(coins / COIN_TOTAL) * 100}%`;
    hudCoins = coins;
  }
  if (force || label !== hudPower) {
    ui.jumpPower.textContent = label;
    ui.pausePower.textContent = label;
    hudPower = label;
  }
  ui.progressFill.style.width = `${clamp(player.x / FLAG_X, 0, 1) * 100}%`;
}

// --------------------------------------------------------------------- render

function visible(x, y, w, h) {
  const left = cam.x - viewW / 2 - 130;
  const right = cam.x + viewW / 2 + 130;
  const top = cam.y - viewH / 2 - 130;
  const bottom = cam.y + viewH / 2 + 130;
  return x + w > left && x < right && y + h > top && y < bottom;
}

function drawParticles() {
  for (const p of particles) {
    const a = clamp(p.life / p.maxLife, 0, 1);
    if (a <= 0) continue;
    ctx.save();
    ctx.globalAlpha = p.type === 'confetti' ? Math.min(1, a * 1.7) : a;
    ctx.fillStyle = p.color;
    if (p.type === 'confetti') {
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.55);
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (0.4 + a * 0.6), 0, TAU);
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawFloaters() {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  for (const f of floaters) {
    const a = clamp(f.life / f.maxLife, 0, 1);
    const pop = f.life > f.maxLife * 0.75 ? 1 + (1 - f.life / f.maxLife) * 1.4 : 1;
    ctx.globalAlpha = a;
    ctx.font = `900 ${f.size * pop}px "Arial Black", Impact, sans-serif`;
    ctx.strokeStyle = 'rgba(44, 23, 8, 0.74)';
    ctx.lineWidth = 4;
    ctx.strokeText(f.text, f.x, f.y);
    ctx.fillStyle = f.color;
    ctx.fillText(f.text, f.x, f.y);
  }
  ctx.restore();
}

function drawWorld() {
  for (let i = 0; i < level.grounds.length; i += 1) {
    const g = level.grounds[i];
    if (visible(g.x, g.y, g.w, g.h)) drawGround(ctx, g, level.groundDetails[i]);
  }

  for (const bush of level.bushes) {
    if (visible(bush.x - 80, bush.y - 80, 160, 90)) drawBush(ctx, bush, gameTime);
  }
  for (const flower of level.flowers) {
    if (visible(flower.x - 8, flower.y - 30, 16, 32)) drawFlower(ctx, flower, gameTime);
  }
  for (const sign of level.signs) {
    if (visible(sign.x - 20, sign.y - 150, sign.w + 60, 160)) drawSign(ctx, sign);
  }
  for (const cp of level.checkpoints) {
    if (visible(cp.x - 20, cp.y - 140, 70, 150)) drawCheckpoint(ctx, cp, gameTime);
  }

  if (visible(6100, 120, 330, 430)) drawCastle(ctx, 6138, FLAG_BASE_Y);

  for (const island of level.islands) {
    if (visible(island.x - 30, island.y - 20, island.w + 60, 120)) {
      drawIsland(ctx, island, gameTime);
    }
  }
  for (const pipe of level.pipes) {
    if (visible(pipe.x - 20, pipe.y - pipe.h - 20, pipe.w + 40, pipe.h + 30)) {
      drawPipe(ctx, pipe);
    }
  }

  for (const coin of level.coins) {
    if (!coin.collected && visible(coin.x - 24, coin.y - 28, 48, 56)) drawCoin(ctx, coin, gameTime);
  }
  for (const enemy of level.enemies) {
    if (enemy.active && visible(enemy.x - 30, enemy.y - 10, enemy.w + 60, enemy.h + 20)) {
      drawGoomba(ctx, enemy);
    }
  }

  if (visible(FLAG_X - 60, 60, 170, 360)) {
    drawFlag(ctx, FLAG_X, FLAG_BASE_Y, level.flagRaise, gameTime);
  }

  drawMario(ctx, player, gameTime, powerValue());
  drawParticles();
  drawFloaters();
}

function render() {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  drawSky(ctx, W, H, gameTime, cam);
  drawParallax(ctx, W, H, cam, gameTime, mode === 'menu');

  ctx.save();
  ctx.translate(W / 2 + shakeX, H / 2 + shakeY);
  ctx.scale(scale, scale);
  ctx.translate(-cam.x, -cam.y);
  drawWorld();
  ctx.restore();

  drawVignette(ctx, W, H);
}

// ----------------------------------------------------------------------- loop

function frame(now) {
  const raw = Math.min(Math.max(0, (now - last) / 1000), 0.05);
  last = now;
  gameTime += raw;

  if (mode === 'playing') {
    accumulator += raw;
    let steps = 0;
    while (accumulator >= STEP && steps < 7) {
      updatePhysics(STEP);
      accumulator -= STEP;
      steps += 1;
    }
    if (steps === 7) accumulator = 0;
  } else if (mode === 'menu') {
    updateMenu(raw);
    // The start screen is a CSS scene over a static backdrop image, so there
    // is nothing to paint on the canvas until the player taps Play.
    requestAnimationFrame(frame);
    return;
  }

  updateEffects(raw);
  if (mode !== 'paused') updateCamera(raw);
  updateHUD();
  render();
  if (hideStartOnRender) {
    hideStartOnRender = false;
    ui.start.hidden = true;
  }
  requestAnimationFrame(frame);
}

// ----------------------------------------------------------------------- boot

function boot() {
  loadBest();
  resize();
  resetGame();
  mode = 'menu';
  setBodyMode('menu');
  updateTiltUI();
  updateSoundUI();
  ui.pause.hidden = true;
  ui.win.hidden = true;
  ui.start.hidden = false;
  if (!document.fullscreenEnabled) ui.fullscreenBtn.style.display = 'none';
  window.addEventListener('resize', resize);
  setupInput();
  revealMenuWhenReady();
  updateHUD(true);
  requestAnimationFrame((now) => {
    last = now;
    requestAnimationFrame(frame);
  });
}

window.__coinClimb = {
  start: beginGame,
  restart: restartGame,
  teleport: (x, y) => {
    if (!player) return;
    player.x = x;
    player.y = y;
    player.vx = 0;
    player.vy = 0;
    cam.x = x;
    cam.y = y;
    clampCamera();
  },
  setCoins: (n) => {
    coins = clamp(Math.round(n), 0, COIN_TOTAL);
    updateHUD(true);
  },
  state: () => ({
    mode,
    coins,
    total: COIN_TOTAL,
    power: powerValue(),
    player: player ? { x: player.x, y: player.y, vx: player.vx, vy: player.vy, grounded: player.grounded } : null,
    camera: { x: cam.x, y: cam.y },
    tilt: tiltEnabled,
    checkpoint: checkpointIndex,
  }),
};

boot();
