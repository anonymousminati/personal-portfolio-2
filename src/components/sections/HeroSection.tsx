"use client"

import React, { useRef, useState, useMemo, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Palette, ChevronDown } from 'lucide-react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { ExtrudeGeometry, Shape } from 'three'
import * as THREE from 'three'

// Extend the R3F catalog with standard Three.js elements
extend({ 
  Mesh: THREE.Mesh, 
  BoxGeometry: THREE.BoxGeometry, 
  MeshStandardMaterial: THREE.MeshStandardMaterial,
  MeshPhysicalMaterial: THREE.MeshPhysicalMaterial,
  AmbientLight: THREE.AmbientLight,
  DirectionalLight: THREE.DirectionalLight,
  PointLight: THREE.PointLight
})

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void
}

// Chrome Grid Components
interface BoxProps {
  position: [number, number, number];
  width?: number;
  length?: number;
  cornerRadius?: number;
  gridPosition: [number, number];
  hoveredBox: [number, number] | null;
  rippleScale?: number;
  rippleRadius?: number;
  onHover: (gridPos: [number, number] | null) => void;
}

const Box = ({ 
    position, 
    width = 4, 
    length = 4, 
    cornerRadius = 2,
    gridPosition,
    hoveredBox,
    rippleScale = 0.3,
    rippleRadius = 3,
    onHover
}: BoxProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [currentScale, setCurrentScale] = useState(1);
    
    const geometry = useMemo(() => {
        const shape = new Shape();
        const angleStep = Math.PI * 0.5;
        const radius = cornerRadius;
        
        const halfWidth = width / 2;
        const halfLength = length / 2;

        shape.absarc(halfWidth - radius, halfLength - radius, radius, angleStep * 0, angleStep * 1);
        shape.absarc(-halfWidth + radius, halfLength - radius, radius, angleStep * 1, angleStep * 2);
        shape.absarc(-halfWidth + radius, -halfLength + radius, radius, angleStep * 2, angleStep * 3);
        shape.absarc(halfWidth - radius, -halfLength + radius, radius, angleStep * 3, angleStep * 4);

        const extrudeSettings = {
            depth: 0.3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 20,
            curveSegments: 20
        };

        const geometry = new ExtrudeGeometry(shape, extrudeSettings);
        geometry.center();
        
        return geometry;
    }, [width, length, cornerRadius]);
    
    useEffect(() => {
        return () => {
            geometry.dispose();
        };
    }, [geometry]);

    useFrame(() => {
        if (meshRef.current) {
            let targetScale = 1;
            
            const isThisBoxHovered = hoveredBox && 
                gridPosition[0] === hoveredBox[0] && 
                gridPosition[1] === hoveredBox[1];
            
            if (isThisBoxHovered) {
                targetScale = 5;
            } else if (hoveredBox) {
                const dx = gridPosition[0] - hoveredBox[0];
                const dz = gridPosition[1] - hoveredBox[1];
                const distance = Math.sqrt(dx * dx + dz * dz);
                
                if (distance <= rippleRadius && distance > 0) {
                    const falloff = Math.max(0, 1 - (distance / rippleRadius));
                    const rippleEffect = falloff * rippleScale;
                    targetScale = 1 + (rippleEffect * 3);
                }
            }
            
            const lerpFactor = 0.1;
            const newScale = currentScale + (targetScale - currentScale) * lerpFactor;
            setCurrentScale(newScale);
            
            meshRef.current.scale.z = newScale;
        }
    });

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            position={position}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerEnter={(e) => {
                e.stopPropagation();
                onHover(gridPosition);
            }}
            onPointerLeave={(e) => {
                e.stopPropagation();
                onHover(null);
            }}
        >
            <meshPhysicalMaterial 
                color="#232323" 
                roughness={0.5} 
                metalness={1}
                clearcoat={1}
                clearcoatRoughness={0}
            />
        </mesh>
    );
};

