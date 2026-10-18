import React from 'react'
import { Bell, CheckCircle2, Info, AlertTriangle, ShieldAlert } from 'lucide-react'
import './AlertsSection.css'

const AlertsSection = ({ alerts = [], isFloodMode, isOverflowMode, currentMode, onNavigate, showAll = false }) => {
  const getAlertIcon = (severity) => {
    switch (severity) {
      case 'critical':
        return (
          <div className="alert-circle-icon icon-critical">
            <ShieldAlert size={15} />
          </div>
        )
      case 'warning':
        return (
          <div className="alert-circle-icon icon-warning">
            <AlertTriangle size={15} />
          </div>
        )
      case 'info':
      default:
        return (
          <div className="alert-circle-icon icon-info">
            <Info size={15} />
          </div>
        )
      case 'success':
      case 'safe':
        return (
          <div className="alert-circle-icon icon-safe">
            <CheckCircle2 size={15} />
          </div>
        )
    }
  }

  // Format alerts
  const rawList = showAll ? alerts : alerts.slice(0, 4)
  const formattedAlerts = rawList.map((a) => {
    let iconType = a.severity
    if (a.message.toLowerCase().includes('normally') || a.message.toLowerCase().includes('nominal')) {
      iconType = 'safe'
    }
    return {
      ...a,
      iconType,
      displayTime: a.timestamp.includes('Today') ? a.timestamp : `Today, ${a.timestamp}`
    }
  })

  return (
    <div className={`alerts-card ${showAll ? 'alerts-card-full' : ''}`}>
      <div className="alerts-card-header">
        <div className="alerts-title-row">
          <Bell size={17} className="alerts-hdr-icon blue-icon" />
          <h3 className="alerts-card-title">{showAll ? 'All Active & Historical Alerts' : 'Recent Alerts'}</h3>
        </div>
      </div>

      <div className="alerts-items-list">
        {formattedAlerts.length > 0 ? (
          formattedAlerts.map((alert) => (
            <div key={alert.id} className="alert-row">
              <div className="alert-row-left">
                {getAlertIcon(alert.iconType || alert.severity)}
                <span className="alert-msg-text">{alert.message}</span>
              </div>
              <span className="alert-row-time">{alert.displayTime}</span>
            </div>
          ))
        ) : (
          <div className="no-alerts-msg">No active alerts reported.</div>
        )}
      </div>

      {!showAll && (
        <div className="alerts-card-footer">
          <button 
            type="button" 
            className="view-all-alerts-btn"
            onClick={() => onNavigate && onNavigate('alerts')}
          >
            View All Alerts
          </button>
        </div>
      )}
    </div>
  )
}

export default AlertsSection
