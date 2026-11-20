import go8Logo from '../assets/go8-logo.svg'
import {
  acknowledgement,
  footerColumns,
  footerLegal,
  footerSocial,
  footerUtils,
} from './navData'

// Simple monochrome glyphs standing in for monash.edu's icon sprite.
const socialGlyph: Record<string, string> = {
  Facebook: 'f',
  Instagram: 'ig',
  TikTok: 'tt',
  LinkedIn: 'in',
}

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__wrapper">
        <div className="ftr__social">
          <ul className="ftr__social-list">
            {footerSocial.map((s) => (
              <li className="ftr__social-item" key={s.label}>
                <a
                  className="ftr__social-link"
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="ftr__social-img" viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="#fff" strokeWidth="1.5" />
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" stroke="none">
                      {socialGlyph[s.label] ?? s.label[0]}
                    </text>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__info">
          <div className="ftr__info-wrapper">
            <p className="graphite-intro">
              {acknowledgement[0]}{' '}
              <a href={acknowledgement[1]} target="_blank" rel="noopener noreferrer">
                {acknowledgement[2]}
              </a>
            </p>
          </div>
        </div>

        <div className="ftr__links ftr__links--desktop">
          {footerColumns.map((col) => (
            <section className="ftr__links-sec" key={col.title}>
              <h3 className="ftr__links-sec-title graphite-subheading">{col.title}</h3>
              <ul className="ftr__links-list graphite-nav-list">
                {col.links.map((l) => (
                  <li className="ftr__links-item" key={l.href}>
                    <a className="ftr__links-link graphite-menu-link" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="ftr__links ftr__links--mobile">
          {footerColumns.map((col) => (
            <details className="ftr__links-sec" key={col.title}>
              <summary className="ftr__links-sec-trigger">
                <h3 className="ftr__links-sec-title graphite-subheading">
                  {col.title}
                  <span className="ftr__links-sec-trigger-icon" />
                </h3>
              </summary>
              <div className="ftr__links-sec-content">
                <ul className="ftr__links-list graphite-nav-list">
                  {col.links.map((l) => (
                    <li className="ftr__links-item" key={l.href}>
                      <a className="ftr__links-link graphite-menu-link" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        <div className="ftr__legal">
          {footerLegal.map((sec, i) => (
            <div className="ftr__legal-sec" key={i}>
              <h3 className="ftr__legal-sec-title graphite-subheading">{sec.title || ' '}</h3>
              <div className="ftr__legal-sec-content">
                <p className="graphite-legal">
                  {sec.lines.map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {line}
                    </span>
                  ))}
                  {sec.link && (
                    <>
                      <br />
                      <a href={sec.link.href}>{sec.link.label}</a>
                      <br />
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
          <div className="ftr__legal-sec ftr__legal-sec--go8">
            <a href="https://go8.edu.au/" title="A member of Group of Eight Australia" aria-label="A member of Group of Eight Australia">
              <img src={go8Logo} alt="Group of Eight Australia logo" />
            </a>
          </div>
        </div>

        <div className="ftr__utils">
          <ul className="ftr__utils-list">
            {footerUtils.map((u) => (
              <li className="ftr__utils-list-item graphite-legal" key={u.label}>
                <a href={u.href}>{u.label}</a>
              </li>
            ))}
          </ul>
          <div className="ftr__utils-copy graphite-legal">Copyright © 2026 Monash University</div>
        </div>
      </div>
    </footer>
  )
}
