import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      // Add timeout to request (10 seconds)
      const response = await axios.get('/api/jobs', {
        timeout: 10000
      });

      // Validate response data
      if (!Array.isArray(response.data)) {
        throw new Error('Invalid response format from server');
      }

      setJobs(response.data);
      setLoading(false);
      setRetryCount(0); // Reset retry count on success
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);

      // Determine error type and set appropriate message
      let errorMessage = 'Unable to load jobs';
      let errorDetails = '';
      let shouldUseMockData = false;

      if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
        errorMessage = 'Request timed out';
        errorDetails = 'The server took too long to respond. Please check your internet connection and try again.';
        shouldUseMockData = true;
      } else if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        if (status === 404) {
          errorMessage = 'Jobs endpoint not found';
          errorDetails = 'The jobs API is currently unavailable.';
          shouldUseMockData = true;
        } else if (status === 500) {
          errorMessage = 'Server error';
          errorDetails = error.response.data?.message || 'The server encountered an error. Please try again later.';
          shouldUseMockData = true;
        } else if (status >= 400 && status < 500) {
          errorMessage = 'Bad request';
          errorDetails = error.response.data?.message || 'Invalid request to the server.';
        } else {
          errorMessage = 'Server error';
          errorDetails = 'An unexpected server error occurred.';
          shouldUseMockData = true;
        }
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'Network error';
        errorDetails = 'Unable to connect to the server. Please check your internet connection.';
        shouldUseMockData = true;
      } else {
        // Something else happened
        errorMessage = 'Unexpected error';
        errorDetails = error.message || 'An unexpected error occurred.';
      }

      setError({
        message: errorMessage,
        details: errorDetails,
        canRetry: true
      });

      // Use mock data as fallback for certain errors
      if (shouldUseMockData) {
        setJobs(mockJobs);
      }
    }
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    fetchJobs();
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

          {error && (
            <div className="error-message" style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              padding: '20px',
              margin: '20px 0',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#856404', marginBottom: '10px' }}>
                {error.message}
              </h3>
              <p style={{ color: '#856404', marginBottom: '15px' }}>
                {error.details}
              </p>
              {error.canRetry && (
                <button
                  onClick={handleRetry}
                  className="btn"
                  style={{ marginRight: '10px' }}
                >
                  Retry
                </button>
              )}
              {jobs.length > 0 && (
                <p style={{ color: '#856404', marginTop: '15px', fontSize: '14px' }}>
                  Showing sample data as fallback
                </p>
              )}
            </div>
          )}

          {loading ? (
            <div className="loading">
              <p>Loading jobs...</p>
              {retryCount > 0 && <p style={{ fontSize: '14px', marginTop: '10px' }}>Attempt {retryCount + 1}</p>}
            </div>
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

          {filteredJobs.length === 0 && !loading && !error && (
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
