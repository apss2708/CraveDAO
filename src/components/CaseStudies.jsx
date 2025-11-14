import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import {
  FiActivity,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiExternalLink,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const studies = [
  {
    title: 'Aptos Winter School',
    result: '3,400+ wallets activated across two hybrid residencies',
    description: 'Blended campus residencies with Discord builder cohorts and OEM sampling touchpoints to unlock verified adoption.',
    duration: '6-week hybrid residency',
    playbook: 'Campus x Creator Activation',
    reportLink: 'mailto:ops@cravedao.xyz?subject=Aptos%20winter%20school%20report',
    impact: [
      { icon: FiUsers, label: 'Wallets Activated', value: '3,400+' },
      { icon: FiActivity, label: 'Cohort Retention', value: '72%' },
      { icon: FiTrendingUp, label: 'Net Promoter Score', value: '91%' }
    ],
    kpis: [
      { label: 'Wallet Activations', value: 86 },
      { label: 'Repeat Participation', value: 72 },
      { label: 'Partner Co-funding', value: 64 }
    ]
  },
  {
    title: 'Base Builder League',
    result: '2.8x ROI on creator-led onboarding sprint',
    description: 'Creator collectives translated the Base roadmap into snackable rituals and measurable FMCG brand integrations.',
    duration: '5-week sprint',
    playbook: 'Creator x OEM Alliances',
    reportLink: 'mailto:ops@cravedao.xyz?subject=Base%20builder%20league%20report',
    impact: [
      { icon: FiTrendingUp, label: 'Campaign ROI', value: '2.8x' },
      { icon: FiTarget, label: 'Conversion Lift', value: '+41%' },
      { icon: FiUsers, label: 'Creators Activated', value: '320' }
    ],
    kpis: [
      { label: 'Creator Engagement', value: 78 },
      { label: 'Content Completion', value: 83 },
      { label: 'Event-to-DAO Conversion', value: 61 }
    ]
  },
  {
    title: 'Polygon Guild India',
    result: 'Coordinated 18 multi-city events with 94% NPS',
    description: 'Campus guilds, hackathon build weeks, and OEM rewards funnelled mission-critical user actions back to protocol dashboards.',
    duration: 'Quarterly program',
    playbook: 'Guild Network x OEM Rewards',
    reportLink: 'mailto:ops@cravedao.xyz?subject=Polygon%20guild%20india%20report',
    impact: [
      { icon: FiActivity, label: 'Cities Activated', value: '18' },
      { icon: FiTrendingUp, label: 'Program NPS', value: '94%' },
      { icon: FiUsers, label: 'Community Leads', value: '1,200+' }
    ],
    kpis: [
      { label: 'Attendance Conversion', value: 88 },
      { label: 'Post-Event Retention', value: 74 },
      { label: 'Brand Recall', value: 69 }
    ]
  }
];

const progressBarStyles = {
  progressBarBase: {
    width: '100%',
    height: '10px',
    borderRadius: '999px',
    background: 'var(--glass-highlight)',
    overflow: 'hidden'
  },
  value: (value) => ({
    width: `${value}%`,
    height: '100%',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-royal) 100%)'
  })
};

export default function CaseStudies() {
  useScrollReveal();

  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section id="case-studies" className="section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-header animate-on-scroll">
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🧪 Case Study Carousel
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Playbooks That Turn Trust into Traction
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mission: Deploy flagship experiences that convert curiosity into retained users. Proof: Each sprint is measured against conversion bars the VC committee already tracks. Invitation: Slide through recent wins and imagine your roadmap inside the next carousel slot.
        </motion.p>
      </div>

      <div className="case-slider-nav animate-on-scroll">
        <motion.button
          ref={navPrevRef}
          type="button"
          className="case-nav-button"
          onClick={() => swiperRef.current?.slidePrev()}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous case study"
        >
          <FiArrowLeft size={18} />
        </motion.button>
        <motion.button
          ref={navNextRef}
          type="button"
          className="case-nav-button"
          onClick={() => swiperRef.current?.slideNext()}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next case study"
        >
          <FiArrowRight size={18} />
        </motion.button>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        spaceBetween={40}
        breakpoints={{
          0: { slidesPerView: 1 },
          900: { slidesPerView: 2 }
        }}
        style={{ paddingBottom: '3rem' }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {studies.map((study) => (
          <SwiperSlide key={study.title}>
            <motion.div
              className="case-impact-item animate-on-scroll"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                border: '1px solid var(--glass-border)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="case-impact-grid">
                {study.impact.map((impact) => (
                  <div className="impact-pill" key={impact.label}>
                    <impact.icon size={18} aria-hidden="true" />
                    <div>
                      <span className="impact-pill__label">{impact.label}</span>
                      <span className="impact-pill__value">{impact.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.5rem' }}>{study.title}</h3>
                <p style={{ color: 'var(--accent-teal)', fontWeight: 600, marginBottom: '1rem' }}>{study.result}</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{study.description}</p>
              </div>

              <div className="case-meta">
                <div className="case-meta__item">
                  <FiCalendar size={16} aria-hidden="true" />
                  <span>{study.duration}</span>
                </div>
                <div className="case-meta__item">
                  <FiLayers size={16} aria-hidden="true" />
                  <span>{study.playbook}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {study.kpis.map((kpi) => (
                  <div key={kpi.label}>
                    <div className="case-kpi-row">
                      <span className="case-kpi-label">{kpi.label}</span>
                      <span className="case-kpi-value">
                        <CountUp end={kpi.value} duration={1.6} suffix="%" />
                      </span>
                    </div>
                    <div style={progressBarStyles.track}>
                      <div style={progressBarStyles.value(kpi.value)} />
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                href={study.reportLink}
                whileHover={{ x: 6 }}
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  color: 'var(--accent-teal)',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                View campaign scorecard <FiExternalLink aria-hidden="true" />
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
