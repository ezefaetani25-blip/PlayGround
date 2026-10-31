import { TAU, clamp, lerp, makeRng, roundedRectPath } from './constants.js';

const rng = makeRng(44117);

const CLOUDS = Array.from({ length: 18 }, () => ({
  x: rng() * 2200,
  y: 0.08 + rng() * 0.34,
  s: 0.52 + rng() * 0.9,
  speed: 2.5 + rng() * 4,
  depth: 0.08 + rng() * 0.16,
  a: 0.18 + rng() * 0.3,
}));

const STARS = Array.from({ length: 16 }, () => ({
  x: rng(),
  y: rng(),
  s: 0.5 + rng(),
  p: rng() * TAU,
}));

function rr(c, x, y, w, h, r) {
  roundedRectPath(c, x, y, w, h, r);
}

export function drawSky(c, W, H, time, cam) {
  const grad = c.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#2b9bdf');
  grad.addColorStop(0.42, '#74cdf4');
  grad.addColorStop(0.76, '#b8ebfa');
  grad.addColorStop(1, '#e9fbe6');
  c.fillStyle = grad;
  c.fillRect(0, 0, W, H);

  const high = clamp((1200 - cam.y) / 900, 0, 1);
  const sunX = W * 0.77;
  const sunY = H * 0.12 + high * H * 0.035;
  const glow = c.createRadialGradient(sunX, sunY, 0, sunX, sunY, Math.max(W, H) * 0.34);
  glow.addColorStop(0, 'rgba(255, 250, 200, 0.92)');
  glow.addColorStop(0.08, 'rgba(255, 244, 166, 0.46)');
  glow.addColorStop(0.28, 'rgba(255, 236, 139, 0.16)');
  glow.addColorStop(1, 'rgba(255, 236, 139, 0)');
  c.fillStyle = glow;
  c.fillRect(0, 0, W, H);

  c.save();
  c.globalAlpha = 0.88;
  const disc = c.createRadialGradient(sunX - 8, sunY - 8, 2, sunX, sunY, 34);
  disc.addColorStop(0, '#fffef1');
  disc.addColorStop(0.55, '#fff3ad');
  disc.addColorStop(1, '#ffe36b');
  c.fillStyle = disc;
  c.beginPath();
  c.arc(sunX, sunY, 31, 0, TAU);
  c.fill();
  c.restore();

  if (high > 0.28) {
    c.save();
    for (const s of STARS) {
      const a = (high - 0.28) * 0.52 * (0.55 + 0.45 * Math.sin(time * 1.6 + s.p));
      if (a <= 0) continue;
      c.globalAlpha = a;
      c.fillStyle = '#fffde8';
      c.beginPath();
      c.arc(s.x * W, s.y * H * 0.45, s.s, 0, TAU);
      c.fill();
    }
    c.restore();
  }
}

function drawCloud(c, x, y, s, alpha) {
  c.save();
  c.translate(x, y);
  c.scale(s, s);
  c.globalAlpha = alpha;

  const shadow = c.createLinearGradient(0, -28, 0, 30);
  shadow.addColorStop(0, 'rgba(255,255,255,0.98)');
  shadow.addColorStop(0.7, 'rgba(235,250,255,0.92)');
  shadow.addColorStop(1, 'rgba(172,224,244,0.75)');
  c.fillStyle = shadow;
  c.beginPath();
  c.ellipse(-42, 4, 44, 23, 0, 0, TAU);
  c.ellipse(-4, -9, 42, 32, 0, 0, TAU);
  c.ellipse(38, 5, 46, 24, 0, 0, TAU);
  c.ellipse(7, 12, 54, 21, 0, 0, TAU);
  c.fill();

  c.globalAlpha = alpha * 0.52;
  c.fillStyle = '#ffffff';
  c.beginPath();
  c.ellipse(-20, -13, 26, 13, -0.1, 0, TAU);
  c.ellipse(24, -9, 21, 10, 0.08, 0, TAU);
  c.fill();
  c.restore();
}

function drawMountainLayer(c, W, baseY, offset, spacing, height, color, alpha) {
  c.save();
  c.globalAlpha = alpha;
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(-160, baseY + 300);
  let x = -spacing + ((offset % spacing) + spacing) % spacing;
  for (let i = 0; i < Math.ceil(W / spacing) + 4; i += 1) {
    const peak = height * (0.62 + ((i * 37) % 11) / 25);
    c.lineTo(x, baseY);
    c.lineTo(x + spacing * 0.32, baseY - peak);
    c.lineTo(x + spacing * 0.53, baseY - peak * 0.78);
    c.lineTo(x + spacing * 0.72, baseY - peak * 0.36);
    c.lineTo(x + spacing, baseY);
    x += spacing;
  }
  c.lineTo(W + 180, baseY + 300);
  c.closePath();
  c.fill();
  c.restore();
}

