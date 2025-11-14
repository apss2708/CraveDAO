import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSolution() {
  return (
    <section id="problem" className="section" style={{ background: 'var(--secondary-dark)', position: 'relative' }}>
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          💡 The Problem We're Solving
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The Necessity of a Human Interaction Layer in Web3
        </motion.h2>
        <motion.p
          style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mission: Translate frontier protocols into trusted, human-first rituals. Proof: Data-backed campaigns reveal exactly where adoption stalls and how to reignite it. Invitation: Walk this journey with us and see how every activation compounds into long-term community equity.
        </motion.p>
      </div>

      <div className="grid-2" style={{ gap: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elegant"
        >
          <h3 style={{ color: 'var(--accent-pink)', marginBottom: '1.5rem', textShadow: '0 4px 16px rgba(217, 4, 142, 0.4)' }}>The Problem</h3>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1rem' }}>
              Web3 has matured technologically yet still struggles with:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[ 
                '🚪 Limited real user onboarding beyond vanity impressions',
                '🤝 Low trust and recall among mainstream, non-crypto audiences',
                '🌐 Fragmented access to authentic Indian communities and channels'
              ].map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              "Growth demands more than impressions — it needs human-led trust, proof, and access."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elegant"
        >
          <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', textShadow: '0 4px 16px rgba(5, 242, 219, 0.4)' }}>Our Solution</h3>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>CraveDAO builds the human distribution layer for Web3</strong> by blending data-backed execution with verified communities to deliver:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                '✅ Real user actions at scale through college, creator, and cohort activations',
                '🔒 Trust and mainstream recall via OEM and lifestyle brand collaborations',
                '♾️ Long-term engagement through curated events, residencies, and builder programs'
              ].map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '1rem', color: 'var(--accent-gold)' }}>
              Our mission is to make Web3 adoption mainstream through measurable, trustworthy, and human-first experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
