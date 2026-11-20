import { useState } from 'react'
import logo from '../assets/monash-logo.svg'
import { navItems } from './navData'

interface HeaderProps {
  onReset: () => void
}

export default function Header({ onReset }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="hdr">
      <div className="hdr-main">
        <a
          className="hdr-main__brand"
          href="https://www.monash.edu"
          onClick={(e) => {
            e.preventDefault()
            onReset()
          }}
        >
          <img className="hdr-main__brand-img" src={logo} alt="Monash University" title="Monash University" />
        </a>

        <button
          className="hdr-main__drawer-trigger"
          aria-controls="nav-drawer"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="hdr-main__drawer-trigger-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M3 5h18v2H3zM3 11h18v2H3zM3 17h18v2H3z" />
            </svg>
          </span>
        </button>

        <div className="hdr-main__main">
          <div className="hdr-main__wrapper" data-for="nav">
            <nav id="main-nav-desktop" className="hdr-main__nav">
              {navItems.map((item) => (
                <section className="hdr-main__nav-section" key={item.href}>
                  <a className="hdr-main__nav-link graphite-nav-menu-link" href={item.href}>
                    {item.label}
                  </a>
                  {item.children.length > 1 && (
                    <div className="hdr-main__nav-submenu">
                      <div className="hdr-main__nav-submenu-wrapper">
                        <ul className="hdr-main__nav-submenu-list">
                          {item.children.map((child) => (
                            <li className="hdr-main__nav-submenu-item" key={child.href}>
                              <a className="hdr-main__nav-submenu-link graphite-nav-link" href={child.href}>
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </nav>
          </div>
        </div>

        <div className="hdr-main__aside">
          <a
            href="https://www.monash.edu/study/how-to-apply"
            className="graphite-btn graphite-btn--ghost graphite-btn--secondary graphite-btn--small"
          >
            Apply to study
          </a>
        </div>
      </div>

      {drawerOpen && (
        <nav id="nav-drawer" className="hdr-drawer">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="https://www.monash.edu/study/how-to-apply">Apply to study</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}
