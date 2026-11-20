// Central state for the portal.
import type { RegistrationData } from './registration'

export type View = 'landing' | 'courseUnits' | 'registration' | 'confirmation'

export interface PortalState {
  view: View
  /** First name captured in the bot conversation (arrives in a JSON payload). */
  firstName: string
  /** Submitted registration form, shown on the Confirmation page. */
  registration: RegistrationData | null
}

export type PortalAction =
  | { type: 'STATE_EVENT'; state?: string; payload?: unknown }
  | { type: 'SUBMIT_REGISTRATION'; registration: RegistrationData }

export const initialPortalState: PortalState = {
  view: 'landing',
  firstName: '',
  registration: null,
}

// Accepts { firstName }, { first_name } or { givenName } from the bot payload.
function extractFirstName(payload: unknown): string | undefined {
  if (!payload || typeof payload !== 'object') return undefined
  const p = payload as Record<string, unknown>
  const v = p.firstName ?? p.first_name ?? p.givenName ?? p.given_name
  return typeof v === 'string' && v.trim() ? v.trim() : undefined
}

export function portalReducer(state: PortalState, action: PortalAction): PortalState {
  if (action.type === 'SUBMIT_REGISTRATION') {
    return { ...state, registration: action.registration, view: 'confirmation' }
  }
  if (action.type !== 'STATE_EVENT') return state

  const name = String(action.state ?? '').trim().toLowerCase()
  if (name === 'reset' || name === 'home' || name === 'landing') return { ...initialPortalState }

  const firstName = extractFirstName(action.payload)
  const next = firstName ? { ...state, firstName } : state

  switch (name) {
    case 'courseunits':
      return { ...next, view: 'courseUnits' }
    case 'registration':
      return { ...next, view: 'registration' }
    case 'confirmation':
      return { ...next, view: 'confirmation' }
    default:
      return next
  }
}
