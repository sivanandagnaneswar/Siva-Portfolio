import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

// ======================================================
// ROBOT COLORS
// ======================================================

const PALETTE = {
  body: "#dad9dc",
  dark: "#252530",
  cyan: "#00f0ff",
  magenta: "#ff007f",
  purple: "#7000ff",
  gold: "#ffd000",
};

// ======================================================
// PARTICLE CLOUD
// ======================================================

function ParticleCloud({ count = 700 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.3 + Math.random() * 1.8;

      const theta = Math.random() * Math.PI * 2;

      const phi = Math.acos(
        Math.random() * 2 - 1
      );

      coords[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      coords[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      coords[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return coords;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time =
      state.clock.getElapsedTime();

    pointsRef.current.rotation.y =
      time * 0.05;

    pointsRef.current.rotation.x =
      Math.sin(time * 0.2) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.035}
        color={PALETTE.cyan}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// ======================================================
// ROBOT EYE
// ======================================================

function RobotEye({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry
        args={[0.09, 20, 20]}
      />

      <meshStandardMaterial
        color={PALETTE.cyan}
        emissive={PALETTE.cyan}
        emissiveIntensity={5}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

// ======================================================
// ROBOT
// ======================================================

function Robot() {
  const robotRef = useRef();

  const headRef = useRef();

  const leftArmRef = useRef();

  const rightArmRef = useRef();

  const rightForearmRef = useRef();

  const bodyRef = useRef();

  useFrame((state) => {
    const time =
      state.clock.getElapsedTime();

    const { x, y } = state.pointer;

    // ==================================================
    // ROBOT BODY FOLLOWS CURSOR
    // ==================================================

    if (robotRef.current) {
      robotRef.current.rotation.y =
        THREE.MathUtils.lerp(
          robotRef.current.rotation.y,
          x * 0.35,
          0.06
        );

      robotRef.current.rotation.x =
        THREE.MathUtils.lerp(
          robotRef.current.rotation.x,
          -y * 0.15,
          0.06
        );
    }

    // ==================================================
    // HEAD FOLLOWS CURSOR MORE STRONGLY
    // ==================================================

    if (headRef.current) {
      headRef.current.rotation.y =
        THREE.MathUtils.lerp(
          headRef.current.rotation.y,
          x * 0.45,
          0.08
        );

      headRef.current.rotation.x =
        THREE.MathUtils.lerp(
          headRef.current.rotation.x,
          -y * 0.3,
          0.08
        );
    }

    // ==================================================
    // BODY BREATHING / FLOATING
    // ==================================================

    if (bodyRef.current) {
      bodyRef.current.scale.y =
        1 +
        Math.sin(time * 2) *
          0.015;
    }

    // ==================================================
    // LEFT ARM MOVEMENT
    // ==================================================

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z =
        THREE.MathUtils.lerp(
          leftArmRef.current.rotation.z,
          -0.05 + y * 0.15,
          0.08
        );
    }

    // ==================================================
    // RIGHT ARM WAVING
    // ==================================================

    if (rightArmRef.current) {
      const wave =
        Math.sin(time * 5) *
        0.35;

      const cursorWave =
        x * 0.35;

      rightArmRef.current.rotation.z =
        THREE.MathUtils.lerp(
          rightArmRef.current.rotation.z,
          -0.65 +
            wave +
            cursorWave,
          0.1
        );
    }

    // ==================================================
    // RIGHT FOREARM
    // ==================================================

    if (rightForearmRef.current) {
      rightForearmRef.current.rotation.z =
        THREE.MathUtils.lerp(
          rightForearmRef.current.rotation.z,
          Math.sin(time * 5) * 0.45,
          0.1
        );
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.15}
      floatIntensity={0.6}
    >
      <group ref={robotRef}>

        {/* ============================================
            BODY
        ============================================ */}

        <group ref={bodyRef}>

          {/* Main Body */}

          <mesh position={[0, 0, 0]}>
            <boxGeometry
              args={[1.25, 1.45, 0.7]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.85}
              roughness={0.2}
            />
          </mesh>

          {/* Chest Panel */}

          <mesh position={[0, 0.15, 0.37]}>
            <boxGeometry
              args={[0.75, 0.55, 0.04]}
            />

            <meshStandardMaterial
              color={PALETTE.dark}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Chest Glow */}

          <mesh position={[0, 0.15, 0.4]}>
            <boxGeometry
              args={[0.45, 0.08, 0.03]}
            />

            <meshStandardMaterial
              color={PALETTE.cyan}
              emissive={PALETTE.cyan}
              emissiveIntensity={4}
            />
          </mesh>

          {/* Chest Core */}

          <mesh position={[0, -0.05, 0.4]}>
            <sphereGeometry
              args={[0.12, 20, 20]}
            />

            <meshStandardMaterial
              color={PALETTE.magenta}
              emissive={PALETTE.magenta}
              emissiveIntensity={5}
            />
          </mesh>

        </group>

        {/* ============================================
            NECK
        ============================================ */}

        <mesh position={[0, 0.82, 0]}>
          <cylinderGeometry
            args={[0.16, 0.16, 0.2, 20]}
          />

          <meshStandardMaterial
            color={PALETTE.dark}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* ============================================
            HEAD
        ============================================ */}

        <group
          ref={headRef}
          position={[0, 1.25, 0]}
        >

          {/* Head */}

          <mesh>
            <boxGeometry
              args={[1.05, 0.75, 0.75]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.85}
              roughness={0.18}
            />
          </mesh>

          {/* Face */}

          <mesh position={[0, -0.02, 0.39]}>
            <boxGeometry
              args={[0.82, 0.45, 0.04]}
            />

            <meshStandardMaterial
              color={PALETTE.dark}
              metalness={0.6}
              roughness={0.25}
            />
          </mesh>

          {/* Eyes */}

          <RobotEye
            position={[-0.2, 0, 0.43]}
          />

          <RobotEye
            position={[0.2, 0, 0.43]}
          />

          {/* Mouth */}

          <mesh
            position={[0, -0.2, 0.43]}
          >
            <boxGeometry
              args={[0.3, 0.035, 0.025]}
            />

            <meshStandardMaterial
              color={PALETTE.magenta}
              emissive={PALETTE.magenta}
              emissiveIntensity={3}
            />
          </mesh>

          {/* Antenna */}

          <mesh
            position={[0, 0.48, 0]}
          >
            <cylinderGeometry
              args={[0.025, 0.025, 0.25, 12]}
            />

            <meshStandardMaterial
              color={PALETTE.dark}
            />
          </mesh>

          <mesh
            position={[0, 0.63, 0]}
          >
            <sphereGeometry
              args={[0.06, 16, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.magenta}
              emissive={PALETTE.magenta}
              emissiveIntensity={5}
            />
          </mesh>

        </group>

        {/* ============================================
            LEFT ARM
        ============================================ */}

        <group
          ref={leftArmRef}
          position={[-0.78, 0.35, 0]}
        >

          {/* Upper Arm */}

          <mesh
            position={[0, -0.35, 0]}
          >
            <capsuleGeometry
              args={[0.14, 0.5, 8, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Elbow */}

          <mesh
            position={[0, -0.65, 0]}
          >
            <sphereGeometry
              args={[0.16, 16, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.cyan}
              emissive={PALETTE.cyan}
              emissiveIntensity={2}
            />
          </mesh>

          {/* Forearm */}

          <mesh
            position={[0, -0.9, 0]}
          >
            <capsuleGeometry
              args={[0.13, 0.4, 8, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Hand */}

          <mesh
            position={[0, -1.18, 0]}
          >
            <sphereGeometry
              args={[0.17, 16, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.dark}
              metalness={0.7}
            />
          </mesh>

        </group>

        {/* ============================================
            RIGHT ARM
        ============================================ */}

        <group
          ref={rightArmRef}
          position={[0.78, 0.35, 0]}
        >

          {/* Upper Arm */}

          <mesh
            position={[0, -0.35, 0]}
          >
            <capsuleGeometry
              args={[0.14, 0.5, 8, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Elbow */}

          <mesh
            position={[0, -0.65, 0]}
          >
            <sphereGeometry
              args={[0.16, 16, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.magenta}
              emissive={PALETTE.magenta}
              emissiveIntensity={2}
            />
          </mesh>

          {/* FOREARM */}

          <group
            ref={rightForearmRef}
            position={[0, -0.7, 0]}
          >

            <mesh
              position={[0, -0.25, 0]}
            >
              <capsuleGeometry
                args={[0.13, 0.4, 8, 16]}
              />

              <meshStandardMaterial
                color={PALETTE.body}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* HAND */}

            <mesh
              position={[0, -0.55, 0]}
            >
              <sphereGeometry
                args={[0.18, 16, 16]}
              />

              <meshStandardMaterial
                color={PALETTE.dark}
                metalness={0.7}
                roughness={0.2}
              />
            </mesh>

            {/* Fingers */}

            <mesh
              position={[0.12, -0.62, 0]}
              rotation={[0, 0, -0.4]}
            >
              <capsuleGeometry
                args={[0.035, 0.16, 6, 10]}
              />

              <meshStandardMaterial
                color={PALETTE.body}
              />
            </mesh>

            <mesh
              position={[-0.12, -0.62, 0]}
              rotation={[0, 0, 0.4]}
            >
              <capsuleGeometry
                args={[0.035, 0.16, 6, 10]}
              />

              <meshStandardMaterial
                color={PALETTE.body}
              />
            </mesh>

          </group>

        </group>

        {/* ============================================
            WAIST
        ============================================ */}

        <mesh position={[0, -0.85, 0]}>
          <boxGeometry
            args={[0.75, 0.2, 0.55]}
          />

          <meshStandardMaterial
            color={PALETTE.dark}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* ============================================
            LEFT LEG
        ============================================ */}

        <group position={[-0.3, -1.25, 0]}>

          <mesh position={[0, -0.35, 0]}>
            <capsuleGeometry
              args={[0.16, 0.55, 8, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          <mesh position={[0, -0.75, 0.05]}>
            <boxGeometry
              args={[0.38, 0.22, 0.65]}
            />

            <meshStandardMaterial
              color={PALETTE.dark}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>

        </group>

        {/* ============================================
            RIGHT LEG
        ============================================ */}

        <group position={[0.3, -1.25, 0]}>

          <mesh position={[0, -0.35, 0]}>
            <capsuleGeometry
              args={[0.16, 0.55, 8, 16]}
            />

            <meshStandardMaterial
              color={PALETTE.body}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          <mesh position={[0, -0.75, 0.05]}>
            <boxGeometry
              args={[0.38, 0.22, 0.65]}
            />

            <meshStandardMaterial
              color={PALETTE.dark}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>

        </group>

        {/* ============================================
            ROBOT GLOW RING
        ============================================ */}

        <mesh
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.95, 0]}
        >
          <torusGeometry
            args={[0.8, 0.025, 16, 80]}
          />

          <meshStandardMaterial
            color={PALETTE.cyan}
            emissive={PALETTE.cyan}
            emissiveIntensity={3}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* ============================================
            PARTICLES
        ============================================ */}

        <ParticleCloud count={500} />

      </group>
    </Float>
  );
}

// ======================================================
// HERO MODEL
// ======================================================

const HeroModel = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 42,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >

      {/* ==============================================
          LIGHTING
      ============================================== */}

      <ambientLight intensity={0.7} />

      {/* Cyan */}

      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
        color="#00f0ff"
      />

      {/* Magenta */}

      <pointLight
        position={[-4, -2, 3]}
        intensity={3}
        color="#ff007f"
      />

      {/* Purple Backlight */}

      <pointLight
        position={[0, 2, -4]}
        intensity={2}
        color="#7000ff"
      />

      {/* Gold */}

      <pointLight
        position={[4, -3, 2]}
        intensity={1.5}
        color="#ffd000"
      />

      {/* ==============================================
          ROBOT
      ============================================== */}

      <Robot />

      {/* ==============================================
          ENVIRONMENT
      ============================================== */}

      <Environment preset="city" />

    </Canvas>
  );
};

export default HeroModel;