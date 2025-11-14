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

  const roundedPercentage = useMemo(() => Math.min(100, Math.max(0, Math.round(percentage))), [percentage]);

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
        {trackedSections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '999px',
              border: '1px solid var(--badge-border)',
              background: 'var(--badge-bg)',
              color: 'var(--text-primary)',
              fontWeight: 600
            }}
          >
            {roundedPercentage}% explored
          </motion.div>
        )}
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