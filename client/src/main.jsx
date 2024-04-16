import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import NewsFeed from './views/NewsFeed.jsx'
import TradingPage from './views/TradingPage.jsx'

import './index.css'
//import LPNavBar from './components/LSI_NavBar/LPNavBar.jsx'
//import LSI_NavBar from './components/LSI_NavBar/LSI_NavBar.jsx'

import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/trade" element={<TradingPage />} />

      </Routes>
    </BrowserRouter>
  </ClerkProvider>
</React.StrictMode>,
)
