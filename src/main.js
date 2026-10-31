import * as THREE from 'three';
import { World, SPAWN, WORLD_SEED, CHUNK_SIZE, WORLD_MIN } from './world.js';
import { Player } from './player.js';
import { Environment } from './environment.js';
import { AudioManager } from './audio.js';
import { BlockParticles, SmokeSystem, Motes } from './particles.js';
import { HOTBAR, BLOCK, blockName, BLOCK_DEFS } from './blocks.js';
import { drawBlockIcon } from './textures.js';

const SETTINGS_KEY = 'cubehaven.settings.v1';
const SAVE_KEY = 'cubehaven.save.v2';

const DEFAULT_SETTINGS = {
  renderDistance: 8,
  fov: 78,
  quality: 'high',
  shadows: true,
  showHud: true,
  sensitivity: 1,
  invertY: false,
  cameraBob: true,
  volume: 0.7,
  ambient: true,
};

function loadSettings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function loadSave() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (!parsed || parsed.version !== 2 || parsed.seed !== WORLD_SEED) return null;
    return parsed;
  } catch {
    return null;
  }
}

const settings = loadSettings();
const saved = loadSave();
let mode = 'menu';
let menuTime = 0;
let appReady = false;
let pendingStart = false;
let saveDirty = false;
let settingsReturn = 'menu';
let controlsReturn = 'menu';
let hintTimeout = 0;
let toastTimeout = 0;
let labelTimeout = 0;
let visibilityTimer = 0;
let fpsFrames = 0;
let fpsTime = 0;
let fpsValue = 60;
let hudTimer = 0;

const $ = (id) => document.getElementById(id);
const menu = $('menu');
const hud = $('hud');
const pauseScreen = $('pause');
const settingsScreen = $('settings');
const controlsScreen = $('controls');
const hotbar = $('hotbar');
const blockLabel = $('block-label');
const targetLabel = $('target-label');
const crosshair = document.querySelector('.crosshair');
const toast = $('toast');
const toastText = $('toast-text');
const flash = $('flash');
const hintStrip = $('hint-strip');
const btnPlay = $('btn-play');

const isTouch =
  window.matchMedia?.('(pointer: coarse)').matches ||
  navigator.maxTouchPoints > 0 ||
  'ontouchstart' in window;
document.body.classList.toggle('is-touch', isTouch);
$('mobile-controls').setAttribute('aria-hidden', String(!isTouch));

btnPlay.addEventListener('click', () => {
  if (!appReady) {
    pendingStart = true;
    return;
  }
  startGame();
});

// Renderer -----------------------------------------------------------------
const canvas = $('scene');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
  stencil: false,
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = settings.shadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.08, 820);
camera.rotation.order = 'YXZ';

const world = new World(scene);
world.generate();
if (saved) world.applyEdits(saved.edits);
world.buildAll();

const environment = new Environment(scene, renderer, settings);
environment.addPointLights(world.decorLights);

const blockParticles = new BlockParticles(scene);
const smoke = new SmokeSystem(scene);
const motes = new Motes(scene);
const audio = new AudioManager(settings);

const highlightGeometry = new THREE.BoxGeometry(1.006, 1.006, 1.006);
const highlightEdges = new THREE.EdgesGeometry(highlightGeometry);
const highlightLine = new THREE.LineSegments(
  highlightEdges,
  new THREE.LineBasicMaterial({ color: 0xffe3a0, transparent: true, opacity: 0.88, depthTest: true })
);
highlightLine.renderOrder = 5;
highlightLine.visible = false;
scene.add(highlightLine);

const player = new Player({
  camera,
  world,
  settings,
  callbacks: {
    onSelect: (id) => {
      updateHotbarSelection();
      showBlockLabel(id);
      audio.select();
    },
    onFlyChange: (flying) => {
      audio.whoosh();
      showToast(flying ? 'Flight enabled — Space to rise, Shift to descend' : 'Flight disabled', 2300);
    },
    onBreak: (hit) => {
      const def = BLOCK_DEFS[hit.id];
      blockParticles.spawnBurst(hit.x, hit.y, hit.z, def?.particle ?? 0x999999, 18);
      audio.breakBlock();
      saveDirty = true;
    },
    onPlace: (placed) => {
      const def = BLOCK_DEFS[placed.id];
      blockParticles.spawnPlace(placed.x, placed.y, placed.z, def?.particle ?? 0x999999);
      audio.placeBlock();
      saveDirty = true;
    },
    onDenied: (message) => {
      showToast(message, 1600);
      audio.denied();
    },
    onMiss: () => {
      audio.denied();
    },
    onStep: () => audio.step(),
    onJump: () => audio.jump(),
    onVoid: () => respawnPlayer(),
  },
});

