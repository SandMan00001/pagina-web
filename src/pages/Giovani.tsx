import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Giovani: React.FC = () => {
  useSEO({
    title: "Giovani Imprenditori - FounDreams",
    description: "Il trampolino per la tua autonomia digitale. Scopri i servizi dedicati ai giovani imprenditori.",
    keywords: [],
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development & Digital Marketing",
        "provider": {
          "@type": "Organization",
          "name": "FounDreams"
        },
        "areaServed": "Italy",
        "description": "Servizi professionali di realizzazione siti web, gestione social media, cloud architecture e cybersecurity."
      }
]
  });

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="overflow-x-clip">
      <main className=" bg-surface flex-grow"><div className="flex flex-col w-full overflow-hidden">
<div className="relative w-full">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-b from-secondary-container/20 via-tertiary/15 to-transparent blur-[130px] pointer-events-none rounded-full"></div>
<div className="absolute top-80 right-4 w-[360px] h-[360px] bg-secondary/10 blur-[110px] pointer-events-none rounded-full"></div>
<div className="absolute top-96 left-4 w-[360px] h-[360px] bg-tertiary-container/35 blur-[120px] pointer-events-none rounded-full"></div>
<section className="relative px-6 lg:px-16 pt-12 md:pt-20 pb-20 max-w-7xl mx-auto w-full flex flex-col items-center text-center scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high/90 border border-secondary-container/30 backdrop-blur-md shadow-[0_0_24px_rgba(0,210,255,0.15)] mb-8 transition-transform hover:scale-105 duration-300">
<span className="flex h-2 w-2 rounded-full bg-secondary-container animate-ping"></span>
<span className="text-xs md:text-sm font-label font-semibold text-secondary tracking-wide">
  Spazio dedicato ai giovani (18-30 anni)
</span>
</div>
<h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] max-w-5xl text-on-surface">
  Dai forma alla tua visione. <br className="hidden sm:inline" />
<span className="bg-gradient-to-r from-secondary via-secondary-container to-tertiary bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,210,255,0.3)]">
    Insieme creiamo il tuo futuro imprenditoriale.
  </span>
</h1>
<p className="mt-7 font-body text-base md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
  Hai tra i 18 e i 30 anni e un progetto che merita di prendere vita? <strong className="text-on-surface font-semibold">FounDreams</strong> è il punto d'incontro tra la tua determinazione e la nostra esperienza tecnica. Lavoriamo al tuo fianco per sviluppare la tua idea, trasmetterti le competenze necessarie e darti ogni strumento per guidarla con sicurezza e piena autonomia.
