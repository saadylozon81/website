import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About TalentPro</h1>
          <p className="lead">Pioneering excellence in talent acquisition since 2010</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, TalentPro has grown from a small startup to become one of the leading
              talent acquisition firms in the industry. Our mission has always been simple: connect
              exceptional talent with outstanding opportunities.
            </p>
            <p>
              With over 15 years of experience, we've helped thousands of companies build their dream
              teams and assisted countless professionals in finding their perfect career path. Our
              success is built on deep industry knowledge, cutting-edge technology, and a genuine
              commitment to both our clients and candidates.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To revolutionize the recruitment industry by leveraging technology, data-driven insights,
              and human expertise to create meaningful connections between talent and opportunity.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We operate with transparency and honesty in all our interactions.</p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>We strive for excellence in every placement and every relationship.</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We continuously evolve our methods to stay ahead of industry trends.</p>
              </div>
              <div className="value-card">
                <h3>Partnership</h3>
                <p>We build long-term relationships based on mutual success and trust.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced recruiters, industry specialists, and HR professionals
              who bring decades of combined expertise. We understand the nuances of different industries
              and the unique challenges companies face in finding the right talent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
