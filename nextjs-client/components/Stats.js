const stats = [
  { icon: 'bi-code-square',   number: '20+',          label: 'Years of Technology\nDelivery' },
  { icon: 'bi-people',        number: '450+',         label: 'Engineers' },
  { icon: 'bi-building',      number: 'Enterprise‑Grade', label: 'Delivery' },
  { icon: 'bi-globe2',        number: 'Global',       label: 'Clients' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-card">
          <div className="row g-0">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <div className="stat-info">
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
