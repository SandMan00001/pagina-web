import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className = '' }) => {
  return (
    <div
      className={`glass-card ${className}`}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--rounded-lg)',
        padding: 'var(--spacing-md)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sm)',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-interactive)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {title && (
        <h3
          className="headline-md"
          style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-on-surface)' }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: 'var(--color-on-surface-variant)' }}>
        {children}
      </div>
    </div>
  );
};
