function FooterLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <rect key={i} x="20" y="3" width="4" height="9" rx="2" fill="#FFB800"
          transform={`rotate(${deg} 22 22)`} />
      ))}
      <circle cx="22" cy="22" r="10" fill="#FFB800" />
      <circle cx="22" cy="22" r="7" fill="#0D1117" />
      <circle cx="22" cy="22" r="4" fill="#FFB800" />
    </svg>
  )
}

const company  = ['About', 'Case Studies', 'Careers', 'Contact']
const services = ['Software Engineering', 'AI & Data Solutions', 'Cloud & DevOps', 'QA & Test Automation', 'R&D Expansion', 'Dedicated Teams']
const resources = ['Blog', 'Insights', 'Privacy Policy', 'Terms of Use']

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-1">
              <FooterLogo />
              <div>
                <div className="footer-logo-name">ASAL</div>
                <div className="footer-logo-sub">Technologies</div>
              </div>
            </div>
            <p className="footer-desc">
              Partnering with enterprises and scale-ups to build, modernize, and scale technology products.
            </p>
            <div className="footer-social">
              {[
                { icon: 'bi-linkedin',  href: '#' },
                { icon: 'bi-twitter-x', href: '#' },
                { icon: 'bi-youtube',   href: '#' },
              ].map((s) => (
                <a key={s.icon} href={s.href} className="social-btn" target="_blank" rel="noopener noreferrer">
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-3 col-6">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {company.map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-3 col-6">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {services.map((l) => <li key={l}><a href="#services">{l}</a></li>)}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              {resources.map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ASAL Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
