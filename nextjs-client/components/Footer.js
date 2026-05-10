function FooterLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="21,2 39,11.5 39,30.5 21,40 3,30.5 3,11.5"
        fill="#FFB800"
        opacity="0.15"
        stroke="#FFB800"
        strokeWidth="1.5"
      />
      <polygon points="21,7 35,14.5 35,29.5 21,37 7,29.5 7,14.5" fill="#FFB800" opacity="0.25" />
      <text
        x="21"
        y="25"
        textAnchor="middle"
        fill="#FFB800"
        fontSize="10"
        fontWeight="900"
        fontFamily="Segoe UI, system-ui, sans-serif"
        letterSpacing="0.5"
      >
        ASAL
      </text>
    </svg>
  )
}

const companyLinks = ['About Us', 'Services', 'Case Studies', 'Careers', 'Contact']
const serviceLinks = [
  'Software Engineering',
  'AI & Data Engineering',
  'Cloud & DevOps',
  'QA & Test Automation',
  'R&D Excellence',
  'Dedicated Teams',
]
const resourceLinks = ['Blog', 'Whitepapers', 'Documentation', 'Privacy Policy', 'Terms of Use']

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">
          {/* Brand column */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-1">
              <FooterLogo />
              <div>
                <div className="footer-logo-name">ASAL</div>
                <div className="footer-logo-sub">Technologies</div>
              </div>
            </div>

            <p className="footer-desc">
              Building enterprise-grade, modern, and scalable technology products through
              engineering excellence and trusted delivery models.
            </p>

            <div className="footer-social">
              {[
                { icon: 'bi-linkedin', href: 'https://linkedin.com' },
                { icon: 'bi-twitter-x', href: 'https://twitter.com' },
                { icon: 'bi-facebook', href: 'https://facebook.com' },
                { icon: 'bi-github', href: 'https://github.com' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-3 col-6">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-3 col-6">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links mb-4">
              {resourceLinks.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>

            <h4 className="footer-heading">Follow Us</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@asaltechnologies.com">
                  <i className="bi bi-envelope me-1" />
                  info@asaltechnologies.com
                </a>
              </li>
              <li>
                <a href="tel:+962000000000">
                  <i className="bi bi-telephone me-1" />
                  +962 00 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ASAL Technologies. All rights reserved.</p>
          <p>
            <a href="#" style={{ color: '#566478', textDecoration: 'none', marginRight: 16 }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#566478', textDecoration: 'none' }}>
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
