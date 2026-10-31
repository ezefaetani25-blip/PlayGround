import * as THREE from '../vendor/three.module.js';

/* ────────────────────────────────────────────────────────────
   Lucid Grove — procedural dream forest
   Everything is generated in code: no external art assets.
   ──────────────────────────────────────────────────────────── */

export const MEMORY_DATA = [
  { x: 3,   z: 14,  text: 'The trees remember your name. They have been practising it for years.' },
  { x: -24, z: 7,   text: 'Somewhere, a smaller version of you is still running through this clearing.' },
  { x: 31,  z: -6,  text: 'The moon is a window someone forgot to close.' },
  { x: -32, z: -30, text: 'Every door is a promise the house could not keep.' },
  { x: 12,  z: -48, text: 'You are allowed to miss places that never existed.' },
  { x: 44,  z: 30,  text: 'Nothing here is lost. It is only waiting to be noticed.' },
];

const ORB_COLORS = [0xffa9d2, 0x9df2da, 0xc8b1ff, 0xffd0a1, 0xa6d8ff, 0xffe6ae];

const PALETTE = {
  dusk: {
    top: 0x3a3d76, mid: 0x977dba, horizon: 0xf6c7da, glow: 0xffd4d2,
    fog: 0xe4c3da, sun: 0xffc9dd,
  },
  dawn: {
    top: 0x7b7fc5, mid: 0xe6b4c8, horizon: 0xffe2c4, glow: 0xffe7b6,
    fog: 0xffddc4, sun: 0xffd9b2,
  },
};

const MEMORY_RADIUS = 3.6;
const PATH_MIN_Z = -34;
const PATH_MAX_Z = 32;

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const smoothstep = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export function pathX(z) {
  return Math.sin(z * 0.085) * 2.6 + Math.sin(z * 0.21) * 0.6;
}

export function heightAt(x, z) {
  return (
    Math.sin(x * 0.035) * 1.4 +
    Math.cos(z * 0.042) * 1.2 +
    Math.sin((x * 0.7 + z * 0.9) * 0.035) * 1.15 +
    Math.sin(x * 0.12 + z * 0.14) * 0.26
  );
}

/* ── canvas textures ───────────────────────────────────────── */

