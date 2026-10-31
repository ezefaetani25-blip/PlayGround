import * as THREE from 'three';

export const TILE = 32;
export const PAD = 4;
export const CELL = TILE + PAD * 2;
export const COLS = 8;
export const ATLAS_SIZE = COLS * CELL;

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function clampByte(v) {
  return Math.max(0, Math.min(255, Math.round(v)));
}

function fillNoise(ctx, base, variance, rng, alpha = 1) {
  const img = ctx.createImageData(TILE, TILE);
  const data = img.data;
  for (let i = 0; i < TILE * TILE; i++) {
    const n = (rng() - 0.5) * variance;
    const n2 = (rng() - 0.5) * variance * 0.4;
    data[i * 4] = clampByte(base[0] + n + n2);
    data[i * 4 + 1] = clampByte(base[1] + n + n2);
    data[i * 4 + 2] = clampByte(base[2] + n + n2);
    data[i * 4 + 3] = clampByte(alpha * 255);
  }
  ctx.putImageData(img, 0, 0);
}

function px(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function shade(base, amount) {
  return `rgb(${clampByte(base[0] + amount)},${clampByte(base[1] + amount)},${clampByte(base[2] + amount)})`;
}

function rgba(base, alpha) {
  return `rgba(${clampByte(base[0])},${clampByte(base[1])},${clampByte(base[2])},${alpha})`;
}

const TILE_DRAWERS = {
  grass_top(ctx, rng) {
    fillNoise(ctx, [92, 154, 62], 26, rng);
    for (let i = 0; i < 55; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const len = 1 + Math.floor(rng() * 3);
      px(ctx, x, y, 1, len, rng() > 0.5 ? 'rgba(60,116,42,0.55)' : 'rgba(142,198,96,0.5)');
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(178,220,126,0.55)');
    }
  },

  grass_side(ctx, rng) {
    fillNoise(ctx, [124, 92, 60], 20, rng);
    for (let i = 0; i < 22; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, rng() > 0.5 ? 'rgba(84,62,42,0.6)' : 'rgba(160,125,86,0.5)');
    }
    for (let x = 0; x < TILE; x++) {
      const h = 7 + Math.floor(rng() * 6);
      for (let y = 0; y < h; y++) {
        const c = y === h - 1 ? [58, 108, 40] : [76 + rng() * 30, 136 + rng() * 28, 50 + rng() * 18];
        px(ctx, x, y, 1, 1, rgba(c, 1));
      }
    }
    for (let i = 0; i < 16; i++) {
      const x = Math.floor(rng() * TILE);
      const y = 9 + Math.floor(rng() * 7);
      px(ctx, x, y, 1, 2 + Math.floor(rng() * 3), 'rgba(69,118,46,0.85)');
    }
  },

  dirt(ctx, rng) {
    fillNoise(ctx, [124, 91, 60], 24, rng);
    for (let i = 0; i < 28; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const s = rng() > 0.8 ? 2 : 1;
      px(ctx, x, y, s, s, rng() > 0.5 ? 'rgba(82,58,38,0.6)' : 'rgba(162,126,87,0.55)');
    }
  },

  stone(ctx, rng) {
    fillNoise(ctx, [126, 130, 134], 20, rng);
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const len = 2 + Math.floor(rng() * 6);
      px(ctx, x, y, len, 1, 'rgba(84,89,94,0.45)');
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(178,184,188,0.5)');
    }
  },

  cobble(ctx, rng) {
    fillNoise(ctx, [92, 96, 99], 14, rng);
    const rows = 4;
    const h = TILE / rows;
    for (let row = 0; row < rows; row++) {
      const offset = row % 2 === 0 ? 0 : 4;
      for (let col = -1; col < 5; col++) {
        const x = col * 9 + offset + Math.floor(rng() * 3);
        const y = row * h + 1;
        const w = 7 + Math.floor(rng() * 3);
        const hh = h - 3;
        const base = 110 + Math.floor(rng() * 30);
        ctx.fillStyle = `rgb(${base},${base + 3},${base + 6})`;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, w, hh, 2.5);
        } else {
          ctx.rect(x, y, w, hh);
        }
        ctx.fill();
        px(ctx, x + 1, y + 1, w - 2, 1, 'rgba(200,204,208,0.18)');
      }
    }
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(60,64,68,0.45)');
    }
  },

  sand(ctx, rng) {
    fillNoise(ctx, [218, 203, 156], 18, rng);
    for (let i = 0; i < 40; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, rng() > 0.5 ? 'rgba(184,164,115,0.5)' : 'rgba(245,235,199,0.65)');
    }
  },

  sandstone(ctx, rng) {
    fillNoise(ctx, [211, 193, 145], 12, rng);
    for (let y = 0; y < TILE; y += 8) {
      px(ctx, 0, y, TILE, 1, 'rgba(173,152,106,0.55)');
      px(ctx, 0, y + 1, TILE, 1, 'rgba(239,226,187,0.35)');
    }
    for (let i = 0; i < 14; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 2 + Math.floor(rng() * 3), 'rgba(177,158,113,0.35)');
    }
  },

  log_side(ctx, rng) {
    fillNoise(ctx, [105, 76, 46], 18, rng);
    for (let i = 0; i < 22; i++) {
      const x = Math.floor(rng() * TILE);
      const w = rng() > 0.7 ? 2 : 1;
      px(ctx, x, 0, w, TILE, rng() > 0.5 ? 'rgba(70,49,29,0.4)' : 'rgba(141,105,65,0.35)');
    }
    for (let i = 0; i < 6; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 2, 3, 'rgba(61,42,24,0.55)');
      px(ctx, x + 1, y + 1, 1, 1, 'rgba(146,111,70,0.4)');
    }
  },

  log_top(ctx, rng) {
    fillNoise(ctx, [128, 96, 59], 14, rng);
    const cx = TILE / 2;
    const cy = TILE / 2;
    for (let r = 3; r < 17; r += 3) {
      ctx.strokeStyle = r % 6 === 0 ? 'rgba(87,61,35,0.65)' : 'rgba(158,120,76,0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r + rng() * 0.8, 0, Math.PI * 2);
      ctx.stroke();
    }
    px(ctx, 15, 15, 2, 2, 'rgba(70,48,28,0.7)');
    for (let i = 0; i < 8; i++) {
      const a = rng() * Math.PI * 2;
      const r = rng() * 14;
      px(ctx, cx + Math.cos(a) * r, cy + Math.sin(a) * r, 1, 1, 'rgba(82,58,33,0.5)');
    }
  },

  leaves(ctx, rng) {
    ctx.clearRect(0, 0, TILE, TILE);
    for (let i = 0; i < 130; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const w = 1 + Math.floor(rng() * 4);
      const h = 1 + Math.floor(rng() * 4);
      const v = rng();
      const c = v > 0.72 ? [132, 190, 92] : v > 0.35 ? [73, 137, 55] : [48, 102, 38];
      ctx.fillStyle = rgba(c, 0.94);
      ctx.fillRect(x, y, w, h);
    }
    // keep a few deliberate holes so light filters through the canopy
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      ctx.clearRect(x, y, 1 + Math.floor(rng() * 2), 1 + Math.floor(rng() * 2));
    }
    for (let i = 0; i < 20; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(170,218,118,0.7)');
    }
  },

  water(ctx, rng) {
    fillNoise(ctx, [53, 124, 181], 16, rng);
    for (let i = 0; i < 16; i++) {
      const y = Math.floor(rng() * TILE);
      const x = Math.floor(rng() * TILE);
      const w = 3 + Math.floor(rng() * 9);
      px(ctx, x, y, w, 1, 'rgba(120,190,232,0.3)');
      px(ctx, x + 2, y + 1, Math.max(1, w - 4), 1, 'rgba(24,84,134,0.25)');
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 2, 1, 'rgba(168,222,248,0.35)');
    }
  },

  glass(ctx, rng) {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = 'rgba(168,216,232,0.12)';
    ctx.fillRect(0, 0, TILE, TILE);
    ctx.strokeStyle = 'rgba(198,236,248,0.75)';
    ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, TILE - 3, TILE - 3);
    ctx.strokeStyle = 'rgba(236,252,255,0.9)';
    ctx.lineWidth = 1;
    ctx.strokeRect(3.5, 3.5, TILE - 7, TILE - 7);
    ctx.strokeStyle = 'rgba(255,255,255,0.32)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(6, 22);
    ctx.lineTo(22, 6);
    ctx.stroke();
    for (let i = 0; i < 5; i++) {
      const x = 8 + Math.floor(rng() * 16);
      const y = 8 + Math.floor(rng() * 16);
      px(ctx, x, y, 1, 1, 'rgba(255,255,255,0.5)');
    }
  },

  brick(ctx, rng) {
    fillNoise(ctx, [168, 156, 143], 10, rng);
    const bh = 8;
    for (let row = 0; row < 4; row++) {
      const offset = row % 2 === 0 ? 0 : 8;
      for (let col = -1; col < 3; col++) {
        const x = col * 16 + offset;
        const y = row * bh;
        const base = [166, 76, 58];
        const n = (rng() - 0.5) * 22;
        ctx.fillStyle = `rgb(${clampByte(base[0] + n)},${clampByte(base[1] + n * 0.7)},${clampByte(base[2] + n * 0.6)})`;
        ctx.fillRect(x + 1, y + 1, 14, bh - 2);
        px(ctx, x + 2, y + 2, 12, 1, 'rgba(255,190,170,0.18)');
        px(ctx, x + 2, y + bh - 3, 12, 1, 'rgba(91,35,27,0.25)');
      }
    }
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(90,39,31,0.35)');
    }
  },

  snow(ctx, rng) {
    fillNoise(ctx, [236, 244, 249], 10, rng);
    for (let i = 0; i < 24; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, rng() > 0.5 ? 'rgba(255,255,255,0.9)' : 'rgba(196,215,228,0.5)');
    }
    for (let i = 0; i < 5; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 2, 1, 'rgba(255,255,255,0.8)');
      px(ctx, x + 1, y - 1, 1, 2, 'rgba(255,255,255,0.6)');
    }
  },

  gravel(ctx, rng) {
    fillNoise(ctx, [108, 103, 99], 18, rng);
    for (let i = 0; i < 26; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const s = 2 + Math.floor(rng() * 3);
      const base = 80 + Math.floor(rng() * 65);
      ctx.fillStyle = `rgb(${base},${base - 2},${base - 4})`;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, s, s, 1);
      else ctx.rect(x, y, s, s);
      ctx.fill();
    }
  },

  bedrock(ctx, rng) {
    fillNoise(ctx, [51, 52, 57], 22, rng);
    for (let i = 0; i < 18; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const s = 2 + Math.floor(rng() * 5);
      px(ctx, x, y, s, s, rng() > 0.5 ? 'rgba(24,25,29,0.75)' : 'rgba(88,90,98,0.55)');
    }
  },

  glowstone(ctx, rng) {
    fillNoise(ctx, [196, 141, 63], 20, rng);
    for (let i = 0; i < 30; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      const s = 1 + Math.floor(rng() * 3);
      const bright = rng() > 0.45;
      px(ctx, x, y, s, s, bright ? 'rgba(255,232,154,0.95)' : 'rgba(140,85,32,0.6)');
    }
    for (let i = 0; i < 8; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(255,250,212,1)');
    }
  },

  planks(ctx, rng) {
    fillNoise(ctx, [181, 138, 85], 16, rng);
    for (let row = 0; row < 4; row++) {
      const y = row * 8;
      px(ctx, 0, y, TILE, 1, 'rgba(120,86,48,0.7)');
      px(ctx, 0, y + 1, TILE, 1, 'rgba(218,177,120,0.35)');
      const seam = (row * 13 + 7) % TILE;
      px(ctx, seam, y + 1, 1, 7, 'rgba(118,84,46,0.65)');
      for (let i = 0; i < 5; i++) {
        const gx = Math.floor(rng() * TILE);
        const gy = y + 2 + Math.floor(rng() * 5);
        px(ctx, gx, gy, 2 + Math.floor(rng() * 5), 1, 'rgba(139,101,57,0.35)');
      }
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(105,75,42,0.45)');
    }
  },

  stone_bricks(ctx, rng) {
    fillNoise(ctx, [136, 140, 144], 12, rng);
    const bh = 8;
    for (let row = 0; row < 4; row++) {
      const offset = row % 2 === 0 ? 0 : 8;
      for (let col = -1; col < 3; col++) {
        const x = col * 16 + offset;
        const y = row * bh;
        const base = 122 + Math.floor(rng() * 22);
        ctx.fillStyle = `rgb(${base},${base + 4},${base + 7})`;
        ctx.fillRect(x + 1, y + 1, 14, bh - 2);
        px(ctx, x + 2, y + 2, 12, 1, 'rgba(210,214,218,0.18)');
        px(ctx, x + 2, y + bh - 3, 12, 1, 'rgba(74,78,82,0.28)');
      }
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(rng() * TILE);
      const y = Math.floor(rng() * TILE);
      px(ctx, x, y, 1, 1, 'rgba(88,92,96,0.4)');
    }
  },

  white(ctx, rng) {
    wool(ctx, rng, [230, 229, 220]);
  },
  red(ctx, rng) {
    wool(ctx, rng, [184, 68, 63]);
  },
  blue(ctx, rng) {
    wool(ctx, rng, [63, 95, 174]);
  },
  yellow(ctx, rng) {
    wool(ctx, rng, [224, 193, 74]);
  },
  green(ctx, rng) {
    wool(ctx, rng, [79, 143, 74]);
  },
  orange(ctx, rng) {
    wool(ctx, rng, [217, 131, 63]);
  },
  black(ctx, rng) {
    wool(ctx, rng, [43, 43, 48]);
  },
  purple(ctx, rng) {
    wool(ctx, rng, [122, 79, 158]);
  },
  cyan(ctx, rng) {
    wool(ctx, rng, [63, 166, 166]);
  },
};

