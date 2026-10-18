import React, { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './pages/Overview'
import WaterFlow from './pages/WaterFlow'
import Treatment from './pages/Treatment'
import FloodResilience from './pages/FloodResilience'
import OverflowManagement from './pages/OverflowManagement'
import ThreeRImpact from './pages/ThreeRImpact'
import AlertsPage from './pages/AlertsPage'
import { Info, Trophy, Users } from 'lucide-react'
import './App.css'

function App() {
  // Check initial route: default to landing page as the public entry screen
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#dashboard')) {
      return 'dashboard'
    }
    return 'landing'
  })

  const [activeSection, setActiveSection] = useState('overview')
  const [currentMode, setCurrentMode] = useState('normal') // 'normal' | 'overflow' | 'flood'

  const isFloodMode = currentMode === 'flood'
  const isOverflowMode = currentMode === 'overflow'

  // Hash-based browser navigation support
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#dashboard')) {
        setCurrentView('dashboard')
      } else if (window.location.hash === '#landing' || window.location.hash === '' || window.location.hash === '#home') {
        setCurrentView('landing')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleOpenDashboard = () => {
    window.location.hash = '#dashboard'
    setCurrentView('dashboard')
    window.scrollTo(0, 0)
  }

  const handleBackToLanding = () => {
    window.location.hash = '#home'
    setCurrentView('landing')
    window.scrollTo(0, 0)
  }

  const renderDashboardPage = () => {
    const pageProps = {
      currentMode,
      isFloodMode,
      isOverflowMode,
      onModeChange: setCurrentMode,
      onNavigate: setActiveSection
    }

    switch (activeSection) {
      case 'overview':
        return <Overview {...pageProps} />
      case 'waterflow':
        return <WaterFlow {...pageProps} />
      case 'treatment':
        return <Treatment {...pageProps} />
      case 'flood':
        return <FloodResilience {...pageProps} />
      case 'overflow':
        return <OverflowManagement {...pageProps} />
      case '3r':
        return <ThreeRImpact {...pageProps} />
      case 'alerts':
        return <AlertsPage {...pageProps} />
      default:
        return <Overview {...pageProps} />
    }
  }

  // 1. PUBLIC ENTRY SCREEN: LANDING PAGE
  if (currentView === 'landing') {
    return <LandingPage onOpenDashboard={handleOpenDashboard} />
  }

  // 2. DASHBOARD VIEW (With all 7 navigation pages and interactive demo modes)
  return (
    <div className="app">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        onBackToLanding={handleBackToLanding}
      />
      <div className="app-body">
        <Header
          section={activeSection}
          onModeChange={setCurrentMode}
          currentMode={currentMode}
        />
        <main className="main-content">
          <div className="main-inner">
            {renderDashboardPage()}
          </div>
          <footer className="global-footer-bar">
            <div className="footer-left">
              <Info size={15} className="footer-icon blue-icon" />
              <span><strong>DEMO MODE — SAMPLE DATA:</strong> This is a prototype. Values are illustrative.</span>
            </div>
            <div className="footer-center">
              <Trophy size={15} className="footer-icon blue-icon" />
              <span>Designed for Smart India Hackathon 2026</span>
            </div>
            <div className="footer-right">
              <Users size={15} className="footer-icon blue-icon" />
              <span>JalRakshak Concept &nbsp;|&nbsp; Team QUANTUMNEX 007 &nbsp;|&nbsp; Team ID: 196866</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
