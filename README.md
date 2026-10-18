# HYDROVASmart Dashboard - Frontend Prototype

A professional, interactive dashboard prototype for the **HYDROVASmart Greywater Management & Flood Resilience System**. This is a frontend-only demonstration prototype built with React and Vite, using mock/sample data to showcase system capabilities.

## 🎯 Project Overview

The HYDROVA dashboard provides a comprehensive interface for monitoring:

- **Greywater Collection & Treatment** - Track water flowing through the system
- **Water Reuse & Recharge** - Monitor treated water going back to use or groundwater
- **Flood Resilience** - Real-time flood risk assessment and bypass activation
- **Overflow Management** - Multi-tier overflow protection system visualization
- **3R Impact Metrics** - Environmental impact tracking (Reduce, Reuse, Recharge)
- **System Alerts & Activity** - Real-time notifications and activity logging

## ✨ Features

### Dashboard Sections

1. **Overview Dashboard** - Main KPI display with flood mode toggle
2. **Water Flow Monitoring** - 24-hour flow trends and analysis
3. **Treatment System** - Treatment stage monitoring and capacity tracking
4. **Flood Resilience** - Flood risk, water levels, and drain capacity
5. **Overflow Management** - Multi-path overflow routing visualization
6. **3R Impact** - Environmental impact and sustainability metrics
7. **Alerts** - System notifications and event tracking

### Interactive Elements

- **Mode Toggle** (Overview only) - Switch between Normal and Flood modes
- **Sidebar Navigation** - Navigate between all dashboard sections
- **Real-time Clock** - Current date/time display (updates every 60 seconds)
- **Responsive Alerts** - Visual highlighting during flood events
- **Status Indicators** - Color-coded status (Green=Safe, Amber=Warning, Red=Critical)

### Visual Design