function wool(ctx, rng, base) {
  fillNoise(ctx, base, 10, rng);
  for (let y = 0; y < TILE; y += 4) {
    px(ctx, 0, y, TILE, 1, 'rgba(0,0,0,0.07)');
    px(ctx, 0, y + 1, TILE, 1, 'rgba(255,255,255,0.06)');
  }
  for (let x = 0; x < TILE; x += 4) {
    px(ctx, x, 0, 1, TILE, 'rgba(0,0,0,0.05)');
  }
  for (let i = 0; i < 26; i++) {
    const x = Math.floor(rng() * TILE);
    const y = Math.floor(rng() * TILE);
    px(ctx, x, y, 1, 1, rng() > 0.5 ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)');
  }
}

const tileCanvases = new Map();
const tileColors = new Map();

function buildTiles() {
  for (const [name, draw] of Object.entries(TILE_DRAWERS)) {
    const canvas = makeCanvas(TILE);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = false;
    draw(ctx, mulberry32(hashString(name)));
    tileCanvases.set(name, canvas);

    const data = ctx.getImageData(0, 0, TILE, TILE).data;
    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a < 40) continue;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
    if (count === 0) count = 1;
    tileColors.set(name, [r / count / 255, g / count / 255, b / count / 255]);
  }
}

let atlasCanvas = null;
let atlasTexture = null;
const uvCache = new Map();

