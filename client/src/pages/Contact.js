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
  const [errorDetails, setErrorDetails] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Client-side validation helpers
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Name must not exceed 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 254) {
      errors.email = 'Email is too long';
    }

    // Phone validation (optional)
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Company validation (optional)
    if (formData.company && formData.company.length > 100) {
      errors.company = 'Company name must not exceed 100 characters';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    } else if (formData.subject.trim().length > 200) {
      errors.subject = 'Subject must not exceed 200 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 5000) {
      errors.message = 'Message must not exceed 5000 characters';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: null
      });
    }

    // Clear general error when user modifies form
    if (errorDetails) {
      setErrorDetails(null);
      setStatus('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setValidationErrors({});
    setErrorDetails(null);

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setStatus('sending');

    try {
      // Add timeout to request (10 seconds)
      const response = await axios.post('/api/contact', formData, {
        timeout: 10000
      });

      setStatus('success');
      setErrorDetails(null);

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');

      // Determine error type and set appropriate message
      let errorMessage = 'Failed to send message';
      let errorDescription = '';

      if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
        errorMessage = 'Request timed out';
        errorDescription = 'The server took too long to respond. Please check your internet connection and try again.';
      } else if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const data = error.response.data;

        if (status === 400) {
          errorMessage = 'Validation error';
          errorDescription = data?.message || 'Please check your input and try again.';

          // If server returns field-specific errors, map them to validation errors
          if (data?.required) {
            const fieldErrors = {};
            data.required.forEach(field => {
              fieldErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            });
            setValidationErrors(fieldErrors);
          }
        } else if (status === 500) {
          errorMessage = 'Server error';
          errorDescription = data?.message || 'The server encountered an error. Please try again later.';
        } else if (status === 404) {
          errorMessage = 'Service unavailable';
          errorDescription = 'The contact service is currently unavailable.';
        } else {
          errorMessage = 'Server error';
          errorDescription = data?.message || 'An unexpected server error occurred.';
        }
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'Network error';
        errorDescription = 'Unable to connect to the server. Please check your internet connection and try again.';
      } else {
        // Something else happened
        errorMessage = 'Unexpected error';
        errorDescription = error.message || 'An unexpected error occurred. Please try again.';
      }

      setErrorDetails({
        title: errorMessage,
        message: errorDescription
      });
    }
  };

  const handleRetry = () => {
    setStatus('');
    setErrorDetails(null);
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

              {errorDetails && (
                <div style={{
                  background: '#f8d7da',
                  border: '1px solid #f5c2c7',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ color: '#842029', marginBottom: '8px', marginTop: 0 }}>
                    {errorDetails.title}
                  </h4>
                  <p style={{ color: '#842029', marginBottom: '10px' }}>
                    {errorDetails.message}
                  </p>
                  <button
                    onClick={handleRetry}
                    className="btn"
                    style={{
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      fontSize: '14px'
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={validationErrors.name ? { borderColor: '#dc3545' } : {}}
                  />
                  {validationErrors.name && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px', display: 'block' }}>
                      {validationErrors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={validationErrors.email ? { borderColor: '#dc3545' } : {}}
                  />
                  {validationErrors.email && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px', display: 'block' }}>
                      {validationErrors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={validationErrors.phone ? { borderColor: '#dc3545' } : {}}
                  />
                  {validationErrors.phone && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px', display: 'block' }}>
                      {validationErrors.phone}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={validationErrors.company ? { borderColor: '#dc3545' } : {}}
                  />
                  {validationErrors.company && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px', display: 'block' }}>
                      {validationErrors.company}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={validationErrors.subject ? { borderColor: '#dc3545' } : {}}
                  />
                  {validationErrors.subject && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px', display: 'block' }}>
                      {validationErrors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    style={validationErrors.message ? { borderColor: '#dc3545' } : {}}
                  ></textarea>
                  {validationErrors.message && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px', display: 'block' }}>
                      {validationErrors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="form-message success" style={{
                    background: '#d1e7dd',
                    border: '1px solid #badbcc',
                    borderRadius: '8px',
                    padding: '12px',
                    marginTop: '15px',
                    color: '#0f5132'
                  }}>
                    Message sent successfully! We'll get back to you soon.
                  </p>
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
