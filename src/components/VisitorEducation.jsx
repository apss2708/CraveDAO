import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  {
    icon: '🪄',
    title: 'What is Web3?',
    body: 'A shared digital ownership layer built on verifiable ledgers. CraveDAO makes it human by connecting wallets with community rituals and everyday touchpoints.'
  },
  {
    icon: '🤝',
    title: 'Why Communities Matter',
    body: 'Retention lives where people belong. We activate ambassadors, campus guilds, and creators who convert curiosity into long-term utility adoption.'
  },
  {
    icon: '🧭',
    title: 'How to Join a Campaign',
    body: 'Pick a live mission, scan a QR in the wild, or join our Discord to complete proof-of-action quests that unlock rewards, experiences, and governance.'
  }
];

export default function VisitorEducation() {
  return (
    <section id="learn" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🎓 Web3 Playbook
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Web3, Explained for Humans
        </motion.h2>
        <motion.p
          style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Whether you are minting your first wallet or running the next flagship campaign, this primer keeps you oriented. Explore the basics, see why communities power adoption, and jump into the next activation.
        </motion.p>
      </div>

      <div className="responsive-grid wide-columns">
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.title}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'var(--glass-highlight)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem'
            }}>
              {topic.icon}
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>{topic.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{topic.body}</p>
            <motion.a
              href="#portfolio"
              whileHover={{ x: 6 }}
              style={{
                color: 'var(--accent-teal)',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              Explore live campaigns →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