function defaultSpawn() {
  const y = world.surfaceY(SPAWN.x, SPAWN.z) + 1.02;
  player.spawnAt(SPAWN.x, y, SPAWN.z, SPAWN.yaw, SPAWN.pitch);
  player.setSelected(0);
}

if (saved?.player) {
  player.load(saved.player);
  if (player.collides() || player.position.y < 2 || player.position.y > 60) defaultSpawn();
} else {
  defaultSpawn();
}

player.setBaseFov(settings.fov);

function updateMenuCamera(dt) {
  menuTime += dt;
  const angle = 0.675 + Math.sin(menuTime * 0.035) * 0.035;
  const radius = 64;
  camera.position.set(
    4 + Math.sin(angle) * radius,
    37.5 + Math.sin(menuTime * 0.13) * 0.55,
    8 + Math.cos(angle) * radius
  );
  camera.lookAt(2, 17.5, -10);
  camera.rotation.z = Math.sin(menuTime * 0.05) * 0.008;
}

camera.fov = 58;
camera.updateProjectionMatrix();
updateMenuCamera(0);

// UI -----------------------------------------------------------------------
function showToast(message, duration = 2200) {
  toastText.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), duration);
}

function showBlockLabel(id) {
  blockLabel.textContent = blockName(id);
  blockLabel.classList.remove('is-hidden');
  clearTimeout(labelTimeout);
  labelTimeout = setTimeout(() => blockLabel.classList.add('is-hidden'), 1500);
}

function updateHotbarSelection() {
  hotbar.querySelectorAll('.hotbar-slot').forEach((slot, index) => {
    slot.classList.toggle('is-selected', index === player.selected);
    slot.setAttribute('aria-pressed', String(index === player.selected));
  });
}

function buildHotbar() {
  hotbar.innerHTML = '';
  HOTBAR.forEach((id, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'hotbar-slot';
    button.title = blockName(id);
    button.setAttribute('aria-label', `${index + 1}: ${blockName(id)}`);
    const key = document.createElement('span');
    key.className = 'slot-key';
    key.textContent = String(index + 1);
    const icon = document.createElement('canvas');
    drawBlockIcon(icon, id, world.atlas);
    button.append(key, icon);
    button.addEventListener('click', () => {
      if (mode !== 'game') return;
      player.setSelected(index);
    });
    hotbar.appendChild(button);
  });
  updateHotbarSelection();
}

function updateHudVisibility() {
  const visible = mode !== 'menu' && settings.showHud;
  hud.classList.toggle('is-hidden', mode === 'menu');
  hud.classList.toggle('is-minimal', !settings.showHud);
  if (mode !== 'menu' && !settings.showHud) {
    // The palette stays usable even in a minimal HUD.
    hud.classList.remove('is-hidden');
  }
  return visible;
}

function updateRangeFill(input) {
  const min = Number(input.min) || 0;
  const max = Number(input.max) || 100;
  const value = Number(input.value);
  input.style.setProperty('--fill', `${((value - min) / (max - min)) * 100}%`);
}

function syncSettingsUI() {
  $('set-render').value = String(settings.renderDistance);
  $('out-render').textContent = `${settings.renderDistance} chunks`;
  $('set-fov').value = String(settings.fov);
  $('out-fov').textContent = `${settings.fov}°`;
  $('set-sensitivity').value = String(settings.sensitivity);
  $('out-sensitivity').textContent = `${Number(settings.sensitivity).toFixed(1)}×`;
  $('set-volume').value = String(Math.round(settings.volume * 100));
  $('out-volume').textContent = `${Math.round(settings.volume * 100)}%`;
  $('set-quality').value = settings.quality;
  setSwitch($('set-shadows'), settings.shadows);
  setSwitch($('set-hud'), settings.showHud);
  setSwitch($('set-invert'), settings.invertY);
  setSwitch($('set-bob'), settings.cameraBob);
  setSwitch($('set-ambient'), settings.ambient);
  ['set-render', 'set-fov', 'set-sensitivity', 'set-volume'].forEach((id) => updateRangeFill($(id)));
}

function setSwitch(element, on) {
  element.classList.toggle('is-on', Boolean(on));
  element.setAttribute('aria-checked', String(Boolean(on)));
}

function pixelRatio() {
  const dpr = window.devicePixelRatio || 1;
  if (settings.quality === 'low') return 1;
  if (settings.quality === 'balanced') return Math.min(dpr, 1.5);
  return Math.min(dpr, 2);
}

