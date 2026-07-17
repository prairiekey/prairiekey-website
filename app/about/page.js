export const metadata = { title: "About Us" };
export default function About() {
  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">About PrairieKey</p><h1>Property management built on trust.</h1><p>Local service, professional systems and a genuine commitment to protecting every property we manage.</p></div></section>
      <section className="section"><div className="container split-grid">
        <div><p className="eyebrow dark">Our Mission</p><h2>Protect investments. Support tenants. Build lasting relationships.</h2><p className="lead">PrairieKey Property Management was created to give property owners a reliable, transparent and responsive management partner in Winnipeg and surrounding areas.</p></div>
        <div className="value-stack"><article><h3>Professional</h3><p>Clear standards, organized processes and dependable follow-through.</p></article><article><h3>Transparent</h3><p>Open communication, timely updates and reporting you can understand.</p></article><article><h3>Personal</h3><p>Thoughtful service tailored to your property and investment goals.</p></article></div>
      </div></section>
    </>
  );
}
