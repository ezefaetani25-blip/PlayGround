export class AudioManager {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.master = null;
    this.ambientGain = null;
    this.noiseBuffer = null;
    this.ambientStarted = false;
    this.birdTimer = null;
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.settings.volume ?? 0.7;
    this.master.connect(this.ctx.destination);
    this.noiseBuffer = this.createNoiseBuffer(2.5);
    this.startAmbient();
  }

  createNoiseBuffer(seconds) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i += 1) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.4;
    }
    return buffer;
  }

  setVolume(value) {
    this.settings.volume = value;
    if (!this.master || !this.ctx) return;
    this.master.gain.setTargetAtTime(value, this.ctx.currentTime, 0.06);
  }

  setAmbient(enabled) {
    this.settings.ambient = enabled;
    if (!this.ambientGain || !this.ctx) return;
    this.ambientGain.gain.setTargetAtTime(enabled ? 0.055 : 0, this.ctx.currentTime, 0.8);
  }

  startAmbient() {
    if (this.ambientStarted || !this.ctx) return;
    this.ambientStarted = true;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    source.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 620;
    filter.Q.value = 0.3;
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.value = this.settings.ambient === false ? 0 : 0.055;
    source.connect(filter);
    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.master);
    source.start();
    this.scheduleBird();
  }

  scheduleBird() {
    clearTimeout(this.birdTimer);
    this.birdTimer = setTimeout(() => {
      if (this.settings.ambient !== false && this.ctx?.state === 'running') this.bird();
      this.scheduleBird();
    }, 6000 + Math.random() * 11000);
  }

  bird() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const base = 1450 + Math.random() * 850;
    for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i += 1) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(base * (1 + i * 0.08), now + i * 0.09);
      osc.frequency.exponentialRampToValueAtTime(base * 1.45, now + i * 0.09 + 0.05);
      gain.gain.setValueAtTime(0.0001, now + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.012, now + i * 0.09 + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.09 + 0.1);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(now + i * 0.09);
      osc.stop(now + i * 0.09 + 0.13);
    }
  }

  tone(frequency, duration, gainValue, type = 'sine', slide = 0) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, frequency + slide), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  noise(duration, frequency, gainValue, type = 'bandpass') {
    if (!this.ctx || this.ctx.state !== 'running' || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = frequency;
    filter.Q.value = 0.7;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    source.start(now);
    source.stop(now + duration + 0.02);
  }

  click() {
    this.tone(520, 0.045, 0.03, 'triangle', 120);
  }

  select() {
    this.tone(420, 0.055, 0.022, 'triangle', 80);
  }

  breakBlock() {
    this.noise(0.18, 680, 0.12, 'bandpass');
    this.tone(112, 0.13, 0.07, 'sine', -35);
  }

  placeBlock() {
    this.tone(118, 0.1, 0.09, 'sine', -30);
    this.noise(0.06, 900, 0.035, 'highpass');
  }

  step() {
    this.noise(0.075, 330, 0.026, 'lowpass');
  }

  jump() {
    this.tone(210, 0.08, 0.03, 'sine', 40);
  }

  denied() {
    this.tone(140, 0.14, 0.04, 'square', -20);
  }

  whoosh() {
    this.noise(0.22, 1200, 0.045, 'bandpass');
  }

  save() {
    this.tone(660, 0.09, 0.03, 'sine');
    setTimeout(() => this.tone(880, 0.14, 0.025, 'sine'), 70);
  }
}
