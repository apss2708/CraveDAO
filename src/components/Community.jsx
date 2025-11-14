import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiMessageCircle, FiSend, FiUsers, FiTrendingUp, FiGlobe } from 'react-icons/fi';

const proofPoints = [
  {
    title: 'Campus & Creator Nodes',
    description: '300+ campus captains and 2K verified storytellers compound every launch.',
    icon: FiUsers
  },
  {
    title: 'Retention Dashboards',
    description: 'Weekly ops sprints track wallet stickiness and KPI lift for investors.',
    icon: FiTrendingUp
  },
  {
    title: 'Global Reach, Local Trust',
    description: 'Discord rituals sync with Telegram field ops across India, SEA, and MENA.',
    icon: FiGlobe
  }
];

export default function Community() {
  useScrollReveal();

  return (
    <section id="community" className="section animate-on-scroll" style={{ textAlign: 'center' }}>
      <motion.div
        className="section-badge animate-on-scroll"
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🤝 Community Flywheel
      </motion.div>

      <motion.h2
        className="animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Stay Close to the CraveDAO Operator Network
      </motion.h2>

      <motion.p
        className="animate-on-scroll"
        style={{ maxWidth: '720px', margin: '1rem auto 2.5rem' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Join founder AMAs, playbook drops, and field ops debriefs in our community hubs. Choose the channel that fits how you like to collaborate.
      </motion.p>

      <motion.div
        className="community-cta-group animate-on-scroll"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <motion.a
          className="btn-cta community-cta"
          href="https://discord.gg/CraveDAO"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <FiMessageCircle size={20} />
          Join our Discord
        </motion.a>

        <motion.a
          className="btn-secondary community-cta"
          href="https://t.me/CraveDAO"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <FiSend size={20} />
          Chat on Telegram
        </motion.a>
      </motion.div>

      <motion.div
        className="community-proof-grid animate-on-scroll"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {proofPoints.map((point) => (
          <motion.div
            key={point.title}
            className="card-elegant community-proof-card animate-on-scroll"
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="community-proof-icon" aria-hidden="true">
              <point.icon size={22} />
            </div>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
