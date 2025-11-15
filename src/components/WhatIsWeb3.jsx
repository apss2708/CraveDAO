import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Web3 in Plain Language',
    description: 'Digital ownership stitched to human rituals. Wallets, tokens and credentials that feel as intuitive as tapping a UPI QR.',
    link: '#investors',
    cta: 'See proof in our investor deck'
  },
  {
    title: 'Why India Leads',
    description: 'Campus guilds, creators and OEM alliances co-create trust. We convert curiosity into retained users across 2,500+ micro-communities.',
    link: '#metrics',
    cta: 'Review live metrics'
  },
  {
    title: 'How to Plug In',
    description: 'Scan a mission, join a residency, or co-host an OEM activation. Every playbook is modular and backed by transparent reporting.',
    link: '#contact',
    cta: 'Schedule a discovery call'
  }
];

export default function WhatIsWeb3() {
  return (
    <section id="learn" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🌍 Web3 for Humans
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Understand the Movement in Three Cards
        </motion.h2>
        <motion.p
          style={{ maxWidth: '720px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Visitors and investors get the same primer: what Web3 unlocks, why India is fertile ground, and how CraveDAO orchestrates trusted adoption paths.
        </motion.p>
      </div>

      <div className="responsive-grid">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3>{card.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{card.description}</p>
            <motion.a
              href={card.link}
              whileHover={{ x: 6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 600,
                color: 'var(--accent-teal)',
                textDecoration: 'none'
              }}
            >
              {card.cta} →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
