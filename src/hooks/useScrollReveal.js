import { useEffect } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

export default function useScrollReveal(options = {}) {
  useEffect(() => {
    const mergedOptions = { ...defaultOptions, ...options };
    const elements = document.querySelectorAll('.animate-on-scroll');

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, mergedOptions);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [options]);
}
