import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const teamMembers = [
  { initials: 'AJ', name: 'Alex Johnson', role: 'CEO & Co-Founder', bio: 'Ex-Google engineer with 15 years building scalable systems.', skills: ['System Design', 'Go', 'Kubernetes'] },
  { initials: 'MR', name: 'Maya Rodriguez', role: 'CTO & Co-Founder', bio: 'Former Netflix architect, specializes in distributed systems.', skills: ['Distributed Systems', 'AWS', 'Rust'] },
  { initials: 'DC', name: 'Daniel Chen', role: 'Head of Design', bio: 'Award-winning UX designer with a focus on accessibility.', skills: ['Figma', 'UX Research', 'Motion'] },
  { initials: 'SP', name: 'Sofia Patel', role: 'Lead Full-Stack', bio: 'Full-stack engineer passionate about developer experience.', skills: ['React', 'Node.js', 'TypeScript'] },
];

const techStack = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind'] },
  { category: 'Backend', techs: ['Node.js', 'Go', 'Python', 'GraphQL', 'gRPC'] },
  { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { category: 'Cloud & Infra', techs: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform'] },
  { category: 'Data & AI', techs: ['Python', 'TensorFlow', 'Spark', 'BigQuery', 'dbt'] },
  { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra'] },
];

function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container about-hero-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            About NexDev
          </span>
          <h1>Built by engineers,<br />for visionaries</h1>
          <p className="lead">
            We're a product-focused software studio helping startups and enterprises
            ship exceptional digital experiences since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-tag">Our Story</span>
              <h2>A decade of shipping products people love</h2>
              <p>
                NexDev was founded in 2014 by two engineers frustrated with the gap between what
                software agencies promised and what they actually delivered. We believed there was
                a better way — one rooted in transparency, craftsmanship, and genuine partnership.
              </p>
              <p>
                We started as a team of three in a San Francisco garage (yes, really), taking on
                challenging MVP projects for early-stage startups. The quality of our work spread
                by word of mouth, and today we're a team of 30+ engineers, designers, and product
                thinkers serving clients across 20+ countries.
              </p>
              <p>
                What hasn't changed? Our commitment to writing code we're proud of and building
                products that make our clients' businesses genuinely better.
              </p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '24px' }}>Work With Us</Link>
            </div>
            <div className="about-story-visual">
              <div className="about-visual-card">
                <div className="about-visual-card-bg"></div>
                <div className="about-visual-stats">
                  <div className="about-visual-stat">
                    <span className="about-visual-stat-num">2014</span>
                    <span className="about-visual-stat-label">Founded</span>
                  </div>
                  <div className="about-visual-stat">
                    <span className="about-visual-stat-num">30+</span>
                    <span className="about-visual-stat-label">Team Members</span>
                  </div>
                  <div className="about-visual-stat">
                    <span className="about-visual-stat-num">150+</span>
                    <span className="about-visual-stat-label">Projects Shipped</span>
                  </div>
                  <div className="about-visual-stat">
                    <span className="about-visual-stat-num">20+</span>
                    <span className="about-visual-stat-label">Countries Served</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Mission & principles</h2>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-card-icon">🎯</div>
              <h3>Mission</h3>
              <p>
                To empower businesses with software that creates lasting competitive advantage —
                built with craftsmanship, transparency, and a relentless focus on outcomes.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-card-icon">👁️</div>
              <h3>Vision</h3>
              <p>
                A world where every business has access to enterprise-grade engineering talent
                and processes, regardless of size or budget.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-card-icon">💡</div>
              <h3>Approach</h3>
              <p>
                We think like product owners, not contractors. We challenge assumptions, ask hard
                questions, and build only what drives real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What we stand for</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🔬', title: 'Craft', desc: 'We care deeply about code quality, system design, and UX. Good enough is never good enough.' },
              { icon: '🤝', title: 'Partnership', desc: 'Your success is our success. We\'re invested in outcomes, not just deliverables.' },
              { icon: '📣', title: 'Transparency', desc: 'No surprises. We communicate proactively — good news and bad news, always.' },
              { icon: '🌱', title: 'Growth', desc: 'We never stop learning. We adopt new tech thoughtfully and share knowledge openly.' },
            ].map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">Meet the builders</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
                <div className="team-skills">
                  {member.skills.map(s => <span className="team-skill" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-stack">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Technology</span>
            <h2 className="section-title">Our tech stack</h2>
            <p className="section-subtitle">
              We're technology-agnostic and pick the best tool for every job.
              Here's what we're most proficient with.
            </p>
          </div>
          <div className="stack-grid">
            {techStack.map((cat, i) => (
              <div className="stack-category" key={i}>
                <h4>{cat.category}</h4>
                <div className="stack-pills">
                  {cat.techs.map(t => <span className="stack-pill" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
