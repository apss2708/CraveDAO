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
  const parallaxY = useTransform(scrollYProgress, [0, 0.8], [0, -160]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.75]);

  const containerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.18,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: 'easeOut' }
    }
  };

  const highlightChips = [
    '2,500+ Indian campuses activated',
    '2K+ verified creators in network',
    '3.6x average campaign ROI',
    'Trusted by Polygon, Base & Swiggy'
  ];

  const heroMetrics = [
    {
      label: 'College Nodes',
      value: 2500,
      suffix: '+',
      description: 'student collectives across India'
    },
    {
      label: 'Creator Network',
      value: 2,
      suffix: 'K+',
      description: 'verified storytellers and operators'
    },
    {
      label: 'Average ROI',
      value: 3.6,
      suffix: 'x',
      decimals: 1,
      description: 'campaign ROI on tracked actions'
    }
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
        padding: 'clamp(110px, 12vw, 140px) 20px 90px',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent'
      }}
      data-testid="hero-section"
    >
      {/* Hero Decorative Elements */}
      <HeroDecorations style={{ y: parallaxY, opacity: parallaxOpacity }} />

      {/* Gradient spotlight background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at top left, rgba(56, 189, 248, 0.32) 0%, transparent 55%), ' +
            'radial-gradient(circle at top right, rgba(34, 197, 94, 0.28) 0%, transparent 52%), ' +
            'radial-gradient(circle at bottom, rgba(15, 23, 42, 0.9) 0%, transparent 65%)',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Floating geometric accents */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '18%',
          right: '14%',
          width: 120,
          height: 120,
          borderRadius: 30,
          border: '1px solid rgba(148, 163, 184, 0.65)',
          background:
            'radial-gradient(circle at top, rgba(56, 189, 248, 0.16) 0%, rgba(15, 23, 42, 0.98) 65%)',
          zIndex: 1
        }}
      />

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '26%',
          right: '20%',
          width: 72,
          height: 72,
          borderRadius: 999,
          border: '1px solid rgba(148, 163, 184, 0.5)',
          background:
            'radial-gradient(circle at top, rgba(129, 140, 248, 0.2) 0%, rgba(15, 23, 42, 0.98) 65%)',
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
          maxWidth: 1040,
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
            background: 'rgba(15, 23, 42, 0.98)',
            borderColor: 'rgba(148, 163, 184, 0.75)',
            boxShadow: '0 0 0 1px rgba(15, 23, 42, 1), 0 15px 35px rgba(15, 23, 42, 0.9)'
          }}
          data-testid="hero-badge"
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
            textAlign: 'center'
          }}
          data-testid="hero-heading"
        >
          WE HAVE EVERYTHING YOU CRAVE FOR ..
        </motion.h1>

        <motion.p
          className="animate-on-scroll"
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 2.4vw, 1.2rem)',
            maxWidth: 720,
            color: 'var(--text-secondary)',
            marginBottom: '2.3rem',
            lineHeight: 1.9
          }}
          data-testid="hero-subtitle"
        >
          CraveDAO activates the human distribution layer for Web3 in India. We combine college collectives,
          creator networks, and OEM partnerships to deliver verifiable user actions, brand trust, and long-term
          community engagement.
        </motion.p>

        <motion.div
          className="animate-on-scroll"
          variants={itemVariants}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            justifyContent: 'center',
            marginBottom: '2.25rem'
          }}
          data-testid="hero-highlight-chips"
        >
          {highlightChips.map((chip) => (
            <motion.span
              key={chip}
              whileHover={{ y: -2 }}
              style={{
                padding: '0.55rem 1.1rem',
                borderRadius: 999,
                border: '1px solid rgba(148, 163, 184, 0.6)',
                background: 'rgba(15, 23, 42, 0.96)',
                color: '#E5E7EB',
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase'
              }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

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
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: 'none' }}
            data-testid="hero-primary-cta"
          >
            Book Growth Sprint
          </motion.a>
          <motion.a
            className="btn-secondary"
            href="/CraveDAO_Investor_Overview.pdf"
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: 'none' }}
            data-testid="hero-secondary-cta"
          >
            Get Investor Overview
          </motion.a>
        </motion.div>

        {/* Hero metrics row */}
        <motion.div
          className="hero-metrics"
          variants={itemVariants}
          style={{ marginTop: '3rem' }}
          data-testid="hero-metrics-row"
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="hero-metric-card"
              data-testid={`hero-metric-${metric.label.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="hero-metric-card__value">
                <CountUp
                  end={metric.value}
                  duration={2}
                  decimals={metric.decimals ?? (Number.isInteger(metric.value) ? 0 : 1)}
                  suffix={metric.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="hero-metric-card__label">{metric.label}</div>
              <p
                style={{
                  marginTop: '0.35rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}
              >
                {metric.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade to create a seamless handoff into next section */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 220,
          background:
            'linear-gradient(180deg, rgba(2, 6, 23, 0) 0%, rgba(2, 6, 23, 0.85) 55%, rgba(2, 6, 23, 1) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </section>
  );
}
