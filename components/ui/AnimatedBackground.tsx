'use client';

import { Heart, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="min-h-screen fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/40 to-white/80" />

      {/* ECG Line Pattern - Multiple instances */}
      <svg className="absolute top-0 left-0 w-full h-32 opacity-5" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0 50 L200 50 L220 30 L240 70 L260 50 L280 50 L300 20 L320 80 L340 50 L1200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="3s" repeatCount="indefinite" />
        </path>
      </svg>

      <svg className="absolute top-1/3 left-0 w-full h-32 opacity-5" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0 50 L180 50 L200 35 L220 65 L240 50 L260 50 L280 25 L300 75 L320 50 L1200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-purple-500"
        >
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
        </path>
      </svg>

      <svg className="absolute bottom-20 left-0 w-full h-32 opacity-5" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0 50 L220 50 L240 32 L260 68 L280 50 L300 50 L320 22 L340 78 L360 50 L1200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-cyan-500"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="5s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Floating Medical Icons */}
      <motion.div
        className="absolute top-20 right-20 text-pink-200"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-16 h-16 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-blue-200"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity className="w-20 h-20 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 text-purple-200"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap className="w-12 h-12 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-1/3 text-cyan-200"
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-14 h-14 opacity-15" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-indigo-200"
        animate={{ y: [0, -18, 0], x: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity className="w-16 h-16 opacity-15" />
      </motion.div>

      {/* Pulse Rings */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-blue-300"
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-40 h-40 rounded-full border-2 border-purple-300"
        animate={{ scale: [1, 2.5, 1], opacity: [0.25, 0, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/2 w-36 h-36 rounded-full border-2 border-cyan-300"
        animate={{ scale: [1, 2.2, 1], opacity: [0.28, 0, 0.28] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-float-slowest" />

      {/* Particle Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Technical Particles - Small Dots */}
        {particlePositions.map((pos, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-fall"
            style={{
              left: `${pos.left}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
            }}
          />
        ))}
        
        {/* Medium Circuit-like Particles */}
        {circuitPositions.map((pos, i) => (
          <div
            key={`circuit-${i}`}
            className="absolute w-2 h-2 border border-purple-400/30 rounded-sm animate-fall-rotate"
            style={{
              left: `${pos.left}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
            }}
          />
        ))}
        
        {/* Larger Tech Icons */}
        {techPositions.map((pos, i) => (
          <div
            key={`tech-${i}`}
            className="absolute animate-fall-zigzag opacity-20"
            style={{
              left: `${pos.left}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
            }}
          >
            {i % 3 === 0 ? (
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            ) : i % 3 === 1 ? (
              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        ))}
        
        {/* Connection Lines */}
        {linePositions.map((pos, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-shimmer"
            style={{
              top: `${pos.top}%`,
              left: '-100%',
              width: '200%',
              animationDelay: `${pos.delay}s`,
              animationDuration: '8s',
            }}
          />
        ))}
      </div>
      
      {/* Subtle Scan Line Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-x-0 h-px bg-blue-500 animate-scan" />
      </div>
    </div>
  );
}

// Pre-generate particle positions (stable across renders)
const particlePositions = Array.from({ length: 30 }, (_, i) => ({
  left: (i * 37 + 13) % 100,
  delay: (i * 1.7) % 15,
  duration: 15 + (i * 0.8) % 10,
}));

const circuitPositions = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 43 + 27) % 100,
  delay: (i * 2.3) % 20,
  duration: 20 + (i * 1.2) % 15,
}));

const techPositions = Array.from({ length: 15 }, (_, i) => ({
  left: (i * 53 + 17) % 100,
  delay: (i * 3.1) % 25,
  duration: 25 + (i * 1.5) % 20,
}));

const linePositions = Array.from({ length: 8 }, (_, i) => ({
  top: 20 + i * 10,
  delay: i * 2,
}));

// "use client"

// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "./utils";

// const ParticleRing = () => {
//   return (
//     <div className="min-h-screen fixed inset-0 overflow-hidden pointer-events-none -z-10">
//       <Canvas
//         camera={{
//           position: [10, -7.5, -5],
//         }}
//         style={{ height: "100vh" }}
//         className="bg-white"
//       >
//         <OrbitControls maxDistance={20} minDistance={10} />
//         <directionalLight />
//         <pointLight position={[-30, 0, -30]} power={10.0} />
//         <PointCircle />
//       </Canvas>

//       {/* <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
//         Drag & Zoom
//       </h1> */}
//     </div>
//   );
// };

// const PointCircle = () => {
//   const ref = useRef(null);

//   useFrame(({ clock }) => {
//     if (ref.current?.rotation) {
//       ref.current.rotation.z = clock.getElapsedTime() * 0.05;
//     }
//   });

//   return (
//     <group ref={ref}>
//       {pointsInner.map((point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//       {pointsOuter.map((point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//     </group>
//   );
// };

// const Point = ({ position, color }) => {
//   return (
//     <Sphere position={position} args={[0.1, 10, 10]}>
//       <meshStandardMaterial
//         emissive={color}
//         emissiveIntensity={0.5}
//         roughness={0.5}
//         color={color}
//       />
//     </Sphere>
//   );
// };

// export default ParticleRing;