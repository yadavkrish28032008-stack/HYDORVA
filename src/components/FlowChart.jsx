import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChevronDown, MoreVertical } from 'lucide-react'
import './FlowChart.css'

const FlowChart = ({ data, title = 'Greywater Flow Timeline (Today)', isFloodMode, currentMode = 'normal' }) => {
  const [unit, setUnit] = useState('Liters (L)')

  const getStrokeColor = () => {
    if (currentMode === 'flood' || isFloodMode) return '#dc2626'
    if (currentMode === 'overflow') return '#d97706'
    return '#0284c7'
  }

  const strokeColor = getStrokeColor()

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="flow-tooltip">
          <p className="flow-tooltip-time">{payload[0].payload.time}</p>
          <p className="flow-tooltip-val" style={{ color: strokeColor }}>
            {payload[0].value.toLocaleString()} <span className="flow-tooltip-unit">L/hr</span>
          </p>
          <span className="flow-tooltip-note">Simulated Flow</span>
        </div>
      )
    }
    return null
  }

  return (
    <div className="flow-chart-card">
      <div className="flow-card-header">
        <h3 className="flow-card-title">{title}</h3>
        <div className="flow-card-actions">
          <div className="flow-unit-select">
            <span>{unit}</span>
            <ChevronDown size={14} className="select-arrow" />
          </div>
          <button type="button" className="flow-more-btn" aria-label="Chart Options">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      <div className="flow-chart-wrapper">
        <ResponsiveContainer width="100%" height={230}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="flowSkyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={strokeColor} stopOpacity={0.25} />
                <stop offset="100%" stopColor={strokeColor} stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={{ stroke: '#e2eaf2' }}
              tickLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={{ stroke: '#e2eaf2' }}
              tickLine={false}
              domain={[0, 3000]}
              ticks={[0, 750, 1500, 2250, 3000]}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="flow"
              stroke={strokeColor}
              strokeWidth={2.5}
              fill="url(#flowSkyGradient)"
              dot={{ r: 3, fill: strokeColor, strokeWidth: 1.5, stroke: '#ffffff' }}
              activeDot={{ r: 5, fill: strokeColor, stroke: '#ffffff', strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flow-card-footer">
        <span className="flow-disclaimer-text">* All values are illustrative demo data.</span>
      </div>
    </div>
  )
}

export default FlowChart