export function drawParallax(c, W, H, cam, time, menu = false) {
  const high = clamp((1200 - cam.y) / 900, 0, 1);
  const drop = (1200 - cam.y) * 0.11;

  for (const cloud of CLOUDS) {
    const span = W + 380;
    let x = cloud.x - cam.x * cloud.depth - time * cloud.speed;
    x = ((x % span) + span) % span - 190;
    const y = cloud.y * H + drop * 0.5;
    if (y < -120 || y > H + 100) continue;
    drawCloud(c, x, y, cloud.s, cloud.a * (1 - high * 0.24));
  }

  drawMountainLayer(c, W, H * 0.68 + drop * 0.65, -cam.x * 0.055, 660, H * 0.28, '#8fc8d9', 0.36);
  drawMountainLayer(c, W, H * 0.75 + drop * 0.9, -cam.x * 0.085, 510, H * 0.25, '#6fb5c8', 0.34);
  drawMountainLayer(c, W, H * 0.83 + drop, -cam.x * 0.12, 390, H * 0.17, '#479d79', 0.3);
  drawMountainLayer(c, W, H * 0.9 + drop, -cam.x * 0.17, 300, H * 0.11, '#33845e', 0.26);

  if (!menu && high > 0.5) {
    c.save();
    c.globalAlpha = (high - 0.5) * 0.3;
    c.fillStyle = '#dff8ff';
    for (let i = 0; i < 5; i += 1) {
      const x = ((i * 397 - cam.x * 0.04) % (W + 500) + W + 500) % (W + 500) - 200;
      const y = H * 0.22 + i * 57;
      c.beginPath();
      c.ellipse(x, y, 72, 17, -0.06, 0, TAU);
      c.fill();
    }
    c.restore();
  }
}

export function drawBush(c, bush, time) {
  const colors = [
    ['#2b8c4d', '#51bd65', '#1e6e3d'],
    ['#3e9b3d', '#72ce59', '#286f2c'],
    ['#258675', '#4dc09a', '#1b665b'],
  ][bush.tint];
  const s = bush.s;
  c.save();
  c.translate(bush.x, bush.y);
  c.scale(s, s);
  const sway = Math.sin(time * 1.2 + bush.x * 0.01) * 1.2;
  c.fillStyle = colors[2];
  c.beginPath();
  c.ellipse(0, -8, 42, 22, 0, 0, TAU);
  c.ellipse(-30, -18, 27, 27, 0, 0, TAU);
  c.ellipse(28, -17, 30, 29, 0, 0, TAU);
  c.ellipse(0, -32, 35, 34, 0, 0, TAU);
  c.fill();

  c.fillStyle = colors[0];
  c.beginPath();
  c.ellipse(-28, -22 + sway, 24, 23, 0, 0, TAU);
  c.ellipse(26, -23 - sway, 27, 25, 0, 0, TAU);
  c.ellipse(-2, -38 + sway * 0.6, 32, 31, 0, 0, TAU);
  c.fill();

  c.fillStyle = colors[1];
  c.globalAlpha = 0.72;
  c.beginPath();
  c.ellipse(-18, -33 + sway, 14, 10, -0.35, 0, TAU);
  c.ellipse(14, -34 - sway, 15, 10, 0.25, 0, TAU);
  c.fill();
  c.restore();
}

export function drawFlower(c, f, time) {
  c.save();
  c.translate(f.x, f.y);
  const sway = Math.sin(time * 1.6 + f.lean) * 0.08;
  c.rotate(sway);
  c.scale(f.s, f.s);
  c.strokeStyle = '#2d8444';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(0, 0);
  c.quadraticCurveTo(2, -10, 0, -18);
  c.stroke();
  c.fillStyle = f.color;
  for (let i = 0; i < 5; i += 1) {
    const a = (i / 5) * TAU;
    c.beginPath();
    c.ellipse(Math.cos(a) * 4, -20 + Math.sin(a) * 4, 3.4, 4.2, a, 0, TAU);
    c.fill();
  }
  c.fillStyle = '#f2a91b';
  c.beginPath();
  c.arc(0, -20, 2.7, 0, TAU);
  c.fill();
  c.restore();
}

