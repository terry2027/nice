import { useReducer } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import AccountPage from './pages/AccountPage';
import DisputesPage from './pages/DisputesPage';
import DemoFloatingBar from './components/DemoFloatingBar';
import { portalReducer, initialPortalState } from './state/portalReducer';
import { usePusherState } from './hooks/usePusherState';
import './index.css';

export default function App() {
  const [state, dispatch] = useReducer(portalReducer, initialPortalState);

  // Subscribes to the Pusher channel that index.js (the Cloudflare Worker
  // webhook relay) publishes to whenever Kai's Cognigy flow calls
  // POST /state. Also wires up window._demoState(...) for local
  // testing without a live Pusher app.
  usePusherState(dispatch);

  const handleReset = () => dispatch({ type: 'STATE_EVENT', state: 'reset' });

  return (
    <>
      <Header onReset={handleReset} />
      {state.view === 'landing' && <LandingPage />}
      {state.view === 'account' && (
        <AccountPage account={state.account} disputeCount={state.disputeCount ?? state.disputes.length} />
      )}
      {state.view === 'disputes' && <DisputesPage disputes={state.disputes} />}
      <footer className="site">
        <div className="wrap">© 2026 Kismet.</div>
      </footer>

      {/* Demo floating toolbar — comment out line below to hide during live production demos */}
      <DemoFloatingBar dispatch={dispatch} />
    </>
  );
}

