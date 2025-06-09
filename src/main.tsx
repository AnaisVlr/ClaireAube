import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage/HomePage.tsx'
import CareRituals from './pages/Care/CareRituals.tsx';
import { Consultations } from './pages/Care/Consultations.tsx';
import Guidelines from './pages/Care/Guidelines.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Contact from './pages/Contact/Contact.tsx';

import './index.css'

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#552710",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#E6D0B8"
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif"
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/guidances" element={<Guidelines />} />
        <Route path="/soin-rituels" element={<CareRituals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>,
)


