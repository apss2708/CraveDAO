import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const liquidCardStyle = {
    background:
      'radial-gradient(circle at top, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.96) 55%, rgba(15, 23, 42, 0.98) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.65)',
    borderRadius: '20px',
    boxShadow: '0 24px 60px rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    position: 'relative',
    overflow: 'hidden'
  };

  const liquidInputStyle = {
    width: '100%',
    padding: '12px 16px',
    background:
      'radial-gradient(circle at top, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.9) 65%)',
    border: '1px solid rgba(148, 163, 184, 0.55)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '0.98rem',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    transition: 'all 0.25s ease'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: wire up to backend / form service
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="section animate-on-scroll"
      style={{ position: 'relative', overflow: 'hidden' }}
      data-testid="contact-section"
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 620,
          height: 620,
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="section-header animate-on-scroll" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Plan Your Next Growth Sprint with CraveDAO
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Share a few lines about your roadmap and KPIs. Our team will respond with a calendar link and
          clear next steps within one business day.
        </motion.p>
      </div>

      <div
        className="animate-on-scroll"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Contact Form */}
        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              ...liquidCardStyle,
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            data-testid="contact-form"
          >
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  fontSize: '0.92rem'
                }}
              >
                Work Email *
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ ...liquidInputStyle }}
                placeholder="you@company.com"
                onFocus={(e) => (e.target.style.borderColor = 'rgba(56, 189, 248, 0.9)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(148, 163, 184, 0.55)')}
                data-testid="contact-email-input"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                  fontSize: '0.92rem'
                }}
              >
                How can we help? *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                style={{
                  ...liquidInputStyle,
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
                placeholder="Share the project goal, launch timeline, or KPIs you're chasing"
                onFocus={(e) => (e.target.style.borderColor = 'rgba(56, 189, 248, 0.9)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(148, 163, 184, 0.55)')}
                data-testid="contact-message-input"
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <motion.button
                type="submit"
                className="btn-cta"
                style={{ width: '100%' }}
                whileTap={{ scale: 0.98 }}
                data-testid="contact-submit-button"
              >
                Request a Call-back
              </motion.button>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Expect a calendar link and next steps from our team within one business day.
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          <div
            style={{
              ...liquidCardStyle,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <h3
              style={{
                color: 'var(--text-primary)',
                fontSize: '1.2rem'
              }}
            >
              Connect With Us
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}
            >
              Join the channels operators use for playbook drops, sprint recaps and AMA invites.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.a
                href="https://discord.gg/CraveDAO"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background:
                    'linear-gradient(135deg, rgba(88, 101, 242, 0.18) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  border: '1px solid rgba(88, 101, 242, 0.5)',
                  borderRadius: '14px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  transition: 'all 0.25s ease'
                }}
                data-testid="contact-discord-link"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#5865F2" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600 }}>Discord</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Join founder AMAs and ops recaps
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://t.me/CraveDAO"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background:
                    'linear-gradient(135deg, rgba(14, 165, 233, 0.22) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.5)',
                  borderRadius: '14px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  transition: 'all 0.25s ease'
                }}
                data-testid="contact-telegram-link"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0EA5E9" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600 }}>Telegram</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Coordinate campaigns in real time
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background:
                    'linear-gradient(135deg, rgba(34, 197, 94, 0.22) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  border: '1px solid rgba(34, 197, 94, 0.55)',
                  borderRadius: '14px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  transition: 'all 0.25s ease'
                }}
                data-testid="contact-whatsapp-link"
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2
                  }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="#022C22"
                      d="M20.52 3.48A11.78 11.78 0 0012 0a11.94 11.94 0 00-10.38 17.63L0 24l6.54-1.71A11.94 11.94 0 0012 24h.01A12 12 0 0024 12a11.66 11.66 0 00-3.48-8.52zm-8.5 18a9.93 9.93 0 01-5.06-1.39l-.36-.21-3.88 1 1.04-3.78-.25-.39A10 10 0 1112 21.48zm5.48-7.3c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8.15 8.15 0 01-2.4-1.48 9 9 0 01-1.66-2.06c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52a2 2 0 00.3-.5.56.56 0 000-.54c-.08-.15-.67-1.62-.92-2.23s-.49-.5-.67-.51h-.57a1.1 1.1 0 00-.8.38A3.37 3.37 0 006.1 9.1a5.88 5.88 0 001.24 3.08 13.34 13.34 0 005.12 4.5 5.54 5.54 0 003.32.7 2.83 2.83 0 001.86-1.32 2.3 2.3 0 00.16-1.32c-.07-.12-.27-.2-.57-.34z"
                    />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>WhatsApp</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Quick coordination with operators
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://twitter.com/CraveDAO"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background:
                    'linear-gradient(135deg, rgba(148, 163, 184, 0.22) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  border: '1px solid rgba(148, 163, 184, 0.6)',
                  borderRadius: '14px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  transition: 'all 0.25s ease'
                }}
                data-testid="contact-twitter-link"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#F9FAFB" aria-hidden="true">
                  <path d="M18.9 3H21l-5.1 5.8L21.8 21h-4.8l-3.8-6.2L9 21H3l5.6-6.4L3.2 3h4.8l3.4 5.5L18.9 3z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600 }}>X (Twitter)</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Follow campaign stories and updates
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
