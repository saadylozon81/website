const reasons = [
  { icon: 'bi-person-check', title: 'High-quality\nEngineering Talent' },
  { icon: 'bi-check2-all',   title: 'Flexible\nEngagement Models' },
  { icon: 'bi-rocket',       title: 'Fast\nTeam Scaling' },
  { icon: 'bi-shield-check', title: 'Strong\nDelivery Culture' },
  { icon: 'bi-handshake',    title: 'Long-term\nTechnology Partnership' },
]

export default function WhyChoose() {
  return (
    <section className="why-section" id="about">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Left title */}
          <div className="col-lg-3 col-md-12">
            <div className="why-title-block">
              <div className="pre">Why Companies<br />Choose ASAL</div>
              <div className="underline" />
            </div>
          </div>

          {/* Right items */}
          <div className="col-lg-9 col-md-12">
            <div className="row g-3">
              {reasons.map((r, i) => (
                <div key={i} className="col-6 col-sm-4 col-md">
                  <div className="why-item">
                    <div className="why-icon">
                      <i className={`bi ${r.icon}`} />
                    </div>
                    <div className="why-item-title" style={{ whiteSpace: 'pre-line' }}>
                      {r.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
