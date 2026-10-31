import * as THREE from 'three';

const SKY_VERTEX = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const SKY_FRAGMENT = `
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 groundColor;
  uniform vec3 sunColor;
  uniform vec3 sunDirection;
  varying vec3 vWorldPosition;
  void main() {
    vec3 direction = normalize(vWorldPosition - cameraPosition);
    float height = direction.y;
    vec3 color;
    if (height > 0.0) {
      color = mix(horizonColor, topColor, pow(clamp(height, 0.0, 1.0), 0.58));
    } else {
      color = mix(horizonColor, groundColor, clamp(-height * 2.8, 0.0, 1.0));
    }
    float sunAmount = max(dot(direction, sunDirection), 0.0);
    color += sunColor * pow(sunAmount, 220.0) * 1.5;
    color += sunColor * pow(sunAmount, 8.0) * 0.11;
    float haze = smoothstep(-0.05, 0.32, height) * (1.0 - smoothstep(0.05, 0.65, height));
    color += vec3(0.14, 0.075, 0.03) * haze;
    gl_FragColor = vec4(color, 1.0);
  }
`;

function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

export class Environment {
  constructor(scene, renderer, settings = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.settings = settings;
    this.sunDirection = new THREE.Vector3(-0.62, 0.44, 0.34).normalize();
    this.focus = new THREE.Vector3();
    this.time = 0;

    this.setupSky();
    this.setupLights();
    this.setupClouds();
    this.setupSun();
    this.scene.fog = new THREE.Fog(0xdfb084, 55, 148);
    this.setQuality(settings.quality ?? 'high');
  }