</p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<Link to="/contattaci" className="open-candidatura-modal w-full sm:w-auto px-8 py-4 rounded-full font-label font-semibold text-sm uppercase tracking-wider bg-gradient-to-r from-secondary-container via-secondary to-tertiary text-on-secondary shadow-[0_0_35px_rgba(0,210,255,0.4)] hover:shadow-[0_0_50px_rgba(209,188,255,0.6)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
<span className="">Raccontaci la tua idea</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
<a className="w-full sm:w-auto px-7 py-4 rounded-full font-label font-semibold text-sm text-on-surface bg-surface-container-high/60 hover:bg-surface-container-highest border border-outline-variant/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 shadow-sm" href="#come-lavoriamo">
<span className="material-symbols-outlined text-secondary text-lg">sync_alt</span>
<span className="">Come lavoriamo insieme</span>
</a>
</div>
<div className="mt-16 pt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md shadow-md text-left">
<div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<div>
<div className="font-headline font-bold text-on-surface text-base">100% Proprietà e Autonomia</div>
<div className="font-body text-xs text-on-surface-variant">L'idea e ogni riga di codice restano tue</div>
</div>
</div>
<div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md shadow-md text-left">
<div className="w-10 h-10 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-2xl">school</span>
</div>
<div>
<div className="font-headline font-bold text-on-surface text-base">Affiancamento & Formazione</div>
<div className="font-body text-xs text-on-surface-variant">Impari a conoscere e gestire la tua realtà</div>
</div>
</div>
<div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md shadow-md text-left">
<div className="w-10 h-10 rounded-xl bg-secondary-container/15 flex items-center justify-center text-secondary-container shrink-0">
<span className="material-symbols-outlined text-2xl">handshake</span>
</div>
<div>
<div className="font-headline font-bold text-on-surface text-base">Supporto Continuativo</div>
<div className="font-body text-xs text-on-surface-variant">Pronti a crescere insieme dopo il lancio</div>
</div>
</div>
</div>
</section>
</div>
<section className="px-6 lg:px-16 max-w-6xl mx-auto w-full my-6 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low p-2 md:p-3 border border-outline-variant/30">
<div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden bg-cover bg-center flex items-end p-6 md:p-10" data-alt="A young determined gen z tech founder wearing a minimal black hoodie looking at a high-tech holographic interactive dashboard showing real-time code and user traction, dark navy cinematic lighting with neon cyan and lavender accents, editorial hyper-modern atmosphere, photorealistic 8k" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAwD_qwAbURmPXMoszfkF50vR-DKSopPRv_MmRYP6af8DL_D9-fI7Q4W3bw1TuR8zBFD9RHOVTewVEX_H3ObyxBNRyUdJGbOVdHT9Tk2vF74c6Sxgaxz40R_NIBnO6LmRBJOEGMoRvpJDtl-tqrTTHlK_gvsViqoxFKhLczC_yGKdj_KcMempCcGP6MLRvU8Rv3MdfHXkizN-mLck6Ou3mPvFCjQbAMNpmI6cfkwEsWhPtJV8tnCy6Vyw)' }}>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
<div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
<div className="max-w-xl">
<span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-xs font-label uppercase tracking-widest backdrop-blur-md border border-secondary-container/40">Fucina di Talenti</span>
<p className="font-headline text-xl sm:text-2xl md:text-3xl text-on-surface font-semibold mt-2">
    Non creiamo vincoli. Creiamo il trampolino per la tua autonomia.
  </p>
</div>
<div className="flex items-center gap-2 bg-surface-container-highest/85 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg shrink-0 border border-outline-variant/40">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
<span className="text-xs font-label text-on-surface font-medium">Sessioni Conoscitive Aperte</span>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 lg:px-16 py-20 max-w-7xl mx-auto w-full scroll-reveal transition-all duration-700 opacity-0 translate-y-10" id="come-lavoriamo">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-label font-bold tracking-widest uppercase text-tertiary">La Nostra Filosofia di Collaborazione</span>
<h2 className="font-headline font-bold text-3xl md:text-5xl text-on-surface mt-3">
  Non un vincolo, ma il tuo trampolino di lancio.
</h2>
<p className="font-body text-on-surface-variant text-base md:text-lg mt-4">
  Crediamo in un modello fondato su onestà, trasparenza e rispetto totale dell'identità di chi crea. Non ci impossessiamo mai del tuo progetto: ti mettiamo in condizione di guidarlo.
