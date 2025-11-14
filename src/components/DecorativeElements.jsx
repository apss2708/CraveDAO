import React from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalDecorativeElements() {
  return (
    <>
      {/* Elegant Geometric Grid */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: 'fixed',
          top: '15%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          position: 'fixed',
          bottom: '20%',
          left: '8%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.08) 0%, transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Animated Connection Lines */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <motion.path
          d="M 100 100 Q 400 150 600 300"
          stroke="rgba(212, 175, 55, 0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 1200 200 Q 800 400 400 600"
          stroke="rgba(108, 99, 255, 0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </svg>

      {/* Subtle Particle System */}
      {[...Array(12)].map((_, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'fixed',
            width: '4px',
            height: '4px',
            background: 'var(--accent-gold)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            left: `${10 + (idx * 8)}%`,
            top: `${20 + (idx * 5)}%`,
            opacity: 0.3
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: idx * 0.3
          }}
        />
      ))}

      {/* Section Accent Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'fixed',
          top: '50%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: 'fixed',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </>
  );
}