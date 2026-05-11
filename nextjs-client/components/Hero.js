export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container py-5">
        <div className="row align-items-center gy-5">

          {/* Left */}
          <div className="col-lg-6">
            <h1 className="hero-heading">
              Engineering the Future of Digital,{' '}
              <span className="highlight">AI,</span> and<br />Cloud Solutions
            </h1>
            <p className="hero-desc">
              ASAL Technologies helps enterprises and scale-ups build, modernize, and scale
              technology products through high-quality engineering teams and trusted delivery models.
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

          {/* Right — tech visual */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-visual">
              <div className="tech-stack">

                {/* Cloud on top */}
                <div className="cloud-top">
                  <i className="bi bi-cloud-fill cloud-icon" />
                </div>

                {/* Side cubes */}
                <div className="tech-cube cube-sm c1">
                  <i className="bi bi-code-slash" />
                </div>
                <div className="tech-cube cube-sm c2">
                  <i className="bi bi-diagram-3" />
                </div>
                <div className="tech-cube cube-sm c3">
                  <i className="bi bi-shield-check" />
                </div>
                <div className="tech-cube cube-sm c4">
                  <i className="bi bi-cpu" />
                </div>
                <div className="tech-cube cube-sm c5">
                  <i className="bi bi-layers" />
                </div>
                <div className="tech-cube cube-sm c6">
                  <i className="bi bi-gear" />
                </div>

                {/* Center main cube with glow */}
                <div className="tech-cube cube-main" style={{ '--d': '0s', '--dur': '4s' }} />

                {/* Platform base */}
                <div className="tech-platform" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