</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
<div className="relative rounded-3xl p-8 md:p-10 bg-surface-container border border-secondary/20 shadow-2xl flex flex-col justify-between overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-2xl">key</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl text-on-surface">Libertà & Competenze Reali</h3>
<p className="text-xs text-secondary font-semibold">Sei tu al timone del tuo progetto</p>
</div>
</div>
<span className="text-xs px-3 py-1 rounded-full bg-secondary/15 text-secondary font-semibold">100% Tuo</span>
</div>
<ul className="space-y-5 text-sm md:text-base font-body text-on-surface">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<span className=""><strong>Proprietà intellettuale esclusiva:</strong> il codice, i dati, i marchi e i canali rimangono interamente tuoi, senza alcuna cessione né vincoli contrattuali forzati.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<span className=""><strong>Formazione passo dopo passo:</strong> ti spieghiamo ogni scelta tecnica e ti guidiamo nell'uso della piattaforma, perché tu possa comprendere a fondo cosa c'è dietro il prodotto.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<span className=""><strong>Piena indipendenza:</strong> se un giorno deciderai di gestire tutto in completa autonomia o con il tuo team interno, avrai tutte le competenze e i file per farlo serenamente.</span>
</li>
</ul>
</div>
<div className="relative z-10 mt-8 p-4 rounded-xl bg-surface-container-high text-xs text-on-surface-variant flex items-center gap-2 border border-outline-variant/30">
<span className="material-symbols-outlined text-secondary">explore</span>
<span className="">Il nostro traguardo è renderti un fondatore fiducioso, consapevole e padrone delle proprie scelte.</span>
</div>
</div>
<div className="relative rounded-3xl p-8 md:p-10 bg-surface-container border border-tertiary/20 shadow-2xl flex flex-col justify-between overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-tertiary/15 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-2xl">favorite</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl text-on-surface">Crescita & Continuità nel Tempo</h3>
<p className="text-xs text-tertiary font-semibold">Un alleato affidabile anche dopo il lancio</p>
</div>
</div>
<span className="text-xs px-3 py-1 rounded-full bg-tertiary/15 text-tertiary font-semibold">Partnership di Valore</span>
</div>
<ul className="space-y-5 text-sm md:text-base font-body text-on-surface">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl shrink-0 mt-0.5">check_circle</span>
<span className=""><strong>Mantenimento ed evoluzione tecnica:</strong> siamo felici e pronti a rimanere al tuo fianco per aggiornare le tecnologie, scalare l'infrastruttura e aggiungere nuove funzionalità.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl shrink-0 mt-0.5">check_circle</span>
<span className=""><strong>Marketing e canali social:</strong> supporto continuo nella comunicazione digitale, content strategy e campagne mirate per attrarre e fidelizzare la tua community.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl shrink-0 mt-0.5">check_circle</span>
<span className=""><strong>Sicurezza informatica costante:</strong> monitoraggio attento, protezione dell'integrità dei dati e salvaguardia della tua reputazione online 24/7.</span>
</li>
</ul>
</div>
<div className="relative z-10 mt-8 p-4 rounded-xl bg-surface-container-high text-xs text-on-surface-variant flex items-center gap-2 border border-outline-variant/30">
<span className="material-symbols-outlined text-tertiary">handshake</span>
<span className="">Non resti mai solo: un supporto flessibile che si adatta alle tue esigenze e alla crescita del tuo business.</span>
</div>
</div>
</div>
</section>
<section className="px-6 lg:px-16 py-20 max-w-7xl mx-auto w-full scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-label font-bold tracking-widest uppercase text-secondary">Il Nostro Percorso Condiviso</span>
<h2 className="font-headline font-bold text-3xl md:text-5xl text-on-surface mt-3">
  I 4 passi per trasformare la tua idea in realtà
</h2>
<p className="font-body text-on-surface-variant text-base md:text-lg mt-4">
  Un tragitto chiaro, trasparente e formativo. Non lavoriamo dietro porte chiuse: costruiamo ogni dettaglio insieme a te.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group relative rounded-3xl p-7 bg-surface-container border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-secondary/40">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-label font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-secondary/15 text-secondary">
      Passo 01
    </span>
<span className="text-3xl font-headline font-bold text-surface-container-highest">01</span>
</div>
<div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-5 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">hearing</span>
</div>
<h3 className="font-headline font-bold text-xl text-on-surface mb-3">
    Visione & Definizione del Progetto
  </h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">
    Ascoltiamo con attenzione la tua idea. Analizziamo insieme la fattibilità, definiamo i punti di forza e strutturiamo un piano d'azione realistico e su misura per i tuoi obiettivi.
  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-xs text-secondary font-medium">
<span className="">Ascolto sincero</span> • <span className="">Studio di fattibilità</span>
</div>
</div>
<div className="group relative rounded-3xl p-7 bg-surface-container border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-tertiary/40">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-label font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-tertiary/15 text-tertiary">
      Passo 02
    </span>
