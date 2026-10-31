import { BLOCKS, DEFAULT_HOTBAR, PLACEABLE } from './blocks.js';
import { makeBlockIcon, makeIconDataUrl } from './textures.js';

const HOTBAR_KEY = 'cubehaven.hotbar.v1';

const ADJECTIVES = ['mossy', 'sunny', 'quiet', 'amber', 'hidden', 'wild', 'gentle', 'stony', 'lucky', 'misty', 'golden', 'fern'];
const NOUNS = ['otter', 'harbor', 'meadow', 'ridge', 'cove', 'forest', 'island', 'valley', 'peak', 'lagoon', 'grove', 'shore'];

function randomSeedString() {
  const a = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${a}-${n}-${Math.floor(100 + Math.random() * 900)}`;
}

function loadHotbar() {
  try {
    const raw = localStorage.getItem(HOTBAR_KEY);
    if (!raw) return [...DEFAULT_HOTBAR];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length === 9 && parsed.every((id) => BLOCKS[id] && id !== 0)) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return [...DEFAULT_HOTBAR];
}

export class UI {
  constructor(game) {
    this.game = game;
    this.settings = game.settings;
    this.hotbar = loadHotbar();
    this.selectedSlot = 0;
    this.labelTimer = 0;
    this.hintTimer = 0;
    this.syncing = false;
    this.joyPointer = null;
    this.touchRepeat = null;

    this.el = {
      screens: {
        menu: document.getElementById('screen-menu'),
        pause: document.getElementById('screen-pause'),
        settings: document.getElementById('screen-settings'),
        help: document.getElementById('screen-help'),
        newworld: document.getElementById('screen-newworld'),
        inventory: document.getElementById('screen-inventory'),
      },
      loading: document.getElementById('screen-loading'),
      loadingBar: document.getElementById('loading-bar'),
      loadingPct: document.getElementById('loading-pct'),
      loadingTip: document.getElementById('loading-tip'),
      fade: document.getElementById('fade'),
      hotbar: document.getElementById('hotbar'),
      inventoryGrid: document.getElementById('inventory-grid'),
      inventorySub: document.getElementById('inventory-sub'),
      blockLabel: document.getElementById('block-label'),
      crosshair: document.getElementById('crosshair'),
      clock: document.getElementById('hud-clock'),
      day: document.getElementById('hud-day'),
      fps: document.getElementById('hud-fps'),
      coords: document.getElementById('hud-coords'),
      hint: document.getElementById('hud-hint'),
      toastStack: document.getElementById('toast-stack'),
      playLabel: document.getElementById('play-label'),
      menuSeed: document.getElementById('menu-seed'),
      menuSaveInfo: document.getElementById('menu-save-info'),
      menuDevice: document.getElementById('menu-device'),
      pauseSub: document.getElementById('pause-sub'),
      pauseSeed: document.getElementById('pause-seed'),
      pauseBlocks: document.getElementById('pause-blocks'),
      seedInput: document.getElementById('seed-input'),
      joystick: document.getElementById('joystick'),
      joyKnob: document.querySelector('#joystick .joystick-knob'),
      qualitySeg: document.getElementById('quality-seg'),
      btnFly: document.getElementById('btn-fly'),
      btnPause: document.getElementById('btn-pause'),
      btnInventory: document.getElementById('btn-inventory'),
    };

    this.attachIcons();
    this.buildHotbar();
    this.buildInventory();
    this.bindMenu();
    this.bindSettings();
    this.bindPause();
    this.bindHelp();
    this.bindNewWorld();
    this.bindInventory();
    this.bindTouch();
    this.bindGlobal();
    this.syncSettings();
    this.updateDeviceLabel();
    this.selectSlot(0, { silent: true });
  }

  attachIcons() {
    const grass = BLOCKS[1];
    const logo = document.getElementById('logo-icon');
    const loading = document.getElementById('loading-icon');
    if (logo) logo.src = makeIconDataUrl(grass.tiles, 168);
    if (loading) loading.src = makeIconDataUrl(grass.tiles, 192);
  }

  /* ------------------------------------------------------------------ hotbar */

  buildHotbar() {
    this.el.hotbar.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'slot';
      slot.dataset.index = String(i);
      slot.setAttribute('aria-label', `Hotbar slot ${i + 1}`);
      const num = document.createElement('span');
      num.className = 'slot-num';
      num.textContent = String(i + 1);
      slot.appendChild(num);
      slot.appendChild(this.makeSlotIcon(this.hotbar[i]));
      slot.addEventListener('click', () => {
        this.selectSlot(i);
        this.game.audio.ui();
      });
      this.el.hotbar.appendChild(slot);
    }
    this.refreshHotbar();
  }

  makeSlotIcon(id) {
    const block = BLOCKS[id] || BLOCKS[1];
    return makeBlockIcon(block.tiles, 64);
  }

  refreshHotbar() {
    const slots = this.el.hotbar.querySelectorAll('.slot');
    slots.forEach((slot, i) => {
      const old = slot.querySelector('canvas');
      if (old) old.remove();
      slot.appendChild(this.makeSlotIcon(this.hotbar[i]));
      slot.classList.toggle('is-active', i === this.selectedSlot);
    });
  }

  refreshSlot(i) {
    const slot = this.el.hotbar.querySelector(`.slot[data-index="${i}"]`);
    if (!slot) return;
    const old = slot.querySelector('canvas');
    if (old) old.remove();
    slot.appendChild(this.makeSlotIcon(this.hotbar[i]));
  }

  selectSlot(i, { silent = false } = {}) {
    this.selectedSlot = Math.max(0, Math.min(8, i));
    this.el.hotbar.querySelectorAll('.slot').forEach((slot, index) => {
      slot.classList.toggle('is-active', index === this.selectedSlot);
    });
    const id = this.hotbar[this.selectedSlot];
    this.game.onSlotSelected?.(id);
    if (!silent) {
      this.showBlockLabel(BLOCKS[id]?.name || 'Block');
      this.refreshInventoryEquipped();
    }
    this.saveHotbar();
  }

  setHotbarBlock(slot, id) {
    if (!BLOCKS[id] || id === 0) return;
    this.hotbar[slot] = id;
    this.refreshSlot(slot);
    this.saveHotbar();
    if (slot === this.selectedSlot) this.game.onSlotSelected?.(id);
    this.refreshInventoryEquipped();
  }

  saveHotbar() {
    try {
      localStorage.setItem(HOTBAR_KEY, JSON.stringify(this.hotbar));
    } catch {
      /* ignore */
    }
  }

  showBlockLabel(name) {
    this.el.blockLabel.textContent = name;
    this.el.blockLabel.classList.add('is-visible');
    clearTimeout(this.labelTimer);
    this.labelTimer = setTimeout(() => this.el.blockLabel.classList.remove('is-visible'), 1500);
  }

  /* --------------------------------------------------------------- inventory */

  buildInventory() {
    this.el.inventoryGrid.innerHTML = '';
    for (const id of PLACEABLE) {
      const block = BLOCKS[id];
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'inv-item';
      item.dataset.id = String(id);
      item.appendChild(makeBlockIcon(block.tiles, 96));
      const name = document.createElement('span');
      name.textContent = block.name;
      item.appendChild(name);
      const dot = document.createElement('i');
      dot.className = 'equipped-dot';
      item.appendChild(dot);
      item.addEventListener('click', () => {
        this.game.audio.ui();
        this.game.equipBlock(id);
      });
      this.el.inventoryGrid.appendChild(item);
    }
  }

  refreshInventoryEquipped() {
    const equipped = this.hotbar[this.selectedSlot];
    this.el.inventoryGrid.querySelectorAll('.inv-item').forEach((item) => {
      item.classList.toggle('is-equipped', Number(item.dataset.id) === equipped);
    });
    if (this.el.inventorySub) {
      this.el.inventorySub.textContent = `Choose a block for hotbar slot ${this.selectedSlot + 1}.`;
    }
  }

  /* ------------------------------------------------------------------ screens */

  showScreen(name) {
    for (const [key, screen] of Object.entries(this.el.screens)) {
      screen.classList.toggle('is-open', key === name);
      screen.setAttribute('aria-hidden', key === name ? 'false' : 'true');
    }
  }

  hideScreens() {
    this.showScreen(null);
  }

  setLoading(progress, text) {
    const pct = Math.max(0, Math.min(100, Math.round(progress * 100)));
    this.el.loadingBar.style.width = `${pct}%`;
    this.el.loadingPct.textContent = `${pct}%`;
    if (text) this.el.loadingTip.textContent = text;
  }

  showLoading(show) {
    this.el.loading.classList.toggle('is-open', show);
    if (show) this.setLoading(0, 'Shaping the island…');
  }

  fade(on) {
    this.el.fade.classList.toggle('is-visible', on);
  }

  /* -------------------------------------------------------------------- menu */

  bindMenu() {
    document.getElementById('btn-play').addEventListener('click', () => {
      this.game.audio.ui();
      this.game.play();
    });
    document.getElementById('btn-new').addEventListener('click', () => {
      this.game.audio.ui();
      this.game.openNewWorld('menu');
    });
    document.getElementById('btn-settings').addEventListener('click', () => {
      this.game.audio.ui();
      this.game.openSettings('menu');
    });
    document.getElementById('btn-help').addEventListener('click', () => {
      this.game.audio.ui();
      this.game.openHelp('menu');
    });
  }

  /* ---------------------------------------------------------------- settings */

  bindSettings() {
    const inputs = document.querySelectorAll('[data-setting]');
    inputs.forEach((input) => {
      if (input.matches('input[type="checkbox"]')) {
        input.addEventListener('change', () => {
          this.settings.set(input.dataset.setting, input.checked);
          this.game.audio.ui();
        });
      } else if (input.matches('input[type="range"]')) {
        const output = input.parentElement.querySelector('output');
        const update = () => {
          if (output) output.textContent = this.formatValue(input.value, input.dataset.format);
        };
        update();
        input.addEventListener('input', () => {
          update();
          this.settings.set(input.dataset.setting, Number(input.value));
        });
      } else if (input.matches('[data-seg]')) {
        input.querySelectorAll('button').forEach((button) => {
          button.addEventListener('click', () => {
            this.settings.set(input.dataset.setting, button.dataset.value);
            this.game.audio.ui();
          });
        });
      }
    });

    document.querySelectorAll('[data-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('[data-tab]').forEach((t) => t.classList.toggle('is-active', t === tab));
        document.querySelectorAll('[data-panel]').forEach((panel) => {
          panel.classList.toggle('is-active', panel.dataset.panel === tab.dataset.tab);
        });
      });
    });

    document.querySelectorAll('#quality-seg button').forEach((button) => {
      button.addEventListener('click', () => {
        this.settings.applyQuality(button.dataset.quality);
        this.game.audio.ui();
        this.toast(`${button.textContent.trim()} quality`);
      });
    });

    document.getElementById('btn-settings-close').addEventListener('click', () => this.game.closeSettings());
    document.getElementById('btn-settings-done').addEventListener('click', () => this.game.closeSettings());
    document.getElementById('btn-reset-settings').addEventListener('click', () => {
      this.settings.reset();
      this.game.audio.ui();
      this.toast('Settings reset to defaults');
    });

    this.settings.onChange(() => {
      this.syncSettings();
      this.game.applySettings();
    });
  }

  formatValue(value, format) {
    const v = Number(value);
    switch (format) {
      case 'deg':
        return `${Math.round(v)}°`;
      case 'scale':
        return `${v.toFixed(2)}×`;
      case 'pct':
        return `${Math.round(v * 100)}%`;
      case 'mult':
        return `${v.toFixed(1)}×`;
      case 'min':
        return `${Math.round(v)} min`;
      default:
        return String(value);
    }
  }

  syncSettings() {
    this.syncing = true;
    document.querySelectorAll('[data-setting]').forEach((input) => {
      const value = this.settings.get(input.dataset.setting);
      if (input.matches('input[type="checkbox"]')) {
        input.checked = !!value;
      } else if (input.matches('input[type="range"]')) {
        input.value = String(value);
        const output = input.parentElement.querySelector('output');
        if (output) output.textContent = this.formatValue(input.value, input.dataset.format);
      } else if (input.matches('[data-seg]')) {
        input.querySelectorAll('button').forEach((button) => {
          button.classList.toggle('is-active', button.dataset.value === value);
        });
      }
    });
    const quality = this.settings.get('graphics.quality');
    this.el.qualitySeg.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.quality === quality);
    });
    document.body.classList.toggle('hide-fps', !this.settings.get('game.showFps'));
    document.body.classList.toggle('hide-coords', !this.settings.get('game.showCoords'));
    document.body.classList.toggle('left-handed', !!this.settings.get('controls.leftHanded'));
    this.syncing = false;
  }

  /* -------------------------------------------------------------------- pause */

  bindPause() {
    document.getElementById('btn-resume').addEventListener('click', () => this.game.resume());
    document.getElementById('btn-pause-settings').addEventListener('click', () => this.game.openSettings('pause'));
    document.getElementById('btn-save').addEventListener('click', () => {
      this.game.saveWorld();
      this.toast('World saved');
    });
    document.getElementById('btn-pause-new').addEventListener('click', () => this.game.openNewWorld('pause'));
    document.getElementById('btn-menu').addEventListener('click', () => this.game.toMenu());
    this.el.btnPause.addEventListener('click', () => this.game.pause());
  }

  setPauseInfo({ seed, edits, day }) {
    this.el.pauseSeed.textContent = `Seed ${seed}`;
    this.el.pauseBlocks.textContent = `${edits} block${edits === 1 ? '' : 's'} changed`;
    this.el.pauseSub.textContent = `Day ${day} · Your island is waiting.`;
  }

  /* --------------------------------------------------------------------- help */

  bindHelp() {
    document.getElementById('btn-help-close').addEventListener('click', () => this.game.closeHelp());
    document.getElementById('btn-help-done').addEventListener('click', () => this.game.closeHelp());
  }

  /* ---------------------------------------------------------------- new world */

  bindNewWorld() {
    document.getElementById('btn-new-close').addEventListener('click', () => this.game.closeNewWorld());
    document.getElementById('btn-new-cancel').addEventListener('click', () => this.game.closeNewWorld());
    document.getElementById('btn-random-seed').addEventListener('click', () => {
      this.el.seedInput.value = randomSeedString();
      this.el.seedInput.focus();
      this.game.audio.ui();
    });
    document.querySelectorAll('.seed-chips .chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        this.el.seedInput.value = chip.dataset.seed;
        this.game.audio.ui();
      });
    });
    document.getElementById('btn-new-create').addEventListener('click', () => {
      const seed = this.el.seedInput.value.trim() || randomSeedString();
      this.game.newWorld(seed);
    });
    this.el.seedInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const seed = this.el.seedInput.value.trim() || randomSeedString();
        this.game.newWorld(seed);
      }
    });
  }

  /* ----------------------------------------------------------------- inventory */

  bindInventory() {
    document.getElementById('btn-inventory-close').addEventListener('click', () => this.game.closeInventory());
    document.getElementById('btn-inventory-done').addEventListener('click', () => this.game.closeInventory());
    this.el.btnInventory.addEventListener('click', () => this.game.openInventory());
  }

  /* --------------------------------------------------------------------- touch */

  bindTouch() {
    const joy = this.el.joystick;
    const knob = this.el.joyKnob;

    const updateJoy = (event) => {
      const rect = joy.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const max = rect.width * 0.31;
      let dx = event.clientX - cx;
      let dy = event.clientY - cy;
      const len = Math.hypot(dx, dy);
      if (len > max) {
        dx = (dx / len) * max;
        dy = (dy / len) * max;
      }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.game.touch.axisX = dx / max;
      this.game.touch.axisY = -dy / max;
      this.game.touch.sprint = Math.hypot(dx, dy) / max > 0.9;
    };

    joy.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.joyPointer = event.pointerId;
      joy.setPointerCapture?.(event.pointerId);
      updateJoy(event);
    });
    joy.addEventListener('pointermove', (event) => {
      if (event.pointerId !== this.joyPointer) return;
      event.preventDefault();
      updateJoy(event);
    });
    const endJoy = (event) => {
      if (event && event.pointerId !== this.joyPointer) return;
      this.joyPointer = null;
      knob.style.transform = 'translate(0, 0)';
      this.game.touch.axisX = 0;
      this.game.touch.axisY = 0;
      this.game.touch.sprint = false;
    };
    joy.addEventListener('pointerup', endJoy);
    joy.addEventListener('pointercancel', endJoy);
    joy.addEventListener('lostpointercapture', endJoy);

    const jump = document.getElementById('btn-jump');
    const setJump = (on) => {
      this.game.touch.jump = on;
      jump.classList.toggle('is-pressed', on);
    };
    jump.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      setJump(true);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((type) => {
      jump.addEventListener(type, (event) => {
        event.preventDefault?.();
        setJump(false);
      });
    });

    this.bindRepeatButton(document.getElementById('btn-break'), () => this.game.mineBlock());
    this.bindRepeatButton(document.getElementById('btn-place'), () => this.game.placeBlock());

    this.el.btnFly.addEventListener('click', () => this.game.toggleFly());
  }

  bindRepeatButton(button, action) {
    let timer = null;
    let interval = null;
    const stop = () => {
      button.classList.remove('is-pressed');
      clearTimeout(timer);
      clearInterval(interval);
      timer = null;
      interval = null;
    };
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      button.classList.add('is-pressed');
      action();
      timer = setTimeout(() => {
        interval = setInterval(action, 240);
      }, 280);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((type) => {
      button.addEventListener(type, (event) => {
        event.preventDefault?.();
        stop();
      });
    });
  }

  setTouchLayout(touch) {
    document.body.classList.toggle('touch', !!touch);
  }

  setFlying(flying) {
    document.body.classList.toggle('is-flying', !!flying);
    this.el.btnFly.classList.toggle('is-active', !!flying);
  }

  updateDeviceLabel() {
    const w = window.innerWidth;
    const coarse = window.matchMedia?.('(pointer: coarse)').matches;
    let label = 'Desktop';
    if (w < 700 || (coarse && w < 1000)) label = 'Phone';
    else if (w < 1180 || coarse) label = 'Tablet';
    if (this.el.menuDevice) this.el.menuDevice.textContent = label;
  }

  /* ----------------------------------------------------------------------- hud */

  setHUDVisible(visible) {
    document.getElementById('hud').setAttribute('aria-hidden', visible ? 'false' : 'true');
  }

  setHUD({ clock, day, fps, coords, flying, underwater }) {
    if (clock && clock !== this.lastClock) {
      this.el.clock.textContent = clock;
      this.lastClock = clock;
    }
    if (day && day !== this.lastDay) {
      this.el.day.textContent = day;
      this.lastDay = day;
    }
    if (fps && fps !== this.lastFps) {
      this.el.fps.textContent = fps;
      this.lastFps = fps;
    }
    if (coords && coords !== this.lastCoords) {
      this.el.coords.textContent = coords;
      this.lastCoords = coords;
    }
    if (typeof flying === 'boolean') this.setFlying(flying);
    if (typeof underwater === 'boolean') {
      document.body.classList.toggle('underwater', underwater);
    }
  }

  setTargeting(targeting) {
    this.el.crosshair.classList.toggle('targeting', !!targeting);
  }

  showHint() {
    this.el.hint.classList.add('is-visible');
    clearTimeout(this.hintTimer);
    this.hintTimer = setTimeout(() => this.el.hint.classList.remove('is-visible'), 8000);
  }

  hideHint() {
    this.el.hint.classList.remove('is-visible');
  }

  /* -------------------------------------------------------------------- misc */

  toast(text) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    const cube = document.createElement('span');
    cube.className = 'toast-cube';
    toast.appendChild(cube);
    const label = document.createElement('span');
    label.textContent = text;
    toast.appendChild(label);
    this.el.toastStack.appendChild(toast);
    while (this.el.toastStack.children.length > 3) {
      this.el.toastStack.firstElementChild?.remove();
    }
    setTimeout(() => {
      toast.classList.add('is-out');
      setTimeout(() => toast.remove(), 260);
    }, 2300);
  }

  setMenuInfo({ seed, save }) {
    this.el.menuSeed.textContent = `Seed · ${seed}`;
    if (save) {
      this.el.playLabel.textContent = 'Continue world';
      this.el.menuSaveInfo.textContent = `Day ${save.day || 1} · ${save.edits} block${save.edits === 1 ? '' : 's'} changed`;
    } else {
      this.el.playLabel.textContent = 'Play world';
      this.el.menuSaveInfo.textContent = 'Fresh island';
    }
  }

  setSeedInput(value = '') {
    this.el.seedInput.value = value;
  }

  bindGlobal() {
    window.addEventListener('resize', () => this.updateDeviceLabel());
    window.addEventListener('contextmenu', (event) => event.preventDefault());
    document.addEventListener('gesturestart', (event) => event.preventDefault());
    document.querySelectorAll('.btn, .icon-btn, .touch-btn, .tab, .chip, .inv-item, .slot').forEach((button) => {
      button.addEventListener('pointerdown', () => this.game.audio?.ensure?.());
    });
  }
}
