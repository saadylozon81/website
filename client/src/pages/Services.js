import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    badge: 'Most Popular',
    description:
      'We build blazing-fast, scalable web applications using modern frameworks and best practices. From marketing sites to complex SaaS platforms — we handle the full stack.',
    features: [
      'React / Next.js SPAs & SSR', 'Node.js & GraphQL APIs',
      'Real-time features (WebSockets)', 'Progressive Web Apps (PWA)',
      'E-commerce & payment integrations', 'CMS & headless architecture',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    badge: 'iOS & Android',
    description:
      'Cross-platform and native mobile apps that users love. We build performant, polished experiences for both iOS and Android from a single codebase — or native when performance demands it.',
    features: [
      'React Native & Flutter', 'Native iOS (Swift) & Android (Kotlin)',
      'Offline-first architecture', 'Push notifications & deep links',
      'App Store optimization', 'Mobile CI/CD pipelines',
    ],
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    badge: 'Infrastructure',
    description:
      'We design, build, and operate cloud infrastructure that scales automatically, recovers from failure, and keeps costs in check. From zero-downtime deployments to multi-region setups.',
    features: [
      'AWS, GCP & Azure architecture', 'Kubernetes & container orchestration',
      'CI/CD pipeline design', 'Infrastructure as Code (Terraform)',
      'Cost optimization audits', 'Disaster recovery planning',
    ],
    stack: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    badge: 'Cutting Edge',
    description:
      'We integrate AI capabilities into products in ways that feel natural and create genuine value. From LLM-powered features to custom ML models trained on your data.',
    features: [
      'LLM integration (OpenAI, Anthropic)', 'Custom model fine-tuning',
      'RAG & semantic search', 'Computer vision pipelines',
      'Recommendation engines', 'AI safety & content moderation',
    ],
    stack: ['Python', 'TensorFlow', 'LangChain', 'OpenAI', 'Pinecone', 'HuggingFace'],
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    badge: 'Enterprise Ready',
    description:
      'We help you build secure systems and achieve the certifications your enterprise clients demand. Security isn\'t a checkbox — it\'s baked into everything we build.',
    features: [
      'Penetration testing & VAPT', 'SOC2 Type II readiness',
      'GDPR & HIPAA compliance', 'OWASP Top 10 remediation',
      'Secure SDLC implementation', 'Incident response planning',
    ],
    stack: ['OWASP', 'Burp Suite', 'AWS IAM', 'Vault', 'Snyk', 'SonarQube'],
  },
  {
    icon: '📊',
    title: 'Data Engineering & Analytics',
    badge: 'Data-Driven',
    description:
      'We build the data infrastructure that powers smart decisions. From real-time event pipelines to self-serve analytics dashboards that your whole team can use.',
    features: [
      'ETL / ELT pipeline design', 'Real-time streaming (Kafka, Kinesis)',
      'Data warehouse architecture', 'Analytics dashboards',
      'Data quality & observability', 'Self-serve reporting platforms',
    ],
    stack: ['Apache Spark', 'dbt', 'BigQuery', 'Kafka', 'Airflow', 'Looker'],
  },
];

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="hero-bg-grid"></div>
        <div className="container services-hero-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            What We Build
          </span>
          <h1>Services built for<br />modern engineering teams</h1>
          <p className="lead">
            End-to-end software development — from MVP to enterprise scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={i}>
                <div className="service-card-header">
                  <div className="service-icon-box">{service.icon}</div>
                  <div className="service-card-header-text">
                    <h2>{service.title}</h2>
                    <span className="service-badge">{service.badge}</span>
                  </div>
                </div>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((f, fi) => (
                    <li key={fi}>{f}</li>
                  ))}
                </ul>
                <div className="service-tech-stack">
                  {service.stack.map(t => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section-page">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Delivery Process</span>
            <h2 className="section-title">How we deliver</h2>
          </div>
          <div className="process-steps">
            {[
              { n: '01', title: 'Requirements & Scope', desc: 'Technical deep-dive to define scope, architecture, and acceptance criteria.' },
              { n: '02', title: 'Architecture Design', desc: 'System design docs, ADRs, and tech stack decisions reviewed with your team.' },
              { n: '03', title: 'Iterative Development', desc: 'Two-week sprints with demos, PR reviews, and continuous deployment.' },
              { n: '04', title: 'QA & Launch', desc: 'Thorough testing, staging environment sign-off, and production monitoring.' },
            ].map((step, i) => (
              <div className="process-step-item" key={i}>
                <div className="step-circle">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-bg"></div>
        <div className="services-cta-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            Let's talk
          </span>
          <h2>Not sure what you need?</h2>
          <p>
            Tell us about your project and we'll recommend the right approach.
            No commitment, no sales pitch — just honest technical advice.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
