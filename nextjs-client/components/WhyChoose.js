const reasons = [
  {
    icon: 'bi-person-gear',
    title: 'Dedicated Engineering Team',
    desc: 'Senior engineers fully committed to your product goals and culture.',
  },
  {
    icon: 'bi-layers-fill',
    title: 'Engagement Models',
    desc: 'Flexible models — staff augmentation, managed teams, or project delivery.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Fast Scaling',
    desc: 'Ramp up engineering capacity in days, not months.',
  },
  {
    icon: 'bi-truck',
    title: 'Delivery Culture',
    desc: 'Execution-focused culture with transparent progress and outcomes.',
  },
  {
    icon: 'bi-tools',
    title: 'Technology Resources',
    desc: 'Access to a broad technology bench and domain expertise.',
  },
]

export default function WhyChoose() {
  return (
    <section className="why-section" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag">Why Companies Choose ASAL</p>
          <h2 className="section-title">Built for Enterprise Trust</h2>
          <p className="section-desc mx-auto">
            We deliver reliable, transparent, and scalable engineering partnerships that grow with
            your ambition.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {reasons.map((r, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg">
              <div className="why-card">
                <div className="why-icon">
                  <i className={`bi ${r.icon}`} />
                </div>
                <h3 className="why-title">{r.title}</h3>
                <p className="why-desc mb-0">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
