import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const partnerLogos = [
  { name: 'Polygon Guild', initials: 'PG' },
  { name: 'Solana India', initials: 'SI' },
  { name: 'Base Builder League', initials: 'BB' },
  { name: 'Near Campus', initials: 'NC' },
  { name: 'CoinDCX Campus', initials: 'CC' }
];

const testimonials = [
  {
    quote: 'CraveDAO activated the right student founders and finished the residency with actionable metrics investors could trust.',
    name: 'Aparna Mehra',
    title: 'Head of Ecosystem, Polygon Guild India'
  },
  {
    quote: 'They stitched community rituals with OEM partnerships that onboarded users who stayed beyond the campaign.',
    name: 'Rahul S.',
    title: 'Program Manager, Base Builder League'
  }
];

export default function PartnersTestimonials() {
  return (
    <section id="partners" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🤝 Trusted by Ecosystems
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Partners Who Ship With CraveDAO
        </motion.h2>
        <motion.p
          style={{ maxWidth: '720px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From protocol ecosystems to OEM alliances, operators trust us to turn playbooks into measurable conversions. Here are a few who have built with us.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          marginBottom: '2.5rem',
          padding: '1.5rem 0'
        }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          loop
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 32 }
          }}
          style={{ paddingBottom: '0.5rem' }}
        >
          {partnerLogos.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div
                className="card"
                style={{
                  minHeight: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.15rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                {partner.initials}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="responsive-grid" style={{ gap: '2.5rem' }}>
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            className="card-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontStyle: 'normal' }}
          >
            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
              “{item.quote}”
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontWeight: 600 }}>{item.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.title}</span>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
