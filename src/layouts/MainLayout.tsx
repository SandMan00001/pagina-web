import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-primary dark:text-primary font-bold border-b-2 border-primary font-label-md text-label-md py-1"
      : "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200 font-label-md text-label-md py-1";
  };

  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-full mx-auto bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 shadow-sm">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface cursor-pointer">
            FounDreams
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-md items-center">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/servizi')} to="/servizi">Servizi</Link>
          <Link className={getLinkClass('/contattaci')} to="/contattaci">Contattaci</Link>
          <Link to="/contattaci" style={{ textDecoration: 'none' }}>
            <button className="bg-primary text-on-primary px-md py-sm rounded-full font-label-md text-label-md scale-95 active:scale-90 transition-transform hover:opacity-90">
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
          <div className="absolute top-[57px] left-0 w-full bg-surface border-b border-white/10 flex flex-col p-md gap-md md:hidden z-40">
            <Link className={getLinkClass('/')} to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link className={getLinkClass('/servizi')} to="/servizi" onClick={() => setMobileMenuOpen(false)}>Servizi</Link>
            <Link className={getLinkClass('/contattaci')} to="/contattaci" onClick={() => setMobileMenuOpen(false)}>Contattaci</Link>
            <Link to="/contattaci" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-primary text-on-primary px-md py-sm rounded-full font-label-md text-label-md w-full">
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
      <footer className="w-full px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline-variant mt-xl">
        <div className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">
          FounDreams
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
          © 2026 FounDreams. Eccellenza tecnica e innovazione visionaria.
        </p>
        <div className="flex gap-md items-center">
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-all duration-300 transform hover:scale-110">
            <img src="https://lh3.googleusercontent.com/aida/ADBb0ugm5O72juReyrfkQBsikwg5goxxY-FM68y0LD_bXLnqJpX_KBv7iDOjVAguLum2fXj_Dj4S39k7ULvLEKVTJfZ8a9eVWaKHYJClkTu9o86PN5Or4Cj3qh9IkdMlNxCG6jzk-eo1flKe8R6oYvirc_V1wiARkEKMfyazO1E4UbV0_Zt3hBheCyCDET2mDVLFYY4GuVbzUc7vi0OZrV0sIRH4_-_Q-LE8mbmN6gxHR-hh39Cifv9sBEP-WY2q" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-all duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        <div className="flex gap-md">
          <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">Termini di Servizio</a>
          <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">Lavora con noi</a>
        </div>
      </footer>
    </div>
  );
};