function GridOfBoxes() {
  const gridSize = 10;
  const boxWidth = 4;
  const boxLength = 4;
  const gap = 0.05;
  const spacingX = boxWidth + gap;
  const spacingZ = boxLength + gap;
  
  const [hoveredBox, setHoveredBox] = useState<[number, number] | null>(null);
  const rippleScale = 2.5;
  const rippleRadius = 2;
   
  const boxes = [];

  for (let x = 0; x < gridSize; x++) {
    for (let z = 0; z < gridSize; z++) {
      const posX = (x - (gridSize - 1) / 2) * spacingX;
      const posZ = (z - (gridSize - 1) / 2) * spacingZ;
      
      boxes.push(
        <Box 
          key={`${x}-${z}`} 
          position={[posX, -0.85, posZ]}
          width={boxWidth}
          length={boxLength}
          cornerRadius={0.8}
          gridPosition={[x, z]}
          hoveredBox={hoveredBox}
          rippleScale={rippleScale}
          rippleRadius={rippleRadius}
          onHover={setHoveredBox}
        />
      );
    }
  }
  
  return <>{boxes}</>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Chrome Grid Background */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ 
            position: [-7.31, 11, 24.72], 
            rotation: [-0.65, -0.2, -0.13],
            fov: 35 
          }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.domElement.style.pointerEvents = 'auto';
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight 
            position={[10, 15, 10]} 
            intensity={10}
            castShadow
          />
          <directionalLight 
            position={[-10, 10, -5]} 
            intensity={10}
            color="#ffffff"
          />
          <directionalLight 
            position={[5, -10, 15]} 
            intensity={5}
            color="#f0f8ff"
          />
          <pointLight 
            position={[0, 20, 3]} 
            intensity={2}
            distance={50}
          />
          <pointLight 
             position={[15, 5, 15]} 
             intensity={1.5}
             distance={40}
             color="#ffffff"
           />
          <GridOfBoxes />        
        </Canvas>
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10 pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="text-center z-20 px-4 relative pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
            />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center border border-blue-500/50 backdrop-blur-sm">
              <Code className="w-16 h-16 text-blue-300" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-slate-200 drop-shadow-lg"
          >
            Hi, I&apos;m
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent relative drop-shadow-lg"
          >
            Prathamesh Malode
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"
            />
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Full Stack Web Developer with expertise in React, Next.js, and{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-blue-300 font-semibold"
          >
            modern scalable architectures
          </motion.span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onScrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 border border-blue-400/30 backdrop-blur-sm"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onScrollToSection('contact')}
            className="px-8 py-4 bg-white/10 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-lg hover:bg-white/20 hover:border-blue-300 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social/Coding Platform Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 flex justify-center gap-4 pointer-events-auto"
        >
          <motion.a
            href="https://leetcode.com/u/user0887I/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/40 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm group"
            aria-label="LeetCode Profile"
          >
            <svg className="w-6 h-6 text-orange-300 group-hover:text-orange-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.143 7.758-.038l9.093-9.174a1.378 1.378 0 0 0 0-1.929c-.319-.32-.84-.320-1.158 0l-3.969 4.002-3.969-4.002a1.378 1.378 0 0 0-1.929 0 1.378 1.378 0 0 0 0 1.929l3.969 4.002 2.062-2.062 2.062 2.062a1.378 1.378 0 0 0 1.929 0 1.378 1.378 0 0 0 0-1.929l-2.062-2.062a1.378 1.378 0 0 0-1.929 0l-2.062 2.062-3.969-4.002a1.378 1.378 0 0 0-1.929 0z"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="https://www.hackerrank.com/profile/prathameshmalod2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-green-500/20 rounded-lg border border-green-500/40 hover:border-green-400 transition-all duration-300 backdrop-blur-sm group"
            aria-label="HackerRank Profile"
          >
            <svg className="w-6 h-6 text-green-300 group-hover:text-green-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.114.642 10.886 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.642-1.114-.642-10.886 0-12S10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.141-.115-.258-.258-.258H8.963c-.141 0-.258.115-.258.258v9.833c0 .141.115.258.258.258h.742c.141 0 .258-.115.258-.258v-4.091h4.074v4.091c0 .141.115.258.258.258h.742c.141 0 .258-.115.258-.258V6.908c0-.141-.115-.258-.258-.258h-.742z"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="https://medium.com/@prathameshmalode.2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-500/20 rounded-lg border border-gray-500/40 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm group"
            aria-label="Medium Profile"
          >
            <svg className="w-6 h-6 text-gray-300 group-hover:text-gray-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-4/5 left-10 hidden lg:block">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-blue-500/20 rounded-lg border border-blue-500/40 flex items-center justify-center backdrop-blur-sm"
          >
            <Code className="w-8 h-8 text-blue-300" />
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 right-10 hidden lg:block">
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-500/40 flex items-center justify-center backdrop-blur-sm"
          >
            <Palette className="w-6 h-6 text-cyan-300" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="p-2 rounded-full bg-blue-500/20 border border-blue-500/40 backdrop-blur-sm">
          <ChevronDown className="w-6 h-6 text-blue-300" />
        </div>
      </motion.div>
    </section>
  )
}