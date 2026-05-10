export default function Hero() {
  const cubes = [
    { size: 'sm', delay: '0s', dur: '3.5s' },
    { size: '', delay: '0.4s', dur: '4s' },
    { size: 'lg active', delay: '0.8s', dur: '3s' },
    { size: '', delay: '0.2s', dur: '4.5s' },
    { size: 'active', delay: '0.6s', dur: '3.8s' },
    { size: 'sm', delay: '1s', dur: '4.2s' },
    { size: 'lg', delay: '0.3s', dur: '3.2s' },
    { size: '', delay: '0.7s', dur: '4.8s' },
    { size: 'sm active', delay: '0.1s', dur: '3.6s' },
  ]

  return (
    <section className="hero-section" id="home">
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          {/* Left – Text */}
          <div className="col-lg-6 col-xl-6">
            <div className="hero-tag">
              <i className="bi bi-lightning-charge-fill me-1" />
              Trusted by Enterprise Teams Worldwide
            </div>

            <h1 className="hero-heading">
              Engineering the Future of{' '}
              <span className="highlight">Digital, AI,</span> and Cloud Solutions
            </h1>

            <p className="hero-description">
              ASAL Technologies helps you build, modernise, and scale technology products through
              end‑to‑end engineering quality and trusted delivery models.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary-asal">
                Start a Conversation <i className="bi bi-arrow-right" />
              </a>
              <a href="#services" className="btn-outline-asal">
                Explore Our Services <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>

          {/* Right – Cube Visual */}
          <div className="col-lg-6 col-xl-6 d-flex justify-content-center">
            <div className="cube-container">
              <div className="cube-glow" />
              <div className="cube-grid">
                {cubes.map((c, i) => (
                  <div
                    key={i}
                    className={`cube-box ${c.size}`}
                    style={{ '--delay': c.delay, '--dur': c.dur }}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '8%',
                  left: '5%',
                  background: 'rgba(13, 20, 34, 0.92)',
                  border: '1px solid rgba(255,184,0,0.3)',
                  borderRadius: 10,
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span style={{ fontSize: '1.4rem', color: '#FFB800' }}>
                  <i className="bi bi-shield-check-fill" />
                </span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#8a99b5', marginBottom: 2 }}>
                    Enterprise Grade
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>
                    Quality Delivery
                  </div>
                </div>
              </div>

              {/* Top-right badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '4%',
                  background: 'rgba(13, 20, 34, 0.92)',
                  border: '1px solid rgba(255,184,0,0.3)',
                  borderRadius: 10,
                  padding: '10px 16px',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFB800', lineHeight: 1 }}
                >
                  450+
                </div>
                <div style={{ fontSize: '0.72rem', color: '#8a99b5', marginTop: 2 }}>Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