export function drawGround(c, g, details) {
  c.save();
  c.beginPath();
  c.rect(g.x, g.y, g.w, g.h);
  c.clip();

  const dirt = c.createLinearGradient(0, g.y, 0, g.y + g.h);
  dirt.addColorStop(0, '#9b5b2e');
  dirt.addColorStop(0.18, '#875027');
  dirt.addColorStop(0.72, '#6a381d');
  dirt.addColorStop(1, '#4b2615');
  c.fillStyle = dirt;
  c.fillRect(g.x, g.y, g.w, g.h);

  c.fillStyle = 'rgba(65, 32, 14, 0.2)';
  for (let band = 0; band < 4; band += 1) {
    const by = g.y + 62 + band * 98 + Math.sin(band * 2.1) * 7;
    c.beginPath();
    c.moveTo(g.x - 20, by);
    for (let x = g.x - 20; x < g.x + g.w + 30; x += 90) {
      c.quadraticCurveTo(x + 24, by - 7 + Math.sin((x + band) * 0.012) * 5, x + 54, by + 2);
      c.quadraticCurveTo(x + 74, by + 7, x + 90, by);
    }
    c.lineTo(g.x + g.w + 30, by + 7);
    c.lineTo(g.x - 20, by + 7);
    c.closePath();
    c.fill();
  }

  for (const stone of details.stones) {
    c.globalAlpha = Math.min(0.28, stone.a * 2.2);
    c.fillStyle = '#3a1d0d';
    c.beginPath();
    c.ellipse(stone.x, stone.y, stone.r * 1.9, stone.r, 0.3, 0, TAU);
    c.fill();
    c.globalAlpha = Math.min(0.22, stone.a * 1.3);
    c.fillStyle = '#e3ad6a';
    c.beginPath();
    c.ellipse(stone.x - 1.5, stone.y - 1.5, stone.r * 1.2, stone.r * 0.45, 0.3, 0, TAU);
    c.fill();
  }
  c.globalAlpha = 1;

  for (let i = 0; i < 14; i += 1) {
    const cx = g.x + 46 + ((i * 193) % Math.max(80, g.w - 90));
    const cy = g.y + 52 + ((i * 79) % 150);
    c.strokeStyle = 'rgba(48, 23, 11, 0.2)';
    c.lineWidth = 1.5;
    c.beginPath();
    c.moveTo(cx, cy);
    c.lineTo(cx + 7, cy + 13);
    c.lineTo(cx + 2, cy + 24);
    c.stroke();
  }

  const grass = c.createLinearGradient(0, g.y, 0, g.y + 24);
  grass.addColorStop(0, '#8ceb67');
  grass.addColorStop(0.4, '#56c956');
  grass.addColorStop(0.8, '#2f9f43');
  grass.addColorStop(1, '#237a37');
  c.fillStyle = grass;
  c.fillRect(g.x, g.y, g.w, 22);

  c.fillStyle = '#1f7034';
  c.fillRect(g.x, g.y + 22, g.w, 4);
  c.fillStyle = 'rgba(255, 249, 176, 0.32)';
  c.fillRect(g.x, g.y, g.w, 2);

  for (const t of details.tufts) {
    c.strokeStyle = t.light ? 'rgba(180, 255, 121, 0.8)' : 'rgba(38, 132, 54, 0.85)';
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(t.x, g.y + 3);
    c.quadraticCurveTo(t.x + t.lean * 6, g.y - t.h * 0.5, t.x + t.lean * 12, g.y - t.h);
    c.stroke();
  }

  c.fillStyle = 'rgba(35, 18, 10, 0.2)';
  c.fillRect(g.x, g.y + 28, g.w, 3);

  const edge = c.createLinearGradient(g.x, 0, g.x + 14, 0);
  edge.addColorStop(0, 'rgba(20, 8, 4, 0.2)');
  edge.addColorStop(1, 'rgba(20, 8, 4, 0)');
  c.fillStyle = edge;
  c.fillRect(g.x, g.y, 14, g.h);

  c.restore();
}

export function drawIsland(c, island, time) {
  const { x, y, w } = island;
  const final = !!island.final;
  const depth = final ? 84 : 62;

  c.save();
  c.fillStyle = 'rgba(13, 48, 50, 0.13)';
  c.beginPath();
  c.ellipse(x + w / 2 + 10, y + depth + 13, w * 0.39, 13, 0, 0, TAU);
  c.fill();

  const dirt = c.createLinearGradient(0, y + 10, 0, y + depth);
  dirt.addColorStop(0, '#9a5b2e');
  dirt.addColorStop(0.55, '#79401f');
  dirt.addColorStop(1, '#4c2714');
  c.fillStyle = dirt;
  c.beginPath();
  c.moveTo(x + 12, y + 9);
  c.lineTo(x + w - 12, y + 9);
  c.quadraticCurveTo(x + w - 3, y + 16, x + w - 22, y + 36);
  c.quadraticCurveTo(x + w - 36, y + 51, x + w * 0.66, y + depth - 7);
  c.quadraticCurveTo(x + w * 0.52, y + depth + 4, x + w * 0.43, y + depth - 2);
  c.quadraticCurveTo(x + w * 0.25, y + depth - 15, x + 26, y + 43);
  c.quadraticCurveTo(x + 8, y + 27, x + 12, y + 9);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(255, 226, 150, 0.14)';
  c.beginPath();
  c.ellipse(x + w * 0.35, y + 34, w * 0.2, 8, -0.1, 0, TAU);
  c.fill();

  c.fillStyle = 'rgba(27, 13, 7, 0.28)';
  c.beginPath();
  c.ellipse(x + w * 0.54, y + depth - 4, w * 0.2, 7, 0.05, 0, TAU);
  c.fill();

  const grass = c.createLinearGradient(0, y, 0, y + 21);
  grass.addColorStop(0, '#9cf274');
  grass.addColorStop(0.4, '#58ce58');
  grass.addColorStop(0.84, '#2fa444');
  grass.addColorStop(1, '#247f36');
  c.fillStyle = grass;
  rr(c, x, y, w, 22, 10);
  c.fill();

  c.fillStyle = 'rgba(25, 101, 41, 0.52)';
  c.fillRect(x + 8, y + 19, w - 16, 4);
  c.fillStyle = 'rgba(255, 255, 198, 0.5)';
  c.fillRect(x + 10, y + 1, w - 20, 2);

  const tuftCount = Math.max(2, Math.round(w / 46));
  for (let i = 0; i < tuftCount; i += 1) {
    const tx = x + 14 + ((i + 0.5) / tuftCount) * (w - 28);
    const th = 4 + ((i * 17) % 8);
    c.strokeStyle = i % 2 ? 'rgba(196, 255, 135, 0.78)' : 'rgba(30, 118, 45, 0.78)';
    c.lineWidth = 1.8;
    c.beginPath();
    c.moveTo(tx, y + 2);
    c.quadraticCurveTo(tx + Math.sin(time + i) * 2, y - th * 0.5, tx + Math.sin(time * 0.8 + i) * 3, y - th);
    c.stroke();
  }

  c.strokeStyle = 'rgba(255, 236, 163, 0.25)';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(x + 22, y + 30);
  c.quadraticCurveTo(x + 18, y + 42, x + 27, y + 51);
  c.stroke();

  c.restore();
}

