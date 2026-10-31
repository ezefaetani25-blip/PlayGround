import { TAU, WORLD, PLAYER_H, makeRng } from './constants.js';

export const GROUND_SEGMENTS = [
  { x: -220, y: 1500, w: 2320, h: 460 },
  { x: 2250, y: 1500, w: 1850, h: 460 },
  { x: 4250, y: 1500, w: 1350, h: 460 },
  { x: 5750, y: 1500, w: 1100, h: 460 },
];

export const ISLANDS = [
  { x: 760, y: 1380, w: 200, grass: 0 },
  { x: 1040, y: 1210, w: 190, grass: 1 },
  { x: 1320, y: 1050, w: 250, grass: 2 },
  { x: 1680, y: 1210, w: 200, grass: 0 },
  { x: 1960, y: 1060, w: 200, grass: 1 },
  { x: 2370, y: 1340, w: 120, grass: 0 },
  { x: 2350, y: 1240, w: 220, grass: 2 },
  { x: 2660, y: 1080, w: 180, grass: 0 },
  { x: 2980, y: 920, w: 220, grass: 1 },
  { x: 3350, y: 1100, w: 240, grass: 2 },
  { x: 3680, y: 940, w: 200, grass: 0 },
  { x: 4370, y: 1340, w: 120, grass: 0 },
  { x: 4450, y: 1280, w: 200, grass: 1 },
  { x: 4730, y: 1100, w: 200, grass: 2 },
  { x: 5010, y: 920, w: 200, grass: 0 },
  { x: 5290, y: 740, w: 200, grass: 1 },
  { x: 5570, y: 560, w: 220, grass: 2 },
  { x: 5880, y: 390, w: 470, grass: 3, final: true },
];

export const PIPES = [
  { x: 1530, y: 1500, w: 92, h: 148 },
  { x: 3890, y: 1500, w: 92, h: 122 },
];

export const CHECKPOINTS = [
  { x: 2292, y: 1500, label: 'MEADOW' },
  { x: 4324, y: 1500, label: 'HIGHLANDS' },
  { x: 4510, y: 1280, label: 'SKY STEPS' },
];

const ENEMY_DEFS = [
  { x: 980, min: 880, max: 1400 },
  { x: 1870, min: 1720, max: 2040 },
  { x: 2490, min: 2360, max: 2700 },
  { x: 3250, min: 3000, max: 3500 },
  { x: 3860, min: 3710, max: 4050 },
  { x: 4540, min: 4380, max: 4980 },
  { x: 5210, min: 5070, max: 5520 },
  { x: 5980, min: 5820, max: 6350 },
];

const SIGN_DEFS = [
  { x: 206, y: 1500, w: 232, h: 82, lines: ['COINS = HIGHER', 'JUMPS!'], tilt: -0.018 },
  { x: 4400, y: 1500, w: 204, h: 70, lines: ['UP YOU GO!'], tilt: 0.014 },
];

function coinLine(x, y, count, gap = 44) {
  const out = [];
  for (let i = 0; i < count; i += 1) out.push({ x: x + i * gap, y });
  return out;
}

function coinArc(cx, y, count, spread, rise) {
  const out = [];
  for (let i = 0; i < count; i += 1) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    out.push({
      x: cx - spread / 2 + spread * t,
      y: y - Math.sin(t * Math.PI) * rise,
    });
  }
  return out;
}

export function buildLevel() {
  const rng = makeRng(918273);
  const coinSpots = [
    ...coinArc(480, 1406, 5, 310, 56),
    ...coinLine(820, 1268, 2),
    ...coinLine(1084, 1118, 2),
    ...coinLine(1382, 958, 3, 54),
    ...coinLine(1732, 1118, 2),
    ...coinLine(2012, 968, 2),
    ...coinLine(2400, 1148, 2),
    ...coinLine(2702, 988, 2),
    ...coinLine(3036, 828, 3, 54),
    ...coinLine(3408, 1008, 2),
    ...coinLine(3724, 848, 2),
    ...coinLine(4498, 1188, 2),
    ...coinLine(4778, 1008, 2),
    ...coinLine(5058, 828, 2),
    ...coinLine(5338, 648, 2),
    ...coinLine(5624, 468, 2),
    ...coinLine(5916, 298, 3, 52),
  ];

  const coins = coinSpots.slice(0, 40).map((c, i) => ({
    ...c,
    id: i,
    phase: rng() * Math.PI * 2,
    collected: false,
    sparkle: rng() * 2,
  }));

  const enemies = ENEMY_DEFS.map((e, i) => ({
    ...e,
    id: i,
    y: 1500 - 44,
    w: 40,
    h: 44,
    dir: i % 2 === 0 ? -1 : 1,
    speed: 42 + rng() * 16,
    walk: rng() * Math.PI * 2,
    squish: 0,
    active: true,
  }));

  const checkpoints = CHECKPOINTS.map((c, i) => ({
    ...c,
    id: i,
    active: false,
    wave: rng() * Math.PI * 2,
  }));

  const bushes = [];
  const groundBushX = [130, 610, 1240, 1810, 2110, 2420, 2890, 3450, 4030, 4310, 4890, 5430, 5820, 6360];
  groundBushX.forEach((x, i) => {
    bushes.push({ x, y: 1500, s: 0.72 + rng() * 0.62, tint: i % 3 });
  });

  const flowers = [];
  for (let i = 0; i < 62; i += 1) {
    const x = -80 + rng() * 6500;
    flowers.push({
      x,
      y: 1500 - 3 - rng() * 4,
      s: 0.5 + rng() * 0.7,
      color: ['#fff6cf', '#ffd1e1', '#fff1a8', '#e7c4ff'][Math.floor(rng() * 4)],
      lean: rng() * TAU,
    });
  }

  const groundDetails = GROUND_SEGMENTS.map((g) => {
    const stones = [];
    for (let i = 0; i < 48; i += 1) {
      stones.push({
        x: g.x + 20 + rng() * (g.w - 40),
        y: g.y + 36 + rng() * (g.h - 55),
        r: 2 + rng() * 6,
        a: 0.04 + rng() * 0.09,
      });
    }
    const tufts = [];
    for (let i = 0; i < Math.ceil(g.w / 36); i += 1) {
      tufts.push({
        x: g.x + 10 + rng() * (g.w - 20),
        h: 5 + rng() * 9,
        lean: (rng() - 0.5) * 0.8,
        light: rng() > 0.5,
      });
    }
    return { stones, tufts };
  });

  return {
    coins,
    enemies,
    checkpoints,
    bushes,
    flowers,
    groundDetails,
    signs: SIGN_DEFS,
    islands: ISLANDS.map((i) => ({ ...i })),
    pipes: PIPES.map((p) => ({ ...p })),
    grounds: GROUND_SEGMENTS.map((g) => ({ ...g })),
    spawn: { x: 176, y: 1500 - PLAYER_H },
    goal: { x: 6034, y: 390 },
    flagRaise: 0,
  };
}

