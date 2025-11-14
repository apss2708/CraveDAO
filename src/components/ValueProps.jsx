import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiUsers, FiTrendingUp, FiLayers, FiGlobe, FiTarget, FiZap } from 'react-icons/fi';

const valueProps = [
  {
    icon: FiUsers,
    title: 'Community-Led Marketing',
    description: 'Creates authentic entry points through college, creator, and builder networks across India & China.'
  },
  {
    icon: FiTrendingUp,
    title: 'Performance-First Execution',
    description: 'Ensures quantifiable ROI through ads, attribution, and funnel optimization for measurable KPIs.'
  },
  {
    icon: FiLayers,
    title: 'Web2 x Web3 Integrations',
    description: 'Builds trust and recall through brand collaborations to normalize Web3 adoption.'
  },
  {
    icon: FiGlobe,
    title: 'Global Footprint',
    description: 'Enables cross-market penetration with operational presence in India & China.'
  },
  {
    icon: FiTarget,
    title: 'Data-backed, Community-first Funnels',
    description: 'Convert awareness into measurable KPIs by aligning community rituals with performance dashboards.'
  },
  {
    icon: FiZap,
    title: 'Blended Performance + Experience Marketing',
    description: 'Drives adoption for Web3 projects across India and China through integrated online-offline activations.'
  }
];

export default function ValueProps() {
  useScrollReveal();

  return (
    <section id="value" className="section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-overlay section-overlay--value" aria-hidden="true" />

      <div className="section-header animate-on-scroll" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          📌 Value Propositions
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          How CraveDAO Compounds Adoption
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Each pillar aligns our community-first DNA with measurable growth. From performance science to cultural resonance, these value propositions ensure every activation scales trust, reach, and recurring engagement across India and China.
        </motion.p>
      </div>

      <div className="value-grid-wrapper animate-on-scroll">
        <div className="value-grid" style={{ position: 'relative', zIndex: 1 }}>
          {valueProps.map((value, idx) => (
            <motion.div
              key={value.title}
              className="card-glass card-glass--value animate-on-scroll"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: 'easeOut' }}
            >
              <span className="card-glass__index">0{idx + 1}</span>
              <div className="card-glass__icon" aria-hidden="true">
                <value.icon />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
