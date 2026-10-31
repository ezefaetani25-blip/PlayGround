export const TAU = Math.PI * 2;

export const WORLD = {
  w: 6600,
  h: 1900,
  ground: 1500,
};

export const FLAG_X = 6034;
export const FLAG_BASE_Y = 390;
export const COIN_TOTAL = 40;
export const BASE_JUMP = 790;
export const JUMP_PER_COIN = 14;
export const GRAVITY = 2250;
export const MAX_FALL = 1380;
export const MAX_SPEED = 355;
export const PLAYER_W = 34;
export const PLAYER_H = 68;

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, rate, dt) => lerp(a, b, 1 - Math.exp(-rate * dt));
export const approach = (value, target, delta) => {
  if (value < target) return Math.min(value + delta, target);
  if (value > target) return Math.max(value - delta, target);
  return target;
};

export function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function roundedRectPath(c, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + radius, y);
  c.arcTo(x + w, y, x + w, y + h, radius);
  c.arcTo(x + w, y + h, x, y + h, radius);
  c.arcTo(x, y + h, x, y, radius);
  c.arcTo(x, y, x + w, y, radius);
  c.closePath();
}
