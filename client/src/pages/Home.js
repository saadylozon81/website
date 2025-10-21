import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Match</h1>
          <p className="hero-subtitle">Connecting Top Talent with Leading Companies</p>
          <p className="hero-description">
            We specialize in talent acquisition and recruitment solutions that drive business success.
            Let us help you build your dream team or find your dream job.
          </p>
          <div className="hero-buttons">
            <Link to="/jobs" className="btn btn-primary">View Open Positions</Link>
            <Link to="/contact" className="btn btn-secondary">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose TalentPro?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision Matching</h3>
              <p>Our advanced matching algorithms ensure the perfect fit between candidates and companies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Placement</h3>
              <p>Streamlined processes mean faster hiring and reduced time-to-fill for critical positions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Quality Talent</h3>
              <p>Access to pre-vetted, highly qualified candidates across all industries and skill levels.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>Personal account managers guide you through every step of the recruitment process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Successful Placements</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Hiring?</h2>
          <p>Let's connect and discuss how we can help you achieve your talent acquisition goals.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
