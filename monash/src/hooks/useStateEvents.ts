import type { Dispatch } from 'react'
import type { PortalAction } from '../state/portalReducer'

// Placeholder for the external state feed (e.g. Pusher). Not wired up yet.
export function useStateEvents(_dispatch: Dispatch<PortalAction>): void {
  // TODO: subscribe to events and dispatch STATE_EVENT
}
