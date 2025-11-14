import React from 'react';
import { motion } from 'framer-motion';

const formats = [
  {
    name: 'Residency Programs',
    icon: '🏕️',
    duration: '4–6 weeks',
    description: 'Intensive builder residencies focused on product validation, growth playbooks, and user testing loops.'
  },
  {
    name: 'Founder Cohorts',
    icon: '🧑‍🚀',
    duration: '8–10 weeks',
    description: 'Closed-group accelerators pairing early-stage founders with mentors for traction, market, and fundraising readiness.'
  },
  {
    name: 'Workshops & Retreats',
    icon: '🌄',
    duration: 'Weekend to week-long',
    description: 'Curated mix of technical deep dives and creative resets designed for teams to recharge while shipping tangible output.'
  },
  {
    name: 'Premium Meetups',
    icon: '🎟️',
    duration: 'Single-evening',
    description: 'Invite-only networking touchpoints co-hosted with OEMs and ecosystem partners for investors, founders, and thought leaders.'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const eventVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: {
    y: -15,
    transition: { duration: 0.3 }
  }
};

export default function Events() {
  return (
    <section id="events" className="section">
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🎤 Community at Scale
        </motion.div>
        <h2>Experiences That Turn Audiences into Advocates</h2>
        <p>CraveDao’s event architecture blends offline intensity with online continuity, ensuring every touchpoint drives measurable outcomes.</p>
      </div>

      <motion.div
        className="grid-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {formats.map((format, idx) => (
          <motion.div
            key={idx}
            className="card"
            variants={eventVariants}
            whileHover="hover"
            style={{ textAlign: 'center' }}
          >
            <motion.div
              style={{ fontSize: '4rem', marginBottom: '1rem' }}
              whileHover={{ scale: 1.3, rotate: 15 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {format.icon}
            </motion.div>
            <h3>{format.name}</h3>
            <motion.p
              style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0', lineHeight: 1.6 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <strong style={{ color: 'var(--accent-cyan)' }}>{format.duration}</strong> • {format.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
