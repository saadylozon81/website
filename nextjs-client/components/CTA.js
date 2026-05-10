export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="section-tag">Ready to Scale?</p>

            <h2 className="cta-title mb-4">
              Ready to Scale Your{' '}
              <span className="highlight">Technology Team?</span>
            </h2>

            <p className="cta-desc mb-5">
              Let&apos;s talk about how ASAL can embed engineering excellence into your product
              roadmap — from day one.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a href="mailto:info@asaltechnologies.com" className="btn-primary-asal">
                <i className="bi bi-envelope-fill" />
                Contact ASAL
              </a>
              <a href="#services" className="btn-outline-asal">
                <i className="bi bi-grid-fill" />
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
