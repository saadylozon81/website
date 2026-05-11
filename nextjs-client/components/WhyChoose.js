const reasons = [
  { icon:'bi-person-check',  title:'High-quality\nEngineering Talent'       },
  { icon:'bi-check2-all',    title:'Flexible\nEngagement Models'            },
  { icon:'bi-rocket',        title:'Fast\nTeam Scaling'                     },
  { icon:'bi-shield-check',  title:'Strong\nDelivery Culture'               },
  { icon:'bi-handshake',     title:'Long-term\nTechnology Partnership'      },
]

export default function WhyChoose() {
  return (
    <section className="why-section" id="about">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Title */}
          <div className="col-lg-3 col-md-12">
            <div className="why-title-col">
              <div className="main">Why Companies<br />Choose ASAL</div>
              <div className="bar" />
            </div>
          </div>

          {/* Items */}
          <div className="col-lg-9">
            <div className="row g-3">
              {reasons.map((r, i) => (
                <div key={i} className="col-6 col-sm-4 col-md">
                  <div className="why-item">
                    <div className="wi-icon"><i className={`bi ${r.icon}`} /></div>
                    <div className="wi-title" style={{ whiteSpace:'pre-line' }}>{r.title}</div>
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
