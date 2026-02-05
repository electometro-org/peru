import React from 'react'
import ReactDOM from 'react-dom/client'
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from './tolgee.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TolgeeProvider
    tolgee={tolgee}
    fallback="Cargando..."
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TolgeeProvider>,
)