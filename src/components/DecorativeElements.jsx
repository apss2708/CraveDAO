import React from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalDecorativeElements() {
  return (
    <>
      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(90deg, rgba(31, 41, 55, 0.6) 1px, transparent 1px),' +
            'linear-gradient(180deg, rgba(31, 41, 55, 0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.25,
          mixBlendMode: 'soft-light',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Soft color fields */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2.4 }}
        style={{
          position: 'fixed',
          top: '-10%',
          left: '-10%',
          width: '45vw',
          height: '45vw',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 60%)',
          filter: 'blur(36px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 2.8, delay: 0.4 }}
        style={{
          position: 'fixed',
          bottom: '-15%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background:
            'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 65%)',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Animated connection strokes */}
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
          d="M 80 120 Q 420 80 840 260"
          stroke="rgba(56, 189, 248, 0.24)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.path
          d="M 1200 260 Q 760 420 320 620"
          stroke="rgba(129, 140, 248, 0.22)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 0.6, ease: 'easeInOut' }}
        />
      </svg>

      {/* Sparse particle field */}
      {[...Array(10)].map((_, idx) => (
        <motion.div
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          style={{
            position: 'fixed',
            width: 3,
            height: 3,
            background: idx % 2 === 0 ? '#38BDF8' : '#22C55E',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            left: `${8 + idx * 7}%`,
            top: `${18 + idx * 5}%`,
            opacity: 0.4
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: idx * 0.35,
            ease: 'easeInOut'
          }}
        />
      ))}
    </>
  );
}
