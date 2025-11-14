import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FiActivity,
  FiClock,
  FiGlobe,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const metrics = [
  {
    icon: FiUsers,
    label: 'College Communities Activated',
    value: 300,
    suffix: '+',
    insight: 'Human-led campus nodes delivering go-to-market proof across India.',
    delta: '+18% QoQ',
    audit: 'Verified CRM export'
  },
  {
    icon: FiTrendingUp,
    label: 'Verified Creators in Network',
    value: 2,
    suffix: 'K+',
    insight: 'Storytellers translating on-chain utility for mainstream audiences.',
    delta: '+420 new this quarter',
    audit: 'Klear / TagMango sync'
  },
  {
    icon: FiGlobe,
    label: 'Cumulative Partner Reach',
    value: 500,
    suffix: 'M+',
    insight: 'OEM and brand alliances extending trust into everyday life.',
    delta: '+62M since January',
    audit: 'OEM distribution panels'
  },
  {
    icon: FiTarget,
    label: 'Average Campaign ROI',
    value: 3.6,
    suffix: 'x',
    decimals: 1,
    insight: 'Performance dashboards aligned with investor-grade reporting.',
    delta: 'Audited',
    audit: 'Reviewed by Deloitte node'
  }
];

const dashboardSignals = [
  {
    title: 'Acquisition Velocity',
    value: '+18.4%',
    context: 'Monthly growth in verified wallet activations',
    badge: 'On Target'
  },
  {
    title: 'Retention Health',
    value: '92.1%',
    context: 'Community rituals with >3 touchpoints per month',
    badge: 'Healthy'
  },
  {
    title: 'Campaigns In Flight',
    value: '14',
    context: 'Active sprints across Aptos, Base, Polygon cohorts',
    badge: 'Live Ops'
  }
];

export default function LiveMetrics() {
  useScrollReveal();

  const [activeSignal, setActiveSignal] = useState(0);

  const signalSequence = useMemo(() => dashboardSignals, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signalSequence.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [signalSequence.length]);

  const currentSignal = signalSequence[activeSignal];

  return (
    <section id="metrics" className="section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-overlay section-overlay--metrics" aria-hidden="true" />
      <div className="section-header animate-on-scroll">
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          📊 Live Metrics Dashboard
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Proof That Travels from Boardroom to Community
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our operators manage a shared analytics layer across campus rollouts, creator missions, and OEM alliances. These heartbeat metrics refresh live and frame the investor narrative before we ship the next sprint.
        </motion.p>
      </div>

      <motion.div
        className="dashboard-panel card-glass animate-on-scroll"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="dashboard-panel__header">
          <div className="dashboard-panel__title">
            <FiActivity size={20} />
            <span>Live Ops Pulse</span>
          </div>
          <div className="dashboard-panel__status">
            <span className="live-dot" aria-hidden="true" />
            Verified 4 min ago
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSignal.title}
            className="dashboard-panel__content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="signal-title">{currentSignal.title}</div>
            <div className="signal-stat">
              <span>{currentSignal.value}</span>
              <span className="signal-badge">{currentSignal.badge}</span>
            </div>
            <p className="signal-meta">{currentSignal.context}</p>
          </motion.div>
        </AnimatePresence>

        <div className="dashboard-panel__footer">
          <a
            className="btn-link"
            href="mailto:ops@cravedao.xyz?subject=Live%20Campaign%20Snapshot%20Request"
          >
            View real-time campaign snapshot ↗
          </a>
          <div className="dashboard-panel__legend">
            <FiClock size={16} aria-hidden="true" />
            Updates every 5 minutes
          </div>
        </div>
      </motion.div>

      <div className="metric-grid-wrapper animate-on-scroll">
        <div className="metric-grid">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              className="card-glass card-glass--metric animate-on-scroll"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.015 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55, ease: 'easeOut' }}
            >
              <div className="card-glass__icon" aria-hidden="true">
                <metric.icon size={26} />
              </div>
              <div className="metric-delta">
                <span className="metric-delta__value">{metric.delta}</span>
                <span className="metric-delta__note">{metric.audit}</span>
              </div>
              <div>
                <div className="metric-value">
                  <CountUp
                    end={metric.value}
                    duration={2}
                    decimals={metric.decimals ?? 0}
                    suffix={metric.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
              <p className="metric-insight">{metric.insight}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{
          marginTop: '2.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}
      >
        <a className="btn-cta" href="#contact" style={{ textDecoration: 'none' }}>
          Book Live Analytics Review
        </a>
        <a className="btn-secondary" href="#case-studies" style={{ textDecoration: 'none' }}>
          Download Reporting Sample
        </a>
        <a
          className="btn-link btn-link--inline"
          href="mailto:ops@cravedao.xyz?subject=Live%20Campaign%20Snapshot%20Request"
        >
          Real-time campaign snapshots ↗
        </a>
      </motion.div>
    </section>
  );
}
