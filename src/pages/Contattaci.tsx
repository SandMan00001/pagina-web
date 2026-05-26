import React from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { CyberIndicator } from '../components/CyberIndicator';
import { Send } from 'lucide-react';

export const Contattaci: React.FC = () => {
  return (
    <div className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <CyberIndicator status="live" label="GET IN TOUCH" />
        <h1 className="display-lg" style={{ marginTop: 'var(--spacing-sm)' }}>Parlaci del tuo Progetto</h1>
        <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '600px', margin: 'var(--spacing-xs) auto 0' }}>
          Siamo pronti ad ascoltarti e a trasformare la tua visione digitale in realtà. Compila il form qui sotto per iniziare.
        </p>
      </div>

      <div 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          background: 'var(--glass-bg)', 
          backdropFilter: 'var(--glass-blur)', 
          WebkitBackdropFilter: 'var(--glass-blur)', 
          border: '1px solid var(--glass-border)', 
          borderRadius: 'var(--rounded-xl)', 
          padding: 'var(--spacing-md)',
          boxShadow: 'var(--shadow-interactive)'
        }}
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
            <InputField label="Nome Completo" type="text" placeholder="Es. Mario Rossi" />
            <InputField label="Azienda" type="text" placeholder="La tua azienda" />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
            <InputField label="Email" type="email" placeholder="mario.rossi@esempio.com" />
            <InputField label="Telefono" type="tel" placeholder="+39 000 0000000" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', width: '100%', textAlign: 'left' }}>
            <label className="label-md" style={{ color: 'var(--color-on-surface)' }}>
              Messaggio o Dettagli del Progetto
            </label>
            <textarea 
              rows={5}
              placeholder="Descrivi brevemente di cosa hai bisogno..."
              style={{
                background: 'var(--color-surface-container-high)',
                border: '1px solid var(--color-outline-variant)',
                borderRadius: 'var(--rounded-default)',
                padding: '12px 16px',
                color: 'var(--color-on-surface)',
                fontFamily: 'var(--font-family-body)',
                fontSize: '16px',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-secondary)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-outline-variant)'}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--spacing-sm)' }}>
            <Button variant="primary" type="submit">
              Invia Messaggio <Send size={18} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
