import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow-2"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for new projects in 2026
            </div>
            <h1>
              We Build
              <span className="highlight">Digital Products</span>
              That Scale
            </h1>
            <p className="hero-description">
              From concept to deployment — we craft high-performance web apps, mobile experiences,
              and cloud solutions that drive real business growth.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
              <Link to="/contact" className="btn btn-secondary">Start a Project</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">150+</span>
                <span className="hero-stat-label">Projects Shipped</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">98%</span>
                <span className="hero-stat-label">Client Satisfaction</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">10+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-badges">
              <div className="float-badge">
                <span className="float-badge-icon">✅</span>
                Build deployed successfully
              </div>
              <div className="float-badge">
                <span className="float-badge-icon">🚀</span>
                Performance score: 99/100
              </div>
            </div>
            <div className="code-card">
              <div className="code-card-header">
                <div className="code-dot red"></div>
                <div className="code-dot yellow"></div>
                <div className="code-dot green"></div>
                <span className="code-filename">app.service.ts</span>
              </div>
              <div className="code-body">
                <code className="code-line"><span className="cm">// NexDev — Crafting excellence</span></code>
                <code className="code-line"> </code>
                <code className="code-line"><span className="kw">async function</span> <span className="fn">buildProduct</span>(<span className="obj">spec</span>) {'{'}</code>
                <code className="code-line">  <span className="kw">const</span> design = <span className="kw">await</span> <span className="fn">createUX</span>(spec);</code>
                <code className="code-line">  <span className="kw">const</span> api = <span className="kw">await</span> <span className="fn">buildAPI</span>(spec);</code>
                <code className="code-line">  <span className="kw">const</span> infra = <span className="kw">await</span> <span className="fn">deployCloud</span>({'{'}</code>
                <code className="code-line">    region: <span className="str">"us-east-1"</span>,</code>
                <code className="code-line">    scale: <span className="str">"auto"</span>,</code>
                <code className="code-line">  {'}'});</code>
                <code className="code-line"> </code>
                <code className="code-line">  <span className="kw">return</span> {'{'} design, api, infra,</code>
                <code className="code-line">    success: <span className="kw">true</span>,</code>
                <code className="code-line">    clients: <span className="str">"happy"</span> {'}'}</code>
                <code className="code-line">{'}'}</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Why NexDev</span>
            <h2 className="section-title">Engineering you can trust</h2>
            <p className="section-subtitle">
              We combine technical depth with product thinking to deliver software that lasts.
            </p>
          </div>
          <div className="features-grid">
            {[
              { icon: '⚡', title: 'Performance First', desc: 'We obsess over speed. Every product we ship scores 95+ on Core Web Vitals and is optimized for real-world conditions.' },
              { icon: '🏗️', title: 'Scalable Architecture', desc: 'Built to grow. Our systems handle 10x traffic spikes gracefully with cloud-native, microservices design patterns.' },
              { icon: '🔐', title: 'Security by Design', desc: 'Security is baked in from day one — OWASP compliance, data encryption, audit logs, and penetration testing.' },
              { icon: '🎨', title: 'Pixel-Perfect UI', desc: 'Beautiful, accessible interfaces designed with care. We follow WCAG 2.1 AA standards by default.' },
              { icon: '🔄', title: 'Agile & Transparent', desc: 'Two-week sprints, daily standups, and real-time dashboards so you always know exactly where your project stands.' },
              { icon: '🧪', title: 'Test Coverage', desc: 'Unit, integration, and E2E tests ensure your product works correctly — every time, in every environment.' },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon-wrap">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to ship</h2>
            <p className="section-subtitle">
              Full-stack expertise across web, mobile, cloud, and AI — all under one roof.
            </p>
          </div>
          <div className="services-preview-grid">
            {[
              {
                icon: '🌐', title: 'Web Development',
                desc: 'Full-stack web apps built with React, Next.js, Node, and more.',
                tags: ['React', 'Next.js', 'TypeScript', 'Node.js']
              },
              {
                icon: '📱', title: 'Mobile Development',
                desc: 'Cross-platform iOS & Android apps with React Native and Flutter.',
                tags: ['React Native', 'Flutter', 'Swift', 'Kotlin']
              },
              {
                icon: '☁️', title: 'Cloud & DevOps',
                desc: 'CI/CD pipelines, Kubernetes, and infrastructure-as-code at scale.',
                tags: ['AWS', 'GCP', 'Docker', 'Terraform']
              },
              {
                icon: '🤖', title: 'AI & ML Integration',
                desc: 'LLM integrations, recommendation engines, and custom ML models.',
                tags: ['OpenAI', 'TensorFlow', 'Python', 'LangChain']
              },
              {
                icon: '🛡️', title: 'Security & Compliance',
                desc: 'Penetration testing, SOC2, GDPR, and HIPAA compliance auditing.',
                tags: ['OWASP', 'SOC2', 'GDPR', 'PenTest']
              },
              {
                icon: '📊', title: 'Data Engineering',
                desc: 'ETL pipelines, real-time analytics, and data warehouse design.',
                tags: ['Spark', 'dbt', 'BigQuery', 'Kafka']
              },
            ].map((s, i) => (
              <div className="service-preview-card" key={i}>
                <div className="service-preview-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-preview-tags">
                  {s.tags.map(tag => <span className="service-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-bg"></div>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">80+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Retention</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">From idea to launch</h2>
            <p className="section-subtitle">
              A proven process refined over 10 years and 150+ projects.
            </p>
          </div>
          <div className="process-grid">
            {[
              { n: '01', title: 'Discovery', desc: 'We deep-dive into your goals, users, and tech constraints to define the right scope.' },
              { n: '02', title: 'Design', desc: 'Wireframes, prototypes, and a design system — validated with real users before we write a line of code.' },
              { n: '03', title: 'Build', desc: 'Agile sprints with weekly demos. You stay informed and in control throughout development.' },
              { n: '04', title: 'Launch', desc: 'CI/CD deployment, monitoring setup, and a hypercare period to ensure a flawless go-live.' },
            ].map((step, i) => (
              <div className="process-step" key={i}>
                <div className="process-number">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Loved by builders & founders</h2>
          </div>
          <div className="testimonials-grid">
            {[
              {
                stars: '★★★★★',
                text: '"NexDev rebuilt our entire platform in 4 months. Performance improved by 300% and our team productivity doubled. Genuinely one of the best engineering partners we\'ve worked with."',
                initials: 'SM', name: 'Sarah Mitchell', role: 'CTO at Finvest Technologies'
              },
              {
                stars: '★★★★★',
                text: '"They don\'t just write code — they think deeply about your product. The team caught architectural issues we\'d been ignoring for years and fixed them without disrupting our users."',
                initials: 'JK', name: 'James Kowalski', role: 'Founder at LaunchPad App'
              },
              {
                stars: '★★★★★',
                text: '"From MVP to Series A, NexDev has been with us every step. Their cloud infrastructure scaled seamlessly when we went from 1k to 100k users in six weeks."',
                initials: 'AR', name: 'Aisha Rahman', role: 'CEO at GreenTrack'
              },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">{t.stars}</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="hero-bg-grid"></div>
        <div className="hero-bg-glow"></div>
        <div className="cta-inner">
          <span className="section-tag" style={{ background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(129,140,248,0.3)', color: '#c7d2fe' }}>
            Ready to build?
          </span>
          <h2>Let's build something great together</h2>
          <p>
            Tell us about your project. We'll get back to you within 24 hours with ideas,
            questions, and a clear path forward.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
            <Link to="/portfolio" className="btn btn-secondary">See Our Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