function applySettings({ persist = true } = {}) {
  renderer.setPixelRatio(pixelRatio());
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  environment.setQuality(settings.quality);
  environment.setShadows(settings.shadows);
  world.updateVisibility(mode === 'menu' ? camera.position : player.position, settings.renderDistance);
  player.setBaseFov(settings.fov);
  if (mode === 'game' || mode === 'paused') {
    camera.fov = settings.fov;
    camera.updateProjectionMatrix();
  }
  audio.setVolume(settings.volume);
  audio.setAmbient(settings.ambient);
  updateHudVisibility();
  if (persist) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // Storage can be unavailable in private contexts.
    }
  }
}

function saveWorld(notify = false) {
  const data = {
    version: 2,
    seed: WORLD_SEED,
    savedAt: Date.now(),
    edits: world.serializeEdits(),
    player: player.serialize(),
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    saveDirty = false;
    $('menu-blocks').textContent = String(world.editCount);
    $('pause-edits').textContent = String(world.editCount);
    if (notify) {
      showToast('World saved', 1800);
      audio.save();
    }
  } catch {
    if (notify) showToast('Could not save in this browser', 2200);
  }
}

function updatePauseStats() {
  $('pause-coords').textContent = `${Math.floor(player.position.x)} / ${Math.floor(player.position.y)} / ${Math.floor(player.position.z)}`;
  $('pause-edits').textContent = String(world.editCount);
}

function startGame() {
  if (mode === 'game') return;
  audio.unlock();
  mode = 'game';
  menu.classList.add('is-hidden');
  pauseScreen.classList.add('is-hidden');
  settingsScreen.classList.add('is-hidden');
  controlsScreen.classList.add('is-hidden');
  document.body.classList.add('in-game');
  hud.classList.remove('is-hidden');
  player.setEnabled(true);
  player.setBaseFov(settings.fov);
  camera.fov = settings.fov;
  camera.updateProjectionMatrix();
  player.updateCamera(0);
  world.updateVisibility(player.position, settings.renderDistance);
  updateHudVisibility();
  updatePauseStats();
  showBlockLabel(player.selectedBlock);
  hintStrip.classList.remove('is-faded');
  clearTimeout(hintTimeout);
  hintTimeout = setTimeout(() => hintStrip.classList.add('is-faded'), 14000);
  flash.classList.remove('is-active');
  void flash.offsetWidth;
  flash.classList.add('is-active');
  showToast(`Golden Valley · Seed ${WORLD_SEED}`, 3200);
  if (!isTouch) {
    try {
      canvas.requestPointerLock?.();
    } catch {
      // Pointer lock can be unavailable; keyboard and touch still work.
    }
  }
}

function pauseGame() {
  if (mode !== 'game') return;
  mode = 'paused';
  player.setEnabled(false);
  document.exitPointerLock?.();
  pauseScreen.classList.remove('is-hidden');
  updatePauseStats();
  saveWorld(false);
  audio.click();
}

function resumeGame() {
  if (mode !== 'paused') return;
  mode = 'game';
  pauseScreen.classList.add('is-hidden');
  player.setEnabled(true);
  audio.click();
  if (!isTouch) {
    try {
      canvas.requestPointerLock?.();
    } catch {
      // Ignore.
    }
  }
}

function returnToTitle() {
  if (mode === 'menu') return;
  saveWorld(false);
  mode = 'menu';
  player.setEnabled(false);
  document.exitPointerLock?.();
  pauseScreen.classList.add('is-hidden');
  settingsScreen.classList.add('is-hidden');
  controlsScreen.classList.add('is-hidden');
  menu.classList.remove('is-hidden');
  hud.classList.add('is-hidden');
  document.body.classList.remove('in-game');
  camera.fov = 58;
  camera.updateProjectionMatrix();
  updateMenuCamera(0);
  $('menu-blocks').textContent = String(world.editCount);
  audio.click();
}

function openSettings(returnTo) {
  settingsReturn = returnTo;
  settingsScreen.classList.remove('is-hidden');
  if (returnTo === 'pause') pauseScreen.classList.add('is-hidden');
  syncSettingsUI();
  audio.click();
}

function closeSettings() {
  settingsScreen.classList.add('is-hidden');
  if (settingsReturn === 'pause') pauseScreen.classList.remove('is-hidden');
  audio.click();
}

function openControls(returnTo) {
  controlsReturn = returnTo;
  controlsScreen.classList.remove('is-hidden');
  audio.click();
}

function closeControls() {
  controlsScreen.classList.add('is-hidden');
  if (controlsReturn === 'pause') pauseScreen.classList.remove('is-hidden');
  audio.click();
}

