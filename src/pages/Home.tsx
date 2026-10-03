import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Home: React.FC = () => {
  useSEO({
    title: "FounDreams - Realizzazione Siti Web e Sicurezza Informatica",
    description: "FounDreams realizza siti web professionali ad alte prestazioni, gestisce pagine social con strategie data-driven e offre consulenza IT in ambito DevOps, cloud e cybersecurity.",
    keywords: [
      "sogno", "fucina di sogni", "fucina dei sogni", "foundreams", "sogni digitali",
      "realizzazione siti web", "sicurezza informatica", "creazione siti internet",
      "sviluppo siti web milano", "cybersecurity consulenza", "gestione social media",
      "social media manager", "consulenza devops", "cloud solutions", "siti web professionali",
      "creazione siti web", "sogni che diventano realtà", "trasformazione digitale",
      "cyber security italia", "sviluppo software"
    ],
    structuredData: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('');
  const [modalForm, setModalForm] = useState({ nome: '', email: '', idea: '' });
  const [modalStatus, setModalStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selectedBundle, setSelectedBundle] = useState<'startup' | 'business' | 'enterprise'>('startup');

  const bundleDetails = {
    startup: {
      color: 'primary',
      features: ['Sito Web Vetrina (fino a 5 pagine)', 'SEO Base e Ottimizzazione Performance', 'Gestione 2 Canali Social (3 post/settimana)', 'Setup Sicurezza Base (SSL, Antispam)', 'Supporto via Email'],
      icon: 'rocket_launch',
      glow: 'shadow-primary/20'
    },
    business: {
      color: 'secondary',
      features: ['Sito Web Corporate o E-commerce Base', 'SEO Avanzata e Blog Setup', 'Gestione Completa Social e Ads Base', 'Sicurezza Pro (WAF, Backup Giornalieri)', 'Supporto Prioritario'],
      icon: 'trending_up',
      glow: 'shadow-secondary/20'
    },
    enterprise: {
      color: 'tertiary',
      features: ['Piattaforma Web Custom / Web App', 'Strategia Omnichannel e Lead Generation', 'Architettura Cloud e DevOps', 'Cybersecurity Avanzata e Penetration Testing', 'Account Manager Dedicato 24/7'],
      icon: 'shield_person',
      glow: 'shadow-tertiary/20'
    }
  };

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
    setModalStatus('idle');
  };
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus('sending');
    const emails = 'amministrazione@foundreams.it,gabriele.saija@foundreams.it,mykol.acquaotta@foundreams.it';
    const subject = encodeURIComponent(`Richiesta - ${modalType}`);
    const body = encodeURIComponent(`Nome: ${modalForm.nome}\nContatto: ${modalForm.email}\n\nMessaggio:\n${modalForm.idea}`);
    setTimeout(() => {
      window.location.href = `mailto:${emails}?subject=${subject}&body=${body}`;
      setModalStatus('success');
      setTimeout(() => { closeModal(); setModalStatus('idle'); }, 2500);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="overflow-x-clip bg-surface">
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[calc(100vh-72px)] flex items-center pt-10 pb-20 overflow-hidden px-6 lg:px-16 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary-container/10 blur-[140px] rounded-full animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-tertiary-container/30 blur-[140px] rounded-full animate-pulse-glow"></div>
          </div>
          <div className="max-w-5xl mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high shadow-inner text-xs font-label tracking-wide text-secondary mb-8 border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
              <span>Visione, Tecnologia, Sicurezza</span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl leading-tight tracking-tight text-on-surface">
              L'incontro tra <span className="bg-gradient-to-r from-secondary via-primary to-tertiary bg-clip-text text-transparent">Creatività</span> e Sicurezza.
            </h1>
            <p className="text-on-surface-variant font-body text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              FounDreams è la fucina dove le idee si trasformano in realtà digitali. Creiamo esperienze web uniche, gestiamo la tua identità e proteggiamo il tuo business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => openModal('Richiesta Contatto Generica')} className="w-full sm:w-auto px-8 py-4 rounded-full font-label font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-secondary-container to-tertiary text-on-primary-container shadow-[0_0_20px_rgba(0,210,255,0.25)] hover:shadow-[0_0_28px_rgba(209,188,255,0.4)] hover:brightness-110 active:scale-95 transition-all">
                Inizia il tuo Progetto
              </button>
              <Link to="/chi-siamo" className="w-full sm:w-auto px-8 py-4 rounded-full border border-outline-variant text-on-surface font-label font-bold text-xs uppercase tracking-wider hover:bg-surface-container-high transition-all active:scale-95 text-center">
                Scopri chi siamo
              </Link>
            </div>
          </div>
        </section>

        {/* SERVIZI CARDS */}
        <section className="px-6 lg:px-16 py-24 bg-surface scroll-reveal transition-all duration-700 opacity-0 translate-y-10 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <span className="text-xs font-label uppercase font-bold tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">Le Nostre Competenze</span>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-on-surface mt-6">Soluzioni su Misura per il Tuo Business</h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="relative rounded-3xl p-8 bg-surface-container-low border border-primary/20 shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col group overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">Siti Web ad Alte Prestazioni</h3>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed flex-grow">
                Realizziamo piattaforme web che non sono solo belle, ma veloci e ottimizzate. Ogni linea di codice è scritta pensando alla scalabilità e all'esperienza utente finale.
              </p>
            </div>
            
            <div className="relative rounded-3xl p-8 bg-surface-container-low border border-secondary/20 shadow-2xl hover:shadow-secondary/10 transition-all duration-300 flex flex-col group overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/20 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">campaign</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">Social Media Strategy</h3>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed flex-grow">
                Gestiamo la tua voce digitale. Dalla creazione di contenuti visivi alla strategia di crescita organica, portiamo il tuo brand dove si trovano i tuoi clienti.
              </p>
            </div>
            
            <div className="relative rounded-3xl p-8 bg-surface-container-low border border-tertiary/20 shadow-2xl hover:shadow-tertiary/10 transition-all duration-300 flex flex-col group overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-tertiary/20 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-tertiary/15 text-tertiary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">Consulenza &amp; Protezione</h3>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed flex-grow">
                Trasformiamo il tuo IT in un vantaggio competitivo. Progettiamo, automatizziamo e proteggiamo infrastrutture cloud e ibride per azzerare i disservizi e ridurre i costi.
              </p>
            </div>
          </div>
        </section>

        {/* PACCHETTI / BUNDLES */}
        <section className="px-6 lg:px-16 py-24 bg-surface-container-lowest scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <span className="text-xs font-label uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Soluzioni Chiavi in Mano</span>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-on-surface mt-6">Soluzioni su Misura</h2>
            <p className="text-on-surface-variant font-body text-base mt-4 max-w-2xl mx-auto">Scegli la combinazione perfetta per le tue esigenze o costruisci un pacchetto personalizzato con il nostro team.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {(['startup', 'business', 'enterprise'] as const).map((b) => (
              <button 
                key={b}
                onClick={() => setSelectedBundle(b)}
                className={`relative p-6 rounded-2xl text-left border transition-all duration-300 ${selectedBundle === b ? 'bg-surface-container-high border-secondary shadow-[0_0_20px_rgba(var(--color-secondary),0.2)]' : 'bg-surface-container-low border-outline-variant/30 hover:bg-surface-container hover:border-outline-variant/60'}`}
              >
                <div className="flex items-center gap-3 mb-3 text-secondary">
                  <span className="material-symbols-outlined text-2xl">{bundleDetails[b].icon}</span>
                  <h3 className="font-headline font-bold text-xl text-on-surface capitalize">
                    {b === 'startup' ? 'Startup Bundle' : b === 'business' ? 'Business Evolution' : 'Enterprise Safe'}
                  </h3>
                </div>
                <p className="text-xs font-label text-on-surface-variant">
                  {b === 'startup' ? "L'essenziale per partire subito forti." : b === 'business' ? "Per chi vuole scalare il mercato." : "Massima sicurezza e personalizzazione."}
                </p>
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 bg-surface-container border border-secondary/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <h3 className="font-headline font-bold text-2xl mb-8 text-on-surface">Caratteristiche Incluse:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {bundleDetails[selectedBundle].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-xl shrink-0">check_circle</span>
                  <span className="font-body text-sm text-on-surface leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center relative z-10">
              <button onClick={() => openModal(`Preventivo ${selectedBundle}`)} className="px-8 py-4 rounded-full font-label font-bold text-xs uppercase tracking-wider bg-secondary text-on-secondary hover:brightness-110 shadow-lg active:scale-95 transition-all">
                Richiedi Preventivo
              </button>
            </div>
          </div>
        </section>

      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md" onClick={closeModal}>
          <div className="relative w-full max-w-lg rounded-3xl bg-surface-container-high border border-outline-variant/40 p-6 sm:p-8 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" onClick={closeModal}>
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <div className="text-left">
              <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">FounDreams Space</span>
              <h3 className="font-headline font-bold text-2xl text-on-surface mt-1">Richiedi Informazioni</h3>
            </div>
            {modalStatus === 'success' ? (
              <div className="text-center py-8 space-y-2 mt-6">
                <span className="material-symbols-outlined text-secondary text-[48px] animate-bounce">check_circle</span>
                <h4 className="font-headline font-bold text-xl text-on-surface">Candidatura Ricevuta!</h4>
                <p className="text-on-surface-variant">Ti risponderemo prestissimo.</p>
              </div>
            ) : (
              <form className="mt-6 space-y-4 text-left" onSubmit={handleModalSubmit}>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5" htmlFor="founder-name">Il tuo Nome</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary text-sm" id="founder-name" required type="text" value={modalForm.nome} onChange={(e) => setModalForm(prev => ({...prev, nome: e.target.value}))} />
                </div>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5" htmlFor="founder-contact">Email</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary text-sm" id="founder-contact" required type="email" value={modalForm.email} onChange={(e) => setModalForm(prev => ({...prev, email: e.target.value}))} />
                </div>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5" htmlFor="founder-idea">Messaggio</label>
                  <textarea className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary text-sm resize-none" id="founder-idea" required rows={3} value={modalForm.idea} onChange={(e) => setModalForm(prev => ({...prev, idea: e.target.value}))} />
                </div>
                <button className="w-full py-4 rounded-full font-label font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-secondary-container via-secondary to-tertiary text-on-secondary shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2" type="submit" disabled={modalStatus === 'sending'}>
                  <span>{modalStatus === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}</span>
                  <span className="material-symbols-outlined text-base">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
