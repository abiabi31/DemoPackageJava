import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./style.css";

export default function FaithScene() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const mount = mountRef.current;

    // ✅ SAFE MOUNT CHECK
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    // 🌟 Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: "#ffd27a",
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );

    scene.add(particlesMesh);

    // ✝️ Cross
    const crossGeometry = new THREE.BoxGeometry(0.1, 2, 0.1);
    const crossMaterial = new THREE.MeshBasicMaterial({
      color: "#ffd27a",
    });

    const crossVertical = new THREE.Mesh(crossGeometry, crossMaterial);
    const crossHorizontal = new THREE.Mesh(crossGeometry, crossMaterial);
    crossHorizontal.scale.set(2, 0.3, 1);

    const crossGroup = new THREE.Group();
    crossGroup.add(crossVertical);
    crossGroup.add(crossHorizontal);

    scene.add(crossGroup);

    // 🌤 Animation
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.0005;
      crossGroup.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // 🧹 CLEANUP (SAFE)
    return () => {
      cancelAnimationFrame(animationId);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      crossGeometry.dispose();
      crossMaterial.dispose();
    };
  }, []);

  return (
    <div className="heaven-container">
      <div ref={mountRef} className="three-bg" />

      <div className="doves">
        <div className="dove dove1">🕊</div>
        <div className="dove dove2">🕊</div>
        <div className="dove dove3">🕊</div>
      </div>

      <div className="bible-glow">
        <h1>Welcome Back</h1>
        <p>Let His Word guide your path</p>
      </div>

      <div className="login-box">
        <h2>Welcome</h2>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Sign In</button>
      </div>
    </div>
  );
}
