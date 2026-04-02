import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function NetShotModel({ autoRotate, dragging }: { autoRotate: boolean; dragging: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Object3D>(null)
  const { scene: rawScene } = useGLTF('/Tennisnetz_Halterung_V1.glb')
  const scene = useMemo(() => rawScene.clone(true), [rawScene])

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(mat => enhanceMaterial(mat))
      } else {
        enhanceMaterial(mesh.material)
      }
      mesh.castShadow = true
      mesh.receiveShadow = true
    }
  })

  useFrame((_, delta) => {
    // Center on first frame
    if (innerRef.current && innerRef.current.userData.centered !== true) {
      const box = new THREE.Box3().setFromObject(innerRef.current)
      const center = new THREE.Vector3()
      box.getCenter(center)
      innerRef.current.position.sub(center)
      innerRef.current.userData.centered = true
    }
    // Slow auto-rotate, pauses while user drags
    if (autoRotate && !dragging && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4
    }
  })

  return (
    <group ref={groupRef}>
      <primitive ref={innerRef} object={scene} scale={0.45} />
    </group>
  )
}

function enhanceMaterial(mat: THREE.Material) {
  if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
    mat.metalness = Math.max(mat.metalness, 0.9)
    mat.roughness = Math.min(mat.roughness, 0.15)
    mat.envMapIntensity = 2.5
    mat.needsUpdate = true
  }
}

interface Model3DProps {
  autoRotate?: boolean
  height?: string | number
  enableOrbit?: boolean
}

export default function Model3D({ autoRotate = true, height = '100%', enableOrbit = true }: Model3DProps) {
  const [dragging, setDragging] = useState(false)

  return (
    <Canvas
      style={{ height, width: '100%', background: 'transparent' }}
      camera={{ position: [0, 0.5, 17], fov: 42 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
      shadows
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} castShadow />
        <directionalLight position={[-5, 3, -3]} intensity={0.8} color="#4488ff" />
        <pointLight position={[0, 6, 2]} intensity={1.5} color="#ffffff" />
        <spotLight position={[3, 10, 3]} angle={0.3} penumbra={0.8} intensity={3} castShadow color="#fff" />

        {/* Environment for reflections */}
        <Environment preset="studio" />

        <NetShotModel autoRotate={autoRotate} dragging={dragging} />

        {/* Ground shadow */}
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.5}
          scale={8}
          blur={2.5}
          far={4}
          color="#000"
        />

        {enableOrbit && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.6}
            autoRotate={false}
            onStart={() => setDragging(true)}
            onEnd={() => setDragging(false)}
          />
        )}
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/Tennisnetz_Halterung_V1.glb')