  setupSky() {
    this.skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x4c7da9) },
        horizonColor: { value: new THREE.Color(0xf6b873) },
        groundColor: { value: new THREE.Color(0x625f51) },
        sunColor: { value: new THREE.Color(0xffdda0) },
        sunDirection: { value: this.sunDirection },
      },
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.BoxGeometry(680, 680, 680), this.skyMaterial);
    this.sky.renderOrder = -1000;
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
  }

  setupSun() {
    this.sunGroup = new THREE.Group();
    const core = new THREE.Mesh(
      new THREE.BoxGeometry(11, 11, 11),
      new THREE.MeshBasicMaterial({ color: 0xfff1c8, toneMapped: false })
    );
    const innerGlow = new THREE.Mesh(
      new THREE.BoxGeometry(22, 22, 22),
      new THREE.MeshBasicMaterial({
        color: 0xffcc7e,
        transparent: true,
        opacity: 0.19,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      })
    );
    const outerGlow = new THREE.Mesh(
      new THREE.BoxGeometry(40, 40, 40),
      new THREE.MeshBasicMaterial({
        color: 0xffad58,
        transparent: true,
        opacity: 0.065,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      })
    );
    this.sunGroup.add(outerGlow, innerGlow, core);
    this.sunGroup.renderOrder = -900;
    this.scene.add(this.sunGroup);
  }

  setupLights() {
    this.hemisphere = new THREE.HemisphereLight(0xc9def2, 0x55452e, 1.3);
    this.scene.add(this.hemisphere);

    this.sun = new THREE.DirectionalLight(0xffd19a, 3.1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.left = -52;
    this.sun.shadow.camera.right = 52;
    this.sun.shadow.camera.top = 52;
    this.sun.shadow.camera.bottom = -52;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 240;
    this.sun.shadow.bias = -0.00045;
    this.sun.shadow.normalBias = 0.035;
    this.sun.target.position.set(0, 18, 0);
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.fill = new THREE.DirectionalLight(0x9db7d4, 0.4);
    this.fill.position.set(55, 40, -60);
    this.scene.add(this.fill);

    this.bounce = new THREE.AmbientLight(0xffe4bb, 0.12);
    this.scene.add(this.bounce);
  }

  setupClouds() {
    const random = seededRandom(9417);
    const puffs = [];
    for (let cluster = 0; cluster < 24; cluster += 1) {
      const cx = (random() - 0.5) * 300;
      const cz = (random() - 0.5) * 300;
      const cy = 53 + random() * 18;
      const count = 3 + Math.floor(random() * 5);
      for (let i = 0; i < count; i += 1) {
        puffs.push({
          x: cx + (random() - 0.5) * 28,
          y: cy + (random() - 0.5) * 4,
          z: cz + (random() - 0.5) * 18,
          sx: 4 + random() * 11,
          sy: 1.2 + random() * 1.8,
          sz: 3 + random() * 8,
          speed: 0.22 + random() * 0.18,
          tint: 0.9 + random() * 0.1,
        });
      }
    }
    this.cloudPuffs = puffs;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xfff2df,
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      fog: true,
    });
    this.clouds = new THREE.InstancedMesh(geometry, material, puffs.length);
    this.clouds.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.clouds.frustumCulled = false;
    this.clouds.castShadow = false;
    this.clouds.receiveShadow = false;
    const color = new THREE.Color();
    puffs.forEach((puff, index) => {
      color.setRGB(puff.tint, puff.tint * 0.97, puff.tint * 0.92);
      this.clouds.setColorAt(index, color);
    });
    if (this.clouds.instanceColor) this.clouds.instanceColor.needsUpdate = true;
    this.scene.add(this.clouds);
    this.cloudMatrix = new THREE.Matrix4();
    this.cloudQuat = new THREE.Quaternion();
    this.cloudScale = new THREE.Vector3();
    this.cloudPosition = new THREE.Vector3();
    this.updateClouds(0);
  }

  updateClouds(dt) {
    for (let i = 0; i < this.cloudPuffs.length; i += 1) {
      const puff = this.cloudPuffs[i];
      puff.x += puff.speed * dt;
      if (puff.x > 165) puff.x = -165;
      this.cloudPosition.set(puff.x, puff.y, puff.z);
      this.cloudScale.set(puff.sx, puff.sy, puff.sz);
      this.cloudMatrix.compose(this.cloudPosition, this.cloudQuat, this.cloudScale);
      this.clouds.setMatrixAt(i, this.cloudMatrix);
    }
    this.clouds.instanceMatrix.needsUpdate = true;
  }

  addPointLights(lights = []) {
    this.pointLights = [];
    lights.forEach((config) => {
      const light = new THREE.PointLight(config.color ?? 0xffb568, config.intensity ?? 8, config.distance ?? 10, 2);
      light.position.set(config.x, config.y, config.z);
      light.userData.base = config.intensity ?? 8;
      this.scene.add(light);
      this.pointLights.push(light);
    });
  }

  setQuality(quality) {
    this.quality = quality;
    if (quality === 'high') {
      this.sun.shadow.mapSize.set(2048, 2048);
    } else if (quality === 'balanced') {
      this.sun.shadow.mapSize.set(1536, 1536);
    } else {
      this.sun.shadow.mapSize.set(1024, 1024);
    }
    if (this.sun.shadow.map) {
      this.sun.shadow.map.dispose();
      this.sun.shadow.map = null;
    }
  }

  setShadows(enabled) {
    this.sun.castShadow = enabled;
    this.renderer.shadowMap.enabled = enabled;
    this.sun.shadow.needsUpdate = true;
  }

  update(dt, camera, focus) {
    this.time += dt;
    if (focus) this.focus.copy(focus);
    this.sky.position.copy(camera.position);
    this.sunGroup.position.copy(camera.position).addScaledVector(this.sunDirection, 260);
    this.sun.target.position.set(this.focus.x, this.focus.y + 6, this.focus.z);
    this.sun.target.updateMatrixWorld();
    this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDirection, 120);
    this.fill.position.set(this.focus.x + 55, this.focus.y + 40, this.focus.z - 60);
    this.updateClouds(dt);
    if (this.pointLights) {
      this.pointLights.forEach((light, index) => {
        light.intensity = (this.pointLights[index].userData?.base ?? light.intensity) * (0.96 + Math.sin(this.time * 3.1 + index) * 0.04);
      });
    }
  }
}
