import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive talent acquisition solutions tailored to your needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="service-item">
            <div className="service-header">
              <div className="service-icon">🔍</div>
              <h2>Executive Search</h2>
            </div>
            <p>
              Our executive search services help you find top-tier leadership talent for C-suite
              and senior management positions. We leverage our extensive network and industry
              expertise to identify and attract the best candidates for your organization.
            </p>
            <ul>
              <li>C-Level and VP-level placements</li>
              <li>Board member recruitment</li>
              <li>Leadership assessment and profiling</li>
              <li>Succession planning support</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-icon">👥</div>
              <h2>Permanent Recruitment</h2>
            </div>
            <p>
              Find the perfect permanent employees for your organization. Our comprehensive
              recruitment process ensures you get qualified candidates who align with your
              company culture and values.
            </p>
            <ul>
              <li>Full-time position recruitment</li>
              <li>Industry-specific expertise</li>
              <li>Comprehensive candidate screening</li>
              <li>Background and reference checks</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-icon">⏱️</div>
              <h2>Contract Staffing</h2>
            </div>
            <p>
              Flexible staffing solutions for project-based work, seasonal demands, or temporary
              coverage. We provide skilled professionals ready to hit the ground running.
            </p>
            <ul>
              <li>Contract and temporary staffing</li>
              <li>Contract-to-hire options</li>
              <li>Project-based teams</li>
              <li>Seasonal workforce solutions</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-icon">💼</div>
              <h2>Recruitment Process Outsourcing (RPO)</h2>
            </div>
            <p>
              Let us manage your entire recruitment process or specific aspects of it. Our RPO
              services provide scalable, cost-effective solutions for high-volume hiring needs.
            </p>
            <ul>
              <li>Full-cycle recruitment management</li>
              <li>Scalable hiring solutions</li>
              <li>Employer branding support</li>
              <li>Recruitment analytics and reporting</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-icon">🎓</div>
              <h2>Talent Consulting</h2>
            </div>
            <p>
              Strategic advisory services to optimize your talent acquisition strategy and
              improve your hiring processes for long-term success.
            </p>
            <ul>
              <li>Recruitment strategy development</li>
              <li>Employer branding consultation</li>
              <li>Interview training and best practices</li>
              <li>Market intelligence and salary benchmarking</li>
            </ul>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-icon">🌐</div>
              <h2>Global Recruitment</h2>
            </div>
            <p>
              Expand your talent search worldwide. We help you navigate international hiring
              with expertise in global compliance, cultural fit, and remote workforce management.
            </p>
            <ul>
              <li>International candidate sourcing</li>
              <li>Global compliance support</li>
              <li>Remote team building</li>
              <li>Cross-cultural assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Let's Discuss Your Hiring Needs</h2>
          <p>Contact us today to learn how our services can help you build the team you need.</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}

export default Services;
