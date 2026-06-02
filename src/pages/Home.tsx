import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);
  const [modalForm, setModalForm] = useState({ nome: '', email: '', oggetto: '', messaggio: '' });
  const [modalStatus, setModalStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const bundleDetails: Record<string, {
    icon: string;
    iconColor: string;
    bgColor: string;
    description: string;
    color: 'primary' | 'secondary';
    cardFeatures: string[];
    modalFeatures: string[];
    tag?: string;
  }> = {
    "Startup Bundle": {
      icon: "rocket_launch",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      description: "L'essenziale per partire subito forti.",
      color: "primary",
      cardFeatures: [
        "Sito Web On-page",
        "Configurazione Social",
        "Certificato SSL & Security"
      ],
      modalFeatures: [
        "Gestione social base: gestione instagram e facebook",
        "Infrastuttura & IT Governance: server & dominio",
        "Sviluppo web & SEO: creazione landing page e indicizzazione SEO base",
        "Cybersecurity base: utilizzo certificati SSL(HTTPS) + Resilienza dati"
      ]
    },
    "Business Evolution": {
      icon: "trending_up",
      iconColor: "text-primary",
      bgColor: "bg-primary/20",
      description: "Per chi vuole scalare il mercato.",
      color: "primary",
      cardFeatures: [
        "Sito E-commerce Pro",
        "Gestione Social Mensile",
        "Pentesting Semestrale"
      ],
      modalFeatures: [
        "Gestione social intermedia (+1): gestione instagram e facebook (+ un social a scelta) e maggiore frequenza nella pubblicazione ",
        "Consulenza informatica: 1 ora al mese per analizzare andamento sito e social e pianificazione business evolutivi",
        "Sviluppo web & SEO: sito web completo fino a 5 pagine + SEO avanzata",
        "Cybersecurity avanzata: implementazione WAF"
      ],
      tag: "Più Popolare"
    },
    "Enterprise Safe": {
      icon: "shield_with_heart",
      iconColor: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Massima sicurezza e personalizzazione.",
      color: "secondary",
      cardFeatures: [
        "Infrastruttura Cloud Dedicata",
        "Monitoraggio SOC 24/7",
        "Strategia Multicanale"
      ],
      modalFeatures: [
        "Gestione social ominichanel: compertura su tutti i canali social e strategie marketing avanzate",
        "Sviluppo web avanzato: sviluppo e progettazione siti web complessi su misura (e-commerce/web app)",
        "SEO Full-Continuty: scrittura costante di articoli e posizionamento organico a lungo termine",
        "Consulenza strategica IT: consulenza strategica per innovazione e trasformazione digitale(cloud & on-premise)",
        "Formazione specialistica IT: consulenza tecnica specialistica e formazione per il personale interno (IT & Marketing)"
      ]
    }
  };

  const openModal = (bundleName: string) => {
    setSelectedBundle(bundleName);
    setModalForm({
      nome: '',
      email: '',
      oggetto: `Richiesta preventivo per ${bundleName}`,
      messaggio: `Ciao! Sono interessato al pacchetto ${bundleName}. Vorrei ricevere maggiori informazioni.`
    });
    setModalStatus('idle');
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus('sending');
    setTimeout(() => {
      setModalStatus('success');
      setTimeout(() => {
        setSelectedBundle(null);
        setModalStatus('idle');
      }, 2500);
    }, 1500);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-[calc(100vh-72px)] flex items-center pt-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 to-background"></div>
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-tertiary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="relative z-10 container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <h1 className="font-display-lg text-[48px] md:text-display-lg leading-tight tracking-tight text-on-surface dark:text-on-surface">
              Fonda la tua presenza online, <span className="text-gradient">realizza i tuoi sogni</span> in sicurezza
            </h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
              Ogni progetto nasce da un’idea grezza e prende forma attraverso creatività, identità visiva e soluzioni digitali costruite con precisione e carattere.
            </p>
            <div className="flex flex-wrap gap-md pt-sm">
              <Link to="/chi-siamo" style={{ textDecoration: 'none' }}>
                <button className="gradient-primary text-on-primary px-lg py-md rounded-xl font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  Scopri chi siamo
                </button>
              </Link>
              <Link to="/servizi" style={{ textDecoration: 'none' }}>
                <button className="border border-outline-variant bg-surface/50 backdrop-blur-sm text-on-surface px-lg py-md rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors">
                  Scopri i Servizi
                </button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="glass rounded-3xl p-base overflow-hidden aspect-square flex items-center justify-center">
              <img 
                alt="Cybersecurity and Innovation" 
                className="w-full h-full object-cover rounded-2xl opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfEB-bT-6tKI-icy7rHwYY0Gs26EAqvRwKZFRP1hDmIkeVWOn6KQXkW1JvXwrhSFh88sdeWAfIAD_5E9VV_MhXwgPPE1VoPqvLy9oBn2k-8whHB2rK48xWRJYuBMbuxd_cX8c8zamUulxcE_tsjDQpUbTaChNaY-jFaDbrTgXdxfBv1vfXowWGbI4WmXFeQhIE4YL5JGgsUvwSuDL3GnU3kAYw2xnyVNhz-VaKP_SJ66Bq3Ux6kEfsZ733ebOtxOha0iN1S0YUojoD" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Chi Siamo Section */}
      <section className="scroll-reveal py-xl bg-surface-container-low transition-all duration-700">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto text-center space-y-md">
            <span className="text-primary font-label-md text-label-md tracking-widest uppercase">La Nostra Visione</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface">L'incontro tra Creatività e Sicurezza</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong>FounDreams</strong> nasce dall'intesa di due giovani programmatori e marketer con un obiettivo comune: trasformare le idee in realtà sicure. Uniamo il lato visivo del design alla precisione della <strong>sicurezza informatica</strong>, perché ogni sogno digitale ha bisogno di una struttura solida per svilupparsi senza confini. Innoviamo ogni giorno per proteggere ciò che ami di più.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md pt-lg">
              <div className="p-md text-center">
                <div className="text-primary text-headline-md font-bold">100%</div>
                <div className="text-caption font-caption text-on-surface-variant">Creatività</div>
              </div>
              <div className="p-md text-center">
                <div className="text-secondary text-headline-md font-bold">IMMEDIATA</div>
                <div className="text-caption font-caption text-on-surface-variant">Consulenza</div>
              </div>
              <div className="p-md text-center">
                <div className="text-tertiary text-headline-md font-bold">Veloce</div>
                <div className="text-caption font-caption text-on-surface-variant">Innovazione</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section className="scroll-reveal py-xl transition-all duration-700">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop space-y-xl">
          {/* Siti Web */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div className="order-2 lg:order-1 space-y-md">
              <span className="material-symbols-outlined text-primary text-[40px]">language</span>
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">Siti Web ad Alte Prestazioni</h3>
              <p className="text-on-surface-variant">Realizziamo piattaforme web che non sono solo belle, ma veloci e ottimizzate. Ogni linea di codice è scritta pensando alla scalabilità e all'esperienza utente finale.</p>
              <Link to="/servizi#siti-web" style={{ textDecoration: 'none' }}>
                <button className="flex items-center gap-xs text-primary font-label-md text-label-md hover:underline transition-all">
                  Più informazioni <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 glass rounded-2xl h-[300px] md:h-[400px] overflow-hidden">
              <img 
                alt="Web Development" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMS5g9A9kYAm80WD3e64M8uOo3M_RSjah5u8egtGT06hTvJq8FnMG1yhCgpHJHoCRk6bUEThoN50SLhSwTo3IIGRBhQi1r4In06ILyMxElolWVsuG2EfLFJE3cPVmsc2DRpNyqRJk5G0_z89FCD2WaU9uPjAcsG5TY464D5IiDohsZh6EbX2bD0sDeWEtc6xxYQ2RrTGRJdte5GRwxnU8wkoeNpwgM_dQVYEAH_b83BkVAu7gyZDPqjd7G150LqQ8QKIB5xyeNGznh" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div className="glass rounded-2xl h-[300px] md:h-[400px] overflow-hidden">
              <img 
                alt="Social Media Management" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0kE_ncur3VnhJ6ID12sJ0HGPl7iXFET49jXO3hbelXdkGnMnMg-MtLn-V9O4KLTNMtLp98ZUVkbkK-KQHdyKT0QliZd5Uv4nQwcoqZUAvDCT2zsdzhPvly2Ba0HOehS7Mq5eDHmkEjMh_bpBRaIuZOSCFbHHEOOOe14PBHV0X2q61hucS6Jm3JNslxh6TS8KNVyVEZaRKcQ2AJsW-sUBWMWb5VIgz13Z0UqYtpzAioHg7WQxWXZemfL2lR4QwquXDdzwBkmYUH9Iq" 
                loading="lazy"
              />
            </div>
            <div className="space-y-md">
              <span className="material-symbols-outlined text-tertiary text-[40px]">share</span>
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">Social Media Strategy</h3>
              <p className="text-on-surface-variant">Gestiamo la tua voce digitale. Dalla creazione di contenuti visivi alla strategia di crescita organica, portiamo il tuo brand dove si trovanho i tuoi clienti.</p>
              <Link to="/servizi#pagine-social" style={{ textDecoration: 'none' }}>
                <button className="flex items-center gap-xs text-tertiary font-label-md text-label-md hover:underline transition-all">
                  Più informazioni <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Sicurezza */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div className="order-2 lg:order-1 space-y-md">
              <span className="material-symbols-outlined text-secondary text-[40px]">security</span>
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">Consulenza &amp; Protezione</h3>
              <p className="text-on-surface-variant">Trasformiamo il tuo IT in un vantaggio competitivo. Progettiamo, automatizziamo e proteggiamo infrastrutture cloud e ibride per azzerare i disservizi e ridurre i costi. Ci occupiamo noi di stabilità e sicurezza, così puoi concentrarti solo sulla crescita del tuo business.</p>
              <Link to="/servizi#consulenza-informatica" style={{ textDecoration: 'none' }}>
                <button className="flex items-center gap-xs text-secondary font-label-md text-label-md hover:underline transition-all">
                  Più informazioni <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 glass rounded-2xl h-[300px] md:h-[400px] overflow-hidden">
              <img 
                alt="Cybersecurity Systems" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa26GKBbGI6oVQyLcixuRDtRX40YFDnZ70NZfxVQavDHYAbzur8CulHb-yzKdQcL7L9rMH9OnT4eXpmycbaqD3fuwCEOBgPOJ98XTsM54uviQAP7cGmsYFQCwXsnulxcTzJNuLfO-hDKd-8VU_xQQbm3umaKIAvndZSUbQxsIUeIl1q340eAd8sSyu6YMnzvu3ZVhxWnxezm5VNjqhucgkAqZm8ZSwRyHYx1goU2Ci6QPWulnfjbhkhJhEspA7ZoIFh0CWMhyrfYeS" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Pacchetti/Combo */}
      <section className="scroll-reveal py-xl bg-surface-container transition-all duration-700">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface mb-sm">Soluzioni su Misura</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Scegli la combinazione perfetta per le tue esigenze o costruisci un pacchetto personalizzato con il nostro team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
            {/* Startup Bundle */}
            <div className="package-card glass p-lg rounded-3xl flex flex-col hover:border-primary/50 cursor-default">
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Startup Bundle</h4>
              <p className="text-caption font-caption text-on-surface-variant mb-md">L'essenziale per partire subito forti.</p>
              <ul className="space-y-sm mb-lg flex-grow">
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Sito Web landinpage
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Configurazione Social
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Certificato SSL
                </li>
              </ul>
              <button 
                onClick={() => openModal("Startup Bundle")}
                className="w-full py-md border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors text-on-surface dark:text-on-surface mt-auto"
              >
                Scopri di Più
              </button>
            </div>

            {/* Business Evolution */}
            <div className="package-card glass p-lg rounded-3xl flex flex-col relative border-primary shadow-2xl shadow-primary/10 scale-105 z-10 bg-surface-bright cursor-default">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-md py-xs rounded-full text-[12px] font-bold uppercase tracking-widest">Più Popolare</div>
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-primary/20 rounded-xl text-primary">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Business Evolution</h4>
              <p className="text-caption font-caption text-on-surface-variant mb-md">Per chi vuole scalare il mercato.</p>
              <ul className="space-y-sm mb-lg flex-grow">
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Sito web
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Gestione Social intermedio
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Implementazione WAF
                </li>
              </ul>
              <button 
                onClick={() => openModal("Business Evolution")}
                className="w-full py-md gradient-primary text-on-primary rounded-xl font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform mt-auto"
              >
                Scopri di Più
              </button>
            </div>

            {/* Enterprise Safe */}
            <div className="package-card glass p-lg rounded-3xl flex flex-col hover:border-primary/50 cursor-default">
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-secondary/10 rounded-xl text-secondary">
                  <span className="material-symbols-outlined">shield_with_heart</span>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Enterprise Safe</h4>
              <p className="text-caption font-caption text-on-surface-variant mb-md">Massima sicurezza e personalizzazione.</p>
              <ul className="space-y-sm mb-lg flex-grow">
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Sito Web 100% personalizzato
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Gestione Social Completa
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> consulenza strategica e formazione
                </li>
              </ul>
              <button 
                onClick={() => openModal("Enterprise Safe")}
                className="w-full py-md border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors text-on-surface dark:text-on-surface mt-auto"
              >
                Scopri di Più
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup overlay */}
      {selectedBundle && (
        <div 
          className="fixed inset-0 z-[100] flex items-start justify-center p-margin-mobile md:p-lg pt-12 pb-12 bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedBundle(null)}
        >
          {/* Modal Card container */}
          <div 
            className="modal-content glass w-full max-w-2xl rounded-3xl relative p-lg md:p-xl shadow-2xl flex flex-col gap-md my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button 'X' */}
            <button 
              onClick={() => setSelectedBundle(null)}
              className="absolute top-4 right-4 text-on-surface/70 hover:text-primary transition-colors focus:outline-none z-50"
              aria-label="Chiudi"
            >
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>

            <div className="space-y-lg text-left">
              {/* Header info */}
              <div className="space-y-sm text-left">
                <h2 className={`font-headline-lg text-headline-lg text-left ${bundleDetails[selectedBundle].color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  {selectedBundle}
                </h2>
              </div>

              <div className="border-t border-white/10 pt-lg text-left">
                <h3 className="font-headline-md text-headline-md mb-md text-left text-on-surface">Caratteristiche Incluse:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-md text-left">
                  {bundleDetails[selectedBundle].modalFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-sm text-left">
                      <span className={`material-symbols-outlined ${bundleDetails[selectedBundle].color === 'primary' ? 'text-primary' : 'text-secondary'} pt-1`}>check_circle</span>
                      <span className="text-body-md text-on-surface text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-lg text-left">
                {modalStatus === 'success' ? (
                  <div className="text-center py-lg space-y-sm">
                    <span className="material-symbols-outlined text-secondary text-[48px] animate-bounce">check_circle</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface">Richiesta Ricevuta!</h4>
                    <p className="text-on-surface-variant">Ti risponderemo entro 24 ore. Preparati a realizzare il tuo sogno digitale.</p>
                  </div>
                ) : (
                  <form onSubmit={handleModalSubmit} className="space-y-md text-left">
                    <h3 className="font-headline-md text-headline-md text-on-surface text-left mb-sm">Richiedi Informazioni</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-left">
                      <div className="space-y-xs text-left">
                        <label className="font-label-md text-label-md text-on-surface-variant text-left">Nome</label>
                        <input 
                          type="text" 
                          required
                          value={modalForm.nome}
                          onChange={(e) => setModalForm({...modalForm, nome: e.target.value})}
                          placeholder="Mario Rossi"
                          className="w-full bg-[#000d11] border border-primary/30 rounded-lg p-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div className="space-y-xs text-left">
                        <label className="font-label-md text-label-md text-on-surface-variant text-left">Email</label>
                        <input 
                          type="email" 
                          required
                          value={modalForm.email}
                          onChange={(e) => setModalForm({...modalForm, email: e.target.value})}
                          placeholder="mario@esempio.it"
                          className="w-full bg-[#000d11] border border-primary/30 rounded-lg p-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-xs text-left">
                      <label className="font-label-md text-label-md text-on-surface-variant text-left">Oggetto</label>
                      <input 
                        type="text" 
                        required
                        value={modalForm.oggetto}
                        onChange={(e) => setModalForm({...modalForm, oggetto: e.target.value})}
                        className="w-full bg-[#000d11] border border-primary/30 rounded-lg p-sm text-on-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="space-y-xs text-left">
                      <label className="font-label-md text-label-md text-on-surface-variant text-left">Messaggio</label>
                      <textarea 
                        rows={3}
                        required
                        value={modalForm.messaggio}
                        onChange={(e) => setModalForm({...modalForm, messaggio: e.target.value})}
                        className="w-full bg-[#000d11] border border-primary/30 rounded-lg p-sm text-on-surface focus:border-primary focus:outline-none resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={modalStatus === 'sending'}
                      className="w-full py-md gradient-primary text-on-primary rounded-xl font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-transform"
                    >
                      {modalStatus === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
