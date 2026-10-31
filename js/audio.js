/* Tiny procedural dream soundtrack — no audio files. */

const PENTATONIC = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66];

export class DreamAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.reverb = null;
    this.padGain = null;
    this.muted = false;
    this.started = false;
    this.noteIndex = 0;
    this.ambientTimer = null;
  }

  start() {
    if (this.started) {
      this.ctx?.resume?.();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.started = true;

    const ctx = new AC();
    this.ctx = ctx;

    const master = ctx.createGain();
    master.gain.value = 0.0001;
    this.master = master;

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20;
    comp.knee.value = 18;
    comp.ratio.value = 3.5;
    comp.attack.value = 0.02;
    comp.release.value = 0.4;
    master.connect(comp);
    comp.connect(ctx.destination);

    // generated hall reverb
    const len = Math.floor(ctx.sampleRate * 4.5);
    const impulse = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.6) * (1 - t * 0.2);
      }
    }
    const conv = ctx.createConvolver();
    conv.buffer = impulse;
    const wet = ctx.createGain();
    wet.gain.value = 0.5;
    conv.connect(wet);
    wet.connect(master);
    this.reverb = conv;

    // warm evolving pad
    const padGain = ctx.createGain();
    padGain.gain.value = 0.0;
    this.padGain = padGain;

    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 640;
    padFilter.Q.value = 0.6;
    padGain.connect(padFilter);
    padFilter.connect(master);
    padFilter.connect(conv);

    const freqs = [98.0, 146.83, 196.0, 293.66];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 3 ? 'triangle' : 'sine';
      osc.frequency.value = f;
      osc.detune.value = (i % 2 ? 4 : -4) + (i === 2 ? 7 : 0);
      const g = ctx.createGain();
      g.gain.value = i === 3 ? 0.035 : 0.075;
      osc.connect(g);
      g.connect(padGain);
      osc.start();
    });

    // filter drift
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.035;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 300;
    lfo.connect(lfoGain);
    lfoGain.connect(padFilter.frequency);
    lfo.start();

    // pad volume swell
    const swell = ctx.createOscillator();
    swell.frequency.value = 0.018;
    const swellGain = ctx.createGain();
    swellGain.gain.value = 0.012;
    swell.connect(swellGain);
    swellGain.connect(padGain.gain);
    swell.start();
    padGain.gain.setValueAtTime(0.075, ctx.currentTime);

    // wind: filtered noise loop
    const noiseLen = ctx.sampleRate * 5;
    const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) nd[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;
    const nf = ctx.createBiquadFilter();
    nf.type = 'bandpass';
    nf.frequency.value = 480;
    nf.Q.value = 0.8;
    const ng = ctx.createGain();
    ng.gain.value = 0.028;
    noise.connect(nf);
    nf.connect(ng);
    ng.connect(master);
    noise.start();

    const windLfo = ctx.createOscillator();
    windLfo.frequency.value = 0.06;
    const windGain = ctx.createGain();
    windGain.gain.value = 240;
    windLfo.connect(windGain);
    windGain.connect(nf.frequency);
    windLfo.start();

    this.master.gain.setTargetAtTime(this.muted ? 0.0001 : 0.62, ctx.currentTime, 2.5);

    // occasional faraway bells
    const scheduleBell = () => {
      if (!this.started) return;
      this.ambientTimer = window.setTimeout(() => {
        this.bell(PENTATONIC[Math.floor(Math.random() * 4)] / 2, 0.055, 3.5);
        scheduleBell();
      }, 9000 + Math.random() * 13000);
    };
    scheduleBell();
  }

  setMuted(muted) {
    this.muted = muted;
    if (!this.ctx || !this.master) return;
    this.master.gain.setTargetAtTime(muted ? 0.0001 : 0.62, this.ctx.currentTime, 0.35);
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  tone(freq, duration, vol, type = 'sine', pan = 0, delay = 0) {
    const ctx = this.ctx;
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (p) { p.pan.value = pan; g.connect(p); p.connect(this.master); p.connect(this.reverb); }
    else { g.connect(this.master); g.connect(this.reverb); }
    osc.connect(g);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  bell(freq, vol = 0.1, duration = 3) {
    this.tone(freq, duration, vol, 'sine');
    this.tone(freq * 2.01, duration * 0.7, vol * 0.35, 'sine', 0.15, 0.01);
    this.tone(freq * 0.999, duration * 0.9, vol * 0.5, 'triangle', -0.1, 0);
  }

  chime(step) {
    if (!this.ctx) return;
    const base = PENTATONIC[Math.min(step, PENTATONIC.length - 1)];
    this.bell(base, 0.13, 2.8);
    this.bell(base * 1.5, 0.06, 2.2);
    this.bell(base * 2, 0.035, 1.8);
  }

  door() {
    if (!this.ctx) return;
    [261.63, 329.63, 392.0, 523.25, 659.25].forEach((f, i) => {
      this.tone(f, 5.5, 0.06, 'sine', (i - 2) * 0.12, i * 0.16);
    });
  }

  ending() {
    if (!this.ctx) return;
    const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
    notes.forEach((f, i) => {
      this.tone(f, 7, 0.055, 'sine', (i - 2.5) * 0.15, i * 0.22);
    });
    this.bell(1046.5, 0.03, 6);
  }

  step() {
    if (!this.ctx) return;
    const f = 120 + Math.random() * 90;
    this.tone(f, 0.14, 0.018, 'sine', Math.random() * 0.6 - 0.3);
  }
}
