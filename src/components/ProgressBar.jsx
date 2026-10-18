import React from 'react'
import { Icon } from '../utils/iconMap'
import './ProgressBar.css'

const ProgressBar = ({ label, value, unit = '%', icon, description, variant }) => {
  const getFillClass = () => {
    if (variant) return variant
    const num = Number(value)
    if (num >= 90) return 'critical'
    if (num >= 75) return 'warning'
    return 'default'
  }

  const fillClass = getFillClass()

  // Always use Lucide icons
  const renderIcon = () => {
    if (React.isValidElement(icon)) return icon
    if (typeof icon === 'string') {
      return <Icon name={icon} size={18} color="var(--accent-blue)" />
    }
    return <Icon name="gauge" size={18} color="var(--accent-blue)" />
  }

  return (
    <div className={`progress-item ${fillClass}`}>
      <div className="progress-header">
        <div className="progress-icon-badge">
          {renderIcon()}
        </div>
        <div className="progress-title">
          <h4 className="progress-label">{label}</h4>
          {description && <p className="progress-description">{description}</p>}
        </div>
        <span className="progress-value">{value}{unit}</span>
      </div>
      
      <div className="progress-bar-bg">
        <div 
          className={`progress-bar-fill fill-${fillClass}`} 
          style={{ width: `${Math.min(100, Math.max(0, Number(value) || 0))}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
