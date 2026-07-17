"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroSceneProps {
  scrollProgress: number; // 0..1
  visible: boolean;
}

function Sphere({ scrollProgress }: { scrollProgress: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y += 0.0018;
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.06;
    // Scale down as scroll progresses (recedes into distance)
    const s = 1 - scrollProgress * 0.35;
    ref.current.scale.setScalar(s);
    ref.current.position.z = -scrollProgress * 4;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.05;
      ringRef.current.scale.setScalar(s);
      ringRef.current.position.z = -scrollProgress * 4 - 0.05;
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[2.4, 128, 128]} />
        <meshStandardMaterial color="#0e0f14" metalness={0.9} roughness={0.32} />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[2.5, 2.85, 128]} />
        <meshBasicMaterial
          color="#c4897a"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

interface RockData {
  basePos: THREE.Vector3;
  rot: THREE.Vector3;
  amp: number;
  speed: number;
  phase: number;
  scale: number;
  geoIndex: number;
}

function Rocks({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);
  const { size } = useThree();
  const isMobile = size.width < 900;
  const COUNT = isMobile ? 12 : 24;

  const rocks = useMemo<RockData[]>(() => {
    return Array.from({ length: COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3.4 + Math.random() * 3.8;
      return {
        basePos: new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 2.6
        ),
        rot: new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006
        ),
        amp: 0.15 + Math.random() * 0.35,
        speed: 0.25 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        scale: 0.55 + Math.random() * 1.35,
        geoIndex: Math.floor(Math.random() * 4),
      };
    });
  }, [COUNT]);

  const geos = useMemo(
    () => [
      new THREE.IcosahedronGeometry(0.32, 0),
      new THREE.DodecahedronGeometry(0.36, 0),
      new THREE.OctahedronGeometry(0.34, 0),
      new THREE.TetrahedronGeometry(0.44, 0),
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    rocks.forEach((r, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;
      mesh.rotation.x += r.rot.x;
      mesh.rotation.y += r.rot.y;
      mesh.rotation.z += r.rot.z;
      mesh.position.set(
        r.basePos.x + Math.cos(t * r.speed * 0.6 + r.phase) * r.amp * 0.4,
        r.basePos.y + Math.sin(t * r.speed + r.phase) * r.amp,
        r.basePos.z + Math.sin(t * r.speed * 0.4 + r.phase * 1.3) * r.amp * 0.5
      );
    });
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.05) * 0.03;
      groupRef.current.position.z = -scrollProgress * 3;
    }
  });

  return (
    <group ref={groupRef}>
      {rocks.map((r, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          geometry={geos[r.geoIndex]}
          scale={r.scale}
        >
          <meshStandardMaterial
            color="#191a20"
            metalness={0.55}
            roughness={0.75}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}

function LightBeam({ scrollProgress, flashRef }: { scrollProgress: number; flashRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.MeshBasicMaterial>(null);
  const glowRef = useRef<THREE.MeshBasicMaterial>(null);

  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 32;
    c.height = 512;
    const g = c.getContext("2d")!;
    // For dark background — bright warm-white beam
    const grad = g.createLinearGradient(0, 0, 32, 0);
    grad.addColorStop(0, "rgba(255,240,225,0)");
    grad.addColorStop(0.5, "rgba(255,240,225,1)");
    grad.addColorStop(1, "rgba(255,240,225,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 32, 512);
    const gy = g.createLinearGradient(0, 0, 0, 512);
    gy.addColorStop(0, "rgba(0,0,0,0.9)");
    gy.addColorStop(0.15, "rgba(0,0,0,0)");
    gy.addColorStop(0.85, "rgba(0,0,0,0)");
    gy.addColorStop(1, "rgba(0,0,0,0.9)");
    g.globalCompositeOperation = "destination-out";
    g.fillStyle = gy;
    g.fillRect(0, 0, 32, 512);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.PI / 4 + Math.sin(t * 0.15) * 0.015 - scrollProgress * 0.15;
      groupRef.current.position.z = 1.2 - scrollProgress * 3;
    }
    if (coreRef.current) coreRef.current.opacity = 0.75 + Math.sin(t * 1.8) * 0.08 + flashRef.current;
    if (glowRef.current) glowRef.current.opacity = 0.22 + Math.sin(t * 1.2) * 0.06 + flashRef.current * 0.3;
    if (flashRef.current > 0) flashRef.current *= 0.85;
  });

  return (
    <group ref={groupRef}>
      <mesh position-z={1.2}>
        <planeGeometry args={[0.12, 26]} />
        <meshBasicMaterial
          ref={coreRef}
          map={tex}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh position-z={1.1}>
        <planeGeometry args={[1.2, 26]} />
        <meshBasicMaterial
          ref={glowRef}
          map={tex}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Stars() {
  // Removed for white theme — starfield doesn't read on light bg
  return null;
}

function MouseParallax() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useFrame(() => {
    current.current.x += (target.current.x - current.current.x) * 0.06;
    current.current.y += (target.current.y - current.current.y) * 0.06;
    camera.position.x = current.current.x * 0.8;
    camera.position.y = -current.current.y * 0.4;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneContents({ scrollProgress, flashRef, isMobile }: { scrollProgress: number; flashRef: React.MutableRefObject<number>; isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight color="#ffffff" intensity={1.6} position={[-4, 5, 3]} />
      <directionalLight color="#c4897a" intensity={0.55} position={[6, -3, -2]} />
      <pointLight color="#ffffff" intensity={0.55} distance={30} position={[-6, 2, 6]} />
      <group position={[isMobile ? 0 : 3.4, 0, 0]} scale={isMobile ? 0.72 : 1}>
        <Sphere scrollProgress={scrollProgress} />
        <Rocks scrollProgress={scrollProgress} />
        <LightBeam scrollProgress={scrollProgress} flashRef={flashRef} />
      </group>
      <MouseParallax />
    </>
  );
}

export default function HeroScene({ scrollProgress, visible }: HeroSceneProps) {
  const reduced = useReducedMotion();
  const flashRef = useRef(0);
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 900 : false;

  // Trigger edge flash when scroll slash line "crosses" center — approximately at scrollProgress 0.4
  useEffect(() => {
    if (scrollProgress > 0.35 && scrollProgress < 0.45 && flashRef.current < 0.4) {
      flashRef.current = 0.8;
    }
  }, [scrollProgress]);

  if (reduced) {
    return (
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-6%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #333, #08080b 60%, transparent 80%)",
            filter: "blur(0px)",
          }}
        />
      </div>
    );
  }

  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 12], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <SceneContents scrollProgress={scrollProgress} flashRef={flashRef} isMobile={isMobile} />
    </Canvas>
  );
}
