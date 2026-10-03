import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from '../components/LanguageSelector';

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-primary dark:text-primary font-bold border-b-2 border-primary font-label text-sm font-semibold py-1"
      : "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200 font-label text-sm font-semibold py-1";
  };

  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-16 py-4 max-w-full mx-auto bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 shadow-sm">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="font-headline font-bold text-xl  font-bold text-on-surface dark:text-on-surface cursor-pointer">
            FounDreams
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/chi-siamo')} to="/chi-siamo">Chi Siamo</Link>
          <Link className={getLinkClass('/servizi')} to="/servizi">Aziende</Link>
          <Link className={getLinkClass('/giovani')} to="/giovani">Giovani</Link>
          <Link className={getLinkClass('/contattaci')} to="/contattaci">Contattaci</Link>
          <LanguageSelector />
          <Link to="/contattaci" style={{ textDecoration: 'none' }}>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-sm font-semibold scale-95 active:scale-90 transition-transform hover:opacity-90">
              Inizia Progetto
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-on-surface flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-[57px] left-0 w-full bg-surface border-b border-white/10 flex flex-col p-6 gap-6 md:hidden z-40">
            <Link className={getLinkClass('/')} to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link className={getLinkClass('/chi-siamo')} to="/chi-siamo" onClick={() => setMobileMenuOpen(false)}>Chi Siamo</Link>
            <Link className={getLinkClass('/servizi')} to="/servizi" onClick={() => setMobileMenuOpen(false)}>Aziende</Link>
            <Link className={getLinkClass('/giovani')} to="/giovani" onClick={() => setMobileMenuOpen(false)}>Giovani</Link>
            <Link className={getLinkClass('/contattaci')} to="/contattaci" onClick={() => setMobileMenuOpen(false)}>Contattaci</Link>
            <div className="flex justify-start py-1">
              <LanguageSelector />
            </div>
            <Link to="/contattaci" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-sm font-semibold w-full">
                Inizia Progetto
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full px-6 lg:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline-variant mt-12">
        <div className="font-headline font-bold text-xl  font-bold text-on-surface dark:text-on-surface">
          FounDreams
        </div>
        <p className="font-body text-base text-on-surface-variant text-center md:text-left">
          © 2026 FounDreams. Eccellenza tecnica e innovazione visionaria.
        </p>
        <div className="flex gap-6 items-center">
          <a href="https://www.instagram.com/foundreams__?igsh=emVzMWlvczM3M2U3" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-all duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <a href="https://www.facebook.com/people/FounDreams/61590709104730/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-all duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center md:justify-end">
          <a className="iubenda-noiframe iubenda-embed font-label text-sm font-semibold text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="https://www.iubenda.com/privacy-policy/95264058" title="Privacy Policy">Privacy Policy</a>
          <a className="iubenda-noiframe iubenda-embed font-label text-sm font-semibold text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="https://www.iubenda.com/privacy-policy/95264058/cookie-policy" title="Cookie Policy">Cookie Policy</a>
          <a className="iubenda-cs-preferences-link font-label text-sm font-semibold text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#" onClick={(e) => e.preventDefault()}>Preferenze Cookie</a>
          <a className="font-label text-sm font-semibold text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">Termini di Servizio</a>
          <a className="font-label text-sm font-semibold text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">Lavora con noi</a>
        </div>
      </footer>
    </div>
  );
};
