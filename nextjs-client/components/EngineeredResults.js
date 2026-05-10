const results = [
  {
    tag: 'Model',
    title: 'Staff Augmentation',
    desc: 'Embed pre-vetted engineers directly into your team for seamless delivery.',
    gradient: 'linear-gradient(135deg, #1a2a3a 0%, #0d1f2d 50%, #091520 100%)',
    icon: 'bi-people-fill',
  },
  {
    tag: 'Model',
    title: 'Fractional Engineering Teams',
    desc: 'Fully managed, cross-functional product teams built around your roadmap.',
    gradient: 'linear-gradient(135deg, #1e1a0f 0%, #2a2010 50%, #1a1408 100%)',
    icon: 'bi-grid-3x3-gap-fill',
  },
  {
    tag: 'Centre',
    title: 'R&D Expansion Centers',
    desc: "Dedicated R&D hubs extending your company's innovation capacity globally.",
    gradient: 'linear-gradient(135deg, #0f1a2a 0%, #102030 50%, #0a1520 100%)',
    icon: 'bi-lightbulb-fill',
  },
]

export default function EngineeredResults() {
  return (
    <section className="results-section" id="results">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag">Engineered Results</p>
          <h2 className="section-title">Delivery Models That Scale</h2>
          <p className="section-desc mx-auto">
            Choose the engagement that fits your business — all backed by ASAL&apos;s engineering
            rigour and delivery culture.
          </p>
        </div>

        <div className="row g-4">
          {results.map((r, i) => (
            <div key={i} className="col-md-4">
              <div className="result-card">
                <div
                  className="result-card-bg"
                  style={{ background: r.gradient }}
                />

                {/* Decorative grid lines */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(rgba(255,184,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,184,0,0.03) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Large icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    fontSize: '5rem',
                    color: 'rgba(255,184,0,0.08)',
                  }}
                >
                  <i className={`bi ${r.icon}`} />
                </div>

                <div className="result-card-overlay" />

                <div className="result-card-content">
                  <div className="result-tag">
                    <i className="bi bi-bookmark-fill me-1" />
                    {r.tag}
                  </div>
                  <h3 className="result-title">{r.title}</h3>
                  <p className="result-desc mb-0">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
