import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import StartPage from "./pages/Start/StartPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StartPage />
  </StrictMode>,
)
