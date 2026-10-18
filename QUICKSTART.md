# HYDROVASmart Dashboard - Quick Start Guide

## 🚀 Getting Started in 2 Minutes

### 1. Start the Dashboard

The dashboard is already running on: **http://localhost:5173/**

If it's not running, execute:
```bash
npm run dev
```

### 2. Explore the Dashboard

**The dashboard has 7 main sections:**

| Section | Icon | What You'll See |
|---------|------|-----------------|
| **Overview** | 📊 | KPI cards, flow chart, flood alert, 3R metrics |
| **Water Flow** | 💧 | 24-hour flow trends and analysis |
| **Treatment** | 🔄 | Treatment process, stage monitoring, capacity |
| **Flood Resilience** | 🌊 | Flood risk, water levels, drain capacity |
| **Overflow Management** | ⚠️ | Overflow routing, multi-path visualization |
| **3R Impact** | ♻️ | Environmental impact, sustainability metrics |
| **Alerts** | 🔔 | System alerts and activity log |

### 3. Try Flood Mode

1. Go to **Overview** section
2. Click the **⚠️ Flood Mode** button in the header
3. Observe:
   - Red alert banner appears
   - Water level increases to 4.8m
   - Flood risk changes to HIGH
   - Treatment efficiency drops
   - Bypass drain activates
   - Colors shift to critical state

4. Click **✓ Normal Mode** to restore normal values

---

## 🎨 Understanding the Dashboard

### Color Codes

| Color | Meaning | Status |
|-------|---------|--------|
| 🟢 Green | Safe & Operating | Normal, Active |
| 🟡 Amber | Warning | Caution, High capacity |
| 🔴 Red | Critical | Alert, Bypass active |
| ⚪ Gray | Standby | Inactive, not in use |

### Key Information

**6 KPI Cards Show:**
- 💧 Greywater Collected: **2,840 L/day**
- 🔄 Water Treated: **2,460 L/day**
- ♻️ Water Reused: **1,320 L/day**
- 🌍 Groundwater Recharged: **890 L/day**
- 📊 Treatment Efficiency: **86.6%**
- ⚠️ Overflow Risk: **Low**

**Treatment Stages:**
- Pre-Filter (Normal) ✓
- Biofilter (Active) ✓
- Treatment Chamber (Active) ✓
- Soak Pit (78% full) ⚠️
- Secondary Leach Field (Standby)
- Bypass Drain (Standby)

**Flood Metrics:**
- Water Level: 0.42 m
- Flood Risk: Low
- Drain Capacity: 78% used
- Bypass Status: Standby
- Treatment Unit: Normal

---

## 📱 UI Walkthrough

### Left Sidebar
- Click any section to navigate
- Shows active page with highlight
- System status indicator at bottom
- HYDROVASmart branding at top

### Top Header
- Shows current page title
- Displays real-time clock (updates every 60 seconds)
- **Flood Mode / Normal Mode toggle** (visible on Overview only)

### Main Content Area
- Scrollable page content
- Responsive grid layout
- Professional charcoal/slate theme

---

## 🎯 What to Demonstrate

### Demo Scenario 1: Normal Operation
1. Start on Overview page
2. Show KPI metrics
3. Explain flow chart trend
4. Point out treatment stages
5. Highlight 3R performance metrics

### Demo Scenario 2: Flood Response
1. Click **⚠️ Flood Mode** button
2. Notice the red alert banner
3. Navigate to Flood Resilience page
4. Show how water level increased
5. Go to Overflow Management page
6. Highlight active bypass paths
7. Return to Overview, toggle back to Normal

### Demo Scenario 3: System Exploration
1. Navigate through each section
2. Point out different metrics
3. Explain treatment process flow
4. Show 3R impact calculations
5. Review alerts and activities

---

## 💡 Key Features

✅ **Real-time Clock** - Updates every 60 seconds
✅ **Responsive Design** - Works on desktop, tablet, mobile
✅ **Flood Mode** - Simulates flood event with all impacts
✅ **Color-Coded Status** - Green/Amber/Red indicators
✅ **Flow Chart** - Visual trend analysis
✅ **Progress Bars** - Capacity and performance metrics
✅ **Status Panels** - Quick info display
✅ **Alerts System** - Priority-based notifications

---

## 🔧 Customization Tips

### Change Colors

