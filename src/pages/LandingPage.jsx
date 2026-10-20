import React, { useState } from 'react'
import { 
  Droplet, 
  ArrowRight, 
  LayoutDashboard, 
  Shield, 
  AlertTriangle, 
  Recycle, 
  Waves, 
  Filter, 
  Layers, 
  FlaskConical, 
  GitBranch, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Sparkles, 
  MapPin, 
  User, 
  Award,
  ArrowDown
} from 'lucide-react'
import './LandingPage.css'

const LandingPage = ({ onOpenDashboard }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTabMode, setActiveTabMode] = useState('normal')

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Exact Team Members as specified
  const teamMembers = [
    {
      num: 'TEAM MEMBER 01',
      name: 'BOOMESH R',
      role: 'Team Lead | System Architecture & Integration',
      image: '/images/team/boomesh.jpg',
      initials: 'BR'
    },
    {
      num: 'TEAM MEMBER 02',
      name: 'MAYURI S V',
      role: 'Research, Validation & Project Integration',
      image: '/images/team/mayuri.jpg',
      initials: 'MSV'
    },
    {
      num: 'TEAM MEMBER 03',
      name: 'JOSE GEORGESAM E',
      role: 'ML & Data Analytics Developer',
      image: '/images/team/jose.jpg',
      initials: 'JGE'
    },
    {
      num: 'TEAM MEMBER 04',
      name: 'KAVIYA M',
      role: 'Electronics & Power Control Engineer',
      image: '/images/team/kaviya.jpg',
      initials: 'KM'
    },
    {
      num: 'TEAM MEMBER 05',
      name: 'YADAVKRISH R D',
      role: 'Frontend & Dashboard Developer',
      image: '/images/team/yadavkrish.jpg',
      initials: 'YRD'
    },
    {
      num: 'TEAM MEMBER 06',
      name: 'HAFIZ MUZZAMIL A',
      role: 'Embedded Hardware & Sensor Integration Engineer',
      image: '/images/team/hafiz.jpg',
      initials: 'HMA'
    }
  ]

  // Exact Mentors as specified
  const mentors = [
    {
      num: 'MENTOR 01',
      name: 'MUTHUSAMY K',
      role: 'Project Mentor',
      image: '/images/team/muthusamy.jpg',
      initials: 'MK'
    },
    {
      num: 'MENTOR 02',
      name: 'GAJENDRAN PARTHASARATHI E R',
      role: 'Project Mentor',
      image: '/images/team/gajendran.jpg',
      initials: 'GPE'
    }
  ]

  // 6 Solution Components
  const solutionComponents = [
    {
      id: 1,
      title: 'Nahani Trap / Coarse Screen',
      subtitle: 'Source Inlet Pre-Screening',
      icon: Filter,
      desc: 'Positioned at the household greywater discharge junction. Traps large debris, plastic fragments, hair, and coarse solids to protect downstream pipes from clogging.'
    },
    {
      id: 2,
      title: 'Silt & Grease Chamber',
      subtitle: 'Primary Sedimentation & Flotation',
      icon: Layers,
      desc: 'Dual-action baffle compartment that settles dense silt, sand, and heavy particulates at the floor while separating buoyant kitchen grease and soap lather at the surface.'
    },
    {
      id: 3,
      title: 'Vertical Biofilter',
      subtitle: 'Multi-Layer Biological Filtration',
      icon: FlaskConical,
      desc: 'Engineered compact column packing graded gravel, sand, and locally sourced coconut coir media. Promotes aerobic biofilm growth to digest dissolved organic waste without chemicals.'
    },
    {
      id: 4,
      title: 'Flow-Control / Diversion Chamber',
      subtitle: 'Hydraulic Discharge Distribution',
      icon: GitBranch,
      desc: 'Calibrated hydraulic manifold regulating volumetric flow rates. Balances effluent volume between primary soak pit percolation and non-potable utility storage tanks.'
    },
    {
      id: 5,
      title: 'Secondary Overflow Outlet',
      subtitle: 'Peak Surge Absorption Route',
      icon: AlertTriangle,
      desc: 'Auxiliary gravity-fed weir that automatically activates when greywater inflow temporarily exceeds primary filtration capacity, routing excess water to secondary buffer trenches.'
    },
    {
      id: 6,
      title: 'Flood Bypass + Non-Return Valve',
      subtitle: 'Inundation Backflow Defense',
      icon: ShieldCheck,
      desc: 'Mechanical one-way check valve combined with an elevated storm runoff diversion channel. Blocks polluted monsoon backflow from entering residences and soakage zones.'
    }
  ]

  // 6 Key Features
  const keyFeatures = [
    {
      title: 'Compact Treatment',
      desc: 'Designed with a minimal vertical footprint specifically suited for compact rural plots and congested village alleys where space is at a premium.',
      icon: FlaskConical
    },
    {
      title: 'Flood Resilience',
      desc: 'Integrates self-actuating storm relief conduits that protect domestic sanitation assets from being drowned out during severe monsoon rainfall.',
      icon: Waves
    },
    {
      title: 'Overflow Management',
      desc: 'Multi-tier diversion architecture prevents localized ground saturation and open soak pit failure during intense morning domestic discharge.',
      icon: AlertTriangle
    },
    {
      title: 'Controlled Flow',
      desc: 'Stabilizes hydraulic retention times through passive diversion, ensuring optimal contact duration within the biofiltration media layers.',
      icon: GitBranch
    },
    {
      title: 'Backflow Protection',
      desc: 'Mechanical non-return flapper valve safeguards household fixtures and living spaces against stormwater regurgitation during exterior drain flooding.',
      icon: Shield
    },
    {
      title: 'Low-Cost Design Approach',
      desc: 'Built using widely available vernacular materials (gravel, coconut coir, masonry) requiring minimal mechanical components and zero chemical additives.',
      icon: Recycle
    }
  ]

  return (
    <div className="landing-page" id="home">
      {/* 1. NAVIGATION BAR */}
      <header className="landing-nav-header">
        <div className="landing-nav-container">
          {/* Left block: 1. SIH Government Logo FIRST, 2. JalRakshak Brand SECOND */}
          <div className="landing-nav-left">
            <div className="landing-nav-gov-banner">
              <img 
                src="/images/sih_logo_banner.png" 
                alt="Ministry of Education, AICTE, MoE's Innovation Cell, Smart India Hackathon 2026" 
                className="landing-nav-gov-img"
              />
            </div>

            <div className="landing-brand-divider"></div>

            <div className="landing-brand" onClick={() => scrollToSection('home')}>
              <div className="landing-logo-badge">
                <Droplet size={22} className="landing-logo-icon" />
              </div>
              <div className="landing-brand-text">
                <span className="landing-brand-title">JalRakshak</span>
                <span className="landing-brand-sub">Smart Greywater Management</span>
              </div>
            </div>
          </div>

          {/* 3. REMAINING: Navigation Links */}
          <nav className="landing-nav-links">
            <button type="button" onClick={() => scrollToSection('home')} className="nav-link-btn">Home</button>
            <button type="button" onClick={() => scrollToSection('problem')} className="nav-link-btn">Problem</button>
            <button type="button" onClick={() => scrollToSection('solution')} className="nav-link-btn">Solution</button>
            <button type="button" onClick={() => scrollToSection('how-it-works')} className="nav-link-btn">How It Works</button>
            <button type="button" onClick={() => scrollToSection('features')} className="nav-link-btn">Features</button>
            <button type="button" onClick={() => scrollToSection('team')} className="nav-link-btn">Our Team</button>
          </nav>

          {/* 4. Action Button */}
          <div className="landing-nav-actions">
            <button 
              type="button" 
              className="open-dashboard-btn" 
              onClick={onOpenDashboard}
            >
              <LayoutDashboard size={17} />
              <span>Open Dashboard</span>
            </button>

            <button 
              type="button" 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-dropdown">
            <button type="button" onClick={() => scrollToSection('home')} className="mobile-nav-item">Home</button>
            <button type="button" onClick={() => scrollToSection('problem')} className="mobile-nav-item">Problem</button>
            <button type="button" onClick={() => scrollToSection('solution')} className="mobile-nav-item">Solution</button>
            <button type="button" onClick={() => scrollToSection('how-it-works')} className="mobile-nav-item">How It Works</button>
            <button type="button" onClick={() => scrollToSection('features')} className="mobile-nav-item">Features</button>
            <button type="button" onClick={() => scrollToSection('team')} className="mobile-nav-item">Our Team</button>
            <button 
              type="button" 
              className="mobile-nav-cta" 
              onClick={() => { setMobileMenuOpen(false); onOpenDashboard(); }}
            >
              <LayoutDashboard size={18} />
              <span>Open Dashboard</span>
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} className="hero-badge-icon" />
              <span>Smart India Hackathon 2026 Proposal • Team QUANTUMNEX 007</span>
            </div>

            <h1 className="hero-title">
              Smarter Greywater Management.<br />
              <span className="hero-title-highlight">Stronger Flood Resilience.</span>
            </h1>

            <p className="hero-description">
              JalRakshak is a proposed low-cost, modular greywater management concept designed to address wastewater drainage challenges in villages affected by land scarcity, flooding, and soak pit overflow. The concept combines compact treatment, controlled flow, overflow management, and flood-resilient drainage.
            </p>

            <div className="hero-actions">
              <button 
                type="button" 
                className="hero-primary-btn"
                onClick={() => scrollToSection('solution')}
              >
                <span>Explore Our Solution</span>
                <ArrowRight size={17} />
              </button>

              <button 
                type="button" 
                className="hero-secondary-btn"
                onClick={onOpenDashboard}
              >
                <LayoutDashboard size={17} />
                <span>Open Dashboard</span>
              </button>
            </div>

            <div className="hero-meta-strip">
              <div className="meta-item">
                <span className="meta-value">6-Stage</span>
                <span className="meta-label">Modular Architecture</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-value">3 Modes</span>
                <span className="meta-label">Normal • Overflow • Flood</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-value">Non-Potable</span>
                <span className="meta-label">3R Reuse &amp; Recharge</span>
              </div>
            </div>
          </div>

          {/* Hero Process Visual (Simplified Greywater Management Flow) */}
          <div className="hero-visual-card">
            <div className="visual-card-header">
              <span className="visual-card-title">Concept Process Overview</span>
              <span className="visual-card-tag">Conceptual Architecture</span>
            </div>

            <div className="process-pipeline-graphic">
              <div className="pipeline-step">
                <div className="pipeline-icon-circle blue">
                  <Droplet size={18} />
                </div>
                <div className="pipeline-step-text">
                  <span className="pipeline-step-title">1. Household Inflow</span>
                  <span className="pipeline-step-desc">Kitchen &amp; bath discharge</span>
                </div>
              </div>

              <div className="pipeline-connector"><ArrowDown size={14} /></div>

              <div className="pipeline-step">
                <div className="pipeline-icon-circle">
                  <Filter size={18} />
                </div>
                <div className="pipeline-step-text">
                  <span className="pipeline-step-title">2. Pre-Treatment</span>
                  <span className="pipeline-step-desc">Coarse screen + grease trap</span>
                </div>
              </div>

              <div className="pipeline-connector"><ArrowDown size={14} /></div>

              <div className="pipeline-step">
                <div className="pipeline-icon-circle">
                  <FlaskConical size={18} />
                </div>
                <div className="pipeline-step-text">
                  <span className="pipeline-step-title">3. Compact Biofilter</span>
                  <span className="pipeline-step-desc">Coconut coir &amp; gravel layers</span>
                </div>
              </div>

              <div className="pipeline-connector"><ArrowDown size={14} /></div>

              <div className="pipeline-step">
                <div className="pipeline-icon-circle">
                  <GitBranch size={18} />
                </div>
                <div className="pipeline-step-text">
                  <span className="pipeline-step-title">4. Flow Diversion</span>
                  <span className="pipeline-step-desc">Hydraulic control chamber</span>
                </div>
              </div>

              <div className="pipeline-connector"><ArrowDown size={14} /></div>

              <div className="pipeline-dual-outcomes">
                <div className="outcome-box green">
                  <Recycle size={15} />
                  <span>Reuse &amp; Recharge</span>
                </div>
                <div className="outcome-box amber">
                  <ShieldCheck size={15} />
                  <span>Flood-Safe Bypass</span>
                </div>
              </div>
            </div>

            <div className="visual-card-footer">
              <span>* Proposed prototype schematic. Non-potable applications only.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM STATEMENT */}
      <section className="section-wrapper bg-light" id="problem">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">RURAL SANITATION CHALLENGES</span>
            <h2 className="section-main-heading">The Challenge of Rural Greywater Management</h2>
            <p className="section-lead-text">
              Unmanaged household wastewater poses chronic sanitation, ecological, and infrastructural hurdles in agrarian settlements and rural communities across India.
            </p>
          </div>

          <div className="problem-cards-grid">
            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <MapPin size={24} className="problem-icon" />
              </div>
              <h3 className="problem-card-title">LAND SCARCITY</h3>
              <p className="problem-card-desc">
                Conventional decentralized wastewater treatment arrangements may require substantial surface land area that is simply unavailable in dense village clusters and narrow alleyways.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <Waves size={24} className="problem-icon" />
              </div>
              <h3 className="problem-card-title">FLOOD-RELATED DISRUPTION</h3>
              <p className="problem-card-desc">
                Seasonal monsoon flooding severely disrupts ground-level soak pits, overwhelming roadside drainage channels and causing contaminated stormwater backflow into residential compounds.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <AlertTriangle size={24} className="problem-icon" />
              </div>
              <h3 className="problem-card-title">SOAK PIT OVERFLOW</h3>
              <p className="problem-card-desc">
                Cumulative siltation, grease deposition, and sudden household discharge exceeding subsoil absorption rates routinely lead to messy surface overflows and system clogging.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <Droplet size={24} className="problem-icon" />
              </div>
              <h3 className="problem-card-title">STAGNANT GREYWATER</h3>
              <p className="problem-card-desc">
                Inadequate and blocked drainage networks leave foul wastewater standing near households and public pathways, generating mosquito vector breeding habitats and health hazards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTION */}
      <section className="section-wrapper" id="solution">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">THE JalRakshak FRAMEWORK</span>
            <h2 className="section-main-heading">Introducing JalRakshak</h2>
            <p className="section-lead-text">
              A proposed modular greywater management concept combining compact treatment, controlled flow, overflow management, and flood-resilient drainage.
            </p>
          </div>

          <div className="solution-components-grid">
            {solutionComponents.map((comp) => {
              const IconComponent = comp.icon
              return (
                <div key={comp.id} className="solution-card">
                  <div className="solution-card-top">
                    <div className="solution-num-badge">0{comp.id}</div>
                    <div className="solution-icon-box">
                      <IconComponent size={20} />
                    </div>
                  </div>
                  <h3 className="solution-comp-title">{comp.title}</h3>
                  <span className="solution-comp-sub">{comp.subtitle}</span>
                  <p className="solution-comp-desc">{comp.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="solution-notice-banner">
            <CheckCircle2 size={18} className="notice-icon" />
            <span>
              <strong>Intended Use Notice:</strong> JalRakshak treats domestic greywater for dedicated non-potable reuse (landscape watering, toilet flushing) and sub-surface aquifer recharge. The treated effluent is not intended or safe for drinking.
            </span>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="section-wrapper bg-light" id="how-it-works">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">TREATMENT &amp; RESILIENCE PATHWAY</span>
            <h2 className="section-main-heading">From Greywater to Managed Flow</h2>
            <p className="section-lead-text">
              A multi-tier hydraulic and biological sequence engineered to process routine domestic drainage while remaining resilient against seasonal cloudbursts.
            </p>
          </div>

          {/* Primary Process Steps */}
          <div className="process-flow-container">
            <div className="process-step-node">
              <div className="step-number-tag">STEP 1</div>
              <h4 className="process-node-title">HOUSEHOLD GREYWATER</h4>
              <p className="process-node-desc">Bathing, washing, and kitchen wastewater collection</p>
            </div>

            <div className="process-arrow-divider">
              <ChevronRight size={22} className="desktop-arrow" />
              <ArrowDown size={22} className="mobile-arrow" />
            </div>

            <div className="process-step-node">
              <div className="step-number-tag">STEP 2</div>
              <h4 className="process-node-title">PRE-TREATMENT</h4>
              <p className="process-node-desc">Nahani trap / coarse screen removes solids</p>
            </div>

            <div className="process-arrow-divider">
              <ChevronRight size={22} className="desktop-arrow" />
              <ArrowDown size={22} className="mobile-arrow" />
            </div>

            <div className="process-step-node">
              <div className="step-number-tag">STEP 3</div>
              <h4 className="process-node-title">SOLIDS &amp; GREASE SEPARATION</h4>
              <p className="process-node-desc">Silt &amp; grease chamber baffles floatables</p>
            </div>

            <div className="process-arrow-divider">
              <ChevronRight size={22} className="desktop-arrow" />
              <ArrowDown size={22} className="mobile-arrow" />
            </div>

            <div className="process-step-node">
              <div className="step-number-tag">STEP 4</div>
              <h4 className="process-node-title">COMPACT TREATMENT</h4>
              <p className="process-node-desc">Vertical biofilter with coir &amp; gravel media</p>
            </div>

            <div className="process-arrow-divider">
              <ChevronRight size={22} className="desktop-arrow" />
              <ArrowDown size={22} className="mobile-arrow" />
            </div>

            <div className="process-step-node">
              <div className="step-number-tag">STEP 5</div>
              <h4 className="process-node-title">FLOW MANAGEMENT</h4>
              <p className="process-node-desc">Flow-control / diversion chamber regulates head</p>
            </div>

            <div className="process-arrow-divider">
              <ChevronRight size={22} className="desktop-arrow" />
              <ArrowDown size={22} className="mobile-arrow" />
            </div>

            <div className="process-step-node outcome-node">
              <div className="step-number-tag outcome-tag">DESTINATION</div>
              <h4 className="process-node-title">APPROPRIATE DESTINATION</h4>
              <p className="process-node-desc">Suitable non-potable reuse or designated sub-surface recharge</p>
            </div>
          </div>

          {/* Two Adaptive Surge Pathways */}
          <div className="dual-pathways-container">
            <div className="pathway-card overflow-pathway">
              <div className="pathway-badge amber">OVERFLOW MODE</div>
              <h3 className="pathway-title">Primary Treatment Capacity Exceeded</h3>
              <p className="pathway-desc">
                When morning washing routines generate surges exceeding the 3,500 L/day primary biofilter threshold:
              </p>
              <div className="pathway-flow-pill">
                <span>Inflow Surge</span>
                <ArrowRight size={14} />
                <span>Secondary Overflow Outlet</span>
                <ArrowRight size={14} />
                <span>Leach Field Detention</span>
              </div>
            </div>

            <div className="pathway-card flood-pathway">
              <div className="pathway-badge red">FLOOD MODE</div>
              <h3 className="pathway-title">Flood Condition Simulated</h3>
              <p className="pathway-desc">
                When torrential rains raise external street water levels, threatening ground-level soakage pits:
              </p>
              <div className="pathway-flow-pill">
                <span>Flood Bypass Engaged</span>
                <ArrowRight size={14} />
                <span>Non-Return Valve Shuts Backflow</span>
                <ArrowRight size={14} />
                <span>Designated Drainage Route</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEY FEATURES */}
      <section className="section-wrapper" id="features">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">CORE ENGINEERING HIGHLIGHTS</span>
            <h2 className="section-main-heading">Designed for Rural Challenges</h2>
            <p className="section-lead-text">
              Every mechanism in the JalRakshak architecture is optimized for minimal maintenance, passive hydraulic operation, and rural durability.
            </p>
          </div>

          <div className="features-cards-grid">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-icon-badge">
                    <IconComp size={22} />
                  </div>
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-desc">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. THREE OPERATING MODES */}
      <section className="section-wrapper bg-light">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">RESPONSIVE ADAPTATION</span>
            <h2 className="section-main-heading">One Concept. Three Operating Modes.</h2>
            <p className="section-lead-text">
              The proposed system seamlessly adapts between nominal everyday operation, morning discharge surges, and exterior storm events.
            </p>
          </div>

          <div className="modes-tab-controls">
            <button 
              type="button" 
              className={`mode-tab-btn ${activeTabMode === 'normal' ? 'active normal' : ''}`}
              onClick={() => setActiveTabMode('normal')}
            >
              <CheckCircle2 size={16} />
              <span>Normal Mode</span>
            </button>
            <button 
              type="button" 
              className={`mode-tab-btn ${activeTabMode === 'overflow' ? 'active overflow' : ''}`}
              onClick={() => setActiveTabMode('overflow')}
            >
              <AlertTriangle size={16} />
              <span>Overflow Mode</span>
            </button>
            <button 
              type="button" 
              className={`mode-tab-btn ${activeTabMode === 'flood' ? 'active flood' : ''}`}
              onClick={() => setActiveTabMode('flood')}
            >
              <Shield size={16} />
              <span>Flood Mode</span>
            </button>
          </div>

          <div className="mode-display-card">
            {activeTabMode === 'normal' && (
              <div className="mode-pane">
                <div className="mode-pane-left">
                  <span className="mode-status-pill pill-normal">STANDARD OPERATING EQUILIBRIUM</span>
                  <h3 className="mode-pane-title">Normal Mode: Closed-Loop Biofiltration</h3>
                  <p className="mode-pane-desc">
                    Household greywater (nominal 2,840 L/day) passes successively through the coarse trap, silt separation chamber, and vertical biofilter. Clarified water is distributed safely for toilet flushing, landscape vegetation, and regulated soak pit groundwater infiltration.
                  </p>
                  <ul className="mode-features-list">
                    <li><CheckCircle2 size={15} color="#16a34a" /> Primary Biofilter operates at optimal 86.6% biological filtration efficiency</li>
                    <li><CheckCircle2 size={15} color="#16a34a" /> Secondary Overflow Outlet remains idle on passive standby</li>
                    <li><CheckCircle2 size={15} color="#16a34a" /> Non-Return Valve remains open for standard gravity-flow discharge</li>
                  </ul>
                </div>
                <div className="mode-pane-right">
                  <div className="mode-stat-box">
                    <span className="stat-caption">Daily Inflow</span>
                    <span className="stat-num">2,840 L/day</span>
                  </div>
                  <div className="mode-stat-box">
                    <span className="stat-caption">Treatment Load</span>
                    <span className="stat-num">Normal (72%)</span>
                  </div>
                  <div className="mode-stat-box">
                    <span className="stat-caption">Bypass State</span>
                    <span className="stat-num">Standby</span>
                  </div>
                </div>
              </div>
            )}

            {activeTabMode === 'overflow' && (
              <div className="mode-pane">
                <div className="mode-pane-left">
                  <span className="mode-status-pill pill-overflow">SURGE MITIGATION ROUTE</span>
                  <h3 className="mode-pane-title">Overflow Mode: Dual-Chamber Diversion</h3>
                  <p className="mode-pane-desc">
                    When simultaneous morning domestic activities elevate greywater inflow past the primary 3,500 L/day threshold, the flow-control weir passively diverts excess volume into the secondary overflow outlet and leach field detention basin.
                  </p>
                  <ul className="mode-features-list">
                    <li><AlertTriangle size={15} color="#d97706" /> Biofilter processes maximum capacity (3,500 L/day) without ponding</li>
                    <li><AlertTriangle size={15} color="#d97706" /> Secondary Overflow Outlet activates to absorb ~1,400 L/day surge volume</li>
                    <li><AlertTriangle size={15} color="#d97706" /> Completely eliminates village lane greywater flooding and soak pit backup</li>
                  </ul>
                </div>
                <div className="mode-pane-right">
                  <div className="mode-stat-box">
                    <span className="stat-caption">Peak Surge Inflow</span>
                    <span className="stat-num text-amber">4,900 L/day</span>
                  </div>
                  <div className="mode-stat-box">
                    <span className="stat-caption">Secondary Route</span>
                    <span className="stat-num text-amber">Active (Diverting)</span>
                  </div>
                  <div className="mode-stat-box">
                    <span className="stat-caption">Surface Overflow Risk</span>
                    <span className="stat-num text-green">Controlled</span>
                  </div>
                </div>
              </div>
            )}

            {activeTabMode === 'flood' && (
              <div className="mode-pane">
                <div className="mode-pane-left">
                  <span className="mode-status-pill pill-flood">EXTREME WEATHER RESILIENCE</span>
                  <h3 className="mode-pane-title">Flood Mode: Emergency Bypass &amp; NRV Isolation</h3>
                  <p className="mode-pane-desc">
                    During heavy monsoons, rising external stormwater triggers the mechanical Non-Return Valve to seal shut, preventing contaminated runoff from backing up into homes. Inflow is channeled safely through the dedicated flood bypass route.
                  </p>
                  <ul className="mode-features-list">
                    <li><Shield size={15} color="#dc2626" /> Non-Return Valve mechanically isolates home plumbing and biofilter bed</li>
                    <li><Shield size={15} color="#dc2626" /> Flood Bypass Drain channels torrential surface runoff safely to main drains</li>
                    <li><Shield size={15} color="#dc2626" /> Zero silt contamination or structural washout of sub-surface soakage media</li>
                  </ul>
                </div>
                <div className="mode-pane-right">
                  <div className="mode-stat-box">
                    <span className="stat-caption">Street Water Level</span>
                    <span className="stat-num text-red">4.85 m (High)</span>
                  </div>
                  <div className="mode-stat-box">
                    <span className="stat-caption">Non-Return Valve</span>
                    <span className="stat-num text-green">Closed (Protected)</span>
                  </div>
                  <div className="mode-stat-box">
                    <span className="stat-caption">Flood Bypass</span>
                    <span className="stat-num text-red">100% Active</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mode-disclaimer-bar">
              <span>* Conceptual simulation for demonstration. No physical actuators or IoT telemetry required for passive mechanical functioning.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXPECTED IMPACT */}
      <section className="section-wrapper">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">PROJECTED VALUE FOR VILLAGES</span>
            <h2 className="section-main-heading">Building More Resilient Rural Water Management</h2>
            <p className="section-lead-text">
              By coupling decentralized low-cost biofiltration with gravity-actuated flood protection, JalRakshak addresses critical pain points in rural environmental sanitation.
            </p>
          </div>

          <div className="impact-areas-grid">
            <div className="impact-card">
              <div className="impact-check-badge">
                <CheckCircle2 size={20} className="check-icon" />
              </div>
              <h3 className="impact-card-title">Reduced Stagnant Greywater</h3>
              <p className="impact-card-desc">
                Continuous on-site pre-treatment and sub-surface percolation eliminate open puddle accumulations in village pathways, dramatically curtailing mosquito breeding grounds.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-check-badge">
                <CheckCircle2 size={20} className="check-icon" />
              </div>
              <h3 className="impact-card-title">Improved Drainage Continuity</h3>
              <p className="impact-card-desc">
                Sustains domestic drainage uninterrupted during peak washing hours and light storms, preventing foul backpressures in household bathing enclosures.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-check-badge">
                <CheckCircle2 size={20} className="check-icon" />
              </div>
              <h3 className="impact-card-title">Better Overflow Management</h3>
              <p className="impact-card-desc">
                Secondary diversion channels and leach field buffers relieve hydrostatic pressure on primary soak pits, preventing premature pit failure and saturated ground bubbling.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-check-badge">
                <CheckCircle2 size={20} className="check-icon" />
              </div>
              <h3 className="impact-card-title">More Responsible Greywater Reuse</h3>
              <p className="impact-card-desc">
                Safely redirects non-potable clarified effluent for village tree plantations, community horticulture, and ground table replenishment, abating fresh water extraction.
              </p>
            </div>
          </div>

          <div className="impact-validation-note">
            <p>
              <strong>Notice:</strong> Expected operational impact depends on site-specific soil infiltration characteristics, local precipitation levels, correct sizing, community maintenance, and subsequent empirical performance validation.
            </p>
          </div>
        </div>
      </section>

      {/* 9. TEAM MEMBERS — EXACT INFORMATION */}
      <section className="section-wrapper bg-light" id="team">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">PROJECT CONTRIBUTORS</span>
            <h2 className="section-main-heading">TEAM QUANTUMNEX 007</h2>
            <p className="section-lead-text">
              The team behind the project concept and prototype.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-portrait-wrapper">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-portrait-img" 
                      loading="lazy"
                    />
                  ) : (
                    <div className="team-portrait-placeholder">
                      <span className="placeholder-initials">{member.initials}</span>
                    </div>
                  )}
                </div>
                <span className="team-member-number">{member.num}</span>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SEPARATE MENTORS SECTION */}
      <section className="section-wrapper mentors-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-sub-tag">GUIDANCE &amp; VALIDATION</span>
            <h2 className="section-main-heading">MENTORS</h2>
            <p className="section-lead-text">
              Guiding project execution, technical validation and industry alignment.
            </p>
          </div>

          <div className="mentors-grid">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="mentor-card">
                <div className="mentor-portrait-wrapper">
                  {mentor.image ? (
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="mentor-portrait-img" 
                      loading="lazy"
                    />
                  ) : (
                    <div className="mentor-portrait-placeholder">
                      <span className="placeholder-initials">{mentor.initials}</span>
                    </div>
                  )}
                  <span className="mentor-badge-pill">MENTOR</span>
                </div>
                <span className="mentor-number">{mentor.num}</span>
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-top-row">
            <div className="footer-brand-col">
              <div className="footer-brand-title-row">
                <div className="footer-logo-badge">
                  <Droplet size={20} className="footer-logo-icon" />
                </div>
                <span className="footer-brand-title">JalRakshak</span>
              </div>
              <p className="footer-brand-subtitle">
                Smart Greywater Management &amp; Flood Resilience System
              </p>
              <span className="footer-team-tag">TEAM QUANTUMNEX 007</span>
              <p className="footer-concept-note">
                A proposed concept for more resilient rural greywater management.
              </p>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Quick Navigation</h4>
              <ul className="footer-nav-list">
                <li><button type="button" onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button type="button" onClick={() => scrollToSection('problem')}>Problem</button></li>
                <li><button type="button" onClick={() => scrollToSection('solution')}>Solution</button></li>
                <li><button type="button" onClick={() => scrollToSection('features')}>Features</button></li>
                <li><button type="button" onClick={() => scrollToSection('team')}>Our Team</button></li>
                <li><button type="button" onClick={onOpenDashboard} className="footer-highlight-link">Open Dashboard</button></li>
              </ul>
            </div>

            <div className="footer-cta-col">
              <h4 className="footer-nav-title">Interactive Demo</h4>
              <p className="footer-cta-desc">
                Access the full 7-page interactive dashboard with simulated Normal, Overflow, and Flood scenarios.
              </p>
              <button 
                type="button" 
                className="footer-dashboard-btn" 
                onClick={onOpenDashboard}
              >
                <LayoutDashboard size={17} />
                <span>Open Dashboard</span>
              </button>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>Designed for Smart India Hackathon 2026 • JalRakshak Concept</span>
            <span>Team QUANTUMNEX 007 • Team ID: 196866</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