export function drawPipe(c, pipe) {
  const top = pipe.y - pipe.h;
  const body = c.createLinearGradient(pipe.x, 0, pipe.x + pipe.w, 0);
  body.addColorStop(0, '#136b35');
  body.addColorStop(0.16, '#32b85b');
  body.addColorStop(0.42, '#75e57b');
  body.addColorStop(0.64, '#2da74f');
  body.addColorStop(1, '#0d592b');
  c.fillStyle = body;
  c.fillRect(pipe.x, top + 18, pipe.w, pipe.h - 8);
  c.fillStyle = 'rgba(6, 53, 25, 0.32)';
  c.fillRect(pipe.x + pipe.w - 12, top + 18, 12, pipe.h - 8);

  c.fillStyle = body;
  rr(c, pipe.x - 8, top, pipe.w + 16, 24, 6);
  c.fill();
  c.strokeStyle = 'rgba(7, 55, 27, 0.55)';
  c.lineWidth = 2;
  c.stroke();
  c.fillStyle = 'rgba(220, 255, 188, 0.4)';
  rr(c, pipe.x - 2, top + 3, pipe.w + 3, 4, 2);
  c.fill();

  c.fillStyle = 'rgba(8, 47, 23, 0.36)';
  c.beginPath();
  c.ellipse(pipe.x + pipe.w / 2, pipe.y + 4, pipe.w * 0.62, 7, 0, 0, TAU);
  c.fill();

  c.fillStyle = 'rgba(220, 255, 180, 0.3)';
  c.fillRect(pipe.x + 14, top + 27, 6, pipe.h - 42);
  c.fillStyle = 'rgba(4, 41, 19, 0.22)';
  c.fillRect(pipe.x + pipe.w - 26, top + 27, 8, pipe.h - 42);
}

export function drawSign(c, sign) {
  c.save();
  c.translate(sign.x, sign.y);
  c.fillStyle = 'rgba(37, 20, 8, 0.18)';
  c.beginPath();
  c.ellipse(40, 1, 40, 7, 0, 0, TAU);
  c.fill();

  c.fillStyle = '#7c451e';
  rr(c, 24, -66, 14, 68, 3);
  c.fill();
  c.fillStyle = '#a7612b';
  rr(c, 26, -66, 6, 68, 3);
  c.fill();

  c.save();
  c.translate(sign.w / 2, -86);
  c.rotate(sign.tilt);
  c.fillStyle = 'rgba(27, 14, 5, 0.22)';
  rr(c, -sign.w / 2 + 5, -sign.h / 2 + 7, sign.w, sign.h, 8);
  c.fill();
  const wood = c.createLinearGradient(0, -sign.h / 2, 0, sign.h / 2);
  wood.addColorStop(0, '#e3a45a');
  wood.addColorStop(0.5, '#c9873e');
  wood.addColorStop(1, '#9e5e25');
  c.fillStyle = wood;
  rr(c, -sign.w / 2, -sign.h / 2, sign.w, sign.h, 8);
  c.fill();
  c.strokeStyle = '#6e3d16';
  c.lineWidth = 3;
  c.stroke();
  c.fillStyle = 'rgba(255, 228, 168, 0.4)';
  rr(c, -sign.w / 2 + 8, -sign.h / 2 + 5, sign.w - 16, 3, 2);
  c.fill();

  c.fillStyle = '#4a2a12';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = `900 ${sign.lines.length > 1 ? 16 : 18}px "Arial Black", Impact, sans-serif`;
  sign.lines.forEach((line, i) => {
    const y = (i - (sign.lines.length - 1) / 2) * 20;
    c.fillText(line, 0, y + 1);
  });

  c.fillStyle = '#6e3d16';
  c.beginPath();
  c.arc(-sign.w / 2 + 12, -sign.h / 2 + 12, 2.4, 0, TAU);
  c.arc(sign.w / 2 - 12, -sign.h / 2 + 12, 2.4, 0, TAU);
  c.fill();
  c.restore();
  c.restore();
}

export function drawCheckpoint(c, cp, time) {
  const h = 118;
  const base = cp.y;
  c.save();
  c.fillStyle = 'rgba(20, 44, 35, 0.16)';
  c.beginPath();
  c.ellipse(cp.x + 3, base, 20, 5, 0, 0, TAU);
  c.fill();

  const pole = c.createLinearGradient(cp.x - 3, 0, cp.x + 4, 0);
  pole.addColorStop(0, '#9b9e9b');
  pole.addColorStop(0.4, '#f2f4dc');
  pole.addColorStop(1, '#858a83');
  c.fillStyle = pole;
  rr(c, cp.x - 2, base - h, 4, h, 2);
  c.fill();
  c.fillStyle = '#e7e9cd';
  c.beginPath();
  c.arc(cp.x, base - h, 4, 0, TAU);
  c.fill();

  const wave = Math.sin(time * 3 + cp.wave) * 3;
  c.fillStyle = cp.active ? '#ffd447' : 'rgba(214, 238, 214, 0.74)';
  c.beginPath();
  c.moveTo(cp.x + 2, base - h + 8);
  c.quadraticCurveTo(cp.x + 30, base - h + 6 + wave, cp.x + 45, base - h + 15 + wave);
  c.lineTo(cp.x + 30, base - h + 30);
  c.quadraticCurveTo(cp.x + 17, base - h + 24 - wave, cp.x + 2, base - h + 25);
  c.closePath();
  c.fill();
  c.strokeStyle = cp.active ? 'rgba(138, 75, 0, 0.45)' : 'rgba(90, 120, 98, 0.4)';
  c.lineWidth = 1.5;
  c.stroke();

  if (cp.active) {
    c.globalAlpha = 0.3 + Math.sin(time * 4) * 0.1;
    c.fillStyle = '#ffe47c';
    c.beginPath();
    c.arc(cp.x, base - h + 15, 25, 0, TAU);
    c.fill();
  }
  c.restore();
}

