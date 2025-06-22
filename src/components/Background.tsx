import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (!particlesRef.current) return;
    
    particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });
  
  const count = 400;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 20;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 20;
    
    // Colors from primary palette
    if (i % 4 === 0) {
      colors[i3] = 0.39; // Primary/accent color (adjusted)
      colors[i3 + 1] = 0.39;
      colors[i3 + 2] = 0.95;
    } else if (i % 4 === 1) {
      colors[i3] = 0.49;
      colors[i3 + 1] = 0.39;
      colors[i3 + 2] = 0.9;
    } else if (i % 4 === 2) {
      colors[i3] = 0.06;
      colors[i3 + 1] = 0.73;
      colors[i3 + 2] = 0.51;
    } else {
      colors[i3] = 1;
      colors[i3 + 1] = 1;
      colors[i3 + 2] = 1;
    }
  }
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          itemSize={3}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const GradientSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.5} position={[0, 0, -2]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#6366F1"
          emissive="#4338ca"
          emissiveIntensity={0.2}
          metalness={0.2}
          roughness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!torusRef.current) return;
    torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
  });
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={torusRef} position={[-4, 2, -1]} scale={0.8}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = () => {
  const octaRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!octaRef.current) return;
    octaRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    octaRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });
  
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={octaRef} position={[4, -2, -1]} scale={1.2}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.25}
          metalness={0.5}
          roughness={0.4}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!cubeRef.current) return;
    cubeRef.cubeRef.rotation.x = state.clock.getElapsedTime() * 0.1;
    cubeRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    cubeRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
  });
  
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={cubeRef} position={[3, 3, -3]} scale={0.7}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={0.2}
          metalness={0.3}
          roughness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const InteractiveRings = () => {
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ringsRef.current) return;
    ringsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    ringsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  
  return (
    <group ref={ringsRef} position={[-3, -3, -2]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh>
          <torusGeometry args={[2, 0.1, 8, 50]} />
          <meshStandardMaterial 
            color="#ef4444"
            emissive="#dc2626"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.08, 8, 50]} />
          <meshStandardMaterial 
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.8, 0.06, 8, 50]} />
          <meshStandardMaterial 
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-dark-400 bg-gradient-to-b from-dark-400 to-dark-300">
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#6366f1" />
          <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
          
          <FloatingParticles />
          <GradientSphere />
          <FloatingTorus />
          <FloatingOctahedron />
          <FloatingCube />
          <InteractiveRings />
          
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0.5} fade speed={1} />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400/0 via-dark-400/20 to-dark-400 pointer-events-none"></div>
    </div>
  );
};

export default Background;