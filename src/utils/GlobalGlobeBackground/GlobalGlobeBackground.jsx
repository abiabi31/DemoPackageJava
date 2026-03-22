import { useEffect, useRef } from "react";

/**
 * Canvas-based pseudo-3D globe background.
 * - Procedurally generates a land/water mask (no external textures).
 * - Rotates the longitude mapping for an animated world feel.
 * - Draws a few orbiting markers on the front hemisphere.
 *
 * Note: This is intentionally lightweight (small render resolution) so it can
 * run on every page as a background.
 */
export default function GlobalGlobeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    const texW = 256;
    const texH = 128;
    const landTex = new Float32Array(texW * texH);

    // Small math helpers (deterministic noise).
    const fract = (x) => x - Math.floor(x);
    const hash2 = (x, y) => fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453);
    const lerp = (a, b, t) => a + (b - a) * t;
    const smooth = (t) => t * t * (3 - 2 * t);
    const valueNoise = (x, y) => {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      const xf = x - xi;
      const yf = y - yi;

      const v00 = hash2(xi, yi);
      const v10 = hash2(xi + 1, yi);
      const v01 = hash2(xi, yi + 1);
      const v11 = hash2(xi + 1, yi + 1);

      const u = smooth(xf);
      const v = smooth(yf);
      const x1 = lerp(v00, v10, u);
      const x2 = lerp(v01, v11, u);
      return lerp(x1, x2, v);
    };
    const fbm = (x, y) => {
      let v = 0;
      let amp = 0.5;
      let freq = 1;
      for (let i = 0; i < 5; i++) {
        v += amp * valueNoise(x * freq, y * freq);
        freq *= 2;
        amp *= 0.5;
      }
      return v;
    };
    const smoothstep = (a, b, x) => {
      const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };

    // Generate land mask.
    for (let j = 0; j < texH; j++) {
      const v = (j + 0.5) / texH;
      const lat = (v - 0.5) * Math.PI;
      const poleFade = Math.pow(
        1 - Math.min(1, Math.abs(lat) / (Math.PI / 2)),
        0.4,
      );

      for (let i = 0; i < texW; i++) {
        const u = (i + 0.5) / texW;

        // "Continents" blobs: blend a couple noise passes.
        const n =
          fbm(u * 5 + 10.2, v * 7.0 + 4.8) * 0.85 +
          fbm(u * 9.2 + 2.1, v * 3.7 + 11.3) * 0.15;

        const biased = n * poleFade - (1 - poleFade) * 0.08;
        const land = smoothstep(0.54, 0.72, biased);
        landTex[j * texW + i] = land;
      }
    }

    // Choose a render size based on the actual CSS size.
    const rect = canvas.getBoundingClientRect();
    const cssSize = Math.max(240, Math.floor(Math.min(rect.width, rect.height) || 420));
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const renderSize = Math.floor(cssSize * dpr);
    canvas.width = renderSize;
    canvas.height = renderSize;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) / 2 - 1;

    const imageData = ctx.createImageData(W, H);
    const data = imageData.data;

    // Precompute sphere mapping arrays for speed.
    const nPixels = W * H;
    const valid = new Uint8Array(nPixels);
    const nxArr = new Float32Array(nPixels);
    const nyArr = new Float32Array(nPixels);
    const nzArr = new Float32Array(nPixels);
    const lon0 = new Float32Array(nPixels);
    const latArr = new Float32Array(nPixels);

    for (let y = 0; y < H; y++) {
      const ny = (y - cy) / R;
      for (let x = 0; x < W; x++) {
        const nx = (x - cx) / R;
        const idx = y * W + x;
        const r2 = nx * nx + ny * ny;
        if (r2 > 1) continue;
        const nz = Math.sqrt(1 - r2);

        valid[idx] = 1;
        nxArr[idx] = nx;
        nyArr[idx] = ny;
        nzArr[idx] = nz;

        latArr[idx] = Math.asin(ny); // -pi/2..pi/2
        lon0[idx] = Math.atan2(nx, nz); // -pi..pi
      }
    }

    const TWO_PI = Math.PI * 2;

    // Lighting.
    const lightDir = (() => {
      const x = -0.45;
      const y = 0.65;
      const z = 0.6;
      const len = Math.hypot(x, y, z) || 1;
      return { x: x / len, y: y / len, z: z / len };
    })();

    const viewDir = { x: 0, y: 0, z: 1 };
    const halfDir = (() => {
      const x = lightDir.x + viewDir.x;
      const y = lightDir.y + viewDir.y;
      const z = lightDir.z + viewDir.z;
      const len = Math.hypot(x, y, z) || 1;
      return { x: x / len, y: y / len, z: z / len };
    })();

    const water = { r: 6, g: 56, b: 110 };
    const landColor = { r: 24, g: 165, b: 95 };
    const deepOcean = { r: 1, g: 25, b: 55 };
    const atmo = { r: 0, g: 210, b: 255 };

    const markers = [
      { lat: 0.18, lon: -1.0, speed: 0.65, hue: 195 },
      { lat: 0.45, lon: 0.4, speed: 0.55, hue: 50 },
      { lat: -0.22, lon: 1.3, speed: 0.6, hue: 160 },
      { lat: -0.55, lon: -0.2, speed: 0.52, hue: 205 },
      { lat: 0.32, lon: 2.1, speed: 0.58, hue: 190 },
      { lat: -0.08, lon: 2.8, speed: 0.7, hue: 55 },
    ];

    let rafId = 0;
    let lastT = 0;

    const render = (t) => {
      const now = t || 0;

      // If reduced motion, draw once.
      if (prefersReducedMotion) {
        lastT = now;
      } else {
        if (now - lastT < 33) {
          rafId = requestAnimationFrame(render);
          return;
        }
        lastT = now;
      }

      const rot = prefersReducedMotion ? 0 : now * 0.00025;

      // Base sphere pixels.
      for (let py = 0; py < H; py++) {
        for (let px = 0; px < W; px++) {
          const idx = py * W + px;
          if (!valid[idx]) {
            const di = idx * 4;
            data[di + 0] = 0;
            data[di + 1] = 0;
            data[di + 2] = 0;
            data[di + 3] = 0;
            continue;
          }

          const nx = nxArr[idx];
          const ny = nyArr[idx];
          const nz = nzArr[idx];

          const lon = lon0[idx] + rot;
          let u = lon / TWO_PI + 0.5;
          u = u - Math.floor(u); // wrap 0..1
          const lat = latArr[idx];
          const v = lat / Math.PI + 0.5;

          const tx = Math.floor(u * (texW - 1));
          const ty = Math.max(0, Math.min(texH - 1, Math.floor(v * (texH - 1))));
          const landMask = landTex[ty * texW + tx];

          const lambert = Math.max(
            0,
            nx * lightDir.x + ny * lightDir.y + nz * lightDir.z,
          );
          const ambient = 0.22;
          const shade = ambient + lambert * 0.82;

          const specAngle = Math.max(
            0,
            nx * halfDir.x + ny * halfDir.y + nz * halfDir.z,
          );
          const spec = Math.pow(specAngle, 32) * 0.7;

          const rim = Math.pow(1 - nz, 1.9);
          const oceanDepth = Math.pow(nz, 0.35);
          const waterMix = 1 - landMask;

          const baseR =
            water.r * waterMix +
            landColor.r * landMask +
            deepOcean.r * (1 - oceanDepth) * 0.35 * waterMix;
          const baseG =
            water.g * waterMix +
            landColor.g * landMask +
            deepOcean.g * (1 - oceanDepth) * 0.25 * waterMix;
          const baseB =
            water.b * waterMix +
            landColor.b * landMask +
            deepOcean.b * (1 - oceanDepth) * 0.45 * waterMix;

          const r = baseR * shade + atmo.r * rim * 0.32 + 255 * spec * 0.25;
          const g = baseG * shade + atmo.g * rim * 0.38 + 255 * spec * 0.22;
          const b = baseB * shade + atmo.b * rim * 0.5 + 255 * spec * 0.3;

          const di = idx * 4;
          data[di + 0] = Math.max(0, Math.min(255, r));
          data[di + 1] = Math.max(0, Math.min(255, g));
          data[di + 2] = Math.max(0, Math.min(255, b));
          data[di + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Atmosphere highlight.
      const grd = ctx.createRadialGradient(cx, cy, R * 0.65, cx, cy, R);
      grd.addColorStop(0, "rgba(0,0,0,0)");
      grd.addColorStop(0.65, "rgba(0,210,255,0.06)");
      grd.addColorStop(1, "rgba(0,210,255,0.22)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TWO_PI);
      ctx.fill();

      // Orbiting markers (front hemisphere only).
      for (let i = 0; i < markers.length; i++) {
        const m = markers[i];
        const mm = prefersReducedMotion ? 0 : now * 0.00015 * m.speed;
        const lonM = m.lon + rot + mm;
        const latM = m.lat;

        const px = Math.cos(latM) * Math.sin(lonM);
        const py = Math.sin(latM);
        const pz = Math.cos(latM) * Math.cos(lonM);

        if (pz <= 0) continue;

        const sx = cx + px * R;
        const sy = cy - py * R;
        const pulse = 0.55 + 0.45 * Math.sin(now * 0.006 + i * 1.7);
        const size = (1.6 + pz * 3.2) * (0.9 + pulse * 0.25);

        ctx.beginPath();
        ctx.arc(sx, sy, size * 0.75, 0, TWO_PI);
        ctx.fillStyle = `rgba(0,242,255,${0.12 + 0.55 * pulse * pz})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, size * 1.35, 0, TWO_PI);
        ctx.strokeStyle = `rgba(255,215,0,${0.05 + 0.22 * pulse * pz})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (!prefersReducedMotion && document.visibilityState !== "hidden") {
        rafId = requestAnimationFrame(render);
      }
    };

    // Initial draw.
    render(0);

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(render);
    }

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="global-globe-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="global-globe-canvas" />
    </div>
  );
}

