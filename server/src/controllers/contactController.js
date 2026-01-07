// Email validation helper
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation helper (optional field, but must be valid if provided)
const isValidPhone = (phone) => {
  // Accepts formats: +1-234-567-8900, (234) 567-8900, 234-567-8900, 234.567.8900, 2345678900
  const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone);
};

// Sanitize input to prevent XSS
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
};

// Submit contact form
exports.submitContactForm = (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Validate required fields exist
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name, email, subject, and message are required',
        required: ['name', 'email', 'subject', 'message']
      });
    }

    // Validate name
    if (typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid name',
        message: 'Name must be a non-empty string'
      });
    }

    if (name.trim().length < 2 || name.trim().length > 100) {
      return res.status(400).json({
        error: 'Invalid name length',
        message: 'Name must be between 2 and 100 characters'
      });
    }

    // Validate email format
    if (typeof email !== 'string' || !isValidEmail(email)) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Please provide a valid email address'
      });
    }

    if (email.length > 254) {
      return res.status(400).json({
        error: 'Invalid email length',
        message: 'Email address is too long'
      });
    }

    // Validate phone if provided
    if (phone && phone.trim().length > 0) {
      if (!isValidPhone(phone)) {
        return res.status(400).json({
          error: 'Invalid phone number',
          message: 'Please provide a valid phone number'
        });
      }
    }

    // Validate company if provided
    if (company && typeof company !== 'string') {
      return res.status(400).json({
        error: 'Invalid company',
        message: 'Company must be a string'
      });
    }

    if (company && company.length > 100) {
      return res.status(400).json({
        error: 'Invalid company length',
        message: 'Company name must not exceed 100 characters'
      });
    }

    // Validate subject
    if (typeof subject !== 'string' || subject.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid subject',
        message: 'Subject must be a non-empty string'
      });
    }

    if (subject.trim().length < 3 || subject.trim().length > 200) {
      return res.status(400).json({
        error: 'Invalid subject length',
        message: 'Subject must be between 3 and 200 characters'
      });
    }

    // Validate message
    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid message',
        message: 'Message must be a non-empty string'
      });
    }

    if (message.trim().length < 10 || message.trim().length > 5000) {
      return res.status(400).json({
        error: 'Invalid message length',
        message: 'Message must be between 10 and 5000 characters'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: email.trim().toLowerCase(),
      phone: phone ? sanitizeInput(phone) : null,
      company: company ? sanitizeInput(company) : null,
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
      ipAddress: req.ip || req.connection.remoteAddress
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // Log submission (without sensitive data in production)
    console.log('Contact form submission received:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      timestamp: sanitizedData.timestamp
    });

    // Simulate successful processing
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you shortly.',
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        submittedAt: sanitizedData.timestamp
      }
    });
  } catch (error) {
    console.error('Error processing contact form:', {
      error: error.message,
      stack: error.stack
    });
    res.status(500).json({
      error: 'Failed to process contact form',
      message: 'An unexpected error occurred while processing your submission. Please try again later.'
    });
  }
};
