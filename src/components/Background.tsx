import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const { isDark } = useTheme();
  
  useFrame((state) => {
    if (!particlesRef.current) return;
    
    particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });
  
  const { positions, colors } = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 25;
      positions[i3 + 2] = (Math.random() - 0.5) * 25;
      
      // Dynamic colors based on theme
      if (isDark) {
        if (i % 5 === 0) {
          colors[i3] = 0.39; colors[i3 + 1] = 0.39; colors[i3 + 2] = 0.95; // Primary
        } else if (i % 5 === 1) {
          colors[i3] = 0.49; colors[i3 + 1] = 0.39; colors[i3 + 2] = 0.9; // Secondary
        } else if (i % 5 === 2) {
          colors[i3] = 0.06; colors[i3 + 1] = 0.73; colors[i3 + 2] = 0.51; // Accent
        } else if (i % 5 === 3) {
          colors[i3] = 1; colors[i3 + 1] = 0.84; colors[i3 + 2] = 0; // Gold
        } else {
          colors[i3] = 1; colors[i3 + 1] = 1; colors[i3 + 2] = 1; // White
        }
      } else {
        if (i % 5 === 0) {
          colors[i3] = 0.2; colors[i3 + 1] = 0.4; colors[i3 + 2] = 0.8; // Blue
        } else if (i % 5 === 1) {
          colors[i3] = 0.6; colors[i3 + 1] = 0.2; colors[i3 + 2] = 0.8; // Purple
        } else if (i % 5 === 2) {
          colors[i3] = 0.2; colors[i3 + 1] = 0.8; colors[i3 + 2] = 0.4; // Green
        } else if (i % 5 === 3) {
          colors[i3] = 0.9; colors[i3 + 1] = 0.5; colors[i3 + 2] = 0.1; // Orange
        } else {
          colors[i3] = 0.3; colors[i3 + 1] = 0.3; colors[i3 + 2] = 0.3; // Gray
        }
      }
    }
    
    return { positions, colors };
  }, [isDark]);
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          itemSize={3}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={isDark ? 0.8 : 0.6}
        sizeAttenuation
      />
    </points>
  );
};

const HolographicSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { isDark } = useTheme();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={3} position={[0, 0, -3]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color={isDark ? "#6366F1" : "#3B82F6"}
          emissive={isDark ? "#4338ca" : "#1D4ED8"}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const FloatingGeometry = ({ position, geometry, color, scale = 1 }: {
  position: [number, number, number];
  geometry: 'torus' | 'octahedron' | 'box' | 'tetrahedron';
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { isDark } = useTheme();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1]} />;
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={isDark ? 0.3 : 0.2}
          metalness={0.7}
          roughness={0.3}
          wireframe
          transparent
          opacity={isDark ? 0.8 : 0.6}
        />
      </mesh>
    </Float>
  );
};

const InteractiveRings = () => {
  const ringsRef = useRef<THREE.Group>(null);
  const { isDark } = useTheme();
  
  useFrame((state) => {
    if (!ringsRef.current) return;
    ringsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    ringsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    ringsRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.1;
  });
  
  return (
    <group ref={ringsRef} position={[-4, -3, -2]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh>
          <torusGeometry args={[2.5, 0.1, 8, 50]} />
          <meshStandardMaterial 
            color={isDark ? "#ef4444" : "#DC2626"}
            emissive={isDark ? "#dc2626" : "#B91C1C"}
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.08, 8, 50]} />
          <meshStandardMaterial 
            color={isDark ? "#3b82f6" : "#2563EB"}
            emissive={isDark ? "#2563eb" : "#1D4ED8"}
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.2, 0.06, 8, 50]} />
          <meshStandardMaterial 
            color={isDark ? "#06b6d4" : "#0891B2"}
            emissive={isDark ? "#0891b2" : "#0E7490"}
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Background: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`fixed inset-0 z-0 transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400' 
        : 'bg-gradient-to-br from-light-100 via-white to-light-200'
    }`}>
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={isDark ? 0.4 : 0.6} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color={isDark ? "#6366f1" : "#3B82F6"} />
          <spotLight position={[0, 15, 0]} intensity={0.6} angle={0.3} penumbra={1} />
          
          <FloatingParticles />
          <HolographicSphere />
          
          <FloatingGeometry 
            position={[-5, 2, -1]} 
            geometry="torus" 
            color={isDark ? "#10b981" : "#059669"} 
            scale={0.8} 
          />
          <FloatingGeometry 
            position={[5, -2, -1]} 
            geometry="octahedron" 
            color={isDark ? "#8b5cf6" : "#7C3AED"} 
            scale={1.2} 
          />
          <FloatingGeometry 
            position={[3, 3, -3]} 
            geometry="box" 
            color={isDark ? "#f59e0b" : "#D97706"} 
            scale={0.7} 
          />
          <FloatingGeometry 
            position={[-3, -4, -2]} 
            geometry="tetrahedron" 
            color={isDark ? "#ec4899" : "#DB2777"} 
            scale={0.9} 
          />
          
          <InteractiveRings />
          
          <Stars 
            radius={120} 
            depth={60} 
            count={isDark ? 1500 : 800} 
            factor={5} 
            saturation={0.6} 
            fade 
            speed={1.2} 
          />
        </Canvas>
      </div>
      
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isDark 
          ? 'bg-gradient-to-b from-dark-400/0 via-dark-400/20 to-dark-400' 
          : 'bg-gradient-to-b from-light-100/0 via-white/20 to-light-200'
      }`} />
    </div>
  );
};

export default Background;