// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// third-party
import { BrowserRouter } from 'react-router-dom'

// feature
import InsightsShell from './InsightsShell'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <InsightsShell />
    </BrowserRouter>
  </StrictMode>,
)
