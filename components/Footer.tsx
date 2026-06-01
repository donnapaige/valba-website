import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col footer-col--brand">
            <Link href="/" className="nav-logo footer-logo">
              Valba<span className="dot" aria-hidden="true" />
            </Link>
            <p className="footer-tagline">Custom-built systems, delivered in weeks. Fixed price, every time.</p>
          </div>
          <nav className="footer-col footer-col--nav" aria-label="Footer">
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
          <div className="footer-col footer-col--cta">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <a href="mailto:valba.app@etchworksdigital.com" className="footer-email">valba.app@etchworksdigital.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Valba Corp. All rights reserved.</span>
          <span>Enterprise Systems &middot; Custom SaaS &middot; Operational Intelligence</span>
        </div>
      </div>
    </footer>
  )
}