export function drawCastle(c, x, baseY) {
  c.save();
  const stone = c.createLinearGradient(x, baseY - 240, x, baseY);
  stone.addColorStop(0, '#7c8095');
  stone.addColorStop(0.5, '#62677e');
  stone.addColorStop(1, '#444a61');
  c.fillStyle = stone;

  rr(c, x + 28, baseY - 178, 226, 178, 3);
  c.fill();
  c.fillStyle = 'rgba(23, 28, 44, 0.22)';
  for (let row = 0; row < 5; row += 1) {
    c.fillRect(x + 28, baseY - 160 + row * 32, 226, 2);
    for (let col = 0; col < 8; col += 1) {
      c.fillRect(x + 28 + ((col + (row % 2) * 0.5) / 8) * 226, baseY - 178 + row * 32, 2, 32);
    }
  }

  for (const tx of [x + 4, x + 220]) {
    c.fillStyle = stone;
    rr(c, tx, baseY - 232, 60, 232, 3);
    c.fill();
    c.fillStyle = '#4a5069';
    for (let i = 0; i < 3; i += 1) c.fillRect(tx + 4 + i * 19, baseY - 246, 13, 16);
    c.fillStyle = '#d7a52b';
    c.beginPath();
    c.moveTo(tx - 4, baseY - 246);
    c.lineTo(tx + 30, baseY - 284);
    c.lineTo(tx + 64, baseY - 246);
    c.closePath();
    c.fill();
    c.fillStyle = 'rgba(255, 239, 160, 0.28)';
    c.beginPath();
    c.moveTo(tx - 4, baseY - 246);
    c.lineTo(tx + 30, baseY - 284);
    c.lineTo(tx + 30, baseY - 246);
    c.closePath();
    c.fill();
  }

  c.fillStyle = stone;
  rr(c, x + 96, baseY - 246, 92, 78, 3);
  c.fill();
  c.fillStyle = '#4a5069';
  for (let i = 0; i < 4; i += 1) c.fillRect(x + 100 + i * 23, baseY - 260, 15, 18);
  c.fillStyle = '#c79326';
  c.beginPath();
  c.moveTo(x + 88, baseY - 260);
  c.lineTo(x + 142, baseY - 312);
  c.lineTo(x + 196, baseY - 260);
  c.closePath();
  c.fill();
  c.fillStyle = 'rgba(255, 238, 152, 0.25)';
  c.beginPath();
  c.moveTo(x + 88, baseY - 260);
  c.lineTo(x + 142, baseY - 312);
  c.lineTo(x + 142, baseY - 260);
  c.closePath();
  c.fill();

  c.fillStyle = '#2b2d3f';
  c.beginPath();
  c.moveTo(x + 116, baseY);
  c.lineTo(x + 116, baseY - 62);
  c.arc(x + 142, baseY - 62, 26, Math.PI, 0);
  c.lineTo(x + 168, baseY);
  c.closePath();
  c.fill();
  c.fillStyle = 'rgba(255, 213, 91, 0.48)';
  c.beginPath();
  c.moveTo(x + 126, baseY);
  c.lineTo(x + 126, baseY - 58);
  c.arc(x + 142, baseY - 58, 16, Math.PI, 0);
  c.lineTo(x + 158, baseY);
  c.closePath();
  c.fill();

  c.fillStyle = '#f2b82d';
  for (const wx of [x + 48, x + 224]) {
    rr(c, wx, baseY - 144, 17, 30, 8);
    c.fill();
    c.fillStyle = 'rgba(255, 245, 180, 0.3)';
    c.fillRect(wx + 3, baseY - 140, 4, 21);
    c.fillStyle = '#f2b82d';
  }

  c.fillStyle = '#34374b';
  c.fillRect(x + 78, baseY - 234, 12, 12);
  c.fillRect(x + 194, baseY - 234, 12, 12);

  c.strokeStyle = '#e94b3d';
  c.lineWidth = 3;
  c.beginPath();
  c.moveTo(x + 142, baseY - 312);
  c.lineTo(x + 142, baseY - 356);
  c.stroke();
  c.fillStyle = '#e94b3d';
  c.beginPath();
  c.moveTo(x + 144, baseY - 354);
  c.quadraticCurveTo(x + 171, baseY - 344, x + 181, baseY - 334);
  c.lineTo(x + 144, baseY - 326);
  c.closePath();
  c.fill();

  c.restore();
}

