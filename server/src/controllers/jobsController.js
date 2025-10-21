const jobs = require('../models/jobs');

// Get all jobs
exports.getAllJobs = (req, res) => {
  try {
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};

// Get job by ID
exports.getJobById = (req, res) => {
  try {
    const job = jobs.find(j => j.id === parseInt(req.params.id));
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching job' });
  }
};

// Create new job
exports.createJob = (req, res) => {
  try {
    const newJob = {
      id: jobs.length + 1,
      ...req.body
    };
    jobs.push(newJob);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Error creating job' });
  }
};
