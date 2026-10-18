# Task 1: Install Lucide Icons and Create Icon System
parent:: null
status:: not_started

Install lucide-react package and create a centralized icon mapping system for consistent icon usage.

## Subtasks
- [x] npm install lucide-react
- [x] Create src/utils/iconMap.js with all icon mappings
- [x] Import and export all required Lucide icons
- [x] Test that all icons are accessible from the map
- [x] Build succeeds with no errors

---

# Task 2: Replace Sidebar Navigation Icons
parent:: null
status:: not_started
dependencies:: Task 1

Replace emoji icons in sidebar with Lucide icons and update branding text.

## Subtasks
- [x] Update Sidebar.jsx to import Lucide icons from iconMap
- [x] Replace Overview 📊 with BarChart3
- [x] Replace Water Flow 💧 with Droplet
- [x] Replace Treatment 🔄 with Zap
- [x] Replace Flood Resilience 🌊 with Waves
- [x] Replace Overflow Management ⚠️ with AlertTriangle
- [x] Replace 3R Impact ♻️ with Recycle
- [x] Replace Alerts 🔔 with Bell
- [x] Update logo: replace 💧 with Droplet icon
- [~] Change branding text from "HYDROVASmart" to "HYDROVA"
- [~] Add subtitle "Smart Greywater Management"
- [x] Verify all navigation items still work
- [x] Verify sidebar styling unchanged
- [x] Test responsive behavior

---

# Task 3: Replace KPI Card Icons
parent:: null
status:: not_started
dependencies:: Task 1

Replace emoji icons in all KPI cards across pages with Lucide icons.

## Subtasks
- [~] Update KPICard.jsx to render Lucide icons
- [~] Update Overview.jsx: replace 💧 with Droplet for "Greywater Collected"
- [~] Update Overview.jsx: replace 🌊 with Waves for flood metrics
- [~] Update Overview.jsx: replace ⚠️ with AlertTriangle for "Overflow Risk"
- [~] Update FloodResilience.jsx: replace 🌊 with Waves for water level
- [~] Update Treatment.jsx: replace 💧 with Droplet in flow diagram
- [~] Update OverflowManagement.jsx: replace 💧 with Droplet in flow paths
- [~] Set icon sizing to 32px consistently
- [~] Apply proper semantic colors (blue for water, orange for warning, etc.)
- [~] Verify no layout shifts
- [~] Verify all card values and labels display correctly

---

# Task 4: Replace Alert Severity Icons
parent:: null
status:: not_started
dependencies:: Task 1

Replace emoji alert severity indicators with Lucide icons.

## Subtasks
- [~] Update AlertsSection.jsx to use Lucide icons
- [~] Replace 🔴 critical icon with appropriate Lucide icon
- [~] Replace 🟡 warning icon with appropriate Lucide icon
- [~] Replace info icon with appropriate Lucide icon (or use green circle)
- [~] Replace 🌊 in flood alert header with Waves icon
- [~] Set icon sizing to 16px for severity indicators
- [~] Apply proper semantic colors (red for critical, orange for warning, green for info)
- [~] Verify alert list display unchanged
- [~] Verify reverse chronological order maintained
- [~] Verify all styling applied correctly

---

# Task 5: Replace Activity Log Icons
parent:: null
status:: not_started
dependencies:: Task 1

Replace emoji activity type icons in ActivityLog component.

## Subtasks
- [~] Update ActivityLog.jsx to use Lucide icons
- [~] Create activity type icon mapping
- [~] Replace ⚙️ system icon with Wrench or Settings
- [~] Replace 💧 recharge icon with Droplet
- [~] Set icon sizing to 20px
- [~] Apply proper semantic colors
- [~] Verify activity list display unchanged
- [ ] Verify reverse chronological order maintained

---

# Task 6: Replace Header and Flood Alert Icons
parent:: null
status:: not_started
dependencies:: Task 1

Replace emoji icons in Header, flood alerts, and other UI elements.

## Subtasks
- [~] Update Header.jsx: replace ⚠️ with AlertTriangle in flood mode button
- [~] Update Overview.jsx: replace ⚠️ with AlertTriangle in flood alert banner
- [~] Update FloodResilience.jsx: replace 🌊 with Waves in flood mode alert
- [~] Update OverflowManagement.jsx: replace ⚠️ with AlertTriangle in overflow alert
- [~] Update Treatment.jsx: replace 💧 with Droplet in flow diagram step icon
- [~] Verify all alerts display with correct icons
- [~] Verify no styling broken
- [~] Verify all alert functionality preserved

---

# Task 7: Verify No Emojis Remain
parent:: null
status:: not_started
dependencies:: Task 2, Task 3, Task 4, Task 5, Task 6

