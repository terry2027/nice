import { useEffect } from 'react';
import Pusher from 'pusher-js';

const PUSHER_CHANNEL = 'kismet-pusher-channel';
const PUSHER_EVENT = 'state-changed';

/**
 * Subscribes to the same Pusher channel/event that index.js (the Cloudflare
 * Worker webhook relay) publishes to, and dispatches a STATE_EVENT action
 * for every message. Cognigy's flow never talks to this app directly — it
 * POSTs to the Worker's /webhook/state, which relays here over Pusher.
 *
 * Also exposes window._demoState(state, payload) for local testing without
 * a live Pusher app, exactly like the static HTML prototype did.
 */
export function usePusherState(dispatch) {
  useEffect(() => {
    window._demoState = (state, payload) => {
      dispatch({ type: 'STATE_EVENT', state, payload });
    };

    const key = import.meta.env.VITE_PUSHER_KEY;
    const cluster = import.meta.env.VITE_PUSHER_CLUSTER;

    if (!key || !cluster) {
      console.warn(
        '[Kismet Provider Portal] VITE_PUSHER_KEY/VITE_PUSHER_CLUSTER not set — ' +
          'only manual window._demoState() triggers will work. See .env.example.'
      );
      return () => {
        delete window._demoState;
      };
    }

    const pusher = new Pusher(key, { cluster });
    const channel = pusher.subscribe(PUSHER_CHANNEL);
    const handler = (data) => {
      dispatch({ type: 'STATE_EVENT', state: data?.state, payload: data?.payload });
    };
    channel.bind(PUSHER_EVENT, handler);

    return () => {
      channel.unbind(PUSHER_EVENT, handler);
      pusher.unsubscribe(PUSHER_CHANNEL);
      pusher.disconnect();
      delete window._demoState;
    };
  }, [dispatch]);
}
