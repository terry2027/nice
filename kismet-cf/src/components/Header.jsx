export default function Header({ onReset }) {
  return (
    <header className="site">
      <div className="wrap">
        <a className="logo" onClick={onReset} role="button" tabIndex={0}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7.2-4.6-9.7-9C.6 8.6 1.7 5 5 4.1 7.2 3.5 9.4 4.4 11 6.1c.4.4 1 .4 1.4 0C14 4.4 16.2 3.5 18.4 4.1 21.7 5 22.8 8.6 21 12c-2.5 4.4-9.7 9-9.7 9z" />
          </svg>
          kismet
        </a>
        <nav className="primary">
          <a href="#" onClick={(e) => { e.preventDefault(); onReset(); }}>For providers</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onReset(); }}>Pricing</a>
        </nav>
        <a href="#" className="btn ghost">Sign in</a>
      </div>
    </header>
  );
}
