const models = [
  {
    icon: 'bi-people-fill',
    title: 'Staff Augmentation',
    desc: 'Access specialized talent on-demand.',
    bg: 'linear-gradient(160deg,#1b2e44 0%,#0d1e30 60%,#071525 100%)',
    dots: ['#22d3ee','#3b82f6','#818cf8'],
  },
  {
    icon: 'bi-person-workspace',
    title: 'Dedicated Engineering Teams',
    desc: 'Build dedicated teams that deliver.',
    bg: 'linear-gradient(160deg,#1e2440 0%,#111930 60%,#080e1f 100%)',
    dots: ['#34d399','#10b981','#6ee7b7'],
  },
  {
    icon: 'bi-globe2',
    title: 'R&D Expansion Centers',
    desc: 'Extend your R&D with our global presence.',
    bg: 'linear-gradient(160deg,#162035 0%,#0d1826 60%,#071020 100%)',
    dots: ['#f59e0b','#fbbf24','#fde68a'],
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
                <div className="engage-bg" style={{ background: m.bg }} />

                {/* Grid texture */}
                <div style={{
                  position:'absolute', inset:0,
                  backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
                  backgroundSize:'28px 28px',
                }} />

                {/* Coloured glow orbs (unique per card) */}
                {m.dots.map((color, j) => (
                  <div key={j} style={{
                    position:'absolute',
                    width: 6+j*2, height: 6+j*2,
                    borderRadius:'50%',
                    background: color,
                    opacity: 0.55,
                    top:`${18+j*22}%`,
                    right:`${12+j*15}%`,
                    boxShadow:`0 0 12px ${color}`,
                  }} />
                ))}

                {/* Team silhouette pattern */}
                <div style={{
                  position:'absolute', top:'50%', left:'50%',
                  transform:'translate(-50%,-50%)',
                  fontSize:'7rem',
                  color:'rgba(255,255,255,0.035)',
                  lineHeight:1,
                }}>
                  <i className={`bi ${m.icon}`} />
                </div>

                <div className="engage-overlay" />

                <div className="engage-icon-badge">
                  <i className={`bi ${m.icon}`} />
                </div>

                <div className="engage-content">
                  <h3 className="engage-title">{m.title}</h3>
                  <p className="engage-desc mb-0">{m.desc}</p>
                </div>

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
