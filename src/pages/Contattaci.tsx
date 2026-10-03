import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Contattaci: React.FC = () => {
  const location = useLocation();
  const selectedPackage = location.state?.package as string | undefined;

  useSEO({
    title: "Contattaci - FounDreams | Richiedi un Preventivo Gratuito",
    description: "Contatta il team di FounDreams per lo sviluppo del tuo nuovo sito web, la gestione dei canali social o consulenze strategiche. Preventivi rapidi e gratuiti.",
    keywords: ["contatti foundreams", "preventivo sito web gratis", "consulenza strategica aziendale", "richiedi informazioni"],
    structuredData: {}
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: selectedPackage ? `Richiesta preventivo per ${selectedPackage}` : '',
    messaggio: selectedPackage ? `Ciao! Sono interessato al pacchetto ${selectedPackage}. Vorrei ricevere maggiori informazioni.` : ''
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    const emails = 'amministrazione@foundreams.it,gabriele.saija@foundreams.it,mykol.acquaotta@foundreams.it';
    const subject = encodeURIComponent(formData.oggetto || 'Richiesta di contatto - FounDreams');
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail mittente: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`);
    setTimeout(() => {
      window.location.href = `mailto:${emails}?subject=${subject}&body=${body}`;
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ nome: '', email: '', oggetto: '', messaggio: '' });
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-x-clip">
      <main>
<section className="px-6 lg:px-16 mb-12 scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="max-w-4xl mx-auto text-center space-y-6">
<h1 className="font-headline text-4xl md:font-display md:text-5xl bg-gradient-to-r from-secondary via-primary to-tertiary bg-clip-text text-transparent leading-tight">
                    Hai un sogno nel cassetto per il tuo business? <br className="hidden md:block" />Raccontacelo.
                </h1>
<p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
                    Il team di FounDreams è pronto a realizzarlo. Uniamo eccellenza tecnica e innovazione visionaria per dare forma al tuo futuro digitale.
                </p>
</div>
</section>
<section className="px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<div className="md:col-span-4 space-y-8">
<div className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-xl">
<div className="flex items-center gap-2 mb-4 text-primary">
<span className="material-symbols-outlined">rocket_launch</span>
<span className="font-label text-sm font-semibold uppercase tracking-widest">profili social</span>
</div>
<p className="font-body text-base text-on-surface"></p><div className="flex items-center gap-2"> @foundreams</div><p></p>
</div>
<div className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-xl">
<div className="flex items-center gap-2 mb-4 text-secondary">
<span className="material-symbols-outlined">alternate_email</span>
<span className="font-label text-sm font-semibold uppercase tracking-widest">Contatti Diretti</span>
</div>
<p className="font-body text-base text-on-surface"></p><div><br /></div> info@foundreams.tech<div><br /></div><p></p>
<p className="font-body text-base text-on-surface">+39 366 319 2578</p><div className="">+39 380 379 1477</div><p></p>
</div>
<div className="relative overflow-hidden rounded-xl h-48 group">
<img alt="Cybersecurity interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A macro shot of a sophisticated cybersecurity dashboard with glowing data streams and encrypted code interfaces. The lighting is dominated by deep navy blues and sharp electric blue accents, creating a high-tech corporate atmosphere. The visual style is crisp and modern, reflecting peak technical excellence and digital safety." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-ycS70scNdm_ywugDKTgfO28kXhcadcDbzUgA6omaPftXpM_YK3CDaDic5-RtDATsykSWPxEn0oRqw5e2Ee0urs6KltkXSC6aNL_3amZD1iT9yQ4D8uDNWZ0gn2YbwhK1pFDU0qfGhwKjdhw7TVky4Nc-8T2-oYohrAxwuRAod0wvQpqq7CChb3RPdOAKw_v7GeYaWLCahlJDZ61SGgk8R2PgVr7oRx4U58wKcEkiqOyaskvD8Pw-UUe_Zo-gRQ_eXmq4fFhikPZ" />
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
<div className="absolute bottom-base left-base">
<span className="bg-secondary-container/20 backdrop-blur-md text-secondary text-[10px] px-sm py-xs rounded-full border border-secondary/30">CONSULENZA GRATUITA<br /></span>
</div>
</div>
</div>
<div className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 p-8 rounded-xl">
<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" id="contactForm">
<div className="space-y-xs">
<label className="font-label text-sm font-semibold text-on-surface-variant">Nome</label>
<input className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder:text-on-surface-variant/40" placeholder="Mario Rossi" type="text" />
</div>
<div className="space-y-xs">
<label className="font-label text-sm font-semibold text-on-surface-variant">Email</label>
<input className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder:text-on-surface-variant/40" placeholder="mario@esempio.it" type="email" />
</div>
<div className="md:col-span-2 space-y-xs"><label className="font-label text-sm font-semibold text-on-surface-variant block mb-2">Tipologia di progetto</label><select className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface"><option value="" disabled selected className="bg-surface-container text-on-surface-variant">Seleziona tipologia...</option><option value="startup" className="bg-surface-container text-on-surface">Nuovo Progetto (Giovane Imprenditore / Startup)</option><option value="azienda" className="bg-surface-container text-on-surface">Azienda (Impresa / Brand consolidato)</option></select></div><div className="md:col-span-2 space-y-xs">
<label className="font-label text-sm font-semibold text-on-surface-variant">Oggetto</label>
<input className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder:text-on-surface-variant/40" placeholder="Come possiamo aiutarti?" type="text" />
</div>
<div className="md:col-span-2 space-y-xs">
<label className="font-label text-sm font-semibold text-on-surface-variant">Messaggio</label>
<textarea className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder:text-on-surface-variant/40 resize-none" placeholder="Descrivi il tuo sogno o la tua esigenza tecnica..." rows={6}></textarea>
</div>
<div className="md:col-span-2 pt-4">
<button className="w-full md:w-auto bg-gradient-to-r from-secondary to-tertiary text-on-primary font-label text-sm font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95 cyber-glow" type="submit">
                            Invia Messaggio
                        </button>
</div>
</form>
</div>
</section>
<section className="px-6 lg:px-16 py-12 text-center scroll-reveal transition-all duration-700 opacity-0 translate-y-10">
<p className="font-label text-sm font-semibold text-on-surface-variant uppercase tracking-widest mb-8 opacity-60">Alcune Tecnologie che utilizziamo</p>
<div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-headline text-2xl font-bold">Azure</span>
<span className="font-headline text-2xl font-bold">Python</span>
<span className="font-headline text-2xl font-bold">AWS</span>
<span className="font-headline text-2xl font-bold">Typescript</span>
<span className="font-headline text-2xl font-bold">Kubernetes</span>
<span className="font-headline text-2xl font-bold">Proxmox</span></div><div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 mt-8">
<span className="font-headline text-2xl font-bold text-on-surface-variant">WordPress</span>
<span className="font-headline text-2xl font-bold text-on-surface-variant">Figma</span>
<span className="font-headline text-2xl font-bold text-on-surface-variant">Google Analytics</span>
<span className="font-headline text-2xl font-bold text-on-surface-variant">Meta Business Suite</span>
<span className="font-headline text-2xl font-bold text-on-surface-variant">Canva</span>
<span className="font-headline text-2xl font-bold text-on-surface-variant">CapCut</span>
</div>
</section>
</main>
    </div>
  );
};
