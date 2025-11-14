// Partnerships.jsx
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Polygon', logo: '🔷' },
  { name: 'Solana', logo: '🟣' },
  { name: 'Ethereum', logo: '🔶' },
  { name: 'Avalanche', logo: '🔴' },
];

export default function Partnerships() {
  return (
    <section className="section">
      <div className="section-header">
        <motion.div className="section-badge" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          🤝 Partners & Backers
        </motion.div>
        <h2>Trusted by Leading Protocols</h2>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {partners.map((partner, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              padding: '2rem'
            }}
          >
            <div style={{ fontSize: '3rem' }}>{partner.logo}</div>
            <p style={{ fontWeight: 600 }}>{partner.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}