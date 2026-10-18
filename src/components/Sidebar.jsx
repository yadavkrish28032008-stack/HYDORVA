import React from 'react'
import { 
  LayoutDashboard, 
  Waves, 
  FlaskConical, 
  Shield, 
  AlertTriangle, 
  Recycle, 
  Bell, 
  Droplet,
  ArrowLeft
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ activeSection, onSectionChange, onBackToLanding }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'waterflow', label: 'Water Flow', icon: Waves },
    { id: 'treatment', label: 'Treatment System', icon: FlaskConical },
    { id: 'flood', label: 'Flood Resilience', icon: Shield },
    { id: 'overflow', label: 'Overflow Management', icon: AlertTriangle },
    { id: '3r', label: '3R Impact', icon: Recycle },
    { id: 'alerts', label: 'Alerts', icon: Bell }
  ]

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="brand-logo-circle">
            <Droplet size={22} className="brand-droplet-icon" />
          </div>
          <div className="brand-text-col">
            <h1 className="brand-title">HYDROVA</h1>
            <p className="brand-subtitle">Smart Greywater Management<br />&amp; Flood Resilience System</p>
          </div>
        </div>
      </div>

      {/* Main Nav Items */}
      <nav className="sidebar-nav">
        <div className="nav-group-caption">DASHBOARD NAVIGATION</div>
        {navItems.map((item) => {
          const IconComp = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onSectionChange(item.id)}
            >
              <IconComp size={18} className="nav-item-icon" />
              <span className="nav-item-label">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Clean Bottom Bar with Landing Page Navigation */}
      {onBackToLanding && (
        <div className="sidebar-footer">
          <button 
            type="button" 
            className="back-to-landing-btn"
            onClick={onBackToLanding}
          >
            <ArrowLeft size={16} />
            <span>Public Landing Page</span>
          </button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
