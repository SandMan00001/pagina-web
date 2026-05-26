import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    borderRadius: 'var(--rounded-default)',
    fontFamily: 'var(--font-family-body)',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    outline: 'none',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(90deg, var(--color-secondary), var(--color-tertiary))',
          color: 'var(--color-on-primary)',
          boxShadow: '0 4px 15px rgba(165, 231, 255, 0.2)',
        };
      case 'secondary':
        return {
          background: 'transparent',
          border: '1px solid var(--color-outline-variant)',
          color: 'var(--color-secondary)',
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: 'var(--color-on-surface)',
        };
      default:
        return {};
    }
  };

  return (
    <button
      style={{ ...baseStyles, ...getVariantStyles() }}
      className={`btn-${variant} ${className}`}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(165, 231, 255, 0.4)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--color-secondary)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(165, 231, 255, 0.2)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(165, 231, 255, 0.2)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--color-outline-variant)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
