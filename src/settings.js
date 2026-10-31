const KEY = 'cubehaven.settings.v1';

const isSmallDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(pointer: coarse)').matches || window.innerWidth < 900;
};

export function makeDefaults() {
  const small = isSmallDevice();
  return {
    graphics: {
      shadows: true,
      bloom: !small,
      resolution: small ? 1 : 1.5,
      fov: small ? 80 : 75,
      brightness: 1,
      clouds: true,
      stars: true,
      bobbing: !small,
      quality: small ? 'balanced' : 'high',
    },
    controls: {
      sensitivity: small ? 1.2 : 1,
      invertY: false,
      sprint: 'hold',
      touch: 'auto',
      leftHanded: false,
    },
    audio: {
      master: 0.7,
      sfx: 0.8,
      ambient: 0.5,
    },
    game: {
      dayCycle: true,
      dayLength: 8,
      showFps: false,
      showCoords: true,
      autosave: true,
    },
  };
}

export const QUALITY_PRESETS = {
  low: { shadows: false, bloom: false, resolution: 1, clouds: true, stars: true },
  balanced: { shadows: true, bloom: false, resolution: 1.25, clouds: true, stars: true },
  high: { shadows: true, bloom: true, resolution: 1.5, clouds: true, stars: true },
  ultra: { shadows: true, bloom: true, resolution: 2, clouds: true, stars: true },
};

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function merge(base, patch) {
  const out = deepClone(base);
  if (!patch || typeof patch !== 'object') return out;
  for (const [key, value] of Object.entries(patch)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      out[key] = merge(out[key] || {}, value);
    } else if (typeof value === typeof out[key] || out[key] === undefined) {
      out[key] = value;
    }
  }
  return out;
}

export class Settings {
  constructor() {
    this.defaults = makeDefaults();
    this.data = deepClone(this.defaults);
    this.listeners = new Set();
    this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) this.data = merge(this.defaults, JSON.parse(raw));
    } catch {
      this.data = deepClone(this.defaults);
    }
  }

  save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(this.data));
    } catch {
      /* storage may be unavailable; settings simply won't persist */
    }
  }

  get(path) {
    return path.split('.').reduce((acc, part) => acc?.[part], this.data);
  }

  set(path, value, { silent = false } = {}) {
    const parts = path.split('.');
    let target = this.data;
    for (let i = 0; i < parts.length - 1; i++) {
      target = target[parts[i]];
      if (!target) return;
    }
    if (target[parts[parts.length - 1]] === value) return;
    target[parts[parts.length - 1]] = value;
    this.save();
    if (!silent) this.emit(path, value);
  }

  setMany(patch, { silent = false } = {}) {
    this.data = merge(this.data, patch);
    this.save();
    if (!silent) this.emit('*', this.data);
  }

  applyQuality(name) {
    const preset = QUALITY_PRESETS[name];
    if (!preset) return;
    this.setMany({ graphics: { ...preset, quality: name } });
  }

  reset() {
    this.data = deepClone(this.defaults);
    this.save();
    this.emit('*', this.data);
  }

  onChange(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  emit(path, value) {
    for (const listener of this.listeners) listener(path, value, this.data);
  }
}
