const services = [
  {
    icon: 'bi-code-slash',
    title: 'Software Engineering',
    desc: 'Reliable, scalable, and well-crafted software built with engineering excellence at every layer.',
  },
  {
    icon: 'bi-cpu',
    title: 'AI & Data Engineering',
    desc: 'Harness data and AI to create actionable intelligence and products that drive real impact.',
  },
  {
    icon: 'bi-cloud-arrow-up-fill',
    title: 'Cloud & DevOps',
    desc: 'Accelerate cloud performance with high-confidence DevOps pipelines and infrastructure.',
  },
  {
    icon: 'bi-bug-fill',
    title: 'QA & Test Automation',
    desc: 'Sustainable engineering quality through automated testing and continuous QA practices.',
  },
  {
    icon: 'bi-flask-fill',
    title: 'R&D Excellence',
    desc: 'Dedicated R&D teams exploring the edges of technology to give your products a lasting edge.',
  },
  {
    icon: 'bi-person-workspace',
    title: 'Dedicated Engineering Teams',
    desc: 'Fully embedded, senior engineering teams aligned with your goals and delivery culture.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="whatwedo-section" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag">What We Do</p>
          <h2 className="section-title">End-to-End Technology Services</h2>
          <p className="section-desc mx-auto">
            We partner with companies to engineer, scale, and modernise their technology — from
            core infrastructure to cutting-edge AI products.
          </p>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${s.icon}`} />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
