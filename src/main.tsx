import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import ConstructionPage from './pages/Construction/ConstructionPage.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import CareRituals from './pages/Care/CareRituals.tsx';
import Consultations from './pages/Care/Consultations.tsx';
import Guidelines from './pages/Care/Guidelines.tsx';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/construction" element={<ConstructionPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/soins/consultations" element={<Consultations />} />
      <Route path="/soins/guidances" element={<Guidelines />} />
      <Route path="/soins/rituels-de-soin" element={<CareRituals />} />
    </Routes>
  </BrowserRouter>,
)
