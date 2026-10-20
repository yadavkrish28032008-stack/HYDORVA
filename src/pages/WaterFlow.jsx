import React from 'react'
import FlowChart from '../components/FlowChart'
import StatusPanel from '../components/StatusPanel'
import { generateFlowChartData } from '../mockData'
import { TrendingUp, TrendingDown, Minus, Activity, Info, AlertTriangle, ShieldAlert } from 'lucide-react'
import './WaterFlow.css'

const WaterFlow = ({ isFloodMode, currentMode = 'normal' }) => {
  const flowData = generateFlowChartData()

  // Mode-adaptive illustrative flow metrics
  const flowMetrics = currentMode === 'flood'
    ? [
        { label: 'Current Flow Rate', value: '5,100 L/day (Bypass Active)', status: 'danger' },
        { label: 'Peak Storm Runoff', value: '5,800 L/day', status: 'danger' },
        { label: 'Base Domestic Inflow', value: '2,840 L/day', status: 'neutral' },
        { label: 'Average Inflow Rate', value: '4,750 L/day', status: 'warning' }
      ]
    : currentMode === 'overflow'
    ? [
        { label: 'Current Flow Rate', value: '3,800 L/day (Surge)', status: 'warning' },
        { label: 'Peak Hydraulic Load', value: '4,400 L/day', status: 'warning' },
        { label: 'Filter Treatment Capacity', value: '2,400 L/day (Exceeded)', status: 'danger' },
        { label: 'Secondary Diverted Flow', value: '1,400 L/day', status: 'warning' }
      ]
    : [
        { label: 'Current Flow Rate', value: '2,840 L/day', status: 'good' },
        { label: 'Peak Flow', value: '3,400 L/day', status: 'good' },
        { label: 'Minimum Flow', value: '1,600 L/day', status: 'good' },
        { label: 'Average Flow', value: '2,320 L/day', status: 'good' }
      ]

  const flowTrends = currentMode === 'flood'
    ? [
        { label: '24-hour Trend', value: '+78.5% (Storm Runoff)', status: 'danger' },
        { label: '7-day Inflow Delta', value: '+42.0%', status: 'warning' },
        { label: 'Bypass Utilization', value: '100% Active', status: 'danger' },
        { label: 'Forecast (Next 6h)', value: 'High Inflow Persisting', status: 'warning' }
      ]
    : currentMode === 'overflow'
    ? [
        { label: '24-hour Trend', value: '+33.8% (Domestic Surge)', status: 'warning' },
        { label: '7-day Inflow Delta', value: '+14.2%', status: 'warning' },
        { label: 'Overflow Route Load', value: 'Engaged (36.8%)', status: 'warning' },
        { label: 'Forecast (Next 6h)', value: 'Gradual Return to Baseline', status: 'good' }
      ]
    : [
        { label: '24-hour Trend', value: '+5.2% Normal Variance', status: 'good' },
        { label: '7-day Inflow Delta', value: '-2.1% Steady', status: 'good' },
        { label: '30-day Inflow Trend', value: '+12.3% Seasonal', status: 'neutral' },
        { label: 'Forecast (Next 6h)', value: 'Stable Inflow Expected', status: 'good' }
      ]

  return (
    <div className="waterflow-page">
      <div className="demo-banner">
        <Info size={16} className="demo-banner-icon" />
        <span>
          <strong>DEMO PROTOTYPE — SAMPLE DATA:</strong> 24-hour flow patterns and rates illustrate simulated household discharge dynamics for presentation purposes.
        </span>
      </div>

      <section className="flow-chart-section">
        <FlowChart
          data={flowData}
          title="24-Hour Greywater Flow Analysis"
          isFloodMode={isFloodMode}
          currentMode={currentMode}
        />
      </section>

      <div className="metrics-grid">
        <div className="metrics-column">
          <StatusPanel
            title={currentMode === 'flood' ? 'Storm Runoff Flow Metrics' : currentMode === 'overflow' ? 'Surge Flow Metrics' : 'Current Flow Metrics'}
            items={flowMetrics}
            isFloodMode={isFloodMode}
          />
        </div>

        <div className="metrics-column">
          <StatusPanel
            title="Flow Trends & Forecasting"
            items={flowTrends}
            isFloodMode={isFloodMode}
          />
        </div>
      </div>

      <section className="info-section">
        <div className="info-card">
          <div className="info-card-header">
            <Activity size={18} className="info-icon" />
            <h3 className="info-title">Water Flow Monitoring System</h3>
          </div>
          <p className="info-text">
            The JalRakshak water flow subsystem tracks incoming domestic greywater from household drains. Under normal conditions, water passes sequentially through the coarse screen and biofilter. During hydraulic surges or flood events, flow diversion ensures primary treatment stages are protected from structural clogging or media washout.
          </p>
        </div>
      </section>
    </div>
  )
}

export default WaterFlow
