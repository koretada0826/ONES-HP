"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
function easeInCubic(x: number) {
  return x * x * x;
}

function sampleTextTargets(text: string): number[][] {
  const off = document.createElement("canvas");
  const vw = window.innerWidth;
  const fontPx = Math.max(140, Math.min(vw * 0.22, 300));
  const ctx = off.getContext("2d")!;
  const fontStr = `700 ${fontPx}px "Montserrat","Noto Sans JP",sans-serif`;
  ctx.font = fontStr;
  const metrics = ctx.measureText(text);
  const textW = Math.ceil(metrics.width);
  const textH = Math.ceil(fontPx * 1.25);
  off.width = textW;
  off.height = textH;
  const c2 = off.getContext("2d")!;
  c2.font = fontStr;
  c2.fillStyle = "#fff";
  c2.textBaseline = "middle";
  c2.fillText(text, 0, textH / 2);
  let data: Uint8ClampedArray;
  try {
    data = c2.getImageData(0, 0, textW, textH).data;
  } catch {
    return [];
  }
  const pts: number[][] = [];
  const worldW = 878 * (window.innerWidth / Math.max(window.innerHeight, 1));
  const scale = (worldW * 0.72) / Math.max(textW, 1);
  const step = 3;
  for (let y = 0; y < textH; y += step) {
    for (let x = 0; x < textW; x += step) {
      const idx = (y * textW + x) * 4;
      if (data[idx + 3] > 128) {
        pts.push([(x - textW / 2) * scale, -(y - textH / 2) * scale, 0]);
      }
    }
  }
  return pts;
}

