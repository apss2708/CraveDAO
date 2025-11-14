import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🏗️',
    title: 'Infrastructure Development',
    description: 'Build on robust blockchain infrastructure with multi-chain support and enterprise-grade security.'
  },
  {
    icon: '👥',
    title: 'Community Growth',
    description: 'Access India\'s largest Web3 community with proven engagement and growth strategies.'
  },
  {
    icon: '🎓',
    title: 'Education & Training',
    description: 'Comprehensive blockchain education programs tailored for developers and businesses.'
  },
  {
    icon: '🤝',
    title: 'Strategic Partnerships',
    description: 'Connect with top blockchain protocols and industry leaders for collaborative growth.'
  },
  {
    icon: '📈',
    title: 'Growth Marketing',
    description: 'Data-driven marketing strategies to drive user acquisition and project visibility.'
  },
  {
    icon: '💼',
    title: 'Investment Support',
    description: 'Access to funding opportunities and investor networks for scalable projects.'
  }
];

export default function Features() {
  return (
    <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(108, 99, 255, 0.03) 0%, transparent 50%)',
        zIndex: 0
      }} />

      <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          💼 Our Services
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Enterprise-Grade Web3 Solutions
        </motion.h2>
        <motion.p
          style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Comprehensive services designed to accelerate your Web3 journey with proven methodologies and expert guidance.
        </motion.p>
      </div>

      <div className="grid-3" style={{ position: 'relative', zIndex: 1 }}>
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              width: '60px',
              height: '60px',
              background: 'rgba(212, 175, 55, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {feature.icon}
            </div>
            <h3 style={{ 
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontSize: '1.3rem'
            }}>
              {feature.title}
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Accents */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          borderRadius: '50%',
          zIndex: 0
        }}
      />
    </section>
  );
}