function respawnPlayer() {
  defaultSpawn();
  showToast('Returned to the trailhead', 1800);
}

function setupSettings() {
  const render = $('set-render');
  render.addEventListener('input', () => {
    settings.renderDistance = Number(render.value);
    $('out-render').textContent = `${settings.renderDistance} chunks`;
    updateRangeFill(render);
    applySettings();
  });

  const fov = $('set-fov');
  fov.addEventListener('input', () => {
    settings.fov = Number(fov.value);
    $('out-fov').textContent = `${settings.fov}°`;
    updateRangeFill(fov);
    applySettings();
  });

  const sensitivity = $('set-sensitivity');
  sensitivity.addEventListener('input', () => {
    settings.sensitivity = Number(sensitivity.value);
    $('out-sensitivity').textContent = `${settings.sensitivity.toFixed(1)}×`;
    updateRangeFill(sensitivity);
    applySettings();
  });

  const volume = $('set-volume');
  volume.addEventListener('input', () => {
    settings.volume = Number(volume.value) / 100;
    $('out-volume').textContent = `${volume.value}%`;
    updateRangeFill(volume);
    applySettings();
  });

  $('set-quality').addEventListener('change', (event) => {
    settings.quality = event.target.value;
    applySettings();
  });

  const toggles = [
    ['set-shadows', 'shadows'],
    ['set-hud', 'showHud'],
    ['set-invert', 'invertY'],
    ['set-bob', 'cameraBob'],
    ['set-ambient', 'ambient'],
  ];
  toggles.forEach(([id, key]) => {
    $(id).addEventListener('click', () => {
      settings[key] = !settings[key];
      setSwitch($(id), settings[key]);
      applySettings();
      audio.click();
    });
  });

  $('btn-reset-settings').addEventListener('click', () => {
    Object.assign(settings, DEFAULT_SETTINGS);
    syncSettingsUI();
    applySettings();
    audio.click();
    showToast('Settings reset to defaults', 1600);
  });

  $('btn-settings-close').addEventListener('click', closeSettings);
  $('btn-settings-done').addEventListener('click', closeSettings);
}

function setupButtons() {
  $('btn-settings').addEventListener('click', () => openSettings('menu'));
  $('btn-controls').addEventListener('click', () => openControls('menu'));
  $('btn-controls-close').addEventListener('click', closeControls);
  $('btn-controls-done').addEventListener('click', closeControls);
  $('btn-resume').addEventListener('click', resumeGame);
  $('btn-pause').addEventListener('click', pauseGame);
  $('btn-pause-settings').addEventListener('click', () => openSettings('pause'));
  $('btn-save').addEventListener('click', () => saveWorld(true));
  $('btn-title').addEventListener('click', returnToTitle);
}

function setupPointerLock() {
  document.addEventListener('pointerlockchange', () => {
    if (mode === 'game' && document.pointerLockElement !== canvas && !isTouch) {
      pauseGame();
    }
  });
  document.addEventListener('pointerlockerror', () => {
    if (mode === 'game' && !isTouch) {
      // Keep playing without lock rather than trapping the user in a menu.
      player.setEnabled(true);
    }
  });
}

function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (event) => {
    if (event.code !== 'Escape') return;
    if (!controlsScreen.classList.contains('is-hidden')) {
      closeControls();
      return;
    }
    if (!settingsScreen.classList.contains('is-hidden')) {
      closeSettings();
      return;
    }
    if (mode === 'paused') {
      resumeGame();
      return;
    }
    if (mode === 'game') {
      pauseGame();
    }
  });
}

