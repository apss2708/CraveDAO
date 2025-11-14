import { useMemo } from 'react';
import useSectionProgress from './useSectionProgress';

export default function useProgressTracker(sectionIds = [], options = {}) {
  const progress = useSectionProgress(sectionIds, options);

  const percentage = useMemo(() => {
    if (!progress.totalCount) return 0;
    return Math.round((progress.visitedCount / progress.totalCount) * 100);
  }, [progress.totalCount, progress.visitedCount]);

  const badges = useMemo(() => {
    return sectionIds.map((id) => ({
      id,
      visited: progress.visitedIds?.includes(id)
    }));
  }, [sectionIds, progress.visitedIds]);

  return {
    ...progress,
    percentage,
    badges,
    activeSection: progress.activeSection
  };
}
