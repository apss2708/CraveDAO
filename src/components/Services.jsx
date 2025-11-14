import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import useScrollReveal from '../hooks/useScrollReveal';

const kpis = [
  {
    icon: '🔐',
    title: 'Wallet Openings & Activations',
    description: 'Guided onboarding journeys that turn curiosity into verified wallets.',
    metric: { value: 48, suffix: '%', caption: 'activation uplift vs baseline launches' },
    playbooks: ['Campus drives with QR-based wallet setup', 'Creator-led walkthroughs', 'Discord missions with live support']
  },
  {
    icon: '🧭',
    title: 'User Signups & Funnels',
    description: 'Full-funnel flows that convert signups across on-chain and off-chain surfaces.',
    metric: { value: 62, suffix: '%', caption: 'lead-to-activation conversion rate' },
    playbooks: ['Microsite quests and referral programs', 'Event-integrated lead capture', 'Step-by-step WhatsApp nurture journeys']
  },
  {
    icon: '📈',
    title: 'Community Growth & Retention',
    description: 'Sustained participation through hybrid online-offline programming.',
    metric: { value: 3.4, suffix: 'x', decimals: 1, caption: 'average LTV vs acquisition cost' },
    playbooks: ['Discord and Telegram retention cohorts', 'Weekly competitions and AMAs', 'College fest integrations with builder tracks']
  },
  {
    icon: '🎯',
    title: 'Brand Reach & Recall',
    description: 'Cross-industry campaigns that make Web3 relatable for mainstream audiences.',
    metric: { value: 74, suffix: '%', caption: 'post-campaign aided recall uplift' },
    playbooks: ['Creator storytelling with everyday utility hooks', 'OEM co-branded sampling experiences', 'Multi-channel content drips synced to KPIs']
  }
];

const serviceMetrics = [
  {
    value: 48,
    suffix: '%',
    headline: 'Wallet Activation Uplift',
    subcopy: 'versus baseline product launches'
  },
  {
    value: 3.6,
    suffix: 'x',
    headline: 'Average Campaign ROI',
    subcopy: 'tracked on verified user actions'
  },
  {
    value: 65,
    suffix: '%',
    headline: 'Repeat Participation',
    subcopy: 'returning community members per sprint'
  }
];

export default function Services() {
  useScrollReveal();

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleIndex = (index) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="services" className="section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-overlay section-overlay--services" aria-hidden="true" />
      <div className="section-header">
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          📊 Performance Infrastructure Layer
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          KPIs We Deliver and Measure
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mission: Make every activation accountable to the right north-star metric. Proof: We wire dashboards into wallet funnels, ambassador actions, and OEM co-funding in real time. Invitation: Anchor your roadmap to metrics the investment committee already tracks and watch campaigns graduate from experiments to engines.
        </motion.p>
      </div>

      <div className="hero-metrics animate-on-scroll" style={{ marginBottom: '2.5rem' }}>
        {serviceMetrics.map((metric, idx) => (
          <motion.div
            key={metric.headline}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ minWidth: '180px' }}
          >
            <div style={{
              fontSize: '2.1rem',
              fontWeight: 700,
              color: 'var(--accent-teal)',
              marginBottom: '0.35rem'
            }}>
              <CountUp
                end={metric.value}
                duration={2}
                decimals={metric.value % 1 !== 0 ? 1 : 0}
                suffix={metric.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)'
            }}>
              {metric.headline}
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              marginTop: '0.5rem'
            }}>
              {metric.subcopy}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="responsive-grid wide-columns animate-on-scroll">
        {kpis.map((kpi, idx) => (
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
              borderLeft: '3px solid var(--accent-royal)',
              position: 'relative'
            }}
          >
            <div style={{
              fontSize: '2.25rem',
              marginBottom: '1.5rem',
              width: '60px',
              height: '60px',
              background: 'var(--glass-highlight)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--glow-royal)'
            }}>
              {kpi.icon}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <span style={{
                fontSize: '1.85rem',
                fontWeight: 700,
                color: 'var(--accent-teal)'
              }}>
                <CountUp
                  end={kpi.metric.value}
                  duration={2}
                  decimals={kpi.metric.decimals ?? (Number.isInteger(kpi.metric.value) ? 0 : 1)}
                  suffix={kpi.metric.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {kpi.metric.caption}
              </span>
            </div>
            <h3 style={{ 
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontSize: '1.3rem'
            }}>
              {kpi.title}
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: 1.6
            }}>
              {kpi.description}
            </p>
            <motion.button
              className="btn-secondary"
              onClick={() => toggleIndex(idx)}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '0.5rem'
              }}
            >
              <span>View Playbooks</span>
              <motion.span
                animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {expandedIndex === idx && (
                <motion.ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                  }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {kpi.playbooks.map((play, playIdx) => (
                    <li key={playIdx} style={{ marginBottom: '0.65rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-teal)', fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                      <span>{play}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

