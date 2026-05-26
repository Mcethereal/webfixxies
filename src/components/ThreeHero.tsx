import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Center, Environment, ContactShadows, SpotLight, useAnimations } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model() {
  const gltf = useLoader(GLTFLoader, '/nexbot_robot_character_concept.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!modelRef.current) return;
    const targetX = (state.pointer.x * Math.PI) * 0.25;
    const targetY = (state.pointer.y * Math.PI) * 0.25;
    // We target the rotation of the group for the cursor tracking
    modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetX, 0.1);
    modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, -targetY, 0.1);
  });

  return (
    <group ref={modelRef}>
      <primitive 
        object={gltf.scene} 
        scale={[2.5, 2.5, 2.5]} 
        position={[0, -1.5, 0]} 
      />
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="relative w-screen h-screen bg-transparent overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 40 }}
          eventSource={document.getElementById('root') as HTMLElement}
          eventPrefix="client"
        >
          <ambientLight intensity={1.5} color="#ffffff" />
          <Environment preset="city" />
          <directionalLight position={[0, 10, 5]} intensity={3} color="#ff004c" />
          <pointLight position={[-5, 5, -5]} intensity={4} color="#00e5ff" />
          <pointLight position={[5, -5, 5]} intensity={2} color="#8a2be2" />
          <SpotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={6} castShadow color="#ff00ff" />
          <SpotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={6} castShadow color="#00ffff" />
          
          <Suspense fallback={null}>
            <Center>
              <Model />
            </Center>
            <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={20} blur={2.5} far={4} color="#000000" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-pulse">
          Web Fixxies
        </h1>
        <p className="mt-8 text-zinc-300 text-xl md:text-2xl max-w-4xl font-light tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
          Dismantling the limitations of the traditional web. We engineer high-performance, hardware-accelerated 3D digital environments designed to command market attention and accelerate digital authority.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cyberpink to-electricblue"></div>
          <span className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase drop-shadow-md">Initialize Interface ↓</span>
        </div>
      </div>
    </div>
  );
}
