import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BibleHeavenBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    /* LIGHT */
    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(2, 3, 4);
    scene.add(light);

    /* CROSS */
    const material = new THREE.MeshStandardMaterial({
      color: 0xfff2b3,
      emissive: 0xffd700,
      emissiveIntensity: 1.2,
    });

    const v = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2, 0.25), material);
    const h = new THREE.Mesh(new THREE.BoxGeometry(1, 0.25, 0.25), material);

    h.position.y = 0.5;

    const cross = new THREE.Group();
    cross.add(v);
    cross.add(h);

    scene.add(cross);

    camera.position.z = 4;

    let frame;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      cross.rotation.y += 0.003;
      cross.rotation.x += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      try {
        mount.removeChild(renderer.domElement);
      } catch {}
      renderer.dispose();
    };
  }, []);

  return <div className="bible-bg-canvas" ref={mountRef} />;
}
