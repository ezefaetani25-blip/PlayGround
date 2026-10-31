import * as THREE from 'three';
import { BLOCKS, WATER } from './blocks.js';

const EPS = 0.0015;

export class Player {
  constructor(world) {
    this.world = world;
    this.position = new THREE.Vector3(world.spawn.x, world.spawn.y, world.spawn.z);
    this.spawn = world.spawn.clone();
    this.velocity = new THREE.Vector3();
    this.yaw = 0.7;
    this.pitch = -0.08;
    this.width = 0.6;
    this.height = 1.8;
    this.eyeHeight = 1.62;
    this.onGround = false;
    this.flying = false;
    this.inWater = false;
    this.headUnderwater = false;
    this.bob = 0;
    this.bobAmount = 0;
    this.walkDistance = 0;
    this.wasInWater = false;
    this.lastFallSpeed = 0;
    this.sensitivity = 1;
    this.invertY = false;
    this.bobbing = true;
    this.stepSound = 'grass';
    this.onStep = null;
    this.onLand = null;
    this.onSplash = null;
  }

  setSpawn(spawn) {
    this.spawn.copy(spawn);
    this.position.copy(spawn);
    this.velocity.set(0, 0, 0);
  }

  teleport(x, y, z, yaw = this.yaw, pitch = this.pitch) {
    this.position.set(x, y, z);
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = pitch;
    this.onGround = false;
  }

  blockAt(x, y, z) {
    return this.world.getBlock(x, y, z);
  }

  solidAt(x, y, z) {
    return !!BLOCKS[this.world.getBlock(x, y, z)]?.solid;
  }

  collides(px = this.position.x, py = this.position.y, pz = this.position.z) {
    const hw = this.width / 2;
    const minX = Math.floor(px - hw + EPS);
    const maxX = Math.floor(px + hw - EPS);
    const minY = Math.floor(py + EPS);
    const maxY = Math.floor(py + this.height - EPS);
    const minZ = Math.floor(pz - hw + EPS);
    const maxZ = Math.floor(pz + hw - EPS);
    for (let y = minY; y <= maxY; y++) {
      for (let z = minZ; z <= maxZ; z++) {
        for (let x = minX; x <= maxX; x++) {
          if (this.solidAt(x, y, z)) return true;
        }
      }
    }
    return false;
  }

