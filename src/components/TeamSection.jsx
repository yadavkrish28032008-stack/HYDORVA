import React from 'react'
import './TeamSection.css'

const TeamSection = () => {
  const teamMembers = [
    {
      num: '01',
      prefix: '01 —',
      name: 'BOOMESH R',
      role: 'Team Lead | System Architecture & Integration',
      image: '/images/team/boomesh.jpg'
    },
    {
      num: '02',
      prefix: '02 —',
      name: 'MAYURI S V',
      role: 'Research, Validation & Project Integration',
      image: '/images/team/mayuri.jpg'
    },
    {
      num: '03',
      prefix: '03 —',
      name: 'JOSE GEORGESAM E',
      role: 'ML & Data Analytics Developer',
      image: '/images/team/jose.jpg'
    },
    {
      num: '04',
      prefix: '04 —',
      name: 'KAVIYA M',
      role: 'Electronics & Power Control Engineer',
      image: '/images/team/kaviya.jpg'
    },
    {
      num: '05',
      prefix: '05 —',
      name: 'YADAVKRISH R D',
      role: 'Frontend & Dashboard Developer',
      image: '/images/team/yadavkrish.jpg'
    },
    {
      num: '06',
      prefix: '06 —',
      name: 'HAFIZ MUZZAMIL A',
      role: 'Embedded Hardware & Sensor Integration Engineer',
      image: '/images/team/hafiz.jpg'
    }
  ]

  const mentors = [
    {
      num: 'MENTOR 01',
      name: 'MUTHUSAMY K',
      role: 'Project Mentor',
      image: '/images/team/muthusamy.jpg'
    },
    {
      num: 'MENTOR 02',
      name: 'GAJENDRAN PARTHASARATHI E R',
      role: 'Project Mentor',
      image: '/images/team/gajendran.jpg'
    }
  ]

  return (
    <div className="team-mentor-container">
      {/* TEAM SECTION */}
      <section className="team-sub-section" id="team-contributors">
        <div className="section-title-block">
          <span className="section-kicker">PROJECT CONTRIBUTORS</span>
          <h2 className="section-heading">TEAM QUANTUMNEX 007</h2>
          <p className="section-subtext">The team behind the project concept and prototype.</p>
        </div>

        <div className="team-members-grid">
          {teamMembers.map((member) => (
            <div key={member.num} className="team-member-card">
              <div className="member-avatar-ring">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-avatar-img"
                  loading="lazy"
                />
              </div>
              <span className="member-prefix">{member.prefix}</span>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEPARATE MENTORS SECTION */}
      <section className="mentors-sub-section" id="mentors-guidance">
        <div className="section-title-block">
          <span className="section-kicker">GUIDANCE &amp; VALIDATION</span>
          <h2 className="section-heading">MENTORS</h2>
          <p className="section-subtext">Guiding project execution, technical validation and industry alignment.</p>
        </div>

        <div className="mentors-cards-row">
          {mentors.map((mentor) => (
            <div key={mentor.num} className="mentor-card-item">
              <div className="mentor-avatar-ring">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="mentor-avatar-img"
                  loading="lazy"
                />
                <span className="mentor-pill-badge">MENTOR</span>
              </div>
              <span className="mentor-number-tag">{mentor.num}</span>
              <h3 className="mentor-name-title">{mentor.name}</h3>
              <p className="mentor-role-label">{mentor.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TeamSection
