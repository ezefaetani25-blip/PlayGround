import '@fontsource/silkscreen/400.css';
import '@fontsource/silkscreen/700.css';
import '@fontsource-variable/nunito';
import './style.css';

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { World, WORLD_SIZE, FACES } from './world.js';
import { Player } from './player.js';
import { getAtlas } from './textures.js';
import { BLOCKS, AIR, WATER, BEDROCK, DEFAULT_HOTBAR, PLACEABLE } from './blocks.js';
import { Settings } from './settings.js';
import { AudioManager } from './audio.js';
import { UI } from './ui.js';

const SAVE_KEY = 'cubehaven.save.v1';
const SAVE_VERSION = 1;

const ADJECTIVES = ['mossy', 'sunny', 'quiet', 'amber', 'hidden', 'wild', 'gentle', 'stony', 'lucky', 'misty', 'golden', 'fern'];
const NOUNS = ['otter', 'harbor', 'meadow', 'ridge', 'cove', 'forest', 'island', 'valley', 'peak', 'lagoon', 'grove', 'shore'];

function randomSeedString() {
  const a = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${a}-${n}-${Math.floor(100 + Math.random() * 900)}`;
}

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function readSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const save = JSON.parse(raw);
    if (!save || typeof save !== 'object' || save.seed === undefined) return null;
    return save;
  } catch {
    return null;
  }
}

function normalizeEdits(edits) {
  if (!edits) return null;
  const map = new Map();
  const entries = Array.isArray(edits) ? edits : Object.entries(edits);
  for (const entry of entries) {
    if (!Array.isArray(entry) || entry.length !== 2) continue;
    const key = String(entry[0]);
    const id = Number(entry[1]);
    if (!/^-?\d+,-?\d+,-?\d+$/.test(key) || !Number.isInteger(id) || id < 0 || id >= BLOCKS.length) continue;
    map.set(key, id);
  }
  return map;
}

class Game {
  constructor() {
    this.settings = new Settings();
    this.atlas = getAtlas();
    this.audio = new AudioManager(this.settings);

    this.state = 'loading';
    this.overlayReturn = 'menu';
    this.world = null;
    this.worldSeed = null;
    this.player = null;
    this.worldTime = 0.34;
    this.day = 1;
    this.isNight = false;
    this.starsVisible = false;

    this.keys = new Set();
    this.touch = { axisX: 0, axisY: 0, jump: false, sprint: false, down: false };
    this.isTouch = false;
    this.pointerLocked = false;
    this.dragging = false;
    this.dragButton = 0;
    this.dragMoved = 0;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.suppressMouseUp = false;
    this.lookPointer = null;
    this.lastLookX = 0;
    this.lastLookY = 0;
    this.pendingLock = false;
    this.sprintToggle = false;

    this.selectedBlockId = DEFAULT_HOTBAR[0];
    this.swing = 0;
    this.particleCursor = 0;
    this.time = 0;
    this.menuAngle = 0.7;
    this.saveTimer = 0;
    this.saveFailed = false;
    this.hudTimer = 0;
    this.fpsTime = 0;
    this.fpsFrames = 0;
    this.fps = 60;
    this.lastTime = 0;
    this.transitioning = false;
    this.lastPixelRatio = 0;
    this.resizeQueued = false;

    this._dir = new THREE.Vector3();
    this._eye = new THREE.Vector3();
    this._focus = new THREE.Vector3();
    this._lightDir = new THREE.Vector3();
    this._sunDir = new THREE.Vector3();
    this._colorA = new THREE.Color();
    this._colorB = new THREE.Color();
    this._colorC = new THREE.Color();
    this._dummy = new THREE.Object3D();

    this.initRenderer();
    this.initScene();
    this.initSky();
    this.initClouds();
    this.initStars();
    this.initParticles();
    this.initHeld();
    this.initHighlight();

    this.ui = new UI(this);
    this.initEvents();
    this.applySettings(true);

    this.init().catch((error) => {
      console.error(error);
      this.ui?.showLoading(false);
      this.ui?.toast('Something went wrong while building the island');
    });
  }

  /* ------------------------------------------------------------------ setup */

  initRenderer() {
    this.canvas = document.getElementById('game');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.setClearColor(0x8bcbee, 1);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.08, 700);
    this.scene = new THREE.Scene();
    this.scene.add(this.camera);
    this.scene.fog = new THREE.Fog(0xbfe9ff, 30, 155);

    this.resizeRenderer();
  }

  initScene() {
    this.sunLight = new THREE.DirectionalLight(0xfff1d0, 2.4);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.left = -46;
    this.sunLight.shadow.camera.right = 46;
    this.sunLight.shadow.camera.top = 46;
    this.sunLight.shadow.camera.bottom = -46;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 210;
    this.sunLight.shadow.bias = -0.00055;
    this.sunLight.shadow.normalBias = 0.055;
    this.sunTarget = new THREE.Object3D();
    this.scene.add(this.sunTarget);
    this.sunLight.target = this.sunTarget;
    this.scene.add(this.sunLight);

    this.hemiLight = new THREE.HemisphereLight(0xc7e8ff, 0x44503a, 0.7);
    this.scene.add(this.hemiLight);
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.16);
    this.scene.add(this.ambientLight);

    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.48, 0.55, 0.92);
    this.outputPass = new OutputPass();
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.outputPass);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(window.innerWidth, window.innerHeight);

    this.palette = {
      nightTop: new THREE.Color('#050a1c'),
      nightHorizon: new THREE.Color('#0a1530'),
      nightBottom: new THREE.Color('#04070f'),
      dayTop: new THREE.Color('#3f8fd8'),
      dayHorizon: new THREE.Color('#bfe9ff'),
      dayBottom: new THREE.Color('#b7d9e8'),
      sunsetTop: new THREE.Color('#3b4f92'),
      sunsetHorizon: new THREE.Color('#ff9d66'),
      sunsetBottom: new THREE.Color('#e7865a'),
      nightLight: new THREE.Color('#8fa8e8'),
      dayLight: new THREE.Color('#fff2d4'),
      sunsetLight: new THREE.Color('#ffb37a'),
      nightGround: new THREE.Color('#151c27'),
      dayGround: new THREE.Color('#4a5a3a'),
      nightCloud: new THREE.Color('#3a4558'),
      dayCloud: new THREE.Color('#ffffff'),
      sunsetCloud: new THREE.Color('#ffc7a3'),
      underwater: new THREE.Color('#0b3a55'),
    };
  }

  initSky() {
    this.skyUniforms = {
      uTop: { value: new THREE.Color('#3f8fd8') },
      uHorizon: { value: new THREE.Color('#bfe9ff') },
      uBottom: { value: new THREE.Color('#b7d9e8') },
      uSunDir: { value: new THREE.Vector3(0.5, 0.6, 0.35).normalize() },
      uSunColor: { value: new THREE.Color(1, 0.85, 0.65) },
    };

    const skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: false,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uBottom;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vDir;

        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.72, h));
          col = mix(uBottom, col, smoothstep(-0.4, 0.015, h));
          float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
          col += uSunColor * (pow(sunDot, 420.0) * 2.6 + pow(sunDot, 14.0) * 0.16);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });
    this.skyMaterial = skyMaterial;
    this.sky = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), skyMaterial);
    this.sky.scale.setScalar(520);
    this.sky.renderOrder = -1000;
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);

    const sunGeo = new THREE.BoxGeometry(1, 1, 1);
    this.sunMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(3.6, 2.9, 1.7),
      fog: false,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    this.sunMesh = new THREE.Mesh(sunGeo, this.sunMaterial);
    this.sunMesh.scale.setScalar(17);
    this.sunMesh.renderOrder = -900;
    this.sunMesh.frustumCulled = false;
    this.scene.add(this.sunMesh);

    this.moonMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(1.25, 1.42, 1.8),
      fog: false,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    this.moonMesh = new THREE.Mesh(sunGeo, this.moonMaterial);
    this.moonMesh.scale.setScalar(12);
    this.moonMesh.renderOrder = -900;
    this.moonMesh.frustumCulled = false;
    this.scene.add(this.moonMesh);
  }

  initStars() {
    const count = 300;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      fog: false,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    this.stars = new THREE.InstancedMesh(geo, mat, count);
    this.stars.frustumCulled = false;
    this.stars.renderOrder = -950;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const y = Math.pow(Math.random(), 0.65) * 0.95 + 0.02;
      const r = Math.sqrt(1 - y * y);
      dummy.position.set(Math.cos(theta) * r * 320, y * 320, Math.sin(theta) * r * 320);
      const size = 0.7 + Math.random() * 1.6;
      dummy.scale.setScalar(size);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.updateMatrix();
      this.stars.setMatrixAt(i, dummy.matrix);
      const warmth = Math.random();
      color.setRGB(0.78 + warmth * 0.22, 0.84 + warmth * 0.16, 1);
      this.stars.setColorAt(i, color);
    }
    this.stars.instanceMatrix.needsUpdate = true;
    if (this.stars.instanceColor) this.stars.instanceColor.needsUpdate = true;
    this.scene.add(this.stars);
  }

  initClouds() {
    this.cloudMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.93,
      flatShading: true,
    });
    const geo = new THREE.BoxGeometry(1, 1, 1);
    this.cloudBoxes = [];
    this.cloudData = [];
    const rng = () => Math.random();
    let cloudCount = 12;
    for (let c = 0; c < cloudCount; c++) {
      const cx = -55 + rng() * 205;
      const cz = -55 + rng() * 205;
      const cy = 61 + rng() * 7;
      this.cloudData.push({ x: cx, z: cz, speed: 0.5 + rng() * 0.9 });
      const boxes = 4 + Math.floor(rng() * 5);
      for (let b = 0; b < boxes; b++) {
        this.cloudBoxes.push({
          cloud: c,
          ox: (rng() - 0.5) * 13,
          oy: (rng() - 0.5) * 2.5,
          oz: (rng() - 0.5) * 11,
          sx: 4 + rng() * 7,
          sy: 1.4 + rng() * 2.6,
          sz: 4 + rng() * 7,
        });
      }
    }
    this.clouds = new THREE.InstancedMesh(geo, this.cloudMaterial, this.cloudBoxes.length);
    this.clouds.frustumCulled = false;
    this.clouds.castShadow = false;
    this.clouds.receiveShadow = false;
    this.scene.add(this.clouds);
    this.updateClouds(0);
  }

  initParticles() {
    const count = 110;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.particleMesh = new THREE.InstancedMesh(geo, mat, count);
    this.particleMesh.frustumCulled = false;
    this.particleMesh.castShadow = false;
    this.particleMesh.receiveShadow = false;
    this.particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.particlePool = Array.from({ length: count }, () => ({
      active: false,
      x: 0,
      y: 0,
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      life: 0,
      maxLife: 1,
      size: 0.1,
      rx: 0,
      ry: 0,
      rz: 0,
      spin: 0,
    }));
    const dummy = new THREE.Object3D();
    dummy.scale.setScalar(0);
    dummy.updateMatrix();
    for (let i = 0; i < count; i++) {
      this.particleMesh.setMatrixAt(i, dummy.matrix);
      this.particleMesh.setColorAt(i, new THREE.Color(1, 1, 1));
    }
    this.particleMesh.instanceMatrix.needsUpdate = true;
    if (this.particleMesh.instanceColor) this.particleMesh.instanceColor.needsUpdate = true;
    this.scene.add(this.particleMesh);
  }

  initHeld() {
    this.heldGroup = new THREE.Group();
    this.heldGroup.visible = false;
    this.camera.add(this.heldGroup);
    this.heldMaterial = new THREE.MeshBasicMaterial({
      map: this.atlas.texture,
      vertexColors: true,
      transparent: true,
      alphaTest: 0.28,
      depthTest: false,
      depthWrite: false,
      fog: false,
      side: THREE.DoubleSide,
    });
    this.heldMesh = null;
    this.updateHeldItem();
  }

  initHighlight() {
    const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.008, 1.008, 1.008));
    const mat = new THREE.LineBasicMaterial({
      color: 0x0b160e,
      transparent: true,
      opacity: 0.72,
      depthTest: true,
    });
    this.highlight = new THREE.LineSegments(geo, mat);
    this.highlight.visible = false;
    this.highlight.renderOrder = 6;
    this.scene.add(this.highlight);
  }

  /* ------------------------------------------------------------------- init */

  async init() {
    this.ui.showScreen(null);
    this.setState('loading');
    this.ui.showLoading(true);
    this.ui.fade(true);
    this.ui.setLoading(0.01, 'Shaping the island…');

    const save = readSave();
    const seed = save?.seed ?? randomSeedString();
    const edits = normalizeEdits(save?.edits);
    const time = typeof save?.time === 'number' ? save.time : 0.34;
    const day = typeof save?.day === 'number' ? save.day : 1;

    await this.loadWorld({
      seed,
      edits,
      time,
      day,
      playerData: save?.player ?? null,
    });

    this.refreshMenuInfo();
    this.ui.showLoading(false);
    this.ui.showScreen('menu');
    this.setState('menu');
    this.updateMenuCamera(0);
    this.updateSky(0);
    this.ui.hideHint();
    this.lastTime = performance.now();
    requestAnimationFrame(this.loop);
    setTimeout(() => this.ui.fade(false), 80);
  }

  async loadWorld({ seed, edits = null, time = 0.34, day = 1, playerData = null }) {
    if (this.world) {
      this.world.dispose();
      this.world = null;
    }
    this.player = null;
    this.worldSeed = seed;
    this.ui.showLoading(true);
    this.ui.setLoading(0.01, 'Shaping the island…');

    const world = new World(this.scene, this.atlas, seed, WORLD_SIZE, edits);
    this.world = world;
    await world.generate((progress, text) => this.ui.setLoading(progress, text));

    const player = new Player(world);
    player.onStep = (kind) => {
      if (kind === 'jump') this.audio.jump();
      else this.audio.step(player.stepSound);
    };
    player.onLand = () => this.audio.land();
    player.onSplash = () => this.audio.splash();
    this.player = player;

    if (playerData && Number.isFinite(playerData.x) && Number.isFinite(playerData.y) && Number.isFinite(playerData.z)) {
      player.teleport(
        playerData.x,
        playerData.y,
        playerData.z,
        Number.isFinite(playerData.yaw) ? playerData.yaw : 0.7,
        Number.isFinite(playerData.pitch) ? playerData.pitch : -0.08
      );
      if (
        player.position.y < 1 ||
        player.position.y > world.height - 1 ||
        player.position.x < 1 ||
        player.position.x > world.size - 1 ||
        player.position.z < 1 ||
        player.position.z > world.size - 1 ||
        player.collides()
      ) {
        player.respawn();
      }
    }

    this.worldTime = Number.isFinite(time) ? ((time % 1) + 1) % 1 : 0.34;
    this.day = Number.isFinite(day) ? Math.max(1, Math.floor(day)) : 1;
    this.saveTimer = 0;
    this.saveFailed = false;
    this.resetParticles();
    this.applySettings(true);
    this.updateSky(0);
    this.updateMenuCamera(0);
    this.refreshMenuInfo();
  }

  /* ------------------------------------------------------------- transitions */

  setState(state) {
    this.state = state;
    const overlay = state === 'settings' || state === 'help' || state === 'newworld';
    const menuBackdrop = state === 'menu' || (overlay && this.overlayReturn === 'menu');
    const body = document.body;
    body.classList.toggle('in-menu', menuBackdrop);
    body.classList.toggle('playing', state === 'playing');
    body.classList.toggle('inventory', state === 'inventory');
    body.classList.toggle('paused', state === 'paused' || (overlay && this.overlayReturn !== 'menu'));
    body.classList.toggle('loading', state === 'loading');
    this.ui?.setHUDVisible(state === 'playing' || state === 'inventory');
    if (this.heldGroup) this.heldGroup.visible = state === 'playing';
    if (state !== 'playing') {
      this.ui?.setTargeting(false);
      if (this.highlight) this.highlight.visible = false;
    }
  }

  play() {
    if (!this.world || !this.player || this.transitioning) return;
    this.audio.ensure();
    this.ui.hideScreens();
    this.setState('playing');
    this.camera.fov = this.settings.data.graphics.fov;
    this.camera.updateProjectionMatrix();
    this.player.updateCamera(this.camera);
    this.heldGroup.visible = true;
    this.ui.showHint();
    this.clearInput();
    this.saveTimer = 0;
    this.lastTime = performance.now();
    if (!readSave()) this.saveWorld();
    if (!this.isTouch) this.requestPointerLock();
  }

  pause() {
    if (this.state !== 'playing') return;
    this.setState('paused');
    this.ui.showScreen('pause');
    this.ui.setPauseInfo({
      seed: this.worldSeed,
      edits: this.world?.edits.size || 0,
      day: this.day,
    });
    this.ui.hideHint();
    this.ui.setHUDVisible(false);
    this.clearInput();
    this.saveWorld();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.audio.ensure();
    this.ui.showScreen(null);
    this.setState('playing');
    this.camera.fov = this.settings.data.graphics.fov;
    this.camera.updateProjectionMatrix();
    this.player?.updateCamera(this.camera);
    this.heldGroup.visible = true;
    this.clearInput();
    this.lastTime = performance.now();
    if (!this.isTouch) this.requestPointerLock();
  }

  openSettings(from = 'menu') {
    this.overlayReturn = from;
    this.setState('settings');
    this.ui.showScreen('settings');
    this.ui.syncSettings();
    this.ui.setHUDVisible(false);
    this.ui.hideHint();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  closeSettings() {
    if (this.state !== 'settings') return;
    if (this.overlayReturn === 'pause') {
      this.setState('paused');
      this.ui.showScreen('pause');
    } else {
      this.setState('menu');
      this.ui.showScreen('menu');
      this.updateMenuCamera(0);
    }
  }

  openHelp(from = 'menu') {
    this.overlayReturn = from;
    this.setState('help');
    this.ui.showScreen('help');
    this.ui.setHUDVisible(false);
    this.ui.hideHint();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  closeHelp() {
    if (this.state !== 'help') return;
    if (this.overlayReturn === 'pause') {
      this.setState('paused');
      this.ui.showScreen('pause');
    } else {
      this.setState('menu');
      this.ui.showScreen('menu');
      this.updateMenuCamera(0);
    }
  }

  openNewWorld(from = 'menu') {
    this.overlayReturn = from;
    this.setState('newworld');
    this.ui.showScreen('newworld');
    this.ui.setSeedInput('');
    this.ui.setHUDVisible(false);
    this.ui.hideHint();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  closeNewWorld() {
    if (this.state !== 'newworld') return;
    if (this.overlayReturn === 'pause') {
      this.setState('paused');
      this.ui.showScreen('pause');
    } else {
      this.setState('menu');
      this.ui.showScreen('menu');
      this.updateMenuCamera(0);
    }
  }

  async newWorld(seed) {
    if (this.transitioning) return;
    this.transitioning = true;
    this.audio.ensure();
    this.clearInput();
    if (document.pointerLockElement) document.exitPointerLock();
    this.setState('loading');
    this.ui.hideScreens();
    this.ui.showLoading(true);
    this.ui.setLoading(0.01, 'Growing a new island…');
    this.heldGroup.visible = false;
    this.highlight.visible = false;
    if (!this.isTouch) this.requestPointerLock(true);

    try {
      await this.loadWorld({ seed, edits: null, time: 0.34, day: 1, playerData: null });
      this.ui.showLoading(false);
      this.ui.showScreen(null);
      this.setState('playing');
      this.camera.fov = this.settings.data.graphics.fov;
      this.camera.updateProjectionMatrix();
      this.player.updateCamera(this.camera);
      this.heldGroup.visible = true;
      this.saveWorld();
      this.refreshMenuInfo();
      this.ui.toast('New island created');
      this.ui.showHint();
      this.clearInput();
      this.lastTime = performance.now();
      this.pendingLock = !this.isTouch && !this.pointerLocked;
    } catch (error) {
      console.error(error);
      this.ui.showLoading(false);
      this.ui.toast('Could not create that island');
      this.setState('menu');
      this.ui.showScreen('menu');
      this.refreshMenuInfo();
      if (document.pointerLockElement) document.exitPointerLock();
    } finally {
      this.transitioning = false;
    }
  }

  toMenu() {
    if (!this.world) return;
    this.saveWorld();
    this.clearInput();
    this.ui.showScreen('menu');
    this.setState('menu');
    this.ui.hideHint();
    this.ui.setHUDVisible(false);
    this.heldGroup.visible = false;
    this.highlight.visible = false;
    this.camera.fov = 58;
    this.camera.updateProjectionMatrix();
    this.updateMenuCamera(0);
    this.refreshMenuInfo();
    if (document.pointerLockElement) document.exitPointerLock();
    this.lastTime = performance.now();
  }

  openInventory() {
    if (this.state !== 'playing') return;
    this.clearInput();
    this.setState('inventory');
    this.ui.showScreen('inventory');
    this.ui.refreshInventoryEquipped();
    this.ui.setHUDVisible(true);
    this.heldGroup.visible = false;
    this.highlight.visible = false;
    this.ui.hideHint();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  closeInventory() {
    if (this.state !== 'inventory') return;
    this.ui.showScreen(null);
    this.setState('playing');
    this.heldGroup.visible = true;
    this.clearInput();
    this.lastTime = performance.now();
    if (!this.isTouch) this.requestPointerLock();
  }

  equipBlock(id) {
    if (!BLOCKS[id]) return;
    this.ui.setHotbarBlock(this.ui.selectedSlot, id);
    this.ui.selectSlot(this.ui.selectedSlot);
    this.closeInventory();
    this.ui.toast(`${BLOCKS[id].name} equipped`);
  }

  onSlotSelected(id) {
    this.selectedBlockId = id;
    this.updateHeldItem();
  }

  toggleFly() {
    if (this.state !== 'playing' || !this.player) return;
    const flying = this.player.toggleFly();
    this.ui.setFlying(flying);
    this.ui.toast(flying ? 'Flying on' : 'Flying off');
    this.audio.ui();
  }

  /* ------------------------------------------------------------------- input */

  initEvents() {
    window.addEventListener('resize', () => this.onResize());

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      if (this.pointerLocked) {
        this.dragging = false;
        this.pendingLock = false;
      } else if (this.state === 'playing' && !this.isTouch) {
        this.pause();
      }
    });
    document.addEventListener('pointerlockerror', () => {
      this.pointerLocked = false;
    });

    this.canvas.addEventListener('mousedown', (event) => this.onMouseDown(event));
    document.addEventListener('mousemove', (event) => this.onMouseMove(event));
    document.addEventListener('mouseup', (event) => this.onMouseUp(event));
    window.addEventListener('wheel', (event) => this.onWheel(event), { passive: false });
    window.addEventListener('contextmenu', (event) => event.preventDefault());

    this.canvas.addEventListener('pointerdown', (event) => this.onTouchLookStart(event));
    this.canvas.addEventListener('pointermove', (event) => this.onTouchLookMove(event));
    this.canvas.addEventListener('pointerup', (event) => this.onTouchLookEnd(event));
    this.canvas.addEventListener('pointercancel', (event) => this.onTouchLookEnd(event));

    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.onKeyUp(event));

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.saveWorld();
      }
    });
    window.addEventListener('beforeunload', () => this.saveWorld());
  }

  clearInput() {
    this.keys.clear();
    this.touch.axisX = 0;
    this.touch.axisY = 0;
    this.touch.jump = false;
    this.touch.sprint = false;
    this.touch.down = false;
    this.dragging = false;
    this.lookPointer = null;
    this.sprintToggle = false;
    const knob = document.querySelector('#joystick .joystick-knob');
    if (knob) knob.style.transform = 'translate(0, 0)';
    document.querySelectorAll('.touch-btn.is-pressed').forEach((button) => button.classList.remove('is-pressed'));
  }

  requestPointerLock(force = false) {
    if (this.isTouch || document.pointerLockElement === this.canvas) return;
    if (!force && this.state !== 'playing') return;
    try {
      const result = this.canvas.requestPointerLock?.();
      if (result && typeof result.catch === 'function') result.catch(() => {});
    } catch {
      /* pointer lock can be denied by the browser; drag-to-look still works */
    }
  }

  onMouseDown(event) {
    if (this.state !== 'playing' || this.isTouch) return;
    if (this.pointerLocked) {
      if (event.button === 0) this.mineBlock();
      else if (event.button === 2) this.placeBlock();
      else if (event.button === 1) {
        event.preventDefault();
        this.pickBlock();
      }
      return;
    }
    this.dragging = true;
    this.dragButton = event.button;
    this.dragMoved = 0;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
    if (event.button === 0) {
      this.suppressMouseUp = true;
      this.requestPointerLock();
    }
  }

  onMouseMove(event) {
    if (this.state !== 'playing' || this.isTouch || !this.player) return;
    if (this.pointerLocked) {
      this.player.look(event.movementX || 0, event.movementY || 0);
      return;
    }
    if (this.dragging) {
      const dx = event.clientX - this.lastMouseX;
      const dy = event.clientY - this.lastMouseY;
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
      this.dragMoved += Math.abs(dx) + Math.abs(dy);
      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) this.player.look(dx, dy);
    }
  }

  onMouseUp(event) {
    if (this.state !== 'playing' || this.isTouch) return;
    if (!this.dragging) return;
    const moved = this.dragMoved;
    const button = this.dragButton;
    this.dragging = false;
    const suppressed = this.suppressMouseUp;
    this.suppressMouseUp = false;
    if (suppressed || this.pointerLocked) return;
    if (moved > 6) return;
    if (button === 0) this.mineBlock();
    else if (button === 2) this.placeBlock();
    else if (button === 1) this.pickBlock();
  }

  onWheel(event) {
    if (this.state !== 'playing') return;
    event.preventDefault();
    const dir = event.deltaY > 0 ? 1 : -1;
    const next = (this.ui.selectedSlot + dir + 9) % 9;
    this.ui.selectSlot(next);
    this.audio.ui();
  }

  onTouchLookStart(event) {
    if (event.pointerType === 'mouse' || this.state !== 'playing') return;
    if (this.lookPointer !== null) return;
    this.lookPointer = event.pointerId;
    this.lastLookX = event.clientX;
    this.lastLookY = event.clientY;
    this.canvas.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }

  onTouchLookMove(event) {
    if (event.pointerType === 'mouse' || event.pointerId !== this.lookPointer || this.state !== 'playing') return;
    const dx = event.clientX - this.lastLookX;
    const dy = event.clientY - this.lastLookY;
    this.lastLookX = event.clientX;
    this.lastLookY = event.clientY;
    this.player?.lookTouch(dx, dy);
    event.preventDefault();
  }

  onTouchLookEnd(event) {
    if (event.pointerId === this.lookPointer) {
      this.lookPointer = null;
      this.canvas.releasePointerCapture?.(event.pointerId);
    }
  }

  onKeyDown(event) {
    const tag = event.target?.tagName;
    const typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
    if (typing) {
      if (event.code === 'Escape') {
        if (this.state === 'newworld') this.closeNewWorld();
      }
      return;
    }

    if (event.code === 'Escape') {
      if (this.state === 'playing') this.pause();
      else if (this.state === 'paused') this.resume();
      else if (this.state === 'settings') this.closeSettings();
      else if (this.state === 'help') this.closeHelp();
      else if (this.state === 'newworld') this.closeNewWorld();
      else if (this.state === 'inventory') this.closeInventory();
      return;
    }

    if (this.state !== 'playing') return;

    if (event.code.startsWith('Digit')) {
      const n = Number(event.code.slice(5));
      if (n >= 1 && n <= 9) this.ui.selectSlot(n - 1);
    }

    if (event.code === 'KeyE') {
      this.openInventory();
      return;
    }
    if (event.code === 'KeyF') {
      this.toggleFly();
      return;
    }
    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !event.repeat) {
      if (this.settings.data.controls.sprint === 'toggle') this.sprintToggle = !this.sprintToggle;
    }

    this.keys.add(event.code);
    if (event.code === 'Space' || event.code.startsWith('Arrow')) event.preventDefault();
  }

  onKeyUp(event) {
    this.keys.delete(event.code);
  }

  getInput() {
    const controls = this.settings.data.controls;
    const sprint =
      controls.sprint === 'toggle'
        ? this.sprintToggle || this.touch.sprint
        : this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.touch.sprint;
    return {
      forward: this.keys.has('KeyW') || this.keys.has('ArrowUp'),
      back: this.keys.has('KeyS') || this.keys.has('ArrowDown'),
      left: this.keys.has('KeyA') || this.keys.has('ArrowLeft'),
      right: this.keys.has('KeyD') || this.keys.has('ArrowRight'),
      axisX: this.touch.axisX,
      axisY: this.touch.axisY,
      jump: this.keys.has('Space') || this.touch.jump,
      down: this.keys.has('ControlLeft') || this.keys.has('KeyC') || this.touch.down,
      sprint,
    };
  }

  /* ------------------------------------------------------------------- world */

  getTarget(maxDistance = 7.5) {
    if (!this.world || !this.player) return null;
    this.camera.getWorldDirection(this._dir);
    return this.world.raycast(this.camera.position, this._dir, maxDistance);
  }

  updateTarget() {
    if (this.state !== 'playing') {
      this.highlight.visible = false;
      this.ui.setTargeting(false);
      return;
    }
    const target = this.getTarget();
    if (target) {
      this.highlight.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5);
      this.highlight.visible = true;
      this.ui.setTargeting(true);
    } else {
      this.highlight.visible = false;
      this.ui.setTargeting(false);
    }
    this.currentTarget = target;
  }

  mineBlock() {
    if (this.state !== 'playing') return;
    const target = this.getTarget();
    if (!target) return;
    const block = BLOCKS[target.id];
    if (!block?.breakable) {
      if (target.id === BEDROCK) this.ui.toast('Bedrock is unbreakable');
      return;
    }
    this.world.setBlock(target.x, target.y, target.z, AIR);
    const color = this.atlas.color(block.tiles.side);
    this.spawnParticles(target.x + 0.5, target.y + 0.5, target.z + 0.5, color, 12);
    this.audio.breakBlock(block.sound);
    this.swing = 1;
    this.ui.setTargeting(false);
  }

  placeBlock() {
    if (this.state !== 'playing') return;
    const id = this.selectedBlockId;
    if (!id) return;
    const target = this.getTarget();
    if (!target) return;
    const x = target.x + target.normal[0];
    const y = target.y + target.normal[1];
    const z = target.z + target.normal[2];
    if (x < 0 || z < 0 || x >= this.world.size || z >= this.world.size || y < 0 || y >= this.world.height) return;
    const existing = this.world.getBlock(x, y, z);
    if (existing !== AIR && existing !== WATER) return;

    const p = this.player.position;
    const half = this.player.width / 2;
    if (
      x < p.x + half &&
      x + 1 > p.x - half &&
      y < p.y + this.player.height &&
      y + 1 > p.y &&
      z < p.z + half &&
      z + 1 > p.z - half
    ) {
      return;
    }

    this.world.setBlock(x, y, z, id);
    const block = BLOCKS[id];
    const color = this.atlas.color(block.tiles.side);
    this.spawnParticles(x + 0.5, y + 0.5, z + 0.5, color, 4, 0.7);
    this.audio.placeBlock(block.sound);
    this.swing = 1;
  }

  pickBlock() {
    if (this.state !== 'playing') return;
    const target = this.getTarget();
    if (!target) return;
    const id = target.id;
    if (!PLACEABLE.includes(id)) return;
    const existing = this.ui.hotbar.indexOf(id);
    if (existing >= 0) {
      this.ui.selectSlot(existing);
    } else {
      this.ui.setHotbarBlock(this.ui.selectedSlot, id);
      this.ui.selectSlot(this.ui.selectedSlot);
    }
    this.audio.ui();
    this.ui.toast(`${BLOCKS[id].name} selected`);
  }

  spawnParticles(x, y, z, rgb, count = 10, energy = 1) {
    if (!this.particlePool) return;
    const color = new THREE.Color();
    color.setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace);
    for (let i = 0; i < count; i++) {
      const index = this.particleCursor % this.particlePool.length;
      this.particleCursor++;
      const p = this.particlePool[index];
      p.active = true;
      p.x = x + (Math.random() - 0.5) * 0.7;
      p.y = y + (Math.random() - 0.5) * 0.7;
      p.z = z + (Math.random() - 0.5) * 0.7;
      p.vx = (Math.random() - 0.5) * 3.2 * energy;
      p.vy = (1 + Math.random() * 3.2) * energy;
      p.vz = (Math.random() - 0.5) * 3.2 * energy;
      p.life = 0.45 + Math.random() * 0.55;
      p.maxLife = p.life;
      p.size = 0.07 + Math.random() * 0.13;
      p.rx = Math.random() * Math.PI;
      p.ry = Math.random() * Math.PI;
      p.rz = Math.random() * Math.PI;
      p.spin = (Math.random() - 0.5) * 8;
      this.particleMesh.setColorAt(index, color);
    }
    if (this.particleMesh.instanceColor) this.particleMesh.instanceColor.needsUpdate = true;
  }

  resetParticles() {
    if (!this.particlePool) return;
    const dummy = this._dummy;
    dummy.scale.setScalar(0);
    dummy.updateMatrix();
    for (let i = 0; i < this.particlePool.length; i++) {
      this.particlePool[i].active = false;
      this.particlePool[i].life = 0;
      this.particleMesh.setMatrixAt(i, dummy.matrix);
    }
    this.particleMesh.instanceMatrix.needsUpdate = true;
  }

  updateParticles(dt) {
    if (!this.particlePool) return;
    const dummy = this._dummy;
    let changed = false;
    for (let i = 0; i < this.particlePool.length; i++) {
      const p = this.particlePool[i];
      if (!p.active) continue;
      changed = true;
      p.life -= dt;
      if (p.life <= 0) {
        p.active = false;
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        this.particleMesh.setMatrixAt(i, dummy.matrix);
        continue;
      }
      p.vy -= 18 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      p.rx += p.spin * dt;
      p.ry += p.spin * 0.7 * dt;
      p.rz += p.spin * 0.4 * dt;
      const lifeRatio = Math.max(0.05, p.life / p.maxLife);
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rx, p.ry, p.rz);
      dummy.scale.setScalar(p.size * lifeRatio);
      dummy.updateMatrix();
      this.particleMesh.setMatrixAt(i, dummy.matrix);
    }
    if (changed) this.particleMesh.instanceMatrix.needsUpdate = true;
  }

  updateHeldItem() {
    if (!this.heldGroup) return;
    if (this.heldMesh) {
      this.heldGroup.remove(this.heldMesh);
      this.heldMesh.geometry?.dispose();
      this.heldMesh = null;
    }
    const block = BLOCKS[this.selectedBlockId] || BLOCKS[1];
    const geometry = this.buildHeldGeometry(block, 0.36);
    this.heldMesh = new THREE.Mesh(geometry, this.heldMaterial);
    this.heldMesh.renderOrder = 999;
    this.heldMesh.frustumCulled = false;
    this.heldGroup.add(this.heldMesh);
  }

  buildHeldGeometry(block, size) {
    const positions = [];
    const normals = [];
    const uvs = [];
    const colors = [];
    const indices = [];
    for (const face of FACES) {
      const uv = this.atlas.uv(block.tiles[face.key]);
      const base = positions.length / 3;
      for (let c = 0; c < 4; c++) {
        const corner = face.corners[c];
        positions.push((corner[0] - 0.5) * size, (corner[1] - 0.5) * size, (corner[2] - 0.5) * size);
        normals.push(
          face.axis === 0 ? face.dir : 0,
          face.axis === 1 ? face.dir : 0,
          face.axis === 2 ? face.dir : 0
        );
        const uvc = face.uvs[c];
        uvs.push(uv[0] + (uv[2] - uv[0]) * uvc[0], uv[1] + (uv[3] - uv[1]) * uvc[1]);
        colors.push(face.shade, face.shade, face.shade);
      }
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeBoundingSphere();
    return geometry;
  }

  updateHeld(dt) {
    if (!this.heldGroup.visible || !this.heldMesh || !this.player) return;
    this.swing = Math.max(0, this.swing - dt * 5.2);
    const swing = Math.sin((1 - this.swing) * Math.PI);
    const bob = Math.sin(this.time * 2.1) * 0.006 + this.player.bobAmount * Math.sin(this.player.bob * 2) * 0.012;
    const touch = this.isTouch;
    const baseX = touch ? 0.36 : 0.47;
    const baseY = touch ? -0.3 : -0.35;
    const baseZ = touch ? -0.66 : -0.76;
    this.heldGroup.scale.setScalar(touch ? 0.82 : 1);
    this.heldGroup.position.set(
      baseX - swing * 0.07 + Math.cos(this.player.bob) * this.player.bobAmount * 0.01,
      baseY + bob - swing * 0.13,
      baseZ + swing * 0.11
    );
    this.heldGroup.rotation.set(0.2 - swing * 0.42, -0.6 + swing * 0.18, 0.08 - swing * 0.28);
  }

  /* ------------------------------------------------------------------- sky */

  updateMenuCamera(dt) {
    if (!this.world) return;
    this.menuAngle += dt * 0.045;
    const cx = this.world.size / 2;
    const cz = this.world.size / 2;
    const radius = 58;
    this.camera.position.set(
      cx + Math.cos(this.menuAngle) * radius,
      31 + Math.sin(this.menuAngle * 1.7) * 2.4,
      cz + Math.sin(this.menuAngle) * radius
    );
    this.camera.lookAt(cx, 19, cz);
    if (Math.abs(this.camera.fov - 58) > 0.01) {
      this.camera.fov = 58;
      this.camera.updateProjectionMatrix();
    }
  }

  isMenuBackdrop() {
    if (this.state === 'menu') return true;
    if ((this.state === 'settings' || this.state === 'help' || this.state === 'newworld') && this.overlayReturn === 'menu') {
      return true;
    }
    return false;
  }

  updateTime(dt) {
    if (!this.settings.data.game.dayCycle) return;
    const length = Math.max(1, this.settings.data.game.dayLength);
    this.worldTime += dt / (length * 60);
    while (this.worldTime >= 1) {
      this.worldTime -= 1;
      this.day++;
    }
  }

  updateSky(dt) {
    const t = ((this.worldTime % 1) + 1) % 1;
    const angle = (t - 0.25) * Math.PI * 2;
    const sunDir = this._sunDir.set(Math.cos(angle) * 0.92, Math.sin(angle), 0.36).normalize();
    const elevation = sunDir.y;
    const day = smoothstep(-0.09, 0.24, elevation);
    const twilight = clamp01(1 - Math.abs(elevation) * 3.2);
    this.isNight = elevation < -0.055;

    const p = this.palette;
    const top = this._colorA.copy(p.nightTop).lerp(p.dayTop, day);
    top.lerp(p.sunsetTop, twilight * 0.5);
    const horizon = this._colorB.copy(p.nightHorizon).lerp(p.dayHorizon, day);
    horizon.lerp(p.sunsetHorizon, twilight * 0.88);
    const bottom = this._colorC.copy(p.nightBottom).lerp(p.dayBottom, day);
    bottom.lerp(p.sunsetBottom, twilight * 0.6);

    this.skyUniforms.uTop.value.copy(top);
    this.skyUniforms.uHorizon.value.copy(horizon);
    this.skyUniforms.uBottom.value.copy(bottom);
    this.skyUniforms.uSunDir.value.copy(sunDir);
    this.skyUniforms.uSunColor.value.copy(p.sunsetLight).lerp(p.dayLight, day).multiplyScalar(1.2);

    this.sky.position.copy(this.camera.position);

    const menu = this.isMenuBackdrop();
    if (menu && this.world) {
      this._focus.set(this.world.size / 2, 20, this.world.size / 2);
    } else if (this.player) {
      this._focus.copy(this.player.position).add(new THREE.Vector3(0, 1, 0));
    } else if (this.world) {
      this._focus.set(this.world.size / 2, 20, this.world.size / 2);
    }

    const lightDir = this._lightDir.copy(sunDir);
    if (sunDir.y < -0.02) lightDir.negate();
    this.sunLight.position.copy(this._focus).addScaledVector(lightDir, 90);
    this.sunTarget.position.copy(this._focus);
    this.sunTarget.updateMatrixWorld();

    const lightColor = this._colorA.copy(p.nightLight).lerp(p.dayLight, day).lerp(p.sunsetLight, twilight * 0.62);
    this.sunLight.color.copy(lightColor);
    this.sunLight.intensity = 0.26 + day * 2.2 + twilight * 0.3;

    this.hemiLight.color.copy(horizon).lerp(new THREE.Color(0xffffff), 0.24);
    this.hemiLight.groundColor.copy(p.nightGround).lerp(p.dayGround, day);
    this.hemiLight.intensity = 0.16 + day * 0.6;
    this.ambientLight.intensity = 0.055 + day * 0.115;

    this.sunMesh.position.copy(this.camera.position).addScaledVector(sunDir, 260);
    this.moonMesh.position.copy(this.camera.position).addScaledVector(sunDir, -260);
    this.sunMesh.visible = elevation > -0.18;
    this.moonMesh.visible = elevation < 0.18;
    this.sunMaterial.color.setRGB(3.6, 2.9, 1.7).multiplyScalar(0.7 + day * 0.6);
    this.moonMaterial.color.setRGB(1.2, 1.36, 1.72).multiplyScalar(0.7 + (1 - day) * 0.5);

    this.stars.position.copy(this.camera.position);
    this.stars.rotation.y = this.worldTime * Math.PI * 2;
    const starOpacity = clamp01((-elevation - 0.03) * 3.2);
    this.starsVisible = !!this.settings.data.graphics.stars && starOpacity > 0.01;
    this.stars.visible = this.starsVisible;
    this.stars.material.opacity = starOpacity;

    this.cloudMaterial.color
      .copy(p.nightCloud)
      .lerp(p.dayCloud, day)
      .lerp(p.sunsetCloud, twilight * 0.45);
    this.cloudMaterial.opacity = 0.9 + day * 0.06;

    if (this.scene.fog) {
      if (this.player?.headUnderwater) {
        this.scene.fog.color.copy(p.underwater);
        this.scene.fog.near = 0.1;
        this.scene.fog.far = 22;
      } else {
        this.scene.fog.color.copy(horizon).multiplyScalar(0.97);
        this.scene.fog.near = 34;
        this.scene.fog.far = 158;
      }
    }
  }

  updateClouds(dt) {
    if (!this.clouds) return;
    const dummy = this._dummy;
    for (const cloud of this.cloudData) {
      cloud.x += cloud.speed * dt;
      if (cloud.x > 165) cloud.x = -65;
    }
    for (let i = 0; i < this.cloudBoxes.length; i++) {
      const box = this.cloudBoxes[i];
      const cloud = this.cloudData[box.cloud];
      dummy.position.set(cloud.x + box.ox, 61 + box.oy + 6, cloud.z + box.oz);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(box.sx, box.sy, box.sz);
      dummy.updateMatrix();
      this.clouds.setMatrixAt(i, dummy.matrix);
    }
    this.clouds.instanceMatrix.needsUpdate = true;
  }

  /* ------------------------------------------------------------------- hud */

  updateHUD(dt) {
    this.fpsFrames++;
    this.fpsTime += dt;
    if (this.fpsTime >= 0.5) {
      this.fps = Math.round(this.fpsFrames / this.fpsTime);
      this.fpsFrames = 0;
      this.fpsTime = 0;
    }
    this.hudTimer += dt;
    if (this.hudTimer < 0.14) return;
    this.hudTimer = 0;
    if (!this.player) return;
    const t = ((this.worldTime % 1) + 1) % 1;
    const totalMinutes = Math.floor(t * 24 * 60);
    const hh = String(Math.floor(totalMinutes / 60) % 24).padStart(2, '0');
    const mm = String(totalMinutes % 60).padStart(2, '0');
    const coords = `${Math.floor(this.player.position.x)}, ${Math.floor(this.player.position.y)}, ${Math.floor(this.player.position.z)}`;
    this.ui.setHUD({
      clock: `${hh}:${mm}`,
      day: `Day ${this.day}`,
      fps: `${this.fps} fps`,
      coords,
      flying: this.player.flying,
      underwater: this.player.headUnderwater,
    });
  }

  autosave(dt) {
    if (!this.settings.data.game.autosave || this.saveFailed) return;
    if (this.state !== 'playing') return;
    this.saveTimer += dt;
    if (this.saveTimer >= 30) {
      this.saveTimer = 0;
      this.saveWorld();
    }
  }

  saveWorld() {
    if (!this.world || !this.player) return false;
    try {
      const save = {
        version: SAVE_VERSION,
        seed: this.worldSeed,
        edits: this.world.serializeEdits(),
        player: this.player.serialize(),
        time: this.worldTime,
        day: this.day,
        savedAt: Date.now(),
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
      this.refreshMenuInfo();
      return true;
    } catch (error) {
      console.warn('Could not save world', error);
      this.saveFailed = true;
      this.ui?.toast('Could not save — browser storage is full');
      return false;
    }
  }

  readSave() {
    return readSave();
  }

  refreshMenuInfo() {
    if (!this.ui) return;
    const save = readSave();
    const has = save && String(save.seed) === String(this.worldSeed);
    const edits = has && Array.isArray(save.edits) ? save.edits.length : 0;
    this.ui.setMenuInfo({
      seed: this.worldSeed ?? '—',
      save: has ? { day: save.day || 1, edits } : null,
    });
  }

  /* ----------------------------------------------------------------- render */

  onResize() {
    if (this.resizeQueued) return;
    this.resizeQueued = true;
    requestAnimationFrame(() => {
      this.resizeQueued = false;
      this.resizeRenderer();
      this.updateTouchLayout();
      this.ui?.updateDeviceLabel();
    });
  }

  resizeRenderer() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const ratio = Math.min(2, Math.max(0.5, this.settings.data.graphics.resolution));
    if (ratio !== this.lastPixelRatio) {
      this.renderer.setPixelRatio(ratio);
      this.lastPixelRatio = ratio;
      if (this.composer) {
        this.composer.setPixelRatio(ratio);
        this.composer.setSize(w, h);
      }
    }
    this.renderer.setSize(w, h);
    if (this.composer) this.composer.setSize(w, h);
  }

  applySettings(initial = false) {
    if (!this.camera) return;
    const g = this.settings.data.graphics;
    const c = this.settings.data.controls;
    this.camera.fov = this.isMenuBackdrop() ? 58 : g.fov;
    this.camera.updateProjectionMatrix();
    this.renderer.toneMappingExposure = g.brightness;
    const shadows = !!g.shadows;
    if (this.renderer.shadowMap.enabled !== shadows) {
      this.renderer.shadowMap.enabled = shadows;
      if (this.world) {
        for (const material of Object.values(this.world.materials)) material.needsUpdate = true;
      }
    }
    this.sunLight.castShadow = shadows;
    this.sunLight.shadow.needsUpdate = true;
    this.world?.setShadows(shadows);
    if (this.clouds) this.clouds.visible = !!g.clouds;
    if (this.stars) this.stars.visible = !!g.stars && this.starsVisible;
    if (this.player) {
      this.player.sensitivity = c.sensitivity;
      this.player.invertY = !!c.invertY;
      this.player.bobbing = !!g.bobbing;
    }
    this.audio.applyVolumes();
    this.updateTouchLayout();
    this.resizeRenderer();
    if (!initial && this.ui) this.ui.syncSettings();
  }

  updateTouchLayout() {
    const c = this.settings.data.controls;
    const coarse = window.matchMedia?.('(pointer: coarse)').matches;
    const touch = c.touch === 'on' || (c.touch === 'auto' && (coarse || window.innerWidth <= 900));
    this.isTouch = touch;
    this.ui?.setTouchLayout(touch);
    if (touch && document.pointerLockElement) document.exitPointerLock();
  }

  renderScene() {
    if (!this.world) return;
    if (this.settings.data.graphics.bloom) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /* ------------------------------------------------------------------- loop */

  loop = (now) => {
    requestAnimationFrame(this.loop);
    if (!this.lastTime) this.lastTime = now;
    const dt = Math.min(0.05, Math.max(0, (now - this.lastTime) / 1000));
    this.lastTime = now;
    this.time += dt;

    if (!this.world) return;

    const menuBackdrop = this.isMenuBackdrop();
    if (this.state === 'playing') {
      this.player.update(dt, this.getInput());
      this.player.updateCamera(this.camera);
      this.world.update(dt);
      this.updateHeld(dt);
      this.updateParticles(dt);
      this.updateTarget();
      this.updateTime(dt);
      this.updateSky(dt);
      this.updateClouds(dt);
      this.updateHUD(dt);
      this.autosave(dt);
      this.audio.update(dt, { isNight: this.isNight, underwater: this.player.headUnderwater });
    } else if (menuBackdrop) {
      this.updateMenuCamera(dt);
      this.updateTime(dt * 0.35);
      this.world.update(dt);
      this.updateClouds(dt);
      this.updateParticles(dt);
      this.updateSky(dt);
      this.updateHUD(dt);
      this.audio.update(dt, { isNight: this.isNight, underwater: false });
    } else if (this.state === 'inventory') {
      this.player?.updateCamera(this.camera);
      this.world.update(dt * 0.35);
      this.updateClouds(dt * 0.35);
      this.updateParticles(dt);
      this.updateSky(0);
      this.updateHUD(dt);
      this.audio.update(dt, { isNight: this.isNight, underwater: this.player?.headUnderwater });
    } else if (this.state === 'paused') {
      this.player?.updateCamera(this.camera);
      this.world.update(dt * 0.2);
      this.updateClouds(dt * 0.2);
      this.updateParticles(dt * 0.4);
      this.updateSky(0);
      this.audio.update(dt, { isNight: this.isNight, underwater: this.player?.headUnderwater });
    } else if (this.state === 'loading') {
      return;
    } else {
      this.updateSky(0);
      this.updateClouds(0);
      this.audio.update(dt, { isNight: this.isNight, underwater: false });
    }

    this.renderScene();
  };
}

window.addEventListener('DOMContentLoaded', () => {
  window.cubehaven = new Game();
});
