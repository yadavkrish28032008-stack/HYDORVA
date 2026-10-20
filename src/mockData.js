// Mock data for the JalRakshak dashboard prototype
// NOTE: All metrics are illustrative sample values for Hackathon Demonstration only.

export const generateFlowChartData = (mode = 'normal') => {
  const data = [];
  const now = new Date();
  
  const baseMultiplier = mode === 'overflow' ? 1.35 : mode === 'flood' ? 0.8 : 1.0;
  
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now);
    time.setHours(time.getHours() - i);
    const hour = String(time.getHours()).padStart(2, '0') + ':00';
    
    // Generate realistic illustrative flow data with predictable diurnal pattern
    const baseFlow = (2400 + Math.sin((i / 24) * Math.PI * 2) * 450) * baseMultiplier;
    const noise = ((i * 17) % 100) - 50;
    const flow = Math.round(Math.max(1200, Math.min(4200, baseFlow + noise)));
    
    data.push({
      time: hour,
      flow: flow
    });
  }
  
  return data;
};

// 6 Core Treatment Modules aligned with JalRakshak project concept
export const treatmentModules = [
  {
    id: 1,
    name: 'Nahani Trap / Coarse Screen',
    shortName: 'Nahani Trap / Screen',
    description: 'Captures larger waste before the water enters the treatment stages.',
    stageType: 'Primary Filtration',
    status: {
      normal: 'Active',
      overflow: 'Active (Heavy Load)',
      flood: 'Bypassed'
    },
    value: {
      normal: 'Optimal',
      overflow: 'High Inflow',
      flood: 'Bypassed'
    },
    color: {
      normal: 'safe',
      overflow: 'warning',
      flood: 'neutral'
    }
  },
  {
    id: 2,
    name: 'Silt & Grease Chamber',
    shortName: 'Silt & Grease Chamber',
    description: 'Helps separate settled solids and grease.',
    stageType: 'Sedimentation',
    status: {
      normal: 'Active',
      overflow: 'Active (Capacity 88%)',
      flood: 'Bypassed'
    },
    value: {
      normal: 'Settling Normal',
      overflow: 'Near Capacity',
      flood: 'Bypassed'
    },
    color: {
      normal: 'safe',
      overflow: 'warning',
      flood: 'neutral'
    }
  },
  {
    id: 3,
    name: 'Vertical Biofilter',
    shortName: 'Vertical Biofilter',
    description: 'Represents a compact treatment stage using filter media such as gravel and coconut coir, as proposed in the project concept.',
    stageType: 'Biological Media',
    status: {
      normal: 'Active',
      overflow: 'Max Primary Rate',
      flood: 'Protected / Standby'
    },
    value: {
      normal: '86.6% Efficiency',
      overflow: '74.2% Efficiency',
      flood: 'Offline (Protected)'
    },
    color: {
      normal: 'safe',
      overflow: 'warning',
      flood: 'neutral'
    }
  },
  {
    id: 4,
    name: 'Flow-Control / Diversion Chamber',
    shortName: 'Flow Diversion Chamber',
    description: 'Directs greywater through the appropriate flow path.',
    stageType: 'Flow Management',
    status: {
      normal: 'Normal Route',
      overflow: 'Diverting to Secondary',
      flood: 'Routing to Bypass'
    },
    value: {
      normal: 'Directing to Primary',
      overflow: 'Diverting Surge',
      flood: 'Diverting to Bypass'
    },
    color: {
      normal: 'safe',
      overflow: 'warning',
      flood: 'critical'
    }
  },
  {
    id: 5,
    name: 'Secondary Overflow Outlet',
    shortName: 'Secondary Overflow',
    description: 'Provides an alternate route when the primary treatment capacity is exceeded.',
    stageType: 'Overflow Buffering',
    status: {
      normal: 'Standby',
      overflow: 'ACTIVE (Diverting)',
      flood: 'Standby'
    },
    value: {
      normal: 'Standby',
      overflow: 'Active Route',
      flood: 'Standby'
    },
    color: {
      normal: 'neutral',
      overflow: 'warning',
      flood: 'neutral'
    }
  },
  {
    id: 6,
    name: 'Flood Bypass + Non-Return Valve',
    shortName: 'Flood Bypass & NRV',
    description: 'Represents flood-resilient diversion and protection against reverse flow.',
    stageType: 'Flood Protection',
    status: {
      normal: 'Standby',
      overflow: 'Standby',
      flood: 'ACTIVE (Anti-Backflow Closed)'
    },
    value: {
      normal: 'Standby / NRV Open',
      overflow: 'Standby',
      flood: 'Active / NRV Closed'
    },
    color: {
      normal: 'neutral',
      overflow: 'neutral',
      flood: 'critical'
    }
  }
];

// Backward compatibility export for treatmentStages
export const treatmentStages = treatmentModules.map(m => ({
  name: m.name,
  status: m.status.normal,
  value: m.value.normal,
  color: m.color.normal
}));

