import Link from "next/link";

const services = [
  ["Tenant Placement", "Professional marketing, showings, screening and lease preparation."],
  ["Full Property Management", "Day-to-day management that keeps owners informed and tenants supported."],
  ["Rent Collection", "Consistent payment monitoring and professional follow-up."],
  ["Maintenance Coordination", "Prompt response through a network of trusted service providers."],
  ["Property Inspections", "Move-in, move-out and routine inspections that help protect your asset."],
  ["Owner Reporting", "Clear monthly statements, updates and expense visibility."]
];

const benefits = [
  "Thorough tenant screening",
  "Local Winnipeg market knowledge",
  "Responsive owner and tenant communication",
  "Reliable maintenance coordination",
  "Transparent reporting",
  "Personalized, investment-focused service"
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Winnipeg &amp; Surrounding Areas</p>
          <h1>Your Property.<br /><span>Our Priority.</span></h1>
          <p className="hero-copy">
            Professional property management designed to protect your investment,
            strengthen your rental performance and give you peace of mind.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/contact#consultation">Request a Free Consultation</Link>
            <Link className="button button-outline" href="/services">Explore Our Services</Link>
          </div>
          <div className="trust-row">
            <span>Professional</span><span>Transparent</span><span>Local</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow dark">Property Management, Simplified</p>
            <h2>More confidence. Less day-to-day stress.</h2>
          </div>
          <div>
            <p className="lead">
              Whether you own one rental home or a growing portfolio, PrairieKey
              manages the details with care, clear communication and an
              investment-focused approach.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Our Services</p>
            <h2>Complete support for your rental property</h2>
          </div>
          <div className="card-grid">
            {services.map(([title, text], index) => (
              <article className="service-card" key={title}>
                <div className="icon-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Link href="/services" className="text-link">View all services →</Link>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="photo-panel house-photo">
            <div className="photo-label">Trusted care for valuable properties</div>
          </div>
          <div>
            <p className="eyebrow dark">Why PrairieKey</p>
            <h2>A boutique approach to property management</h2>
            <p className="lead">
              We combine professional systems with personal attention. You receive
              dependable service without feeling like another number.
            </p>
            <ul className="check-list">
              {benefits.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Link href="/owners" className="button button-navy">For Property Owners</Link>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-heading light">
            <p className="eyebrow">Our Process</p>
            <h2>A clear path to stress-free ownership</h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Consultation", "We learn about your property, goals and current challenges."],
              ["02", "Property Plan", "We recommend the right management and leasing approach."],
              ["03", "Tenant & Operations", "We market, screen, lease and manage the daily details."],
              ["04", "Ongoing Results", "You stay informed while we protect the property and support tenants."]
            ].map(([num, title, text]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow dark">Free Rental Assessment</p>
            <h2>Ready to make property ownership easier?</h2>
            <p>Tell us about your rental property and we’ll arrange a no-obligation consultation.</p>
          </div>
          <Link className="button button-navy" href="/contact#consultation">Get Started</Link>
        </div>
      </section>
    </>
  );
}
