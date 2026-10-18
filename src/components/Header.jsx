import React, { useState, useEffect } from 'react'
import { Menu, Shield, AlertTriangle, CloudRain, Calendar, Bell } from 'lucide-react'
import './Header.css'

const Header = ({ section, onModeChange, currentMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 15000)

    return () => clearInterval(timer)
  }, [])

  const sectionDetails = {
    overview: {
      title: 'Dashboard Overview',
      subtitle: 'Real-time overview of greywater system (Demo Mode)'
    },
    waterflow: {
      title: 'Water Flow Analysis',
      subtitle: '24-hour collection, distribution & inflow dynamics'
    },
    treatment: {
      title: 'Treatment System',
      subtitle: '6-stage physical & biological filtration process'
    },
    flood: {
      title: 'Flood Resilience',
      subtitle: 'Stormwater bypass & non-return valve backflow prevention'
    },
    overflow: {
      title: 'Overflow Management',
      subtitle: 'Hydraulic surge retention & secondary diversion control'
    },
    '3r': {
      title: '3R Environmental Impact',
      subtitle: 'Reduce, reuse, and groundwater aquifer recharge'
    },
    alerts: {
      title: 'System Alerts & Logs',
      subtitle: 'Real-time diagnostic warnings and dispatch logs'
    }
  }

  const currentDetails = sectionDetails[section] || {
    title: 'Dashboard Overview',
    subtitle: 'Real-time overview of greywater system (Demo Mode)'
  }

  const formatDateTime = (date) => {
    // Matches screenshot format: "06 Oct 2026 03:48 PM"
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const day = String(date.getDate()).padStart(2, '0')
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    let hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? String(hours).padStart(2, '0') : '12'
    return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`
  }

  return (
    <header className="header">
      <div className="header-left">
        <button type="button" className="menu-btn" aria-label="Toggle Navigation">
          <Menu size={20} className="menu-icon" />
        </button>
        <div className="header-title-box">
          <h2 className="section-title">{currentDetails.title}</h2>
          <p className="section-subtitle">{currentDetails.subtitle}</p>
        </div>
      </div>

      <div className="header-center">
        <div className="mode-controls" role="group" aria-label="Operating Mode Selector">
          <button
            type="button"
            className={`mode-btn mode-normal ${currentMode === 'normal' ? 'active' : ''}`}
            onClick={() => onModeChange('normal')}
            title="Simulate normal everyday greywater treatment and reuse"
          >
            <Shield size={16} className="mode-icon" />
            <span>Normal Mode</span>
          </button>
          
          <button
            type="button"
            className={`mode-btn mode-overflow ${currentMode === 'overflow' ? 'active' : ''}`}
            onClick={() => onModeChange('overflow')}
            title="Simulate inflow exceeding primary capacity with secondary outlet diversion"
          >
            <AlertTriangle size={16} className="mode-icon" />
            <span>Overflow Mode</span>
          </button>
          
          <button
            type="button"
            className={`mode-btn mode-flood ${currentMode === 'flood' ? 'active' : ''}`}
            onClick={() => onModeChange('flood')}
            title="Simulate elevated flood risk with bypass drain and non-return valve active"
          >
            <CloudRain size={16} className="mode-icon" />
            <span>Flood Mode</span>
          </button>
        </div>
      </div>

      <div className="header-right">
        <div className="datetime-pill">
          <Calendar size={15} className="datetime-icon" />
          <span className="datetime-text">{formatDateTime(currentTime)}</span>
        </div>

        <button type="button" className="bell-btn" aria-label="Notifications">
          <Bell size={17} className="bell-icon" />
          <span className="bell-badge"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
