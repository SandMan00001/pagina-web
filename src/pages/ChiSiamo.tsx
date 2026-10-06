import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const ChiSiamo: React.FC = () => {
  useSEO({
    title: "Chi Siamo - FounDreams | Uniamo Creatività e Tecnologia",
    description: "Scopri la storia di FounDreams. Siamo un team unito che unisce l'esperienza tecnica alla creatività per costruire soluzioni digitali all'avanguardia.",
    keywords: [],
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "FounDreams",
          "description": "FounDreams è la web agency che unisce eccellenza tecnica e innovazione visionaria."
        }
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
      <main className="">
<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse-glow"></div>
<div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse-glow"></div>
</div>
<div className="max-w-4xl mx-auto text-center z-10 reveal-on-scroll active">
<h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Dove le <span className="gradient-text">idee</span> diventano <span className="text-primary">realtà</span>.
            </h1>
<p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
                Visione Digitale è uno studio digitale boutique dove l'intuizione del marketing, la tecnologia all'avanguardia e la cybersicurezza si fondono per forgiare il vostro futuro digitale.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<Link to="/contattaci" className="w-full sm:w-auto px-8 py-4 bg-secondary text-on-secondary rounded-xl font-headline font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95">Parliamo</Link>
<button className="w-full sm:w-auto px-8 py-4 border border-outline-variant text-on-surface rounded-xl font-headline font-bold hover:bg-surface-bright/20 transition-all hover:scale-105 active:scale-95">
                    Scopri la nostra storia
                </button>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-8 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal-on-scroll active">
<span className="text-secondary font-headline font-bold tracking-widest uppercase text-sm">La Nostra Genesi</span>
<h2 className="font-display text-4xl font-semibold leading-tight">Il Concetto di FounDreams</h2>
<p className="text-on-surface-variant text-lg leading-relaxed">
Il nostro nome deriva da <em>Foundry Dreams</em> ("fucina dei sogni"), un concetto che rappresenta ciò che vogliamo essere: un luogo in cui idee, ambizioni e progetti vengono sviluppati, rafforzati e trasformati in opportunità reali.
</p>
<p className="text-on-surface-variant text-lg leading-relaxed">
Unendo marketing, crescita digitale, sviluppo, consulenza informatica e sicurezza, adottiamo un approccio che mette al centro non solo la visibilità e la crescita del business, ma anche la qualità, l'affidabilità e la protezione delle soluzioni realizzate.
</p>
</div>
<div className="relative h-[400px] rounded-2xl overflow-hidden glass-card p-2 reveal-on-scroll animate-float active">
<div className="w-full h-full rounded-xl bg-surface-container relative overflow-hidden group outline-none" tabIndex={0}>
<div className="absolute inset-0 bg-gradient-to-tr from-primary-container/40 to-transparent z-10"></div>
<img alt="Incontro strategico" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-focus:grayscale-0 group-active:grayscale-0 group-hover:scale-105 group-focus:scale-105 group-active:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL0GZXzBhVOgvRsp5fU9jYTgGVPzfMJCUsmj-rY4ORyMbbWiZSO4yG42o8f_LFGzzQ5oqLvolzX38kz124Gp1v4BYSBdvp6ahd6Q6hff7_Tu2PCMc2vUOojUZXHKsyNAKAYvam0n1bzCg3DyxB1REOmR-n4MlR8AQoYeONjFXvizmrtSMrLFS7_meN3rghiSbeiDywhNomwvUnQMQ8P-Eww7jn17xKL5YPVzU7g92hHLpR6HRAOgA_G2dV4VBA0e-eI2eQgJUYiXF9" />
</div>
</div>
</div>
</section>
<section className="py-24 bg-surface-container-lowest/50 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass-card p-10 rounded-2xl glow-hover reveal-on-scroll active">
<div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12">
<span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
</div>
<h3 className="font-display text-2xl font-bold mb-4">La nostra Missione</h3>
<p className="text-on-surface-variant leading-relaxed"></p><p className="" data-end="2506" data-start="2363"></p><p className="" data-path-to-node="5,1">Il nostro lavoro quotidiano in <b data-index-in-node="31" data-path-to-node="5,1">FounDreams</b> consiste nel fornire ad aziende e privati le competenze e gli strumenti necessari per l'evoluzione del loro business. Lo facciamo attraverso tre azioni concrete:</p><ul data-path-to-node="5,2"><li className=""><p className="" data-path-to-node="5,2,0,0"><b data-index-in-node="0" data-path-to-node="5,2,0,0">- Sviluppare con intelligenza:</b> Progettiamo ecosistemi digitali ottimizzati tramite <b data-index-in-node="81" data-path-to-node="5,2,0,0">automazioni avanzate</b> e protetti da una <b data-index-in-node="120" data-path-to-node="5,2,0,0">sicurezza informatica</b> nativa, eliminando i rischi e ottimizzando i tempi di gestione.</p></li><li className=""><p className="" data-path-to-node="5,2,1,0"><b data-index-in-node="0" data-path-to-node="5,2,1,0">- Massimizzare il valore:</b> Applichiamo strategie di <b data-index-in-node="49" data-path-to-node="5,2,1,0">marketing d'impatto</b>, sfruttando ogni piattaforma e servizio disponibile sul mercato per posizionare il tuo prodotto al massimo del suo valore commerciale.</p></li><li className=""><p className="" data-path-to-node="5,2,2,0"><b data-index-in-node="0" data-path-to-node="5,2,2,0">- Coltivare il talento, non i manuali:</b> Diamo ascolto e priorità all'elasticità mentale e all'intuizione dei singoli. Crediamo nel valore delle persone curiose e colte, capaci di trovare soluzioni flessibili dove il rigido nozionismo si ferma.</p></li><li className=""><p className="" data-path-to-node="5,2,2,0"><br /></p></li></ul><p className="" data-path-to-node="5,3">Non ci limitiamo a consegnare un progetto finito: <b data-index-in-node="50" data-path-to-node="5,3">affianchiamo i nostri clienti per insegnare la messa in atto pratica delle soluzioni create</b>, formando team e persone consapevoli, creative e autonome.</p><p></p><p className="" data-end="2762" data-start="2508"><br /></p><p className=""></p>
</div>
<div className="glass-card p-10 rounded-2xl glow-hover reveal-on-scroll active">
<div className="w-16 h-16 bg-tertiary/20 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12">
<span className="material-symbols-outlined text-tertiary text-3xl">visibility</span>
</div>
<h3 className="font-display text-2xl font-bold mb-4">La nostra Visione</h3>
<p className="text-on-surface-variant leading-relaxed"></p><p className="" data-path-to-node="13,1">Ogni grande innovazione nasce da un sogno, ma sopravvive solo grazie alla struttura. In <b data-index-in-node="88" data-path-to-node="13,1">FounDreams</b> aiutiamo aziende e privati a realizzare progetti unici, unendo l'efficienza delle <b data-index-in-node="181" data-path-to-node="13,1">automazioni</b> alla solidità della <b data-index-in-node="213" data-path-to-node="13,1">sicurezza informatica</b>.</p><p className="" data-path-to-node="13,2">Eleviamo il potenziale di ogni prodotto grazie a un <b data-index-in-node="52" data-path-to-node="13,2">marketing strategico e totale</b>, stringendo partnership con i migliori servizi sul mercato per garantire un ritorno sull'investimento senza precedenti.</p><p className="" data-path-to-node="13,3">Lavoriamo con chi sa guardare oltre: valorizziamo l'intelligenza critica e l'elasticità mentale rispetto al nozionismo teorico. Il nostro scopo è <b data-index-in-node="146" data-path-to-node="13,3">insegnare la pratica dell'innovazione</b>, accendendo la scintilla in persone creative, consapevoli e animate dalla passione. Diamo gambe alle tue idee, ti diamo lo scudo per proteggerle e la mappa per farle crescere.</p><p></p>
</div>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-8 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="text-center mb-16 reveal-on-scroll active">
<h2 className="font-display text-4xl font-semibold mb-4">I Pilastri di FounDreams</h2>
<div className="h-1 w-24 bg-secondary mx-auto"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group reveal-on-scroll glow-hover active">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">group</span>
<h4 className="font-display text-xl font-bold mb-3">Collaborazione</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Lavoriamo come un'estensione del vostro team, assicurando che la vostra voce sia ascoltata in ogni fase del processo produttivo.</p>
</div>
<div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group reveal-on-scroll glow-hover active">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">auto_awesome</span>
<h4 className="font-display text-xl font-bold mb-3">Innovazione</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Non seguiamo le tendenze; le studiamo per costruire il "prossimo" prima che diventi l'attuale.</p>
</div>
<div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group reveal-on-scroll glow-hover active">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">shield</span>
<h4 className="font-display text-xl font-bold mb-3">Sicurezza e Affidabilità</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">La sicurezza non è un optional; è il nucleo. Costruiamo fortezze digitali che resistono alla prova del tempo.</p>
</div>
<div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group reveal-on-scroll glow-hover active">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block group-hover:scale-110 transition-transform">verified</span>
<h4 className="font-display text-xl font-bold mb-3">Trasparenza</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Report chiari, scadenze oneste e nessun gergo tecnico. Saprete sempre a che punto siamo.</p>
</div>
</div>
</section>
<section className="py-24 bg-surface-container-low overflow-hidden scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-16 reveal-on-scroll active">
<h2 className="font-display text-4xl font-semibold mb-4">Conosci il team</h2>
</div>
<div className="space-y-20">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="w-full md:w-1/2 space-y-6 order-2 md:order-1 reveal-on-scroll active">
<h3 className="font-display text-3xl font-bold">Acquaotta Mykol</h3>
<p className="text-secondary font-headline font-semibold text-lg uppercase tracking-wider">Digital marketer</p>
<p className="text-on-surface-variant text-lg leading-relaxed">
Meno fuffa, più dati. Gestisco i social e le campagne marketing con l'unico obiettivo di portarti risultati misurabili. Analizzo i numeri e creo contenuti che parlano al tuo pubblico, senza illuderti con metriche inutili.
</p>
<div className="flex gap-4">
<a className="text-primary font-medium hover:underline flex items-center gap-1 group transition-all" href="https://mykolacquaotta.lovable.app/">
Visualizza portfolio <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2 reveal-on-scroll active">
<div className="relative group">
<div className="absolute -inset-4 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Specialista Marketing" className="w-full h-auto rounded-2xl relative grayscale hover:grayscale-0 active:grayscale-0 focus:grayscale-0 outline-none transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5m0WFFJfxLeukAVAs6Th4bqCdRgxc-GqJLbkolW1gE4UcL4G-SD0qzMsVNNtaU4v3sK71LdPW983UFROmiK5fJfMi9AePcFOlNsJKVCwt45YophwgTZLLd8f_jiGrB5j8rCq5uaFC6KBap-IgaNLb1nhUOrq2ViBiXHiVSrCMHuj2VWtCE9caETwbmeIpCZrp_OkNs4f_FGLI4R9w6POQkqP7L9f2je_dOr-tC5HRyk2riV8RE6nK6en-TwTfTWSNTxXcTQELUwK" tabIndex={0} />
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="w-full md:w-1/2 reveal-on-scroll active">
<div className="relative group">
<div className="absolute -inset-4 bg-tertiary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Ingegnere della Sicurezza" className="w-full h-auto rounded-2xl relative grayscale hover:grayscale-0 active:grayscale-0 focus:grayscale-0 outline-none transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvQ_uQWg2lz9e12VClzZxPhYUD7bQRfAlOvi0BrplCB5w0hh4mwLLKPgfiOFlSb4xxE0T6gvy3lhSABmEPVMFZCV1w2MKz3wL3vypbrTWLeNv2j-N1zgBy716QQ54ZKX0d0nsNz6PfTxBU3OcWlDVFx0fzLjX3sx-ygokSGQGB1JEGO08rkzsEhYMv1jDTP1xaNhkWnyskIp4IniOxlkH8-p5QeIrcPnHOsgXkKfZdyIuf9yfGlyyxgDmSDmou2RSiS69G4xunOKR4" tabIndex={0} />
</div>
</div>
<div className="w-full md:w-1/2 space-y-6 reveal-on-scroll active">
<h3 className="font-display text-3xl font-bold">Saija Gabriele</h3>
<p className="text-tertiary font-headline font-semibold text-lg uppercase tracking-wider">cloud administrator & security engineer</p>
<p className="text-on-surface-variant text-lg leading-relaxed">
Fin dall'infanzia, la profonda curiosità mi ha spinto a smontare e studiare i sistemi per capirne il vero funzionamento. Oggi applico questa dedizione per progettare infrastrutture cloud sicure e resilienti "dalle fondamenta". Lavoro con passione su progetti concreti per tradurre le tue sfide in architetture solide, mirate ed economicamente sostenibili. Grazie anche alla mia esperienza come formatore, so che la vera fiducia nasce dalla chiarezza: il mio obiettivo è sempre colmare la distanza tra il gergo tecnico e i tuoi obiettivi di business, affinché tu capisca e abbia pieno controllo su ciò che stiamo costruendo.
</p>
<div className="flex gap-4">
<a className="text-primary font-medium hover:underline flex items-center gap-1 group transition-all" href="https://www.italiasaija.it">
Visualizza portfolio <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-8 overflow-hidden scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="text-center mb-20 reveal-on-scroll active">
<h2 className="font-display text-4xl font-semibold mb-4">Il Processo di FounDreams</h2>
<p className="text-on-surface-variant">Il nostro approccio sistematico verso l'eccellenza.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
<div className="relative text-center md:text-left timeline-step reveal-on-scroll active">
<div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">1</div>
<h5 className="font-display text-lg font-bold mb-2">Strategia</h5>
<p className="text-sm text-on-surface-variant">Analisi approfondita e pianificazione dei vostri obiettivi digitali.</p>
</div>
<div className="relative text-center md:text-left timeline-step reveal-on-scroll active">
<div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">2</div>
<h5 className="font-display text-lg font-bold mb-2">Marketing</h5>
<p className="text-sm text-on-surface-variant">Definire la vostra voce e raggiungere il vostro pubblico principale.</p>
</div>
<div className="relative text-center md:text-left timeline-step reveal-on-scroll active">
<div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">3</div>
<h5 className="font-display text-lg font-bold mb-2">Design</h5>
<p className="text-sm text-on-surface-variant">Forgiare interfacce moderne, intuitive e pronte alla conversione.</p>
</div>
<div className="relative text-center md:text-left timeline-step reveal-on-scroll active">
<div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">4</div>
<h5 className="font-display text-lg font-bold mb-2">Sicurezza</h5>
<p className="text-sm text-on-surface-variant">Rafforzare l'infrastruttura con protezioni avanzate.</p>
</div>
<div className="relative text-center md:text-left timeline-step reveal-on-scroll active">
<div className="w-12 h-12 bg-surface-container-highest border border-secondary text-secondary rounded-full flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 timeline-dot relative z-10">5</div>
<h5 className="font-display text-lg font-bold mb-2">Crescita</h5>
<p className="text-sm text-on-surface-variant">Ottimizzazione continua e scalabilità del vostro successo.</p>
</div>
</div>
</section>
<section className="py-24 bg-primary-container/30 border-y border-outline-variant/10 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1 reveal-on-scroll animate-float active">
<div className="aspect-video rounded-2xl overflow-hidden glass-card p-4">
<div className="w-full h-full bg-surface-container rounded-xl flex items-center justify-center text-on-surface-variant overflow-hidden">
<img alt="Sessione educativa" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Nw-K55zYy8hBNAo0Rn9bUHPmr0inkBWIoFd0lM_omO8frrtC-gBsBGfLsYsP1CeKGBeB6W_KjWGNVf5Zh9SyIp_0SjyMu4ciVexYlb967UM3eYk9YvvW1-S_rgG5xySz83eAXy9nitHSf9dfjsFpeSCKqFeekIzphAv-gFuG67JZGy_TXlrKJ9C5FnATF1u-E3t4ELVrm7_1Alhhhu9A5OA62ePGSqvOzV1jd7pXSWz65nwWq0YseeJ--VX9OauMunPeUUeSbrPl" />
</div>
</div>
</div>
<div className="space-y-6 order-1 lg:order-2 reveal-on-scroll active">
<span className="text-tertiary font-headline font-bold uppercase text-sm">Academy</span>
<h2 className="font-display text-4xl font-semibold">Crescere attraverso la Conoscenza</h2>
<p className="text-on-surface-variant text-lg">
                    Non costruiamo solo soluzioni; vi insegniamo come padroneggiarle. I nostri programmi di consulenza e formazione sono progettati per colmare il divario di competenze digitali, assicurando che il vostro team sia attrezzato per mantenere e far crescere i vostri asset digitali con fiducia.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-on-surface group transition-transform hover:translate-x-2">
<span className="material-symbols-outlined text-secondary">check_circle</span>
                        Formazione sulla consapevolezza della cybersicurezza
                    </li>
<li className="flex items-center gap-3 text-on-surface group transition-transform hover:translate-x-2">
<span className="material-symbols-outlined text-secondary">check_circle</span>
                        Workshop di perfezionamento del Marketing Digitale
                    </li>
<li className="flex items-center gap-3 text-on-surface group transition-transform hover:translate-x-2">
<span className="material-symbols-outlined text-secondary">check_circle</span>
                        Consulenza tecnica personalizzata
                    </li>
</ul>
</div>
</div>
</section>
<section className="py-24 px-8 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-surface-container-highest rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden reveal-on-scroll active">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full animate-pulse-glow"></div>
<div className="relative z-10">
<h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Pronto a costruire qualcosa di significativo?</h2>
<p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10"><span className="">Raccontaci i tuoi obiettivi e scopriamo insieme come trasformarli in una soluzione digitale efficace. Siamo pronti a dare forma alle tue idee.</span></p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<Link to="/contattaci" className="w-full sm:w-auto px-10 py-5 bg-secondary text-on-secondary rounded-2xl font-headline font-bold hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                        Contattaci
                    </Link>
</div>
</div>
</div>
</section>
</main>
    </div>
  );
};