function buildAtlas() {
  atlasCanvas = makeCanvas(ATLAS_SIZE);
  const ctx = atlasCanvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, ATLAS_SIZE, ATLAS_SIZE);

  let index = 0;
  for (const [name, canvas] of tileCanvases) {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    const x = col * CELL + PAD;
    const y = row * CELL + PAD;
    ctx.drawImage(canvas, x, y);
    // Inset by half an atlas texel so nearest-neighbour sampling never lands
    // in the transparent padding around a tile (which reads as black).
    const inset = 0.5 / ATLAS_SIZE;
    const u0 = x / ATLAS_SIZE + inset;
    const v0 = y / ATLAS_SIZE + inset;
    const u1 = (x + TILE) / ATLAS_SIZE - inset;
    const v1 = (y + TILE) / ATLAS_SIZE - inset;
    uvCache.set(name, [u0, v0, u1, v1]);
    index++;
  }

  atlasTexture = new THREE.CanvasTexture(atlasCanvas);
  // Canvas UVs are authored top-down, matching the tile layout in the atlas.
  atlasTexture.flipY = false;
  atlasTexture.colorSpace = THREE.SRGBColorSpace;
  atlasTexture.magFilter = THREE.NearestFilter;
  atlasTexture.minFilter = THREE.NearestFilter;
  atlasTexture.generateMipmaps = false;
  atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
  atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
  atlasTexture.needsUpdate = true;
}

