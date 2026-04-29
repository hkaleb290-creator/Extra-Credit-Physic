// Minimal three.js rocket demo
(function(){
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x071025, 0.0025);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 6, 28);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  document.body.appendChild(renderer.domElement);

  // Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x080820, 0.8);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(0xffe3b8, 0.9);
  dir.position.set(6, 10, 8);
  scene.add(dir);

  // Rocket group
  const rocket = new THREE.Group();

  const coreGeo = new THREE.CylinderGeometry(1.4, 1.6, 10, 24);
  const coreMat = new THREE.MeshStandardMaterial({ color: 0xffb36a, metalness: 0.2, roughness: 0.35 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.y = 5;
  rocket.add(core);

  const capsuleGeo = new THREE.ConeGeometry(1.6, 2, 24);
  const capsuleMat = new THREE.MeshStandardMaterial({ color: 0xf7fbff, metalness: 0.1, roughness: 0.2 });
  const capsule = new THREE.Mesh(capsuleGeo, capsuleMat);
  capsule.position.y = 10.2;
  rocket.add(capsule);

  // Simple boosters
  const bGeo = new THREE.CylinderGeometry(0.36, 0.36, 8.8, 16);
  const bMat = new THREE.MeshStandardMaterial({ color: 0xdfefff, metalness: 0.05, roughness: 0.3 });
  const leftB = new THREE.Mesh(bGeo, bMat); leftB.position.set(-2.3, 4.6, 0); rocket.add(leftB);
  const rightB = leftB.clone(); rightB.position.set(2.3, 4.6, 0); rocket.add(rightB);

  scene.add(rocket);

  // Ground
  const groundGeo = new THREE.PlaneGeometry(400, 400);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x04111b });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI/2; ground.position.y = 0; scene.add(ground);

  // Simple particle sprite for exhaust
  const particleCount = 120;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i*3+0] = (Math.random()-0.5) * 1.5;
    positions[i*3+1] = -Math.random() * 2;
    positions[i*3+2] = (Math.random()-0.5) * 1.5;
  }
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.4, color: 0xff8b3a, transparent: true, opacity: 0.9 });
  const pointCloud = new THREE.Points(particles, pMat);
  pointCloud.position.y = 1;
  rocket.add(pointCloud);

  // Animate
  let t = 0;
  function animate(){
    requestAnimationFrame(animate);
    t += 0.014;
    rocket.position.y = Math.max(0, t * 4);
    rocket.rotation.z = Math.sin(t*0.6) * 0.02;

    // animate particles
    const pos = particles.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i*3+1] -= 0.08 + Math.random() * 0.12;
      pos[i*3+0] += (Math.random()-0.5) * 0.02;
      if (pos[i*3+1] < -12) {
        pos[i*3+1] = -1 - Math.random() * 1.2;
        pos[i*3+0] = (Math.random()-0.5) * 1.5;
      }
    }
    particles.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
})();