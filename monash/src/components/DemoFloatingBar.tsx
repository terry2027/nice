import type { Dispatch } from 'react'
import type { PortalAction } from '../state/portalReducer'

interface DemoFloatingBarProps {
  dispatch: Dispatch<PortalAction>
}

export default function DemoFloatingBar({ dispatch }: DemoFloatingBarProps) {
  const go = (state: string) => dispatch({ type: 'STATE_EVENT', state })
  return (
    <div className="demo-floating-bar">
      {['landing', 'courseUnits', 'registration', 'confirmation'].map((s) => (
        <button key={s} onClick={() => go(s)}>{s}</button>
      ))}
    </div>
  )
}
