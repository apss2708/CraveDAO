import { useEffect, useMemo, useRef, useState } from 'react';

export default function useSectionProgress(sectionIds = [], options = {}) {
  const visitedRef = useRef(new Set());
  const [visitedSnapshot, setVisitedSnapshot] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  const threshold = options.threshold ?? 0.4;
  const rootMargin = options.rootMargin ?? '0px 0px -30%';

  const idsKey = useMemo(() => sectionIds.join('|'), [sectionIds]);

  useEffect(() => {
    visitedRef.current = new Set();
    setVisitedSnapshot([]);
    setActiveSection(null);

    if (!sectionIds.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting, intersectionRatio } = entry;
          if (!target?.id) return;

          if (isIntersecting && intersectionRatio >= threshold) {
            visitedRef.current.add(target.id);
            setVisitedSnapshot(Array.from(visitedRef.current));
            setActiveSection(target.id);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [idsKey, threshold, rootMargin]);

  return {
    visitedCount: visitedSnapshot.length,
    totalCount: sectionIds.length,
    visitedIds: visitedSnapshot,
    activeSection
  };
}