function makeSprite(): THREE.CanvasTexture {
  const s = document.createElement("canvas");
  s.width = 64;
  s.height = 64;
  const g = s.getContext("2d")!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  // Bright particles for dark theme
  grad.addColorStop(0.0, "rgba(255,255,255,1.0)");
  grad.addColorStop(0.25, "rgba(255,240,225,0.85)");
  grad.addColorStop(0.55, "rgba(196,137,122,0.35)");
  grad.addColorStop(1.0, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(s);
  tex.needsUpdate = true;
  return tex;
}

const T_CHAOS = 1.4;
const T_GATHER = 3.0;
const T_HOLD = 4.0;
const T_END = 4.8;

function ParticleSystem({ onDone }: { onDone: () => void }) {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const startTime = useRef(performance.now());
  const doneFired = useRef(false);

  const data = useMemo(() => {
    const targets = sampleTextTargets("ONES");
    if (targets.length < 100) return null;
    const count = targets.length;
    const positions = new Float32Array(count * 3);
    const starts = new Float32Array(count * 3);
    const tgts = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const palette: [number, number, number][] = [
      [1.0, 1.0, 1.0], // pure white
      [1.0, 0.95, 0.9], // warm white
      [0.83, 0.58, 0.5], // rose copper
      [1.0, 0.7, 0.55], // bright copper
    ];
    for (let i = 0; i < count; i++) {
      const t = targets[i];
      tgts[i * 3] = t[0];
      tgts[i * 3 + 1] = t[1];
      tgts[i * 3 + 2] = (Math.random() - 0.5) * 4;
      const r = 700 + Math.random() * 900;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const sx = r * Math.sin(phi) * Math.cos(theta);
      const sy = r * Math.sin(phi) * Math.sin(theta);
      const sz = r * Math.cos(phi) - 200;
      starts[i * 3] = sx;
      starts[i * 3 + 1] = sy;
      starts[i * 3 + 2] = sz;
      positions[i * 3] = sx;
      positions[i * 3 + 1] = sy;
      positions[i * 3 + 2] = sz;
      seeds[i] = Math.random();
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col[0];
      colors[i * 3 + 1] = col[1];
      colors[i * 3 + 2] = col[2];
    }
    return { positions, starts, tgts, seeds, colors, count };
  }, []);

  const sprite = useMemo(() => makeSprite(), []);

  useFrame(() => {
    if (!data || !pointsRef.current) return;
    const elapsed = (performance.now() - startTime.current) / 1000;
    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const posArr = posAttr.array as Float32Array;

    for (let i = 0; i < data.count; i++) {
      const i3 = i * 3;
      const sx = data.starts[i3],
        sy = data.starts[i3 + 1],
        sz = data.starts[i3 + 2];
      const tx = data.tgts[i3],
        ty = data.tgts[i3 + 1],
        tz = data.tgts[i3 + 2];
      const seed = data.seeds[i];
      let x: number, y: number, z: number;

      if (elapsed < T_CHAOS) {
        const a = elapsed * 1.6 + seed * 6.28;
        const swirl = 40 + seed * 30;
        x = sx + Math.sin(a) * swirl;
        y = sy + Math.cos(a * 0.83 + seed * 2) * swirl;
        z = sz + Math.sin(a * 1.27 + seed * 3) * swirl;
      } else if (elapsed < T_GATHER) {
        const pp = (elapsed - T_CHAOS) / (T_GATHER - T_CHAOS);
        const ep = easeInOutCubic(pp);
        const arcOffset = Math.sin(pp * Math.PI) * (80 + seed * 40);
        const perpX = -sy * 0.001;
        const perpY = sx * 0.001;
        x = sx + (tx - sx) * ep + perpX * arcOffset;
        y = sy + (ty - sy) * ep + perpY * arcOffset;
        z = sz + (tz - sz) * ep;
      } else if (elapsed < T_HOLD) {
        const hp = (elapsed - T_GATHER) * 3.4;
        const jitter = 0.6 + seed * 0.6;
        x = tx + Math.sin(hp + seed * 7) * jitter;
        y = ty + Math.cos(hp * 1.1 + seed * 9) * jitter;
        z = tz + Math.sin(hp * 0.7 + seed * 3) * 3;
      } else if (elapsed < T_END) {
        const ep2 = (elapsed - T_HOLD) / (T_END - T_HOLD);
        const e = easeInCubic(ep2);
        const dirLen = Math.sqrt(tx * tx + ty * ty) || 1;
        const dx = tx / dirLen,
          dy = ty / dirLen;
        const dist = 1400 * e;
        x = tx + dx * dist + (seed - 0.5) * 200 * e;
        y = ty + dy * dist + (seed - 0.5) * 200 * e;
        z = tz + (0.5 - seed) * 500 * e - 300 * e;
      } else {
        x = 99999;
        y = 99999;
        z = 99999;
      }
      posArr[i3] = x;
      posArr[i3 + 1] = y;
      posArr[i3 + 2] = z;
    }
    posAttr.needsUpdate = true;

    // Rotation settles during hold
    const t = elapsed;
    if (t < T_GATHER) {
      const pRot = t / T_GATHER;
      pointsRef.current.rotation.y = Math.sin(t * 0.5) * 0.35 * (1 - pRot);
      pointsRef.current.rotation.x = Math.cos(t * 0.4) * 0.18 * (1 - pRot);
    } else {
      pointsRef.current.rotation.y *= 0.92;
      pointsRef.current.rotation.x *= 0.92;
    }

    // Size + opacity dynamics
    if (matRef.current) {
      if (t < T_CHAOS) {
        matRef.current.size = 10 + Math.sin(t * 4) * 2;
        matRef.current.opacity = 0.75 + Math.min(t / T_CHAOS, 1) * 0.2;
      } else if (t < T_GATHER) {
        matRef.current.size = 16 - (t - T_CHAOS) * 3;
        matRef.current.opacity = 0.98;
      } else if (t < T_HOLD) {
        matRef.current.size = 12 + Math.sin((t - T_GATHER) * 6) * 1.5;
        matRef.current.opacity = 1.0;
      } else {
        const fp = (t - T_HOLD) / (T_END - T_HOLD);
        matRef.current.size = 12 + fp * 20;
        matRef.current.opacity = 1.0 - easeInCubic(fp);
      }
    }

    if (!doneFired.current && t >= T_HOLD + 0.35) {
      doneFired.current = true;
      onDone();
    }
  });

  if (!data) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={data.count}
          array={data.positions}
          itemSize={3}
          args={[data.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={data.count}
          array={data.colors}
          itemSize={3}
          args={[data.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        size={14}
        map={sprite}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        opacity={0.95}
        sizeAttenuation
      />
    </points>
  );
}

export default function LoadingScene({ onDone }: { onDone: () => void }) {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 900], fov: 52 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ParticleSystem onDone={onDone} />
    </Canvas>
  );
}
