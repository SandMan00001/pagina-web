import React, { useState } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, id, className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', width: '100%', textAlign: 'left' }} className={className}>
      <label htmlFor={inputId} className="label-md" style={{ color: 'var(--color-on-surface)' }}>
        {label}
      </label>
      <input
        id={inputId}
        onFocus={(e) => {
          setIsFocused(true);
          if (props.onFocus) props.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (props.onBlur) props.onBlur(e);
        }}
        style={{
          background: 'var(--color-surface-container-high)',
          border: `1px solid ${isFocused ? 'var(--color-secondary)' : 'var(--color-outline-variant)'}`,
          borderRadius: 'var(--rounded-default)',
          padding: '12px 16px',
          color: 'var(--color-on-surface)',
          fontFamily: 'var(--font-family-body)',
          fontSize: '16px',
          outline: 'none',
          transition: 'all 0.3s ease',
          boxShadow: isFocused ? '0 0 8px rgba(165, 231, 255, 0.3)' : 'none',
        }}
        {...props}
      />
    </div>
  );
};
