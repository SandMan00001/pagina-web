import React from 'react';
import { Card } from '../components/Card';
import { CyberIndicator } from '../components/CyberIndicator';
import { ShieldCheck, Lock, Server, Code, Smartphone, Zap, TrendingUp, Users, MessageCircle } from 'lucide-react';
import { Chip } from '../components/Chip';

export const Servizi: React.FC = () => {
  const technologies = ['React', 'TypeScript', 'Node.js', 'Next.js', 'Vite', 'TailwindCSS'];

  return (
    <div className="container section-padding" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
      
      {/* Cybersecurity Section */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
          <CyberIndicator status="secure" label="CYBERSECURITY" />
          <h2 className="headline-lg" style={{ marginTop: 'var(--spacing-sm)' }}>Sicurezza Incrollabile</h2>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '600px', margin: 'var(--spacing-xs) auto 0' }}>
            Proteggiamo la tua infrastruttura digitale con soluzioni all'avanguardia.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
          <Card title="Audit di Sicurezza">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <ShieldCheck size={32} color="var(--color-primary)" />
              <p>Valutazione completa delle vulnerabilità dei tuoi sistemi e applicazioni.</p>
            </div>
          </Card>
          <Card title="Protezione Dati">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Lock size={32} color="var(--color-primary)" />
              <p>Crittografia avanzata e policy di accesso per garantire che i tuoi dati sensibili rimangano protetti.</p>
            </div>
          </Card>
          <Card title="Infrastruttura Resiliente">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Server size={32} color="var(--color-primary)" />
              <p>Progettazione di reti sicure e sistemi di backup per la business continuity.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Web Development Section */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
          <CyberIndicator status="processing" label="WEB DEVELOPMENT" />
          <h2 className="headline-lg" style={{ marginTop: 'var(--spacing-sm)' }}>Sviluppo Web Moderno</h2>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '600px', margin: 'var(--spacing-xs) auto 0' }}>
            Creiamo esperienze digitali fluide, veloci e accessibili. Architetture scalabili.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-sm)' }}>
          <Card title="Web Apps Scalabili">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Zap size={32} color="var(--color-secondary)" />
              <p>Applicazioni web performanti basate sulle ultime tecnologie, ottimizzate per la velocità.</p>
            </div>
          </Card>
          <Card title="Design Responsive">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Smartphone size={32} color="var(--color-secondary)" />
              <p>Interfacce fluide che si adattano perfettamente a qualsiasi dispositivo, da desktop a mobile.</p>
            </div>
          </Card>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {technologies.map(tech => (
            <Chip key={tech} label={tech} icon={<Code size={12}/>} />
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
          <CyberIndicator status="live" label="SOCIAL MEDIA" />
          <h2 className="headline-lg" style={{ marginTop: 'var(--spacing-sm)' }}>Connetti e Cresci</h2>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '600px', margin: 'var(--spacing-xs) auto 0' }}>
            Strategie social creative basate sui dati per costruire una community solida.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
          <Card title="Strategia Contenuti">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <TrendingUp size={32} color="var(--color-tertiary)" />
              <p>Pianificazione editoriale orientata agli obiettivi aziendali per massimizzare la portata organica.</p>
            </div>
          </Card>
          <Card title="Community Management">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Users size={32} color="var(--color-tertiary)" />
              <p>Gestione attiva delle interazioni per costruire relazioni di fiducia con i follower.</p>
            </div>
          </Card>
          <Card title="Campagne Ads">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <MessageCircle size={32} color="var(--color-tertiary)" />
              <p>Ottimizzazione di campagne pubblicitarie per raggiungere il target ideale e incrementare conversioni.</p>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};
