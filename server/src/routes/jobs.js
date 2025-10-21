const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

// GET all jobs
router.get('/', jobsController.getAllJobs);

// GET job by ID
router.get('/:id', jobsController.getJobById);

// POST new job (for admin use)
router.post('/', jobsController.createJob);

module.exports = router;
