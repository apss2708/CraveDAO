import React from 'react';
import { motion } from 'framer-motion';

const channels = [
  {
    title: 'College Community Network',
    icon: '🎓',
    description: 'Active presence across 300+ Indian colleges with verified student leads and ambassadors.',
    capabilities: [
      'Workshops, wallet onboarding, and live activations with measurable conversions',
      'Sampling-style Web3 quests and NFT drops in controlled campus environments',
      'Always-on student communities for sustained engagement'
    ]
  },
  {
    title: 'Creator Community Network',
    icon: '🎤',
    description: '2,000+ verified creators across tech, culture, finance, gaming, and lifestyle segments.',
    capabilities: [
      'Narrative-led storytelling across short-form, live streams, and serialized formats',
      'Distributed influencer pipeline covering micro to regional creators',
      'Organic content formats that translate Web3 utility into everyday culture'
    ]
  },
  {
    title: 'OEM & Brand Partnerships',
    icon: '🤝',
    description: 'Embedded access to FMCG, lifestyle and tech OEM partners for cross-industry collaborations.',
    capabilities: [
      'Co-branded campaigns that merge Web3 activations with familiar Web2 experiences',
      'Pop-ups, sampling programs, and ATL integrations exceeding 500M cumulative reach',
      'Trust-by-association for projects entering mainstream India'
    ]
  }
];

export default function Framework() {
  return (
    <section id="framework" className="section" style={{ background: 'var(--secondary-dark)' }}>
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🧭 Infrastructure Advantage
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Human Interaction Layer
        </motion.h2>
        <motion.p
          style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mission: Build a predictable bridge between protocols and people. Proof: Our three-channel framework synchronizes college guilds, creator collectives, and OEM alliances with measurable KPIs. Invitation: Choose the channel mix that matches your go-to-market, then plug into operators who already have the keys to the community.
        </motion.p>
      </div>

      <div className="grid-2">
        {channels.map((channel, idx) => (
          <motion.div
            key={idx}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -5,
              borderLeftColor: 'var(--accent-magenta)'
            }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{
              borderLeft: '3px solid var(--accent-cyan)',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '2rem',
                width: '60px',
                height: '60px',
                background: 'rgba(217, 4, 142, 0.15)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {channel.icon}
              </div>
              <div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{channel.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{channel.description}</p>
              </div>
            </div>
            
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              color: 'var(--text-muted)'
            }}>
              {channel.capabilities.map((capability, capabilityIdx) => (
                <li key={capabilityIdx} style={{ 
                  marginBottom: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>•</span> {capability}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