<span className="text-3xl font-headline font-bold text-surface-container-highest">02</span>
</div>
<div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-5 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">code_blocks</span>
</div>
<h3 className="font-headline font-bold text-xl text-on-surface mb-3">
    Sviluppo, Architettura & Formazione
  </h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">
    Diamo vita alla piattaforma affiancandoti passo dopo passo. Ti formiamo costantemente per farti capire il funzionamento del sistema e metterti in grado di gestirlo con serenità.
  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-xs text-tertiary font-medium">
<span className="">Codice trasparente</span> • <span className="">Mentoring pratico</span>
</div>
</div>
<div className="group relative rounded-3xl p-7 bg-surface-container border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-secondary-container/40">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-label font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-secondary-container/15 text-secondary-container">
      Passo 03
    </span>
<span className="text-3xl font-headline font-bold text-surface-container-highest">03</span>
</div>
<div className="w-12 h-12 rounded-2xl bg-secondary-container/10 flex items-center justify-center text-secondary-container mb-5 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">campaign</span>
</div>
<h3 className="font-headline font-bold text-xl text-on-surface mb-3">
    Marketing, Validazione & Crescita
  </h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">
    Lancio sul mercato con una strategia adatta alla tua identità. Raggiungiamo i primi utenti effettivi, raccogliamo feedback concreti e ottimizziamo l'esperienza di utilizzo.
  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-xs text-secondary-container font-medium">
<span className="">Lancio efficace</span> • <span className="">Primi utenti reali</span>
</div>
</div>
<div className="group relative rounded-3xl p-7 bg-surface-container border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-primary/40">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-label font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/15 text-primary">
      Passo 04
    </span>
<span className="text-3xl font-headline font-bold text-surface-container-highest">04</span>
</div>
<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">security</span>
</div>
<h3 className="font-headline font-bold text-xl text-on-surface mb-3">
    Continuità & Protezione nel Tempo
  </h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">
    Siamo a tua disposizione per continuare ad affiancarti: mantenimento della piattaforma, cura costante della comunicazione social e monitoraggio della sicurezza informatica.
  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-xs text-primary font-medium">
<span className="">Manutenzione continua</span> • <span className="">Social & Cyber</span>
</div>
</div>
</div>
</section>
<section className="px-6 lg:px-16 py-16 max-w-7xl mx-auto w-full scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="relative rounded-3xl bg-gradient-to-br from-primary-container via-surface-container-high to-tertiary-container/45 p-8 sm:p-12 md:p-16 shadow-2xl border border-outline-variant/40 overflow-hidden">
<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[90px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
<div className="shrink-0 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-secondary-container via-secondary to-tertiary p-1 shadow-[0_0_35px_rgba(0,210,255,0.4)]">
<div className="w-full h-full rounded-full bg-surface-dim flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-secondary">forum</span>
</div>
</div>
<span className="font-headline font-bold text-lg text-on-surface mt-4">Spazio Under 26</span>
<span className="text-xs text-on-surface-variant uppercase tracking-widest font-label">Accoglienza & Rispetto</span>
</div>
<div className="space-y-4 text-center md:text-left">
<div className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label text-xs uppercase tracking-wider font-semibold">
      Uno Spazio Dove Esprimersi ed Essere Ascoltati
    </div>
<blockquote className="font-headline font-semibold text-2xl sm:text-3xl md:text-4xl text-on-surface leading-snug">
      “Hai tra i 18 e i 30 anni? Nessuno ti dirà mai che sei troppo giovane o che la tua idea non ha valore. Qui trovi ascolto, trasparenza e rispetto per le tue aspirazioni.”
    </blockquote>
<p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
      Sappiamo quanto sia frustrante avere una visione chiara e sentirsi dire che serve troppa esperienza pregressa. FounDreams è nato esattamente per dare voce, strumenti tecnici e fiducia concreta alla nuova generazione di fondatori italiani.
    </p>
</div>
</div>
</div>
</section>
<section className="px-6 lg:px-16 max-w-7xl mx-auto w-full my-6 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
<div className="rounded-3xl overflow-hidden bg-cover bg-center h-80 md:h-96 shadow-xl relative border border-outline-variant/30" data-alt="Two creative young italian co-founders in their early 20s collaborating around a sleek laptop in a modern industrial glass loft office, discussing a clean modern mobile app UI interface, vibrant blue and purple screen reflection, ambient moody lighting, authentic expressions" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAb1oaT-8-coC6FciFZLkDhgv4fRIdh5QJDQSa2SgfoJeTODyhK22rRq96S8BpuQy6qOqjhZO3MrmYoS0mpD751jje6Z2lixIQuFSXw9de6qw7B9XpgxDvADhE5s9VFsKEGOT_fRtYw3Kamk2PcNiWdBLppGN5-khcHoTseBO-guql2zuauzqlMKcFqwABTV7BrisPf7b6JiINUGlYvFJ_yKizUf8094ZOJY-r6kipRbJqDxg1KDIh2tw)' }}>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="font-headline font-bold text-xl text-on-surface">Un rapporto diretto, leale e alla pari.</p>
<p className="text-xs text-on-surface-variant mt-1">Confronti costruttivi e aggiornamenti continui con il tuo ritmo.</p>
</div>
</div>
<div className="rounded-3xl p-8 md:p-10 bg-surface-container border border-outline-variant/30 flex flex-col justify-center space-y-6 shadow-xl">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-secondary-container"></span>
<span className="text-xs font-label font-bold text-secondary uppercase tracking-widest">Collaborazione Dinamica</span>
</div>
<h3 className="font-headline font-bold text-2xl md:text-3xl text-on-surface">
    Chiarezza su ogni decisione. Nessun tecnicismo usato per escluderti.
  </h3>
