import React, { useEffect, useState } from 'react';
import { useSEO } from '../hooks/useSEO';

export const Servizi: React.FC = () => {
  useSEO({
    title: "Servizi - FounDreams | Web, Social & Consulenza",
    description: "Scopri i servizi di FounDreams: Realizzazione siti web ad alte prestazioni, social media management strategico e project management.",
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({ nome: '', email: '', servizio: 'Sviluppo Web', messaggio: '' });
  const [modalStatus, setModalStatus] = useState<'idle' | 'sending' | 'success'>('idle');

   // @ts-ignore
  const openModal = (type: string) => {
    setIsModalOpen(true);
    setModalStatus('idle');
  };
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus('sending');
    const emails = 'amministrazione@foundreams.it';
    const subject = encodeURIComponent(`Richiesta Servizio: ${modalForm.servizio}`);
    const body = encodeURIComponent(`Nome: ${modalForm.nome}\nEmail: ${modalForm.email}\n\nMessaggio:\n${modalForm.messaggio}`);
    setTimeout(() => {
      window.location.href = `mailto:${emails}?subject=${subject}&body=${body}`;
      setModalStatus('success');
      setTimeout(() => closeModal(), 2000);
    }, 1000);
  };

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
      <main className=" bg-surface flex-grow"><div className="flex flex-col w-full">
<section className="relative w-full overflow-hidden bg-surface-container-lowest py-20 lg:py-28 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,210,255,0.15),transparent)] pointer-events-none"></div>
<div className="absolute top-1/4 right-0 w-96 h-96 bg-tertiary-container/40 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-10 left-10 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="w-full px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
<div className="flex flex-col items-start max-w-4xl space-y-6">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/90 text-secondary text-xs font-label font-semibold tracking-wider uppercase shadow-sm"><span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span className="">FounDreams Growth Agency • Marketing, Brand & Social Authority</span></div>
<h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.1]">Scaliamo la tua impresa sul mercato. <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Brand Identity, social autorevoli e marketing che converte.</span></h1>
<p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl">Supportiamo aziende consolidate e brand emergenti nella costruzione di un'identità di mercato inconfondibile: strategie di posizionamento, gestione strategica dei canali social, piani editoriali e siti web progettati per generare vendite e lead qualificati. Misurabilità totale e ROI chiaro.</p>
<div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto relative z-30">
<a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-label font-bold uppercase tracking-wider bg-gradient-to-r from-secondary-container to-tertiary shadow-[0_0_24px_rgba(0,210,255,0.3)] hover:shadow-[0_0_36px_rgba(209,188,255,0.45)] hover:brightness-110 active:scale-[0.98] transition-all duration-300" href="#contatto-b2b">
<span className="">Richiedi Audit di Marketing & Brand</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
<div className="relative inline-block" id="services-dropdown-container">
<button aria-expanded="false" aria-haspopup="true" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-secondary shadow-sm transition-all duration-300 focus:outline-none" id="services-dropdown-btn" type="button">
<span>Esplora i Servizi di Crescita</span>
<span className="material-symbols-outlined text-base transition-transform duration-300" id="services-dropdown-icon">expand_more</span>
</button>
<div className="absolute left-0 sm:left-auto sm:right-0 mt-2.5 w-80 sm:w-88 rounded-2xl bg-surface-container/95 backdrop-blur-xl border border-outline-variant/40 shadow-2xl p-2.5 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 z-50 divide-y divide-surface-container-high/60" id="services-dropdown-menu">
<a className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container-high/70 transition-all duration-200 text-left focus:outline-none" href="javascript:void(0)">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/40 text-tertiary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
<span className="material-symbols-outlined text-xl">rocket_launch</span>
</div>
<div className="flex-grow">
<div className="flex items-center justify-between">
<span className="text-sm font-headline font-bold text-on-surface group-hover:text-tertiary transition-colors">Giovani</span>
<span className="text-[10px] font-label font-semibold uppercase px-2 py-0.5 rounded-full bg-tertiary-container/50 text-tertiary">Under 30</span>
</div>
<p className="text-xs font-body text-on-surface-variant mt-0.5 leading-snug">Idee, Mentorship & Sviluppo startup per aspiranti founder.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant/50 group-hover:text-tertiary group-hover:translate-x-0.5 transition-all text-sm shrink-0 self-center">arrow_forward</span>
</a>
<a className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container-high/70 transition-all duration-200 text-left focus:outline-none" href="#aree-competenza">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
<span className="material-symbols-outlined text-xl">corporate_fare</span>
</div>
<div className="flex-grow">
<div className="flex items-center justify-between">
<span className="text-sm font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Aziende</span>
<span className="text-[10px] font-label font-semibold uppercase px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary">Attivo</span>
</div>
<p className="text-xs font-body text-on-surface-variant mt-0.5 leading-snug">Soluzioni B2B, Brand Identity, Social Authority & Marketing.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant/50 group-hover:text-secondary group-hover:translate-x-0.5 transition-all text-sm shrink-0 self-center">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-10 border-t border-surface-container-high/70"><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container/70 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-2xl">auto_awesome</span>
</div>
<div>
<div className="text-sm font-headline font-bold text-on-surface">Brand Identity & Posizionamento</div>
<div className="text-xs text-on-surface-variant font-body">Estetica distintiva e percezione di valore premium</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container/70 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-2xl">campaign</span>
</div>
<div>
<div className="text-sm font-headline font-bold text-on-surface">Social Authority & Content</div>
<div className="text-xs text-on-surface-variant font-body">Piani editoriali strategici e community engagement</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container/70 shadow-sm"><div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0"><span className="material-symbols-outlined text-2xl">calendar_month</span></div><div className=""><div className="text-sm font-headline font-bold text-on-surface">Pianificazione Piano Editoriale</div><div className="text-xs text-on-surface-variant font-body">Linee guida tematiche, calendari contenuti e coerenza strategica</div></div></div></div>
</div>
</section>
<section className="w-full py-24 bg-surface relative scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
<div className="max-w-3xl mb-16"><span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block mb-2">Filosofia di Crescita</span>
<h2 className="font-headline font-bold text-3xl sm:text-4xl text-on-surface tracking-tight">
Non finto engagement, ma una macchina strategica di branding e acquisizione clienti.
</h2>
<p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
Troppe aziende soffrono di marketing frammentato: social gestiti a caso senza piano editoriale, campagne adv senza funnel strutturati e un'identità visiva che non comunica il reale valore d'impresa. FounDreams allinea direzione artistica, storytelling, content creation e performance marketing in una cabina di regia coesa mirata alla crescita del fatturato.
</p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="flex flex-col p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl">diamond</span>
</div>
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-1">Pilastro 01</span>
<h3 className="font-headline font-bold text-xl text-on-surface mb-3">Brand Identity & Reputazione</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed flex-grow">
Costruiamo un posizionamento autorevole e memorabile. Dalla visual identity al tone of voice, trasformiamo la percezione del vostro brand rendendolo la prima scelta naturale nel vostro settore di riferimento.
</p>
<div className="mt-6 pt-4 border-t border-surface-container-high/40 flex items-center text-xs font-label font-semibold text-secondary">
<span className="">Posizionamento premium garantito</span>
</div>
</div>
<div className="flex flex-col p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl">hub</span>
</div>
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-1">Pilastro 02</span>
<h3 className="font-headline font-bold text-xl text-on-surface mb-3">Social Media Strategy & Content</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed flex-grow">
Presidio strategico dei canali con contenuti ad alto ingaggio, video format moderni e thought leadership su LinkedIn e Instagram. Creiamo relazioni di fiducia con prospect, partner e stakeholder istituzionali.
</p>
<div className="mt-6 pt-4 border-t border-surface-container-high/40 flex items-center text-xs font-label font-semibold text-tertiary">
<span className="">Piani editoriali omnicanale</span>
</div>
</div>
<div className="flex flex-col p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md relative overflow-hidden group"><div className="w-12 h-12 rounded-xl bg-surface-container-highest text-secondary flex items-center justify-center mb-6"><span className="material-symbols-outlined text-2xl">calendar_today</span></div><span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-1">Pilastro 03</span><h3 className="font-headline font-bold text-xl text-on-surface mb-3">Pianificazione Piano Editoriale</h3><p className="font-body text-sm text-on-surface-variant leading-relaxed flex-grow">Calendarizzazione strategica, definizione di rubriche fisse, storytelling continuo e coerenza multicanale. Creiamo continuità narrativa per posizionare il brand come voce di riferimento senza interruzioni di flusso.</p><div className="mt-6 pt-4 border-t border-surface-container-high/40 flex items-center text-xs font-label font-semibold text-secondary"><span className="">Continuità narrativa e coerenza editoriale</span></div></div></div>
</div>
</section>
<section className="w-full py-24 bg-surface-container-lowest scroll-reveal transition-all duration-700 opacity-0 translate-y-10" id="aree-competenza">
<div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block mb-2">Aree d'Intervento</span>
<h2 className="font-headline font-bold text-3xl sm:text-4xl text-on-surface tracking-tight">
            Competenze integrate per vincere sul mercato digitale.
          </h2>
</div>
<p className="text-sm font-body text-on-surface-variant max-w-md">
          Un portafoglio di soluzioni modulari o integrate a servizio di direzioni generali, responsabili marketing e IT manager.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> Area 01: Brand Identity & Direzione Creativa 
<div className="p-8 sm:p-10 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center justify-between mb-6">
<span className="text-2xl font-headline font-bold text-secondary">01</span>
<span className="material-symbols-outlined text-3xl text-secondary">auto_awesome</span>
</div>
<h3 className="font-headline font-bold text-2xl text-on-surface mb-3">
Strategia di Brand Identity & Direzione Creativa
</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
Creiamo linguaggi visivi capaci di riflettere l'eccellenza della vostra impresa sul mercato. Dal restyling del marchio al corporate design system, fino alla modulazione del tone of voice istituzionale: un'identità inconfondibile che trasmette prestigio e valore.
</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Brand Positioning & Naming</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Visual Identity & Guidelines</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Copywriting & Tone of Voice</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Packaging & Corporate Assets</span>
</div>
</div>
<div className="h-44 w-full rounded-xl overflow-hidden relative">
<div className="bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-500" data-alt="Sophisticated brand identity showcase presentation on matte dark background with minimalist typography, embossed corporate stationery, sleek luxury aesthetic in electric blue and cool violet tones."></div>
</div>
</div>
<div className="p-8 sm:p-10 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center justify-between mb-6">
<span className="text-2xl font-headline font-bold text-tertiary">02</span>
<span className="material-symbols-outlined text-3xl text-tertiary">campaign</span>
</div>
<h3 className="font-headline font-bold text-2xl text-on-surface mb-3">
Gestione Canali Social & Content Marketing B2B/B2C
</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
I canali social sono il palcoscenico della credibilità e della crescita. Curiamo piani editoriali strategici (LinkedIn, Instagram, YouTube), video format coinvolgenti, thought leadership per manager e azioni continue di community building orientate alla lead generation.
</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Presidio LinkedIn & Executive Branding</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Instagram & Community Growth</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Content Creation & Video Format</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Report Mensili di Reputazione</span>
</div>
</div>
<div className="h-44 w-full rounded-xl overflow-hidden relative">
<div className="bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-500" data-alt="High tech digital marketing studio command center with analytics graphs, audience reach telemetry, professional visual content scheduling screen in modern dark office atmosphere."></div>
</div>
</div>
<div className="p-8 sm:p-10 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center justify-between mb-6">
<span className="text-2xl font-headline font-bold text-secondary">03</span>
<span className="material-symbols-outlined text-3xl text-secondary">web</span>
</div>
<h3 className="font-headline font-bold text-2xl text-on-surface mb-3">
Piattaforme Web ad Alta Conversione & UX Design
</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
Architetture web ultra-veloci pensate come macchine commerciali per convertire visitatori in clienti qualificati. Landing page persuasive, UX intuitiva e integrazioni native con CRM, garantite da solide basi tecniche e sicurezza informatica di standard moderno.
</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Conversion-Driven UI/UX</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Landing Page & Funnel Web</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Integrazione CRM & Marketing Automation</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Performance & SEO Tecnico</span>
</div>
</div>
<div className="h-44 w-full rounded-xl overflow-hidden relative">
<div className="bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-500" data-alt="Modern sleek corporate dashboard interface showing business analytics, web performance metrics, dark themed glassmorphism tech UI with subtle glowing cyan and purple lines in high definition office environment."></div>
</div>
</div>
<div className="p-8 sm:p-10 rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-lg"><div className=""><div className="flex items-center justify-between mb-6"><span className="text-2xl font-headline font-bold text-secondary-container">04</span><span className="material-symbols-outlined text-3xl text-secondary-container">calendar_month</span></div><h3 className="font-headline font-bold text-2xl text-on-surface mb-3">Pianificazione di Piano Editoriale & Content Calendar</h3><p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Organizzazione minuziosa di calendari editoriali mensili e trimestrali, studio mirato dei formati narrativi, programmazione coordinata e distribuzione strategica per massimizzare la risonanza del brand e stimolare un interesse organico qualificato.</p><div className="flex flex-wrap gap-2 mb-8"><span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Calendario Editoriale Strategico</span><span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Rubriche & Storytelling</span><span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Coerenza Multicanale</span><span className="px-3 py-1 rounded-full bg-surface-container text-xs font-label text-on-surface">Analisi di Copertura & Risonanza</span></div></div><div className="h-44 w-full rounded-xl overflow-hidden relative"><div className="bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-500" data-alt="Modern visual content planning and digital editorial calendar workspace interface with creative scheduling board in dark sleek theme."></div></div></div></div>
</div>
</section>
<section className="w-full py-24 bg-surface relative scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block mb-2">Processo Operativo</span>
<h2 className="font-headline font-bold text-3xl sm:text-4xl text-on-surface tracking-tight">
          Il nostro percorso con la tua impresa in 4 step definiti
        </h2>
<p className="font-body text-sm sm:text-base text-on-surface-variant mt-3">
          Un metodo collaudato basato su milestone chiare, verifiche intermedie e assenza totale di sorprese sui tempi e sui costi.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> Step 1 
<div className="p-6 rounded-2xl bg-surface-container-low flex flex-col relative group">
<div className="text-xs font-label font-bold px-3 py-1 rounded-full bg-surface-container text-secondary w-fit mb-4">
FASE 01
</div>
<h3 className="font-headline font-bold text-lg text-on-surface mb-2">
Brand Audit & Studio del Target
</h3>
<p className="font-body text-xs text-on-surface-variant leading-relaxed">
Analisi accurata del posizionamento attuale, benchmark dei concorrenti diretti, definizione delle buyer personas e identificazione delle opportunità di differenziazione sul mercato.
</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low flex flex-col relative group">
<div className="text-xs font-label font-bold px-3 py-1 rounded-full bg-surface-container text-tertiary w-fit mb-4">
FASE 02
</div>
<h3 className="font-headline font-bold text-lg text-on-surface mb-2">
Definizione Strategia & Identità Visiva
</h3>
<p className="font-body text-xs text-on-surface-variant leading-relaxed">
Creazione delle brand guidelines, architettura dei messaggi chiave, stesura del piano editoriale social e ideazione dei funnel di acquisizione e conversion web.
</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low flex flex-col relative group"><div className="text-xs font-label font-bold px-3 py-1 rounded-full bg-surface-container text-secondary-container w-fit mb-4">FASE 03</div><h3 className="font-headline font-bold text-lg text-on-surface mb-2">Rilascio Piano Editoriale & Canali</h3><p className="font-body text-xs text-on-surface-variant leading-relaxed">Attivazione del calendario editoriale condiviso, pubblicazione programmata dei contenuti multicanale (LinkedIn/Instagram) e allineamento con gli asset web d'impresa.</p></div>
<div className="p-6 rounded-2xl bg-surface-container-low flex flex-col relative group"><div className="text-xs font-label font-bold px-3 py-1 rounded-full bg-surface-container text-primary w-fit mb-4">FASE 04</div><h3 className="font-headline font-bold text-lg text-on-surface mb-2">Ottimizzazione Risonanza & Engagement</h3><p className="font-body text-xs text-on-surface-variant leading-relaxed">Monitoraggio analitico delle interazioni, ottimizzazione della frequenza di pubblicazione, perfezionamento dei formati ad alta resa e consolidamento della community.</p></div></div>
</div>
</section>
<section className="w-full py-16 bg-surface-container-lowest scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="w-full px-6 lg:px-16 max-w-5xl mx-auto">
<div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary-container via-surface-container to-surface-container-high shadow-xl relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-64 h-64 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start gap-4 mb-4">
<span className="material-symbols-outlined text-secondary text-3xl shrink-0">handshake</span>
<span className="text-xs font-label font-bold uppercase tracking-widest text-secondary pt-1">Il Patto di Trasparenza FounDreams</span>
</div>
<blockquote className="font-headline text-xl sm:text-2xl text-on-surface font-semibold leading-relaxed tracking-tight">
          "Trasparenza contrattuale, reportistica chiara, nessun intermediario inutile. Condividiamo ogni avanzamento e forniamo al vostro team gli strumenti per comprendere ogni singola decisione tecnica e strategica."
        </blockquote>
<div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-surface-container-highest/60 text-xs font-body text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">verified</span>
<span className="">Accordi NDA su richiesta</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">tune</span>
<span className="">Preventivazione a corpo o a sprint</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">contact_phone</span>
<span className="">Project Manager dedicato e reperibile</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-24 bg-surface scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="w-full px-6 lg:px-16 max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block mb-2">Chiarimenti & Risposte</span>
<h2 className="font-headline font-bold text-3xl sm:text-4xl text-on-surface tracking-tight">
          Domande Frequenti per Imprese
        </h2>
<p className="font-body text-sm text-on-surface-variant mt-2">
          Tutto ciò che dovete sapere prima di avviare una partnership con noi.
        </p>
</div>
<div className="space-y-4" id="faq-accordion"> FAQ 1 
<div className="rounded-2xl bg-surface-container-low transition-colors duration-200 overflow-hidden shadow-sm"><button className="w-full px-6 py-5 text-left flex items-center justify-between text-on-surface font-headline font-semibold text-base focus:outline-none"><span className="">Come viene strutturato e condiviso il piano editoriale aziendale?</span><span className="material-symbols-outlined text-secondary text-xl transition-transform duration-200 transform">expand_more</span></button><div className="px-6 pb-5 text-sm text-on-surface-variant font-body leading-relaxed hidden">Il piano editoriale viene elaborato su base mensile con un calendario condiviso e trasparente. Ogni contenuto (testi, grafiche, video e caroselli) viene sottoposto alla vostra approvazione preventiva con congruo anticipo. Vengono definite rubriche tematiche mirate, copy in linea con il tone of voice concordato e orari di pubblicazione ottimizzati.</div></div>
<div className="rounded-2xl bg-surface-container-low transition-colors duration-200 overflow-hidden shadow-sm"><button className="w-full px-6 py-5 text-left flex items-center justify-between text-on-surface font-headline font-semibold text-base focus:outline-none"><span className="">Quali tempistiche occorrono per vedere i primi risultati dal piano editoriale e dai canali social?</span><span className="material-symbols-outlined text-secondary text-xl transition-transform duration-200 transform">expand_more</span></button><div className="px-6 pb-5 text-sm text-on-surface-variant font-body leading-relaxed hidden">L'innalzamento dell'autorevolezza e della coerenza visiva è immediato già dalle prime settimane di pubblicazione coordinata. La crescita di una community fidelizzata, dell'engagement organico e delle opportunità di networking qualificato si consolida stabilmente nell'arco di 60-90 giorni di continuità editoriale.</div></div>
<div className="rounded-2xl bg-surface-container-low transition-colors duration-200 overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex items-center justify-between text-on-surface font-headline font-semibold text-base focus:outline-none">
<span className="">Cosa comprende esattamente il rilascio di un progetto di Brand Identity?</span>
<span className="material-symbols-outlined text-secondary text-xl transition-transform duration-200 transform">expand_more</span>
</button>
<div className="px-6 pb-5 text-sm text-on-surface-variant font-body leading-relaxed hidden">
Consegniamo un Brand Book completo e operativo: nuovo logotipo con tutte le declinazioni vettoriali, palette cromatica primaria e secondaria, studio tipografico, regole di applicazione per digital e stampa, linee guida per il tone of voice e template pronti all'uso per i canali social e le presentazioni aziendali.
</div>
</div>
<div className="rounded-2xl bg-surface-container-low transition-colors duration-200 overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex items-center justify-between text-on-surface font-headline font-semibold text-base focus:outline-none">
<span className="">Come misurate il ritorno sull'investimento (ROI) delle nostre campagne marketing?</span>
<span className="material-symbols-outlined text-secondary text-xl transition-transform duration-200 transform">expand_more</span>
</button>
<div className="px-6 pb-5 text-sm text-on-surface-variant font-body leading-relaxed hidden">
Implementiamo sistemi di tracciamento avanzati (GA4, Meta Pixel Server-Side, Conversion API) rispettosi delle normative GDPR. Ogni mese condividiamo una dashboard chiara con KPI concreti: Costo per Lead (CPL), tasso di conversione delle landing page, contatti qualificati generati e incidenza sul fatturato vendite.
</div>
</div></div>
</div>
</section>
<section className="w-full py-24 bg-surface-container-lowest relative overflow-hidden scroll-reveal transition-all duration-700 opacity-0 translate-y-10" id="contatto-b2b">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(32,0,85,0.25),transparent)] pointer-events-none"></div>
<div className="w-full px-6 lg:px-16 max-w-5xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-12"><span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block mb-2">Audit Strategico Gratuito</span>
<h2 className="font-headline font-bold text-3xl sm:text-4xl text-on-surface tracking-tight">
Pronti ad accelerare il brand e moltiplicare i vostri clienti?
</h2>
<p className="font-body text-sm sm:text-base text-on-surface-variant mt-3">
Prenotate un audit preliminare di 30 minuti con i nostri strategist di marketing e brand positioning. Analizziamo le vostre opportunità di crescita senza alcun impegno commerciale.
</p></div>
<div className="p-8 sm:p-12 rounded-3xl bg-surface-container-high/90 backdrop-blur-xl shadow-2xl">
<form className="space-y-6" id="b2b-contact-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
<div>
<label className="block text-xs font-label font-semibold text-on-surface mb-2" htmlFor="b2b-name">Nome e Cognome *</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container border-0 ring-0 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary text-sm" id="b2b-name" placeholder="es. Ing. Roberto Ferri" required type="text" />
</div>
<div>
<label className="block text-xs font-label font-semibold text-on-surface mb-2" htmlFor="b2b-company">Azienda / P.IVA *</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container border-0 ring-0 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary text-sm" id="b2b-company" placeholder="es. Apex Impianti S.p.A." required type="text" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
<div>
<label className="block text-xs font-label font-semibold text-on-surface mb-2" htmlFor="b2b-email">Email Aziendale *</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container border-0 ring-0 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary text-sm" id="b2b-email" placeholder="direzione@azienda.it" required type="email" />
</div>
<div>
<label className="block text-xs font-label font-semibold text-on-surface mb-2" htmlFor="b2b-phone">Recapito Telefonico Diretto</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container border-0 ring-0 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary text-sm" id="b2b-phone" placeholder="+39 02 ..." type="tel" />
</div>
</div>
<div>
<label className="block text-xs font-label font-semibold text-on-surface mb-3">Servizi d'interesse (Seleziona uno o più ambiti):</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3"><label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors">
<input className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-secondary focus:ring-offset-0" name="services" type="checkbox" value="brand" />
<span className="text-xs font-body text-on-surface">Brand Identity & Rebranding</span>
</label>
<label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors">
<input className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-secondary focus:ring-offset-0" name="services" type="checkbox" value="social" />
<span className="text-xs font-body text-on-surface">Gestione Social & Content Creation</span>
</label>
<label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors">
<input className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-secondary focus:ring-offset-0" name="services" type="checkbox" value="web" />
<span className="text-xs font-body text-on-surface">Sito Web ad Alta Conversione</span>
</label></div>
</div>
<div>
<label className="block text-xs font-label font-semibold text-on-surface mb-2" htmlFor="b2b-message">Breve sintesi degli obiettivi o sfide attuali *</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-surface-container border-0 ring-0 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary text-sm resize-none" id="b2b-message" placeholder="Condividete contesto, tempistiche desiderate ed eventuali criticità riscontrate con le attuali infrastrutture..." required rows={4}></textarea>
</div>
<div className="flex items-start gap-3">
<input className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-secondary focus:ring-offset-0 mt-0.5" id="nda-request" type="checkbox" />
<label className="text-xs font-body text-on-surface-variant cursor-pointer" htmlFor="nda-request">
              Richiediamo la firma preventiva di un Accordo di Riservatezza (NDA) prima del primo briefing strategico.
            </label>
