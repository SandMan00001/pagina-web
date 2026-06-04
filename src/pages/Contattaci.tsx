import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Contattaci: React.FC = () => {
  const location = useLocation();
  const selectedPackage = location.state?.package as string | undefined;

  useSEO({
    title: "Contattaci - FounDreams | Richiedi un Preventivo Gratuito",
    description: "Contatta il team di FounDreams per lo sviluppo del tuo nuovo sito web, la gestione dei canali social o consulenze IT. Preventivi rapidi e gratuiti.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://foundreams.it/contattaci",
      "name": "Contattaci",
      "description": "Form di contatto per richiedere informazioni e preventivi personalizzati a FounDreams.",
      "publisher": {
        "@id": "https://foundreams.it/#organization"
      }
    }
  });


  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: selectedPackage ? `Richiesta preventivo per ${selectedPackage}` : '',
    messaggio: selectedPackage ? `Ciao! Sono interessato al pacchetto ${selectedPackage}. Vorrei ricevere maggiori informazioni.` : ''
  });

  useEffect(() => {
    // Parallax mousemove effect for glass cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      cards.forEach(card => {
        const speed = 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        (card as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const emails = [
      'amministrazione@foundreams.it',
      'gabriele.saija@foundreams.it',
      'mykol.acquaotta@foundreams.it'
    ].join(',');
    
    const subject = encodeURIComponent(formData.oggetto || 'Richiesta di contatto - FounDreams');
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `Email mittente: ${formData.email}\n\n` +
      `Messaggio:\n${formData.messaggio}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${emails}?subject=${subject}&body=${body}`;
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          nome: '',
          email: '',
          oggetto: '',
          messaggio: ''
        });
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pt-xl md:pt-32 pb-xl overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop mb-xl">
        <div className="max-w-4xl mx-auto text-center space-y-md">
          <h1 className="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg text-gradient leading-tight">
            Hai un sogno nel cassetto per il tuo business? <br className="hidden md:block" />Raccontacelo.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Il team di FounDreams è pronto a realizzarlo. Uniamo eccellenza tecnica e innovazione visionaria per dare forma al tuo futuro digitale.
          </p>
        </div>
      </section>

      {/* Main Content (Bento Style) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-4 space-y-gutter">
          <div className="glass-card p-md rounded-xl transition-transform duration-200">
            <div className="flex items-center gap-sm mb-base text-primary">
              <span className="material-symbols-outlined font-fill-1">rocket_launch</span>
              <span className="font-label-md text-label-md uppercase tracking-widest">profili social</span>
            </div>
            <div className="font-body-md text-on-surface flex items-center gap-2">
              @foundreams
            </div>
          </div>
          <div className="glass-card p-md rounded-xl transition-transform duration-200">
            <div className="flex items-center gap-sm mb-base text-secondary">
              <span className="material-symbols-outlined font-fill-1">alternate_email</span>
              <span className="font-label-md text-label-md uppercase tracking-widest">Contatti Diretti</span>
            </div>
            <div className="font-body-md text-on-surface space-y-xs">
              <div>info@foundreams.tech</div>
              <div className="pt-xs">
                <div>+39 366 319 2578</div>
                <div>+39 380 379 1477</div>
              </div>
            </div>
          </div>
          {/* Abstract Decorative Card */}
          <div className="relative overflow-hidden rounded-xl h-48 group">
            <img 
              alt="Cybersecurity interface" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-ycS70scNdm_ywugDKTgfO28kXhcadcDbzUgA6omaPftXpM_YK3CDaDic5-RtDATsykSWPxEn0oRqw5e2Ee0urs6KltkXSC6aNL_3amZD1iT9yQ4D8uDNWZ0gn2YbwhK1pFDU0qfGhwKjdhw7TVky4Nc-8T2-oYohrAxwuRAod0wvQpqq7CChb3RPdOAKw_v7GeYaWLCahlJDZ61SGgk8R2PgVr7oRx4U58wKcEkiqOyaskvD8Pw-UUe_Zo-gRQ_eXmq4fFhikPZ" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            <div className="absolute bottom-base left-base">
              <span className="bg-secondary-container/20 backdrop-blur-md text-secondary text-[10px] px-sm py-xs rounded-full border border-secondary/30">
                CONSULENZA GRATUITA
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-8 glass-card p-lg rounded-xl transition-transform duration-200">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-md" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Nome</label>
              <input 
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-container border border-outline-variant rounded-lg p-sm text-on-surface placeholder:text-on-surface-variant/40" 
                placeholder="Mario Rossi" 
                type="text" 
              />
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Email</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-container border border-outline-variant rounded-lg p-sm text-on-surface placeholder:text-on-surface-variant/40" 
                placeholder="mario@esempio.it" 
                type="email" 
              />
            </div>
            <div className="md:col-span-2 space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Oggetto</label>
              <input 
                name="oggetto"
                value={formData.oggetto}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-container border border-outline-variant rounded-lg p-sm text-on-surface placeholder:text-on-surface-variant/40" 
                placeholder="Come possiamo aiutarti?" 
                type="text" 
              />
            </div>
            <div className="md:col-span-2 space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Messaggio</label>
              <textarea 
                name="messaggio"
                value={formData.messaggio}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-container border border-outline-variant rounded-lg p-sm text-on-surface placeholder:text-on-surface-variant/40 resize-none" 
                placeholder="Descrivi il tuo sogno o la tua esigenza tecnica..." 
                rows={6}
              />
            </div>
            <div className="md:col-span-2 pt-base">
              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full md:w-auto font-label-md text-label-md px-xl py-md rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95 cyber-glow ${
                  formStatus === 'success' 
                    ? 'bg-secondary-container text-[#003543]' 
                    : 'cta-gradient text-on-primary'
                }`}
              >
                {formStatus === 'idle' && 'Invia Messaggio'}
                {formStatus === 'sending' && 'Invio in corso...'}
                {formStatus === 'success' && 'Messaggio Inviato!'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Brand Trust / Logos */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl text-center">
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg opacity-60">Alcune Tecnologie che utilizziamo</p>
        <div className="flex flex-wrap justify-center gap-xl opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-headline-md">Azure</span>
          <span className="font-headline-md">Python</span>
          <span className="font-headline-md">AWS</span>
          <span className="font-headline-md">Typescript</span>
          <span className="font-headline-md">Kubernetes</span>
          <span className="font-headline-md">Proxmox</span>
        </div>
        <div className="flex flex-wrap justify-center gap-xl opacity-30 grayscale hover:grayscale-0 transition-all duration-500 mt-lg">
          <span className="font-headline-md text-on-surface-variant">WordPress</span>
          <span className="font-headline-md text-on-surface-variant">Figma</span>
          <span className="font-headline-md text-on-surface-variant">Google Analytics</span>
          <span className="font-headline-md text-on-surface-variant">Meta Business Suite</span>
          <span className="font-headline-md text-on-surface-variant">Canva</span>
          <span className="font-headline-md text-on-surface-variant">CapCut</span>
        </div>
      </section>
    </main>
  );
};
