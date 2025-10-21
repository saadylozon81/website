// Submit contact form
exports.submitContactForm = (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message']
      });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: { name, email, subject }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Error processing contact form' });
  }
};
