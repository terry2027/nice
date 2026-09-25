import { useEffect } from 'react';
import Pusher from 'pusher-js';

/**
 * Subscribes to the same Pusher channel/event that index.js (the Cloudflare
 * Worker webhook relay) publishes to, and dispatches a STATE_EVENT action
 * for every message. Cognigy's flow never talks to this app directly — it
 * POSTs to the Worker's /state, which relays here over Pusher.
 *
 * The key/cluster/channel/event are fetched from the Worker's GET /config
 * endpoint at runtime, so wrangler.toml's [vars] stay the single source of
 * truth instead of being duplicated into build-time env vars.
 *
 * Also exposes window._demoState(state, payload) for local testing without
 * a live Pusher app, exactly like the static HTML prototype did.
 */
export function usePusherState(dispatch) {
  useEffect(() => {
    let cancelled = false;
    let pusher;
    let channel;
    let handler;
    let eventName;

    window._demoState = (state, payload) => {
      dispatch({ type: 'STATE_EVENT', state, payload });
    };

    fetch('/config')
      .then((res) => res.json())
      .then(({ key, cluster, channel: channelName, event }) => {
        if (cancelled || !key || !cluster) {
          console.warn(
            '[Kismet Provider Portal] Pusher config unavailable — ' +
              'only manual window._demoState() triggers will work.'
          );
          return;
        }

        eventName = event;
        pusher = new Pusher(key, { cluster });
        channel = pusher.subscribe(channelName);
        handler = (data) => {
          dispatch({ type: 'STATE_EVENT', state: data?.state, payload: data?.payload });
        };
        channel.bind(eventName, handler);
      })
      .catch((err) => {
        console.warn('[Kismet Provider Portal] Failed to load Pusher config:', err);
      });

    return () => {
      cancelled = true;
      if (channel && handler) channel.unbind(eventName, handler);
      if (pusher) pusher.disconnect();
      delete window._demoState;
    };
  }, [dispatch]);
}