  update(dt, input) {
    const world = this.world;
    const feetBlock = world.getBlock(Math.floor(this.position.x), Math.floor(this.position.y + 0.2), Math.floor(this.position.z));
    const bodyBlock = world.getBlock(Math.floor(this.position.x), Math.floor(this.position.y + 0.9), Math.floor(this.position.z));
    const eyeBlock = world.getBlock(Math.floor(this.position.x), Math.floor(this.position.y + this.eyeHeight), Math.floor(this.position.z));
    this.inWater = feetBlock === WATER || bodyBlock === WATER;
    this.headUnderwater = eyeBlock === WATER;

    if (this.inWater && !this.wasInWater) {
      this.onSplash?.();
      if (this.velocity.y < -5) this.velocity.y *= 0.4;
    }
    this.wasInWater = this.inWater;

    const forwardInput = Math.max(-1, Math.min(1, (input.forward ? 1 : 0) - (input.back ? 1 : 0) + (input.axisY || 0)));
    const strafeInput = Math.max(-1, Math.min(1, (input.right ? 1 : 0) - (input.left ? 1 : 0) + (input.axisX || 0)));
    const inputLen = Math.hypot(forwardInput, strafeInput);
    const moving = inputLen > 0.08;

    const sinYaw = Math.sin(this.yaw);
    const cosYaw = Math.cos(this.yaw);
    let wishX = -sinYaw * forwardInput + cosYaw * strafeInput;
    let wishZ = -cosYaw * forwardInput - sinYaw * strafeInput;
    const wishLen = Math.hypot(wishX, wishZ);
    if (wishLen > 1) {
      wishX /= wishLen;
      wishZ /= wishLen;
    }

    const sprint = !!input.sprint;
    let speed;
    if (this.flying) speed = sprint ? 18 : 10.5;
    else if (this.inWater) speed = 3.5;
    else speed = sprint ? 7.2 : 4.5;

    const accel = this.flying ? 9 : this.onGround ? 14 : this.inWater ? 7 : 3.2;
    const blend = 1 - Math.exp(-accel * dt);
    this.velocity.x += (wishX * speed - this.velocity.x) * blend;
    this.velocity.z += (wishZ * speed - this.velocity.z) * blend;

    if (this.flying) {
      const vertical = (input.jump ? 1 : 0) - (input.down ? 1 : 0);
      this.velocity.y += (vertical * speed - this.velocity.y) * (1 - Math.exp(-10 * dt));
    } else if (this.inWater) {
      if (input.jump) this.velocity.y += 24 * dt;
      else this.velocity.y -= 7 * dt;
      this.velocity.y *= Math.exp(-2.2 * dt);
      this.velocity.y = Math.max(-3.2, Math.min(3.6, this.velocity.y));
    } else {
      this.velocity.y -= 30 * dt;
      if (input.jump && this.onGround) {
        this.velocity.y = 8.7;
        this.onGround = false;
        this.onStep?.('jump');
      }
      this.velocity.y = Math.max(-38, this.velocity.y);
    }

    this.lastFallSpeed = this.velocity.y;

    const wasGround = this.onGround;
    this.onGround = false;

    // Horizontal movement with automatic one-block step-up.
    const dx = this.velocity.x * dt;
    const dz = this.velocity.z * dt;
    if (Math.abs(dx) > 0.00001 || Math.abs(dz) > 0.00001) {
      const startX = this.position.x;
      const startZ = this.position.z;
      this.position.x += dx;
      this.position.z += dz;
      if (this.collides()) {
        let stepped = false;
        if (!this.flying && (wasGround || this.inWater)) {
          const testY = this.position.y + 1.02;
          if (!this.collides(this.position.x, testY, this.position.z) && this.collides(this.position.x, this.position.y, this.position.z)) {
            this.position.y = testY;
            stepped = true;
          }
        }
        if (!stepped) {
          this.position.x = startX;
          this.position.z = startZ;
          // Try each axis separately so we slide along walls.
          this.position.x += dx;
          if (this.collides()) {
            this.position.x = startX;
            this.velocity.x = 0;
          }
          this.position.z += dz;
          if (this.collides()) {
            this.position.z = startZ;
            this.velocity.z = 0;
          }
        }
      }
    }

    const yBefore = this.position.y;
    this.position.y += this.velocity.y * dt;
    if (this.collides()) {
      this.position.y = yBefore;
      if (this.velocity.y < 0) {
        this.onGround = true;
        if (!wasGround && this.lastFallSpeed < -9) this.onLand?.();
      }
      this.velocity.y = 0;
    }

    if (!this.onGround && this.velocity.y <= 0) {
      // Ground probe just below the feet.
      if (this.collides(this.position.x, this.position.y - 0.02, this.position.z)) this.onGround = true;
    }

    if (this.position.y < -24) this.respawn();
    if (this.position.y > this.world.height + 30) this.respawn();

    // Head bob and footsteps.
    const horizontalSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    const bobTarget = this.bobbing && this.onGround && !this.flying && horizontalSpeed > 0.6 ? Math.min(1, horizontalSpeed / 5.5) : 0;
    this.bobAmount += (bobTarget - this.bobAmount) * Math.min(1, dt * 8);
    if (bobTarget > 0) this.bob += horizontalSpeed * dt * 1.9;

    if (this.onGround && horizontalSpeed > 1.2) {
      this.walkDistance += horizontalSpeed * dt;
      if (this.walkDistance > 1.65) {
        this.walkDistance = 0;
        const below = this.blockAt(Math.floor(this.position.x), Math.floor(this.position.y - 0.1), Math.floor(this.position.z));
        this.stepSound = BLOCKS[below]?.sound || 'grass';
        this.onStep?.('walk');
      }
    } else {
      this.walkDistance = Math.min(this.walkDistance, 1.3);
    }
  }

  respawn() {
    this.teleport(this.spawn.x, this.spawn.y, this.spawn.z);
  }

  updateCamera(camera, dt = 0) {
    const bobY = Math.sin(this.bob * 2) * 0.045 * this.bobAmount;
    const bobX = Math.cos(this.bob) * 0.03 * this.bobAmount;
    const roll = Math.sin(this.bob) * 0.007 * this.bobAmount;
    camera.position.set(this.position.x + bobX, this.position.y + this.eyeHeight + bobY, this.position.z);
    camera.rotation.set(this.pitch, this.yaw, roll, 'YXZ');
  }

  getEyePosition(out = new THREE.Vector3()) {
    return out.set(this.position.x, this.position.y + this.eyeHeight, this.position.z);
  }

  getLookDirection(out = new THREE.Vector3()) {
    const cp = Math.cos(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp).normalize();
  }

  look(dx, dy) {
    const s = 0.0022 * this.sensitivity;
    this.yaw -= dx * s;
    this.pitch -= (this.invertY ? -dy : dy) * s;
    this.clampPitch();
  }

  lookTouch(dx, dy) {
    const s = 0.0038 * this.sensitivity;
    this.yaw -= dx * s;
    this.pitch -= (this.invertY ? -dy : dy) * s;
    this.clampPitch();
  }

  clampPitch() {
    const lim = Math.PI / 2 - 0.02;
    this.pitch = Math.max(-lim, Math.min(lim, this.pitch));
  }

  toggleFly() {
    this.flying = !this.flying;
    this.velocity.y = 0;
    return this.flying;
  }

  serialize() {
    return {
      x: +this.position.x.toFixed(3),
      y: +this.position.y.toFixed(3),
      z: +this.position.z.toFixed(3),
      yaw: +this.yaw.toFixed(4),
      pitch: +this.pitch.toFixed(4),
    };
  }
}
