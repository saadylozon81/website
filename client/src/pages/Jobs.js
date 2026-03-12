import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Jobs.css';

const projects = [
  {
    id: 1,
    emoji: '💳',
    bg: 'linear-gradient(135deg, #1e293b, #312e81)',
    title: 'FinVault – Banking Platform',
    category: 'Web App',
    year: '2025',
    description: 'A modern digital banking platform serving 200k+ users with real-time transactions, fraud detection, and AI-powered insights.',
    stack: ['Next.js', 'Go', 'PostgreSQL', 'Kafka', 'AWS'],
    outcome: '300% faster transaction processing',
    type: 'Web',
  },
  {
    id: 2,
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #0f172a, #065f46)',
    title: 'MediTrack – Healthcare App',
    category: 'Mobile App',
    year: '2025',
    description: 'HIPAA-compliant patient management app for clinics. Features include appointment scheduling, EHR integration, and telemedicine.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Twilio', 'GCP'],
    outcome: '4.8 ★ App Store rating',
    type: 'Mobile',
  },
  {
    id: 3,
    emoji: '🚀',
    bg: 'linear-gradient(135deg, #1e293b, #4c1d95)',
    title: 'LaunchMetrics – SaaS Analytics',
    category: 'SaaS Platform',
    year: '2024',
    description: 'Product analytics SaaS for early-stage startups. Real-time dashboards, funnel analysis, and AI-powered growth recommendations.',
    stack: ['React', 'Python', 'BigQuery', 'dbt', 'Kubernetes'],
    outcome: '10M+ events/day processed',
    type: 'Web',
  },
  {
    id: 4,
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #0f172a, #7c2d12)',
    title: 'CartFlow – E-Commerce Engine',
    category: 'E-Commerce',
    year: '2024',
    description: 'Headless e-commerce platform with multi-vendor support, inventory management, and personalized recommendations for a $50M retailer.',
    stack: ['Next.js', 'Shopify API', 'Redis', 'Stripe', 'Algolia'],
    outcome: '45% increase in conversion rate',
    type: 'Web',
  },
  {
    id: 5,
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
    title: 'DocAI – Document Intelligence',
    category: 'AI / ML',
    year: '2024',
    description: 'AI-powered document processing pipeline that extracts structured data from contracts, invoices, and forms with 98% accuracy.',
    stack: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'Pinecone'],
    outcome: '80% reduction in manual processing',
    type: 'AI',
  },
  {
    id: 6,
    emoji: '🏗️',
    bg: 'linear-gradient(135deg, #1e293b, #1a3a4a)',
    title: 'InfraScale – DevOps Platform',
    category: 'Cloud / DevOps',
    year: '2023',
    description: 'Internal developer platform for a Fortune 500 company. Self-serve infrastructure provisioning, cost allocation, and compliance monitoring.',
    stack: ['Go', 'Kubernetes', 'Terraform', 'ArgoCD', 'AWS'],
    outcome: '60% infra cost reduction',
    type: 'DevOps',
  },
];

const filterOptions = ['All', 'Web', 'Mobile', 'AI', 'DevOps'];

function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg"></div>
        <div className="container portfolio-hero-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            Our Work
          </span>
          <h1>Products we're proud of</h1>
          <p className="lead">
            A selection of projects that showcase our technical depth, design sensibility,
            and ability to deliver at scale.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-filter">
            {filterOptions.map(opt => (
              <button
                key={opt}
                className={`filter-btn ${filter === opt ? 'active' : ''}`}
                onClick={() => setFilter(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="no-projects">No projects found in this category.</div>
          ) : (
            <div className="projects-grid">
              {filtered.map(project => (
                <div className="project-card" key={project.id}>
                  <div className="project-cover" style={{ background: project.bg }}>
                    <div className="project-cover-overlay"></div>
                    <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map(t => (
                        <span className="project-tech" key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <span className="project-outcome">✓ {project.outcome}</span>
                      <Link to="/contact" className="btn btn-small btn-outline">
                        Similar Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="portfolio-cta-bg"></div>
        <div className="portfolio-cta-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            Next up
          </span>
          <h2>Your project could be here</h2>
          <p>
            Let's talk about what you're building and how we can help
            bring it to life with the same care and quality.
          </p>
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
