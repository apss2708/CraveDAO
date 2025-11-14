import React from 'react';
import { motion } from 'framer-motion';
import useProgressTracker from '../hooks/useProgressTracker';

export default function ProgressTracker({ sections = [] }) {
  const { percentage, badges } = useProgressTracker(sections);

  if (!sections.length) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        minWidth: '180px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <span>Journey</span>
        <span>{percentage}% explored</span>
      </div>
      <div style={{
        width: '100%',
        height: '6px',
        borderRadius: '999px',
        background: 'var(--glass-highlight)',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            height: '100%',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-royal) 100%)'
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '0.35rem' }}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: badge.visited ? 'var(--accent-teal)' : 'rgba(90, 127, 200, 0.35)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
