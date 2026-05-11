const models = [
  {
    icon: 'bi-people-fill',
    title: 'Staff Augmentation',
    desc: 'Access specialized talent on-demand.',
    bg: 'linear-gradient(135deg, #1a2535 0%, #0d1a2a 100%)',
    overlay: 'rgba(15,25,45,0.55)',
    pattern: true,
  },
  {
    icon: 'bi-person-workspace',
    title: 'Dedicated Engineering Teams',
    desc: 'Build dedicated teams that deliver.',
    bg: 'linear-gradient(135deg, #1e2030 0%, #12182a 100%)',
    overlay: 'rgba(15,20,40,0.55)',
    pattern: true,
  },
  {
    icon: 'bi-globe2',
    title: 'R&D Expansion Centers',
    desc: 'Extend your R&D with our global presence.',
    bg: 'linear-gradient(135deg, #0f1e30 0%, #0a1525 100%)',
    overlay: 'rgba(10,20,35,0.55)',
    pattern: true,
  },
]

export default function EngineeredResults() {
  return (
    <section className="engagement-section" id="engagement">
      <div className="container">
        <div className="section-header-line">
          <span>Engagement Models</span>
        </div>

        <div className="row g-4">
          {models.map((m, i) => (
            <div key={i} className="col-md-4">
              <div className="engage-card">
                {/* Background */}
                <div
                  className="engage-bg"
                  style={{
                    background: m.bg,
                  }}
                />

                {/* Grid pattern overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }} />

                {/* Decorative floating dots */}
                {[...Array(6)].map((_, j) => (
                  <div key={j} style={{
                    position: 'absolute',
                    width: 4, height: 4,
                    borderRadius: '50%',
                    background: 'rgba(255,184,0,0.4)',
                    top: `${15 + j * 12}%`,
                    left: `${60 + (j % 3) * 12}%`,
                  }} />
                ))}

                <div className="engage-overlay" />

                {/* Icon badge */}
                <div className="engage-icon-badge">
                  <i className={`bi ${m.icon}`} />
                </div>

                {/* Content */}
                <div className="engage-content">
                  <h3 className="engage-title">{m.title}</h3>
                  <p className="engage-desc">{m.desc}</p>
                </div>

                {/* Arrow button */}
                <div className="engage-arrow">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
