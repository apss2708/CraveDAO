import React from 'react';
import { motion } from 'framer-motion';

const caseStudy = {
  client: 'Aptos Winter School',
  summary: 'Aptos partnered with CraveDAO to expand its Indian footprint through education, engagement, and onboarding experiences that merge online and on-ground momentum.',
  execution: [
    'Two multi-week Winter Schools across major universities and digital communities',
    'Learning + hackathon format with dedicated mentorship and project scouting',
    'Powered by student ambassadors, builder cohorts, and verified partner channels'
  ],
  impact: [
    '50M+ impressions across organic, paid, and hybrid touchpoints',
    'Thousands of students onboarded through verified wallet creations',
    'Persistent builder pipeline unlocked for Aptos in India'
  ],
  integration: [
    'Swiggy x Aptos co-branded hackathon experience drove 100K+ unique impressions',
    'Late-night hackathon drops and reward giveaways delivered Web2 familiarity with Web3 discovery',
    'Set a benchmark for trust-bridging collaborations between global protocols and Indian consumer brands'
  ]
};

const proofPoints = [
  {
    title: 'Full-stack Execution',
    bullets: ['College activations', 'Creator storytelling', 'OEM co-branding']
  },
  {
    title: 'Performance Infrastructure',
    bullets: ['Multi-source KPI dashboards', 'Wallet + signup verification', 'Investor-ready reporting']
  },
  {
    title: 'Community Flywheel',
    bullets: ['Residencies and cohorts', 'Hybrid meetups', 'Long-term retention loops']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{ background: 'var(--primary-dark)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, rgba(212, 175, 55, 0.02) 0%, transparent 50%)',
        zIndex: 0
      }} />

      <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🏆 Case Study Spotlight
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Aptos Winter School — Trust to Traction
        </motion.h2>
        <motion.p
          style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          See how CraveDAO’s hybrid infrastructure turned a flagship education series into a benchmark for Web2–Web3 trust bridging and measurable growth.
        </motion.p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <motion.div
          className="card-elegant"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ padding: '2.5rem', position: 'relative' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '6px 16px',
            background: 'rgba(108, 99, 255, 0.1)',
            borderRadius: '999px',
            marginBottom: '1.25rem',
            color: 'var(--accent-cyan)',
            fontWeight: 600,
            letterSpacing: '0.03em'
          }}>
            <span role="img" aria-label="spark">✨</span> Flagship Execution
          </div>

          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.75rem' }}>{caseStudy.client}</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>{caseStudy.summary}</p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Execution Overview</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {caseStudy.execution.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Impact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {caseStudy.impact.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Integration Highlight — Swiggy x Aptos</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {caseStudy.integration.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card-elegant"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <h4 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>Why It Worked</h4>
          {proofPoints.map((proof, idx) => (
            <div key={idx} style={{ border: '1px solid rgba(5, 242, 219, 0.15)', borderRadius: '12px', padding: '1rem', background: 'rgba(2, 83, 115, 0.12)' }}>
              <h5 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>{proof.title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {proof.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} style={{ marginBottom: '0.35rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{ marginTop: 'auto', padding: '1.25rem', borderRadius: '12px', background: 'rgba(255, 215, 0, 0.08)', color: 'var(--accent-gold)' }}>
            <strong>Outcome:</strong> Aptos is now recognized as a builder-first chain in India with sustained campus demand and an always-on pipeline of vetted projects.
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: '4rem', position: 'relative', zIndex: 1 }}
      >
        <button className="btn-secondary" style={{ padding: '12px 32px' }}>
          View All Projects
        </button>
      </motion.div>
    </section>
  );
}