import React from 'react'
import AlertsSection from '../components/AlertsSection'
import ActivityLog from '../components/ActivityLog'
import { alerts, activities, modeAlerts } from '../mockData'
import { Info, Bell, AlertTriangle, ShieldAlert, CheckCircle2, Shield } from 'lucide-react'
import './AlertsPage.css'

const AlertsPage = ({ isFloodMode, currentMode = 'normal' }) => {
  // Use mode-specific alerts from mockData
  const activeAlerts = (modeAlerts && modeAlerts[currentMode])
    ? modeAlerts[currentMode]
    : isFloodMode
    ? [
        {
          id: 0,
          timestamp: '14:52',
          message: 'FLOOD ALERT: Water level exceeded threshold — Bypass Activated in Demo',
          severity: 'critical'
        },
        ...alerts
      ]
    : alerts

  const criticalCount = activeAlerts.filter(a => a.severity === 'critical').length
  const warningCount = activeAlerts.filter(a => a.severity === 'warning').length
  const infoCount = activeAlerts.filter(a => a.severity === 'info').length

  const getModeBadge = () => {
    if (currentMode === 'flood') {
      return (
        <span className="mode-status-tag mode-tag-flood">
          <ShieldAlert size={14} />
          Flood Mode Active
        </span>
      )
    }
    if (currentMode === 'overflow') {
      return (
        <span className="mode-status-tag mode-tag-overflow">
          <AlertTriangle size={14} />
          Overflow Mode Active
        </span>
      )
    }
    return (
      <span className="mode-status-tag mode-tag-normal">
        <CheckCircle2 size={14} />
        Normal Mode Active
      </span>
    )
  }

  return (
    <div className="alerts-page">
      <div className="demo-banner">
        <Info size={16} className="demo-banner-icon" />
        <span>
          <strong>DEMO MODE — SAMPLE DATA:</strong> All operational warnings, status badges, and event logs are frontend simulated states for the hackathon demonstration. No physical IoT sensors or automated valves are triggered.
        </span>
      </div>

      <section className="alerts-main">
        <AlertsSection
          alerts={activeAlerts}
          isFloodMode={isFloodMode}
          currentMode={currentMode}
          showAll={true}
        />
      </section>

      <section className="alert-stats">
        <div className="stats-header-row">
          <h3 className="stats-title">Simulated Alert Statistics</h3>
          {getModeBadge()}
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number stat-total">{activeAlerts.length}</div>
            <div className="stat-label">Total Active Alerts</div>
          </div>

          <div className="stat-card">
            <div className={`stat-number ${criticalCount > 0 ? 'stat-critical' : 'stat-zero'}`}>
              {criticalCount}
            </div>
            <div className="stat-label">Critical Alerts</div>
          </div>

          <div className="stat-card">
            <div className={`stat-number ${warningCount > 0 ? 'stat-warning' : 'stat-zero'}`}>
              {warningCount}
            </div>
            <div className="stat-label">Warnings</div>
          </div>

          <div className="stat-card">
            <div className="stat-number stat-info">{infoCount}</div>
            <div className="stat-label">Informational</div>
          </div>
        </div>
      </section>

      <section className="activity-main">
        <ActivityLog activities={activities} />
      </section>

      <section className="info-section">
        <div className="info-card">
          <div className="info-card-header">
            <Shield size={18} className="info-icon" />
            <h3 className="info-title">Alert & Dispatch Subsystem Architecture</h3>
          </div>
          <p className="info-text">
            JalRakshak continuously monitors virtual diagnostic thresholds across all 6 core modules. Alerts are stratified into three priority tiers: <strong>Critical</strong> (initiates simulated diversion and NRV closure), <strong>Warning</strong> (indicates hydraulic surge or primary capacity saturation), and <strong>Info</strong> (confirms routine biofilter percolation and nominal self-cleaning).
          </p>
        </div>
      </section>
    </div>
  )
}

export default AlertsPage
