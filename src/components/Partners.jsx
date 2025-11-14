import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const marqueeLogos = [
  'Polygon Guild',
  'Base Builder League',
  'Near Campus',
  'Solana India',
  'CoinDCX Campus',
  'Chainlink Advocates',
  'Aptos',
  'Swiggy Tech',
  'Phantom'
];

const testimonials = [
  {
    quote: 'CraveDAO matched protocol objectives with the exact college and creator rituals we needed. Reporting left no room for guesswork.',
    name: 'Aparna Mehra',
    title: 'Head of Ecosystem, Polygon Guild India'
  },
  {
    quote: 'The team translated campaign copy into regional trust moments. Their dashboards and on-ground operators are unmatched.',
    name: 'Rahul S.',
    title: 'Program Manager, Base Builder League'
  },
  {
    quote: 'OEM partnerships were the missing layer. CraveDAO made sure every activation showed up where Indian consumers already hang out.',
    name: 'Ishita Rao',
    title: 'Brand Manager, Swiggy Tech'
  }
];

export default function Partners() {
  useScrollReveal();

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialSequence = useMemo(() => testimonials, []);
  const totalSlides = testimonialSequence.length;

  const goToSlide = useCallback((nextIndex) => {
    setActiveIndex((prev) => {
      if (typeof nextIndex === 'number') {
        return (nextIndex + totalSlides) % totalSlides;
      }
      return (prev + 1) % totalSlides;
    });
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide();
    }, 6500);

    return () => clearInterval(timer);
  }, [goToSlide]);

  const activeTestimonial = testimonialSequence[activeIndex];

  return (
    <section id="partners" className="section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-header animate-on-scroll">
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🤝 Ecosystem Allies
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Partners Who Extend Our Flywheel
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mission: Co-create with protocols, OEMs, and community leaders who demand measurable conversions. Proof: Multi-quarter alliances rerun our playbooks because the metrics keep compounding. Invitation: Drop into the marquee and picture your logo in the next sprint.
        </motion.p>
      </div>

      <div className="animate-on-scroll" style={{ position: 'relative', overflow: 'hidden', marginBottom: '3rem' }}>
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-50%' }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' }}
          style={{
            display: 'flex',
            gap: '2.5rem',
            whiteSpace: 'nowrap'
          }}
        >
          {[...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
            <div
              key={`${logo}-${idx}`}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                border: '1px solid var(--badge-border)',
                background: 'var(--glass-highlight)',
                boxShadow: 'var(--glow-royal)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>

      <div
        className="card-elegant animate-on-scroll"
        style={{
          position: 'relative',
          maxWidth: '820px',
          margin: '0 auto',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <motion.span
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'var(--glass-highlight)',
                color: 'var(--accent-royal)',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Client Voice
            </motion.span>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              “{activeTestimonial.quote}”
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>{activeTestimonial.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{activeTestimonial.title}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <motion.button
              type="button"
              onClick={handlePrev}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                background: 'rgba(8, 13, 34, 0.72)',
                color: 'var(--accent-royal)',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer'
              }}
              aria-label="Previous testimonial"
            >
              <FiArrowLeft size={18} />
            </motion.button>
            <motion.button
              type="button"
              onClick={handleNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                background: 'rgba(8, 13, 34, 0.72)',
                color: 'var(--accent-royal)',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer'
              }}
              aria-label="Next testimonial"
            >
              <FiArrowRight size={18} />
            </motion.button>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {testimonialSequence.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: isActive ? '38px' : '12px',
                    height: '12px',
                    borderRadius: '999px',
                    border: 'none',
                    background: isActive
                      ? 'linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-royal) 100%)'
                      : 'rgba(90, 127, 200, 0.28)',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease'
                  }}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
