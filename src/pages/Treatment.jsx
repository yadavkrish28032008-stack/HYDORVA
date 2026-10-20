import React from 'react'
import StatusPanel from '../components/StatusPanel'
import ProgressBar from '../components/ProgressBar'
import { Icon } from '../utils/iconMap'
import { treatmentModules, kpiData, overflowMetrics } from '../mockData'
import './Treatment.css'

const Treatment = ({ currentMode = 'normal', isFloodMode, isOverflowMode }) => {
  const isFlood = isFloodMode || currentMode === 'flood'
  const isOverflow = isOverflowMode || currentMode === 'overflow'

  const currentKPI = kpiData[currentMode] || kpiData.normal
  const currentOverflow = overflowMetrics[currentMode] || overflowMetrics.normal

  // Treatment stages mapped from the 6 project modules
  const treatmentItems = treatmentModules.map(mod => ({
    label: mod.shortName,
    value: mod.value[currentMode] || mod.value.normal
  }))

  const treatmentDetails = [
    { 
      label: 'Pre-Filtration Screening', 
      value: isFlood ? 'Bypassed' : isOverflow ? 'High Load (92%)' : 'Nominal' 
    },
    { 
      label: 'Vertical Biofilter Media', 
      value: isFlood ? 'Offline / Protected' : isOverflow ? 'Max Inflow (3,500 L/d)' : 'Active (Coconut Coir & Gravel)' 
    },
    { 
      label: 'Simulated Treatment Efficiency', 
      value: `${currentKPI.efficiency}%` 
    },
    { 
      label: 'Flow Diversion Status', 
      value: isFlood ? 'Bypass Active (NRV Closed)' : isOverflow ? 'Diverting to Secondary' : 'Primary Biofilter Flow' 
    },
    { 
      label: 'System Load Condition', 
      value: isFlood ? 'Flood Protection Active' : isOverflow ? 'Secondary Buffering Active' : 'Normal Operating Load' 
    }
  ]

  const getModuleIcon = (id) => {
    switch (id) {
      case 1: return 'filter'
      case 2: return 'layers'
      case 3: return 'treatment'
      case 4: return 'gitBranch'
      case 5: return 'overflow'
      case 6: return 'shield'
      default: return 'treatment'
    }
  }

  return (
    <div className="treatment-page">
      {/* Header Info Banner */}
      <div className="treatment-header">
        <div className="header-info">
          <div className="title-row">
            <h3 className="header-title">Treatment Process Flow &amp; Modules</h3>
            <span className="concept-pill">Non-Potable Greywater Only</span>
          </div>
          <p className="header-subtitle">
            Conceptual multi-stage physical and biological filtration for non-potable reuse (irrigation/flushing) 
            and safe groundwater replenishment. Does not produce drinking water.
          </p>
        </div>
      </div>

      {/* Horizontal Flow Diagram with Lucide Icons */}
      <section className="treatment-flow-section">
        <div className="flow-diagram-container">
          <div className={`flow-step ${isFlood ? 'dimmed' : 'active'}`}>
            <div className="step-icon-badge">
              <Icon name="greywater" size={20} color="var(--accent-blue)" />
            </div>
            <span className="step-title">Collection</span>
            <span className="step-detail">Household Inflow</span>
          </div>
          
          <div className="flow-arrow-icon">
            <Icon name="arrowRight" size={16} color="var(--accent-blue)" />
          </div>
          
          <div className={`flow-step ${isFlood ? 'dimmed' : 'active'}`}>
            <div className="step-icon-badge">
              <Icon name="filter" size={20} color="var(--accent-blue)" />
            </div>
            <span className="step-title">Coarse Screen</span>
            <span className="step-detail">Nahani Trap</span>
          </div>
          
          <div className="flow-arrow-icon">
            <Icon name="arrowRight" size={16} color="var(--accent-blue)" />
          </div>
          
          <div className={`flow-step ${isFlood ? 'dimmed' : 'active'}`}>
            <div className="step-icon-badge">
              <Icon name="layers" size={20} color="var(--accent-blue)" />
            </div>
            <span className="step-title">Silt &amp; Grease</span>
            <span className="step-detail">Sedimentation</span>
          </div>
          
          <div className="flow-arrow-icon">
            <Icon name="arrowRight" size={16} color="var(--accent-blue)" />
          </div>
          
          <div className={`flow-step ${isFlood ? 'offline' : isOverflow ? 'surge' : 'active'}`}>
            <div className="step-icon-badge">
              <Icon name="treatment" size={20} color="var(--accent-blue)" />
            </div>
            <span className="step-title">Biofilter</span>
            <span className="step-detail">Gravel + Coir</span>
          </div>
          
          <div className="flow-arrow-icon">
            <Icon name="arrowRight" size={16} color="var(--accent-blue)" />
          </div>
          
          <div className={`flow-step ${isFlood ? 'active-flood' : isOverflow ? 'active-overflow' : 'active'}`}>
            <div className="step-icon-badge">
              <Icon name={isFlood ? 'shieldAlert' : isOverflow ? 'gitBranch' : 'recharge'} size={20} color="var(--accent-blue)" />
            </div>
            <span className="step-title">{isFlood ? 'Bypass Drain' : isOverflow ? 'Secondary Outlet' : 'Reuse / Recharge'}</span>
            <span className="step-detail">{isFlood ? 'Safe Discharge' : isOverflow ? 'Detention Buffer' : 'Non-Potable'}</span>
          </div>
        </div>
      </section>

      {/* 6 Conceptual Modules Grid */}
      <section className="modules-section">
        <div className="modules-header-row">
          <h3 className="section-header">6 Core Treatment &amp; Resilience Modules</h3>
          <span className="modules-mode-tag">
            Current Mode: <strong>{currentMode.toUpperCase()}</strong>
          </span>
        </div>
        
        <div className="modules-grid">
          {treatmentModules.map((mod) => {
            const statusText = mod.status[currentMode] || mod.status.normal
            const valueText = mod.value[currentMode] || mod.value.normal
            const colorClass = mod.color[currentMode] || mod.color.normal
            
            return (
              <div key={mod.id} className={`module-card border-${colorClass}`}>
                <div className="module-top">
                  <div className={`module-icon-badge ${colorClass}`}>
                    <Icon name={getModuleIcon(mod.id)} size={20} />
                  </div>
                  <div className="module-stage-type">{mod.stageType}</div>
                </div>

                <div className="module-body">
                  <h4 className="module-title">{mod.name}</h4>
                  <p className="module-desc">{mod.description}</p>
                </div>

                <div className="module-footer">
                  <div className="module-status-row">
                    <span className="status-caption">Demo State:</span>
                    <span className={`module-badge status-${colorClass}`}>{statusText}</span>
                  </div>
                  <div className="module-value-caption">
                    <span className="value-label">Current Indicator:</span>
                    <span className="value-highlight">{valueText}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Status & Details Section */}
      <div className="treatment-grid">
        <div className="treatment-column">
          <StatusPanel
            title="Module Operational Status"
            items={treatmentItems}
            isFloodMode={isFlood}
            isOverflowMode={isOverflow}
          />
        </div>

        <div className="treatment-column">
          <StatusPanel
            title="Treatment Performance Details"
            items={treatmentDetails}
            isFloodMode={isFlood}
            isOverflowMode={isOverflow}
          />
        </div>
      </div>

      {/* Capacity Progress Bars */}
      <section className="capacity-section">
        <h3 className="section-header">Treatment Stage Capacity Utilization</h3>
        <div className="capacity-grid">
          <ProgressBar
            label="Soak Pit Capacity"
            value={currentOverflow.soakPitCapacity}
            unit="%"
            icon="overview"
            description="Primary filtration and sub-surface absorption"
            variant={currentOverflow.soakPitCapacity >= 90 ? 'critical' : currentOverflow.soakPitCapacity >= 75 ? 'warning' : 'default'}
          />
          <ProgressBar
            label="Secondary Overflow Route"
            value={isFlood ? 85 : isOverflow ? 94 : 15}
            unit="%"
            icon="overflow"
            description="Secondary outlet buffer and leach field load"
            variant={isOverflow ? 'warning' : isFlood ? 'critical' : 'default'}
          />
          <ProgressBar
            label="Overall Treatment Efficiency"
            value={Number(currentKPI.efficiency) || 86}
            unit="%"
            icon="treatment"
            description="Biological filtration effectiveness (sample data)"
            variant={Number(currentKPI.efficiency) < 50 ? 'critical' : 'default'}
          />
        </div>
      </section>

      {/* Disclaimer */}
      <div className="treatment-disclaimer">
        <Icon name="info" size={16} color="var(--accent-blue)" />
        <p>
          <strong>SAFETY &amp; VERIFICATION NOTICE:</strong> The JalRakshak treatment architecture is intended strictly for 
          domestic greywater recycling for non-potable uses (irrigation, toilet flushing) and controlled sub-surface recharge. 
          It does not make water potable or remove hazardous chemical pollutants. Displayed efficiency rates are design estimates 
          for prototype demonstration.
        </p>
      </div>
    </div>
  )
}

export default Treatment