</div>
<div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-xs text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-base">lock</span>
              Risposta garantita da un nostro referente entro 24 ore lavorative.
            </span>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-label font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-secondary-container via-secondary to-tertiary text-on-secondary shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<span className="">Invia Richiesta di Contatto Aziendale</span>
<span className="material-symbols-outlined text-base">send</span>
</button>
</div>
</form>
<div className="hidden mt-6 p-4 rounded-xl bg-surface-container text-secondary text-sm flex items-center gap-3" id="b2b-success-alert">
<span className="material-symbols-outlined text-xl">check_circle</span>
<span className="">Richiesta inviata con successo. Un consulente dedicato di FounDreams prenderà in carico la vostra scheda entro le prossime 24 ore.</span>
</div>
</div>
</div>
</section>

</div></main>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md" onClick={closeModal}>
          <div className="relative w-full max-w-lg rounded-3xl bg-surface-container-high border border-outline-variant/40 p-6 sm:p-8 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" onClick={closeModal}>
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <div className="text-left">
              <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">Richiedi Servizio</span>
              <h3 className="font-headline font-bold text-2xl text-on-surface mt-1">Iniziamo Subito</h3>
            </div>
            {modalStatus === 'success' ? (
              <div className="text-center py-8 space-y-2 mt-6">
                <span className="material-symbols-outlined text-secondary text-[48px] animate-bounce">check_circle</span>
                <h4 className="font-headline font-bold text-xl text-on-surface">Richiesta Inviata!</h4>
              </div>
            ) : (
              <form className="mt-6 space-y-4 text-left" onSubmit={handleModalSubmit}>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5">Il tuo Nome</label>
                  <input className="w-full px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface focus:outline-none focus:border-secondary text-sm" required type="text" value={modalForm.nome} onChange={(e) => setModalForm(prev => ({...prev, nome: e.target.value}))} />
                </div>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5">Email</label>
                  <input className="w-full px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface focus:outline-none focus:border-secondary text-sm" required type="email" value={modalForm.email} onChange={(e) => setModalForm(prev => ({...prev, email: e.target.value}))} />
                </div>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5">Quale servizio ti interessa?</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface focus:outline-none focus:border-secondary text-sm" value={modalForm.servizio} onChange={(e) => setModalForm(prev => ({...prev, servizio: e.target.value}))}>
                    <option>Sviluppo Web / E-Commerce</option>
                    <option>Piani Editoriali & Social Media</option>
                    <option>Brand Identity</option>
                    <option>Consulenza & Project Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-label font-semibold text-on-surface mb-1.5">Dettagli</label>
                  <textarea className="w-full px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface focus:outline-none focus:border-secondary text-sm resize-none" required rows={3} value={modalForm.messaggio} onChange={(e) => setModalForm(prev => ({...prev, messaggio: e.target.value}))} />
                </div>
                <button className="w-full py-3.5 rounded-full font-label font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-secondary-container via-secondary to-tertiary text-on-secondary shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2" type="submit" disabled={modalStatus === 'sending'}>
                  <span>{modalStatus === 'sending' ? 'Invio in corso...' : 'Invia'}</span>
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
