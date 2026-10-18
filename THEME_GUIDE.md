# Light Blue Theme Guide

## Color Palette

### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Light Blue Background | `#e8f4f8` | rgb(232, 244, 248) | Main page background |
| Very Light Blue | `#f0f8fb` | rgb(240, 248, 251) | Sidebar background |
| White | `#ffffff` | rgb(255, 255, 255) | Card backgrounds |

### Text Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Dark Blue (Primary) | `#1e3a5f` | rgb(30, 58, 95) | Page titles, primary text |
| Medium Blue (Secondary) | `#4a6fa5` | rgb(74, 111, 165) | Body text, labels |
| Muted Gray | `#6b7280` | rgb(107, 114, 128) | Supporting text |

### Semantic Status Colors
| Status | Hex | RGB | Icon Color |
|--------|-----|-----|-----------|
| Normal/Safe | `#10b981` | rgb(16, 185, 129) | Green |
| Warning | `#f59e0b` | rgb(245, 158, 11) | Orange |
| Critical | `#ef4444` | rgb(239, 68, 68) | Red |
| Neutral/Standby | `#6b7280` | rgb(107, 114, 128) | Gray |

### Accent Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Teal Accent | `#0891b2` | rgb(8, 145, 178) | Navigation highlights |
| Blue Accent | `#3b82f6` | rgb(59, 130, 246) | Primary accent |
| Light Blue Border | `#d1e5ed` | rgb(209, 229, 237) | Card and section borders |
| Dark Blue Border | `#a5c5d7` | rgb(165, 197, 215) | Darker border accents |

## Icon System

### Icons & Their Meanings

#### Water/Fluid Icons
- **Droplet** (💧→): Greywater collection, water treatment, recharge
- **Waves** (🌊→): Flood levels, water resilience, flood monitoring

#### Navigation Icons
- **BarChart3** (📊→): Overview, analytics, dashboard
- **Zap** (🔄→): Treatment process, system operations
- **Recycle** (♻️→): 3R Impact, recycling, reuse
- **Bell** (🔔→): Alerts, notifications
- **Wrench** (⚙️→): System operations, maintenance

#### Status/Alert Icons
- **AlertTriangle** (⚠️→): Warnings, system alerts
- **CircleAlert** (🔴→): Critical alerts (red)
- **AlertCircle** (🟡→): Warning alerts (orange)
- **Info** (ℹ️→): Information alerts (green)

### Icon Sizing

| Context | Size | Used In |
|---------|------|---------|
| KPI Cards | 32px | KPI metrics display |
| Navigation | 20px | Sidebar nav items |
| Alert Severity | 16px | Alert icons |
| Activity Log | 20px | Activity type icons |
| Flow Diagram | 24px | Treatment flow steps |
| Logo | 24px | Sidebar branding |

### Icon Styling

- **Stroke Width**: 2px (consistent across all icons)
- **Style**: Outline (not filled)
- **Colors**: Semantic (status colors where applicable)
- **Rendering**: SVG via Lucide React

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Sizing & Weight Hierarchy

| Element | Size | Weight | Color | Example |
|---------|------|--------|-------|---------|
| Page Title | 28px | Bold (700) | Dark Blue (#1e3a5f) | "Dashboard Overview" |
| Section Title | 20px | Bold (700) | Dark Blue (#1e3a5f) | "Treatment Stages" |
| KPI Value | 32px | Bold (700) | Dark Blue (#1e3a5f) | "2,840 L/day" |
| KPI Label | 14px | Medium (500) | Medium Blue (#4a6fa5) | "Greywater Collected" |
| Body Text | 14px | Regular (400) | Medium Blue (#4a6fa5) | Description text |
| Supporting Text | 12px | Regular (400) | Muted Gray (#6b7280) | Helper text |
| Small Label | 11px | Medium (500) | Muted Gray (#6b7280) | Badge labels |

## Card Design

### Card Styling
```css
border-radius: 8px;
background-color: #ffffff (or #f0f8fb for sidebar);
border: 1px solid #d1e5ed;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
padding: 16px;
```

### Spacing
- **Between Sections**: 16px
- **Card Padding**: 16px
- **Grid Gaps**: 12px
- **Component Margins**: 16px

## Component Examples

### KPI Card
- Background: White (#ffffff)
- Border: 1px light blue (#d1e5ed)
- Icon: 32px, semantic color
- Title: 14px medium blue
- Value: 32px bold dark blue
- Unit: 14px medium blue (smaller text)

### Alert Severity Badge
- Icon Size: 16px
- Critical: CircleAlert icon, red (#ef4444)
- Warning: AlertCircle icon, orange (#f59e0b)
- Info: Info icon, green (#10b981)

### Navigation Item
- Icon Size: 20px
- Text Size: 14px medium weight
- Normal Color: Medium blue (#4a6fa5)
- Hover: Background tint, highlight border
- Active: Teal highlight (#0891b2) with darker background

### Status Indicator
- Uses semantic colors:
  - Green (#10b981) for normal/active
  - Gray (#6b7280) for standby/neutral
  - Orange (#f59e0b) for warning
  - Red (#ef4444) for critical

## CSS Variables

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  /* Background */
  --bg-primary: #e8f4f8;
  --bg-secondary: #f0f8fb;
  --bg-card: #ffffff;
  
  /* Accents */
  --accent-teal: #0891b2;
  --accent-green: #10b981;
  --accent-amber: #f59e0b;
  
  /* Status */
  --status-safe: #10b981;
  --status-warning: #f59e0b;
  --status-critical: #ef4444;
  --status-neutral: #6b7280;
  
  /* Text */
  --text-primary: #1e3a5f;
  --text-secondary: #4a6fa5;
  --text-muted: #6b7280;
  
  /* Borders */
  --border-light: #d1e5ed;
  --border-dark: #a5c5d7;
  
  /* Other */
  --blue-accent: #3b82f6;
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

## Usage Examples

### Using Lucide Icons
```jsx
import { Icon } from '../utils/iconMap'

// Semantic usage
<Icon name="greywater" size={32} color="rgb(8, 145, 178)" />

// Direct usage
import { Droplet } from '../utils/iconMap'
<Droplet size={32} color="rgb(8, 145, 178)" />
```

### Applying Colors
```css
/* Green status */
color: var(--status-safe);

/* Text hierarchy */
color: var(--text-primary);      /* Dark blue */
color: var(--text-secondary);    /* Medium blue */
color: var(--text-muted);        /* Gray */

/* Borders */
border-color: var(--border-light);  /* Light blue */

/* Backgrounds */
background-color: var(--bg-primary);  /* Light blue */
```

## Branding

### Logo
- Icon: Droplet (Lucide)
- Icon Size: 24px
- Icon Color: Inherit from text color
- Text: "HYDROVA"
- Font: Same as body, bold
- Subtitle: "Smart Greywater Management"
- Subtitle Font: 11px, medium weight, gray

### Color Usage
- Primary: Dark Blue (#1e3a5f)
- Accent: Teal (#0891b2)
- Background: Light Blue (#e8f4f8)

## Responsive Design

### Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

### Adjustments
- Font sizes scale proportionally
- Spacing reduces on mobile
- Cards stack on mobile
- Navigation adapts for mobile

## Consistency Guidelines

1. **Use CSS Variables** for all colors
2. **Use Icon Component** from iconMap for all icons
3. **Maintain Spacing** of 16px sections, 12px grids
4. **Follow Typography** hierarchy strictly
5. **Use Semantic Colors** for status indicators
6. **Ensure Contrast** (text on background, icons on backgrounds)
7. **Keep Shadows Light** and subtle
8. **Avoid Gradients** (use flat colors only)

## Accessibility

- **Contrast Ratio**: All text meets WCAG AA standards
- **Icon Usage**: Icons accompanied by text labels
- **Color Not Only Signal**: Status indicated by color + shape + text
- **Focus States**: Navigation items have clear focus states
- **Font Size**: Minimum 12px for body text

---

This theme creates a professional, modern, and accessible interface suitable for a Smart India Hackathon environmental technology project.
