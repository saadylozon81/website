export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container py-5">
        <div className="row align-items-center gy-5">

          {/* ── Left text ── */}
          <div className="col-lg-6 col-xl-5">
            <h1 className="hero-heading">
              Engineering the Future of Digital,{' '}
              <span className="highlight">AI,</span> and Cloud Solutions
            </h1>
            <p className="hero-desc">
              ASAL Technologies helps enterprises and scale-ups build, modernize, and scale
              technology products through high-quality engineering teams and trusted delivery models.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary-asal">
                Start a Conversation &nbsp;<i className="bi bi-arrow-right" />
              </a>
              <a href="#services" className="btn-outline-asal">
                Explore Our Services &nbsp;<i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>

          {/* ── Right 3-D visual ── */}
          <div className="col-lg-6 col-xl-7 d-flex justify-content-center">
            <div className="hero-visual-wrap">

              {/* Cloud */}
              <div className="vis-cloud">
                <i className="bi bi-cloud-fill vis-cloud-icon" />
              </div>

              {/* Connecting line from cloud to stack */}
              <div className="vis-line" style={{ height:60, top:90, left:'50%', transform:'translateX(-0.5px)' }} />

              {/* Glow cube (centre accent) */}
              <div className="vis-glow-cube">
                <div className="vis-glow-inner" />
              </div>

              {/* Server stack */}
              <div className="vis-main-stack">
                <div className="vis-server vs-sm">
                  <div className="vs-led on"  style={{ animationDelay:'.2s' }} />
                  <div className="vs-led off" />
                  <div className="vs-led on"  style={{ animationDelay:'1s' }} />
                </div>
                <div className="vis-server vs-md">
                  <div className="vs-led on" />
                  <div className="vs-led on"  style={{ animationDelay:'.5s' }} />
                  <div className="vs-led off" />
                  <div className="vs-led on"  style={{ animationDelay:'1.2s' }} />
                </div>
                <div className="vis-server vs-lg">
                  <div className="vs-led on"  style={{ animationDelay:'.3s' }} />
                  <div className="vs-led off" />
                  <div className="vs-led on"  style={{ animationDelay:'.8s' }} />
                  <div className="vs-led off" />
                </div>
              </div>

              {/* Platform base */}
              <div className="vis-platform" />

              {/* Side floating cubes */}
              {[
                { cls:'c1', icon:'bi-code-slash',   style:{width:58,height:58,bottom:200,left:30,   '--d':'0.2s','--dur':'3.5s'} },
                { cls:'c2', icon:'bi-diagram-3',    style:{width:58,height:58,bottom:200,right:30,  '--d':'0.7s','--dur':'4.2s'} },
                { cls:'c3', icon:'bi-shield-check', style:{width:50,height:50,bottom:270,left:60,   '--d':'0.4s','--dur':'3.8s'} },
                { cls:'c4', icon:'bi-cpu',          style:{width:50,height:50,bottom:270,right:60,  '--d':'1.1s','--dur':'4.5s'} },
                { cls:'c5', icon:'bi-layers',       style:{width:44,height:44,bottom:340,left:95,   '--d':'0.6s','--dur':'4s'  } },
                { cls:'c6', icon:'bi-gear',         style:{width:44,height:44,bottom:340,right:95,  '--d':'0.9s','--dur':'3.6s'} },
              ].map((c) => (
                <div key={c.cls} className={`vis-side-cube ${c.cls}`} style={c.style}>
                  <i className={`bi ${c.icon}`} />
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
