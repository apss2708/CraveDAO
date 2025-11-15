import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const snapshot = [
  {
    label: 'Team',
    points: [
      'Operator bench across community building, product growth, and GTM strategy',
      'Embedded squads in 18+ multi-quarter campaigns since 2023',
      'Founder-operator network translating protocol roadmaps for India'
    ]
  },
  {
    label: 'Traction',
    points: [
      '2,500+ campus nodes, 2K+ verified creators, 500M+ OEM reach',
      'Average 3.6x ROI on performance-linked campaign cohorts',
      'Live dashboards share wallet, signup, and retention metrics with LPs'
    ]
  },
  {
    label: 'Roadmap',
    points: [
      'Expanding residency programs into tier-2 cities and OEM alliances',
      'Scaling investor co-pilots with shared analytics and playbook IP',
      'Building repeatable blueprints for protocol-to-India market entry'
    ]
  }
];

export default function InvestorSnapshot() {
  useScrollReveal();

  return (
    <section id="investors" className="section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-overlay section-overlay--investor" aria-hidden="true" />
      <div className="section-header animate-on-scroll">
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          📈 Investor Snapshot
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Underwrite the Human Distribution Layer
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We package team, traction, and roadmap proof points for every investor conversation. Use this panel as your quick diligence snapshot before diving into dashboards.
        </motion.p>
      </div>

      <div className="responsive-grid wide-columns animate-on-scroll">
        {snapshot.map((item, index) => (
          <motion.div
            key={item.label}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div style={{
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }}>
              {item.label}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '0.75rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              {item.points.map((point) => (
                <li key={point} style={{ display: 'flex', gap: '0.65rem' }}>
                  <span style={{ color: 'var(--accent-teal)' }}>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}
      >
        <a
          className="btn-cta"
          href="/CraveDAO_Investor_Overview.pdf"
          style={{ textDecoration: 'none' }}
        >
          Get Investor Overview
        </a>
        <a
          className="btn-secondary"
          href="#contact"
          style={{ textDecoration: 'none' }}
        >
          Book Investor Call
        </a>
      </motion.div>
    </section>
  );
}
