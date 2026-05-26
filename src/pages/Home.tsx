import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
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
              <Link to="/contattaci" style={{ textDecoration: 'none' }}>
                <button className="gradient-primary text-on-primary px-lg py-md rounded-xl font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  Contattaci
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
              FounDreams nasce dalla sinergia di due giovani ragzzi con una missione comune: democratizzare l'eccellenza tecnica. Uniamo l'anima creativa del design alla precisione chirurgica della cybersecurity. Crediamo che ogni sogno digitale meriti una base solida e sicura per crescere senza limiti. La nostra filosofia è semplice: innovare proteggendo ciò che ami di più.
            </p>
            <div className="grid grid-cols-3 gap-md pt-lg">
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
              <Link to="/servizi" style={{ textDecoration: 'none' }}>
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
              />
            </div>
            <div className="space-y-md">
              <span className="material-symbols-outlined text-tertiary text-[40px]">share</span>
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">Social Media Strategy</h3>
              <p className="text-on-surface-variant">Gestiamo la tua voce digitale. Dalla creazione di contenuti visivi alla strategia di crescita organica, portiamo il tuo brand dove si trovano i tuoi clienti.</p>
              <Link to="/servizi" style={{ textDecoration: 'none' }}>
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
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">Cybersecurity &amp; Protezione</h3>
              <p className="text-on-surface-variant">La sicurezza non è un optional. Proteggiamo i tuoi dati e quelli dei tuoi clienti con i più avanzati protocolli di sicurezza e monitoraggio costante.</p>
              <Link to="/servizi" style={{ textDecoration: 'none' }}>
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
            <p className="text-on-surface-variant max-w-2xl mx-auto">Scegli la combinazione perfetta per le deine esigenze o costruisci un pacchetto personalizzato con il nostro team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Startup Bundle */}
            <div className="glass p-lg rounded-3xl flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Startup Bundle</h4>
              <p className="text-caption font-caption text-on-surface-variant mb-md">L'essenziale per partire subito forti.</p>
              <ul className="space-y-sm mb-lg flex-grow">
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Sito Web On-page
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Configurazione Social
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Certificato SSL &amp; Security
                </li>
              </ul>
              <Link to="/contattaci" style={{ textDecoration: 'none' }}>
                <button className="w-full py-md border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors text-on-surface dark:text-on-surface">
                  Seleziona
                </button>
              </Link>
            </div>

            {/* Business Evolution */}
            <div className="glass p-lg rounded-3xl flex flex-col relative border-primary shadow-2xl shadow-primary/10 scale-105 z-10 bg-surface-bright">
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
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Sito E-commerce Pro
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Gestione Social Mensile
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Pentesting Semestrale
                </li>
              </ul>
              <Link to="/contattaci" style={{ textDecoration: 'none' }}>
                <button className="w-full py-md gradient-primary text-on-primary rounded-xl font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  Inizia Ora
                </button>
              </Link>
            </div>

            {/* Enterprise Safe */}
            <div className="glass p-lg rounded-3xl flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-secondary/10 rounded-xl text-secondary">
                  <span className="material-symbols-outlined">shield_with_heart</span>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-xs">Enterprise Safe</h4>
              <p className="text-caption font-caption text-on-surface-variant mb-md">Massima sicurezza e personalizzazione.</p>
              <ul className="space-y-sm mb-lg flex-grow">
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Infrastruttura Cloud Dedicata
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Monitoraggio SOC 24/7
                </li>
                <li className="flex items-center gap-sm text-body-md text-on-surface dark:text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Strategia Multicanale
                </li>
              </ul>
              <Link to="/contattaci" style={{ textDecoration: 'none' }}>
                <button className="w-full py-md border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors text-on-surface dark:text-on-surface">
                  Contattaci
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
