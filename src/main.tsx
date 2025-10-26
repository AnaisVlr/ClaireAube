import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import { createTheme, ThemeProvider } from '@mui/material';

import { HomePage } from './pages/HomePage.tsx'
import { CareRituals } from './pages/Care/CareRituals.tsx';
import { Consultations } from './pages/Care/Consultations.tsx';
import Guidelines from './pages/Care/Guidelines.tsx';
import { Header } from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { Contact } from './pages/Contact.tsx';
import { Ritual } from './pages/Care/Ritual.tsx';
import { Disclaimer } from './pages/Disclaimer.tsx';

import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: "#552710",
      light: "#77523f",
      dark: "rgba(59, 27, 11, 1)",
      contrastText: "#E6D0B8"
    },
    secondary: {
      main: "#E6D0B8",
      light: "#ebd9c6",
      dark: "#a19180",
      contrastText: "#552710"
    },
    text: {
      primary: "#552710",
      secondary: "77523f"
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
        <Route path="/soin-rituels/:ritualName" element={<Ritual/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medical-disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>,
)


