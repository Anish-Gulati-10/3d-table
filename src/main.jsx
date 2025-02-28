import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./global.css";
import { ConfiguratorProvider } from './contexts/Configurator.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfiguratorProvider>
      <App />
    </ConfiguratorProvider>
  </StrictMode>,
)