export function drawFlag(c, x, baseY, raise, time) {
  const top = baseY - 312;
  const flagY = lerp(baseY - 256, baseY - 116, raise);
  c.save();
  c.fillStyle = 'rgba(19, 43, 35, 0.2)';
  c.beginPath();
  c.ellipse(x + 8, baseY, 36, 7, 0, 0, TAU);
  c.fill();

  c.fillStyle = '#7d5b1c';
  rr(c, x - 23, baseY - 20, 46, 20, 5);
  c.fill();
  c.fillStyle = '#f0c949';
  rr(c, x - 21, baseY - 23, 42, 7, 3);
  c.fill();

  const pole = c.createLinearGradient(x - 4, 0, x + 5, 0);
  pole.addColorStop(0, '#9da39b');
  pole.addColorStop(0.38, '#fffbe1');
  pole.addColorStop(0.7, '#c2c8bb');
  pole.addColorStop(1, '#777f75');
  c.fillStyle = pole;
  rr(c, x - 3, top, 6, baseY - top - 16, 3);
  c.fill();

  c.fillStyle = '#fff3b1';
  c.beginPath();
  c.arc(x, top - 2, 8, 0, TAU);
  c.fill();
  c.strokeStyle = 'rgba(135, 96, 6, 0.45)';
  c.lineWidth = 1.4;
  c.stroke();

  const wave = Math.sin(time * 4) * 5;
  const flagW = 84;
  const flagH = 54;
  c.fillStyle = '#e73c31';
  c.beginPath();
  c.moveTo(x + 3, flagY);
  c.quadraticCurveTo(x + flagW * 0.46, flagY - 9 + wave, x + flagW, flagY + 4 + wave);
  c.lineTo(x + flagW * 0.7, flagY + flagH * 0.48);
  c.quadraticCurveTo(x + flagW * 0.42, flagY + flagH * 0.82 - wave, x + 3, flagY + flagH);
  c.closePath();
  c.fill();
  c.strokeStyle = 'rgba(107, 20, 17, 0.35)';
  c.lineWidth = 2;
  c.stroke();

  c.fillStyle = '#fff8df';
  c.beginPath();
  const starX = x + 35;
  const starY = flagY + 25;
  for (let i = 0; i < 10; i += 1) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 === 0 ? 12 : 5;
    const px = starX + Math.cos(a) * r;
    const py = starY + Math.sin(a) * r;
    if (i === 0) c.moveTo(px, py);
    else c.lineTo(px, py);
  }
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(255, 255, 255, 0.5)';
  c.beginPath();
  c.arc(x - 1, top - 4, 3, 0, TAU);
  c.fill();
  c.restore();
}

export function drawCoin(c, coin, time) {
  if (coin.collected) return;
  const bob = Math.sin(time * 3.1 + coin.phase) * 4;
  const spin = Math.cos(time * 3.8 + coin.phase);
  const sx = 0.18 + 0.82 * Math.abs(spin);
  c.save();
  c.translate(coin.x, coin.y + bob);
  c.scale(sx, 1);

  c.globalAlpha = 0.22;
  c.fillStyle = '#ffce39';
  c.beginPath();
  c.arc(0, 0, 22, 0, TAU);
  c.fill();
  c.globalAlpha = 1;

  const gold = c.createRadialGradient(-5, -7, 1, 0, 0, 18);
  gold.addColorStop(0, '#fffbd0');
  gold.addColorStop(0.28, '#ffe45d');
  gold.addColorStop(0.66, '#f7b40b');
  gold.addColorStop(1, '#b96b00');
  c.fillStyle = gold;
  c.strokeStyle = '#8a4d00';
  c.lineWidth = 2.2;
  c.beginPath();
  c.ellipse(0, 0, 14, 18, 0, 0, TAU);
  c.fill();
  c.stroke();

  c.strokeStyle = 'rgba(255, 251, 194, 0.76)';
  c.lineWidth = 1.5;
  c.beginPath();
  c.ellipse(-2, -1, 8.8, 13.5, 0, 0, TAU);
  c.stroke();

  c.strokeStyle = 'rgba(139, 79, 0, 0.64)';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(0, -8);
  c.lineTo(0, 8);
  c.stroke();

  if (Math.abs(spin) > 0.82) {
    const a = 0.55 + Math.sin(time * 6 + coin.phase) * 0.3;
    c.globalAlpha = a;
    c.strokeStyle = '#fffbd2';
    c.lineWidth = 1.5;
    c.beginPath();
    c.moveTo(11, -14);
    c.lineTo(11, -8);
    c.moveTo(8, -11);
    c.lineTo(14, -11);
    c.stroke();
  }
  c.restore();
}

function drawHand(c, x, y, angle) {
  c.save();
  c.translate(x, y);
  c.rotate(angle);
  c.fillStyle = '#e73c31';
  rr(c, -4.5, 0, 9, 12, 4);
  c.fill();
  c.fillStyle = '#f8c58f';
  c.beginPath();
  c.arc(0, 14, 5.2, 0, TAU);
  c.fill();
  c.strokeStyle = '#5e2d1b';
  c.lineWidth = 1.6;
  c.stroke();
  c.restore();
}

