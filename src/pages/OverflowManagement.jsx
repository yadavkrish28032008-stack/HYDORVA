import React from 'react'
import StatusPanel from '../components/StatusPanel'
import ProgressBar from '../components/ProgressBar'
import { Icon } from '../utils/iconMap'
import { overflowMetrics, kpiData } from '../mockData'
import './OverflowManagement.css'

const OverflowManagement = ({ currentMode = 'normal', isFloodMode, isOverflowMode, onModeChange }) => {
  const isFlood = isFloodMode || currentMode === 'flood'
  const isOverflow = isOverflowMode || currentMode === 'overflow'

  const metrics = overflowMetrics[currentMode] || overflowMetrics.normal
  const kpi = kpiData[currentMode] || kpiData.normal

  // Required Section 7 Status Label
  const simpleStatusLabel = isOverflow 
    ? 'OVERFLOW SIMULATED' 
    : isFlood 
    ? 'WARNING' 
    : 'NORMAL'

  const overflowItems = [
    { label: 'Primary Treatment Capacity', value: `${metrics.overflowThreshold} L/day` },
    { label: 'Current Greywater Inflow', value: `${metrics.currentFlow} L/day` },
    { label: 'Overflow Risk Indicator', value: kpi.overflowRisk },
    { label: 'Secondary Outlet Status', value: metrics.secondaryOutletStatus },
    { label: 'Flood Bypass Status', value: metrics.bypassStatus },
    { label: 'Operational Status Label', value: simpleStatusLabel }
  ]

  const capacityThresholds = [
    { label: 'Safe Operating Buffer', value: '< 75% Capacity' },
    { label: 'Caution / Diversion Buffer', value: '75% - 90%' },
    { label: 'Overflow Diversion Threshold', value: '> 90% (Active)' },
    { label: 'Current Soak Pit Load', value: `${metrics.soakPitCapacity}%` }
  ]

  // Flow path active flags
  const isNormalActive = currentMode === 'normal'
  const isSecondaryActive = currentMode === 'overflow'
  const isBypassActive = currentMode === 'flood'

  return (
    <div className="overflow-page">
      {/* Top Status Header Card with Simple Status Label */}
      <div className={`overflow-status-card ${isOverflow ? 'overflow' : isFlood ? 'critical' : 'normal'}`}>
        <div className="status-header-content">
          <div className="status-label-group">
            <span className="system-condition-tag">OVERFLOW MANAGEMENT STATE</span>
            <h2 className="current-status-display">{simpleStatusLabel}</h2>
          </div>
          <div className="demo-data-note">
            <Icon name="info" size={14} color="currentColor" />
            <span>Simulated Frontend Demo Data Only</span>
          </div>
        </div>
        <p className="status-explanation">
          {isOverflow && 'Simulated peak greywater inflow exceeds the 3,500 L/day biofilter threshold. Secondary overflow outlet is actively buffering surge volume.'}
          {isFlood && 'External flood conditions have activated the emergency bypass. High volume runoff is diverted away from the soak pit.'}
          {!isOverflow && !isFlood && 'Inflow volume (2,840 L/day) remains safely within the 3,500 L/day primary treatment threshold. Secondary outlet and bypass remain on standby.'}
        </p>
      </div>

      {/* Grid: Overflow Indicators & Thresholds */}
      <div className="overflow-grid">
        <div className="overflow-column">
          <StatusPanel
            title="Overflow Indicators (Section 7)"
            items={overflowItems}
            isFloodMode={isFlood}
            isOverflowMode={isOverflow}
          />
        </div>

        <div className="overflow-column">
          <StatusPanel
            title="Absorption &amp; Storage Thresholds"
            items={capacityThresholds}
            isFloodMode={isFlood}
            isOverflowMode={isOverflow}
          />
        </div>
      </div>

      {/* Progress Bars */}
      <section className="capacity-section">
        <h3 className="section-header">Capacity &amp; Buffer Utilization</h3>
        <div className="progress-grid">
          <ProgressBar
            label="Primary Soak Pit Load"
            value={metrics.soakPitCapacity}
            unit="%"
            icon="overview"
            description="Primary filtration and storage utilization"
            variant={metrics.soakPitCapacity >= 90 ? 'critical' : metrics.soakPitCapacity >= 75 ? 'warning' : 'default'}
          />
          <ProgressBar
            label="Secondary Leach Field"
            value={isOverflow ? 88 : isFlood ? 70 : 15}
            unit="%"
            icon="overflow"
            description="Secondary detention and infiltration load"
            variant={isOverflow ? 'warning' : 'default'}
          />
          <ProgressBar
            label="Inflow Headroom"
            value={isOverflow ? 0 : isFlood ? 12 : 28}
            unit="%"
            icon="gauge"
            description="Available surge buffer before secondary diversion"
            variant={isOverflow ? 'critical' : 'default'}
          />
        </div>
      </section>

      {/* Visual Flow Path Diagram (Section 7) */}
      <section className="flow-visualization">
        <div className="flow-vis-header">
          <h3 className="section-header">Multi-Stage Flow Path Visualization</h3>
          <span className="vis-subtext">Active route responds to operating mode</span>
        </div>

        <div className="flow-paths">
          {/* Path 1: Normal */}
          <div className={`path normal ${isNormalActive ? 'active' : 'inactive'}`}>
            <div className="path-icon-badge">
              <Icon name="greywater" size={20} color={isNormalActive ? 'var(--accent-blue)' : 'var(--text-muted)'} />
            </div>
            <div className="path-title">1. Primary Path</div>
            <div className="path-label">Vertical Biofilter &amp; Soak Pit</div>
            <div className={`path-status-pill ${isNormalActive ? 'active' : 'standby'}`}>
              {isNormalActive ? 'Active Route' : 'Sub-Capacity'}
            </div>
          </div>

          <div className="path-divider">
            <Icon name="arrowRight" size={18} color="var(--accent-blue)" />
          </div>

          {/* Path 2: Secondary Overflow */}
          <div className={`path secondary ${isSecondaryActive ? 'active' : 'standby'}`}>
            <div className="path-icon-badge">
              <Icon name="gitBranch" size={20} color={isSecondaryActive ? 'var(--status-warning)' : 'var(--text-muted)'} />
            </div>
            <div className="path-title">2. Secondary Route</div>
            <div className="path-label">Secondary Overflow Outlet</div>
            <div className={`path-status-pill ${isSecondaryActive ? 'active-warning' : 'standby'}`}>
              {isSecondaryActive ? 'ACTIVE (Diverting)' : 'Standby'}
            </div>
          </div>

          <div className="path-divider">
            <Icon name="arrowRight" size={18} color="var(--accent-blue)" />
          </div>

          {/* Path 3: Emergency Bypass */}
          <div className={`path bypass ${isBypassActive ? 'active' : 'standby'}`}>
            <div className="path-icon-badge">
              <Icon name="shieldAlert" size={20} color={isBypassActive ? 'var(--status-critical)' : 'var(--text-muted)'} />
            </div>
            <div className="path-title">3. Flood Bypass</div>
            <div className="path-label">Emergency Flood Bypass Drain</div>
            <div className={`path-status-pill ${isBypassActive ? 'active-critical' : 'standby'}`}>
              {isBypassActive ? 'ACTIVE (Flood Mode)' : 'Standby'}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-card">
          <h3 className="info-title">Overflow Protection Architecture</h3>
          <p className="info-text">
            JalRakshak is engineered with a layered hydraulic overflow protection system. 
            Under normal flow conditions, greywater is processed in the vertical biofilter and absorbed in the primary soak pit. 
            When heavy domestic discharge causes inflow to exceed primary capacity, the 
            <strong> Flow-Control Diversion Chamber</strong> directs surplus volume to the 
            <strong> Secondary Overflow Outlet</strong> and leach field buffer, preventing surface puddling and system backpressure. 
            All displayed flow levels represent calibrated simulation states for hackathon demonstration.
          </p>
        </div>
      </section>
    </div>
  )
}

export default OverflowManagement