<p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
    Comunichiamo in modo limpido e immediato. Ogni sessione è orientata a farti vedere l'evoluzione reale della tua idea: discutiamo le scelte strategiche, condividiamo i file e verifichiamo assieme i progressi con trasparenza totale.
  </p>
<div className="flex flex-wrap items-center gap-3 pt-2">
<div className="px-3.5 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-label text-on-surface">🤝 Dialogo costante</div>
<div className="px-3.5 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-label text-on-surface">💡 Apprendimento pratico</div>
<div className="px-3.5 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-label text-on-surface">🛡️ Onestà e serietà</div>
</div>
</div>
</div>
</section>
<section className="px-6 lg:px-16 py-20 max-w-5xl mx-auto w-full scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="text-center max-w-2xl mx-auto mb-14">
<span className="text-xs font-label font-bold tracking-widest uppercase text-tertiary">Domande & Risposte Chiare</span>
<h2 className="font-headline font-bold text-3xl md:text-5xl text-on-surface mt-3">
  FAQ per giovani aspiranti founder
</h2>
<p className="font-body text-on-surface-variant text-base mt-3">
  Tutto ciò che desideri sapere sulla proprietà del progetto, la formazione e il nostro affiancamento.
</p>
</div>
<div className="space-y-4">
<details className="group rounded-2xl bg-surface-container border border-outline-variant/30 p-6 shadow-md transition-all duration-300 open:bg-surface-container-high cursor-pointer" open>
<summary className="flex items-center justify-between font-headline font-semibold text-lg md:text-xl text-on-surface list-none">
<span className="">Cosa succede se un domani voglio gestire tutto in completa autonomia?</span>
<span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 pt-4 border-t border-outline-variant/20 text-sm md:text-base font-body text-on-surface-variant leading-relaxed">
  Sarai pienamente libero e capace di farlo. È uno dei pilastri centrali di FounDreams: non applichiamo nessun vincolo di esclusiva forzata né blocchi tecnici. Ricevi l'intero codice sorgente, l'accesso a tutti i canali e la formazione su come gestirli. Il progetto è tuo al 100%.
