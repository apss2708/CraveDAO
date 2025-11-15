// Ambassador.jsx
import React from 'react';
import { motion } from 'framer-motion';

const advantages = [
  {
    icon: '🛠️',
    title: 'Full-stack Growth Infrastructure',
    description: 'From insight to execution — CraveDAO designs, activates, and measures every step of your Web3 India playbook.',
    bullets: ['Campaign ideation to post-mortem dashboards', 'Multi-channel orchestration across campuses, creators, OEMs', 'Hands-on program management with verified teams']
  },
  {
    icon: '🤝',
    title: 'Trust as a Service (TaaS)',
    description: 'We embed Web3 brands into familiar Web2 environments so adoption feels credible and inevitable.',
    bullets: ['Brand collaborations with FMCG and lifestyle leaders', 'Co-branded experiences that mirror mainstream touchpoints', 'Proof of trust layered into every activation']
  },
  {
    icon: '📊',
    title: 'Performance-first Approach',
    description: 'Every campaign is benchmarked to KPIs that founders and investors care about.',
    bullets: ['Wallets, signups, retention, sentiment improvements', 'Auditable data pipelines spanning on-chain and off-chain sources', 'Transparent reporting that scales with your roadmap']
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Community at Core',
    description: 'Human-first execution keeps users engaged long after the campaign ends.',
    bullets: ['Residencies, cohorts, and premium meetups for builders', 'Always-on Discord, Telegram, and campus communities', 'Advocacy loops that convert early adopters into evangelists']
  }
];

export default function Ambassador() {
  return (
    <section id="ambassador" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-header">
        <motion.div className="section-badge" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          🧩 The CraveDAO Advantage
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Why Ecosystems Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)' }}
        >
          CraveDAO stands at the intersection of trust, community, and access. We translate decentralized innovation into tangible, human experiences that compound over time.
        </motion.p>
      </div>

      <div className="advantage-grid">
        {advantages.map((advantage, idx) => (
          <motion.div
            key={idx}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'rgba(5, 242, 219, 0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              marginBottom: '1.25rem'
            }}>
              {advantage.icon}
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{advantage.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>{advantage.description}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {advantage.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '1rem', lineHeight: 1 }}>•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}