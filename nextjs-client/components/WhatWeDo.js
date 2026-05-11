const services = [
  {
    icon: 'bi-display',
    title: 'Software Engineering',
    desc: 'Robust, scalable, and future-ready software built with excellence.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'AI & Data Solutions',
    desc: 'AI-powered solutions and data engineering that drive impact.',
  },
  {
    icon: 'bi-cloud-arrow-up',
    title: 'Cloud & DevOps',
    desc: 'Cloud-native, secure, and optimized for performance.',
  },
  {
    icon: 'bi-check2-circle',
    title: 'QA & Test Automation',
    desc: 'Intelligent testing for high-quality and sustainable engineering.',
  },
  {
    icon: 'bi-flask',
    title: 'R&D Expansion',
    desc: 'Extend your R&D capabilities with our engineering expertise.',
  },
  {
    icon: 'bi-people',
    title: 'Dedicated Engineering Teams',
    desc: 'Dedicated teams aligned with your goals and culture.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="whatwedo-section" id="services">
      <div className="container">
        <div className="section-header-line">
          <span>What We Do</span>
        </div>

        <div className="row g-3">
          {services.map((s, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2">
              <div className="service-card">
                <i className={`bi ${s.icon} service-icon`} />
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
