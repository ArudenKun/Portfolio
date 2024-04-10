import '@/styles/globals.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Routes } from '@generouted/react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
)
