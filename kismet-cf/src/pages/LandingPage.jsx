const FEATURES = [
  {
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
    title: 'Discover more clients',
    body: 'Expand your reach and attract a diverse range of clients by listing your services on our platform.',
  },
  {
    icon: <><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    title: 'Get paid faster',
    body: 'Invoice acceleration means same-day payments. Track invoices and claims in real time.',
  },
  {
    icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></>,
    title: 'Reduce your admin',
    body: 'Streamlined software so you can focus on what matters most — providing excellent care.',
  },
];

export default function LandingPage() {
  return (
    <main className="page active">
      <div className="hero-shell wrap">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-eyebrow">Supporting growth.</div>
            <h1>Grow your business with ease on our marketplace.</h1>
            <a href="#" className="btn">Claim your listing</a>
          </div>
        </div>
      </div>

      <section className="block wrap">
        <div className="section-head">
          <div className="kicker">Features</div>
          <h2>Everything you need to grow, from one place.</h2>
        </div>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
