import * as THREE from 'three';

const _matrix = new THREE.Matrix4();
const _position = new THREE.Vector3();
const _quaternion = new THREE.Quaternion();
const _scale = new THREE.Vector3();
const _euler = new THREE.Euler();
const _color = new THREE.Color();

export class BlockParticles {
  constructor(scene, count = 180) {
    this.count = count;
    this.items = new Array(count).fill(null);
    this.cursor = 0;
    const geometry = new THREE.BoxGeometry(0.13, 0.13, 0.13);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.92,
      metalness: 0,
      vertexColors: false,
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;
    scene.add(this.mesh);
    for (let i = 0; i < count; i += 1) {
      _matrix.makeScale(0, 0, 0);
      this.mesh.setMatrixAt(i, _matrix);
      this.mesh.setColorAt(i, _color.set(0xffffff));
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  spawnBurst(x, y, z, color, amount = 16) {
    for (let i = 0; i < amount; i += 1) {
      const index = this.cursor;
      this.cursor = (this.cursor + 1) % this.count;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.7 + Math.random() * 2.4;
      const item = {
        x: x + 0.5 + (Math.random() - 0.5) * 0.6,
        y: y + 0.5 + (Math.random() - 0.5) * 0.6,
        z: z + 0.5 + (Math.random() - 0.5) * 0.6,
        vx: Math.cos(angle) * speed * 0.55,
        vy: 1.2 + Math.random() * 2.4,
        vz: Math.sin(angle) * speed * 0.55,
        life: 0.55 + Math.random() * 0.55,
        maxLife: 1.1,
        size: 0.45 + Math.random() * 0.8,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 10,
      };
      this.items[index] = item;
      const base = new THREE.Color(color);
      base.offsetHSL((Math.random() - 0.5) * 0.035, 0, (Math.random() - 0.5) * 0.13);
      this.mesh.setColorAt(index, base);
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  spawnPlace(x, y, z, color) {
    for (let i = 0; i < 7; i += 1) {
      const index = this.cursor;
      this.cursor = (this.cursor + 1) % this.count;
      this.items[index] = {
        x: x + 0.5 + (Math.random() - 0.5) * 0.9,
        y: y + 0.05,
        z: z + 0.5 + (Math.random() - 0.5) * 0.9,
        vx: (Math.random() - 0.5) * 0.6,
        vy: 0.4 + Math.random() * 0.9,
        vz: (Math.random() - 0.5) * 0.6,
        life: 0.32 + Math.random() * 0.24,
        maxLife: 0.56,
        size: 0.3 + Math.random() * 0.4,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 8,
      };
      this.mesh.setColorAt(index, _color.set(color).offsetHSL(0, 0, (Math.random() - 0.5) * 0.1));
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  update(dt) {
    let changed = false;
    for (let i = 0; i < this.count; i += 1) {
      const item = this.items[i];
      if (!item) continue;
      changed = true;
      item.life -= dt;
      if (item.life <= 0) {
        this.items[i] = null;
        _matrix.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(i, _matrix);
        continue;
      }
      item.vy -= 14 * dt;
      item.x += item.vx * dt;
      item.y += item.vy * dt;
      item.z += item.vz * dt;
      item.rot += item.spin * dt;
      if (item.y < 0) {
        item.y = 0;
        item.vy *= -0.25;
        item.vx *= 0.7;
        item.vz *= 0.7;
      }
      const fade = Math.min(1, item.life / 0.32);
      const size = item.size * fade;
      _position.set(item.x, item.y, item.z);
      _euler.set(item.rot, item.rot * 0.7, item.rot * 0.4);
      _quaternion.setFromEuler(_euler);
      _scale.set(size, size, size);
      _matrix.compose(_position, _quaternion, _scale);
      this.mesh.setMatrixAt(i, _matrix);
    }
    if (changed) this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class SmokeSystem {
  constructor(scene, count = 80) {
    this.count = count;
    this.items = new Array(count).fill(null);
    this.cursor = 0;
    this.timer = 0;
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xcac6b9,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      fog: true,
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    for (let i = 0; i < count; i += 1) {
      _matrix.makeScale(0, 0, 0);
      this.mesh.setMatrixAt(i, _matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  update(dt, emitter, enabled = true) {
    this.timer -= dt;
    if (enabled && emitter && this.timer <= 0) {
      this.timer = 0.16 + Math.random() * 0.12;
      const index = this.cursor;
      this.cursor = (this.cursor + 1) % this.count;
      this.items[index] = {
        x: emitter.x + (Math.random() - 0.5) * 0.5,
        y: emitter.y,
        z: emitter.z + (Math.random() - 0.5) * 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: 0.35 + Math.random() * 0.45,
        vz: (Math.random() - 0.5) * 0.2,
        life: 3.2 + Math.random() * 2.4,
        maxLife: 5.6,
        size: 0.7 + Math.random() * 0.6,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.5,
      };
    }

    let changed = false;
    for (let i = 0; i < this.count; i += 1) {
      const item = this.items[i];
      if (!item) continue;
      changed = true;
      item.life -= dt;
      if (item.life <= 0) {
        this.items[i] = null;
        _matrix.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(i, _matrix);
        continue;
      }
      item.x += item.vx * dt;
      item.y += item.vy * dt;
      item.z += item.vz * dt;
      item.vx += Math.sin(item.y * 1.7 + i) * 0.012 * dt;
      item.vz += Math.cos(item.y * 1.2 + i) * 0.01 * dt;
      item.rot += item.spin * dt;
      const age = item.maxLife - item.life;
      const fade = Math.min(1, age / 0.5) * Math.min(1, item.life / 1.3);
      const size = item.size * (0.7 + age * 0.55) * fade;
      _position.set(item.x, item.y, item.z);
      _euler.set(item.rot, item.rot * 0.6, item.rot * 0.3);
      _quaternion.setFromEuler(_euler);
      _scale.set(size, size, size);
      _matrix.compose(_position, _quaternion, _scale);
      this.mesh.setMatrixAt(i, _matrix);
    }
    if (changed) this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class Motes {
  constructor(scene, count = 110) {
    this.count = count;
    this.group = new THREE.Group();
    scene.add(this.group);
    const geometry = new THREE.BoxGeometry(0.032, 0.032, 0.032);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffdda0,
      transparent: true,
      opacity: 0.46,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.group.add(this.mesh);
    this.items = [];
    for (let i = 0; i < count; i += 1) {
      this.items.push({
        x: (Math.random() - 0.5) * 36,
        y: 1 + Math.random() * 17,
        z: (Math.random() - 0.5) * 36,
        phase: Math.random() * Math.PI * 2,
        speed: 0.1 + Math.random() * 0.25,
        scale: 0.6 + Math.random() * 1.5,
      });
    }
    this.group.position.set(0, 0, 0);
    this.time = 0;
  }

  update(dt, cameraPosition) {
    this.time += dt;
    this.group.position.x = THREE.MathUtils.lerp(this.group.position.x, cameraPosition.x, 0.025);
    this.group.position.y = THREE.MathUtils.lerp(this.group.position.y, cameraPosition.y - 8.5, 0.025);
    this.group.position.z = THREE.MathUtils.lerp(this.group.position.z, cameraPosition.z, 0.025);
    for (let i = 0; i < this.count; i += 1) {
      const item = this.items[i];
      const x = item.x + Math.sin(this.time * item.speed + item.phase) * 0.65;
      const y = item.y + Math.sin(this.time * item.speed * 1.7 + item.phase * 1.4) * 0.7;
      const z = item.z + Math.cos(this.time * item.speed * 0.8 + item.phase) * 0.65;
      const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(this.time * 0.7 + item.phase));
      const size = item.scale * twinkle;
      _position.set(x, y, z);
      _quaternion.set(0, 0, 0, 1);
      _scale.set(size, size, size);
      _matrix.compose(_position, _quaternion, _scale);
      this.mesh.setMatrixAt(i, _matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
