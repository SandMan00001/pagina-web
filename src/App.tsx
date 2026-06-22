import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const ChiSiamo = React.lazy(() => import('./pages/ChiSiamo').then(m => ({ default: m.ChiSiamo })));
const Servizi = React.lazy(() => import('./pages/Servizi').then(m => ({ default: m.Servizi })));
const Contattaci = React.lazy(() => import('./pages/Contattaci').then(m => ({ default: m.Contattaci })));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    const protectIcons = () => {
      document.querySelectorAll('.material-symbols-outlined, .material-icons').forEach(el => {
        if (!el.classList.contains('notranslate')) {
          el.classList.add('notranslate');
        }
        if (el.getAttribute('translate') !== 'no') {
          el.setAttribute('translate', 'no');
        }
      });
    };

    protectIcons();

    // Esegui a intervalli per catturare elementi renderizzati in ritardo o lazy
    const timers = [
      setTimeout(protectIcons, 50),
      setTimeout(protectIcons, 150),
      setTimeout(protectIcons, 300),
      setTimeout(protectIcons, 600)
    ];

    return () => timers.forEach(clearTimeout);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <React.Suspense fallback={
        <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-md">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="font-label-md text-label-md text-on-surface-variant animate-pulse">Caricamento...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="chi-siamo" element={<ChiSiamo />} />
            <Route path="servizi" element={<Servizi />} />
            <Route path="contattaci" element={<Contattaci />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
