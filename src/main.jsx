import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/views/Home'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
