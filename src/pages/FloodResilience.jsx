import React from 'react'
import StatusPanel from '../components/StatusPanel'
import ProgressBar from '../components/ProgressBar'
import { Icon } from '../utils/iconMap'
import { floodMetrics } from '../mockData'
import './FloodResilience.css'

const FloodResilience = ({ currentMode = 'normal', isFloodMode, isOverflowMode, onModeChange }) => {
  const isFlood = isFloodMode || currentMode === 'flood'
  const isOverflow = isOverflowMode || currentMode === 'overflow'

  const metrics = floodMetrics[currentMode] || floodMetrics.normal

  const floodItems = [
    { label: 'Illustrative Water Level', value: `${metrics.waterLevel} m` },
    { label: 'Flood Risk Status', value: metrics.floodRisk },
    { label: 'Drain Capacity Usage', value: `${metrics.drainCapacity}%` },
    { label: 'Bypass Status', value: metrics.bypassStatus },
    { label: 'Non-Return Valve Status', value: metrics.nonReturnValve },
    { label: 'Treatment Unit Status', value: metrics.treatmentUnit }
  ]

  const riskThresholds = [
    { label: 'Low Risk Stage', value: '0 - 2.0 m' },
    { label: 'Medium / Caution Stage', value: '2.0 - 4.0 m' },
    { label: 'High Risk / Bypass Stage', value: '> 4.0 m' },
    { label: 'Simulated Water Level', value: `${metrics.waterLevel} m` }
  ]

  return (
    <div className="flood-page">
      {/* Alert Banners */}
      {isFlood && (
        <div className="flood-alert-card active">
          <div className="alert-badge-icon">
            <Icon name="flood" size={24} color="var(--status-critical)" />
          </div>
          <div className="alert-content-box">
            <div className="alert-row">
              <h3>FLOOD RESILIENCE PROTOCOL ACTIVE</h3>
              <span className="mode-pill critical">SIMULATED FLOOD STATE</span>
            </div>
            <p>
              External water level reached {metrics.waterLevel} m (exceeding 4.0 m threshold). Flood bypass is actively 
              diverting runoff to the designated drainage route. Non-return valve is sealed closed to prevent reverse contamination into household drains.
            </p>
          </div>
        </div>
      )}

      {isOverflow && (
        <div className="flood-alert-card overflow">
          <div className="alert-badge-icon">
            <Icon name="warning" size={24} color="var(--status-warning)" />
          </div>
          <div className="alert-content-box">
            <div className="alert-row">
              <h3>OVERFLOW MODE SIMULATED — NON-FLOOD SURGE</h3>
              <span className="mode-pill warning">SECONDARY DETENTION</span>
            </div>
            <p>
              Inflow volume exceeds primary soak pit capacity. Non-return valve remains open for standard outflow, 
              while secondary overflow route buffers surplus greywater. Flood bypass remains on standby.
            </p>
          </div>
        </div>
      )}

      {/* Interactive Visual Flow Representation (Section 6) */}
      <section className="flow-routes-section">
        <div className="routes-header">
          <div>
            <h3 className="section-header">Dynamic Drainage &amp; Flood Flow Routing</h3>
            <p className="routes-subtitle">
              Visual route tracking based on active operating mode ({currentMode.toUpperCase()})
            </p>
          </div>
          {onModeChange && (
            <div className="route-mode-pills">
              <button 
                type="button"
                className={`route-pill ${currentMode === 'normal' ? 'active' : ''}`}
                onClick={() => onModeChange('normal')}
              >
                Normal Route
              </button>
              <button 
                type="button"
                className={`route-pill ${currentMode === 'overflow' ? 'active' : ''}`}
                onClick={() => onModeChange('overflow')}
              >
                Overflow Route
              </button>
              <button 
                type="button"
                className={`route-pill ${currentMode === 'flood' ? 'active' : ''}`}
                onClick={() => onModeChange('flood')}
              >
                Flood Bypass Route
              </button>
            </div>
          )}
        </div>

        <div className="flow-routes-container">
          {/* Route 1: Normal Flow */}
          <div className={`route-card ${currentMode === 'normal' ? 'route-active-teal' : 'route-inactive'}`}>
            <div className="route-card-header">
              <span className="route-tag">NORMAL ROUTE</span>
              {currentMode === 'normal' && <span className="active-pill teal">ACTIVE IN DEMO</span>}
            </div>
            <div className="nodes-chain">
              <div className="flow-node">
                <span className="node-icon"><Icon name="overview" size={16} /></span>
                <span className="node-text">Households</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="greywater" size={16} /></span>
                <span className="node-text">Greywater Drain</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="treatment" size={16} /></span>
                <span className="node-text">Biofilter Treatment</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="recharge" size={16} /></span>
                <span className="node-text">Reuse / Suitable Disposal</span>
              </div>
            </div>
            <p className="route-desc">
              Standard operating flow: Household greywater is collected, filtered through biofilter stages, and directed to non-potable reuse and controlled sub-surface recharge.
            </p>
          </div>

          {/* Route 2: Overflow Flow */}
          <div className={`route-card ${currentMode === 'overflow' ? 'route-active-amber' : 'route-inactive'}`}>
            <div className="route-card-header">
              <span className="route-tag">OVERFLOW ROUTE</span>
              {currentMode === 'overflow' && <span className="active-pill amber">ACTIVE IN DEMO</span>}
            </div>
            <div className="nodes-chain">
              <div className="flow-node">
                <span className="node-icon"><Icon name="greywater" size={16} /></span>
                <span className="node-text">Greywater Drain</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="warning" size={16} /></span>
                <span className="node-text">Primary Capacity Reached</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="gitBranch" size={16} /></span>
                <span className="node-text">Secondary Overflow Route</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="layers" size={16} /></span>
                <span className="node-text">Detention &amp; Retention Area</span>
              </div>
            </div>
            <p className="route-desc">
              Surge flow: When primary capacity is reached, the flow diversion chamber automatically diverts surplus flow to the secondary overflow outlet to buffer peak discharge.
            </p>
          </div>

          {/* Route 3: Flood Flow */}
          <div className={`route-card ${currentMode === 'flood' ? 'route-active-red' : 'route-inactive'}`}>
            <div className="route-card-header">
              <span className="route-tag">FLOOD RESILIENCE ROUTE</span>
              {currentMode === 'flood' && <span className="active-pill red">ACTIVE IN DEMO</span>}
            </div>
            <div className="nodes-chain">
              <div className="flow-node">
                <span className="node-icon"><Icon name="waves" size={16} /></span>
                <span className="node-text">Greywater Drain</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="shieldAlert" size={16} /></span>
                <span className="node-text">Flood-Resilient Bypass</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="shieldCheck" size={16} /></span>
                <span className="node-text">Non-Return Valve (Closed)</span>
              </div>
              <div className="node-arrow"><Icon name="arrowRight" size={14} /></div>
              <div className="flow-node">
                <span className="node-icon"><Icon name="arrowRight" size={16} /></span>
                <span className="node-text">Designated Drainage Route</span>
              </div>
            </div>
            <p className="route-desc">
              Flood protection: High water levels trigger the bypass mechanism. Flood runoff bypasses primary biofilters directly into designated municipal drainage routes, while the non-return valve protects households from storm backflow.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics & Thresholds Grid */}
      <div className="flood-grid">
        <div className="flood-column">
          <StatusPanel
            title="Flood Resilience Status Indicators"
            items={floodItems}
            isFloodMode={isFlood}
            isOverflowMode={isOverflow}
          />
        </div>

        <div className="flood-column">
          <StatusPanel
            title="Water Level Risk Thresholds"
            items={riskThresholds}
            isFloodMode={isFlood}
            isOverflowMode={isOverflow}
          />
        </div>
      </div>

      {/* Capacity Utilization */}
      <section className="capacity-section">
        <h3 className="section-header">Drainage Capacity &amp; System Loads</h3>
        <div className="progress-grid">
          <ProgressBar
            label="Primary Drain Load"
            value={isFlood ? 92 : isOverflow ? 74 : 45}
            unit="%"
            icon="flood"
            description="Main internal greywater conveyance"
            variant={isFlood ? 'critical' : isOverflow ? 'warning' : 'default'}
          />
          <ProgressBar
            label="Bypass Drain Utilization"
            value={isFlood ? 85 : 0}
            unit="%"
            icon="overflow"
            description="High-flow emergency flood diversion"
            variant={isFlood ? 'critical' : 'default'}
          />
          <ProgressBar
            label="Overall System Drainage"
            value={isFlood ? 88 : isOverflow ? 68 : 42}
            unit="%"
            icon="overview"
            description="Aggregated hydraulic capacity"
            variant={isFlood ? 'critical' : isOverflow ? 'warning' : 'default'}
          />
        </div>
      </section>

      {/* Information Cards */}
      <section className="info-section">
        <div className="info-card">
          <h3 className="info-title">Flood Resilience &amp; Anti-Backflow Engineering</h3>
          <p className="info-text">
            The JalRakshak design integrates passive and automated flood-resilience mechanisms. 
            When simulated external water levels rise above the critical 4.0 meter threshold, 
            the system activates the flood bypass channel to protect sensitive vertical biofilter media from inundation. 
            Concurrently, the mechanical <strong>Non-Return Valve (NRV)</strong> closes under reverse hydraulic pressure, 
            preventing storm water or municipal sewer backflow from backing up into residential plumbing lines. 
            All simulated flood volume is routed cleanly to designated municipal drainage infrastructure.
          </p>
        </div>
      </section>
    </div>
  )
}

export default FloodResilience