export function drawMario(c, p, time, power) {
  const cx = p.x + p.w / 2;
  const feet = p.y + p.h;
  const facing = p.facing || 1;
  const squash = clamp(p.squash || 0, 0, 1);
  const air = !p.grounded;
  const moving = Math.abs(p.vx) > 22 && p.grounded;
  const run = p.runPhase || 0;
  const swing = moving ? Math.sin(run) : 0;
  const bob = moving ? Math.abs(Math.sin(run)) * 1.8 : Math.sin(time * 2.3) * 0.7;

  if (power > 1.18) {
    c.save();
    const aura = c.createRadialGradient(cx, feet - 34, 5, cx, feet - 34, 58);
    aura.addColorStop(0, 'rgba(255, 238, 142, 0.13)');
    aura.addColorStop(0.55, 'rgba(255, 207, 59, 0.07)');
    aura.addColorStop(1, 'rgba(255, 207, 59, 0)');
    c.fillStyle = aura;
    c.fillRect(cx - 65, feet - 100, 130, 130);
    c.restore();
  }

  c.save();
  c.translate(cx, feet + bob);
  c.scale(facing * (1 + squash * 0.14), 1 - squash * 0.12);
  if (p.stun > 0) c.rotate(Math.sin(time * 35) * 0.06);

  c.fillStyle = 'rgba(24, 41, 30, 0.2)';
  c.beginPath();
  c.ellipse(0, 2, 24, 6, 0, 0, TAU);
  c.fill();

  const legSwing = air ? 0 : swing * 5;
  const leftX = air ? -15 : -15 + legSwing;
  const rightX = air ? 7 : 3 - legSwing;
  const leftY = air ? -23 : -30;
  const rightY = air ? -26 : -30;

  c.fillStyle = '#2259ad';
  rr(c, leftX, leftY, 11, 24, 4);
  c.fill();
  rr(c, rightX, rightY, 11, 24, 4);
  c.fill();
  c.strokeStyle = '#142f61';
  c.lineWidth = 1.4;
  c.stroke();

  c.fillStyle = '#5a2c13';
  rr(c, leftX - 5, air ? -9 : -10, 19, 11, 5);
  c.fill();
  rr(c, rightX - 2, air ? -11 : -10, 19, 11, 5);
  c.fill();
  c.fillStyle = '#8c4a21';
  rr(c, leftX - 3, air ? -8 : -9, 12, 4, 2);
  c.fill();
  rr(c, rightX, air ? -10 : -9, 12, 4, 2);
  c.fill();
  c.strokeStyle = '#3b1b0b';
  c.lineWidth = 1.4;
  c.stroke();

  const shirt = c.createLinearGradient(0, -58, 0, -36);
  shirt.addColorStop(0, '#ff5b4b');
  shirt.addColorStop(0.65, '#e73c31');
  shirt.addColorStop(1, '#b42625');
  c.fillStyle = shirt;
  rr(c, -19, -58, 38, 19, 8);
  c.fill();
  c.strokeStyle = '#7c1a1b';
  c.lineWidth = 1.5;
  c.stroke();

  const overalls = c.createLinearGradient(0, -51, 0, -25);
  overalls.addColorStop(0, '#3d82dd');
  overalls.addColorStop(0.7, '#2867be');
  overalls.addColorStop(1, '#194a95');
  c.fillStyle = overalls;
  rr(c, -17, -51, 34, 28, 8);
  c.fill();
  c.strokeStyle = '#12396f';
  c.lineWidth = 1.6;
  c.stroke();

  c.fillStyle = '#2c70c9';
  c.fillRect(-12, -57, 5, 12);
  c.fillRect(7, -57, 5, 12);
  c.fillStyle = '#ffd447';
  c.beginPath();
  c.arc(-8, -40, 2.4, 0, TAU);
  c.arc(8, -40, 2.4, 0, TAU);
  c.fill();
  c.strokeStyle = '#a76a00';
  c.lineWidth = 1;
  c.stroke();

  const armSwing = air ? -1.9 : swing * 0.7;
  drawHand(c, -21, -54, -armSwing);
  drawHand(c, 17, -54, armSwing);

  c.fillStyle = '#f7c28a';
  c.strokeStyle = '#5d2c18';
  c.lineWidth = 1.7;
  c.beginPath();
  c.arc(0, -64, 16.5, 0, TAU);
  c.fill();
  c.stroke();

  c.fillStyle = '#edb172';
  c.beginPath();
  c.arc(-13, -62, 4.5, 0, TAU);
  c.fill();
  c.strokeStyle = '#5d2c18';
  c.lineWidth = 1.4;
  c.stroke();

  c.fillStyle = '#5b2d13';
  c.beginPath();
  c.ellipse(-14, -67, 4.8, 7, -0.2, 0, TAU);
  c.fill();

  c.fillStyle = '#f7c28a';
  c.beginPath();
  c.arc(14, -62, 5.7, 0, TAU);
  c.fill();
  c.strokeStyle = '#5d2c18';
  c.lineWidth = 1.4;
  c.stroke();

  c.fillStyle = '#fffdf0';
  c.beginPath();
  c.ellipse(7, -68, 3.6, 5.1, -0.1, 0, TAU);
  c.fill();
  c.fillStyle = '#26304f';
  c.beginPath();
  c.arc(8.2, -68, 2.1, 0, TAU);
  c.fill();
  c.fillStyle = '#ffffff';
  c.beginPath();
  c.arc(8.9, -69, 0.7, 0, TAU);
  c.fill();

  c.strokeStyle = '#5b2d13';
  c.lineWidth = 2.1;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(2, -73.5);
  c.quadraticCurveTo(8, -75.5, 13, -72.5);
  c.stroke();

  c.fillStyle = '#5b2d13';
  c.beginPath();
  c.moveTo(-2, -58);
  c.quadraticCurveTo(7, -62, 16, -58);
  c.quadraticCurveTo(20, -55, 14, -52);
  c.quadraticCurveTo(6, -50, 0, -54);
  c.closePath();
  c.fill();

  c.strokeStyle = '#8c4a21';
  c.lineWidth = 1.2;
  c.beginPath();
  c.moveTo(4, -51.5);
  c.quadraticCurveTo(10, -50.5, 14, -52.5);
  c.stroke();

  const cap = c.createLinearGradient(0, -82, 0, -60);
  cap.addColorStop(0, '#ff6353');
  cap.addColorStop(0.58, '#e73c31');
  cap.addColorStop(1, '#b52323');
  c.fillStyle = cap;
  c.beginPath();
  c.moveTo(-17, -66);
  c.bezierCurveTo(-18, -86, 16, -88, 18, -67);
  c.quadraticCurveTo(16, -61, 11, -61);
  c.lineTo(-16, -61);
  c.quadraticCurveTo(-18, -62, -17, -66);
  c.closePath();
  c.fill();
  c.strokeStyle = '#7c1a1b';
  c.lineWidth = 1.7;
  c.stroke();

  c.fillStyle = '#c22b28';
  rr(c, 4, -67, 24, 7, 4);
  c.fill();
  c.strokeStyle = '#7c1a1b';
  c.lineWidth = 1.5;
  c.stroke();

  c.fillStyle = '#fff9e8';
  c.beginPath();
  c.arc(0, -76, 5.6, 0, TAU);
  c.fill();
  c.strokeStyle = '#a22a24';
  c.lineWidth = 1;
  c.stroke();
  c.fillStyle = '#d6352e';
  c.font = '900 7px "Arial Black", Impact, sans-serif';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText('M', 0.3, -75.4);

  if (power > 1.35 && air) {
    for (let i = 0; i < 3; i += 1) {
      const a = time * 3.5 + (i / 3) * TAU;
      const px = Math.cos(a) * 29;
      const py = -36 + Math.sin(a) * 35;
      c.globalAlpha = 0.42 + Math.sin(time * 7 + i) * 0.2;
      c.fillStyle = '#ffe56a';
      c.beginPath();
      c.arc(px, py, 1.7, 0, TAU);
      c.fill();
    }
    c.globalAlpha = 1;
  }

  c.restore();
}

