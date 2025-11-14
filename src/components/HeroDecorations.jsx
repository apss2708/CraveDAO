import React from 'react';
import { motion } from 'framer-motion';

export default function HeroDecorations({ style = {} }) {
  // Generate random star positions
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    animationDuration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  const glowingDots = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    animationDuration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
  }));

  return (
    <motion.div
      className="hero-decorations-layer"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        maskImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0) 100%)',
        WebkitMaskImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0) 100%)',
        ...style
      }}
    >
      {/* Subtle twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: '#05F2DB',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing accent dots */}
      {glowingDots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          style={{
            position: 'absolute',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: 'radial-gradient(circle, rgba(242, 5, 203, 0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            pointerEvents: 'none',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: dot.animationDuration,
            repeat: Infinity,
            delay: dot.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle gradient orbs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(5, 242, 219, 0.1) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(217, 4, 142, 0.1) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated constellation lines */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.3,
        }}
      >
        <motion.line
          x1="20%"
          y1="30%"
          x2="35%"
          y2="40%"
          stroke="rgba(5, 242, 219, 0.3)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="60%"
          y1="20%"
          x2="75%"
          y2="35%"
          stroke="rgba(242, 5, 203, 0.3)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </motion.div>
  );
}
