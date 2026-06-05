import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const ChiSiamo: React.FC = () => {
  useSEO({
    title: "Chi Siamo - FounDreams | Team di Esperti in Sviluppo e Security",
    description: "Scopri la storia, i valori e la missione di FounDreams, lo studio boutique di sviluppo software e cybersecurity guidato da esperti programmatori.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://foundreams.it/chi-siamo",
      "name": "Chi Siamo",
      "description": "La storia, la missione e i membri del team di FounDreams.",
      "publisher": {
        "@id": "https://foundreams.it/#organization"
      }
    }
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
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

    // Sequential timeline active state observer
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const steps = entry.target.querySelectorAll('.timeline-step');
          steps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('active');
            }, index * 200);
          });
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const timelineContainer = document.querySelector('.timeline-grid');
    if (timelineContainer) {
      timelineObserver.observe(timelineContainer);
    }

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      if (timelineContainer) {
        timelineObserver.unobserve(timelineContainer);
      }
    };
  }, []);

  const scrollToGenesis = () => {
    const element = document.getElementById('genesis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center z-10 scroll-reveal">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-on-background">
            Dove le <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">idee</span> diventano <span className="text-primary">realtà</span>.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            FounDreams è uno studio digitale boutique dove l'intuizione del marketing, la tecnologia all'avanguardia e la cybersicurezza si fondono per forgiare il vostro futuro digitale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contattaci" className="w-full sm:w-auto" style={{ textDecoration: 'none' }}>
              <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-on-secondary rounded-xl font-headline font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95">
                Parliamo
              </button>
            </Link>
            <button 
              onClick={scrollToGenesis} 
              className="w-full sm:w-auto px-8 py-4 border border-outline-variant text-on-surface rounded-xl font-headline font-bold hover:bg-surface-bright/20 transition-all hover:scale-105 active:scale-95"
            >
              Scopri la nostra storia
            </button>
          </div>
        </div>
      </section>

      {/* Why We Started (Our Genesis) */}
      <section id="genesis" className="scroll-reveal py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-headline font-bold tracking-widest uppercase text-sm">La Nostra Genesi</span>
            <h2 className="font-display text-4xl font-semibold leading-tight text-on-background">Il Concetto di FounDreams</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Il nostro nome deriva da <em>Foundry Dreams</em> ("fucina dei sogni"), un concetto che rappresenta ciò che vogliamo essere: un luogo in cui idee, ambizioni e progetti vengono sviluppati, rafforzati e trasformati in opportunità reali.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Unendo marketing, crescita digitale, sviluppo, consulenza informatica e sicurezza, adottiamo un approccio che mette al centro non solo la visibilità e la crescita del business, ma anche la qualità, l'affidabilità e la protezione delle soluzioni realizzate.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden glass-card p-2 animate-float">
            <div className="w-full h-full rounded-xl bg-surface-container relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/40 to-transparent z-10"></div>
              <img 
                alt="Incontro strategico" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL0GZXzBhVOgvRsp5fU9jYTgGVPzfMJCUsmj-rY4ORyMbbWiZSO4yG42o8f_LFGzzQ5oqLvolzX38kz124Gp1v4BYSBdvp6ahd6Q6hff7_Tu2PCMc2vUOojUZXHKsyNAKAYvam0n1bzCg3DyxB1REOmR-n4MlR8AQoYeONjFXvizmrtSMrLFS7_meN3rghiSbeiDywhNomwvUnQMQ8P-Eww7jn17xKL5YPVzU7g92hHLpR6HRAOgA_G2dV4VBA0e-eI2eQgJUYiXF9" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="scroll-reveal py-xl bg-surface-container-lowest/50">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-2xl hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-on-background">La nostra Missione</h3>
              <div className="text-on-surface-variant leading-relaxed space-y-4">
                <p>
                  Il nostro lavoro quotidiano in <strong>FounDreams</strong> consiste nel fornire ad aziende e privati le competenze e gli strumenti necessari per l'evoluzione del loro business. Lo facciamo attraverso tre azioni concrete:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold min-w-[12px]">-</span>
                    <span><strong>Sviluppare con intelligenza:</strong> Progettiamo ecosistemi digitali ottimizzati tramite <strong>automazioni avanzate</strong> e protetti da una <strong>sicurezza informatica</strong> nativa, eliminando i rischi e ottimizzando i tempi di gestione.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold min-w-[12px]">-</span>
                    <span><strong>Massimizzare il valore:</strong> Applichiamo strategie di <strong>marketing d'impatto</strong>, sfruttando ogni piattaforma e servizio disponibile sul mercato per posizionare il tuo prodotto al massimo del suo valore commerciale.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold min-w-[12px]">-</span>
                    <span><strong>Coltivare il talento, non i manuali:</strong> Diamo ascolto e priorità all'elasticità mentale e all'intuizione dei singoli. Crediamo nel valore delle persone curiose e colte, capaci di trovare soluzioni flessibili dove il rigido nozionismo si ferma.</span>
                  </li>
                </ul>
                <p className="pt-2">
                  Non ci limitiamo a consegnare un progetto finito: <strong>affianchiamo i nostri clienti per insegnare la messa in atto pratica delle soluzioni create</strong>, formando team e persone consapevoli, creative e autonome.
                </p>
              </div>
            </div>

            <div className="glass-card p-10 rounded-2xl hover:border-tertiary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-tertiary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">visibility</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-on-background">La nostra Visione</h3>
              <div className="text-on-surface-variant leading-relaxed space-y-4">
                <p>
                  Ogni grande innovazione nasce da un sogno, ma sopravvive solo grazie alla struttura. In <strong>FounDreams</strong> aiutiamo aziende e privati a realizzare progetti unici, unendo l'efficienza delle <strong>automazioni</strong> alla solidità della <strong>sicurezza informatica</strong>.
                </p>
                <p>
                  Eleviamo il potenziale di ogni prodotto grazie a un <strong>marketing strategico e totale</strong>, stringendo partnership con i migliori servizi sul mercato per garantire un ritorno sull'investimento senza precedenti.
                </p>
                <p>
                  Lavoriamo con chi sa guardare oltre: valorizziamo l'intelligenza critica e l'elasticità mentale rispetto al nozionismo teorico. Il nostro scopo è <strong>insegnare la pratica dell'innovazione</strong>, accendendo la scintilla in persone creative, consapevoli e animate dalla passione. Diamo gambe alle tue idee, ti diamo lo scudo per proteggerle e la mappa per farle crescere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="scroll-reveal py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold mb-4 text-on-background">I Pilastri di FounDreams</h2>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Value 1 */}
          <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">group</span>
            <h3 className="font-display text-xl font-bold mb-3 text-on-background">Collaborazione</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Lavoriamo come un'estensione del vostro team, assicurando che la vostra voce sia ascoltata in ogni fase del processo produttivo.</p>
          </div>
          {/* Value 2 */}
          <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">auto_awesome</span>
            <h3 className="font-display text-xl font-bold mb-3 text-on-background">Innovazione</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Non seguiamo le tendenze; le studiamo per costruire il "prossimo" prima che diventi l'attuale.</p>
          </div>
          {/* Value 3 */}
          <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">shield</span>
            <h3 className="font-display text-xl font-bold mb-3 text-on-background">Sicurezza e Affidabilità</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">La sicurezza non è un optional; è il nucleo. Costruiamo fortezze digitali che resistono alla prova del tempo.</p>
          </div>
          {/* Value 4 */}
          <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">verified</span>
            <h3 className="font-display text-xl font-bold mb-3 text-on-background">Trasparenza</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Report chiari, scadenze oneste e nessun gergo tecnico. Saprete sempre a che punto siamo.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="scroll-reveal py-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-semibold mb-4 text-on-background">Conosci il team</h2>
          </div>
          <div className="space-y-20">
            {/* Profile 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
                <h3 className="font-display text-3xl font-bold text-on-background">Acquaotta Mykol</h3>
                <p className="text-secondary font-headline font-semibold text-lg uppercase tracking-wider">Digital marketer</p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Esperto nel creare narrazioni digitali ad alto impatto che risuonano con il pubblico target. Combinando approfondimenti basati sui dati con lo storytelling creativo, assicura che ogni progetto ottenga la massima visibilità e conversione.
                </p>
                <div className="flex gap-4">
                  <a className="text-primary font-medium hover:underline flex items-center gap-1 group transition-all" href="https://mykolacquaotta.lovable.app/">
                    Visualizza portfolio 
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    alt="Specialista Marketing" 
                    className="w-full h-auto rounded-2xl relative grayscale hover:grayscale-0 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5m0WFFJfxLeukAVAs6Th4bqCdRgxc-GqJLbkolW1gE4UcL4G-SD0qzMsVNNtaU4v3sK71LdPW983UFROmiK5fJfMi9AePcFOlNsJKVCwt45YophwgTZLLd8f_jiGrB5j8rCq5uaFC6KBap-IgaNLb1nhUOrq2ViBiXHiVSrCMHuj2VWtCE9caETwbmeIpCZrp_OkNs4f_FGLI4R9w6POQkqP7L9f2je_dOr-tC5HRyk2riV8RE6nK6en-TwTfTWSNTxXcTQELUwK" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-tertiary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    alt="Ingegnere della Sicurezza" 
                    className="w-full h-auto rounded-2xl relative grayscale hover:grayscale-0 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvQ_uQWg2lz9e12VClzZxPhYUD7bQRfAlOvi0BrplCB5w0hh4mwLLKPgfiOFlSb4xxE0T6gvy3lhSABmEPVMFZCV1w2MKz3wL3vypbrTWLeNv2j-N1zgBy716QQ54ZKX0d0nsNz6PfTxBU3OcWlDVFx0fzLjX3sx-ygokSGQGB1JEGO08rkzsEhYMv1jDTP1xaNhkWnyskIp4IniOxlkH8-p5QeIrcPnHOsgXkKfZdyIuf9yfGlyyxgDmSDmou2RSiS69G4xunOKR4" 
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="font-display text-3xl font-bold text-on-background">Saija Gabriele</h3>
                <p className="text-tertiary font-headline font-semibold text-lg uppercase tracking-wider">cloud administrator &amp; security engineer</p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Costruisco le fondamenta digitali su cui far scalare il tuo business. Come DevOps e Cloud & Security Engineer, progetto infrastrutture IT inattaccabili e performanti. L'esperienza nell'insegnamento del coding ai più giovani mi ha insegnato la skill più preziosa: tradurre la complessità tecnica in soluzioni chiare e immediate. Tu pensa alla visione, a blindare i tuoi dati ci penso io.
                </p>
                <div className="flex gap-4">
                  <a className="text-primary font-medium hover:underline flex items-center gap-1 group transition-all" href="https://www.italiasaija.it">
                    Visualizza portfolio 
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / The Foundry Process */}
      <section className="scroll-reveal py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-semibold mb-4 text-on-background">Il Processo di FounDreams</h2>
          <p className="text-on-surface-variant">Il nostro approccio sistematico verso l'eccellenza.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 timeline-grid">
          {/* Step 1 */}
          <div className="relative text-center md:text-left timeline-step">
            <div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">1</div>
            <h3 className="font-display text-lg font-bold mb-2 text-on-background">Strategia</h3>
            <p className="text-sm text-on-surface-variant">Analisi approfondita e pianificazione dei vostri obiettivi digitali.</p>
          </div>
          {/* Step 2 */}
          <div className="relative text-center md:text-left timeline-step">
            <div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">2</div>
            <h3 className="font-display text-lg font-bold mb-2 text-on-background">Marketing</h3>
            <p className="text-sm text-on-surface-variant">Definire la vostra voce e raggiungere il vostro pubblico principale.</p>
          </div>
          {/* Step 3 */}
          <div className="relative text-center md:text-left timeline-step">
            <div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">3</div>
            <h3 className="font-display text-lg font-bold mb-2 text-on-background">Design</h3>
            <p className="text-sm text-on-surface-variant">Forgiare interfacce moderne, intuitive e pronte alla conversione.</p>
          </div>
          {/* Step 4 */}
          <div className="relative text-center md:text-left timeline-step">
            <div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">4</div>
            <h3 className="font-display text-lg font-bold mb-2 text-on-background">Sicurezza</h3>
            <p className="text-sm text-on-surface-variant">Rafforzare l'infrastruttura con protezioni avanzate.</p>
          </div>
          {/* Step 5 */}
          <div className="relative text-center md:text-left timeline-step">
            <div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">5</div>
            <h3 className="font-display text-lg font-bold mb-2 text-on-background">Crescita</h3>
            <p className="text-sm text-on-surface-variant">Ottimizzazione continua e scalabilità del vostro successo.</p>
          </div>
        </div>
      </section>

      {/* Education & Knowledge Sharing (Academy) */}
      <section className="scroll-reveal py-xl bg-primary-container/30 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 animate-float">
            <div className="aspect-video rounded-2xl overflow-hidden glass-card p-4">
              <div className="w-full h-full bg-surface-container rounded-xl flex items-center justify-center text-on-surface-variant overflow-hidden">
                <img 
                  alt="Sessione educativa" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Nw-K55zYy8hBNAo0Rn9bUHPmr0inkBWIoFd0lM_omO8frrtC-gBsBGfLsYsP1CeKGBeB6W_KjWGNVf5Zh9SyIp_0SjyMu4ciVexYlb967UM3eYk9YvvW1-S_rgG5xySz83eAXy9nitHSf9dfjsFpeSCKqFeekIzphAv-gFuG67JZGy_TXlrKJ9C5FnATF1u-E3t4ELVrm7_1Alhhhu9A5OA62ePGSqvOzV1jd7pXSWz65nwWq0YseeJ--VX9OauMunPeUUeSbrPl" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-tertiary font-headline font-bold uppercase text-sm">Academy</span>
            <h2 className="font-display text-4xl font-semibold text-on-background">Crescere attraverso la Conoscenza</h2>
            <p className="text-on-surface-variant text-lg">
              Non costruiamo solo soluzioni; vi insegniamo come padroneggiarle. I nostri programmi di consulenza e formazione sono progettati per colmare il divario di competenze digitali, assicurando che il vostro team sia attrezzato per mantenere e far crescere i vostri asset digitali con fiducia.
            </p>
            <ul className="space-y-4 pl-0 list-none">
              <li className="flex items-center gap-3 text-on-surface group transition-transform hover:translate-x-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span>Formazione sulla consapevolezza della cybersicurezza</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface group transition-transform hover:translate-x-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span>Workshop di perfezionamento del Marketing Digitale</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface group transition-transform hover:translate-x-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span>Consulenza tecnica personalizzata</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="scroll-reveal py-xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-surface-container-highest rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full animate-pulse-glow"></div>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-background">Pronto a costruire qualcosa di significativo?</h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10">
              <span className="font-body" style={{ backgroundColor: 'rgba(1, 18, 48, 0.6)' }}>
                Raccontaci i tuoi obiettivi e scopriamo insieme come trasformarli in una soluzione digitale efficace. Siamo pronti a dare forma alle tue idee.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contattaci" className="w-full sm:w-auto" style={{ textDecoration: 'none' }}>
                <button className="w-full sm:w-auto px-10 py-5 bg-secondary text-on-secondary rounded-2xl font-headline font-bold hover:scale-105 transition-all shadow-xl shadow-secondary/20">
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
