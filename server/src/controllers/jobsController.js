const jobs = require('../models/jobs');

// Get all jobs
exports.getAllJobs = (req, res) => {
  try {
    // Validate that jobs data exists
    if (!Array.isArray(jobs)) {
      console.error('Jobs data is not an array');
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Jobs data is unavailable'
      });
    }

    res.json(jobs);
  } catch (error) {
    console.error('Error in getAllJobs:', error.message);
    res.status(500).json({
      error: 'Failed to fetch jobs',
      message: 'An unexpected error occurred while retrieving jobs'
    });
  }
};

// Get job by ID
exports.getJobById = (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID parameter
    if (!id) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Job ID is required'
      });
    }

    const jobId = parseInt(id);

    // Validate ID is a valid number
    if (isNaN(jobId) || jobId <= 0) {
      return res.status(400).json({
        error: 'Invalid job ID',
        message: 'Job ID must be a positive integer'
      });
    }

    // Find the job
    const job = jobs.find(j => j.id === jobId);

    if (!job) {
      return res.status(404).json({
        error: 'Job not found',
        message: `No job found with ID ${jobId}`
      });
    }

    res.json(job);
  } catch (error) {
    console.error('Error in getJobById:', error.message);
    res.status(500).json({
      error: 'Failed to fetch job',
      message: 'An unexpected error occurred while retrieving the job'
    });
  }
};

// Create new job
exports.createJob = (req, res) => {
  try {
    const { title, department, location, type, description, requirements, benefits } = req.body;

    // Validate required fields
    if (!title || !department || !location || !type) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Title, department, location, and type are required',
        required: ['title', 'department', 'location', 'type']
      });
    }

    // Validate field types and lengths
    if (typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid title',
        message: 'Title must be a non-empty string'
      });
    }

    if (title.length > 100) {
      return res.status(400).json({
        error: 'Invalid title',
        message: 'Title must not exceed 100 characters'
      });
    }

    if (typeof department !== 'string' || department.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid department',
        message: 'Department must be a non-empty string'
      });
    }

    if (typeof location !== 'string' || location.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid location',
        message: 'Location must be a non-empty string'
      });
    }

    // Validate job type
    const validTypes = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'];
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        error: 'Invalid job type',
        message: `Job type must be one of: ${validTypes.join(', ')}`,
        validTypes
      });
    }

    // Generate new ID safely (find max ID and add 1)
    const maxId = jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) : 0;

    const newJob = {
      id: maxId + 1,
      title: title.trim(),
      department: department.trim(),
      location: location.trim(),
      type,
      description: description ? description.trim() : '',
      requirements: requirements || [],
      benefits: benefits || [],
      postedDate: new Date().toISOString()
    };

    jobs.push(newJob);

    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      job: newJob
    });
  } catch (error) {
    console.error('Error in createJob:', error.message);
    res.status(500).json({
      error: 'Failed to create job',
      message: 'An unexpected error occurred while creating the job'
    });
  }
};
