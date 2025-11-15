import React, { Suspense, lazy } from 'react';

import DecorativeElements from './components/DecorativeElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InvestorSnapshot from './components/InvestorSnapshot';

import './styles/global.css';
 
const About = lazy(() => import('./components/About'));
const ValueProps = lazy(() => import('./components/ValueProps'));
const LiveMetrics = lazy(() => import('./components/LiveMetrics'));
const Services = lazy(() => import('./components/Services'));
const Impact = lazy(() => import('./components/Impact'));
const VisitorEducation = lazy(() => import('./components/VisitorEducation'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Partners = lazy(() => import('./components/Partners'));
const Ambassador = lazy(() => import('./components/Ambassador'));
const Events = lazy(() => import('./components/Events'));
const Community = lazy(() => import('./components/Community'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const Framework = lazy(() => import('./components/Framework'));
const GoToMarket = lazy(() => import('./components/GoToMarket'));

const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'problem', label: 'Problem' },
  { id: 'framework', label: 'Framework' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
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

          <div className="seamless-section seamless-section--about">
            <About />
          </div>

          <div className="seamless-section seamless-section--problem">
            <ProblemSolution />
          </div>

          <div className="seamless-section seamless-section--framework">
            <Framework />
          </div>

          <div className="seamless-section seamless-section--gtm">
            <GoToMarket />
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

          <div className="seamless-section seamless-section--impact">
            <Impact />
          </div>

          <div className="seamless-section seamless-section--learn">
            <VisitorEducation />
          </div>

          <div className="seamless-section seamless-section--portfolio">
            <Portfolio />
          </div>

          <div className="seamless-section seamless-section--partners">
            <Partners />
          </div>

          <div className="seamless-section seamless-section--ambassador">
            <Ambassador />
          </div>

          <div className="seamless-section seamless-section--events">
            <Events />
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