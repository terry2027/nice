// Central state for the portal. State shape is intentionally undefined for now.

export type View = 'landing' | 'courseUnits' | 'registration' | 'confirmation'

export interface PortalState {
  view: View
}

export type PortalAction = { type: 'STATE_EVENT'; state?: string; payload?: unknown }

export const initialPortalState: PortalState = {
  view: 'landing',
}

export function portalReducer(state: PortalState, action: PortalAction): PortalState {
  if (action.type !== 'STATE_EVENT') return state
  const name = String(action.state ?? '').trim().toLowerCase()
  switch (name) {
    case 'reset':
    case 'home':
    case 'landing':
      return { ...initialPortalState }
    case 'courseunits':
      return { ...state, view: 'courseUnits' }
    case 'registration':
      return { ...state, view: 'registration' }
    case 'confirmation':
      return { ...state, view: 'confirmation' }
    default:
      return state
  }
}
