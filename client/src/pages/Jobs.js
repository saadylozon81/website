import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Use mock data if API is not available
      setJobs(mockJobs);
      setLoading(false);
    }
  };

  const mockJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      category: 'Technology',
      description: 'We are seeking an experienced software engineer to join our growing team...',
      salary: '$120k - $160k'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Brand Solutions Inc',
      location: 'New York, NY',
      type: 'Full-time',
      category: 'Marketing',
      description: 'Lead our marketing initiatives and drive brand awareness...',
      salary: '$90k - $120k'
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Analytics Plus',
      location: 'Remote',
      type: 'Contract',
      category: 'Data Science',
      description: 'Analyze complex datasets and provide actionable insights...',
      salary: '$80k - $100k'
    },
    {
      id: 4,
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'Austin, TX',
      type: 'Full-time',
      category: 'Design',
      description: 'Create intuitive and beautiful user experiences...',
      salary: '$85k - $110k'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      location: 'Seattle, WA',
      type: 'Full-time',
      category: 'Technology',
      description: 'Manage and optimize our cloud infrastructure...',
      salary: '$110k - $145k'
    },
    {
      id: 6,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Boston, MA',
      type: 'Full-time',
      category: 'Product',
      description: 'Drive product strategy and roadmap development...',
      salary: '$105k - $140k'
    }
  ];

  const filteredJobs = filter === 'all'
    ? jobs
    : jobs.filter(job => job.type.toLowerCase() === filter);

  const categories = [...new Set(jobs.map(job => job.category))];

  return (
    <div className="jobs">
      <section className="jobs-hero">
        <div className="container">
          <h1>Current Opportunities</h1>
          <p className="lead">Discover your next career move</p>
        </div>
      </section>

      <section className="jobs-content">
        <div className="container">
          <div className="jobs-filter">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All Jobs
            </button>
            <button
              className={filter === 'full-time' ? 'active' : ''}
              onClick={() => setFilter('full-time')}
            >
              Full-time
            </button>
            <button
              className={filter === 'contract' ? 'active' : ''}
              onClick={() => setFilter('contract')}
            >
              Contract
            </button>
            <button
              className={filter === 'remote' ? 'active' : ''}
              onClick={() => setFilter('remote')}
            >
              Remote
            </button>
          </div>

          {loading ? (
            <div className="loading">Loading jobs...</div>
          ) : (
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <p className="job-company">{job.company}</p>
                  <p className="job-location">{job.location}</p>
                  <p className="job-description">{job.description}</p>
                  <div className="job-footer">
                    <span className="job-salary">{job.salary}</span>
                    <button className="btn btn-small">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredJobs.length === 0 && !loading && (
            <div className="no-jobs">
              <p>No jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Jobs;