export function drawGoomba(c, e) {
  if (!e.active) return;
  c.save();
  c.translate(e.x + e.w / 2, e.y + e.h);
  const squash = e.squish > 0 ? Math.min(1, e.squish * 5) : 0;
  c.scale(1 + squash * 0.24, 1 - squash * 0.78);
  const wobble = Math.sin(e.walk) * 2;

  c.fillStyle = 'rgba(23, 31, 20, 0.22)';
  c.beginPath();
  c.ellipse(0, 1, 21, 5, 0, 0, TAU);
  c.fill();

  c.fillStyle = '#4c2815';
  c.beginPath();
  c.ellipse(-12, -4, 10, 5, -0.1, 0, TAU);
  c.ellipse(12, -4, 10, 5, 0.1, 0, TAU);
  c.fill();

  const body = c.createLinearGradient(0, -44, 0, -3);
  body.addColorStop(0, '#d38d44');
  body.addColorStop(0.46, '#b66c2c');
  body.addColorStop(1, '#7b3f18');
  c.fillStyle = body;
  c.beginPath();
  c.ellipse(0, -22, 21, 22, 0, 0, TAU);
  c.fill();
  c.strokeStyle = '#4b240e';
  c.lineWidth = 1.8;
  c.stroke();

  c.fillStyle = '#f1c687';
  c.beginPath();
  c.ellipse(0, -13, 15, 11, 0, 0, TAU);
  c.fill();
  c.strokeStyle = '#6a3a19';
  c.lineWidth = 1.3;
  c.stroke();

  c.fillStyle = '#fff7d9';
  c.beginPath();
  c.ellipse(-6.5, -21 + wobble * 0.2, 4.6, 6.4, -0.12, 0, TAU);
  c.ellipse(6.5, -21 + wobble * 0.2, 4.6, 6.4, 0.12, 0, TAU);
  c.fill();
  c.fillStyle = '#1d2230';
  c.beginPath();
  c.arc(-6, -20 + wobble * 0.2, 2.1, 0, TAU);
  c.arc(6, -20 + wobble * 0.2, 2.1, 0, TAU);
  c.fill();

  c.strokeStyle = '#4a240e';
  c.lineWidth = 2;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(-11, -27);
  c.lineTo(-3, -24.5);
  c.moveTo(11, -27);
  c.lineTo(3, -24.5);
  c.stroke();

  c.strokeStyle = '#8c4f23';
  c.lineWidth = 1.4;
  c.beginPath();
  c.moveTo(-3, -10);
  c.quadraticCurveTo(0, -8, 3, -10);
  c.stroke();

  c.fillStyle = '#b66c2c';
  c.beginPath();
  c.ellipse(-13, -3 + wobble * 0.1, 9, 4, -0.15, 0, TAU);
  c.ellipse(13, -3 - wobble * 0.1, 9, 4, 0.15, 0, TAU);
  c.fill();
  c.restore();
}

export function drawVignette(c, W, H) {
  const v = c.createRadialGradient(W * 0.5, H * 0.46, Math.min(W, H) * 0.34, W * 0.5, H * 0.5, Math.max(W, H) * 0.76);
  v.addColorStop(0, 'rgba(4, 18, 31, 0)');
  v.addColorStop(0.72, 'rgba(4, 18, 31, 0.035)');
  v.addColorStop(1, 'rgba(2, 12, 24, 0.2)');
  c.fillStyle = v;
  c.fillRect(0, 0, W, H);
}
