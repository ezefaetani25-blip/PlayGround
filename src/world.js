import * as THREE from 'three';
import { BLOCK, BLOCK_DEFS, isOpaque } from './blocks.js';
import { createAtlas, createWaterTexture } from './textures.js';

export const CHUNK_SIZE = 16;
export const WORLD_SIZE = 128;
export const WORLD_HEIGHT = 64;
export const SEA_LEVEL = 13;
export const WORLD_SEED = 817243;
export const WORLD_MIN = -WORLD_SIZE / 2;
export const WORLD_MAX = WORLD_SIZE / 2 - 1;
export const SPAWN = Object.freeze({ x: 8, z: 28, yaw: 0.03, pitch: -0.1 });

const HORIZON = 64;

function smoothstep(edge0, edge1, value) {
  const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function hash2(x, z, seed = 0) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(z | 0, 668265263) ^ Math.imul(seed | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function valueNoise(x, z, seed = 0) {
  const x0 = Math.floor(x);
  const z0 = Math.floor(z);
  const fx = x - x0;
  const fz = z - z0;
  const sx = fx * fx * (3 - 2 * fx);
  const sz = fz * fz * (3 - 2 * fz);
  const a = hash2(x0, z0, seed);
  const b = hash2(x0 + 1, z0, seed);
  const c = hash2(x0, z0 + 1, seed);
  const d = hash2(x0 + 1, z0 + 1, seed);
  const top = a + (b - a) * sx;
  const bottom = c + (d - c) * sx;
  return top + (bottom - top) * sz;
}

function fbm(x, z, octaves = 4, seed = 0) {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  let norm = 0;
  for (let i = 0; i < octaves; i += 1) {
    value += valueNoise(x * frequency, z * frequency, seed + i * 131) * amplitude;
    norm += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }
  return value / norm;
}

export function terrainHeight(x, z) {
  const broad = fbm(x * 0.017 + 12.7, z * 0.017 - 4.2, 5, 11);
  const medium = fbm(x * 0.05 - 8.3, z * 0.05 + 3.9, 3, 31);
  const fine = fbm(x * 0.15 + 4.1, z * 0.15 - 7.7, 2, 47);

  // Rolling valley floor.
  let h = 11.6 + broad * 6.2 + (medium - 0.5) * 2.6 + (fine - 0.5) * 1.0;

  // Grassy bluff the player starts on, with a clean view over the water.
  const bluffDistance = Math.hypot((x - 8) / 26, (z - 32) / 19);
  const bluff = Math.exp(-bluffDistance * bluffDistance * 2.1);
  h += bluff * 8.5;

  // Broad lake basin carved into the valley.
  const lakeDistance = Math.hypot(x / 48, (z + 22) / 34) + (fbm(x * 0.08, z * 0.08, 2, 71) - 0.5) * 0.12;
  const lake = 1 - smoothstep(0.4, 1.02, lakeDistance);
  const lakeBed = 8.1 + medium * 2.2 + fine * 0.7;
  h = h * (1 - lake * 0.98) + lakeBed * (lake * 0.98);

  // Northern mountain wall, broken into several ridges.
  const mountain = smoothstep(-32, -62, z + Math.sin(x * 0.05) * 6);
  const ridgeA = fbm(x * 0.035 + 4.2, z * 0.035 + 9.1, 4, 51);
  const ridgeB = fbm(x * 0.075 - 13.1, z * 0.075 - 2.4, 3, 57);
  const ridgeFold = 0.5 + 0.5 * Math.sin(x * 0.16 + ridgeA * 7 + z * 0.03);
  const peakLeft = 16 * Math.exp(-Math.pow((x + 20) / 16, 2));
  const peakRight = 22 * Math.exp(-Math.pow((x - 24) / 20, 2));
  const peaks = Math.pow(ridgeA, 1.5) * 26 + Math.pow(ridgeB, 1.35) * 11 + ridgeFold * 5;
  h += mountain * (7 + peaks + peakLeft + peakRight) * (0.55 + broad * 0.6);

  // Eastern highlands frame the far side of the lake.
  const east = smoothstep(30, 62, x) * smoothstep(-45, 5, z);
  h += east * (7 + ridgeA * 10);

  // Soften the world edge into a low shore.
  const radius = Math.hypot(x, z) / 66;
  const edge = smoothstep(0.78, 1.06, radius);
  h = h * (1 - edge) + 4.6 * edge;

  return Math.max(2, Math.floor(h));
}

function slopeAt(heightMap, x, z) {
  const sample = (sx, sz) => {
    const cx = Math.max(0, Math.min(WORLD_SIZE - 1, sx + HORIZON));
    const cz = Math.max(0, Math.min(WORLD_SIZE - 1, sz + HORIZON));
    return heightMap[cz * WORLD_SIZE + cx];
  };
  return Math.max(
    Math.abs(sample(x, z) - sample(x + 1, z)),
    Math.abs(sample(x, z) - sample(x - 1, z)),
    Math.abs(sample(x, z) - sample(x, z + 1)),
    Math.abs(sample(x, z) - sample(x, z - 1))
  );
}

const FACES = [
  {
    dir: [1, 0, 0],
    corners: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]],
    uvs: [[0, 0], [0, 1], [1, 1], [1, 0]],
    normal: [1, 0, 0],
    shade: 0.84,
    kind: 'side',
  },
  {
    dir: [-1, 0, 0],
    corners: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]],
    uvs: [[0, 0], [0, 1], [1, 1], [1, 0]],
    normal: [-1, 0, 0],
    shade: 0.8,
    kind: 'side',
  },
  {
    dir: [0, 1, 0],
    corners: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]],
    uvs: [[0, 0], [0, 1], [1, 1], [1, 0]],
    normal: [0, 1, 0],
    shade: 1,
    kind: 'top',
  },
  {
    dir: [0, -1, 0],
    corners: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]],
    uvs: [[0, 0], [1, 0], [1, 1], [0, 1]],
    normal: [0, -1, 0],
    shade: 0.52,
    kind: 'bottom',
  },
  {
    dir: [0, 0, 1],
    corners: [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]],
    uvs: [[0, 0], [0, 1], [1, 1], [1, 0]],
    normal: [0, 0, 1],
    shade: 0.76,
    kind: 'side',
  },
  {
    dir: [0, 0, -1],
    corners: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]],
    uvs: [[0, 0], [0, 1], [1, 1], [1, 0]],
    normal: [0, 0, -1],
    shade: 0.7,
    kind: 'side',
  },
];

