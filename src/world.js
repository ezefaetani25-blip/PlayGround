import * as THREE from 'three';
import { BLOCKS, AIR, WATER, GRASS, BEDROCK, occludes } from './blocks.js';

export const CHUNK = 16;
export const WORLD_HEIGHT = 48;
export const WATER_LEVEL = 17;
export const WORLD_SIZE = 96;

export const FACES = [
  {
    axis: 0,
    dir: 1,
    key: 'side',
    corners: [
      [1, 0, 1],
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ],
    uvs: [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
    shade: 0.9,
  },
  {
    axis: 0,
    dir: -1,
    key: 'side',
    corners: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    uvs: [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
    shade: 0.84,
  },
  {
    axis: 2,
    dir: 1,
    key: 'side',
    corners: [
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
    uvs: [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
    shade: 0.88,
  },
  {
    axis: 2,
    dir: -1,
    key: 'side',
    corners: [
      [1, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    uvs: [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
    shade: 0.82,
  },
  {
    axis: 1,
    dir: 1,
    key: 'top',
    corners: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
    uvs: [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
    shade: 1,
  },
  {
    axis: 1,
    dir: -1,
    key: 'bottom',
    corners: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    uvs: [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
    shade: 0.58,
  },
];

const AO_LEVELS = [0.44, 0.64, 0.83, 1];

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hashSeed(seed) {
  if (typeof seed === 'number' && Number.isFinite(seed)) return seed >>> 0;
  const str = String(seed ?? 'cubehaven');
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRandom(seed) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeNoise(seed) {
  const s = seed >>> 0;
  function hash2(ix, iz) {
    let h = Math.imul(ix | 0, 374761393) + Math.imul(iz | 0, 668265263) + Math.imul(s, 1442695041);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }
  function noise2(x, z) {
    const ix = Math.floor(x);
    const iz = Math.floor(z);
    const fx = x - ix;
    const fz = z - iz;
    const u = fx * fx * (3 - 2 * fx);
    const v = fz * fz * (3 - 2 * fz);
    const a = hash2(ix, iz);
    const b = hash2(ix + 1, iz);
    const c = hash2(ix, iz + 1);
    const d = hash2(ix + 1, iz + 1);
    return lerp(lerp(a, b, u), lerp(c, d, u), v);
  }
  function fbm(x, z, octaves = 4, lacunarity = 2, gain = 0.5) {
    let amp = 1;
    let freq = 1;
    let sum = 0;
    let norm = 0;
    for (let i = 0; i < octaves; i++) {
      sum += noise2(x * freq, z * freq) * amp;
      norm += amp;
      amp *= gain;
      freq *= lacunarity;
    }
    return sum / norm;
  }
  return { noise2, fbm };
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function createGeometryData() {
  return { pos: [], norm: [], uv: [], col: [], idx: [] };
}

function toGeometry(d) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(d.pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(d.norm, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(d.uv, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(d.col, 3));
  geo.setIndex(new THREE.Uint32BufferAttribute(d.idx, 1));
  geo.computeBoundingSphere();
  geo.computeBoundingBox();
  return geo;
}

export class World {
  constructor(scene, atlas, seed = 1337, size = WORLD_SIZE, edits = null) {
    this.scene = scene;
    this.atlas = atlas;
    this.seed = seed;
    this.seedHash = hashSeed(seed);
    this.size = size;
    this.chunksX = Math.ceil(size / CHUNK);
    this.chunksZ = Math.ceil(size / CHUNK);
    this.height = WORLD_HEIGHT;
    this.data = new Uint8Array(size * size * WORLD_HEIGHT);
    this.heights = new Int16Array(size * size);
    this.surfaces = new Uint8Array(size * size);
    this.edits = new Map();
    this.chunkGroups = [];
    this.chunkData = [];
    this.waterUniforms = { uTime: { value: 0 } };
    this.rng = makeRandom(this.seedHash ^ 0x9e3779b9);
    this.noise = makeNoise(this.seedHash);
    this.materials = this.createMaterials();
    this.spawn = new THREE.Vector3(size / 2 + 0.5, 30, size / 2 + 0.5);
    this.time = 0;
    this._progress = 0;
    if (edits) this.pendingEdits = edits;
  }

  createMaterials() {
    const map = this.atlas.texture;
    const common = { map, vertexColors: true };
    const opaque = new THREE.MeshLambertMaterial(common);
    const cutout = new THREE.MeshLambertMaterial({
      ...common,
      alphaTest: 0.42,
      side: THREE.DoubleSide,
    });
    const water = new THREE.MeshLambertMaterial({
      ...common,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      side: THREE.DoubleSide,
      emissive: new THREE.Color(0x0d3448),
      emissiveIntensity: 0.4,
    });
    const glass = new THREE.MeshLambertMaterial({
      ...common,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const glow = new THREE.MeshBasicMaterial(common);
    glow.color = new THREE.Color(1.35, 1.24, 1.05);

    water.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.waterUniforms.uTime;
      shader.vertexShader = `uniform float uTime;\n${shader.vertexShader}`;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        if (position.y > 0.999) {
          vec4 waveWorld = modelMatrix * vec4(transformed, 1.0);
          transformed.y += sin(waveWorld.x * 0.72 + waveWorld.z * 0.51 + uTime * 1.7) * 0.045;
        }`
      );
    };

    return { opaque, cutout, water, glass, glow };
  }

  index(x, y, z) {
    return (y * this.size + z) * this.size + x;
  }

  getBlock(x, y, z) {
    if (x < 0 || z < 0 || x >= this.size || z >= this.size || y < 0 || y >= this.height) return AIR;
    return this.data[(y * this.size + z) * this.size + x];
  }

  setRaw(x, y, z, id) {
    if (x < 0 || z < 0 || x >= this.size || z >= this.size || y < 0 || y >= this.height) return;
    this.data[(y * this.size + z) * this.size + x] = id;
  }

  isSolid(x, y, z) {
    return !!BLOCKS[this.getBlock(x, y, z)]?.solid;
  }

  surfaceAt(x, z) {
    if (x < 0 || z < 0 || x >= this.size || z >= this.size) return WATER_LEVEL;
    for (let y = this.height - 1; y >= 0; y--) {
      const b = this.getBlock(x, y, z);
      if (b !== AIR && b !== WATER && BLOCKS[b]?.solid) return y;
    }
    return 0;
  }

  async generate(onProgress = () => {}) {
    const size = this.size;
    const center = size / 2;
    const peakX = center + 17;
    const peakZ = center - 12;
    const lakeX = center - 19;
    const lakeZ = center + 17;

    onProgress(0.02, 'Raising mountains…');
    for (let z = 0; z < size; z++) {
      for (let x = 0; x < size; x++) {
        const dx = (x + 0.5 - center) / (size / 2);
        const dz = (z + 0.5 - center) / (size / 2);
        const d = Math.sqrt(dx * dx + dz * dz);
        const island = smoothstep(1.03, 0.48, d);
        const n1 = this.noise.fbm(x * 0.055 + 11.3, z * 0.055 - 7.7, 4);
        const n2 = this.noise.fbm(x * 0.125 - 30.5, z * 0.125 + 18.2, 3);
        const peakD = (x - peakX) ** 2 + (z - peakZ) ** 2;
        const peak = Math.exp(-peakD / (2 * 13 * 13));
        const lakeD = (x - lakeX) ** 2 + (z - lakeZ) ** 2;
        const lake = Math.exp(-lakeD / (2 * 7.5 * 7.5));
        let h = 12 + island * (7 + n1 * 9 + n2 * 2.5) + peak * island * 14 - (1 - island) * 9;
        h -= lake * 10 * smoothstep(0.35, 0.85, island);
        h = Math.round(Math.max(4, Math.min(this.height - 6, h)));
        this.heights[z * size + x] = h;
      }
    }

    onProgress(0.14, 'Laying the beaches…');
    for (let z = 0; z < size; z++) {
      for (let x = 0; x < size; x++) {
        const h = this.heights[z * size + x];
        const west = this.heights[z * size + Math.max(0, x - 1)];
        const east = this.heights[z * size + Math.min(size - 1, x + 1)];
        const north = this.heights[Math.max(0, z - 1) * size + x];
        const south = this.heights[Math.min(size - 1, z + 1) * size + x];
        const slope = Math.max(Math.abs(h - west), Math.abs(h - east), Math.abs(h - north), Math.abs(h - south));
        let surface;
        if (h < WATER_LEVEL - 2) surface = h < 11 ? 14 : 5;
        else if (h <= WATER_LEVEL + 2) surface = 5;
        else if (h >= 35) surface = 13;
        else if (h >= 32 || slope >= 4) surface = 3;
        else surface = 1;
        this.surfaces[z * size + x] = surface;
      }
    }

    onProgress(0.2, 'Stacking stone and soil…');
    let done = 0;
    for (let cz = 0; cz < this.chunksZ; cz++) {
      for (let cx = 0; cx < this.chunksX; cx++) {
        this.fillChunk(cx, cz);
        done++;
        if (done % 4 === 0) {
          onProgress(0.2 + (done / (this.chunksX * this.chunksZ)) * 0.34, 'Stacking stone and soil…');
          await nextFrame();
        }
      }
    }

    onProgress(0.56, 'Planting the forest…');
    this.plantTrees();
    await nextFrame();
    this.scatterRocks();

    onProgress(0.63, 'Carving the shoreline…');
    if (this.pendingEdits) {
      for (const [key, id] of this.pendingEdits) {
        const [x, y, z] = key.split(',').map(Number);
        if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
          this.setRaw(x, y, z, id);
          this.edits.set(key, id);
        }
      }
      this.pendingEdits = null;
    }

    this.spawn.copy(this.findSpawn());

    onProgress(0.66, 'Building the horizon…');
    for (let cz = 0; cz < this.chunksZ; cz++) {
      for (let cx = 0; cx < this.chunksX; cx++) {
        this.buildChunk(cx, cz);
        done++;
        if (done % 3 === 0) {
          onProgress(0.66 + ((cz * this.chunksX + cx + 1) / (this.chunksX * this.chunksZ)) * 0.34, 'Building the horizon…');
          await nextFrame();
        }
      }
    }
    onProgress(1, 'Ready');
  }

  fillChunk(cx, cz) {
    const size = this.size;
    const x0 = cx * CHUNK;
    const z0 = cz * CHUNK;
    for (let z = z0; z < Math.min(z0 + CHUNK, size); z++) {
      for (let x = x0; x < Math.min(x0 + CHUNK, size); x++) {
        const h = this.heights[z * size + x];
        const surface = this.surfaces[z * size + x];
        this.setRaw(x, 0, z, BEDROCK);
        const soilStart = surface === 3 || surface === 13 ? h - 2 : h - 3;
        for (let y = 1; y < h; y++) {
          let id = 3;
          if (y >= soilStart) {
            if (surface === 5) id = 5;
            else if (surface === 14) id = 14;
            else if (surface === 3) id = 3;
            else if (surface === 13) id = 3;
            else id = 2;
          }
          this.setRaw(x, y, z, id);
        }
        this.setRaw(x, h, z, surface);
        for (let y = h + 1; y <= WATER_LEVEL; y++) {
          this.setRaw(x, y, z, WATER);
        }
      }
    }
  }

  plantTrees() {
    const size = this.size;
    const rng = this.rng;
    const trees = [];
    const center = size / 2;
    const attempts = 140;
    for (let i = 0; i < attempts; i++) {
      const x = 5 + Math.floor(rng() * (size - 10));
      const z = 5 + Math.floor(rng() * (size - 10));
      if (this.surfaces[z * size + x] !== GRASS) continue;
      const h = this.heights[z * size + x];
      if (h < WATER_LEVEL + 3 || h > 32) continue;
      const slope = Math.max(
        Math.abs(h - this.heights[z * size + Math.max(0, x - 1)]),
        Math.abs(h - this.heights[z * size + Math.min(size - 1, x + 1)]),
        Math.abs(h - this.heights[Math.max(0, z - 1) * size + x]),
        Math.abs(h - this.heights[Math.min(size - 1, z + 1) * size + x])
      );
      if (slope > 2) continue;
      if (Math.hypot(x - center, z - center) < 7) continue;
      if (trees.some((t) => Math.hypot(t.x - x, t.z - z) < 5.5)) continue;
      if (rng() > 0.72) continue;
      trees.push({ x, z, h });

      const trunkHeight = 4 + Math.floor(rng() * 3);
      const top = h + trunkHeight;
      if (top + 3 >= this.height) continue;
      for (let y = h + 1; y <= top; y++) this.setRaw(x, y, z, 7);
      const layers = [
        { dy: 2, radius: 1 },
        { dy: 1, radius: 2 },
        { dy: 0, radius: 2 },
        { dy: -1, radius: 2 },
        { dy: -2, radius: 1 },
      ];
      for (const layer of layers) {
        const ly = top + layer.dy - 1;
        const r = layer.radius;
        for (let dx = -r; dx <= r; dx++) {
          for (let dz = -r; dz <= r; dz++) {
            if (Math.abs(dx) === r && Math.abs(dz) === r) continue;
            if (r === 2 && Math.abs(dx) + Math.abs(dz) > 3) continue;
            const tx = x + dx;
            const tz = z + dz;
            if (tx < 1 || tz < 1 || tx >= size - 1 || tz >= size - 1) continue;
            if (this.getBlock(tx, ly, tz) === AIR) this.setRaw(tx, ly, tz, 9);
          }
        }
      }
    }
  }

  scatterRocks() {
    const size = this.size;
    const rng = this.rng;
    for (let i = 0; i < 26; i++) {
      const x = 8 + Math.floor(rng() * (size - 16));
      const z = 8 + Math.floor(rng() * (size - 16));
      const surf = this.surfaces[z * size + x];
      if (surf !== GRASS && surf !== 3 && surf !== 13) continue;
      const h = this.heights[z * size + x];
      if (h < WATER_LEVEL + 1) continue;
      const count = 2 + Math.floor(rng() * 4);
      for (let j = 0; j < count; j++) {
        const ox = Math.round((rng() - 0.5) * 3);
        const oz = Math.round((rng() - 0.5) * 3);
        const oy = Math.floor(rng() * 2);
        const id = rng() > 0.55 ? 4 : 3;
        if (this.getBlock(x + ox, h + 1 + oy, z + oz) === AIR) {
          this.setRaw(x + ox, h + 1 + oy, z + oz, id);
        }
      }
    }
  }

  findSpawn() {
    const size = this.size;
    const center = Math.floor(size / 2);
    let best = null;
    let bestDist = Infinity;
    for (let r = 0; r < 12; r++) {
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
          const x = center + dx;
          const z = center + dz;
          if (x < 2 || z < 2 || x >= size - 2 || z >= size - 2) continue;
          const h = this.surfaceAt(x, z);
          const top = this.getBlock(x, h, z);
          if (top !== GRASS && top !== 5 && top !== 13) continue;
          if (this.getBlock(x, h + 1, z) !== AIR || this.getBlock(x, h + 2, z) !== AIR) continue;
          const dist = dx * dx + dz * dz;
          if (dist < bestDist) {
            bestDist = dist;
            best = new THREE.Vector3(x + 0.5, h + 1.02, z + 0.5);
          }
        }
      }
      if (best && r >= 3) break;
    }
    if (best) return best;
    const h = this.surfaceAt(center, center);
    return new THREE.Vector3(center + 0.5, h + 1.05, center + 0.5);
  }

  buildChunk(cx, cz) {
    const key = cz * this.chunksX + cx;
    const old = this.chunkGroups[key];
    if (old) {
      this.scene.remove(old);
      old.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
      });
    }

    const groups = {
      opaque: createGeometryData(),
      cutout: createGeometryData(),
      water: createGeometryData(),
      glass: createGeometryData(),
      glow: createGeometryData(),
    };

    const x0 = cx * CHUNK;
    const z0 = cz * CHUNK;
    const x1 = Math.min(x0 + CHUNK, this.size);
    const z1 = Math.min(z0 + CHUNK, this.size);
    const atlas = this.atlas;

    for (let y = 0; y < this.height; y++) {
      for (let z = z0; z < z1; z++) {
        for (let x = x0; x < x1; x++) {
          const id = this.getBlock(x, y, z);
          if (id === AIR) continue;
          const block = BLOCKS[id];
          if (!block) continue;
          for (let f = 0; f < FACES.length; f++) {
            const face = FACES[f];
            const nx = x + (face.axis === 0 ? face.dir : 0);
            const ny = y + (face.axis === 1 ? face.dir : 0);
            const nz = z + (face.axis === 2 ? face.dir : 0);
            const neighbor = this.getBlock(nx, ny, nz);
            const nb = BLOCKS[neighbor];
            if (nb?.opaque) continue;
            if (neighbor === id && block.selfCull) continue;

            let target = groups.opaque;
            if (block.glow) target = groups.glow;
            else if (block.liquid) target = groups.water;
            else if (block.cutout) target = groups.cutout;
            else if (block.transparent) target = groups.glass;

            const uv = atlas.uv(block.tiles[face.key]);
            const t1 = (face.axis + 1) % 3;
            const t2 = (face.axis + 2) % 3;
            const ao = [0, 0, 0, 0];
            for (let c = 0; c < 4; c++) {
              const corner = face.corners[c];
              const s1 = corner[t1] ? 1 : -1;
              const s2 = corner[t2] ? 1 : -1;
              const p1 = [x, y, z];
              const p2 = [x, y, z];
              const pc = [x, y, z];
              p1[face.axis] += face.dir;
              p2[face.axis] += face.dir;
              pc[face.axis] += face.dir;
              p1[t1] += s1;
              p2[t2] += s2;
              pc[t1] += s1;
              pc[t2] += s2;
              const side1 = occludes(this.getBlock(p1[0], p1[1], p1[2]));
              const side2 = occludes(this.getBlock(p2[0], p2[1], p2[2]));
              const cornerOccluded = occludes(this.getBlock(pc[0], pc[1], pc[2]));
              ao[c] = side1 && side2 ? 0 : 3 - (Number(side1) + Number(side2) + Number(cornerOccluded));
            }

            const base = target.pos.length / 3;
            const shade = face.shade;
            for (let c = 0; c < 4; c++) {
              const corner = face.corners[c];
              target.pos.push(x - x0 + corner[0], y + corner[1], z - z0 + corner[2]);
              target.norm.push(
                face.axis === 0 ? face.dir : 0,
                face.axis === 1 ? face.dir : 0,
                face.axis === 2 ? face.dir : 0
              );
              const uvc = face.uvs[c];
              target.uv.push(uv[0] + (uv[2] - uv[0]) * uvc[0], uv[1] + (uv[3] - uv[1]) * uvc[1]);
              const light = AO_LEVELS[ao[c]] * shade;
              target.col.push(light, light, light);
            }

            if (ao[0] + ao[2] > ao[1] + ao[3]) {
              target.idx.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
            } else {
              target.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
            }
          }
        }
      }
    }

    const group = new THREE.Group();
    group.position.set(x0, 0, z0);
    group.name = `chunk-${cx}-${cz}`;
    const meshes = [];

    const addMesh = (data, material, { cast = true, receive = true, order = 0 } = {}) => {
      if (!data.idx.length) return null;
      const geo = toGeometry(data);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = cast;
      mesh.receiveShadow = receive;
      mesh.renderOrder = order;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      mesh.userData.canCast = cast;
      group.add(mesh);
      meshes.push(mesh);
      return mesh;
    };

    addMesh(groups.opaque, this.materials.opaque);
    addMesh(groups.cutout, this.materials.cutout);
    addMesh(groups.glow, this.materials.glow, { cast: false });
    addMesh(groups.water, this.materials.water, { cast: false, receive: false, order: 2 });
    addMesh(groups.glass, this.materials.glass, { cast: false, order: 3 });

    this.scene.add(group);
    this.chunkGroups[key] = group;
    this.chunkData[key] = meshes;
  }

  setBlock(x, y, z, id, { record = true } = {}) {
    if (x < 0 || z < 0 || x >= this.size || z >= this.size || y < 0 || y >= this.height) return false;
    const idx = (y * this.size + z) * this.size + x;
    if (this.data[idx] === id) return false;
    this.data[idx] = id;
    if (record) this.edits.set(`${x},${y},${z}`, id);
    const cx = Math.floor(x / CHUNK);
    const cz = Math.floor(z / CHUNK);
    const rebuild = new Set([cz * this.chunksX + cx]);
    if (x % CHUNK === 0 && cx > 0) rebuild.add(cz * this.chunksX + (cx - 1));
    if (x % CHUNK === CHUNK - 1 && cx < this.chunksX - 1) rebuild.add(cz * this.chunksX + (cx + 1));
    if (z % CHUNK === 0 && cz > 0) rebuild.add((cz - 1) * this.chunksX + cx);
    if (z % CHUNK === CHUNK - 1 && cz < this.chunksZ - 1) rebuild.add((cz + 1) * this.chunksX + cx);
    for (const key of rebuild) this.buildChunk(key % this.chunksX, Math.floor(key / this.chunksX));
    return true;
  }

  update(dt) {
    this.time += dt;
    this.waterUniforms.uTime.value = this.time;
  }

  setShadows(enabled) {
    for (const meshes of this.chunkData) {
      if (!meshes) continue;
      for (const mesh of meshes) {
        mesh.castShadow = enabled && mesh.userData.canCast;
        mesh.receiveShadow = enabled;
      }
    }
  }

  raycast(origin, direction, maxDistance = 8) {
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);
    const stepX = Math.sign(direction.x);
    const stepY = Math.sign(direction.y);
    const stepZ = Math.sign(direction.z);
    const tDeltaX = stepX === 0 ? Infinity : Math.abs(1 / direction.x);
    const tDeltaY = stepY === 0 ? Infinity : Math.abs(1 / direction.y);
    const tDeltaZ = stepZ === 0 ? Infinity : Math.abs(1 / direction.z);
    const distX = stepX > 0 ? x + 1 - origin.x : origin.x - x;
    const distY = stepY > 0 ? y + 1 - origin.y : origin.y - y;
    const distZ = stepZ > 0 ? z + 1 - origin.z : origin.z - z;
    let tMaxX = stepX === 0 ? Infinity : (distX / Math.abs(direction.x));
    let tMaxY = stepY === 0 ? Infinity : (distY / Math.abs(direction.y));
    let tMaxZ = stepZ === 0 ? Infinity : (distZ / Math.abs(direction.z));
    let normal = [0, 1, 0];
    let t = 0;

    for (let i = 0; i < 256 && t <= maxDistance; i++) {
      const id = this.getBlock(x, y, z);
      if (id !== AIR && BLOCKS[id]?.solid) {
        return {
          x,
          y,
          z,
          id,
          normal: normal.slice(),
          distance: t,
          point: new THREE.Vector3(origin.x + direction.x * t, origin.y + direction.y * t, origin.z + direction.z * t),
        };
      }
      if (tMaxX < tMaxY && tMaxX < tMaxZ) {
        x += stepX;
        t = tMaxX;
        tMaxX += tDeltaX;
        normal = [-stepX, 0, 0];
      } else if (tMaxY < tMaxZ) {
        y += stepY;
        t = tMaxY;
        tMaxY += tDeltaY;
        normal = [0, -stepY, 0];
      } else {
        z += stepZ;
        t = tMaxZ;
        tMaxZ += tDeltaZ;
        normal = [0, 0, -stepZ];
      }
      if (y < 0 || y >= this.height) return null;
    }
    return null;
  }

  serializeEdits() {
    return Array.from(this.edits.entries());
  }

  dispose() {
    for (const group of this.chunkGroups) {
      if (!group) continue;
      this.scene.remove(group);
      group.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
      });
    }
    this.chunkGroups = [];
    this.chunkData = [];
    for (const material of Object.values(this.materials)) material.dispose();
  }
}
