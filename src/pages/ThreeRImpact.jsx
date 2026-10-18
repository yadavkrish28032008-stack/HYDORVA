import React from 'react'
import ProgressBar from '../components/ProgressBar'
import StatusPanel from '../components/StatusPanel'
import { Droplet, RefreshCw, ArrowDownToDot, Leaf, Info, Sparkles, CheckCircle2 } from 'lucide-react'
import './ThreeRImpact.css'

const ThreeRImpact = ({ isFloodMode, currentMode = 'normal' }) => {
  // Mode-adaptive illustrative 3R metrics
  const metrics = currentMode === 'flood'
    ? { reduce: 34, reuse: 23, recharge: 15 }
    : currentMode === 'overflow'
    ? { reduce: 54, reuse: 38, recharge: 42 }
    : { reduce: 68, reuse: 46, recharge: 31 }

  const recoveryRate = Math.round((metrics.reuse + metrics.recharge) * 0.9) // illustrative recovery rate

  const impactItems = [
    { label: 'Freshwater Demand Reduction', value: `${metrics.reduce}% (Target)`, status: 'good' },
    { label: 'Non-Potable Water Reuse', value: `${metrics.reuse}% Treated`, status: 'good' },
    { label: 'Groundwater Recharge Infiltration', value: `${metrics.recharge}% Volume`, status: 'good' },
    { label: 'Estimated Overall Recovery', value: `${recoveryRate}%`, status: currentMode === 'flood' ? 'warning' : 'good' }
  ]

  const benefitItems = currentMode === 'flood'
    ? [
        { label: 'Daily Water Diverted', value: '3,200 L/day (Bypass)' },
        { label: 'Drain Inundation Buffer', value: '45% Peak Buffer' },
        { label: 'Infrastructure Protection', value: '100% Active' },
        { label: 'Simulated Soil Protection', value: 'Erosion Prevention' }
      ]
    : currentMode === 'overflow'
    ? [
        { label: 'Daily Water Processed', value: '2,400 L/day (Filter Max)' },
        { label: 'Secondary Overflow Handled', value: '1,400 L/day (Soakage)' },
        { label: 'Estimated Water Savings', value: '1,480 L/day' },
        { label: 'Estimated Carbon Offset', value: '~130 kg CO₂/yr' }
      ]
    : [
        { label: 'Daily Water Savings', value: '1,690 L/day (Illustrative)' },
        { label: 'Monthly Water Savings', value: '50,700 L/mo (Estimated)' },
        { label: 'Annual Water Savings', value: '617,350 L/yr (Projected)' },
        { label: 'Estimated Carbon Offset', value: '150 kg CO₂/year' }
      ]

  return (
    <div className="three-r-page">
      <div className="demo-banner">
        <Info size={16} className="demo-banner-icon" />
        <span>
          <strong>DEMO PROTOTYPE — SAMPLE DATA:</strong> 3R metrics represent the project's conceptual water-management principles and projected savings models. Values are illustrative simulations, not verified field measurements.
        </span>
      </div>

      <section className="header-section">
        <div className="header-card">
          <div className="header-badge">
            <Sparkles size={14} />
            <span>Water Conservation Framework</span>
          </div>
          <h3 className="header-title">3R Impact Analysis: Reduce • Reuse • Recharge</h3>
          <p className="header-subtitle">
            HYDROVA combines source-level conservation, biological greywater treatment, and controlled sub-surface recharge to reduce municipal supply dependency and support aquifer replenishment.
          </p>
        </div>
      </section>

      <section className="metrics-section">
        <div className="section-header-row">
          <h3 className="section-header">Intended Performance Metrics &amp; Circular Flow</h3>
          <span className="section-tag">Illustrative Targets</span>
        </div>

        <div className="three-r-showcase-grid">
          {/* Donut Ratio Card matching the reference image */}
          <div className="donut-showcase-card">
            <div className="donut-card-header">
              <span className="donut-card-title">3R Impact Distribution</span>
              <span className="donut-card-badge">Today</span>
            </div>
            <div className="donut-card-body">
              <div className="donut-wrapper">
                <svg viewBox="0 0 100 100" className="donut-svg">
                  <circle cx="50" cy="50" r="38" className="donut-bg" />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    className="donut-fill"
                    strokeDasharray="238.76"
                    strokeDashoffset={238.76 * (1 - (metrics.reuse / 100))}
                  />
                </svg>
                <div className="donut-center">
                  <span className="donut-val">{metrics.reduce}%</span>
                  <span className="donut-sub">Reuse Ratio</span>
                </div>
              </div>
              <div className="donut-legend">
                <div className="legend-row">
                  <span className="legend-dot reduce-dot"></span>
                  <div className="legend-info">
                    <span className="legend-name">Reduce</span>
                    <span className="legend-stat">1,120 L/day <strong>({metrics.reduce}%)</strong></span>
                  </div>
                </div>
                <div className="legend-row">
                  <span className="legend-dot reuse-dot"></span>
                  <div className="legend-info">
                    <span className="legend-name">Reuse</span>
                    <span className="legend-stat">1,320 L/day <strong>({metrics.reuse}%)</strong></span>
                  </div>
                </div>
                <div className="legend-row">
                  <span className="legend-dot recharge-dot"></span>
                  <div className="legend-info">
                    <span className="legend-name">Recharge</span>
                    <span className="legend-stat">890 L/day <strong>({metrics.recharge}%)</strong></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="donut-footnote">* Illustrative demo values</div>
          </div>

          <div className="metrics-bars-column">
            <ProgressBar
              label="Reduce"
              value={metrics.reduce}
              unit="%"
              icon="overview"
              description="Target reduction in freshwater demand for non-potable uses"
            />
            <ProgressBar
              label="Reuse"
              value={metrics.reuse}
              unit="%"
              icon="reuse"
              description="Treated greywater redirected to toilet flushing and landscape irrigation"
            />
            <ProgressBar
              label="Recharge"
              value={metrics.recharge}
              unit="%"
              icon="recharge"
              description="Filtered effluent directed to soak pit for controlled groundwater infiltration"
            />
          </div>
        </div>
      </section>

      <div className="impact-grid">
        <div className="impact-column">
          <StatusPanel
            title="3R Performance Status"
            items={impactItems}
            isFloodMode={isFloodMode}
          />
        </div>

        <div className="impact-column">
          <StatusPanel
            title={currentMode === 'flood' ? 'Storm Contingency Metrics' : 'Projected Environmental Benefits'}
            items={benefitItems}
            isFloodMode={isFloodMode}
          />
        </div>
      </div>

      <section className="info-section">
        <div className="info-card">
          <h3 className="info-title">Core Principles of the HYDROVA 3R Strategy</h3>
          <div className="info-content">
            <div className="info-item">
              <div className="info-item-header">
                <div className="info-pillar-icon icon-reduce">
                  <Droplet size={16} />
                </div>
                <h4 className="info-item-title">1. Reduce: Freshwater Demand Abatement</h4>
              </div>
              <p className="info-item-text">
                Substitutes potable municipal water with treated greywater for non-potable applications such as landscape watering, construction curing, and toilet flushing. This directly lowers the stress on stressed municipal piped water infrastructure.
              </p>
            </div>

            <div className="info-item">
              <div className="info-item-header">
                <div className="info-pillar-icon icon-reuse">
                  <RefreshCw size={16} />
                </div>
                <h4 className="info-item-title">2. Reuse: Localized Closed-Loop Cycling</h4>
              </div>
              <p className="info-item-text">
                Passes bathroom and washing greywater through the Nahani screen and Vertical Biofilter to remove suspended solids, grease, and turbidity, providing safe, clarified non-potable water for on-site utility needs.
              </p>
            </div>

            <div className="info-item">
              <div className="info-item-header">
                <div className="info-pillar-icon icon-recharge">
                  <ArrowDownToDot size={16} />
                </div>
                <h4 className="info-item-title">3. Recharge: Sub-Surface Infiltration</h4>
              </div>
              <p className="info-item-text">
                Surplus biofiltered water is routed into dedicated gravel-lined soak pits and percolation trenches, replenishing the local shallow water table and preventing runoff-induced urban soil erosion.
              </p>
            </div>
          </div>

          <div className="disclaimer-callout">
            <CheckCircle2 size={16} className="disclaimer-icon" />
            <span>
              <strong>Non-Potable Use Notice:</strong> In accordance with environmental safety guidelines, treated greywater is designated exclusively for non-potable applications (toilet flushing, landscape irrigation, and soak pit recharge). It is not treated for human consumption.
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThreeRImpact
