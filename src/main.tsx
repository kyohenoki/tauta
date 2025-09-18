import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './mitame.css'
import Home from './home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