Perform comprehensive verification that all emojis have been removed.

## Subtasks
- [~] Search for 💧 emoji returns no results
- [~] Search for 🌊 emoji returns no results
- [~] Search for ⚠️ emoji returns no results
- [~] Search for 🔴 emoji returns no results
- [~] Search for 🟡 emoji returns no results
- [~] Search for 📊 emoji returns no results
- [~] Search for 🔄 emoji returns no results
- [~] Search for ♻️ emoji returns no results
- [~] Search for 🔔 emoji returns no results
- [~] Search for ⚙️ emoji returns no results
- [~] Build succeeds with no emoji-related errors
- [~] No console warnings about emojis

---

# Task 8: Improve Branding and Header Styling
parent:: null
status:: not_started
dependencies:: Task 2

Update branding text and improve header styling.

## Subtasks
- [~] Verify branding changed to "HYDROVA"
- [~] Verify subtitle "Smart Greywater Management" displays
- [~] Verify logo uses Droplet icon
- [~] Improve header styling for professionalism
- [~] Verify consistent spacing and alignment
- [~] Verify responsive behavior maintained
- [~] Test on different screen sizes

---

# Task 9: Improve Typography Hierarchy
parent:: null
status:: not_started
dependencies:: Task 2, Task 3, Task 4, Task 5, Task 6

Establish clear typography hierarchy with proper sizing.

## Subtasks
- [~] Update page titles to 28px, bold, dark blue
- [~] Update section titles to 20px, bold, dark blue
- [~] Update KPI labels to 14px, medium, medium blue
- [~] Update KPI values to 32px, bold, dark blue
- [~] Update body text to 14px, regular, medium blue
- [~] Update supporting text to 12px, regular, light blue
- [~] Ensure consistent font family throughout
- [~] Verify improved readability
- [~] Verify visual hierarchy clear
- [ ] Test on different screen sizes

---

# Task 10: Apply Light Blue Theme
parent:: null
status:: not_started
dependencies:: Task 2, Task 3, Task 4, Task 5, Task 6

Transform dashboard theme from dark to light blue.

## Subtasks
- [~] Change main background to light blue (#e8f4f8 or similar)
- [~] Change card backgrounds to white or very light blue (#f0f8fb)
- [~] Update text colors: primary to dark blue (#1e3a5f), secondary to medium blue (#4a6fa5)
- [~] Update all borders to light blue (#d1e5ed or similar)
- [~] Update sidebar background to light/white with light blue accents
- [~] Update header background to light blue theme
- [~] Adjust chart colors for light background
- [~] Verify semantic colors preserved (green=normal, orange=warning, red=critical)
- [~] Check contrast and readability
- [~] Verify consistent light theme across all pages
- [ ] Test on different screen sizes

---

# Task 11: Polish Card and Visual Design
parent:: null
status:: not_started
dependencies:: Task 10

Refine card styling, spacing, and visual effects for professional appearance.

## Subtasks
- [~] Apply 8px border radius consistently to all cards
- [~] Apply subtle 1px light blue border (#d1e5ed or similar)
- [~] Apply light shadow (0 1px 3px rgba(0,0,0,0.05))
- [~] Apply consistent 16px padding to all cards
- [~] Set 16px spacing between sections
- [~] Set 12px grid gaps
- [~] Ensure generous whitespace in layout
- [~] Remove unnecessary visual effects
- [~] Remove excessive gradients
- [~] Verify color system consistent
- [~] Verify all components properly spaced
- [ ] Test responsive behavior

---

# Task 12: Final Verification and Polish
parent:: null
status:: not_started
dependencies:: Task 7, Task 8, Task 9, Task 10, Task 11

Perform final verification of complete visual upgrade.

## Subtasks
- [~] Test Overview page - all content displays, icons correct, light blue theme
- [~] Test Water Flow page - chart renders, theme applied
- [~] Test Treatment page - all sections display, flow diagram updated
- [~] Test Flood Resilience page - all metrics display, theme applied
- [~] Test Overflow Management page - all sections display correctly
- [~] Test 3R Impact page - all metrics display, theme applied
- [~] Test Alerts page - all alerts display with correct icons
- [~] Verify all navigation items working
- [~] Verify all KPI metrics display correctly
- [~] Verify all charts render with adjusted colors
- [~] Verify all text readable on light background
- [~] Check browser console for errors
- [~] Verify no broken styling
- [~] Verify no layout regressions
- [~] Verify all original functionality preserved
- [~] Verify professional appearance achieved
- [~] Run npm build successfully
- [~] Test responsive design on mobile/tablet
- [~] Verify light blue theme consistent throughout