</div>
</details>
<details className="group rounded-2xl bg-surface-container border border-outline-variant/30 p-6 shadow-md transition-all duration-300 open:bg-surface-container-high cursor-pointer" open>
<summary className="flex items-center justify-between font-headline font-semibold text-lg md:text-xl text-on-surface list-none">
<span className="">Come funziona l'affiancamento e la formazione durante lo sviluppo?</span>
<span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 pt-4 border-t border-outline-variant/20 text-sm md:text-base font-body text-on-surface-variant leading-relaxed">
  Non ci limitiamo a consegnare un lavoro finito senza spiegazioni. Durante tutto lo sviluppo organizziamo sessioni individuali dedicate in cui ti illustriamo il funzionamento della piattaforma, come monitorare le statistiche, gestire i contenuti e comprendere le scelte architetturali fondamentali.
</div>
</details>
<details className="group rounded-2xl bg-surface-container border border-outline-variant/30 p-6 shadow-md transition-all duration-300 open:bg-surface-container-high cursor-pointer" open>
<summary className="flex items-center justify-between font-headline font-semibold text-lg md:text-xl text-on-surface list-none">
<span className="">Potete continuare a gestire la piattaforma, il marketing e la sicurezza anche dopo il lancio?</span>
<span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 pt-4 border-t border-outline-variant/20 text-sm md:text-base font-body text-on-surface-variant leading-relaxed">
  Certamente. Se preferisci concentrarti sugli aspetti commerciali o sulla strategia generale del tuo brand, siamo strutturati per rimanere al tuo fianco in modo continuativo, curando l'aggiornamento tecnico del sito o app, la gestione e crescita dei canali social e la costante protezione informatica.
</div>
</details>
<details className="group rounded-2xl bg-surface-container border border-outline-variant/30 p-6 shadow-md transition-all duration-300 open:bg-surface-container-high cursor-pointer">
<summary className="flex items-center justify-between font-headline font-semibold text-lg md:text-xl text-on-surface list-none">
<span className="">Ho tra i 18 e i 30 anni e solo una bozza preliminare: posso candidarmi lo stesso?</span>
<span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 pt-4 border-t border-outline-variant/20 text-sm md:text-base font-body text-on-surface-variant leading-relaxed">
  Assolutamente sì. Non serve avere specifiche competenze informatiche o presentazioni complesse. La prima sessione conoscitiva serve proprio ad ascoltarti con rispetto, comprendere il tuo obiettivo e capire insieme qual è il percorso più semplice e sostenibile per iniziare.
</div>
</details>
</div>
</section>
<section className="px-6 lg:px-16 pt-10 pb-28 max-w-6xl mx-auto w-full scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="relative rounded-3xl bg-gradient-to-br from-surface-container-highest via-surface-container to-surface-container-low p-8 sm:p-12 md:p-16 shadow-2xl border border-outline-variant/40 overflow-hidden text-center flex flex-col items-center">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute -bottom-20 right-10 w-72 h-72 bg-tertiary/20 rounded-full blur-[90px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-label uppercase tracking-widest font-semibold mb-6">
<span className="material-symbols-outlined text-sm">rocket_launch</span>
<span className="">Costruiamo Insieme</span>
</div>
<h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-on-surface tracking-tight leading-tight">
    Hai un'idea che merita di esistere? <br />
<span className="text-secondary">Diamo voce alla tua ambizione.</span>
</h2>
<p className="font-body text-base md:text-lg text-on-surface-variant mt-6 leading-relaxed max-w-2xl mx-auto">
    Fissa un confronto informale e autentico con noi. Valuteremo insieme il tuo progetto con trasparenza, serietà e senza alcun impegno.
  </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<Link to="/contattaci" className="open-candidatura-modal w-full sm:w-auto px-9 py-4 rounded-full font-label font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-secondary-container via-secondary to-tertiary text-on-secondary shadow-[0_0_40px_rgba(0,210,255,0.45)] hover:shadow-[0_0_60px_rgba(209,188,255,0.7)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3">
<span className="">Raccontaci la tua idea</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
<div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant font-label">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-base">schedule</span>
      Incontro conoscitivo di 30 minuti
    </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-base">lock</span>
      Piena riservatezza sul tuo concept
    </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-base">verified</span>
      Ascolto autentico e consigli costruttivi
    </span>
</div>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
};
