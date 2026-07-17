export const metadata = { title: "Services" };
const groups = [
["Tenant Placement",["Rental market review","Professional advertising","Property showings","Application processing","Income, employment and reference verification","Lease preparation and move-in coordination"]],
["Full-Service Management",["Rent collection and monitoring","Tenant communication","Lease administration and renewals","Routine property inspections","Move-in and move-out inspections","Issue resolution and documentation"]],
["Maintenance & Property Care",["Maintenance request coordination","Trusted vendor scheduling","Preventative maintenance support","Emergency response coordination","Repair updates and owner approvals","Property condition oversight"]],
["Owner Reporting",["Monthly financial statements","Income and expense visibility","Maintenance summaries","Property performance updates","Year-end document organization","Clear owner communication"]]
];
export default function Services() {
 return (<><section className="page-hero"><div className="container"><p className="eyebrow">Our Services</p><h1>Professional support from leasing to reporting.</h1><p>Choose tenant placement or complete property management based on your needs.</p></div></section>
 <section className="section section-soft"><div className="container detail-grid">{groups.map(([title,items])=><article className="detail-card" key={title}><h2>{title}</h2><ul className="check-list">{items.map(i=><li key={i}>{i}</li>)}</ul></article>)}</div></section></>);
}
