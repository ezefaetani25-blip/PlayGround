export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.enabled = true;
    this.musicTimer = null;
    this.nextNote = 0;
    this.step = 0;
    this.melody = [
      659, 0, 784, 880, 0, 784, 659, 523,
      587, 0, 698, 784, 0, 698, 587, 494,
      523, 0, 659, 784, 0, 880, 988, 880,
      784, 0, 659, 587, 523, 0, 392, 0,
    ];
    this.bass = [131, 0, 0, 0, 165, 0, 0, 0, 147, 0, 0, 0, 131, 0, 0, 0];
    this.tempo = 0.148;
  }

  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.musicGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.master.gain.value = this.enabled ? 0.72 : 0;
      this.musicGain.gain.value = 0.22;
      this.sfxGain.gain.value = 0.72;
      this.musicGain.connect(this.master);
      this.sfxGain.connect(this.master);
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    return true;
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) {
      this.master.gain.setTargetAtTime(on ? 0.72 : 0, this.ctx.currentTime, 0.025);
    }
    if (!on) this.stopMusic();
  }

  tone(freq, dur, type = 'square', vol = 0.1, slideTo = 0, delay = 0) {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + dur + 0.03);
  }

  coin() {
    this.tone(1046, 0.07, 'square', 0.13);
    this.tone(1568, 0.14, 'square', 0.1, 1860, 0.055);
    this.tone(2093, 0.1, 'triangle', 0.05, 2093, 0.1);
  }

  jump(power = 1) {
    this.tone(240 + power * 28, 0.15, 'square', 0.09, 470 + power * 72);
    this.tone(120, 0.09, 'triangle', 0.05, 190);
  }

  land() {
    this.tone(105, 0.09, 'triangle', 0.11, 58);
  }

  stomp() {
    this.tone(170, 0.08, 'square', 0.11, 82);
    this.tone(90, 0.1, 'triangle', 0.09, 55, 0.03);
  }

  hurt() {
    this.tone(340, 0.16, 'sawtooth', 0.09, 100);
    this.tone(180, 0.2, 'square', 0.07, 65, 0.09);
  }

  checkpoint() {
    [523, 659, 784].forEach((f, i) => this.tone(f, 0.12, 'triangle', 0.09, 0, i * 0.075));
  }

  click() {
    this.tone(680, 0.045, 'square', 0.045, 880);
  }

  win() {
    const notes = [523, 659, 784, 1046, 988, 1046, 1318];
    notes.forEach((f, i) => {
      this.tone(f, 0.24, 'square', 0.11, 0, i * 0.12);
      this.tone(f / 2, 0.24, 'triangle', 0.06, 0, i * 0.12);
    });
  }

  startMusic() {
    if (!this.ctx || !this.enabled || this.musicTimer) return;
    this.nextNote = this.ctx.currentTime + 0.06;
    this.step = 0;
    const schedule = () => {
      if (!this.ctx) return;
      while (this.nextNote < this.ctx.currentTime + 0.18) {
        const idx = this.step % this.melody.length;
        const freq = this.melody[idx];
        if (freq) this.musicNote(freq, this.nextNote, 0.11, 'triangle', 0.085);
        if (idx % 2 === 0) {
          const bass = this.bass[(idx / 2) % this.bass.length];
          if (bass) this.musicNote(bass, this.nextNote, 0.2, 'sine', 0.1);
        }
        this.nextNote += this.tempo;
        this.step += 1;
      }
    };
    schedule();
    this.musicTimer = window.setInterval(schedule, 90);
  }

  musicNote(freq, time, dur, type, vol) {
    if (!this.ctx || !this.enabled) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(vol, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(gain);
    gain.connect(this.musicGain);
    osc.start(time);
    osc.stop(time + dur + 0.03);
  }

  stopMusic() {
    if (this.musicTimer) {
      window.clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }
}
