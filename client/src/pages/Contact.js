import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post('/api/contact', formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="lead">We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                Whether you're looking to hire top talent or seeking your next career opportunity,
                we're here to help. Reach out to us and let's discuss how we can assist you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>info@talentpro.com</p>
                </div>
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h3>Address</h3>
                  <p>123 Business Street<br />Suite 100<br />New York, NY 10001</p>
                </div>
                <div className="contact-item">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="form-message success">Message sent successfully! We'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="form-message error">Error sending message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