const AO_LEVELS = [0.54, 0.68, 0.84, 1];

export class World {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.seed = options.seed ?? WORLD_SEED;
    this.data = new Uint8Array(WORLD_SIZE * WORLD_HEIGHT * WORLD_SIZE);
    this.heightMap = new Int16Array(WORLD_SIZE * WORLD_SIZE);
    this.chunks = new Map();
    this.edits = new Map();
    this.decorLights = [];
    this.chimney = null;
    this.atlas = createAtlas();
    this.waterTexture = createWaterTexture();
    this.materials = this.createMaterials();
    this.generated = false;
    this.visibleDistance = 8;
    this.waterTime = 0;
  }

  createMaterials() {
    const opaque = new THREE.MeshStandardMaterial({
      map: this.atlas.texture,
      vertexColors: true,
      roughness: 0.93,
      metalness: 0,
      side: THREE.FrontSide,
      dithering: true,
    });
    const glass = new THREE.MeshPhysicalMaterial({
      map: this.atlas.texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.62,
      roughness: 0.08,
      metalness: 0.12,
      depthWrite: false,
      side: THREE.DoubleSide,
      envMapIntensity: 0.6,
    });
    const water = new THREE.MeshPhysicalMaterial({
      map: this.waterTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.82,
      roughness: 0.14,
      metalness: 0.08,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const glow = new THREE.MeshStandardMaterial({
      map: this.atlas.texture,
      vertexColors: true,
      emissiveMap: this.atlas.texture,
      emissive: new THREE.Color(0xffa84d),
      emissiveIntensity: 1.15,
      roughness: 0.74,
      metalness: 0,
    });
    return { opaque, glass, water, glow };
  }

  index(x, y, z) {
    return (y * WORLD_SIZE + (z + HORIZON)) * WORLD_SIZE + (x + HORIZON);
  }

  inBounds(x, y, z) {
    return x >= WORLD_MIN && x <= WORLD_MAX && z >= WORLD_MIN && z <= WORLD_MAX && y >= 0 && y < WORLD_HEIGHT;
  }

  getBlock(x, y, z) {
    if (y < 0) return BLOCK.BEDROCK;
    if (y >= WORLD_HEIGHT) return BLOCK.AIR;
    if (x < WORLD_MIN || x > WORLD_MAX || z < WORLD_MIN || z > WORLD_MAX) return BLOCK.AIR;
    return this.data[this.index(x, y, z)];
  }

  setRaw(x, y, z, id) {
    if (!this.inBounds(x, y, z)) return;
    this.data[this.index(x, y, z)] = id;
  }

  setIfAir(x, y, z, id) {
    if (this.getBlock(x, y, z) === BLOCK.AIR) this.setRaw(x, y, z, id);
  }

  heightAt(x, z) {
    const cx = Math.max(0, Math.min(WORLD_SIZE - 1, x + HORIZON));
    const cz = Math.max(0, Math.min(WORLD_SIZE - 1, z + HORIZON));
    return this.heightMap[cz * WORLD_SIZE + cx];
  }

  surfaceY(x, z) {
    for (let y = WORLD_HEIGHT - 1; y >= 0; y -= 1) {
      const id = this.getBlock(x, y, z);
      if (id !== BLOCK.AIR && id !== BLOCK.WATER) return y;
    }
    return 0;
  }

  generate() {
    this.data.fill(0);
    this.edits.clear();

    for (let z = WORLD_MIN; z <= WORLD_MAX; z += 1) {
      for (let x = WORLD_MIN; x <= WORLD_MAX; x += 1) {
        this.heightMap[(z + HORIZON) * WORLD_SIZE + (x + HORIZON)] = terrainHeight(x, z);
      }
    }

    for (let z = WORLD_MIN; z <= WORLD_MAX; z += 1) {
      for (let x = WORLD_MIN; x <= WORLD_MAX; x += 1) {
        const h = this.heightAt(x, z);
        const slope = slopeAt(this.heightMap, x, z);
        const beach = h <= SEA_LEVEL + 1;
        const snowy = h >= 34;
        const underwater = h < SEA_LEVEL;

        for (let y = 0; y <= h; y += 1) {
          let id = BLOCK.STONE;
          if (y === 0) {
            id = BLOCK.BEDROCK;
          } else if (y === h) {
            if (underwater) id = h < SEA_LEVEL - 3 ? BLOCK.GRAVEL : BLOCK.SAND;
            else if (beach) id = BLOCK.SAND;
            else if (snowy) id = BLOCK.SNOW;
            else if (slope >= 2 && h > 18) id = BLOCK.STONE;
            else if (slope >= 3) id = BLOCK.STONE;
            else id = BLOCK.GRASS;
          } else if (y > h - 4) {
            if (underwater || beach) id = BLOCK.SAND;
            else if (snowy) id = BLOCK.STONE;
            else if (slope >= 2 && h > 18) id = BLOCK.STONE;
            else if (slope >= 3) id = BLOCK.STONE;
            else id = BLOCK.DIRT;
          }
          this.setRaw(x, y, z, id);
        }

        for (let y = h + 1; y <= SEA_LEVEL; y += 1) {
          this.setRaw(x, y, z, BLOCK.WATER);
        }
      }
    }

    this.decorLights = [];
    this.chimney = null;
    this.addTrees();
    this.addBoulders();
    this.addCabin(24, 2);
    this.generated = true;
  }

  addTrees() {
    for (let gz = -58; gz < 58; gz += 4) {
      for (let gx = -58; gx < 58; gx += 4) {
        const x = gx + Math.floor(hash2(gx, gz, 301) * 4);
        const z = gz + Math.floor(hash2(gx, gz, 302) * 4);
        const h = this.heightAt(x, z);
        if (h < SEA_LEVEL + 2 || h > 35) continue;
        if (slopeAt(this.heightMap, x, z) > 1) continue;
        if (Math.hypot(x - SPAWN.x, z - SPAWN.z) < 7) continue;
        if (x > 19 && x < 30 && z > -4 && z < 8) continue;
        const viewDx = x - SPAWN.x;
        const viewDz = z - SPAWN.z;
        if (viewDz < 0 && Math.abs(Math.atan2(viewDx, -viewDz)) < 0.62 && Math.hypot(viewDx, viewDz) < 42) continue;
        const density = fbm(x * 0.045 + 2.7, z * 0.045 - 5.1, 2, 303);
        if (hash2(gx, gz, 304) > 0.045 + density * 0.055) continue;
        const type = hash2(gx, gz, 305) > 0.76 ? 'pine' : 'oak';
        this.plantTree(x, z, type);
      }
    }

    this.plantTree(-8, 30, 'oak', 1.08);
    this.plantTree(22, 35, 'oak', 1.18);
    this.plantTree(-17, 18, 'pine', 1.06);
  }

  plantTree(x, z, type = 'oak', scale = 1) {
    const ground = this.heightAt(x, z);
    if (this.getBlock(x, ground, z) !== BLOCK.GRASS) return;
    if (ground < SEA_LEVEL + 1) return;

    const base = ground + 1;
    if (type === 'pine') {
      const trunk = Math.round((6 + Math.floor(hash2(x, z, 311) * 3)) * scale);
      for (let y = 0; y < trunk; y += 1) this.setRaw(x, base + y, z, BLOCK.LOG);
      const top = base + trunk - 1;
      const layers = [
        [2, 0],
        [2, 1],
        [1, 2],
        [2, 3],
        [1, 4],
        [1, 5],
        [0, 6],
      ];
      layers.forEach(([radius, offset], index) => {
        const y = top - offset;
        for (let dx = -radius; dx <= radius; dx += 1) {
          for (let dz = -radius; dz <= radius; dz += 1) {
            if (Math.abs(dx) === radius && Math.abs(dz) === radius) continue;
            if (hash2(x + dx, z + dz, 320 + index) < 0.18) continue;
            this.setIfAir(x + dx, y, z + dz, BLOCK.LEAVES);
          }
        }
      });
      this.setIfAir(x, top + 1, z, BLOCK.LEAVES);
      return;
    }

    const trunk = Math.round((4 + Math.floor(hash2(x, z, 312) * 3)) * scale);
    for (let y = 0; y < trunk; y += 1) this.setRaw(x, base + y, z, BLOCK.LOG);
    const crown = base + trunk;
    for (let dy = -2; dy <= 2; dy += 1) {
      const radius = dy === 2 ? 1 : 2;
      for (let dx = -radius; dx <= radius; dx += 1) {
        for (let dz = -radius; dz <= radius; dz += 1) {
          const distance = Math.abs(dx) + Math.abs(dz) + Math.max(0, dy) * 1.15;
          if (distance > (dy === 2 ? 1.5 : 3.6)) continue;
          if (hash2(x + dx * 3 + dy, z + dz * 5 - dy, 313) < 0.14) continue;
          this.setIfAir(x + dx, crown + dy, z + dz, BLOCK.LEAVES);
        }
      }
    }
    this.setIfAir(x, crown + 3, z, BLOCK.LEAVES);
  }

  addBoulders() {
    const spots = [
      [-23, 26],
      [18, 29],
      [31, 14],
      [-18, 10],
      [-34, 18],
      [-31, 1],
      [37, 24],
      [-6, 43],
    ];
    spots.forEach(([x, z], index) => {
      const base = this.heightAt(x, z) + 1;
      const radius = 1 + Math.floor(hash2(x, z, 401) * 2);
      for (let dx = -radius; dx <= radius; dx += 1) {
        for (let dz = -radius; dz <= radius; dz += 1) {
          const distance = Math.hypot(dx, dz);
          if (distance > radius + 0.2) continue;
          const height = Math.max(1, Math.round((radius - distance + 0.8) * (0.8 + hash2(x + dx, z + dz, 402) * 0.7)));
          for (let dy = 0; dy < height; dy += 1) {
            const id = hash2(x + dx * 3, z + dz * 7 + dy, 403) > 0.55 ? BLOCK.COBBLE : BLOCK.STONE;
            this.setIfAir(x + dx, base + dy, z + dz, id);
          }
        }
      }
      if (index % 3 === 0) {
        this.setIfAir(x, base + 2, z, BLOCK.LEAVES);
      }
    });
  }

  addCabin(cx, cz) {
    const base = Math.max(this.heightAt(cx, cz), SEA_LEVEL + 2);
    const floorY = base;

    for (let dx = -6; dx <= 6; dx += 1) {
      for (let dz = -5; dz <= 7; dz += 1) {
        const x = cx + dx;
        const z = cz + dz;
        const h = this.heightAt(x, z);
        for (let y = base + 1; y <= Math.min(WORLD_HEIGHT - 1, base + 13); y += 1) {
          this.setRaw(x, y, z, BLOCK.AIR);
        }
        if (h < base) {
          for (let y = h + 1; y <= base; y += 1) this.setRaw(x, y, z, BLOCK.DIRT);
        } else if (h > base) {
          for (let y = base + 1; y <= h; y += 1) this.setRaw(x, y, z, BLOCK.AIR);
        }
        this.setRaw(x, base, z, BLOCK.GRASS);
      }
    }

    for (let dx = -3; dx <= 3; dx += 1) {
      for (let dz = -2; dz <= 3; dz += 1) {
        this.setRaw(cx + dx, floorY, cz + dz, BLOCK.PLANKS);
      }
    }

    const wallTop = base + 4;
    for (let y = base + 1; y <= wallTop; y += 1) {
      for (let dx = -3; dx <= 3; dx += 1) {
        for (let dz = -2; dz <= 3; dz += 1) {
          const edge = Math.abs(dx) === 3 || dz === -2 || dz === 3;
          if (!edge) continue;
          const corner = Math.abs(dx) === 3 && (dz === -2 || dz === 3);
          let id = corner ? BLOCK.LOG : BLOCK.PLANKS;
          if (!corner && y <= base + 2) {
            if (dz === 3 && dx === 0) id = BLOCK.AIR;
            if ((dz === 3 || dz === -2) && (dx === -2 || dx === 2) && y === base + 2) id = BLOCK.GLASS;
            if (Math.abs(dx) === 3 && dz === 0 && y === base + 2) id = BLOCK.GLASS;
          }
          this.setRaw(cx + dx, y, cz + dz, id);
        }
      }
    }

    this.setRaw(cx, base + 4, cz + 3, BLOCK.GLOWSTONE);
    this.setRaw(cx, base + 4, cz, BLOCK.GLOWSTONE);
    this.setRaw(cx + 1, base + 4, cz - 1, BLOCK.GLOWSTONE);

    for (let dx = -4; dx <= 4; dx += 1) {
      for (let dz = -3; dz <= 4; dz += 1) this.setRaw(cx + dx, base + 5, cz + dz, BLOCK.PLANKS);
    }
    for (let dx = -3; dx <= 3; dx += 1) {
      for (let dz = -2; dz <= 3; dz += 1) this.setRaw(cx + dx, base + 6, cz + dz, BLOCK.PLANKS);
    }
    for (let dx = -2; dx <= 2; dx += 1) {
      for (let dz = -2; dz <= 3; dz += 1) this.setRaw(cx + dx, base + 7, cz + dz, BLOCK.PLANKS);
    }
    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dz = -2; dz <= 3; dz += 1) this.setRaw(cx + dx, base + 8, cz + dz, BLOCK.PLANKS);
    }
    for (let dz = -3; dz <= 4; dz += 1) this.setRaw(cx, base + 9, cz + dz, BLOCK.LOG);

    for (let y = base + 1; y <= base + 10; y += 1) {
      this.setRaw(cx + 2, y, cz - 1, y === base + 10 ? BLOCK.BRICK : BLOCK.COBBLE);
    }
    this.chimney = { x: cx + 2.5, y: base + 11, z: cz - 0.5 };

    this.decorLights.push({ x: cx + 0.5, y: base + 4.2, z: cz + 3.6, color: 0xffb568, intensity: 14, distance: 13 });
    this.decorLights.push({ x: cx + 0.5, y: base + 2.6, z: cz + 0.5, color: 0xffb568, intensity: 8, distance: 8 });

    this.buildPath(SPAWN.x, SPAWN.z + 3, SPAWN.x, 13);
    this.buildPath(SPAWN.x, 13, 20, 11);
    this.buildPath(20, 11, 30, 10);
    this.buildPath(30, 10, 26, 18);
    this.buildPath(26, 18, 16, 24);
    this.buildPath(16, 24, SPAWN.x, SPAWN.z + 3);

    for (let dz = -13; dz <= -3; dz += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        if (dx === 0 && dz % 2 === 0) continue;
        this.setRaw(cx + dx, SEA_LEVEL + 1, cz + dz, BLOCK.PLANKS);
      }
      if (dz % 3 === 0) {
        for (let y = this.surfaceY(cx + 2, cz + dz) + 1; y <= SEA_LEVEL; y += 1) {
          this.setRaw(cx + 2, y, cz + dz, BLOCK.LOG);
        }
      }
    }
  }

  buildPath(x0, z0, x1, z1) {
    const steps = Math.max(Math.abs(x1 - x0), Math.abs(z1 - z0));
    for (let i = 0; i <= steps; i += 1) {
      const t = i / Math.max(1, steps);
      const x = Math.round(x0 + (x1 - x0) * t);
      const z = Math.round(z0 + (z1 - z0) * t);
      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dz = -1; dz <= 1; dz += 1) {
          if (Math.abs(dx) + Math.abs(dz) > 1) continue;
          const h = this.heightAt(x + dx, z + dz);
          if (h < SEA_LEVEL) continue;
          this.setRaw(x + dx, h, z + dz, hash2(x + dx, z + dz, 501) > 0.25 ? BLOCK.GRAVEL : BLOCK.COBBLE);
          for (let y = h + 1; y <= h + 5; y += 1) this.setRaw(x + dx, y, z + dz, BLOCK.AIR);
        }
      }
    }
  }

  buildAll() {
    for (let cz = 0; cz < WORLD_SIZE / CHUNK_SIZE; cz += 1) {
      for (let cx = 0; cx < WORLD_SIZE / CHUNK_SIZE; cx += 1) {
        this.buildChunk(cx, cz);
      }
    }
  }

  chunkKey(cx, cz) {
    return `${cx},${cz}`;
  }

  buildChunk(cx, cz) {
    const key = this.chunkKey(cx, cz);
    let chunk = this.chunks.get(key);
    if (!chunk) {
      const group = new THREE.Group();
      group.position.set(WORLD_MIN + cx * CHUNK_SIZE, 0, WORLD_MIN + cz * CHUNK_SIZE);
      this.scene.add(group);
      chunk = { group, cx, cz, meshes: {}, geometries: [] };
      this.chunks.set(key, chunk);
    } else {
      for (const mesh of Object.values(chunk.meshes)) {
        chunk.group.remove(mesh);
        mesh.geometry.dispose();
      }
      chunk.meshes = {};
      chunk.geometries = [];
    }

    const buckets = {
      opaque: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
      glass: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
      water: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
      glow: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
    };

    const originX = WORLD_MIN + cx * CHUNK_SIZE;
    const originZ = WORLD_MIN + cz * CHUNK_SIZE;

    for (let lz = 0; lz < CHUNK_SIZE; lz += 1) {
      for (let lx = 0; lx < CHUNK_SIZE; lx += 1) {
        const wx = originX + lx;
        const wz = originZ + lz;
        for (let y = 0; y < WORLD_HEIGHT; y += 1) {
          const id = this.getBlock(wx, y, wz);
          if (id === BLOCK.AIR) continue;
          if (id === BLOCK.WATER) {
            this.addBlockFaces(buckets.water, wx, y, wz, id, lx, lz, true);
            continue;
          }
          if (id === BLOCK.GLASS) {
            this.addBlockFaces(buckets.glass, wx, y, wz, id, lx, lz, false);
            continue;
          }
          if (id === BLOCK.GLOWSTONE) {
            this.addBlockFaces(buckets.glow, wx, y, wz, id, lx, lz, false);
            continue;
          }
          this.addBlockFaces(buckets.opaque, wx, y, wz, id, lx, lz, false);
        }
      }
    }

    const meshConfigs = [
      ['opaque', this.materials.opaque, true, false],
      ['glass', this.materials.glass, false, true],
      ['water', this.materials.water, false, true],
      ['glow', this.materials.glow, false, false],
    ];

    for (const [name, material, castShadow, transparent] of meshConfigs) {
      const geometry = this.createGeometry(buckets[name]);
      if (!geometry) continue;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = castShadow;
      mesh.receiveShadow = name !== 'water';
      mesh.renderOrder = transparent ? 2 : 0;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      chunk.group.add(mesh);
      chunk.meshes[name] = mesh;
      chunk.geometries.push(geometry);
    }

    this.applyVisibility(chunk);
  }

  addBlockFaces(bucket, x, y, z, id, localX, localZ, isWater) {
    const def = BLOCK_DEFS[id];
    if (!def) return;
    const tint = this.blockTint(id, x, y, z);
    const faces = isWater ? [FACES[2], FACES[0], FACES[1], FACES[4], FACES[5]] : FACES;

    for (const face of faces) {
      const nx = x + face.dir[0];
      const ny = y + face.dir[1];
      const nz = z + face.dir[2];
      const neighbor = this.getBlock(nx, ny, nz);

      if (isWater) {
        if (neighbor === BLOCK.WATER || (isOpaque(neighbor) && neighbor !== BLOCK.GLASS)) continue;
      } else if (id === BLOCK.GLASS) {
        if (isOpaque(neighbor) || neighbor === BLOCK.GLASS) continue;
      } else {
        if (isOpaque(neighbor)) continue;
        if (neighbor === BLOCK.WATER && face.kind === 'bottom') continue;
      }

      const tileName = face.kind === 'top' ? def.tiles.top : face.kind === 'bottom' ? def.tiles.bottom : def.tiles.side;
      const uv = this.tileUV(tileName);
      const normal = face.normal;
      const baseIndex = bucket.positions.length / 3;

      for (let i = 0; i < 4; i += 1) {
        const corner = face.corners[i];
        bucket.positions.push(localX + corner[0], y + corner[1], localZ + corner[2]);
        bucket.normals.push(normal[0], normal[1], normal[2]);

        if (isWater) {
          const uv0 = face.uvs[i];
          bucket.uvs.push(uv0[0], uv0[1]);
        } else {
          const uv0 = face.uvs[i];
          bucket.uvs.push(uv.u0 + uv0[0] * (uv.u1 - uv.u0), uv.v0 + uv0[1] * (uv.v1 - uv.v0));
        }

        const ao = this.vertexAO(x, y, z, face, corner);
        const shade = face.shade * AO_LEVELS[ao];
        bucket.colors.push(shade * tint[0], shade * tint[1], shade * tint[2]);
      }

      bucket.indices.push(baseIndex, baseIndex + 1, baseIndex + 2, baseIndex, baseIndex + 2, baseIndex + 3);
    }
  }

  vertexAO(x, y, z, face, corner) {
    const normalAxis = face.normal[0] !== 0 ? 0 : face.normal[1] !== 0 ? 1 : 2;
    const axes = [0, 1, 2].filter((axis) => axis !== normalAxis);
    const signs = axes.map((axis) => (corner[axis] === 1 ? 1 : -1));
    const offset = [face.dir[0], face.dir[1], face.dir[2]];

    const side1 = this.occludesAt(x + offset[0] + (axes[0] === 0 ? signs[0] : 0), y + offset[1] + (axes[0] === 1 ? signs[0] : 0), z + offset[2] + (axes[0] === 2 ? signs[0] : 0));
    const side2 = this.occludesAt(x + offset[0] + (axes[1] === 0 ? signs[1] : 0), y + offset[1] + (axes[1] === 1 ? signs[1] : 0), z + offset[2] + (axes[1] === 2 ? signs[1] : 0));
    const cornerBlock = this.occludesAt(
      x + offset[0] + (axes[0] === 0 ? signs[0] : 0) + (axes[1] === 0 ? signs[1] : 0),
      y + offset[1] + (axes[0] === 1 ? signs[0] : 0) + (axes[1] === 1 ? signs[1] : 0),
      z + offset[2] + (axes[0] === 2 ? signs[0] : 0) + (axes[1] === 2 ? signs[1] : 0)
    );

    if (side1 && side2) return 0;
    return 3 - (Number(side1) + Number(side2) + Number(cornerBlock));
  }

  occludesAt(x, y, z) {
    const id = this.getBlock(x, y, z);
    return isOpaque(id) && id !== BLOCK.GLASS;
  }

  blockTint(id, x, y, z) {
    const variation = hash2(x * 3 + y, z * 5 - y, 601);
    if (id === BLOCK.LEAVES) {
      const v = 0.82 + variation * 0.26;
      return [v * 0.94, v, v * 0.82];
    }
    if (id === BLOCK.GRASS) {
      const v = 0.94 + variation * 0.1;
      return [v * 0.98, v, v * 0.92];
    }
    if (id === BLOCK.STONE || id === BLOCK.COBBLE) {
      const v = 0.94 + variation * 0.09;
      return [v, v, v];
    }
    if (id === BLOCK.SAND) {
      const v = 0.96 + variation * 0.07;
      return [v, v * 0.99, v * 0.94];
    }
    if (id === BLOCK.GLOWSTONE) {
      return [1.05, 1.02, 0.94];
    }
    const v = 0.97 + variation * 0.05;
    return [v, v, v];
  }

  tileUV(tileName) {
    const tile = this.atlas.tiles[tileName];
    if (!tile) return { u0: 0, u1: 1, v0: 0, v1: 1 };
    const step = 1 / 4;
    const pad = 0.5 / 128;
    const u0 = tile.col * step + pad;
    const u1 = (tile.col + 1) * step - pad;
    const v1 = 1 - tile.row * step - pad;
    const v0 = 1 - (tile.row + 1) * step + pad;
    return { u0, u1, v0, v1 };
  }

  createGeometry(bucket) {
    if (!bucket.indices.length) return null;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(bucket.positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(bucket.normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(bucket.uvs, 2));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(bucket.colors, 3));
    geometry.setIndex(bucket.indices);
    geometry.computeBoundingSphere();
    return geometry;
  }

  applyVisibility(chunk) {
    const distance = Math.hypot((chunk.cx + 0.5) * CHUNK_SIZE - WORLD_SIZE / 2, (chunk.cz + 0.5) * CHUNK_SIZE - WORLD_SIZE / 2);
    chunk.group.visible = distance <= this.visibleDistance * CHUNK_SIZE + CHUNK_SIZE * 0.7;
  }

  updateVisibility(position, distanceChunks = this.visibleDistance) {
    this.visibleDistance = distanceChunks;
    const px = position.x + WORLD_SIZE / 2;
    const pz = position.z + WORLD_SIZE / 2;
    for (const chunk of this.chunks.values()) {
      const cx = (chunk.cx + 0.5) * CHUNK_SIZE;
      const cz = (chunk.cz + 0.5) * CHUNK_SIZE;
      chunk.group.visible = Math.hypot(cx - px, cz - pz) <= distanceChunks * CHUNK_SIZE + CHUNK_SIZE * 0.7;
    }
  }

  rebuildChunk(cx, cz) {
    if (cx < 0 || cz < 0 || cx >= WORLD_SIZE / CHUNK_SIZE || cz >= WORLD_SIZE / CHUNK_SIZE) return;
    this.buildChunk(cx, cz);
  }

  rebuildAround(x, z) {
    const cx = Math.floor((x - WORLD_MIN) / CHUNK_SIZE);
    const cz = Math.floor((z - WORLD_MIN) / CHUNK_SIZE);
    const localX = x - WORLD_MIN - cx * CHUNK_SIZE;
    const localZ = z - WORLD_MIN - cz * CHUNK_SIZE;
    this.rebuildChunk(cx, cz);
    if (localX === 0) this.rebuildChunk(cx - 1, cz);
    if (localX === CHUNK_SIZE - 1) this.rebuildChunk(cx + 1, cz);
    if (localZ === 0) this.rebuildChunk(cx, cz - 1);
    if (localZ === CHUNK_SIZE - 1) this.rebuildChunk(cx, cz + 1);
  }

  setBlock(x, y, z, id) {
    if (!this.inBounds(x, y, z)) return false;
    const current = this.getBlock(x, y, z);
    if (current === id) return false;
    this.setRaw(x, y, z, id);
    this.edits.set(`${x},${y},${z}`, id);
    this.rebuildAround(x, z);
    return true;
  }

  applyEdits(entries = []) {
    for (const entry of entries) {
      if (!Array.isArray(entry) || entry.length < 4) continue;
      const [x, y, z, id] = entry;
      if (!this.inBounds(x, y, z)) continue;
      this.setRaw(x, y, z, id);
      this.edits.set(`${x},${y},${z}`, id);
    }
  }

  serializeEdits() {
    const result = [];
    for (const [key, id] of this.edits) {
      const [x, y, z] = key.split(',').map(Number);
      result.push([x, y, z, id]);
    }
    return result;
  }

  get editCount() {
    return this.edits.size;
  }

  isBlocking(x, y, z) {
    const id = this.getBlock(x, y, z);
    return Boolean(BLOCK_DEFS[id]?.solid);
  }

  raycast(origin, direction, maxDistance = 7) {
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);
    const stepX = direction.x >= 0 ? 1 : -1;
    const stepY = direction.y >= 0 ? 1 : -1;
    const stepZ = direction.z >= 0 ? 1 : -1;
    const deltaX = direction.x === 0 ? Infinity : Math.abs(1 / direction.x);
    const deltaY = direction.y === 0 ? Infinity : Math.abs(1 / direction.y);
    const deltaZ = direction.z === 0 ? Infinity : Math.abs(1 / direction.z);
    let maxX = direction.x === 0 ? Infinity : (direction.x > 0 ? x + 1 - origin.x : origin.x - x) * deltaX;
    let maxY = direction.y === 0 ? Infinity : (direction.y > 0 ? y + 1 - origin.y : origin.y - y) * deltaY;
    let maxZ = direction.z === 0 ? Infinity : (direction.z > 0 ? z + 1 - origin.z : origin.z - z) * deltaZ;
    let normal = [0, 0, 0];
    let distance = 0;

    while (distance <= maxDistance) {
      const id = this.getBlock(x, y, z);
      if (id !== BLOCK.AIR && id !== BLOCK.WATER) {
        return { x, y, z, id, normal: [...normal], distance };
      }
      if (maxX < maxY && maxX < maxZ) {
        x += stepX;
        distance = maxX;
        maxX += deltaX;
        normal = [-stepX, 0, 0];
      } else if (maxY < maxZ) {
        y += stepY;
        distance = maxY;
        maxY += deltaY;
        normal = [0, -stepY, 0];
      } else {
        z += stepZ;
        distance = maxZ;
        maxZ += deltaZ;
        normal = [0, 0, -stepZ];
      }
    }
    return null;
  }

  update(dt) {
    this.waterTime += dt;
    this.waterTexture.offset.x = Math.sin(this.waterTime * 0.035) * 0.045;
    this.waterTexture.offset.y = this.waterTime * 0.012;
  }

  dispose() {
    for (const chunk of this.chunks.values()) {
      for (const mesh of Object.values(chunk.meshes)) {
        chunk.group.remove(mesh);
        mesh.geometry.dispose();
      }
      this.scene.remove(chunk.group);
    }
    this.chunks.clear();
    Object.values(this.materials).forEach((material) => material.dispose());
    this.atlas.texture.dispose();
    this.waterTexture.dispose();
  }
}
