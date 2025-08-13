import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stars from './Components/StarsRating/Stars'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Stars maxRating={10}/>
    <Stars maxRating={5} color='red'/> */}
  </StrictMode>,
)
