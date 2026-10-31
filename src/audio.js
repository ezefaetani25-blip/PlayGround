const SOUND_FILTERS = {
  grass: 1150,
  dirt: 850,
  stone: 720,
  wood: 520,
  sand: 1500,
  glass: 2300,
  wool: 380,
  gravel: 950,
  snow: 1400,
  water: 900,
  none: 800,
};

export class AudioManager {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.ready = false;
    this.master = null;
    this.sfx = null;
    this.ambient = null;
    this.noiseBuffer = null;
    this.ambientSource = null;
    this.nextBird = 4 + Math.random() * 7;
    this.nextCricket = 1 + Math.random() * 3;
    this.lastStep = 0;
    this.stepFlip = false;
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.sfx = this.ctx.createGain();
      this.ambient = this.ctx.createGain();
      this.sfx.connect(this.master);
      this.ambient.connect(this.master);
      this.master.connect(this.ctx.destination);
      this.noiseBuffer = this.makeNoise(2);
      this.applyVolumes();
      this.startAmbient();
      this.ready = true;
    } catch {
      this.ctx = null;
    }
  }

  makeNoise(seconds) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  applyVolumes() {
    if (!this.ctx) return;
    const a = this.settings.data.audio;
    const now = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(Math.max(0, a.master), now, 0.03);
    this.sfx.gain.setTargetAtTime(Math.max(0, a.sfx), now, 0.03);
    this.ambient.gain.setTargetAtTime(Math.max(0, a.ambient) * 0.55, now, 0.05);
  }

  startAmbient() {
    if (!this.ctx || this.ambientSource) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 340;
    filter.Q.value = 0.6;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.16;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambient);
    src.start();
    this.ambientSource = src;
    this.ambientGain = gain;
  }

  noiseHit({ duration = 0.12, gain = 0.2, type = 'bandpass', freq = 800, q = 0.8, slide = 0 }) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = 0.85 + Math.random() * 0.3;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, now);
    if (slide) filter.frequency.exponentialRampToValueAtTime(Math.max(80, freq + slide), now + duration);
    filter.Q.value = q;
    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0.0001, now);
    env.gain.exponentialRampToValueAtTime(gain, now + 0.008);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    src.connect(filter);
    filter.connect(env);
    env.connect(this.sfx);
    src.start(now);
    src.stop(now + duration + 0.02);
  }

  tone({ freq = 440, endFreq = freq, duration = 0.1, gain = 0.08, type = 'sine', delay = 0 }) {
    if (!this.ready) return;
    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + duration);
    env.gain.setValueAtTime(0.0001, now);
    env.gain.exponentialRampToValueAtTime(gain, now + 0.008);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(env);
    env.connect(this.sfx);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  ui() {
    this.tone({ freq: 720, endFreq: 520, duration: 0.06, gain: 0.05, type: 'triangle' });
  }

  breakBlock(sound = 'stone') {
    const freq = SOUND_FILTERS[sound] || 800;
    this.noiseHit({ duration: 0.17, gain: 0.22, type: 'bandpass', freq, q: 0.7, slide: -freq * 0.35 });
    this.tone({ freq: sound === 'stone' ? 120 : 180, endFreq: 70, duration: 0.09, gain: 0.07, type: 'sine' });
  }

  placeBlock(sound = 'stone') {
    const freq = (SOUND_FILTERS[sound] || 800) * 1.2;
    this.noiseHit({ duration: 0.07, gain: 0.16, type: 'lowpass', freq, q: 0.6 });
    this.tone({ freq: 150, endFreq: 92, duration: 0.08, gain: 0.07, type: 'sine' });
  }

  step(sound = 'grass') {
    const now = performance.now();
    if (now - this.lastStep < 230) return;
    this.lastStep = now;
    this.stepFlip = !this.stepFlip;
    const freq = (SOUND_FILTERS[sound] || 900) * (this.stepFlip ? 1.05 : 0.9);
    this.noiseHit({ duration: 0.055, gain: 0.055, type: 'lowpass', freq, q: 0.7 });
  }

  jump() {
    this.noiseHit({ duration: 0.08, gain: 0.05, type: 'highpass', freq: 500 });
  }

  land() {
    this.noiseHit({ duration: 0.1, gain: 0.09, type: 'lowpass', freq: 420 });
    this.tone({ freq: 90, endFreq: 55, duration: 0.08, gain: 0.05, type: 'sine' });
  }

  splash() {
    this.noiseHit({ duration: 0.35, gain: 0.12, type: 'lowpass', freq: 1100, q: 0.5, slide: -600 });
  }

  bird() {
    const base = 1500 + Math.random() * 900;
    const count = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      this.tone({
        freq: base + Math.random() * 400,
        endFreq: base + 500 + Math.random() * 500,
        duration: 0.07 + Math.random() * 0.05,
        gain: 0.022,
        type: 'sine',
        delay: i * (0.09 + Math.random() * 0.06),
      });
    }
  }

  cricket() {
    for (let i = 0; i < 3; i++) {
      this.tone({ freq: 4300, endFreq: 3900, duration: 0.03, gain: 0.012, type: 'square', delay: i * 0.06 });
    }
  }

  update(dt, { isNight = false, underwater = false } = {}) {
    if (!this.ready) return;
    if (underwater) return;
    this.nextBird -= dt;
    this.nextCricket -= dt;
    if (!isNight && this.nextBird <= 0) {
      this.bird();
      this.nextBird = 5 + Math.random() * 11;
    }
    if (isNight && this.nextCricket <= 0) {
      this.cricket();
      this.nextCricket = 0.7 + Math.random() * 2.2;
    }
  }
}
