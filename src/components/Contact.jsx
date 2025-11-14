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
    background: 'linear-gradient(135deg, rgba(5, 242, 219, 0.12) 0%, rgba(1, 58, 66, 0.6) 100%)',
    border: '1px solid rgba(5, 242, 219, 0.24)',
    borderRadius: '16px',
    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(22px)',
    WebkitBackdropFilter: 'blur(22px)',
    position: 'relative',
    overflow: 'hidden'
  };

  const liquidInputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'linear-gradient(135deg, rgba(1, 35, 38, 0.55) 0%, rgba(1, 58, 66, 0.35) 100%)',
    border: '1px solid rgba(5, 242, 219, 0.2)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    transition: 'all 0.3s ease'
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
    <section id="contact" className="section animate-on-scroll" style={{ 
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="section-header animate-on-scroll" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-badge animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          📬 Get In Touch
        </motion.div>
        <motion.h2
          className="animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's Build Something Amazing Together
        </motion.h2>
        <motion.p
          className="animate-on-scroll"
          style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Ready to scale your Web3 project in India? Reach out to us and let's discuss how we can help you grow.
        </motion.p>
      </div>

      <div className="animate-on-scroll" style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>

        {/* Contact Form */}
        <motion.div
          className="animate-on-scroll"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} style={{
            ...liquidCardStyle,
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: 500
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
                style={{
                  ...liquidInputStyle
                }}
                placeholder="you@company.com"
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(5, 242, 219, 0.2)')}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: 500
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
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(5, 242, 219, 0.2)')}
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
              >
                Request a call-back
              </motion.button>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                💬 Expect a calendar link and next steps from our team within 24 hours.
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
            <p style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Join the channels operators use for daily playbook drops, sprint recaps, and AMA invites.
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
                  background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.18) 0%, rgba(1, 35, 38, 0.4) 100%)',
                  border: '1px solid rgba(88, 101, 242, 0.25)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#5865F2" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600 }}>Discord</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Join daily founder AMAs</div>
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
                  background: 'linear-gradient(135deg, rgba(0, 136, 204, 0.2) 0%, rgba(1, 35, 38, 0.4) 100%)',
                  border: '1px solid rgba(0, 136, 204, 0.26)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0088CC" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600 }}>Telegram</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Chat with operators in real time</div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
