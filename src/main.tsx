import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ConstructionPage from './ConstructionPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConstructionPage/>
  </StrictMode>,
)
