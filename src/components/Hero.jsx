import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import HeroDecorations from './HeroDecorations';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  useScrollReveal();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const parallaxY = useTransform(scrollYProgress, [0, 0.8], [0, -180]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const highlightChips = [
    '300+ Indian campuses activated',
    '2K+ verified creators in network',
    '3.6x average campaign ROI',
    'Trusted by Polygon, Base & Swiggy'
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section animate-on-scroll"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(100px, 12vw, 140px) 20px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      
      {/* Hero Decorative Elements */}
      <HeroDecorations style={{ y: parallaxY, opacity: parallaxOpacity }} />
      
      {/* Professional Background Elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '60%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.02) 100%)',
        zIndex: 1
      }} />

      {/* Floating Abstract Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '100px',
          height: '100px',
          border: '2px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '20px',
          transform: 'rotate(45deg)',
          zIndex: 1
        }}
      />

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '20%',
          width: '60px',
          height: '60px',
          border: '1px solid rgba(108, 99, 255, 0.2)',
          borderRadius: '50%',
          zIndex: 1
        }}
      />

      <motion.div
        className="animate-on-scroll"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <motion.div
          className="section-badge animate-on-scroll"
          variants={itemVariants}
          style={{
            background: 'rgba(5, 242, 219, 0.1)',
            border: '1px solid var(--accent-cyan)',
            padding: '10px 24px',
            borderRadius: '24px',
            fontFamily: 'var(--font-subheading)',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            boxShadow: 'var(--glow-cyan)',
            display: 'inline-block'
          }}
        >
          🚀 India's Web3 Gateway
        </motion.div>

        <motion.h1
          className="animate-on-scroll"
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.75rem, 6vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            textShadow: '0 0 30px rgba(99, 102, 241, 0.35)',
            filter: 'drop-shadow(0 4px 20px rgba(236, 65, 134, 0.25))',
            lineHeight: 1.1,
            textAlign: 'center',
            animation: 'pulse-glow 3s ease-in-out infinite'
          }}
        >
          WE HAVE EVERYTHING YOU CRAVE FOR ..
        </motion.h1>

        <motion.div
          className="animate-on-scroll"
          variants={itemVariants}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          {highlightChips.map((chip) => (
            <motion.span
              key={chip}
              variants={itemVariants}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                background: 'var(--gradient-card-soft)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="animate-on-scroll"
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.8
          }}
        >
          CraveDAO activates the human distribution layer for Web3 in India. We combine
          college collectives, creator networks, and OEM partnerships to deliver
          verifiable user actions, brand trust, and long-term community engagement.
        </motion.p>

        <motion.div
          className="hero-cta-group animate-on-scroll"
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: 'clamp(0.75rem, 2.5vw, 1.5rem)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <motion.a
            className="btn-cta"
            href="#contact"
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: 'none' }}
          >
            Book Growth Sprint
          </motion.a>
          <motion.a
            className="btn-secondary"
            href="/CraveDAO_Investor_Overview.pdf"
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: 'none' }}
          >
            Get Investor Overview
          </motion.a>
        </motion.div>

        {/* Investor Metrics */}
        <motion.div
          className="hero-metrics animate-on-scroll"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { value: 300, suffix: '+', label: 'College Communities Activated' },
            { value: 2, suffix: 'K+', label: 'Verified Creators in Network' },
            { value: 500, suffix: 'M+', label: 'Cumulative Partner Reach' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="card-glass hero-metric-card animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="hero-metric-card__value">
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="hero-metric-card__label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* Additional Professional Glow Effects */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '240px',
          background: 'linear-gradient(180deg, rgba(1, 4, 38, 0) 0%, rgba(1, 9, 38, 0.55) 55%, rgba(1, 4, 38, 0.85) 78%, rgba(2, 26, 115, 0.2) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </section>
  );
}