function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  draw(ctx, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function radialTexture(size, stops) {
  return canvasTex(size, (ctx, s) => {
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    for (const [p, c] of stops) g.addColorStop(p, c);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
  });
}

function moonTexture() {
  return canvasTex(256, (ctx, s) => {
    ctx.clearRect(0, 0, s, s);
    const g = ctx.createRadialGradient(s * 0.42, s * 0.38, s * 0.03, s * 0.5, s * 0.5, s * 0.43);
    g.addColorStop(0, '#fffdf9');
    g.addColorStop(0.55, '#fff1ef');
    g.addColorStop(0.85, '#f9d8e4');
    g.addColorStop(1, 'rgba(249, 216, 228, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(s / 2, s / 2, s * 0.42, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.filter = 'blur(7px)';
    ctx.globalCompositeOperation = 'source-atop';
    const rng = mulberry32(9);
    for (let i = 0; i < 13; i++) {
      const a = rng() * Math.PI * 2;
      const r = rng() * s * 0.34;
      const x = s / 2 + Math.cos(a) * r;
      const y = s / 2 + Math.sin(a) * r;
      const rr = s * (0.025 + rng() * 0.06);
      ctx.fillStyle = `rgba(207, 178, 201, ${0.08 + rng() * 0.1})`;
      ctx.beginPath();
      ctx.arc(x, y, rr, 0, Math.PI * 2);
      ctx.fill();
    }
    const shade = ctx.createRadialGradient(s * 0.38, s * 0.34, s * 0.08, s * 0.5, s * 0.52, s * 0.46);
    shade.addColorStop(0, 'rgba(90, 60, 110, 0)');
    shade.addColorStop(1, 'rgba(90, 60, 110, 0.2)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, s, s);
    ctx.restore();
  });
}

function beamTexture() {
  const w = 64, h = 256;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    const vy = y / (h - 1);
    const vGrad = Math.pow(Math.sin(Math.PI * vy), 1.35);
    for (let x = 0; x < w; x++) {
      const dx = Math.abs(x / (w - 1) - 0.5) * 2;
      const hGrad = Math.pow(Math.max(0, 1 - dx), 2.6);
      const a = Math.round(255 * hGrad * vGrad);
      const i = (y * w + x) * 4;
      img.data[i] = 255;
      img.data[i + 1] = 255;
      img.data[i + 2] = 255;
      img.data[i + 3] = a;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function tuftGeometry() {
  const pos = [];
  const blades = 7;
  for (let b = 0; b < blades; b++) {
    const a = (b / blades) * Math.PI * 2 + 0.31;
    const w = 0.028 + (b % 2) * 0.012;
    const h = 0.2 + ((b * 37) % 10) / 10 * 0.24;
    const bend = 0.04 + (b % 3) * 0.02;
    const bx = Math.cos(a) * 0.012;
    const bz = Math.sin(a) * 0.012;
    const px = Math.cos(a + Math.PI / 2) * w;
    const pz = Math.sin(a + Math.PI / 2) * w;
    const tx = Math.cos(a) * bend;
    const tz = Math.sin(a) * bend;
    pos.push(bx - px, 0, bz - pz, bx + px, 0, bz + pz, tx, h, tz);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

/* ── world ─────────────────────────────────────────────────── */

export function createWorld(scene, opts = {}) {
  const mobile = !!opts.mobile;
  const rand = mulberry32(20261031);
  const glowTex = radialTexture(128, [
    [0, 'rgba(255,255,255,1)'],
    [0.18, 'rgba(255,248,252,0.86)'],
    [0.44, 'rgba(255,220,240,0.33)'],
    [1, 'rgba(255,205,232,0)'],
  ]);
  const softDot = radialTexture(64, [
    [0, 'rgba(255,255,255,1)'],
    [0.35, 'rgba(255,240,250,0.6)'],
    [1, 'rgba(255,220,240,0)'],
  ]);
  const beamTex = beamTexture();

  const fog = new THREE.FogExp2(PALETTE.dusk.fog, 0.0145);
  scene.fog = fog;

  const sun = new THREE.DirectionalLight(PALETTE.dusk.sun, 1.85);
  sun.position.set(-26, 34, -54);
  scene.add(sun);

  const hemi = new THREE.HemisphereLight(0xbcc4ff, 0x735271, 1.35);
  scene.add(hemi);
  const ambient = new THREE.AmbientLight(0x6b5a89, 0.32);
  scene.add(ambient);

  // cool fill from the viewer's side so silhouettes keep their colour
  const fill = new THREE.DirectionalLight(0xb9aaff, 0.7);
  fill.position.set(30, 16, 60);
  scene.add(fill);

  /* ── sky ── */
  const skyGroup = new THREE.Group();
  skyGroup.renderOrder = -100;
  scene.add(skyGroup);

  const skyUniforms = {
    uTop: { value: new THREE.Color(PALETTE.dusk.top) },
    uMid: { value: new THREE.Color(PALETTE.dusk.mid) },
    uHorizon: { value: new THREE.Color(PALETTE.dusk.horizon) },
    uGlow: { value: new THREE.Color(PALETTE.dusk.glow) },
    uMoonDir: { value: new THREE.Vector3(-0.13, 0.3, -0.95).normalize() },
  };
  const skyMat = new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 p = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * p;
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 uTop, uMid, uHorizon, uGlow, uMoonDir;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.2, 1.0);
        vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.3, h));
        col = mix(col, uTop, smoothstep(0.24, 0.9, h));
        float glow = pow(max(dot(d, uMoonDir), 0.0), 5.0);
        col += uGlow * glow * 0.42;
        float groundGlow = pow(max(0.0, 1.0 - abs(h) * 3.2), 3.0);
        col += uGlow * groundGlow * 0.1;
        float band = sin(h * 26.0 + sin(atan(d.z, d.x) * 2.4) * 1.8) * 0.5 + 0.5;
        col += vec3(0.022, 0.017, 0.045) * band * smoothstep(0.16, 0.72, h);
        float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        col += (dither - 0.5) * 0.013;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(360, 48, 32), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -100;
  skyGroup.add(sky);

  // moon + halo
  const moonDir = new THREE.Vector3(0, 27, -155);
  skyUniforms.uMoonDir.value.copy(moonDir).normalize();
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({
    map: moonTexture(),
    color: 0xfff6f2,
    transparent: true,
    opacity: 0.82,
    depthWrite: false,
    depthTest: true,
    fog: false,
  }));
  moon.position.copy(moonDir);
  moon.scale.setScalar(26);
  moon.renderOrder = -95;
  skyGroup.add(moon);

  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex,
    color: 0xffdbe8,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    fog: false,
  }));
  halo.position.copy(moonDir);
  halo.scale.setScalar(82);
  halo.renderOrder = -96;
  skyGroup.add(halo);

  // stars
  {
    const n = mobile ? 380 : 620;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const y = 0.14 + Math.pow(rand(), 0.6) * 0.82;
      const r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(a) * r * 330;
      pos[i * 3 + 1] = y * 330;
      pos[i * 3 + 2] = Math.sin(a) * r * 330;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      map: softDot, color: 0xffe9f4, size: 2.4, sizeAttenuation: true,
      transparent: true, opacity: 0.72, depthWrite: false, fog: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(geo, mat);
    stars.renderOrder = -94;
    skyGroup.add(stars);
  }

  /* ── terrain ── */
  {
    const geo = new THREE.PlaneGeometry(280, 280, mobile ? 100 : 140, mobile ? 100 : 140);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const cLow = new THREE.Color(0x46566a);
    const cMid = new THREE.Color(0x637679);
    const cHigh = new THREE.Color(0x9490ae);
    const cPath = new THREE.Color(0xae99b6);
    const tmp = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = heightAt(x, z);
      pos.setY(i, y);
      const n = Math.sin(x * 0.13 + z * 0.21) * 0.5 + Math.sin(x * 0.051 - z * 0.077) * 0.5;
      tmp.copy(cMid)
        .lerp(cLow, smoothstep(0.7, -1.4, y) * 0.55)
        .lerp(cHigh, smoothstep(-0.4, 2.2, y) * 0.5 + Math.max(0, n) * 0.22);
      if (z > PATH_MIN_Z - 3 && z < PATH_MAX_Z + 4) {
        const d = Math.abs(x - pathX(z));
        if (d < 3.2) tmp.lerp(cPath, (1 - smoothstep(1.2, 3.2, d)) * 0.35);
      }
      colors[i * 3] = tmp.r;
      colors[i * 3 + 1] = tmp.g;
      colors[i * 3 + 2] = tmp.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 });
    const ground = new THREE.Mesh(geo, mat);
    ground.receiveShadow = false;
    scene.add(ground);
  }

  /* ── path stones + lantern lights ── */
  const colliders = [];
  {
    const stoneGeo = new THREE.CylinderGeometry(1, 1, 0.1, 7);
    const stoneMat = new THREE.MeshStandardMaterial({ roughness: 0.92, flatShading: true, color: 0xffffff });
    const stones = [];
    for (let z = 23.5; z > -30; z -= 2.1) {
      stones.push({ z });
    }
    const mesh = new THREE.InstancedMesh(stoneGeo, stoneMat, stones.length);
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();
    stones.forEach((s, i) => {
      const x = pathX(s.z) + (rand() - 0.5) * 0.7;
      const y = heightAt(x, s.z) + 0.015;
      dummy.position.set(x, y, s.z);
      dummy.rotation.set((rand() - 0.5) * 0.04, rand() * Math.PI, (rand() - 0.5) * 0.04);
      dummy.scale.set(0.6 + rand() * 0.28, 1, 0.4 + rand() * 0.2);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      col.setHSL(0.85, 0.12, 0.58 + rand() * 0.12);
      mesh.setColorAt(i, col);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    scene.add(mesh);

    // soft lantern lights beside the path
    for (let z = 24; z > -26; z -= 7) {
      const x = pathX(z) + (z % 2 === 0 ? 3.1 : -3.1);
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: 0xffd9a8, transparent: true, opacity: 0.5,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: true,
      }));
      s.position.set(x, heightAt(x, z) + 0.45, z);
      s.scale.setScalar(1.5);
      scene.add(s);
    }
  }

  /* ── trees ── */
  const lanterns = [];
  const flowerGlows = [];
  const treeDefs = [];
  {
    const count = mobile ? 200 : 268;
    let guard = 0;
    while (treeDefs.length < count && guard < 12000) {
      guard++;
      const a = rand() * Math.PI * 2;
      const r = 6.5 + Math.pow(rand(), 0.72) * 84;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;

      if (z > PATH_MIN_Z - 2 && z < PATH_MAX_Z + 2 && Math.abs(x - pathX(z)) < 7.2) continue;
      if (Math.hypot(x, z + 32) < 10.5) continue;
      if (Math.hypot(x - pathX(28), z - 28) < 7) continue;
      if (MEMORY_DATA.some((m) => Math.hypot(m.x - x, m.z - z) < 5.5)) continue;
      if (treeDefs.some((t) => Math.hypot(t.x - x, t.z - z) < 3.1)) continue;

      const paletteRoll = rand();
      const kind = paletteRoll < 0.5 ? 'mint' : paletteRoll < 0.78 ? 'lilac' : 'blossom';
      const bare = rand() < 0.055;
      treeDefs.push({
        x, z, kind, bare,
        conifer: !bare && rand() < 0.17,
        h: 5.4 + rand() * 7.6,
        thick: 0.8 + rand() * 0.62,
        rot: rand() * Math.PI * 2,
        canopyR: 1.35 + rand() * 1.55,
        seed: rand(),
      });
    }

    // two colossal trees guard the doorway
    const gx = pathX(-32);
    [
      { x: gx - 9.2, kind: 'lilac', h: 15.5, thick: 1.4, canopyR: 3.3, seed: 0.41, rot: 0.7 },
      { x: gx + 9.4, kind: 'blossom', h: 16.2, thick: 1.35, canopyR: 3.5, seed: 0.83, rot: 2.1 },
    ].forEach((t) => {
      treeDefs.push({ ...t, z: -30.5, bare: false, conifer: false });
    });
  }

  const CANOPY_COLORS = {
    mint: [0x7db9a3, 0x91cbb2, 0x6ba58f, 0xa6d5bd],
    lilac: [0xb29bce, 0xc4aede, 0x9b85ba, 0xd0bde6],
    blossom: [0xe3a4bc, 0xf0b9cb, 0xcf8ea9, 0xf6cad8],
  };
  const TRUNK_COLORS = [0x6c5a78, 0x79647f, 0x5f526b, 0x816b84];

  {
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.4, 1, 6, 1);
    trunkGeo.translate(0, 0.5, 0);
    const trunkMat = new THREE.MeshStandardMaterial({ roughness: 0.95, flatShading: true, color: 0xffffff });
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeDefs.length);

    const blobGeo = new THREE.IcosahedronGeometry(1, 0);
    const blobMat = new THREE.MeshStandardMaterial({ roughness: 0.96, flatShading: true, color: 0xffffff });
    const blobsPerTree = 3;
    const canopyTrees = treeDefs.filter((t) => !t.bare && !t.conifer);
    const canopy = new THREE.InstancedMesh(blobGeo, blobMat, canopyTrees.length * blobsPerTree);

    const coniferTrees = treeDefs.filter((t) => t.conifer);
    const coniferGeo = new THREE.ConeGeometry(1, 1, 7);
    coniferGeo.translate(0, 0.5, 0);
    const conifer = new THREE.InstancedMesh(
      coniferGeo,
      new THREE.MeshStandardMaterial({ roughness: 0.97, flatShading: true, color: 0xffffff }),
      coniferTrees.length * 3,
    );

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    let bi = 0;
    let ci = 0;
    const lanternSpots = [];

    treeDefs.forEach((t, i) => {
      const gy = heightAt(t.x, t.z);
      const yaw = t.rot;
      dummy.position.set(t.x, gy - 0.25, t.z);
      dummy.rotation.set(0, yaw, 0);
      dummy.scale.set(t.thick, t.h, t.thick);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);
      color.setHex(TRUNK_COLORS[Math.floor(t.seed * TRUNK_COLORS.length) % TRUNK_COLORS.length]);
      trunks.setColorAt(i, color);

      colliders.push({ x: t.x, z: t.z, r: 0.45 + t.thick * 0.32 });

      if (t.bare) {
        if (t.seed > 0.45) lanternSpots.push({ x: t.x, y: gy + t.h * (0.7 + t.seed * 0.2), z: t.z, warm: true });
        return;
      }

      const palette = CANOPY_COLORS[t.kind];
      const R = t.canopyR;

      if (t.conifer) {
        for (let j = 0; j < 3; j++) {
          const radius = R * (1.55 - j * 0.36);
          dummy.position.set(t.x, gy + t.h * (0.3 + j * 0.17), t.z);
          dummy.rotation.set(0, yaw + j * 0.7, 0);
          dummy.scale.set(radius, t.h * 0.56, radius);
          dummy.updateMatrix();
          conifer.setMatrixAt(ci, dummy.matrix);
          color.setHex(palette[(Math.floor(t.seed * 10) + j) % palette.length]).multiplyScalar(0.82);
          conifer.setColorAt(ci, color);
          ci++;
        }
        return;
      }

      const baseY = gy + t.h * 0.9;
      for (let j = 0; j < blobsPerTree; j++) {
        const ang = yaw + j * 2.2 + t.seed * 6;
        const off = j === 0 ? 0 : R * 0.55;
        const rr = j === 0 ? R : R * (0.62 + (j === 1 ? 0.1 : 0));
        dummy.position.set(
          t.x + Math.cos(ang) * off,
          baseY + (j === 0 ? 0.15 : -0.45 + j * 0.32) + R * 0.25,
          t.z + Math.sin(ang) * off,
        );
        dummy.rotation.set(t.seed * 2 + j, yaw * 1.7 + j, t.seed + j * 0.5);
        dummy.scale.set(rr * 1.15, rr * 0.82, rr * 1.15);
        dummy.updateMatrix();
        canopy.setMatrixAt(bi, dummy.matrix);
        color.setHex(palette[(Math.floor(t.seed * 10) + j) % palette.length]);
        canopy.setColorAt(bi, color);
        bi++;
      }

      if (t.seed > 0.82) {
        lanternSpots.push({
          x: t.x + Math.cos(yaw) * R * 0.9,
          y: baseY + R * 0.3,
          z: t.z + Math.sin(yaw) * R * 0.9,
          warm: false,
        });
      }
    });

    trunks.instanceMatrix.needsUpdate = true;
    canopy.instanceMatrix.needsUpdate = true;
    conifer.instanceMatrix.needsUpdate = true;
    trunks.frustumCulled = false;
    canopy.frustumCulled = false;
    conifer.frustumCulled = false;
    scene.add(trunks, canopy, conifer);

    lanternSpots.forEach((p) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex,
        color: p.warm ? 0xffcf9b : 0xc9fff0,
        transparent: true,
        opacity: p.warm ? 0.5 : 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: true,
      }));
      s.position.set(p.x, p.y, p.z);
      s.scale.setScalar(p.warm ? 1.7 : 1.1);
      s.userData.phase = rand() * 6;
      s.userData.baseOpacity = s.material.opacity;
      scene.add(s);
      lanterns.push(s);
    });
  }

  /* ── grass ── */
  {
    const count = mobile ? 1400 : 2200;
    const geo = tuftGeometry();
    const mat = new THREE.MeshStandardMaterial({
      roughness: 1, flatShading: true, color: 0xffffff,
      emissive: 0x2a463c, emissiveIntensity: 0.9, side: THREE.DoubleSide,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const grassPalette = [0x61877a, 0x6f9585, 0x7ea592, 0x7d988f, 0x57796f];
    let placed = 0;
    let guard = 0;
    while (placed < count && guard < count * 4) {
      guard++;
      const a = rand() * Math.PI * 2;
      const r = 1.6 + Math.pow(rand(), 0.55) * 88;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (z > PATH_MIN_Z && z < PATH_MAX_Z && Math.abs(x - pathX(z)) < 1.4) continue;
      if (Math.hypot(x, z + 32) < 5.5) continue;
      const h = 0.8 + rand() * 0.75;
      dummy.position.set(x, heightAt(x, z), z);
      dummy.rotation.set((rand() - 0.5) * 0.5, rand() * Math.PI * 2, (rand() - 0.5) * 0.5);
      dummy.scale.set(0.9 + rand() * 0.9, h, 0.9 + rand() * 0.9);
      dummy.updateMatrix();
      mesh.setMatrixAt(placed, dummy.matrix);
      color.setHex(grassPalette[Math.floor(rand() * grassPalette.length)]);
      mesh.setColorAt(placed, color);
      placed++;
    }
    mesh.count = placed;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    scene.add(mesh);
  }

  /* ── low bushes ── */
  {
    const count = mobile ? 120 : 190;
    const geo = new THREE.IcosahedronGeometry(1, 0);
    const mat = new THREE.MeshStandardMaterial({
      roughness: 1, flatShading: true, color: 0xffffff,
      emissive: 0x142822, emissiveIntensity: 0.55,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const palette = [0x46655c, 0x527468, 0x3d5b57, 0x5d7c6f];
    for (let i = 0; i < count; i++) {
      let x = 0, z = 0;
      for (let t = 0; t < 20; t++) {
        const a = rand() * Math.PI * 2;
        const r = 6 + Math.pow(rand(), 0.6) * 78;
        x = Math.cos(a) * r; z = Math.sin(a) * r;
        if (Math.abs(x - pathX(z)) > 2.6 && Math.hypot(x, z + 32) > 7 && Math.hypot(x - pathX(28), z - 28) > 4) break;
      }
      const s = 0.35 + rand() * 0.8;
      dummy.position.set(x, heightAt(x, z) + s * 0.18, z);
      dummy.rotation.set(rand() * 0.4, rand() * Math.PI * 2, rand() * 0.4);
      dummy.scale.set(s * (0.9 + rand() * 0.6), s * (0.5 + rand() * 0.4), s * (0.9 + rand() * 0.6));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.setHex(palette[Math.floor(rand() * palette.length)]);
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    scene.add(mesh);
  }

  /* ── moss mounds ── */
  {
    const count = mobile ? 260 : 420;
    const geo = new THREE.IcosahedronGeometry(1, 0);
    const mat = new THREE.MeshStandardMaterial({
      roughness: 1, flatShading: true, color: 0xffffff,
      emissive: 0x1a3029, emissiveIntensity: 0.6,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const palette = [0x54766b, 0x607f72, 0x496a62, 0x6c8879, 0x5b7a82];
    for (let i = 0; i < count; i++) {
      let x = 0, z = 0;
      for (let t = 0; t < 14; t++) {
        const a = rand() * Math.PI * 2;
        const r = 2 + Math.pow(rand(), 0.55) * 86;
        x = Math.cos(a) * r; z = Math.sin(a) * r;
        if (Math.abs(x - pathX(z)) > 1.1) break;
      }
      const w = 0.22 + rand() * 0.5;
      dummy.position.set(x, heightAt(x, z) - 0.02, z);
      dummy.rotation.set(rand() * 0.3, rand() * Math.PI * 2, rand() * 0.3);
      dummy.scale.set(w, 0.03 + rand() * 0.07, w * (0.7 + rand() * 0.6));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.setHex(palette[Math.floor(rand() * palette.length)]);
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    scene.add(mesh);
  }

  /* ── tiny meadow flowers ── */
  {
    const n = mobile ? 550 : 900;
    const positions = new Float32Array(n * 3);
    const colors = new Float32Array(n * 3);
    const palette = [
      new THREE.Color(0xffe4ee), new THREE.Color(0xd6fff2),
      new THREE.Color(0xfff0c9), new THREE.Color(0xddceff),
    ];
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const r = 2 + Math.pow(rand(), 0.55) * 84;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      positions[i * 3] = x;
      positions[i * 3 + 1] = heightAt(x, z) + 0.04 + rand() * 0.16;
      positions[i * 3 + 2] = z;
      const c = palette[Math.floor(rand() * palette.length)];
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({
      map: softDot, size: 0.14, sizeAttenuation: true, vertexColors: true,
      transparent: true, opacity: 0.9, depthWrite: false, alphaTest: 0.02, fog: true,
    });
    const flowers = new THREE.Points(geo, mat);
    flowers.frustumCulled = false;
    scene.add(flowers);
  }
  {
    const count = mobile ? 55 : 82;
    const stemGeo = new THREE.CylinderGeometry(0.045, 0.075, 1, 5);
    stemGeo.translate(0, 0.5, 0);
    const capGeo = new THREE.SphereGeometry(1, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0xeadfda, roughness: 0.9, flatShading: true });
    const capMat = new THREE.MeshStandardMaterial({
      color: 0xffd3e5, emissive: 0xff8fbe, emissiveIntensity: 0.35, roughness: 0.7, flatShading: true,
    });
    const stems = new THREE.InstancedMesh(stemGeo, stemMat, count);
    const caps = new THREE.InstancedMesh(capGeo, capMat, count);
    const dummy = new THREE.Object3D();
    const capCol = new THREE.Color();
    const capPalette = [0xffd3e5, 0xd7c6ff, 0xbff5e4, 0xffe1bc];
    for (let i = 0; i < count; i++) {
      let x = 0, z = 0, tries = 0;
      do {
        const a = rand() * Math.PI * 2;
        const r = 4 + Math.pow(rand(), 0.6) * 78;
        x = Math.cos(a) * r; z = Math.sin(a) * r;
        tries++;
      } while (tries < 20 && (Math.hypot(x, z + 32) < 6 || Math.abs(x - pathX(z)) < 1.4 && z > PATH_MIN_Z && z < PATH_MAX_Z));
      const y = heightAt(x, z);
      const s = 0.55 + rand() * 1.25;
      const h = 0.22 + rand() * 0.42;
      dummy.position.set(x, y - 0.03, z);
      dummy.rotation.set(0, rand() * Math.PI * 2, 0);
      dummy.scale.set(s, h, s);
      dummy.updateMatrix();
      stems.setMatrixAt(i, dummy.matrix);

      dummy.position.set(x, y + h * 0.96, z);
      dummy.scale.set(s * 0.42, s * 0.26, s * 0.42);
      dummy.updateMatrix();
      caps.setMatrixAt(i, dummy.matrix);
      capCol.setHex(capPalette[Math.floor(rand() * capPalette.length)]);
      caps.setColorAt(i, capCol);

      if (i % 4 === 0) {
        const glow = new THREE.Sprite(new THREE.SpriteMaterial({
          map: glowTex, color: capPalette[Math.floor(rand() * capPalette.length)],
          transparent: true, opacity: 0.36, blending: THREE.AdditiveBlending,
          depthWrite: false, fog: true,
        }));
        glow.position.set(x, y + h + 0.14, z);
        glow.scale.setScalar(1.05 + rand() * 0.7);
        scene.add(glow);
      }
    }
    stems.instanceMatrix.needsUpdate = true;
    caps.instanceMatrix.needsUpdate = true;
    stems.frustumCulled = false;
    caps.frustumCulled = false;
    scene.add(stems, caps);
  }

  /* ── glowing flowers ── */
  {
    const count = mobile ? 34 : 50;
    const stemGeo = new THREE.CylinderGeometry(0.012, 0.02, 1, 4);
    stemGeo.translate(0, 0.5, 0);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x4d6d60, roughness: 1 });
    const headGeo = new THREE.IcosahedronGeometry(0.16, 0);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xfff1f8, emissive: 0xffffff, emissiveIntensity: 0.8, roughness: 0.4, flatShading: true,
    });
    const stems = new THREE.InstancedMesh(stemGeo, stemMat, count);
    const heads = new THREE.InstancedMesh(headGeo, headMat, count);
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();
    const palette = [0xffa8d2, 0x9fffe4, 0xc7b0ff, 0xffe0a8];
    for (let i = 0; i < count; i++) {
      let x = 0, z = 0;
      for (let t = 0; t < 16; t++) {
        const a = rand() * Math.PI * 2;
        const r = 6 + Math.pow(rand(), 0.7) * 70;
        x = Math.cos(a) * r; z = Math.sin(a) * r;
        if (Math.abs(x - pathX(z)) > 2.2) break;
      }
      const y = heightAt(x, z);
      const h = 0.45 + rand() * 0.8;
      const lean = (rand() - 0.5) * 0.25;
      dummy.position.set(x, y, z);
      dummy.rotation.set(lean, rand() * 6, lean * 0.6);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      stems.setMatrixAt(i, dummy.matrix);

      const hx = x + Math.sin(lean) * h * 0.5;
      const hz = z + Math.cos(lean) * 0;
      dummy.position.set(hx, y + h + 0.05, hz);
      dummy.rotation.set(rand() * 3, rand() * 3, rand() * 3);
      dummy.scale.setScalar(0.8 + rand() * 0.9);
      dummy.updateMatrix();
      heads.setMatrixAt(i, dummy.matrix);
      const c = palette[Math.floor(rand() * palette.length)];
      col.setHex(c);
      heads.setColorAt(i, col);

      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: c, transparent: true, opacity: 0.5,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: true,
      }));
      glow.position.set(hx, y + h + 0.08, hz);
      glow.scale.setScalar(1 + rand() * 0.8);
      glow.userData.phase = rand() * 6;
      scene.add(glow);
      flowerGlows.push(glow);
    }
    stems.instanceMatrix.needsUpdate = true;
    heads.instanceMatrix.needsUpdate = true;
    stems.frustumCulled = false;
    heads.frustumCulled = false;
    scene.add(stems, heads);
  }

  /* ── great lumen blooms beside the path ── */
  {
    const bloomSpots = [
      { x: pathX(20) + 4.6, z: 20, h: 2.4, c: 0xffb3d9 },
      { x: pathX(6) - 5.4, z: 6, h: 3.1, c: 0xa9ffe4 },
      { x: pathX(-10) + 5.8, z: -10, h: 2.7, c: 0xc9b0ff },
      { x: pathX(-24) - 5.2, z: -24, h: 3.4, c: 0xffd2a4 },
      { x: pathX(13) - 4.8, z: 13, h: 1.9, c: 0xffb3d9 },
    ];
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x527669, roughness: 0.9, flatShading: true });
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xfff4fb, emissive: 0xffffff, emissiveIntensity: 0.8, roughness: 0.35, flatShading: true,
    });
    bloomSpots.forEach((sp, i) => {
      const y = heightAt(sp.x, sp.z);
      const g = new THREE.Group();
      g.position.set(sp.x, y, sp.z);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.1, sp.h, 5), stemMat);
      stem.position.y = sp.h / 2;
      stem.rotation.z = (rand() - 0.5) * 0.18;
      g.add(stem);

      const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), headMat.clone());
      head.material.emissive.setHex(sp.c);
      head.material.color.setHex(sp.c);
      head.position.set(stem.rotation.z * -sp.h * 0.5, sp.h + 0.06, 0);
      head.scale.set(1.1, 0.8, 1.1);
      g.add(head);

      for (let p = 0; p < 5; p++) {
        const petal = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.22, 0),
          new THREE.MeshStandardMaterial({
            color: sp.c, emissive: sp.c, emissiveIntensity: 0.45, roughness: 0.6, flatShading: true,
            transparent: true, opacity: 0.9,
          }),
        );
        const a = (p / 5) * Math.PI * 2 + i;
        petal.position.set(
          head.position.x + Math.cos(a) * 0.34,
          head.position.y - 0.1,
          Math.sin(a) * 0.34,
        );
        petal.scale.set(1.1, 0.4, 1.1);
        g.add(petal);
      }

      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: sp.c, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: true,
      }));
      glow.position.copy(head.position);
      glow.scale.setScalar(3.6);
      glow.userData.phase = i * 1.4;
      g.add(glow);
      flowerGlows.push(glow);

      scene.add(g);
    });
  }

  /* ── fireflies ── */
  let fireflyMat;
  {
    const n = mobile ? 380 : 560;
    const positions = new Float32Array(n * 3);
    const phases = new Float32Array(n);
    const sizes = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const r = 5 + Math.pow(rand(), 0.6) * 82;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      positions[i * 3] = x;
      positions[i * 3 + 1] = heightAt(x, z) + 0.5 + rand() * 5.5;
      positions[i * 3 + 2] = z;
      phases[i] = rand();
      sizes[i] = 0.7 + rand() * 1.9;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    fireflyMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        uColorA: { value: new THREE.Color(0xffb6d9) },
        uColorB: { value: new THREE.Color(0xb6ffe8) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */`
        attribute float aPhase;
        attribute float aSize;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vPhase;
        void main() {
          vPhase = aPhase;
          vec3 p = position;
          p.x += sin(uTime * 0.31 + aPhase * 6.283) * 1.5;
          p.y += sin(uTime * 0.57 + aPhase * 9.1) * 0.7;
          p.z += cos(uTime * 0.27 + aPhase * 4.7) * 1.5;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = aSize * uPixelRatio * (150.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */`
        varying float vPhase;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float a = smoothstep(0.5, 0.0, d);
          a *= a;
          float twinkle = 0.55 + 0.45 * sin(vPhase * 40.0 + uv.x * 4.0);
          vec3 c = mix(uColorA, uColorB, 0.5 + 0.5 * sin(vPhase * 6.283));
          gl_FragColor = vec4(c * (0.8 + twinkle * 0.5), a * (0.45 + twinkle * 0.55));
        }
      `,
    });
    const points = new THREE.Points(geo, fireflyMat);
    points.frustumCulled = false;
    scene.add(points);
  }

  /* ── petals ── */
  let petalMat;
  {
    const n = mobile ? 100 : 150;
    const positions = new Float32Array(n * 3);
    const phases = new Float32Array(n);
    const sizes = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const r = 8 + Math.pow(rand(), 0.7) * 62;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = 2 + rand() * 12;
      positions[i * 3 + 2] = Math.sin(a) * r;
      phases[i] = rand();
      sizes[i] = 4 + rand() * 7;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    petalMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        uColor: { value: new THREE.Color(0xffd3e6) },
      },
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */`
        attribute float aPhase;
        attribute float aSize;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vPhase;
        void main() {
          vPhase = aPhase;
          vec3 p = position;
          p.y = 1.4 + mod(position.y - uTime * (0.28 + aPhase * 0.22), 12.0);
          p.x += sin(uTime * 0.42 + aPhase * 6.283) * 2.0;
          p.z += cos(uTime * 0.33 + aPhase * 4.2) * 1.7;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = aSize * uPixelRatio * (18.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */`
        varying float vPhase;
        uniform vec3 uColor;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv * vec2(1.0, 1.5));
          float a = smoothstep(0.5, 0.05, d);
          float shimmer = 0.55 + 0.45 * sin(vPhase * 30.0);
          gl_FragColor = vec4(uColor, a * 0.42 * shimmer);
        }
      `,
    });
    const points = new THREE.Points(geo, petalMat);
    points.frustumCulled = false;
    scene.add(points);
  }

  /* ── memories (orbs) ── */
  const memories = [];
  MEMORY_DATA.forEach((data, i) => {
    const color = ORB_COLORS[i % ORB_COLORS.length];
    const y = heightAt(data.x, data.z) + 1.55;
    const group = new THREE.Group();
    group.position.set(data.x, y, data.z);

    const coreColor = new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.4);
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.19, 1),
      new THREE.MeshStandardMaterial({
        color: coreColor, emissive: color, emissiveIntensity: 1.35,
        roughness: 0.26, metalness: 0.12, flatShading: true,
      }),
    );
    group.add(core);

    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.44, 1),
      new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0.25,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    );
    group.add(shell);

    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color, transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    glow.scale.setScalar(2.85);
    group.add(glow);

    const ringMat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.4,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.012, 4, 40), ringMat);
    ring.rotation.x = Math.PI / 2.2;
    group.add(ring);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.008, 4, 40), ringMat.clone());
    ring2.rotation.set(Math.PI / 3, 0.4, 0);
    group.add(ring2);

    const motes = [];
    for (let m = 0; m < 4; m++) {
      const mote = new THREE.Sprite(new THREE.SpriteMaterial({
        map: softDot, color, transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      mote.scale.setScalar(0.16);
      mote.userData.phase = (m / 4) * Math.PI * 2;
      mote.userData.radius = 0.75 + (m % 2) * 0.22;
      group.add(mote);
      motes.push(mote);
    }

    const beam = new THREE.Sprite(new THREE.SpriteMaterial({
      map: beamTex, color, transparent: true, opacity: 0.24,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: true,
    }));
    beam.center.set(0.5, 0.03);
    beam.position.y = -1.0;
    beam.scale.set(1.5, 8, 1);
    group.add(beam);

    const pool = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 4.4),
      new THREE.MeshBasicMaterial({
        map: glowTex, color, transparent: true, opacity: 0.3,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: true,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = -1.52;
    group.add(pool);

    scene.add(group);
    memories.push({
      group, core, shell, glow, ring, ring2, motes, beam, pool,
      color, baseY: y, phase: i * 1.31, collected: false,
      x: data.x, z: data.z, text: data.text,
    });
  });

  /* ── the doorway ── */
  const doorX = pathX(-32);
  const doorZ = -32;
  const doorGround = heightAt(doorX, doorZ);
  const door = new THREE.Group();
  door.position.set(doorX, doorGround, doorZ);
  scene.add(door);

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xa99ab5, roughness: 0.92, flatShading: true });
  const stoneLightMat = new THREE.MeshStandardMaterial({ color: 0xc5b8cd, roughness: 0.88, flatShading: true });
  const doorUniforms = {
    uTime: { value: 0 },
    uActive: { value: 0 },
    uColA: { value: new THREE.Color(0xaebcff) },
    uColB: { value: new THREE.Color(0xe3b4ff) },
  };

  const base = new THREE.Mesh(new THREE.CylinderGeometry(4.3, 4.9, 0.7, 8), stoneMat);
  base.position.y = 0.18;
  door.add(base);

  const stepGeo = new THREE.BoxGeometry(1, 1, 1);
  [0, 1, 2].forEach((i) => {
    const step = new THREE.Mesh(stepGeo, stoneLightMat);
    step.scale.set(8.4 - i * 1.3, 0.2, 1.15);
    step.position.set(0, 0.34 - i * 0.11, 2.9 + i * 1.05);
    step.rotation.y = 0.01 * (i - 1);
    door.add(step);
  });

  [-2.35, 2.35].forEach((x) => {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 5.2, 6), stoneMat);
    pillar.position.set(x, 3.1, 0);
    door.add(pillar);
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.82, 0.35, 6), stoneLightMat);
    foot.position.set(x, 0.72, 0);
    door.add(foot);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.5, 0.26, 6), stoneLightMat);
    cap.position.set(x, 5.78, 0);
    door.add(cap);
  });

  const arch = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.42, 7, 26, Math.PI), stoneMat);
  arch.position.y = 5.68;
  door.add(arch);

  const archGlow = new THREE.Mesh(
    new THREE.TorusGeometry(2.4, 0.1, 6, 30, Math.PI),
    new THREE.MeshBasicMaterial({
      color: 0xffd2e8, transparent: true, opacity: 0.16,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  );
  archGlow.position.y = 5.68;
  door.add(archGlow);

  const pillarLights = [];
  [-2.35, 2.35].forEach((x) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: 0xffd9ec, transparent: true, opacity: 0.4,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    s.position.set(x, 6.1, 0.2);
    s.scale.setScalar(1.9);
    door.add(s);
    pillarLights.push(s);
  });

  const keystone = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.8, 0.55), stoneLightMat);
  keystone.position.set(0, 8.28, 0);
  door.add(keystone);

  const veilMat = new THREE.ShaderMaterial({
    uniforms: doorUniforms,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform float uTime;
      uniform float uActive;
      uniform vec3 uColA;
      uniform vec3 uColB;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        float edge = smoothstep(0.0, 0.16, uv.x) * smoothstep(1.0, 0.84, uv.x);
        float vert = smoothstep(0.0, 0.1, uv.y) * smoothstep(1.0, 0.78, uv.y);
        float wave = sin(uv.y * 9.0 + uTime * 1.1) * 0.02 + sin(uv.x * 12.0 - uTime * 0.8) * 0.015;
        float n = sin((uv.y + wave) * 16.0 - uTime * 2.1) * 0.5 + 0.5;
        float n2 = sin((uv.x + uv.y * 0.5) * 11.0 + uTime * 1.4) * 0.5 + 0.5;
        vec3 col = mix(uColA, uColB, n * 0.55 + uv.y * 0.25);
        col += vec3(0.1, 0.08, 0.15) * n2;
        float a = (0.2 + 0.24 * n) * edge * vert * (0.55 + uActive * 0.45);
        gl_FragColor = vec4(col * 0.9, a);
      }
    `,
  });
  const veil = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 5.2), veilMat);
  veil.position.set(0, 3.15, 0);
  door.add(veil);

  const doorGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0xffd8f0, transparent: true, opacity: 0.26,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
  }));
  doorGlow.position.set(0, 3.4, -0.4);
  doorGlow.scale.setScalar(14);
  door.add(doorGlow);

  const beam = new THREE.Sprite(new THREE.SpriteMaterial({
    map: beamTex, color: 0xffe0b5, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
  }));
  beam.center.set(0.5, 0.0);
  beam.position.set(0, 0.6, 0);
  beam.scale.set(5, 36, 1);
  door.add(beam);

  const doorLight = new THREE.PointLight(0xffd9c4, 8, 32, 2);
  doorLight.position.set(0, 3.2, 1.4);
  door.add(doorLight);

  // soft motes drifting above the doorway
  const doorMotes = [];
  for (let i = 0; i < 12; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softDot, color: i % 2 ? 0xffd9b0 : 0xffc2e0, transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: true,
    }));
    s.scale.setScalar(0.18 + rand() * 0.16);
    s.userData = { phase: rand() * 6.283, radius: 1.4 + rand() * 2.2, speed: 0.12 + rand() * 0.18, base: 0.6 + rand() * 6 };
    door.add(s);
    doorMotes.push(s);
  }

  /* ── guide wisp ── */
  const guide = new THREE.Group();
  const guideGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0xb9ffe8, transparent: true, opacity: 0.72,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
  }));
  guideGlow.scale.setScalar(1.6);
  guide.add(guideGlow);
  const guideCore = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.055, 1),
    new THREE.MeshBasicMaterial({ color: 0xf2fff9 }),
  );
  guide.add(guideCore);
  guide.position.set(0, 3, 24);
  scene.add(guide);

  /* ── collect burst ── */
  const burst = (() => {
    const n = 90;
    const positions = new Float32Array(n * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      map: glowTex, color: 0xffc6e0, size: 0.42, transparent: true,
      opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending,
      sizeAttenuation: true, fog: false,
    });
    const points = new THREE.Points(geo, mat);
    points.visible = false;
    points.frustumCulled = false;
    scene.add(points);
    return {
      points, geo, mat,
      velocities: new Float32Array(n * 3),
      n, life: 0, active: false,
      origin: new THREE.Vector3(),
      trigger(pos, color) {
        this.origin.copy(pos);
        const p = this.geo.attributes.position.array;
        for (let i = 0; i < n; i++) {
          p[i * 3] = pos.x; p[i * 3 + 1] = pos.y; p[i * 3 + 2] = pos.z;
          const a = Math.random() * Math.PI * 2;
          const b = Math.acos(Math.random() * 2 - 1);
          const sp = 0.8 + Math.random() * 2.4;
          this.velocities[i * 3] = Math.sin(b) * Math.cos(a) * sp;
          this.velocities[i * 3 + 1] = Math.cos(b) * sp * 0.8 + 1.1;
          this.velocities[i * 3 + 2] = Math.sin(b) * Math.sin(a) * sp;
        }
        this.geo.attributes.position.needsUpdate = true;
        this.mat.color.setHex(color);
        this.mat.opacity = 1;
        this.points.visible = true;
        this.active = true;
        this.life = 0;
      },
      update(dt) {
        if (!this.active) return;
        this.life += dt;
        const p = this.geo.attributes.position.array;
        for (let i = 0; i < n; i++) {
          p[i * 3] += this.velocities[i * 3] * dt;
          p[i * 3 + 1] += this.velocities[i * 3 + 1] * dt;
          p[i * 3 + 2] += this.velocities[i * 3 + 2] * dt;
          this.velocities[i * 3] *= 0.975;
          this.velocities[i * 3 + 1] = this.velocities[i * 3 + 1] * 0.977 - 0.55 * dt;
          this.velocities[i * 3 + 2] *= 0.975;
        }
        this.geo.attributes.position.needsUpdate = true;
        this.mat.opacity = Math.max(0, 1 - this.life / 1.9);
        this.mat.size = 0.42 + this.life * 0.18;
        if (this.life > 2) {
          this.active = false;
          this.points.visible = false;
        }
      },
    };
  })();

  /* ── state + update ── */
  const state = {
    phase: 0,
    guide: new THREE.Vector3(0, 3, 24),
  };

  const tmpColor = new THREE.Color();
  const dusk = {
    top: new THREE.Color(PALETTE.dusk.top),
    mid: new THREE.Color(PALETTE.dusk.mid),
    horizon: new THREE.Color(PALETTE.dusk.horizon),
    glow: new THREE.Color(PALETTE.dusk.glow),
    fog: new THREE.Color(PALETTE.dusk.fog),
    sun: new THREE.Color(PALETTE.dusk.sun),
  };
  const dawn = {
    top: new THREE.Color(PALETTE.dawn.top),
    mid: new THREE.Color(PALETTE.dawn.mid),
    horizon: new THREE.Color(PALETTE.dawn.horizon),
    glow: new THREE.Color(PALETTE.dawn.glow),
    fog: new THREE.Color(PALETTE.dawn.fog),
    sun: new THREE.Color(PALETTE.dawn.sun),
  };
  const lerpC = (target, a, b, t) => target.copy(a).lerp(b, t);

  const world = {
    heightAt,
    colliders,
    memories,
    door: { group: door, position: new THREE.Vector3(doorX, doorGround, doorZ), uniforms: doorUniforms, light: doorLight, beam },
    guide,
    state,
    burst,
    get phase() { return state.phase; },

    setPhase(p) { state.phase = Math.max(0, Math.min(1, p)); },

    collect(index, fromPos) {
      const m = memories[index];
      if (!m || m.collected) return false;
      m.collected = true;
      m.group.visible = false;
      burst.trigger(m.group.position, m.color);
      return true;
    },

    update(dt, t, camera, guideTarget) {
      const phase = state.phase;
      const ease = 1 - Math.exp(-dt * 1.4);
      lerpC(skyUniforms.uTop.value, dusk.top, dawn.top, phase);
      lerpC(skyUniforms.uMid.value, dusk.mid, dawn.mid, phase);
      lerpC(skyUniforms.uHorizon.value, dusk.horizon, dawn.horizon, phase);
      lerpC(skyUniforms.uGlow.value, dusk.glow, dawn.glow, phase);
      lerpC(fog.color, dusk.fog, dawn.fog, phase);
      fog.density = 0.0145 - 0.0018 * phase;
      lerpC(sun.color, dusk.sun, dawn.sun, phase);
      sun.intensity = 1.85 + phase * 0.35;
      hemi.intensity = 1.35 + phase * 0.18;
      skyGroup.position.copy(camera.position);

      fireflyMat.uniforms.uTime.value = t;
      petalMat.uniforms.uTime.value = t;

      for (const s of lanterns) {
        s.material.opacity = s.userData.baseOpacity * (0.72 + 0.28 * Math.sin(t * 1.3 + s.userData.phase));
      }
      for (const s of flowerGlows) {
        s.material.opacity = 0.38 + 0.2 * Math.sin(t * 1.6 + s.userData.phase);
      }

      memories.forEach((m, i) => {
        if (m.collected) return;
        const bob = Math.sin(t * 0.85 + m.phase) * 0.16;
        m.group.position.y = m.baseY + bob;
        m.group.rotation.y += dt * 0.28;
        m.core.rotation.x += dt * 0.5;
        m.core.rotation.z += dt * 0.3;
        m.shell.rotation.y -= dt * 0.42;
        const pulse = 1 + Math.sin(t * 1.8 + i) * 0.08;
        // Fade the broad additive layers with proximity so the orb never
        // whites out the screen when you walk right up to it.
        const camDist = camera.position.distanceTo(m.group.position);
        const glowFade = smoothstep(2.6, 7.6, camDist);
        const ringFade = smoothstep(3.0, 6.5, camDist);
        const beamFade = smoothstep(2.4, 8.5, camDist);
        const poolFade = smoothstep(1.2, 5.5, camDist);
        m.glow.scale.setScalar((1.55 + 1.45 * glowFade) * pulse);
        m.glow.material.opacity = 0.46 * glowFade;
        m.shell.material.opacity = 0.18 * (0.2 + 0.8 * glowFade);
        m.shell.scale.setScalar(0.95 + Math.sin(t * 2.1 + i) * 0.07);
        m.ring.material.opacity = 0.34 * ringFade;
        m.ring2.material.opacity = 0.24 * ringFade;
        m.ring.rotation.z += dt * 0.5;
        m.ring2.rotation.z -= dt * 0.34;
        m.beam.material.opacity = (0.11 + 0.04 * Math.sin(t * 1.2 + i)) * beamFade;
        m.pool.material.opacity = 0.22 * (0.25 + 0.75 * poolFade);
        m.motes.forEach((mote) => {
          const a = t * 0.9 + mote.userData.phase;
          mote.position.set(
            Math.cos(a) * mote.userData.radius,
            Math.sin(a * 1.7) * 0.5,
            Math.sin(a) * mote.userData.radius,
          );
        });
      });

      doorUniforms.uTime.value = t;
      doorUniforms.uActive.value = phase;
      const doorDist = camera.position.distanceTo(door.position);
      const doorNear = smoothstep(3.0, 12.0, doorDist);
      doorGlow.material.opacity = (0.2 + phase * 0.3) * (0.28 + 0.72 * doorNear);
      doorGlow.scale.setScalar(10 + Math.sin(t * 1.1) * 0.4 + phase * 2);
      archGlow.material.opacity = 0.1 + phase * 0.3 + Math.sin(t * 1.7) * 0.02;
      pillarLights.forEach((s, i) => {
        s.material.opacity = 0.22 + phase * 0.3 + Math.sin(t * 1.9 + i) * 0.06;
      });
      beam.material.opacity = (0.02 + phase * 0.2) * (0.2 + 0.8 * doorNear);
      doorLight.intensity = 6 + phase * 13 + Math.sin(t * 2) * 1.2;
      doorMotes.forEach((s, i) => {
        const d = s.userData;
        const a = t * d.speed + d.phase;
        s.position.set(
          Math.cos(a) * d.radius,
          d.base + Math.sin(a * 1.4) * 1.2,
          Math.sin(a) * d.radius * 0.6,
        );
        s.material.opacity = (0.35 + 0.4 * Math.sin(a * 2.0 + i)) * (0.4 + phase * 0.6);
      });

      if (guideTarget) {
        const desired = new THREE.Vector3(
          guideTarget.x,
          guideTarget.y + 0.5 + Math.sin(t * 1.6) * 0.22,
          guideTarget.z,
        );
        state.guide.lerp(desired, 1 - Math.exp(-dt * 1.25));
        guide.position.copy(state.guide);
        guideGlow.material.opacity = 0.5 + 0.22 * Math.sin(t * 2.2);
        guideCore.rotation.y += dt * 0.9;
        guide.scale.setScalar(1 + Math.sin(t * 1.9) * 0.06);
      }

      burst.update(dt);
    },
  };

  return world;
}
