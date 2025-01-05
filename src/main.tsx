import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/css/index.css'
// import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
