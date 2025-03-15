import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage/HomePage.tsx'
import CareRituals from './pages/Care/CareRituals.tsx';
import Consultations from './pages/Care/Consultations.tsx';
import Guidelines from './pages/Care/Guidelines.tsx';
import Header from './components/Header.tsx';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/consultations" element={<Consultations />} />
      <Route path="/guidances" element={<Guidelines />} />
      <Route path="/soin-rituels" element={<CareRituals />} />
    </Routes>
  </BrowserRouter>,
)
