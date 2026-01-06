import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StaffAugmentation.css';

function StaffAugmentation() {
  return (
    <div className="staff-augmentation">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Staff Augmentation Solutions</h1>
            <p className="hero-subtitle">Scale Your Team with Top-Tier Talent</p>
            <p className="hero-description">
              Extend your in-house capabilities with skilled professionals who integrate seamlessly
              into your team. Get the expertise you need, when you need it, without the overhead of
              permanent hiring.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Why Staff Augmentation?</h2>
          <p className="section-subtitle">Flexible workforce solutions that adapt to your business needs</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Rapid Scaling</h3>
              <p>Quickly expand your team to meet project deadlines and business demands without lengthy recruitment processes.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Cost-Effective</h3>
              <p>Reduce overhead costs associated with full-time employees while maintaining access to top talent.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Specialized Skills</h3>
              <p>Access niche expertise and specialized skills for specific projects without long-term commitments.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Flexibility</h3>
              <p>Scale up or down based on project requirements and business cycles with ease.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Faster Time to Market</h3>
              <p>Accelerate project delivery with experienced professionals who can hit the ground running.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Knowledge Transfer</h3>
              <p>Benefit from fresh perspectives and industry best practices that augmented staff bring to your team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Define Requirements</h3>
              <p>Share your project needs, technical requirements, and timeline with our team.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Talent Matching</h3>
              <p>We identify and vet qualified candidates from our extensive network of professionals.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Interview & Select</h3>
              <p>Review candidate profiles and interview your top choices to ensure the perfect fit.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Onboard & Integrate</h3>
              <p>Selected professionals join your team and start contributing immediately to your projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container">
          <h2>Perfect For</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <div className="use-case-icon">💻</div>
              <h3>Software Development</h3>
              <p>Full-stack developers, mobile developers, DevOps engineers, and QA specialists.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">📊</div>
              <h3>Data & Analytics</h3>
              <p>Data scientists, analysts, BI specialists, and machine learning engineers.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">🎨</div>
              <h3>Design & UX</h3>
              <p>UI/UX designers, product designers, and creative professionals.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">📱</div>
              <h3>Digital Marketing</h3>
              <p>SEO specialists, content creators, social media managers, and digital strategists.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">🔧</div>
              <h3>IT Infrastructure</h3>
              <p>System administrators, network engineers, and cloud architects.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">🎯</div>
              <h3>Project Management</h3>
              <p>Project managers, scrum masters, and business analysts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h2>Our Track Record</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2000+</h3>
              <p>Professionals Placed</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Retention Rate</p>
            </div>
            <div className="stat-item">
              <h3>48hrs</h3>
              <p>Average Matching Time</p>
            </div>
            <div className="stat-item">
              <h3>300+</h3>
              <p>Active Clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <h2>Industries We Serve</h2>
          <div className="industries-list">
            <div className="industry-tag">Technology</div>
            <div className="industry-tag">Finance</div>
            <div className="industry-tag">Healthcare</div>
            <div className="industry-tag">E-commerce</div>
            <div className="industry-tag">Manufacturing</div>
            <div className="industry-tag">Education</div>
            <div className="industry-tag">Retail</div>
            <div className="industry-tag">Telecommunications</div>
            <div className="industry-tag">Media & Entertainment</div>
            <div className="industry-tag">Logistics</div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Augment Your Team?</h2>
          <p>Let's discuss your staffing needs and find the perfect talent for your projects.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}

export default StaffAugmentation;
