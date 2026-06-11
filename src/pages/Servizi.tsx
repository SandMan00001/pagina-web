import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Servizi: React.FC = () => {
  useSEO({
    title: "Servizi - FounDreams | Siti Web, Social Media & Cybersecurity",
    description: "Sviluppiamo soluzioni web innovative, gestiamo la tua comunicazione social con strategie avanzate e proteggiamo il tuo business con servizi DevOps e di cybersecurity dedicati.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://foundreams.it/servizi",
      "name": "Servizi FounDreams",
      "description": "Catalogo servizi che include Sviluppo Web, Social Media Strategy e Consulenza DevOps & Cybersecurity.",
      "provider": {
        "@id": "https://foundreams.it/#organization"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catalogo Soluzioni FounDreams",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sviluppo Web ad Alte Prestazioni",
              "description": "Realizzazione di Landing Page, siti vetrina ed e-commerce moderni, ottimizzati SEO e fully responsive."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Strategy",
              "description": "Pianificazione editoriale e gestione canali social con grafiche curate ed analisi algoritmi per massimizzare la reach."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "DevOps & Cybersecurity",
              "description": "Consulenza IT, migrazione cloud (AWS/Azure), automazione di deploy e hardening di sicurezza con WAF e monitoraggio."
            }
          }
        ]
      }
    }
  });

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

    const emails = [
      'amministrazione@foundreams.it',
      'gabriele.saija@foundreams.it',
      'mykol.acquaotta@foundreams.it'
    ].join(',');
    
    const subject = encodeURIComponent(modalForm.oggetto || 'Richiesta preventivo');
    const body = encodeURIComponent(
      `Nome: ${modalForm.nome}\n` +
      `Email mittente: ${modalForm.email}\n\n` +
      `Messaggio:\n${modalForm.messaggio}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${emails}?subject=${subject}&body=${body}`;
      setModalStatus('success');
      setTimeout(() => {
        setSelectedBundle(null);
        setModalStatus('idle');
      }, 2500);
    }, 1000);
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="relative pt-[48px] overflow-x-hidden">
      {/* Hero Header */}
      <section className="px-margin-mobile md:px-margin-desktop mb-xl text-center max-w-4xl mx-auto relative scroll-reveal transition-all duration-700">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2"></div>
        <h1 className="font-display-lg text-[48px] md:text-display-lg mb-md leading-tight text-on-surface dark:text-on-surface">
          Soluzioni Digitali <span className="text-gradient">Concrete</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80 mx-auto mb-md"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Nessuna promessa irrealizzabile. Costruiamo strumenti web performanti, gestiamo i tuoi social con dati alla mano e proteggiamo la tua infrastruttura con le migliori tecnologie accessibili.
        </p>
      </section>

      {/* Section 1: Realizzazione Siti Web */}
      <section id="siti-web" className="scroll-reveal py-xl bg-surface transition-all duration-700">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-4xl">web</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface">Sviluppo Web</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Evitiamo i siti vetrina fini a se stessi. Sviluppiamo piattaforme veloci, ottimizzate per i motori di ricerca e facili da navigare. Il nostro obiettivo è creare uno strumento utile al tuo business, che comunichi chiaramente chi sei e cosa offri, convertendo le visite in contatti reali senza inutili complicazioni.
            </p>
            <div className="grid grid-cols-2 gap-sm mb-base">
              <div className="flex items-center gap-xs text-on-surface-variant font-caption">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Next.js &amp; React
              </div>
              <div className="flex items-center gap-xs text-on-surface-variant font-caption">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> E-commerce Headless
              </div>
              <div className="flex items-center gap-xs text-on-surface-variant font-caption">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> UI/UX Strategica
              </div>
              <div className="flex items-center gap-xs text-on-surface-variant font-caption">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Core Web Vitals
              </div>
            </div>
            <Link to="/contattaci" style={{ textDecoration: 'none' }}>
              <button className="cta-gradient inline-flex items-center justify-center gap-base px-lg py-md rounded-full font-label-md text-label-md text-on-primary w-fit">
                Contattaci <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden glass border border-white/5 aspect-video md:aspect-square">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Realizzazione Siti Web" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJeuoylIbFXdsUdTIp3Sy4m4kysgiPCZ9epiCb7o4-nj_awXIfUqOBWcZnw6G72eVMtREknwmQ6FeFOzCBVxvKgaWy-Ok-sm1ULULR7WlUqVcDtlw-aYykfHvXe1dTevKVl7i9hIYTlJXp8t9abysorBVrnnm6wqo0D1z7WCX_IBORTJ_OAgrTjY0O_2z2H6Y576J93iOAR3ldDJRuZZIoNHJUXysoQxHJJv6iRM4sIc_ul5Ey7hmL3n4AXuFXGHwSFf_2Rs8lqBG" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Gestione Pagine Social */}
      <section id="pagine-social" className="scroll-reveal py-xl bg-surface-container-low transition-all duration-700">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1 rounded-3xl overflow-hidden glass border border-white/5 aspect-video md:aspect-square">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Gestione Pagine Social" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0kE_ncur3VnhJ6ID12sJ0HGPl7iXFET49jXO3hbelXdkGnMnMg-MtLn-V9O4KLTNMtLp98ZUVkbkK-KQHdyKT0QliZd5Uv4nQwcoqZUAvDCT2zsdzhPvly2Ba0HOehS7Mq5eDHmkEjMh_bpBRaIuZOSCFbHHEOOOe14PBHV0X2q61hucS6Jm3JNslxh6TS8KNVyVEZaRKcQ2AJsW-sUBWMWb5VIgz13Z0UqYtpzAioHg7WQxWXZemfL2lR4QwquXDdzwBkmYUH9Iq" 
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-md order-1 md:order-2">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-on-tertiary-container text-4xl">share</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface">Social Media Management</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              I social non fanno miracoli da soli, ma sono un canale fondamentale. Gestiamo la tua presenza online con trasparenza: studiamo il tuo pubblico, creiamo contenuti autentici e analizziamo i dati per capire cosa funziona davvero. Nessuna metrica di vanità, solo strategie mirate a costruire una community interessata ai tuoi servizi.
            </p>
            <div className="flex flex-wrap gap-sm mb-base">
              <span className="bg-tertiary-container/30 px-md py-xs rounded-full text-on-tertiary-container font-caption text-[11px] uppercase tracking-widest border border-on-tertiary-container/20">Strategy</span>
              <span className="bg-tertiary-container/30 px-md py-xs rounded-full text-on-tertiary-container font-caption text-[11px] uppercase tracking-widest border border-on-tertiary-container/20">Content</span>
              <span className="bg-tertiary-container/30 px-md py-xs rounded-full text-on-tertiary-container font-caption text-[11px] uppercase tracking-widest border border-on-tertiary-container/20">Analytics</span>
            </div>
            <Link to="/contattaci" style={{ textDecoration: 'none' }}>
              <button className="cta-gradient inline-flex items-center justify-center gap-base px-lg py-md rounded-full font-label-md text-label-md text-on-primary w-fit">
                Contattaci <span className="material-symbols-outlined">trending_up</span>
              </button>
            </Link>
            <Link to="/contattaci" style={{ textDecoration: 'none' }} className="mt-base bg-surface-container-high rounded-xl p-md flex items-center justify-between group cursor-pointer hover:bg-surface-container-highest transition-colors">
              <div>
                <p className="font-label-md text-label-md text-primary">Obiettivo</p>
                <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">Successo Social&nbsp;</h3>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-2 transition-transform">north_east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Sicurezza Informatica */}
      <section id="consulenza-informatica"  className="scroll-reveal py-xl bg-surface transition-all duration-700">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-error text-4xl">lock</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface">Cybersecurity & DevOps</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Facciamo sicurezza informatica reale. Sappiamo benissimo che il "sistema perfetto e inviolabile" non esiste. Quello che facciamo è ricercare e implementare le tecnologie più sicure possibili per il tuo specifico caso, ottimizzando i costi. Automatizziamo i processi e riduciamo le vulnerabilità per garantirti un'infrastruttura solida e resiliente, pronta ad affrontare le vere minacce della rete.
            </p>
            <div className="flex flex-wrap gap-md mb-base">
              <div className="flex flex-col gap-xs">
                <span className="text-error font-bold font-headline-md text-headline-md">REALE</span>
                <span className="text-on-surface-variant font-caption">Protezione</span>
              </div>
              <div className="w-px h-12 bg-outline-variant hidden sm:block"></div>
              <div className="flex flex-col gap-xs">
                <span className="text-error font-bold font-headline-md text-headline-md">MIRATO</span>
                <span className="text-on-surface-variant font-caption">Investimento</span>
              </div>
            </div>
            <Link to="/contattaci" style={{ textDecoration: 'none' }}>
              <button className="cta-gradient inline-flex items-center justify-center gap-base px-lg py-md rounded-full font-label-md text-label-md text-on-primary w-fit">
                Contattaci <span className="material-symbols-outlined">security</span>
              </button>
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden glass border border-white/5 aspect-video md:aspect-square">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Consulenza Informatica" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAgNZKCiwje8yEHFx642msY3-fWD1GPIYIL2efJag8X-e24L6Eqps1792xmhJl0_6Gm19iaPeQ_Md_1fRoh62FdfC1Fm8TIt6quafiYZwr_aCUVjAp5jLhAKxGY6LHKKsWB_Z99EUII59AaZP3xX7T2s-aJorzO_8JFpa6xyu39Ftzbvi81EO-Ow3VmvmiLw_GWMIy7eTCXVbLaTZUM14AvTz2SwPrnQHJo_9NmaxnjLBXqvCAcapmegju_IDYAe95ULO7PbJ835M5" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pacchetti / Combo Section */}
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
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Startup Bundle</h3>
              <p className="text-caption font-caption text-on-surface-variant mb-md">L'essenziale per partire subito forti.</p>
              <ul className="space-y-sm mb-lg flex-grow">
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Sito Web Landing Page
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
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Business Evolution</h3>
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
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Enterprise Safe</h3>
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

      {/* CTA Final Section */}
      <section className="scroll-reveal px-margin-mobile md:px-margin-desktop py-xl text-center bg-surface-container-lowest transition-all duration-700">
        <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface mb-base">Pronto a fare sul serio?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-2xl mx-auto">Siamo qui per darti soluzioni concrete, non parole vuote. Parliamone insieme.</p>
        <div className="flex flex-col sm:flex-row gap-md justify-center">
          <a href="https://calendly.com/gabriele-saija-2003/30min" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="cta-gradient px-xl py-md rounded-full font-label-md text-label-md text-on-primary">
              Prenota una Consulenza Gratuita
            </button>
          </a>
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
    </main>
  );
};
