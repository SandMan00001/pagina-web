import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const ChiSiamo = React.lazy(() => import('./pages/ChiSiamo').then(m => ({ default: m.ChiSiamo })));
const Servizi = React.lazy(() => import('./pages/Servizi').then(m => ({ default: m.Servizi })));
const Contattaci = React.lazy(() => import('./pages/Contattaci').then(m => ({ default: m.Contattaci })));

const App: React.FC = () => {
  return (
    <Router basename="/">
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