// Mode-specific alerts
export const modeAlerts = {
  normal: [
    {
      id: 1,
      timestamp: '14:32',
      message: 'System Operating Normally: Primary treatment and soak pit within balanced capacity (78%)',
      severity: 'info'
    },
    {
      id: 2,
      timestamp: '12:15',
      message: 'Water Reuse Target: 1,320 L/day delivered for domestic non-potable utilization',
      severity: 'info'
    },
    {
      id: 3,
      timestamp: '10:48',
      message: 'Treatment Efficiency: Stable at 86.6% through vertical biofilter media',
      severity: 'info'
    },
    {
      id: 4,
      timestamp: '08:22',
      message: 'Routine Inspection: Coarse screen and silt chamber ready for weekly scheduled clean',
      severity: 'info'
    }
  ],
  overflow: [
    {
      id: 101,
      timestamp: '14:48',
      message: 'OVERFLOW SIMULATED: Greywater inflow (3,850 L/day) exceeded primary treatment threshold (3,500 L/day)',
      severity: 'warning'
    },
    {
      id: 102,
      timestamp: '14:47',
      message: 'Secondary Overflow Outlet Activated: Diverting surplus volume to secondary retention buffer',
      severity: 'warning'
    },
    {
      id: 103,
      timestamp: '14:45',
      message: 'Flow Diversion Chamber engaged: Primary biofilter capped to prevent filter inundation',
      severity: 'warning'
    },
    {
      id: 104,
      timestamp: '12:15',
      message: 'Water reuse continues uninterrupted at 1,450 L/day from primary retention storage',
      severity: 'info'
    }
  ],
  flood: [
    {
      id: 201,
      timestamp: '14:52',
      message: 'FLOOD ALERT: Elevated flood water level detected (4.8 m) — high risk conditions',
      severity: 'critical'
    },
    {
      id: 202,
      timestamp: '14:51',
      message: 'Flood-Resilient Bypass Activated: High-volume runoff diverted directly to designated drainage route',
      severity: 'critical'
    },
    {
      id: 203,
      timestamp: '14:50',
      message: 'Non-Return Valve Closed: Anti-backflow seal engaged to prevent flood water ingress into household lines',
      severity: 'warning'
    },
    {
      id: 204,
      timestamp: '14:48',
      message: 'Primary Biofilter Protected: Treatment unit placed in standby mode to protect biological filter media',
      severity: 'info'
    }
  ]
};

// Default export of alerts for backward compatibility
export const alerts = modeAlerts.normal;

export const activities = [
  {
    id: 1,
    timestamp: '14:45',
    type: 'status',
    description: 'System flow conditions logged — continuous monitoring active'
  },
  {
    id: 2,
    timestamp: '13:20',
    type: 'event',
    description: 'Vertical biofilter cycle verified — bio-media bed functioning normally'
  },
  {
    id: 3,
    timestamp: '12:00',
    type: 'recharge',
    description: 'Groundwater recharge phase completed — 890 L absorbed via soak pit infiltration'
  },
  {
    id: 4,
    timestamp: '10:30',
    type: 'event',
    description: 'Water reuse distribution cycle completed — 1,320 L diverted for non-potable use'
  },
  {
    id: 5,
    timestamp: '09:15',
    type: 'status',
    description: 'Daily demo monitoring initialized with calibrated illustrative parameters'
  }
];

export const kpiData = {
  normal: {
    collected: '2,840',
    treated: '2,460',
    reused: '1,320',
    recharged: '890',
    efficiency: '86.6',
    overflowRisk: 'Low',
    floodRisk: 'Low'
  },
  overflow: {
    collected: '3,850',
    treated: '2,850',
    reused: '1,450',
    recharged: '980',
    efficiency: '74.2',
    overflowRisk: 'Warning',
    floodRisk: 'Low'
  },
  flood: {
    collected: '2,840',
    treated: '1,200',
    reused: '450',
    recharged: '300',
    efficiency: '42.3',
    overflowRisk: 'High',
    floodRisk: 'High'
  }
};

export const floodMetrics = {
  normal: {
    waterLevel: 0.42,
    floodRisk: 'Low',
    drainCapacity: 45,
    bypassStatus: 'Standby',
    treatmentUnit: 'Normal',
    nonReturnValve: 'Standby / Open',
    activeRoute: 'normal'
  },
  overflow: {
    waterLevel: 1.15,
    floodRisk: 'Low',
    drainCapacity: 74,
    bypassStatus: 'Standby',
    treatmentUnit: 'Primary Active + Overflow',
    nonReturnValve: 'Normal Flow',
    activeRoute: 'overflow'
  },
  flood: {
    waterLevel: 4.8,
    floodRisk: 'High',
    drainCapacity: 92,
    bypassStatus: 'Active',
    treatmentUnit: 'Bypassed (Protected)',
    nonReturnValve: 'Active (Closed / Anti-Backflow)',
    activeRoute: 'flood'
  }
};

export const overflowMetrics = {
  normal: {
    soakPitCapacity: 78,
    currentFlow: '2,840',
    overflowThreshold: '3,500',
    secondaryOutletStatus: 'Standby',
    secondaryLeachStatus: 'Standby',
    bypassStatus: 'Standby',
    statusLabel: 'NORMAL',
    activeRoute: 'normal'
  },
  overflow: {
    soakPitCapacity: 96,
    currentFlow: '3,850',
    overflowThreshold: '3,500',
    secondaryOutletStatus: 'ACTIVE (Diverting)',
    secondaryLeachStatus: 'Active',
    bypassStatus: 'Standby',
    statusLabel: 'OVERFLOW SIMULATED',
    activeRoute: 'overflow'
  },
  flood: {
    soakPitCapacity: 95,
    currentFlow: '2,840',
    overflowThreshold: '3,500',
    secondaryOutletStatus: 'Standby',
    secondaryLeachStatus: 'Active',
    bypassStatus: 'Active (Flood Bypass)',
    statusLabel: 'WARNING',
    activeRoute: 'flood'
  }
};

export const threeRMetrics = {
  reduce: {
    label: 'Reduce',
    value: 68,
    unit: '%',
    description: 'Greywater reduced from domestic freshwater demand'
  },
  reuse: {
    label: 'Reuse',
    value: 46,
    unit: '%',
    description: 'Treated water reused for non-potable applications'
  },
  recharge: {
    label: 'Recharge',
    value: 31,
    unit: '%',
    description: 'Sub-surface groundwater infiltration via soak pit'
  }
};