- **Color Scheme**:
  - Primary: Charcoal/Deep Slate (#1a1f2e, #242d3d)
  - Cards: Soft Gray (#2d3748)
  - Accents: Muted Teal (#4a9b8e), Muted Green (#6ba374)
  - Status: Green (#52a674), Amber (#d4a574), Red (#c85a54)

- **Typography**: Clean sans-serif with professional hierarchy
- **Layout**: Sidebar + Header + Content grid system
- **Animations**: Subtle transitions, no excessive motion

## 📊 Mock Data

All data is hardcoded and self-contained - **no backend, APIs, or real sensors**. Includes:

- **KPI Metrics**: Greywater collected, treated, reused, recharged, efficiency, overflow risk
- **Treatment Stages**: Pre-Filter, Biofilter, Treatment Chamber, Soak Pit, Secondary Leach Field, Bypass Drain
- **Flood Metrics**: Water level, flood risk, drain capacity, bypass status
- **Flow Chart**: 24-hour trend data with hourly intervals
- **Alerts**: System notifications with severity levels
- **Activity Log**: Recent system events and operations
- **3R Performance**: Reduce, Reuse, Recharge percentages

### Flood Mode Behavior

When **Flood Mode** is activated:
- Water Level increases to 4.8 m
- Flood Risk changes to HIGH
- Bypass Status becomes ACTIVE
- Overflow Risk changes to HIGH
- Treatment Efficiency decreases
- Visual alerts appear throughout the dashboard
- Secondary/bypass paths activate

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The dashboard will open automatically at `http://localhost:5173/`

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Sidebar.jsx      # Left navigation
│   ├── Header.jsx       # Top header with time & mode toggle
│   ├── KPICard.jsx      # Key performance indicator card
│   ├── FlowChart.jsx    # Recharts line chart for flow data
│   ├── StatusPanel.jsx  # Status items display
│   ├── AlertsSection.jsx # System alerts
│   ├── ActivityLog.jsx  # Recent activity list
│   └── ProgressBar.jsx  # Progress indicator component
│
├── pages/               # Page components for each section
│   ├── Overview.jsx     # Main dashboard with KPIs & flood alert
│   ├── WaterFlow.jsx    # Water flow analysis
│   ├── Treatment.jsx    # Treatment system monitoring
│   ├── FloodResilience.jsx # Flood risk & resilience
│   ├── OverflowManagement.jsx # Overflow routing visualization
│   ├── ThreeRImpact.jsx # Environmental impact metrics
│   └── AlertsPage.jsx   # Alerts & activity
│
├── mockData.js          # All mock/sample data
├── App.jsx              # Main app component with routing
├── App.css              # App layout styles
├── index.css            # Global styles & CSS variables
└── main.jsx             # React entry point

public/
└── index.html           # HTML template

package.json             # Dependencies & scripts
vite.config.js          # Vite configuration
```

## 🎨 Design Features

### Color System

CSS variables are defined for consistent theming:

```css
--bg-primary: #1a1f2e        /* Main background */
--bg-secondary: #242d3d      /* Sidebar background */
--bg-card: #2d3748           /* Card background */
--accent-teal: #4a9b8e       /* Primary accent */
--accent-green: #6ba374      /* Secondary accent */
--status-safe: #52a674       /* Green status */
--status-warning: #d4a574    /* Amber status */
--status-critical: #c85a54   /* Red status */
--text-primary: #ffffff      /* Main text */
--text-secondary: #d1d5db    /* Secondary text */
--text-muted: #9ca3af        /* Muted text */
```

### Layout System

- **Sidebar**: Fixed 280px width, left side
- **Header**: Fixed 70px height, spans remaining width
- **Content**: Main area with scrolling, sidebar + header offset
- **Grid**: Responsive CSS Grid for card layouts

### Responsive Breakpoints

- Desktop: Full layout with all features
- Tablet (≤1200px): Adjusted card sizes, collapsed layout
- Mobile (≤768px): Sidebar conversion, stacked grid

## 🔄 Data Flow

```
Mock Data (mockData.js)
    ↓
App State (isFloodMode)
    ↓
Page Components
    ↓
Reusable Components (KPICard, StatusPanel, etc.)
    ↓
Visual Rendering
```

## 📝 Component Documentation

### KPICard
Displays a metric with icon, label, and value.
- Props: `label`, `value`, `unit`, `icon`, `color`
- Color classes: `safe`, `critical`, `warning`, `default`

### StatusPanel
Shows a list of status items with labels and values.
- Props: `title`, `items` (array), `isFloodMode`
- Items format: `{ label: string, value: string }`

### FlowChart
Renders a line chart using Recharts.
- Props: `data` (array), `title`, `isFloodMode`
- Data format: `{ time: string, flow: number }`

### ProgressBar
Shows a progress bar with percentage and icon.
- Props: `label`, `value`, `unit`, `icon`, `description`

### AlertsSection
Displays system alerts with severity levels.
- Props: `alerts` (array), `isFloodMode`
- Alert format: `{ id, timestamp, message, severity }`

### Sidebar
Left navigation component.
- Props: `activeSection`, `onSectionChange`
- Sections: Overview, Water Flow, Treatment, Flood Resilience, Overflow Management, 3R Impact, Alerts

### Header
Top header with title, time, and mode toggle.
- Props: `section`, `onModeChange`, `currentMode`
- Features: Auto-updating clock, mode controls

## 🎯 Usage Examples

### Viewing Different Sections

Click on sidebar items to navigate between dashboard sections.

### Enabling Flood Mode

On the **Overview** page, click the **⚠️ Flood Mode** button to simulate a flood event. The dashboard will:
- Show a red alert banner
- Update all metrics to flood values
- Highlight the bypass drain as active
- Display increased water levels and flood risk

### Understanding Status Colors

- **Green (✓)**: System operating normally
- **Amber (⚠)**: Warning state, monitoring needed
- **Red (!)**: Critical state, immediate action may be required
- **Gray (⏸)**: Standby/inactive status

## 📦 Dependencies

- **React 18.2.0** - UI framework
- **React DOM 18.2.0** - React rendering
- **Recharts 2.10.0** - Chart visualization
- **Vite 4.4.0** - Build tool
- **@vitejs/plugin-react** - React plugin for Vite

## 🔧 Customization

### Adding New Sections

1. Create a new page component in `src/pages/`
2. Add corresponding CSS file
3. Update `App.jsx` to import and render the new page
4. Add sidebar item in `Sidebar.jsx`

### Changing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent-teal: #4a9b8e;      /* Change primary accent */
  --status-safe: #52a674;       /* Change success color */
  /* etc. */
}
```

### Updating Mock Data

Edit `src/mockData.js` to change values, thresholds, or add new data sources.

## 📝 Notes

- This is a **frontend prototype only** - no backend services
- All data is **hardcoded and static** - suitable for demos and presentations
- **No real sensors or hardware integration**
- **No authentication or user accounts**
- **No persistent data storage**
- Built for **demonstration and mockup purposes**

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Recharts Documentation](https://recharts.org/en-US)
- [CSS Variables Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📄 License

This is a prototype demonstration project created for the HYDROVA system.

## 🤝 Future Enhancements

Potential additions (not in current prototype):
- Real API integration for live data
- WebSocket connections for real-time updates
- User authentication and role-based dashboards
- Data export functionality (PDF, CSV)
- Custom date range filtering
- System configuration panels
- Maintenance scheduling
- Historical data analytics
- Mobile app version
- Internationalization (i18n)

---

**HYDROVASmart Dashboard** - Professional greywater management visualization prototype
