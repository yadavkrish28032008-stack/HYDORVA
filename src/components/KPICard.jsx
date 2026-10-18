import React from 'react'
import { 
  Droplet, 
  RefreshCw, 
  Recycle, 
  Waves, 
  BarChart3, 
  ShieldCheck, 
  AlertTriangle, 
  ShieldAlert,
  TrendingUp,
  Info
} from 'lucide-react'
import './KPICard.css'

const KPICard = ({ 
  label, 
  value, 
  unit = '', 
  icon, 
  trend = '↗ 8.6%', 
  timeframe = 'Today', 
  isStatus = false,
  statusType = 'safe',
  subtitle
}) => {
  // Determine if this is an overflow risk or status card
  const isRiskCard = label.toLowerCase().includes('risk') || isStatus
  const isEfficiencyCard = label.toLowerCase().includes('efficiency')

  const getStatusColor = () => {
    const val = String(value).toLowerCase()
    if (val.includes('high') || val.includes('critical') || statusType === 'critical') return 'critical'
    if (val.includes('warning') || val.includes('surge') || val.includes('exceeded') || statusType === 'warning') return 'warning'
    return 'safe'
  }

  const currentStatus = getStatusColor()

  const renderIcon = () => {
    if (typeof icon === 'object' && icon !== null) return icon

    const iconKey = String(icon).toLowerCase()
    if (iconKey.includes('greywater') || iconKey.includes('drop')) {
      return <Droplet size={18} className="kpi-icon-blue" />
    }
    if (iconKey.includes('treatment') || iconKey.includes('treated')) {
      return <RefreshCw size={18} className="kpi-icon-blue" />
    }
    if (iconKey.includes('reuse')) {
      return <Recycle size={18} className="kpi-icon-green" />
    }
    if (iconKey.includes('recharge')) {
      return <Waves size={18} className="kpi-icon-blue" />
    }
    if (iconKey.includes('overview') || iconKey.includes('efficiency')) {
      return <BarChart3 size={18} className="kpi-icon-blue" />
    }
    if (iconKey.includes('warning') || iconKey.includes('risk')) {
      if (currentStatus === 'critical') return <ShieldAlert size={18} className="kpi-icon-red" />
      if (currentStatus === 'warning') return <AlertTriangle size={18} className="kpi-icon-amber" />
      return <ShieldCheck size={18} className="kpi-icon-green" />
    }
    return <Droplet size={18} className="kpi-icon-blue" />
  }

  const getIconContainerClass = () => {
    if (isRiskCard) {
      if (currentStatus === 'critical') return 'icon-box-red'
      if (currentStatus === 'warning') return 'icon-box-amber'
      return 'icon-box-green'
    }
    const iconKey = String(icon).toLowerCase()
    if (iconKey.includes('reuse')) return 'icon-box-green'
    return 'icon-box-blue'
  }

  return (
    <div className={`kpi-card ${isRiskCard ? `kpi-${currentStatus}` : ''}`}>
      {/* Top Header: Icon + Label */}
      <div className="kpi-top">
        <div className={`kpi-icon-box ${getIconContainerClass()}`}>
          {renderIcon()}
        </div>
        <span className="kpi-label">{label}</span>
      </div>

      {/* Main Metric Value */}
      <div className="kpi-middle">
        {isRiskCard ? (
          <span className={`kpi-status-value status-${currentStatus}`}>
            {value}
          </span>
        ) : (
          <div className="kpi-number-row">
            <span className="kpi-number">{value}</span>
            {unit && <span className="kpi-unit">{unit}</span>}
          </div>
        )}
      </div>

      {/* Footer Row: Timeframe + Trend */}
      <div className="kpi-bottom">
        {isRiskCard ? (
          <span className="kpi-footnote-status">{subtitle || 'Current Status'}</span>
        ) : isEfficiencyCard ? (
          <div className="kpi-demo-notice">
            <span>Illustrative Demo Value</span>
            <Info size={12} className="info-sub-icon" />
          </div>
        ) : (
          <div className="kpi-trend-row">
            <span className="kpi-timeframe">{timeframe}</span>
            <span className="kpi-trend-badge">{trend}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default KPICard
