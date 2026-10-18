import React from 'react'
import KPICard from '../components/KPICard'
import FlowChart from '../components/FlowChart'
import StatusPanel from '../components/StatusPanel'
import AlertsSection from '../components/AlertsSection'
import { generateFlowChartData, modeAlerts, kpiData, floodMetrics } from '../mockData'
import { 
  ArrowRight, 
  Recycle, 
  Filter, 
  Layers, 
  GitBranch, 
  CornerDownRight, 
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Waves,
  Droplet
} from 'lucide-react'
import './Overview.css'

const Overview = ({ currentMode = 'normal', isFloodMode, isOverflowMode, onModeChange, onNavigate }) => {
  const isFlood = isFloodMode || currentMode === 'flood'
  const isOverflow = isOverflowMode || currentMode === 'overflow'

  const kpi = kpiData[currentMode] || kpiData.normal
  const flood = floodMetrics[currentMode] || floodMetrics.normal
  const alertsList = modeAlerts[currentMode] || modeAlerts.normal
  const flowData = generateFlowChartData(currentMode)

  // Status panel items matching reference screenshot with small icons and aligned badges
  const floodItems = [
    { label: 'Water Level', valueText: `${flood.waterLevel} m`, pill: isFlood ? 'High' : 'Normal', icon: Waves },
    { label: 'Flood Risk', valueText: flood.floodRisk, pill: isFlood ? 'Critical' : 'Safe', icon: AlertTriangle },
    { label: 'Drain Capacity', valueText: `${flood.drainCapacity}%`, pill: isFlood ? 'Overload' : 'Adequate', icon: Filter },
    { label: 'Treatment Unit', valueText: flood.treatmentUnit, pill: 'Online', icon: Layers },
    { label: 'Bypass Status', valueText: flood.bypassStatus, pill: isFlood ? 'Active' : 'Standby', icon: GitBranch },
    { label: 'Non-Return Valve', valueText: flood.nonReturnValve, pill: 'Protected', icon: ShieldCheck }
  ]

  const overflowItems = [
    { label: 'Primary Capacity', valueText: '2,500 L/day', icon: Filter },
    { label: 'Current Inflow', valueText: isOverflow ? '3,800 L/day' : '1,980 L/day', pill: isOverflow ? 'Warning' : 'Low', icon: Droplet },
    { label: 'Overflow Risk', valueText: isOverflow ? 'Warning' : 'Low', pill: isOverflow ? 'Warning' : 'Safe', icon: AlertTriangle },
    { label: 'Secondary Outlet', valueText: isOverflow ? 'Active' : 'Inactive', pill: isOverflow ? 'Diverting' : 'Standby', icon: CornerDownRight },
    { label: 'Bypass Status', valueText: isFlood ? 'Engaged' : 'Standby', pill: isFlood ? 'Active' : 'Standby', icon: ShieldCheck }
  ]

  // 6 Treatment stages matching reference screenshot
  const treatmentStages = [
    {
      id: 'coarse',
      title: 'Nahani Trap / Coarse Screen',
      desc: 'Removes large solids',
      status: 'OK',
      icon: Filter
    },
    {
      id: 'silt',
      title: 'Silt & Grease Chamber',
      desc: 'Separates silt and grease',
      status: 'OK',
      icon: Layers
    },
    {
      id: 'biofilter',
      title: 'Vertical Biofilter',
      desc: 'Gravel + Coconut Coir',
      status: 'OK',
      icon: Layers
    },
    {
      id: 'diversion',
      title: 'Flow-Control / Diversion Chamber',
      desc: 'Directs water flow',
      status: 'OK',
      icon: GitBranch
    },
    {
      id: 'overflow-outlet',
      title: 'Secondary Overflow Outlet',
      desc: 'Handles excess flow',
      status: isOverflow ? 'ACTIVE' : 'OK',
      isElevated: isOverflow,
      icon: CornerDownRight
    },
    {
      id: 'bypass-nrv',
      title: 'Flood Bypass + Non-Return Valve',
      desc: 'Prevents backflow during floods',
      status: isFlood ? 'ACTIVE' : 'OK',
      isElevated: isFlood,
      icon: ShieldCheck
    }
  ]

  return (
    <div className="overview-page">
      {/* Top Row: 6 KPI Cards */}
      <section className="kpi-section">
        <div className="kpi-grid">
          <KPICard
            label="GREYWATER COLLECTED"
            value="2,840"
            unit="L/day"
            icon="greywater"
            timeframe="Today"
            trend="↗ 8.6%"
          />
          <KPICard
            label="WATER TREATED"
            value="2,460"
            unit="L/day"
            icon="treatment"
            timeframe="Today"
            trend="↗ 7.4%"
          />
          <KPICard
            label="WATER REUSED"
            value="1,320"
            unit="L/day"
            icon="reuse"
            timeframe="Today"
            trend="↗ 6.1%"
          />
          <KPICard
            label="GROUNDWATER RECHARGED"
            value="890"
            unit="L/day"
            icon="recharge"
            timeframe="Today"
            trend="↗ 5.3%"
          />
          <KPICard
            label="TREATMENT EFFICIENCY"
            value="86.6%"
            icon="overview"
            timeframe="Illustrative Demo Value"
          />
          <KPICard
            label="OVERFLOW RISK"
            value={isFlood ? 'High' : isOverflow ? 'Warning' : 'Low'}
            icon="risk"
            isStatus={true}
            statusType={isFlood ? 'critical' : isOverflow ? 'warning' : 'safe'}
            subtitle="Current Status"
          />
        </div>
      </section>

      {/* Middle Row: Timeline Chart (Left) + Treatment Pipeline (Right) */}
      <section className="middle-section">
        <div className="middle-grid">
          {/* Left Column: Timeline */}
          <div className="middle-col flow-timeline-col">
            <FlowChart
              data={flowData}
              title="Greywater Flow Timeline (Today)"
              isFloodMode={isFlood}
              currentMode={currentMode}
            />
          </div>

          {/* Right Column: Treatment System Status Pipeline */}
          <div className="middle-col treatment-status-col">
            <div className="treatment-pipeline-card">
              <div className="pipeline-header">
                <h3 className="pipeline-title">Treatment System Status</h3>
              </div>

              <div className="pipeline-chain">
                {treatmentStages.map((stage, idx) => {
                  const IconComp = stage.icon
                  const isLast = idx === treatmentStages.length - 1
                  return (
                    <React.Fragment key={stage.id}>
                      <div className={`pipeline-stage-item ${stage.isElevated ? 'stage-elevated' : ''}`}>
                        <div className="stage-icon-box">
                          <IconComp size={18} className="stage-icon" />
                        </div>
                        <h4 className="stage-title">{stage.title}</h4>
                        <p className="stage-desc">{stage.desc}</p>
                        <div className={`stage-status-pill ${stage.isElevated ? 'pill-active' : 'pill-ok'}`}>
                          <span className="stage-dot"></span>
                          <span>{stage.status}</span>
                        </div>
                      </div>

                      {!isLast && (
                        <div className="stage-connector-arrow">
                          <ArrowRight size={16} />
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Row: 4 Equal Dashboard Cards Grid */}
      <section className="bottom-section">
        <div className="bottom-grid">
          {/* Card 1: Flood Resilience Status */}
          <div className="bottom-card-wrap">
            <StatusPanel
              title="Flood Resilience Status"
              items={floodItems}
              footnote="Switch to Flood Mode to simulate flood conditions."
              isFloodMode={isFlood}
              isOverflowMode={isOverflow}
            />
          </div>

          {/* Card 2: Overflow Management */}
          <div className="bottom-card-wrap">
            <StatusPanel
              title="Overflow Management"
              items={overflowItems}
              footnote="Switch to Overflow Mode to simulate high inflow."
              isFloodMode={isFlood}
              isOverflowMode={isOverflow}
            />
          </div>

          {/* Card 3: 3R Impact Donut Chart */}
          <div className="bottom-card-wrap">
            <div className="three-r-donut-card">
              <div className="three-r-donut-header">
                <div className="three-r-title-row">
                  <Recycle size={17} className="three-r-icon blue-icon" />
                  <h3 className="three-r-title">3R Impact (Today)</h3>
                </div>
              </div>

              <div className="three-r-donut-body">
                {/* SVG Radial Gauge */}
                <div className="donut-circle-wrap">
                  <svg viewBox="0 0 100 100" className="donut-svg">
                    <circle cx="50" cy="50" r="38" stroke="#f1f5f9" strokeWidth="11" fill="none" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      stroke="#0284c7" 
                      strokeWidth="11" 
                      fill="none" 
                      strokeDasharray="238.76" 
                      strokeDashoffset={238.76 * (1 - 0.68)}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="donut-center-text">
                    <span className="donut-percent">68%</span>
                    <span className="donut-sublabel">Reuse Ratio</span>
                  </div>
                </div>

                {/* Legend Column */}
                <div className="donut-legend-col">
                  <div className="legend-row">
                    <span className="legend-dot dot-reduce"></span>
                    <div className="legend-info">
                      <span className="legend-name">Reduce</span>
                      <span className="legend-val">1,120 L/day <span className="legend-pct">(39%)</span></span>
                    </div>
                  </div>

                  <div className="legend-row">
                    <span className="legend-dot dot-reuse"></span>
                    <div className="legend-info">
                      <span className="legend-name">Reuse</span>
                      <span className="legend-val">1,320 L/day <span className="legend-pct">(46%)</span></span>
                    </div>
                  </div>

                  <div className="legend-row">
                    <span className="legend-dot dot-recharge"></span>
                    <div className="legend-info">
                      <span className="legend-name">Recharge</span>
                      <span className="legend-val">890 L/day <span className="legend-pct">(31%)</span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="three-r-footer">
                <span className="three-r-footnote">* Illustrative demo values</span>
              </div>
            </div>
          </div>

          {/* Card 4: Recent Alerts */}
          <div className="bottom-card-wrap">
            <AlertsSection
              alerts={alertsList}
              isFloodMode={isFlood}
              isOverflowMode={isOverflow}
              currentMode={currentMode}
              onNavigate={onNavigate}
              showAll={false}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Overview
