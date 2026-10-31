import * as THREE from 'three';
import { BLOCK, HOTBAR, blockName, isLiquid } from './blocks.js';

const EYE_HEIGHT = 1.62;
const PLAYER_HEIGHT = 1.78;
const PLAYER_RADIUS = 0.31;
const GRAVITY = 27;
const JUMP_SPEED = 8.9;

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

export class Player {
  constructor({ camera, world, settings, callbacks = {} }) {
    this.camera = camera;
    this.camera.rotation.order = 'YXZ';
    this.world = world;
    this.settings = settings;
    this.callbacks = callbacks;
    this.position = new THREE.Vector3(0, 30, 0);
    this.velocity = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.onGround = false;
    this.fly = false;
    this.inWater = false;
    this.enabled = false;
    this.selected = 0;
    this.target = null;
    this.bobPhase = 0;
    this.walkDistance = 0;
    this.stepTimer = 0;
    this.sprinting = false;
    this.keys = new Set();
    this.touchMove = { x: 0, z: 0 };
    this.lookPointer = null;
    this.touchLook = null;
    this.baseFov = settings.fov ?? 78;
    this._lastFov = this.baseFov;
    this._dir = new THREE.Vector3();
    this._temp = new THREE.Vector3();
    this._bindInput();
  }

  get selectedBlock() {
    return HOTBAR[this.selected];
  }

  _bindInput() {
    window.addEventListener('keydown', (event) => {
      if (!this.enabled) return;
      if (event.code === 'Tab') event.preventDefault();
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) event.preventDefault();
      this.keys.add(event.code);
      if (event.code === 'KeyF' && !event.repeat) {
        this.toggleFly();
      }
      if (event.code.startsWith('Digit')) {
        const index = Number(event.code.slice(5)) - 1;
        if (index >= 0 && index < HOTBAR.length) this.setSelected(index);
      }
    });

    window.addEventListener('keyup', (event) => {
      this.keys.delete(event.code);
    });

    window.addEventListener('blur', () => {
      this.keys.clear();
    });

    document.addEventListener('mousemove', (event) => {
      if (!this.enabled || document.pointerLockElement !== document.getElementById('scene')) return;
      this.look(event.movementX, event.movementY);
    });

    const canvas = document.getElementById('scene');
    canvas.addEventListener('mousedown', (event) => {
      if (!this.enabled) return;
      if (document.pointerLockElement !== canvas) return;
      if (event.button === 0) this.breakBlock();
      if (event.button === 2) this.placeBlock();
    });

    canvas.addEventListener('contextmenu', (event) => event.preventDefault());

    canvas.addEventListener(
      'wheel',
      (event) => {
        if (!this.enabled) return;
        event.preventDefault();
        const direction = Math.sign(event.deltaY);
        const next = (this.selected + direction + HOTBAR.length) % HOTBAR.length;
        this.setSelected(next);
      },
      { passive: false }
    );

    canvas.addEventListener('pointerdown', (event) => {
      if (!this.enabled || event.pointerType !== 'touch') return;
      if (this.touchLook) return;
      this.touchLook = { id: event.pointerId, x: event.clientX, y: event.clientY };
      canvas.setPointerCapture?.(event.pointerId);
      event.preventDefault();
    });

    canvas.addEventListener('pointermove', (event) => {
      if (!this.touchLook || this.touchLook.id !== event.pointerId) return;
      const dx = event.clientX - this.touchLook.x;
      const dy = event.clientY - this.touchLook.y;
      this.touchLook.x = event.clientX;
      this.touchLook.y = event.clientY;
      this.look(dx * 1.55, dy * 1.55);
      event.preventDefault();
    });

    const endTouchLook = (event) => {
      if (!this.touchLook || this.touchLook.id !== event.pointerId) return;
      this.touchLook = null;
    };
    canvas.addEventListener('pointerup', endTouchLook);
    canvas.addEventListener('pointercancel', endTouchLook);
  }

  look(dx, dy) {
    const sensitivity = (this.settings.sensitivity ?? 1) * 0.00215;
    this.yaw -= dx * sensitivity;
    const invert = this.settings.invertY ? -1 : 1;
    this.pitch -= dy * sensitivity * invert;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -Math.PI / 2 + 0.02, Math.PI / 2 - 0.02);
  }

  setSelected(index) {
    if (index === this.selected) return;
    this.selected = index;
    this.callbacks.onSelect?.(HOTBAR[index], index);
  }

  toggleFly() {
    this.fly = !this.fly;
    this.velocity.y = 0;
    this.callbacks.onFlyChange?.(this.fly);
  }

  setBaseFov(fov) {
    this.baseFov = fov;
  }

  spawnAt(x, y, z, yaw = 0, pitch = 0) {
    this.position.set(x, y, z);
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = pitch;
    this.fly = false;
    this.onGround = false;
    this.updateCamera(0);
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.keys.clear();
      this.touchLook = null;
      this.velocity.x = 0;
      this.velocity.z = 0;
    }
  }

  getDirection() {
    const cosPitch = Math.cos(this.pitch);
    this._dir.set(-Math.sin(this.yaw) * cosPitch, Math.sin(this.pitch), -Math.cos(this.yaw) * cosPitch);
    return this._dir;
  }

  getEyePosition() {
    return this._temp.set(this.position.x, this.position.y + EYE_HEIGHT, this.position.z);
  }

  updateTarget() {
    const hit = this.world.raycast(this.getEyePosition(), this.getDirection(), 7.2);
    this.target = hit;
    return hit;
  }

  intersectsPlayer(x, y, z) {
    const minX = this.position.x - PLAYER_RADIUS;
    const maxX = this.position.x + PLAYER_RADIUS;
    const minY = this.position.y;
    const maxY = this.position.y + PLAYER_HEIGHT;
    const minZ = this.position.z - PLAYER_RADIUS;
    const maxZ = this.position.z + PLAYER_RADIUS;
    return maxX > x && minX < x + 1 && maxY > y && minY < y + 1 && maxZ > z && minZ < z + 1;
  }

  breakBlock() {
    const hit = this.updateTarget();
    if (!hit) {
      this.callbacks.onMiss?.();
      return false;
    }
    if (hit.id === BLOCK.BEDROCK) {
      this.callbacks.onDenied?.('Bedrock cannot be broken');
      return false;
    }
    if (this.world.setBlock(hit.x, hit.y, hit.z, BLOCK.AIR)) {
      this.callbacks.onBreak?.(hit);
      return true;
    }
    return false;
  }

  placeBlock() {
    const hit = this.updateTarget();
    if (!hit) {
      this.callbacks.onMiss?.();
      return false;
    }
    const x = hit.x + hit.normal[0];
    const y = hit.y + hit.normal[1];
    const z = hit.z + hit.normal[2];
    if (y < 0 || y >= 64) return false;
    const existing = this.world.getBlock(x, y, z);
    if (existing !== BLOCK.AIR && existing !== BLOCK.WATER) return false;
    if (this.intersectsPlayer(x, y, z)) {
      this.callbacks.onDenied?.('No room to build there');
      return false;
    }
    const id = this.selectedBlock;
    if (this.world.setBlock(x, y, z, id)) {
      this.callbacks.onPlace?.({ x, y, z, id, block: this.world.getBlock(x, y, z) });
      return true;
    }
    return false;
  }

  collides() {
    const minX = Math.floor(this.position.x - PLAYER_RADIUS);
    const maxX = Math.floor(this.position.x + PLAYER_RADIUS);
    const minY = Math.floor(this.position.y + 0.001);
    const maxY = Math.floor(this.position.y + PLAYER_HEIGHT - 0.001);
    const minZ = Math.floor(this.position.z - PLAYER_RADIUS);
    const maxZ = Math.floor(this.position.z + PLAYER_RADIUS);
    for (let y = minY; y <= maxY; y += 1) {
      for (let z = minZ; z <= maxZ; z += 1) {
        for (let x = minX; x <= maxX; x += 1) {
          if (this.world.isBlocking(x, y, z)) return true;
        }
      }
    }
    return false;
  }

  moveAxis(axis, amount) {
    if (amount === 0) return false;
    const steps = Math.max(1, Math.ceil(Math.abs(amount) / 0.018));
    const step = amount / steps;
    for (let i = 0; i < steps; i += 1) {
      this.position[axis] += step;
      if (this.collides()) {
        this.position[axis] -= step;
        if (axis === 'y' && step < 0) this.onGround = true;
        return true;
      }
    }
    return false;
  }

  checkWater() {
    const x = Math.floor(this.position.x);
    const z = Math.floor(this.position.z);
    const feet = Math.floor(this.position.y + 0.35);
    const chest = Math.floor(this.position.y + 1.1);
    this.inWater = isLiquid(this.world.getBlock(x, feet, z)) || isLiquid(this.world.getBlock(x, chest, z));
  }

  update(dt) {
    const clamped = Math.min(dt, 0.05);
    this.checkWater();
    const wasOnGround = this.onGround;
    this.onGround = false;

    if (this.enabled) {
      const keyForward = (this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0) - (this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0);
      const keyStrafe = (this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0) - (this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0);
      const forward = keyForward + (this.touchMove?.z ?? 0);
      const strafe = keyStrafe + (this.touchMove?.x ?? 0);
      const wantsSprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
      this.sprinting = !this.fly && wantsSprint && (forward !== 0 || strafe !== 0);
      const speed = this.fly ? (wantsSprint ? 17 : 9.5) : this.inWater ? 3.4 : this.sprinting ? 7.1 : 4.65;

      let moveX = 0;
      let moveZ = 0;
      if (forward !== 0 || strafe !== 0) {
        const length = Math.hypot(forward, strafe);
        const f = forward / length;
        const s = strafe / length;
        const sin = Math.sin(this.yaw);
        const cos = Math.cos(this.yaw);
        moveX = (-sin * f + cos * s) * speed;
        moveZ = (-cos * f - sin * s) * speed;
      }

      this.velocity.x = damp(this.velocity.x, moveX, this.onGround || this.fly ? 14 : 5, clamped);
      this.velocity.z = damp(this.velocity.z, moveZ, this.onGround || this.fly ? 14 : 5, clamped);

      if (this.fly) {
        let vertical = 0;
        if (this.keys.has('Space')) vertical += speed;
        if (wantsSprint && !this.keys.has('Space')) vertical -= speed;
        this.velocity.y = damp(this.velocity.y, vertical, 11, clamped);
      } else if (this.inWater) {
        this.velocity.y = damp(this.velocity.y, this.keys.has('Space') ? 3.8 : -1.4, 5, clamped);
      } else {
        this.velocity.y -= GRAVITY * clamped;
        this.velocity.y = Math.max(this.velocity.y, -42);
        if (this.keys.has('Space') && wasOnGround) {
          this.velocity.y = JUMP_SPEED;
          this.onGround = false;
          this.callbacks.onJump?.();
        }
      }

      const beforeX = this.position.x;
      const beforeZ = this.position.z;
      this.moveAxis('x', this.velocity.x * clamped);
      this.moveAxis('z', this.velocity.z * clamped);
      this.moveAxis('y', this.velocity.y * clamped);

      if (this.onGround) this.velocity.y = Math.min(0, this.velocity.y);
      if (this.position.y < -8) {
        this.callbacks.onVoid?.();
      }

      const travelled = Math.hypot(this.position.x - beforeX, this.position.z - beforeZ);
      this.walkDistance += travelled;
      if (!this.fly && this.onGround && travelled > 0.001) {
        this.bobPhase += travelled * 2.5;
        this.stepTimer += travelled;
        if (this.stepTimer > 1.65) {
          this.stepTimer = 0;
          this.callbacks.onStep?.(this.position);
        }
      } else {
        this.bobPhase = damp(this.bobPhase, Math.round(this.bobPhase / Math.PI) * Math.PI, 6, clamped);
      }
    } else {
      this.velocity.x = damp(this.velocity.x, 0, 12, clamped);
      this.velocity.z = damp(this.velocity.z, 0, 12, clamped);
      if (!this.fly) {
        this.velocity.y -= GRAVITY * clamped;
        this.moveAxis('y', this.velocity.y * clamped);
      }
    }

    this.updateCamera(clamped);
    this.updateTarget();
  }

  updateCamera(dt) {
    const moving = Math.abs(this.velocity.x) + Math.abs(this.velocity.z) > 0.8;
    const bobEnabled = this.settings.cameraBob !== false;
    const bob = bobEnabled && moving && this.onGround && !this.fly ? Math.sin(this.bobPhase * 2) * 0.038 : 0;
    const roll = bobEnabled && moving && this.onGround && !this.fly ? Math.sin(this.bobPhase) * 0.0026 : 0;
    this.camera.position.set(this.position.x, this.position.y + EYE_HEIGHT + bob, this.position.z);
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.rotation.z = damp(this.camera.rotation.z, roll, 10, dt || 0.016);

    const targetFov = this.baseFov + (this.sprinting ? 3.5 : 0);
    if (Math.abs(targetFov - this._lastFov) > 0.02) {
      this.camera.fov = damp(this.camera.fov, targetFov, 8, dt || 0.016);
      this.camera.updateProjectionMatrix();
      if (Math.abs(this.camera.fov - targetFov) < 0.02) {
        this.camera.fov = targetFov;
        this.camera.updateProjectionMatrix();
        this._lastFov = targetFov;
      }
    }
  }

  serialize() {
    return {
      x: this.position.x,
      y: this.position.y,
      z: this.position.z,
      yaw: this.yaw,
      pitch: this.pitch,
      fly: this.fly,
      selected: this.selected,
    };
  }

  load(state) {
    if (!state) return;
    this.position.set(state.x, state.y, state.z);
    this.yaw = state.yaw ?? 0;
    this.pitch = state.pitch ?? 0;
    this.fly = Boolean(state.fly);
    this.selected = Number.isInteger(state.selected) ? THREE.MathUtils.clamp(state.selected, 0, HOTBAR.length - 1) : 0;
    this.velocity.set(0, 0, 0);
    this.updateCamera(0);
  }

  getBlockNameAtTarget() {
    return this.target ? blockName(this.target.id) : '';
  }
}
