# Requirements Document

## Introduction

The HYDROVASmart Dashboard is a frontend prototype for visualizing greywater management and flood resilience data. The dashboard provides real-time monitoring of greywater collection, treatment processes, reuse metrics, groundwater recharge, and flood risk assessment. It uses mock data to demonstrate the system's monitoring capabilities without backend integration or hardware connectivity.

## Glossary

- **Dashboard**: The main web application interface displaying system metrics and status
- **Greywater**: Wastewater from domestic activities (sinks, showers, laundry) excluding toilet water
- **Treatment_System**: The multi-stage filtration and processing system for greywater
- **Flood_Resilience_Module**: The subsystem monitoring water levels and flood risk
- **KPI_Card**: A visual component displaying a key performance indicator with value and label
- **Status_Indicator**: A visual element showing operational state (Normal, Active, Standby, Warning, Critical)
- **3R_Performance**: Metrics for Reduce, Reuse, and Recharge water management goals
- **Sidebar_Navigation**: The left-side menu for navigating between dashboard sections
- **Treatment_Stage**: A specific component in the treatment process (Pre-Filter, Biofilter, Treatment Chamber, Soak Pit, Secondary Leach Field, Bypass Drain)
- **Mock_Data**: Sample data hardcoded for prototype demonstration purposes
- **Flow_Chart**: A time-series visualization showing water flow over time
- **Alert**: A notification of system events, warnings, or status changes

## Requirements

### Requirement 1: Display Primary KPI Metrics

**User Story:** As a system operator, I want to view key performance indicators at a glance, so that I can quickly assess overall system performance.

#### Acceptance Criteria

1. THE Dashboard SHALL display six KPI cards in the overview section
2. THE KPI_Card for "Greywater Collected" SHALL display "2,840 L/day"
3. THE KPI_Card for "Water Treated" SHALL display "2,460 L/day"
4. THE KPI_Card for "Water Reused" SHALL display "1,320 L/day"
5. THE KPI_Card for "Groundwater Recharged" SHALL display "890 L/day"
6. THE KPI_Card for "Treatment Efficiency" SHALL display "86.6%"
7. THE KPI_Card for "Overflow Risk" SHALL display "Low" with appropriate visual styling
8. FOR ALL KPI cards, THE Dashboard SHALL display the metric label and value with clear typography

### Requirement 2: Provide Navigation Interface

**User Story:** As a system operator, I want to navigate between different dashboard sections, so that I can access detailed information for specific subsystems.

#### Acceptance Criteria

1. THE Dashboard SHALL display a left-aligned Sidebar_Navigation component
2. THE Sidebar_Navigation SHALL contain seven navigation items: "Overview", "Water Flow", "Treatment", "Flood Resilience", "Overflow Management", "3R Impact", and "Alerts"
3. WHEN a navigation item is clicked, THE Dashboard SHALL highlight the active section
4. THE Sidebar_Navigation SHALL remain visible across all dashboard sections
5. THE Dashboard SHALL display the HYDROVASmart branding in the Sidebar_Navigation

### Requirement 3: Visualize Greywater Flow Data

**User Story:** As a system operator, I want to see greywater flow trends over time, so that I can identify patterns and anomalies.

#### Acceptance Criteria

1. THE Dashboard SHALL display a Flow_Chart showing greywater volume over time
2. THE Flow_Chart SHALL use Mock_Data representing at least 24 data points
3. THE Flow_Chart SHALL display time on the x-axis and volume (liters) on the y-axis
4. THE Flow_Chart SHALL use muted teal or green accent colors for the data line
5. THE Flow_Chart SHALL include axis labels and a chart title

### Requirement 4: Display Treatment System Status

**User Story:** As a system operator, I want to monitor the status of each treatment stage, so that I can identify operational issues.

#### Acceptance Criteria

1. THE Dashboard SHALL display status for six Treatment_Stages
2. THE Status_Indicator for "Pre-Filter" SHALL display "Normal"
3. THE Status_Indicator for "Biofilter" SHALL display "Active"
4. THE Status_Indicator for "Treatment Chamber" SHALL display "Active"
5. THE Status_Indicator for "Soak Pit" SHALL display "78%" indicating fill level
6. THE Status_Indicator for "Secondary Leach Field" SHALL display "Standby"
7. THE Status_Indicator for "Bypass Drain" SHALL display "Standby"
8. WHEN a Treatment_Stage status is "Normal" or "Active", THE Status_Indicator SHALL use green color styling
9. WHEN a Treatment_Stage status is "Standby", THE Status_Indicator SHALL use neutral gray color styling
10. WHEN a Treatment_Stage status indicates warning level, THE Status_Indicator SHALL use amber color styling
11. WHEN a Treatment_Stage status indicates critical level, THE Status_Indicator SHALL use red color styling

### Requirement 5: Display Flood Resilience Metrics

**User Story:** As a system operator, I want to monitor flood risk indicators, so that I can assess drainage capacity and potential overflow conditions.

#### Acceptance Criteria

