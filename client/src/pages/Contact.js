import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container contact-hero-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            Get in Touch
          </span>
          <h1>Let's build something<br />great together</h1>
          <p className="lead">
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info-side">
              <h2>How can we help?</h2>
              <p>
                Whether you're starting from scratch, scaling an existing product,
                or need specialized engineering support — we'd love to hear from you.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">✉</div>
                  <div className="contact-info-text">
                    <h4>Email Us</h4>
                    <p>hello@nexdev.io</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon">📞</div>
                  <div className="contact-info-text">
                    <h4>Call Us</h4>
                    <p>+1 (555) 000-1234</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon">📍</div>
                  <div className="contact-info-text">
                    <h4>Location</h4>
                    <p>San Francisco, CA &amp; Remote</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon">🕐</div>
                  <div className="contact-info-text">
                    <h4>Response Time</h4>
                    <p>Within 24 hours on business days</p>
                  </div>
                </div>
              </div>

              <div className="contact-availability">
                <div className="availability-dot"></div>
                <p>Currently accepting new projects for Q2 2026</p>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-side">
              <h2>Send us a message</h2>
              <p>Fill in the details below and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text" id="name" name="name"
                      placeholder="Jane Smith"
                      value={formData.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work Email *</label>
                    <input
                      type="email" id="email" name="email"
                      placeholder="jane@company.com"
                      value={formData.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text" id="company" name="company"
                      placeholder="Acme Corp"
                      value={formData.company} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="ai">AI & ML</option>
                      <option value="data">Data Engineering</option>
                      <option value="security">Security & Compliance</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select a range...</option>
                    <option value="lt10k">Under $10,000</option>
                    <option value="10-50k">$10,000 – $50,000</option>
                    <option value="50-100k">$50,000 – $100,000</option>
                    <option value="100-250k">$100,000 – $250,000</option>
                    <option value="gt250k">$250,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe your project, goals, timeline, and any technical requirements..."
                    value={formData.message} onChange={handleChange}
                    rows="5" required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>

                  {status === 'success' && (
                    <p className="form-message success">
                      ✓ Message sent! We'll be in touch within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="form-message error">
                      Something went wrong. Please email us directly at hello@nexdev.io
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