Edit `src/index.css`:
```css
:root {
  --accent-teal: #4a9b8e;      /* Change to your color */
  --status-safe: #52a674;       /* Safe/green status */
  --status-warning: #d4a574;    /* Warning/amber */
  --status-critical: #c85a54;   /* Critical/red */
}
```

### Update Mock Data

Edit `src/mockData.js`:
```javascript
export const kpiData = {
  normal: {
    collected: 2840,    // Change this value
    treated: 2460,
    // ...
  }
}
```

### Add New Section

1. Create `src/pages/NewPage.jsx`
2. Create `src/pages/NewPage.css`
3. Update `src/App.jsx` (import & add to renderPage)
4. Add to Sidebar items in `src/components/Sidebar.jsx`

---

## 📊 Data Flow

```
Mock Data (hardcoded)
    ↓
App Component (manages mode state)
    ↓
Page Component (Overview, Treatment, etc.)
    ↓
UI Components (KPICard, StatusPanel, Chart, etc.)
    ↓
Visual Display on Screen
```

---

## ✨ Interactive Elements

### Clickable
- **Sidebar items** - Navigate between sections
- **Mode buttons** - Toggle Flood/Normal on Overview
- **Card hover effects** - Visual feedback

### Dynamic
- **Clock** - Updates every 60 seconds
- **Status colors** - Change based on values
- **Alerts** - Display with animations
- **Progress bars** - Show capacity levels

### Responsive
- **Desktop** - Full layout with all features
- **Tablet** - Optimized spacing and sizing
- **Mobile** - Stacked layout, single column

---

## 🎓 Understanding the System

### Water Flow Path (Normal Mode)
```
Greywater → Pre-Filter → Biofilter → Treatment → Reuse/Recharge
Collection     ✓           ✓         Chamber        ↙  ↓  ↖
  ↓            ↓           ↓            ↓          Home  Ground  Irrigation
2,840 L/day  Normal      Active       Active        Water
             Status      Biofilter    Treatment    1,320 L   890 L
```

### Overflow Protection (Flood Mode)
```
High Flow → Primary Path (Soak Pit 95%) → Secondary Path (Leach Field)
                                         ↓
                                    Emergency Bypass (ACTIVE)
                                         ↓
                                    Safe Drainage
```

### 3R Strategy
- **Reduce** (68%): Reduce greywater from total usage
- **Reuse** (46%): Reuse treated water for irrigation
- **Recharge** (31%): Recharge groundwater reserves

---

## 🐛 Troubleshooting

### Dashboard not loading?
- Check: `http://localhost:5173/` in browser
- Make sure: `npm run dev` is running (terminal shows "ready in X ms")

### Colors look wrong?
- Check browser zoom (should be 100%)
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page (F5)

### Data not updating?
- All data is static mock data - refresh to reset
- Flood mode changes are temporary - toggle to restore

### Responsive issues?
- Try browser dev tools (F12)
- Test at different screen sizes
- Check mobile view (Ctrl+Shift+M)

---

## 📞 Support

### Check the Documentation
- **README.md** - Full technical documentation
- **IMPLEMENTATION_SUMMARY.md** - What was built and how
- **This file (QUICKSTART.md)** - Quick reference guide

### Code Files
- `src/App.jsx` - Main routing logic
- `src/components/` - Reusable UI components
- `src/pages/` - Page components for each section
- `src/mockData.js` - All sample data

---

## ✅ Verification Checklist

Before presenting:

- [ ] Dashboard loads without errors
- [ ] All 7 sections are accessible via sidebar
- [ ] KPI cards show correct values
- [ ] Flow chart displays with data
- [ ] Treatment stages show all 6 items
- [ ] Flood metrics display correctly
- [ ] Flood mode toggle works
- [ ] Alert banner appears in flood mode
- [ ] Colors match theme (no light/dark blue)
- [ ] Clock updates periodically
- [ ] No console errors (F12 to check)

---

## 🎉 You're Ready!

The HYDROVASmart Dashboard is ready for demonstration. 

**Start exploring at:** http://localhost:5173/

---

**Tips for Success:**
1. Open on a full-screen display for best presentation
2. Use Flood Mode to showcase system resilience
3. Point out color changes to highlight status
4. Explain the 3R strategy on the Impact page
5. Show responsive design by resizing browser
6. Mention mock data is for demonstration purposes

Enjoy! 🚀
