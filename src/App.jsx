import React, { Suspense, lazy } from 'react';

import DecorativeElements from './components/DecorativeElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InvestorSnapshot from './components/InvestorSnapshot';

import './styles/global.css';

const ValueProps = lazy(() => import('./components/ValueProps'));
const LiveMetrics = lazy(() => import('./components/LiveMetrics'));
const Services = lazy(() => import('./components/Services'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Partners = lazy(() => import('./components/Partners'));
const Community = lazy(() => import('./components/Community'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'investors', label: 'Investors' },
  { id: 'value', label: 'Value' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'services', label: 'Services' },
  { id: 'community', label: 'Community' },
  { id: 'contact', label: 'Contact' }
];

const SECTION_ORDER = NAVIGATION_ITEMS.map((item) => item.id);

function App() {
  return (
    <div className="App" style={{
      background: `linear-gradient(180deg, 
        var(--primary-dark) 0%, 
        var(--secondary-dark) 20%, 
        var(--primary-dark) 40%,
        var(--tertiary-dark) 60%,
        var(--secondary-dark) 80%,
        var(--primary-dark) 100%
      )`,
      minHeight: '100vh'
    }}>
      <DecorativeElements />
      <Navbar navItems={NAVIGATION_ITEMS} sections={SECTION_ORDER} />
      <main style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Hero Section - starts the flow */}
        <Hero />

        <Suspense fallback={<div className="section-loading" aria-live="polite">Loading CraveDAO experience…</div>}>
          <div className="seamless-section seamless-section--investor">
            <InvestorSnapshot />
          </div>

          <div className="seamless-section seamless-section--value">
            <ValueProps />
          </div>

          <div className="seamless-section seamless-section--metrics">
            <LiveMetrics />
          </div>

          <div className="seamless-section seamless-section--services">
            <Services />
          </div>

          <div className="seamless-section seamless-section--cases">
            <CaseStudies />
          </div>

          <div className="seamless-section seamless-section--partners">
            <Partners />
          </div>

          <div className="seamless-section seamless-section--community">
            <Community />
          </div>

          <div className="seamless-section seamless-section--contact">
            <Contact />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;