import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: '300+ College Communities', value: 'Workshops, wallet onboarding and live activations led by verified ambassadors' },
  { label: '2,000+ Verified Creators', value: 'Narrative-led storytelling across tech, culture, finance, gaming and lifestyle' },
  { label: '500M+ Partner Reach', value: 'OEM, FMCG and lifestyle collaborations that amplify Web3 discovery' },
  { label: '50M+ Campaign Impressions', value: 'Hybrid programs that convert awareness into measurable KPIs' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🎯 Why CraveDAO Exists
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Human Participation Layer
        </motion.h2>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.p
          style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Web3 ecosystem has leapfrogged in technology, yet still struggles with real user onboarding, mainstream trust and consistent community access. CraveDAO bridges that gap by blending data-backed execution with verified human networks so every campaign drives tangible growth.
        </motion.p>
        <motion.p
          style={{ fontSize: '1.1rem', marginBottom: '2.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our vision is to make Web3 adoption mainstream in India by orchestrating measurable user actions, trust-rich experiences and long-term engagement across colleges, creators and consumer brands.
        </motion.p>

        <motion.div
          className="grid-2"
          style={{ marginTop: '2rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="card"
              variants={statVariants}
              whileHover="hover"
            >
              <h3 style={{ color: '#00E5CC', marginBottom: '1rem', textShadow: '0 4px 16px rgba(0, 229, 204, 0.4)' }}>
                {stat.label}
              </h3>
              <p>{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
