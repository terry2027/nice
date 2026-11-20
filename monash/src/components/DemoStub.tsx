import type { Dispatch } from 'react'
import type { PortalAction } from '../state/portalReducer'

interface DemoStubProps {
  dispatch: Dispatch<PortalAction>
}

const targets = [
  { state: 'courseUnits', label: 'Course Units' },
  { state: 'registration', label: 'Registration' },
  { state: 'confirmation', label: 'Confirmation' },
]

// Demo-only navigation panel for the landing page. Remove (or hide) it from
// LandingPage once real navigation is in place.
export default function DemoStub({ dispatch }: DemoStubProps) {
  return (
    <aside className="demo-stub" aria-label="Demo navigation">
      <h2 className="demo-stub__title">Demo navigation</h2>
      <p className="demo-stub__hint">Jump straight to a page:</p>
      <div className="demo-stub__actions">
        {targets.map((t) => (
          <button
            key={t.state}
            type="button"
            className="graphite-btn graphite-btn--small"
            onClick={() => dispatch({ type: 'STATE_EVENT', state: t.state })}
          >
            {t.label}
          </button>
        ))}
      </div>
    </aside>
  )
}
