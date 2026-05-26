import React from 'react';
import { ShieldCheck, Activity, Zap } from 'lucide-react';

export type IndicatorStatus = 'secure' | 'live' | 'processing';

interface CyberIndicatorProps {
  status: IndicatorStatus;
  label?: string;
}

export const CyberIndicator: React.FC<CyberIndicatorProps> = ({ status, label }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'secure':
        return {
          icon: <ShieldCheck size={16} />,
          color: '#4ade80', // neon green
          glow: 'rgba(74, 222, 128, 0.4)',
          text: 'Secure',
        };
      case 'live':
        return {
          icon: <Activity size={16} />,
          color: 'var(--color-secondary)', // electric blue
          glow: 'rgba(165, 231, 255, 0.4)',
          text: 'Live',
        };
      case 'processing':
        return {
          icon: <Zap size={16} />,
          color: 'var(--color-tertiary)', // vivid violet
          glow: 'rgba(209, 188, 255, 0.4)',
          text: 'Processing',
        };
    }
  };

  const config = getStatusConfig();
  const displayLabel = label || config.text;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '4px 12px',
        background: 'rgba(0,0,0,0.3)',
        border: `1px solid ${config.color}`,
        borderRadius: 'var(--rounded-sm)',
        color: config.color,
        fontFamily: 'var(--font-family-mono)',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        boxShadow: `0 0 8px ${config.glow}, inset 0 0 4px ${config.glow}`,
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {config.icon}
      </span>
      <span>{displayLabel}</span>
    </div>
  );
};
