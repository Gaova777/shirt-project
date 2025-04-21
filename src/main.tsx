import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MainProvider} from './providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>  
  </StrictMode>,
)
