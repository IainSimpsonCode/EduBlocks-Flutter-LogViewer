import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import LogViewPage from './pages/LogViewPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogViewPage />
  </StrictMode>,
)
