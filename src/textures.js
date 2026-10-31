import * as THREE from 'three';
import { ATLAS_TILES, BLOCK_DEFS } from './blocks.js';

const TILE = 16;
const SCALE = 2;
const GRID = 4;

function hash(x, y, salt = 0) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(salt | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function rgba(r, g, b, a = 1) {
  return `rgba(${Math.max(0, Math.min(255, Math.round(r)))},${Math.max(0, Math.min(255, Math.round(g)))},${Math.max(0, Math.min(255, Math.round(b)))},${a})`;
}

function makeTile(seed, paint) {
  const canvas = document.createElement('canvas');
  canvas.width = TILE;
  canvas.height = TILE;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  paint(ctx, seed);
  return canvas;
}

function pixelNoise(ctx, base, spread, seed, alpha = 1) {
  const [r, g, b] = base;
  for (let y = 0; y < TILE; y += 1) {
    for (let x = 0; x < TILE; x += 1) {
      const n = hash(x, y, seed);
      const d = (n - 0.5) * spread;
      ctx.fillStyle = rgba(r + d, g + d, b + d, alpha);
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function speckle(ctx, seed, count, color, alpha = 1, size = 1) {
  for (let i = 0; i < count; i += 1) {
    const x = Math.floor(hash(i, 1, seed) * TILE);
    const y = Math.floor(hash(i, 2, seed) * TILE);
    ctx.fillStyle = rgba(color[0], color[1], color[2], alpha);
    ctx.fillRect(x, y, size, size);
  }
}

function drawGrassTop(ctx) {
  pixelNoise(ctx, [92, 133, 59], 34, 11);
  for (let i = 0; i < 18; i += 1) {
    const x = Math.floor(hash(i, 3, 12) * 16);
    const y = Math.floor(hash(i, 4, 12) * 16);
    const bright = hash(i, 5, 12) > 0.5;
    ctx.fillStyle = bright ? 'rgba(132,171,80,0.8)' : 'rgba(55,90,39,0.75)';
    ctx.fillRect(x, y, 1, 1);
    if (hash(i, 6, 12) > 0.6) ctx.fillRect(x + 1, y, 1, 1);
  }
  ctx.fillStyle = 'rgba(237,209,108,0.8)';
  ctx.fillRect(4, 11, 1, 1);
  ctx.fillRect(12, 4, 1, 1);
}

function drawGrassSide(ctx) {
  pixelNoise(ctx, [121, 89, 61], 28, 21);
  for (let x = 0; x < TILE; x += 1) {
    const depth = 2 + Math.floor(hash(x, 0, 22) * 4);
    for (let y = 0; y < depth; y += 1) {
      const n = hash(x, y, 23);
      const d = (n - 0.5) * 28;
      ctx.fillStyle = rgba(86 + d, 127 + d, 56 + d);
      ctx.fillRect(x, y, 1, 1);
    }
    if (hash(x, 8, 24) > 0.72) {
      ctx.fillStyle = 'rgba(61,96,42,0.9)';
      ctx.fillRect(x, depth, 1, 1);
    }
  }
  speckle(ctx, 25, 10, [80, 56, 37], 0.8);
  speckle(ctx, 26, 5, [154, 119, 83], 0.65);
}

function drawDirt(ctx) {
  pixelNoise(ctx, [121, 89, 61], 28, 31);
  speckle(ctx, 32, 13, [86, 61, 41], 0.85);
  speckle(ctx, 33, 9, [151, 116, 81], 0.7);
}

function drawStone(ctx) {
  pixelNoise(ctx, [126, 129, 128], 24, 41);
  for (let i = 0; i < 7; i += 1) {
    const x = Math.floor(hash(i, 1, 42) * 15);
    const y = Math.floor(hash(i, 2, 42) * 15);
    const len = 1 + Math.floor(hash(i, 3, 42) * 3);
    ctx.fillStyle = 'rgba(82,86,86,0.65)';
    ctx.fillRect(x, y, len, 1);
  }
  speckle(ctx, 43, 11, [161, 164, 161], 0.55);
}

function drawCobble(ctx) {
  ctx.fillStyle = '#4f5352';
  ctx.fillRect(0, 0, 16, 16);
  const stones = [
    [1, 1, 7, 6],
    [9, 1, 6, 5],
    [1, 8, 5, 7],
    [7, 7, 8, 8],
    [9, 6, 6, 2],
    [2, 6, 4, 2],
  ];
  stones.forEach(([x, y, w, h], index) => {
    const tone = 102 + Math.floor(hash(index, 1, 51) * 38);
    for (let yy = 0; yy < h; yy += 1) {
      for (let xx = 0; xx < w; xx += 1) {
        const n = (hash(xx, yy, 52 + index) - 0.5) * 20;
        ctx.fillStyle = rgba(tone + n, tone + n + 2, tone + n + 1);
        ctx.fillRect(x + xx, y + yy, 1, 1);
      }
    }
    ctx.fillStyle = 'rgba(185,189,185,0.25)';
    ctx.fillRect(x, y, w, 1);
    ctx.fillStyle = 'rgba(45,49,48,0.45)';
    ctx.fillRect(x, y + h - 1, w, 1);
  });
}

function drawSand(ctx) {
  pixelNoise(ctx, [214, 196, 143], 20, 61);
  speckle(ctx, 62, 18, [185, 164, 112], 0.65);
  speckle(ctx, 63, 10, [239, 224, 177], 0.7);
  speckle(ctx, 64, 3, [156, 139, 100], 0.45);
}

function drawLogSide(ctx) {
  for (let x = 0; x < TILE; x += 1) {
    const tone = (hash(x, 0, 71) - 0.5) * 24;
    for (let y = 0; y < TILE; y += 1) {
      const n = (hash(x, y, 72) - 0.5) * 16;
      ctx.fillStyle = rgba(113 + tone + n, 81 + tone * 0.8 + n, 49 + tone * 0.55 + n);
      ctx.fillRect(x, y, 1, 1);
    }
  }
  for (let i = 0; i < 6; i += 1) {
    const x = Math.floor(hash(i, 1, 73) * 15);
    const y = Math.floor(hash(i, 2, 73) * 12);
    ctx.fillStyle = 'rgba(70,48,29,0.6)';
    ctx.fillRect(x, y, 1, 2 + Math.floor(hash(i, 3, 73) * 4));
  }
  ctx.fillStyle = 'rgba(165,125,78,0.45)';
  ctx.fillRect(3, 2, 1, 5);
  ctx.fillRect(11, 8, 1, 4);
}

function drawLogTop(ctx) {
  pixelNoise(ctx, [170, 134, 84], 16, 81);
  const center = 7.5;
  for (let y = 0; y < TILE; y += 1) {
    for (let x = 0; x < TILE; x += 1) {
      const d = Math.max(Math.abs(x - center), Math.abs(y - center));
      const ring = Math.floor(d) % 3;
      if (ring === 0) {
        ctx.fillStyle = 'rgba(124,91,52,0.55)';
        ctx.fillRect(x, y, 1, 1);
      } else if (ring === 1) {
        ctx.fillStyle = 'rgba(197,157,102,0.3)';
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
  ctx.fillStyle = 'rgba(85,61,35,0.75)';
  ctx.fillRect(7, 7, 2, 2);
  ctx.fillStyle = 'rgba(210,171,113,0.4)';
  ctx.fillRect(6, 5, 1, 1);
}

function drawLeaves(ctx) {
  for (let y = 0; y < TILE; y += 1) {
    for (let x = 0; x < TILE; x += 1) {
      const n = hash(x, y, 91);
      let color;
      if (n < 0.13) color = [40, 70, 29];
      else if (n < 0.3) color = [58, 96, 37];
      else if (n < 0.72) color = [72, 117, 45];
      else if (n < 0.93) color = [91, 137, 55];
      else color = [113, 157, 70];
      const d = (hash(x, y, 92) - 0.5) * 14;
      ctx.fillStyle = rgba(color[0] + d, color[1] + d, color[2] + d);
      ctx.fillRect(x, y, 1, 1);
    }
  }
  ctx.fillStyle = 'rgba(31,54,23,0.7)';
  ctx.fillRect(2, 6, 1, 1);
  ctx.fillRect(9, 12, 1, 1);
  ctx.fillRect(13, 3, 1, 1);
}

function drawPlanks(ctx) {
  pixelNoise(ctx, [166, 124, 76], 16, 101);
  for (let y = 0; y < TILE; y += 4) {
    ctx.fillStyle = 'rgba(91,62,34,0.72)';
    ctx.fillRect(0, y + 3, 16, 1);
    ctx.fillStyle = 'rgba(209,165,108,0.25)';
    ctx.fillRect(0, y, 16, 1);
  }
  for (let i = 0; i < 8; i += 1) {
    const x = Math.floor(hash(i, 1, 102) * 16);
    const y = Math.floor(hash(i, 2, 102) * 16);
    ctx.fillStyle = 'rgba(118,83,47,0.5)';
    ctx.fillRect(x, y, 1, 1);
  }
  ctx.fillStyle = 'rgba(86,59,34,0.5)';
  ctx.fillRect(4, 1, 1, 2);
  ctx.fillRect(12, 9, 1, 2);
}

function drawGlass(ctx) {
  ctx.clearRect(0, 0, TILE, TILE);
  ctx.fillStyle = 'rgba(178,225,232,0.12)';
  ctx.fillRect(1, 1, 14, 14);
  ctx.strokeStyle = 'rgba(206,242,246,0.7)';
  ctx.strokeRect(1.5, 1.5, 13, 13);
  ctx.fillStyle = 'rgba(226,249,251,0.58)';
  ctx.fillRect(3, 3, 2, 1);
  ctx.fillRect(3, 4, 1, 2);
  ctx.fillRect(10, 9, 3, 1);
  ctx.fillStyle = 'rgba(142,202,213,0.42)';
  ctx.fillRect(4, 10, 1, 3);
  ctx.fillRect(11, 4, 1, 3);
}

function drawGlowstone(ctx) {
  pixelNoise(ctx, [222, 161, 70], 26, 111);
  for (let i = 0; i < 22; i += 1) {
    const x = Math.floor(hash(i, 1, 112) * 16);
    const y = Math.floor(hash(i, 2, 112) * 16);
    const warm = hash(i, 3, 112) > 0.35;
    ctx.fillStyle = warm ? 'rgba(255,226,139,0.95)' : 'rgba(167,105,43,0.75)';
    ctx.fillRect(x, y, warm ? 1 + Math.floor(hash(i, 4, 112) * 2) : 1, 1);
  }
  ctx.fillStyle = 'rgba(255,244,190,0.7)';
  ctx.fillRect(4, 3, 2, 1);
  ctx.fillRect(10, 11, 2, 1);
}

function drawSnow(ctx) {
  pixelNoise(ctx, [236, 243, 245], 10, 121);
  speckle(ctx, 122, 10, [207, 225, 233], 0.5);
  speckle(ctx, 123, 4, [255, 255, 255], 0.8);
}

function drawBedrock(ctx) {
  pixelNoise(ctx, [63, 66, 64], 24, 131);
  speckle(ctx, 132, 16, [34, 37, 36], 0.7, 2);
  speckle(ctx, 133, 9, [95, 99, 96], 0.45);
}

function drawBrick(ctx) {
  ctx.fillStyle = '#a89f8c';
  ctx.fillRect(0, 0, 16, 16);
  const brickColor = [150, 77, 58];
  for (let row = 0; row < 4; row += 1) {
    const offset = row % 2 === 0 ? -4 : 0;
    for (let col = -1; col < 3; col += 1) {
      const x = offset + col * 8;
      const y = row * 4;
      for (let yy = 0; yy < 3; yy += 1) {
        for (let xx = 0; xx < 7; xx += 1) {
          const px = x + xx;
          if (px < 0 || px >= 16) continue;
          const d = (hash(px, y + yy, 141) - 0.5) * 18;
          ctx.fillStyle = rgba(brickColor[0] + d, brickColor[1] + d * 0.6, brickColor[2] + d * 0.6);
          ctx.fillRect(px, y + yy, 1, 1);
        }
      }
    }
  }
}

function drawGravel(ctx) {
  pixelNoise(ctx, [126, 121, 111], 28, 151);
  const colors = [
    [92, 88, 81],
    [155, 149, 137],
    [111, 106, 96],
    [170, 163, 148],
  ];
  for (let i = 0; i < 20; i += 1) {
    const x = Math.floor(hash(i, 1, 152) * 15);
    const y = Math.floor(hash(i, 2, 152) * 15);
    const c = colors[i % colors.length];
    ctx.fillStyle = rgba(c[0], c[1], c[2], 0.75);
    ctx.fillRect(x, y, 2, 1);
    if (hash(i, 3, 152) > 0.6) ctx.fillRect(x, y + 1, 1, 1);
  }
}

const PAINTERS = {
  grass_top: drawGrassTop,
  grass_side: drawGrassSide,
  dirt: drawDirt,
  stone: drawStone,
  cobblestone: drawCobble,
  sand: drawSand,
  log_side: drawLogSide,
  log_top: drawLogTop,
  leaves: drawLeaves,
  planks: drawPlanks,
  glass: drawGlass,
  glowstone: drawGlowstone,
  snow: drawSnow,
  bedrock: drawBedrock,
  brick: drawBrick,
  gravel: drawGravel,
};

export function createAtlas() {
  const tileCanvas = 32;
  const size = tileCanvas * GRID;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const tiles = {};
  const tileCanvases = {};

  ATLAS_TILES.forEach((name, index) => {
    const tile = makeTile(index * 37 + 5, PAINTERS[name]);
    tileCanvases[name] = tile;
    const col = index % GRID;
    const row = Math.floor(index / GRID);
    ctx.drawImage(tile, col * tileCanvas, row * tileCanvas, tileCanvas, tileCanvas);
    tiles[name] = { index, col, row };
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 4;
  texture.needsUpdate = true;

  return { canvas, texture, tiles, tileCanvases };
}

export function createWaterTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(64, 64);
  for (let y = 0; y < 64; y += 1) {
    for (let x = 0; x < 64; x += 1) {
      const n = hash(x, y, 201);
      const wave = Math.sin(x * 0.32 + y * 0.18) * 0.5 + Math.sin(y * 0.44 - x * 0.08) * 0.5;
      const glow = Math.max(0, wave) * 10;
      const i = (y * 64 + x) * 4;
      image.data[i] = 38 + n * 14 + glow;
      image.data[i + 1] = 108 + n * 18 + glow;
      image.data[i + 2] = 142 + n * 18 + glow;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  for (let i = 0; i < 9; i += 1) {
    const y = Math.floor(hash(i, 1, 202) * 64);
    const x = Math.floor(hash(i, 2, 202) * 64);
    ctx.fillStyle = 'rgba(196,236,238,0.22)';
    ctx.fillRect(x, y, 4 + Math.floor(hash(i, 3, 202) * 9), 1);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

function atlasTile(atlas, name) {
  const tile = atlas.tiles[name];
  if (!tile) return null;
  const tileCanvas = atlas.tileCanvases[name];
  return { tile, tileCanvas };
}

function drawFace(ctx, tileCanvas, corners, shade) {
  const [a, b, c, d] = corners;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0], b[1]);
  ctx.lineTo(c[0], c[1]);
  ctx.lineTo(d[0], d[1]);
  ctx.closePath();
  ctx.clip();
  const ux = (b[0] - a[0]) / TILE;
  const uy = (b[1] - a[1]) / TILE;
  const vx = (d[0] - a[0]) / TILE;
  const vy = (d[1] - a[1]) / TILE;
  ctx.setTransform(ux, uy, vx, vy, a[0], a[1]);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tileCanvas, 0, 0);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (shade > 0) {
    ctx.fillStyle = `rgba(15,18,10,${shade})`;
    ctx.fillRect(0, 0, 96, 96);
  }
  ctx.restore();
}

export function drawBlockIcon(canvas, blockId, atlas) {
  const def = BLOCK_DEFS[blockId];
  if (!def) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const logical = 64;
  canvas.width = logical * dpr;
  canvas.height = logical * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, logical, logical);

  const top = atlasTile(atlas, def.tiles.top);
  const side = atlasTile(atlas, def.tiles.side);
  if (!top || !side) return;

  const cx = 32;
  const topY = 10;
  const midY = 26;
  const bottomY = 51;
  const leftX = 10;
  const rightX = 54;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 4;
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.beginPath();
  ctx.ellipse(cx, 55, 19, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  drawFace(ctx, top.tileCanvas, [[cx, topY], [rightX, midY], [cx, midY + 15], [leftX, midY]], 0);
  drawFace(ctx, side.tileCanvas, [[leftX, midY], [cx, midY + 15], [cx, bottomY], [leftX, midY + 24]], 0.18);
  drawFace(ctx, side.tileCanvas, [[cx, midY + 15], [rightX, midY], [rightX, midY + 24], [cx, bottomY]], 0.32);

  if (def.name === 'Glass') {
    ctx.strokeStyle = 'rgba(232,251,253,0.62)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(cx, topY);
    ctx.lineTo(rightX, midY);
    ctx.lineTo(rightX, midY + 24);
    ctx.lineTo(cx, bottomY);
    ctx.lineTo(leftX, midY + 24);
    ctx.lineTo(leftX, midY);
    ctx.closePath();
    ctx.stroke();
  }
}

export function averageBlockColor(blockId) {
  const def = BLOCK_DEFS[blockId];
  return def?.particle ?? 0x888888;
}
