import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const API_BASE = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;

export default function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!API_BASE) {
      setStatus({ type: 'error', message: 'Backend URL is not configured.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          source: 'website_contact'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit. Please try again.');
      }

      setStatus({ type: 'success', message: 'Thanks for reaching out — we will get back to you shortly.' });
      setFormData({ email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
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
                disabled={submitting}
                data-testid="contact-submit-button"
              >
                {submitting ? 'Sending…' : 'Request a Call-back'}
              </motion.button>
              {status.type && (
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: status.type === 'success' ? '#4ADE80' : '#FCA5A5'
                  }}
                  data-testid="contact-status-message"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>

        {/* Social links column stays the same as before */}
        {/* ... existing social cards from your previous implementation ... */}
      </div>
    </section>
  );
}