export function getAtlas() {
  if (!atlasCanvas) {
    buildTiles();
    buildAtlas();
  }
  return {
    texture: atlasTexture,
    canvas: atlasCanvas,
    uv(name) {
      return uvCache.get(name) || uvCache.get('stone');
    },
    tile(name) {
      return tileCanvases.get(name) || tileCanvases.get('stone');
    },
    color(name) {
      return tileColors.get(name) || [0.5, 0.5, 0.5];
    },
  };
}

/** Draws a crisp isometric cube icon from a block's tile names. */
export function makeBlockIcon(tiles, size = 64) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const top = tileCanvases.get(tiles.top);
  const side = tileCanvases.get(tiles.side);
  const bottom = tileCanvases.get(tiles.bottom || tiles.side);

  const s = size / 64;
  const cx = size / 2;
  const topY = 5 * s;
  const midY = 19 * s;
  const botY = 33 * s;
  const leftX = 5 * s;
  const rightX = 59 * s;
  const hw = 27 * s;
  const hh = 14 * s;
  const bodyH = 25 * s;

  // top diamond
  ctx.save();
  ctx.setTransform(hw / TILE, hh / TILE, -hw / TILE, hh / TILE, cx, topY);
  ctx.drawImage(top, 0, 0);
  ctx.restore();

  // left face
  ctx.save();
  ctx.setTransform(hw / TILE, hh / TILE, 0, bodyH / TILE, leftX, midY);
  ctx.drawImage(side, 0, 0);
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, TILE, TILE);
  ctx.restore();

  // right face
  ctx.save();
  ctx.setTransform(hw / TILE, -hh / TILE, 0, bodyH / TILE, cx, botY);
  ctx.drawImage(side, 0, 0);
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(0, 0, TILE, TILE);
  ctx.restore();

  // subtle outline
  ctx.strokeStyle = 'rgba(0,0,0,0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx, topY);
  ctx.lineTo(rightX, midY);
  ctx.lineTo(rightX, midY + bodyH);
  ctx.lineTo(cx, botY + bodyH);
  ctx.lineTo(leftX, midY + bodyH);
  ctx.lineTo(leftX, midY);
  ctx.closePath();
  ctx.stroke();

  // bottom face hint
  ctx.save();
  ctx.setTransform(hw / TILE, -hh / TILE, -hw / TILE, -hh / TILE, cx, botY + bodyH);
  ctx.drawImage(bottom, 0, 0);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(0, 0, TILE, TILE);
  ctx.restore();

  return canvas;
}

export function makeIconDataUrl(tiles, size = 84) {
  return makeBlockIcon(tiles, size).toDataURL('image/png');
}
