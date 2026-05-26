import React from 'react';

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ label, icon }) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        background: 'var(--color-surface-container)',
        border: '1px solid var(--color-outline-variant)',
        borderRadius: 'var(--rounded-full)',
        color: 'var(--color-on-surface-variant)',
        fontSize: '12px',
        fontFamily: 'var(--font-family-body)',
        fontWeight: 500,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--color-surface-container-high)';
        e.currentTarget.style.borderColor = 'var(--color-outline)';
        e.currentTarget.style.color = 'var(--color-on-surface)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--color-surface-container)';
        e.currentTarget.style.borderColor = 'var(--color-outline-variant)';
        e.currentTarget.style.color = 'var(--color-on-surface-variant)';
      }}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center', color: 'var(--color-secondary)' }}>{icon}</span>}
      {label}
    </span>
  );
};
