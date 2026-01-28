import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from 'axios' // 1. Import Axios here

// 2. Set the Base URL dynamically
// Vite gives us a special variable "import.meta.env.PROD" which is true when deployed
axios.defaults.baseURL = import.meta.env.PROD
  ? 'https://my-portfolio-api-a92e.onrender.com' // Your Render Backend URL
  : 'http://localhost:5000';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
