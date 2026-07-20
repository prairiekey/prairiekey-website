import "./globals.css";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://prairiekeypropertymgt.ca"),
  title: {
    default: "PrairieKey Property Management | Winnipeg",
    template: "%s | PrairieKey Property Management"
  },
  description:
    "Professional property management services for Winnipeg and surrounding areas. Tenant placement, rent collection, inspections, maintenance coordination and owner reporting.",
  openGraph: {
    title: "PrairieKey Property Management",
    description:
      "Your property. Our priority. Professional property management in Winnipeg and surrounding areas.",
    url: "https://prairiekeypropertymgt.ca",
    siteName: "PrairieKey Property Management",
    locale: "en_CA",
    type: "website"
  }
};

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Owners", "/owners"],
  ["Tenants", "/tenants"],
  ["Rentals", "/rentals"],
  ["Contact", "/contact"]
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand" aria-label="PrairieKey home">
              <img src="/prairiekey-logo.png" alt="PrairieKey Property Management" />
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
            <Link href="/contact#consultation" className="button button-gold nav-cta">
              Free Consultation
            </Link>
            <details className="mobile-menu">
              <summary aria-label="Open menu">Menu</summary>
              <div className="mobile-panel">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
                <Link href="/contact#consultation" className="button button-gold">
                  Free Consultation
                </Link>
              </div>
            </details>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <img className="footer-logo" src="/prairiekey-logo.png" alt="PrairieKey Property Management" />
              <p>Your property. Our priority.</p>
              <p className="muted">Serving Winnipeg &amp; surrounding areas.</p>
            </div>
            <div>
              <h3>Explore</h3>
              <Link href="/services">Services</Link>
              <Link href="/owners">Property Owners</Link>
              <Link href="/tenants">Tenants</Link>
              <Link href="/rentals">Available Rentals</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="tel:+12044075757">204-407-5757</a>
              <a href="mailto:info@prairiekeypropertymgt.ca">info@prairiekeypropertymgt.ca</a>
              <p>337 Park West Drive<br />Winnipeg, MB R3Y 0V9</p>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} PrairieKey Property Management</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
