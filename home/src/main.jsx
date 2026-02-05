import React from 'react'
import ReactDOM from 'react-dom/client'
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from './tolgee.js'
import App from './App.jsx'
import LoadingScreen, { LoadingWrapper } from './components/LoadingScreen.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TolgeeProvider
        tolgee={tolgee}
        fallback={<LoadingScreen />}
    >
      <LoadingWrapper minDelay={500}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LoadingWrapper>
    </TolgeeProvider>,
)
