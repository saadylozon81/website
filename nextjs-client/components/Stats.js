const stats = [
  {
    icon: 'bi-clock-history',
    number: '20+',
    label: 'Years of Technology Excellence',
  },
  {
    icon: 'bi-people-fill',
    number: '450+',
    label: 'Engineers',
  },
  {
    icon: 'bi-building-check',
    number: 'Enterprise',
    label: 'Grade Delivery',
  },
  {
    icon: 'bi-globe2',
    number: 'Global',
    label: 'Clients',
  },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-0">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="stat-item">
                <div style={{ marginBottom: '0.4rem' }}>
                  <i
                    className={`bi ${s.icon}`}
                    style={{ fontSize: '1.3rem', color: 'var(--yellow)' }}
                  />
                </div>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
