/**
 * Icon System for HYDROVA Dashboard
 * Maps semantic icon names to Lucide React icons
 * Provides centralized icon management for consistent styling
 */

import {
  Droplet,
  Waves,
  BarChart3,
  Zap,
  AlertTriangle,
  AlertCircle,
  Recycle,
  Bell,
  CircleAlert,
  Info,
  Wrench,
  Clock,
  Check,
  CheckCircle2,
  PauseCircle,
  ArrowRight,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Filter,
  Layers,
  GitBranch,
  TrendingUp,
  TrendingDown,
  Minus,
  Gauge,
  Activity,
} from 'lucide-react';

/**
 * Icon Map - Maps semantic names to Lucide icon components
 * Provides a single source of truth for icon usage throughout the app
 */
export const iconMap = {
  // Water/Fluid icons
  greywater: Droplet,
  floodLevel: Waves,
  recharge: Droplet,
  waterflow: Droplet,

  // Navigation/Dashboard icons
  overview: BarChart3,
  treatment: Zap,
  flood: Waves,
  overflow: AlertTriangle,
  threeR: Recycle,
  alerts: Bell,
  system: Wrench,

  // Status/Alert icons
  warning: AlertTriangle,
  critical: CircleAlert,
  info: AlertCircle,
  infoAlt: Info,

  // Additional icons for KPI cards and other uses
  reuse: Recycle,

  // Enhanced system icons
  clock: Clock,
  check: Check,
  checkCircle: CheckCircle2,
  pauseCircle: PauseCircle,
  pause: PauseCircle,
  arrowRight: ArrowRight,
  shield: Shield,
  shieldCheck: ShieldCheck,
  shieldAlert: ShieldAlert,
  filter: Filter,
  layers: Layers,
  gitBranch: GitBranch,
  trendingUp: TrendingUp,
  trendingDown: TrendingDown,
  minus: Minus,
  gauge: Gauge,
  activity: Activity,
  zap: Zap,
};

/**
 * Icon component wrapper for consistent sizing and styling
 * @param {string} iconName - The semantic name of the icon from iconMap
 * @param {number} size - Icon size in pixels (default: 20)
 * @param {string} color - CSS color value (default: 'currentColor')
 * @param {object} className - Additional CSS classes
 * @returns {JSX.Element} Lucide icon component with styling applied
 */
export const Icon = ({ 
  name, 
  size = 20, 
  color = 'currentColor', 
  className = '',
  strokeWidth = 2,
  ...props 
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

/**
 * Export all individual icons for direct usage when needed
 */
export {
  Droplet,
  Waves,
  BarChart3,
  Zap,
  AlertTriangle,
  AlertCircle,
  Recycle,
  Bell,
  CircleAlert,
  Info,
  Wrench,
  Clock,
  Check,
  CheckCircle2,
  PauseCircle,
  ArrowRight,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Filter,
  Layers,
  GitBranch,
  TrendingUp,
  TrendingDown,
  Minus,
  Gauge,
  Activity,
};
