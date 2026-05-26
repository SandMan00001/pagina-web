import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Servizi } from './pages/Servizi';
import { Contattaci } from './pages/Contattaci';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="servizi" element={<Servizi />} />
          <Route path="contattaci" element={<Contattaci />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
