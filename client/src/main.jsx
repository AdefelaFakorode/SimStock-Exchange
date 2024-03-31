import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LPNavBar from './components/LSI_NavBar/LPNavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LPNavBar></LPNavBar>
    <App />
  </React.StrictMode>,
)