1. THE Dashboard SHALL display a Flood_Resilience_Module section
2. THE Flood_Resilience_Module SHALL display "Water Level" metric as "0.42 m"
3. THE Flood_Resilience_Module SHALL display "Flood Risk" status as "Low"
4. THE Flood_Resilience_Module SHALL display "Drain Capacity" metric as "78%"
5. THE Flood_Resilience_Module SHALL display "Bypass Status" as "Standby"
6. THE Flood_Resilience_Module SHALL display "Treatment Unit" status as "Normal"
7. WHEN "Flood Risk" is "Low", THE Status_Indicator SHALL use green color styling
8. WHEN "Flood Risk" is "Medium", THE Status_Indicator SHALL use amber color styling
9. WHEN "Flood Risk" is "High", THE Status_Indicator SHALL use red color styling

### Requirement 6: Display System Alerts

**User Story:** As a system operator, I want to see recent alerts and system events, so that I can stay informed of important status changes.

#### Acceptance Criteria

1. THE Dashboard SHALL display an alerts section showing recent system notifications
2. THE Dashboard SHALL display at least three Mock_Data Alert entries
3. FOR EACH Alert, THE Dashboard SHALL display a timestamp, message, and severity level
4. WHEN an Alert has "info" severity, THE Dashboard SHALL use neutral color styling
5. WHEN an Alert has "warning" severity, THE Dashboard SHALL use amber color styling
6. WHEN an Alert has "critical" severity, THE Dashboard SHALL use red color styling
7. THE Dashboard SHALL display alerts in reverse chronological order (newest first)

### Requirement 7: Display 3R Performance Metrics

**User Story:** As a system operator, I want to track Reduce, Reuse, and Recharge performance, so that I can measure environmental impact goals.

#### Acceptance Criteria

1. THE Dashboard SHALL display a 3R_Performance section
2. THE 3R_Performance section SHALL display "Reduce" metrics with percentage or volume data
3. THE 3R_Performance section SHALL display "Reuse" metrics with percentage or volume data
4. THE 3R_Performance section SHALL display "Recharge" metrics with percentage or volume data
5. THE 3R_Performance section SHALL use Mock_Data for all displayed values
6. THE Dashboard SHALL visualize 3R performance using progress bars or percentage indicators

### Requirement 8: Display Recent Activity Log

**User Story:** As a system operator, I want to see recent system activities, so that I can track operational events and changes.

#### Acceptance Criteria

1. THE Dashboard SHALL display a recent activity section
2. THE Dashboard SHALL display at least five Mock_Data activity entries
3. FOR EACH activity entry, THE Dashboard SHALL display a timestamp and description
4. THE Dashboard SHALL display activities in reverse chronological order (newest first)
5. THE Dashboard SHALL distinguish between different activity types using icons or labels

### Requirement 9: Apply Professional Design Theme

**User Story:** As a system operator, I want a professional and visually appealing interface, so that the dashboard is pleasant to use and easy to read.

#### Acceptance Criteria

1. THE Dashboard SHALL use a charcoal or deep slate background color
2. THE Dashboard SHALL use soft gray card backgrounds for content sections
3. THE Dashboard SHALL use muted teal and green colors as accent colors
4. THE Dashboard SHALL use white typography for primary text
5. THE Dashboard SHALL NOT use light blue colors in the design theme
6. THE Dashboard SHALL NOT use dark blue as the main theme color
7. THE Dashboard SHALL use green color for safe/normal status indicators
8. THE Dashboard SHALL use amber color for warning status indicators
9. THE Dashboard SHALL use red color for critical status indicators
10. THE Dashboard SHALL avoid excessive gradients in the design
11. THE Dashboard SHALL avoid unnecessary animations
12. THE Dashboard SHALL use spacious layout with adequate whitespace between components

### Requirement 10: Implement Header Section

**User Story:** As a system operator, I want to see contextual information in the header, so that I know the current time and can access quick actions.

#### Acceptance Criteria

1. THE Dashboard SHALL display a top header spanning the full width above the main content
2. THE Dashboard SHALL display the current section title in the header
3. THE Dashboard SHALL display the current date and time in the header
4. THE Dashboard SHALL style the header consistently with the overall design theme
5. THE Dashboard SHALL position the header above all other dashboard content

### Requirement 11: Use Mock Data Only

**User Story:** As a developer, I want all data to be mocked within the frontend, so that the prototype is self-contained without backend dependencies.

#### Acceptance Criteria

1. THE Dashboard SHALL NOT make HTTP requests to external APIs or backend services
2. THE Dashboard SHALL use hardcoded Mock_Data for all displayed metrics and values
3. THE Dashboard SHALL NOT connect to real sensors or hardware devices
4. THE Dashboard SHALL NOT require environment variables or configuration files for data sources
5. THE Dashboard SHALL generate or define all Mock_Data within frontend code files

### Requirement 12: Implement Responsive Layout Structure

**User Story:** As a system operator, I want the dashboard to have a clear layout structure, so that I can easily find information.

#### Acceptance Criteria

1. THE Dashboard SHALL use a three-component layout: Sidebar_Navigation, top header, and main content area
2. THE Sidebar_Navigation SHALL be positioned on the left side with fixed width
3. THE Dashboard SHALL position the header at the top spanning the remaining width
4. THE Dashboard SHALL position the main content area below the header and to the right of the sidebar
5. THE Dashboard SHALL organize the overview section content using a grid or flexbox layout
6. THE Dashboard SHALL display KPI cards in a horizontal row or responsive grid
7. THE Dashboard SHALL display treatment status, flood resilience, alerts, 3R performance, and recent activity sections below the KPI cards
