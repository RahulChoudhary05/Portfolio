import { Suspense, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Icosahedron, MeshDistortMaterial, Sparkles, Torus } from "@react-three/drei"
import * as THREE from "three"

/** Central morphing crystal that gently reacts to the pointer. */
function Crystal() {
  const group = useRef()

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.18
    // parallax toward pointer
    const px = state.pointer.x * 0.35
    const py = state.pointer.y * 0.35
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py, 0.05)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -px, 0.05)
  })

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron args={[1.35, 6]}>
          <MeshDistortMaterial
            color="#c792ea"
            emissive="#4a2d6b"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.65}
            distort={0.4}
            speed={2.2}
          />
        </Icosahedron>

        {/* Inner glowing core */}
        <Icosahedron args={[0.75, 3]}>
          <meshBasicMaterial color="#c3e88d" wireframe transparent opacity={0.4} />
        </Icosahedron>
      </Float>

      {/* Orbiting rings */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus args={[2.4, 0.02, 16, 120]} rotation={[Math.PI / 2.2, 0.4, 0]}>
          <meshStandardMaterial color="#21d4fd" emissive="#21d4fd" emissiveIntensity={1.4} toneMapped={false} />
        </Torus>
        <Torus args={[2.9, 0.015, 16, 120]} rotation={[Math.PI / 1.7, -0.3, 0.6]}>
          <meshStandardMaterial color="#82aaff" emissive="#82aaff" emissiveIntensity={1.2} toneMapped={false} />
        </Torus>
      </Float>
    </group>
  )
}

/** Floating shard debris around the crystal. */
function Shards({ count = 14 }) {
  const shards = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 1.8
      const a = (i / count) * Math.PI * 2
      arr.push({
        pos: [Math.cos(a) * r, (Math.random() - 0.5) * 3, Math.sin(a) * r],
        scale: 0.06 + Math.random() * 0.12,
        color: ["#c3e88d", "#21d4fd", "#82aaff", "#c792ea"][i % 4],
      })
    }
    return arr
  }, [count])

  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08
  })

  return (
    <group ref={ref}>
      {shards.map((s, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={s.pos} scale={s.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.8} toneMapped={false} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function HeroScene({ className = "" }) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.7]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={40} color="#c792ea" />
          <pointLight position={[-5, -3, 2]} intensity={30} color="#21d4fd" />
          <pointLight position={[0, 4, -4]} intensity={25} color="#82aaff" />
          <Crystal />
          <Shards />
          <Sparkles count={60} scale={9} size={2.4} speed={0.4} color="#c3e88d" opacity={0.55} />
        </Suspense>
      </Canvas>
    </div>
  )
}
