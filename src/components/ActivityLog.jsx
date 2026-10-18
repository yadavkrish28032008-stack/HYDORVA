import React from 'react'
import { Icon } from '../utils/iconMap'
import './ActivityLog.css'

const ActivityLog = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'recharge':
        return <Icon name="recharge" size={16} color="#0284c7" />
      case 'event':
        return <Icon name="activity" size={16} color="#0284c7" />
      case 'status':
      default:
        return <Icon name="overview" size={16} color="#64748b" />
    }
  }

  return (
    <div className="activity-log">
      <div className="activity-log-header">
        <h3 className="log-title">Recent Activity</h3>
        <span className="log-subtitle">Simulated event stream</span>
      </div>
      
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon-badge">
              {getActivityIcon(activity.type)}
            </div>
            <div className="activity-content">
              <span className="activity-timestamp">{activity.timestamp}</span>
              <p className="activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityLog
