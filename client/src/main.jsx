import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LSI_NavBar from './components/LSI_NavBar/LSI_NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LSI_NavBar></LSI_NavBar>
    <App />
  </React.StrictMode>,
)
