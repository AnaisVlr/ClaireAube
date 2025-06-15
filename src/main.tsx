import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage/HomePage.tsx'
import CareRituals from './pages/Care/CareRituals.tsx';
import { Consultations } from './pages/Care/Consultations.tsx';
import Guidelines from './pages/Care/Guidelines.tsx';
import { Header } from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Contact from './pages/Contact/Contact.tsx';

import './index.css'

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#552710",
      light: "#77523f",
      dark: "#3b1b0b",
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>,
)