function setupJoystick() {
  const joystick = $('joystick');
  const knob = $('joystick-knob');
  let pointerId = null;

  const update = (clientX, clientY) => {
    const rect = joystick.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const limit = rect.width / 2 - 13;
    let dx = (clientX - cx) / limit;
    let dy = (clientY - cy) / limit;
    const length = Math.hypot(dx, dy);
    if (length > 1) {
      dx /= length;
      dy /= length;
    }
    player.touchMove.x = dx;
    player.touchMove.z = -dy;
    knob.style.transform = `translate(${dx * 27}px, ${dy * 27}px)`;
  };

  const release = () => {
    pointerId = null;
    player.touchMove.x = 0;
    player.touchMove.z = 0;
    knob.style.transform = 'translate(0px, 0px)';
  };

  joystick.addEventListener('pointerdown', (event) => {
    if (mode !== 'game') return;
    pointerId = event.pointerId;
    joystick.setPointerCapture?.(event.pointerId);
    update(event.clientX, event.clientY);
    event.preventDefault();
  });
  joystick.addEventListener('pointermove', (event) => {
    if (event.pointerId !== pointerId) return;
    update(event.clientX, event.clientY);
    event.preventDefault();
  });
  joystick.addEventListener('pointerup', release);
  joystick.addEventListener('pointercancel', release);
  joystick.addEventListener('lostpointercapture', release);

  const jump = $('btn-mobile-jump');
  const holdJump = (down) => {
    if (down) player.keys.add('Space');
    else player.keys.delete('Space');
  };
  jump.addEventListener('pointerdown', (event) => {
    if (mode !== 'game') return;
    holdJump(true);
    event.preventDefault();
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((type) => {
    jump.addEventListener(type, () => holdJump(false));
  });

  $('btn-mobile-fly').addEventListener('click', () => {
    if (mode === 'game') player.toggleFly();
  });
  $('btn-mobile-break').addEventListener('pointerdown', (event) => {
    if (mode !== 'game') return;
    player.breakBlock();
    event.preventDefault();
  });
  $('btn-mobile-place').addEventListener('pointerdown', (event) => {
    if (mode !== 'game') return;
    player.placeBlock();
    event.preventDefault();
  });
}

function updateHud(dt) {
  fpsFrames += 1;
  fpsTime += dt;
  if (fpsTime >= 0.5) {
    fpsValue = Math.round(fpsFrames / fpsTime);
    fpsFrames = 0;
    fpsTime = 0;
    $('hud-fps').textContent = String(fpsValue);
  }
  hudTimer += dt;
  if (hudTimer < 0.14) return;
  hudTimer = 0;
  const x = Math.floor(player.position.x);
  const y = Math.floor(player.position.y);
  const z = Math.floor(player.position.z);
  $('hud-coords').textContent = `${x} / ${y} / ${z}`;
  $('hud-chunk').textContent = `${Math.floor((x - WORLD_MIN) / CHUNK_SIZE)} / ${Math.floor((z - WORLD_MIN) / CHUNK_SIZE)}`;
  if (player.target && mode === 'game') {
    targetLabel.textContent = blockName(player.target.id);
    targetLabel.classList.remove('is-hidden');
    crosshair.classList.add('is-target');
  } else {
    targetLabel.classList.add('is-hidden');
    crosshair.classList.remove('is-target');
  }
}

function updateHighlight() {
  if (mode !== 'game' || !player.target) {
    highlightLine.visible = false;
    return;
  }
  highlightLine.visible = true;
  highlightLine.position.set(player.target.x + 0.5, player.target.y + 0.5, player.target.z + 0.5);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatio());
  renderer.setSize(window.innerWidth, window.innerHeight, false);
}

function init() {
  buildHotbar();
  setupSettings();
  setupButtons();
  setupPointerLock();
  setupKeyboardShortcuts();
  setupJoystick();
  syncSettingsUI();
  applySettings({ persist: false });
  $('menu-blocks').textContent = String(world.editCount);
  $('pause-edits').textContent = String(world.editCount);
  window.addEventListener('resize', onResize);
  window.addEventListener('beforeunload', () => {
    if (mode !== 'menu') saveWorld(false);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (mode === 'game') pauseGame();
      if (mode !== 'menu') saveWorld(false);
    }
  });
  appReady = true;
  if (pendingStart) {
    pendingStart = false;
    startGame();
  }
  clock.start();
  requestAnimationFrame(animate);
}

const clock = new THREE.Clock(false);
const menuFocus = new THREE.Vector3(0, 18, -4);

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (mode === 'game') {
    player.update(dt);
    updateHighlight();
    updateHud(dt);
    visibilityTimer += dt;
    if (visibilityTimer > 0.35) {
      visibilityTimer = 0;
      world.updateVisibility(player.position, settings.renderDistance);
    }
    environment.update(dt, camera, player.position);
    smoke.update(dt, world.chimney, true);
    motes.update(dt, camera.position);
    blockParticles.update(dt);
  } else if (mode === 'paused') {
    updateHighlight();
    environment.update(dt, camera, player.position);
    smoke.update(dt, world.chimney, true);
    motes.update(dt, camera.position);
    blockParticles.update(dt);
  } else {
    updateMenuCamera(dt);
    environment.update(dt, camera, menuFocus);
    smoke.update(dt, world.chimney, true);
    motes.update(dt, camera.position);
    blockParticles.update(dt);
  }

  world.update(dt);
  renderer.render(scene, camera);
}

window.__cubehaven = { world, player, camera, scene, renderer, settings, environment, saveWorld };
init();
