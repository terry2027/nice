import { useState } from 'react';

const SAMPLE_ACCOUNT = {
  providerId: 'PRV-88239',
  providerName: 'Dr. Sarah Jenkins',
  category: 'General Practice & Allied Health',
  payments: [
    { paymentId: 'PAY-1001', serviceDate: '2026-09-15', amount: '$450.00', description: 'Medicare Benefit Batch #402', status: 'Completed' },
    { paymentId: 'PAY-1002', serviceDate: '2026-09-18', amount: '$1,280.50', description: 'NDIS Claims Settlement', status: 'Completed' },
    { paymentId: 'PAY-1003', serviceDate: '2026-09-21', amount: '$310.00', description: 'Private Health Insurance Gap', status: 'Pending' },
  ],
};

const SAMPLE_DISPUTE = {
  disputeId: 'DSP-4091',
  date: '2026-09-23',
  amount: '$450.00',
  reason: 'Missing Medicare Batch Benefit #402',
  status: 'Under Review',
};

/**
 * DemoFloatingBar component allows easy trigger of portal UI states.
 * To disable or remove for production, simply comment out `<DemoFloatingBar dispatch={dispatch} />` in App.jsx.
 */
export default function DemoFloatingBar({ dispatch }) {
  const [collapsed, setCollapsed] = useState(false);

  const triggerEvent = (state, payload = {}) => {
    dispatch({ type: 'STATE_EVENT', state, payload });
  };

  if (collapsed) {
    return (
      <div className="demo-floating-toggle" onClick={() => setCollapsed(false)}>
        <span>⚙️ Demo Controls</span>
      </div>
    );
  }

  return (
    <div className="demo-floating-bar">
      <div className="demo-floating-header">
        <span className="demo-floating-title">⚙️ Demo Controls</span>
        <button
          type="button"
          className="demo-floating-minimize"
          onClick={() => setCollapsed(true)}
          title="Minimize Demo Toolbar"
        >
          ✕
        </button>
      </div>

      <div className="demo-floating-actions">
        <button
          type="button"
          className="demo-btn demo-btn-secondary"
          onClick={() => triggerEvent('reset')}
        >
          Reset (Landing)
        </button>
        <button
          type="button"
          className="demo-btn demo-btn-primary"
          onClick={() => triggerEvent('verified', SAMPLE_ACCOUNT)}
        >
          Verified
        </button>
        <button
          type="button"
          className="demo-btn demo-btn-warning"
          onClick={() => triggerEvent('missing_payments', SAMPLE_ACCOUNT)}
        >
          Missing Payments
        </button>
        <button
          type="button"
          className="demo-btn demo-btn-danger"
          onClick={() => triggerEvent('dispute_lodged', SAMPLE_DISPUTE)}
        >
          Lodge Dispute
        </button>
      </div>
    </div>
  );
}
