import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import useProgressTracker from '../hooks/useProgressTracker';

const defaultNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'investors', label: 'Investors' },
  { id: 'problem', label: 'Problem' },
  { id: 'framework', label: 'Framework' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'services', label: 'Services' },
  { id: 'learn', label: 'Learn Web3' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'partners', label: 'Partners' },
  { id: 'community', label: 'Community' },
  { id: 'ambassador', label: 'Ambassador' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ navItems = defaultNavItems, sections = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const derivedNavItems = useMemo(
    () => (navItems.length ? navItems : defaultNavItems),
    [navItems]
  );

  const trackedSections = useMemo(
    () => (sections.length ? sections : derivedNavItems.map((item) => item.id)),
    [sections, derivedNavItems]
  );

  const { percentage, activeSection } = useProgressTracker(trackedSections, {
    threshold: 0.35,
    rootMargin: '0px 0px -35%'
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: scrolled ? 'rgba(10, 15, 45, 0.95)' : 'rgba(10, 15, 45, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--accent-gold) 0%, #FFE55C 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          CraveDAO
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        {derivedNavItems.map((item) => {
          const isActive = activeSection ? activeSection === item.id : item.id === derivedNavItems[0]?.id;
          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(item.id);
                setMobileMenuOpen(false);
              }}
              className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
              whileHover={{ color: 'var(--accent-gold)' }}
              style={{
                color: isActive ? 'var(--accent-teal)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: isActive ? 600 : 500,
                transition: 'color 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                paddingBottom: '0.25rem'
              }}
            >
              {item.label}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: '2px',
                  background: isActive ? 'linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-royal) 100%)' : 'transparent',
                  borderRadius: '999px',
                  transition: 'background 0.3s ease'
                }}
              />
            </motion.a>
          );
        })}
        <div className="nav-social">
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            className="nav-social__icon nav-social__icon--whatsapp"
            aria-label="WhatsApp"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#25D366"
                d="M20.52 3.48A11.78 11.78 0 0012 0a11.94 11.94 0 00-10.38 17.63L0 24l6.54-1.71A11.94 11.94 0 0012 24h.01A12 12 0 0024 12a11.66 11.66 0 00-3.48-8.52zm-8.5 18a9.93 9.93 0 01-5.06-1.39l-.36-.21-3.88 1 1.04-3.78-.25-.39A10 10 0 1112 21.48zm5.48-7.3c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8.15 8.15 0 01-2.4-1.48 9 9 0 01-1.66-2.06c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52a2 2 0 00.3-.5.56.56 0 000-.54c-.08-.15-.67-1.62-.92-2.23s-.49-.5-.67-.51h-.57a1.1 1.1 0 00-.8.38A3.37 3.37 0 006.1 9.1a5.88 5.88 0 001.24 3.08 13.34 13.34 0 005.12 4.5 5.54 5.54 0 003.32.7 2.83 2.83 0 001.86-1.32 2.3 2.3 0 00.16-1.32c-.07-.12-.27-.2-.57-.34z"
              />
            </svg>
          </motion.a>
          <motion.a
            href="https://discord.gg/CraveDAO"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            className="nav-social__icon"
            aria-label="Discord"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://t.me/CraveDAO"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            className="nav-social__icon"
            aria-label="Telegram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0088CC">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://twitter.com/CraveDAO"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            className="nav-social__icon"
            aria-label="Twitter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        whileTap={{ scale: 0.95 }}
        className={`mobile-menu-btn ${mobileMenuOpen ? 'is-active' : ''}`}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        type="button"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </motion.button>

      {/* Mobile Navigation */}
      <motion.div
        id="mobile-navigation"
        className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav--open' : ''}`}
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -12, pointerEvents: 'none' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        role="dialog"
        aria-modal="false"
      >
        <span className="sr-only">Main navigation</span>
        {derivedNavItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo(item.id);
              setMobileMenuOpen(false);
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              color: activeSection === item.id ? 'var(--accent-teal)' : 'var(--text-primary)'
            }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
}