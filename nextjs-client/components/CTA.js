export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      {/* Globe decoration */}
      <div className="cta-globe">
        <i className="bi bi-globe" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h2 className="cta-title">
              Ready to Scale Your<br />Technology Team?
            </h2>
            <p className="cta-sub">
              Let&apos;s build the right engineering model for your business.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-lg-end mt-4 mt-lg-0">
            <a href="mailto:info@asaltechnologies.com" className="btn-cta-dark">
              Contact ASAL <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
