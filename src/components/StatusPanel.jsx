import React from 'react'
import { Shield, AlertTriangle, CheckCircle2, CircleAlert, PauseCircle, ArrowRight } from 'lucide-react'
import './StatusPanel.css'

const StatusPanel = ({ 
  title, 
  icon, 
  items = [], 
  footnote, 
  isFloodMode, 
  isOverflowMode 
}) => {
  const getHeaderIcon = () => {
    if (icon) return icon
    const t = title.toLowerCase()
    if (t.includes('flood') || t.includes('resilience')) return <Shield size={17} className="panel-hdr-icon blue-icon" />
    if (t.includes('overflow')) return <AlertTriangle size={17} className="panel-hdr-icon blue-icon" />
    return null
  }

  const getPillStyle = (val) => {
    const s = String(val).toLowerCase()
    if (s.includes('safe') || s.includes('online') || s.includes('protected') || s.includes('low') || s.includes('good') || s.includes('normal')) {
      return 'pill-green'
    }
    if (s.includes('warning') || s.includes('medium') || s.includes('high inflow') || s.includes('capacity')) {
      return 'pill-amber'
    }
    if (s.includes('critical') || s.includes('danger') || s.includes('high') || s.includes('engaged') || s.includes('flood')) {
      return 'pill-red'
    }
    return 'pill-blue'
  }

  return (
    <div className="status-panel-card">
      <div className="status-panel-header">
        <div className="panel-title-row">
          {getHeaderIcon()}
          <h3 className="panel-title">{title}</h3>
        </div>
      </div>

      <div className="status-items-list">
        {items.map((item, index) => {
          // Check if item has badge / pill structure or simple value
          const hasPill = item.pill || item.badge
          const pillText = item.pill || item.badge
          const valueText = item.valueText || item.value
          const IconComp = item.icon

          return (
            <div key={index} className="status-row">
              <div className="row-label-group">
                {IconComp && (
                  <span className="item-row-icon">
                    <IconComp size={13} />
                  </span>
                )}
                <span className="row-label">{item.label}</span>
              </div>
              
              <div className="row-values">
                <span className={`row-val-primary ${item.status ? `val-${item.status}` : ''}`}>
                  {valueText}
                </span>

                {pillText && (
                  <span className={`status-pill ${getPillStyle(pillText)}`}>
                    {pillText}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {footnote && (
        <div className="status-panel-footer">
          <span className="panel-footnote">{footnote}</span>
        </div>
      )}
    </div>
  )
}

export default StatusPanel
