import { useEffect } from 'react'
import type { Dispatch } from 'react'
import Pusher from 'pusher-js'
import type { PortalAction } from '../state/portalReducer'

interface PusherConfig {
  key?: string
  cluster?: string
  channel?: string
  event?: string
}

declare global {
  interface Window {
    _demoState?: (state: string, payload?: unknown) => void
  }
}

/**
 * Subscribes to the Pusher channel/event that the Worker's POST /state
 * publishes to, and dispatches a STATE_EVENT for every message. The Cognigy
 * flow never talks to the app directly: it POSTs to /state, which relays here.
 *
 * Pusher key/cluster/channel/event come from the Worker's GET /config, so
 * wrangler.jsonc [vars] stay the single source of truth.
 *
 * Also exposes window._demoState(state, payload) for testing without Pusher.
 */
export function useStateEvents(dispatch: Dispatch<PortalAction>): void {
  useEffect(() => {
    let cancelled = false
    let pusher: Pusher | undefined
    let channel: ReturnType<Pusher['subscribe']> | undefined
    let handler: ((data: { state?: string; payload?: unknown }) => void) | undefined
    let eventName = ''

    window._demoState = (state, payload) => {
      dispatch({ type: 'STATE_EVENT', state, payload })
    }

    fetch('/config')
      .then((res) => res.json() as Promise<PusherConfig>)
      .then(({ key, cluster, channel: channelName, event }) => {
        if (cancelled || !key || !cluster || !channelName || !event) {
          console.warn(
            '[Monash Demo] Pusher config unavailable — only manual window._demoState() triggers will work.',
          )
          return
        }
        eventName = event
        pusher = new Pusher(key, { cluster })
        channel = pusher.subscribe(channelName)
        handler = (data) => {
          dispatch({ type: 'STATE_EVENT', state: data?.state, payload: data?.payload })
        }
        channel.bind(eventName, handler)
      })
      .catch((err) => {
        console.warn('[Monash Demo] Failed to load Pusher config:', err)
      })

    return () => {
      cancelled = true
      if (channel && handler) channel.unbind(eventName, handler)
      if (pusher) pusher.disconnect()
      delete window._demoState
    }
  }, [dispatch])
}
