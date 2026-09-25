// Central state for the whole portal. One event in -> one derived view out.
// Mirrors the vanilla-JS applyState() from the static prototype, but as a
// reducer so React re-renders the right page instead of us touching the DOM.

export const initialPortalState = {
  view: 'landing', // 'landing' | 'account' | 'disputes'
  account: {
    providerId: '',
    providerName: '',
    category: '',
    payments: [],
  },
  disputes: [],
  disputeCount: null,
};

export function portalReducer(state, action) {
  if (action.type !== 'STATE_EVENT') return state;

  const stateName = String(action.state || '').trim().toLowerCase();
  const payload = action.payload || {};

  // Extract disputeCount if sent at root of action/payload
  const incomingDisputeCount = payload.disputeCount !== undefined
    ? Number(payload.disputeCount)
    : (action.disputeCount !== undefined ? Number(action.disputeCount) : null);

  switch (stateName) {
    case 'reset':
    case 'home':
    case 'landing':
      return { ...initialPortalState };

    case 'verified':
    case 'missing_payments':
      return {
        ...state,
        view: 'account',
        disputeCount: incomingDisputeCount !== null ? incomingDisputeCount : state.disputeCount,
        account: {
          providerId: payload.providerId || state.account.providerId,
          providerName: payload.providerName || state.account.providerName,
          category: payload.category || state.account.category,
          payments: Array.isArray(payload.payments) ? payload.payments : state.account.payments,
        },
      };

    case 'dispute_lodged': {
      const disputes = Array.isArray(payload.disputes) ? payload.disputes : [payload.dispute || payload];
      const newDisputes = [...state.disputes, ...disputes];
      return {
        ...state,
        view: 'disputes',
        disputes: newDisputes,
        disputeCount: incomingDisputeCount !== null ? incomingDisputeCount : newDisputes.length,
      };
    }

    default:
      console.warn('[Kismet Provider Portal] unrecognised state:', stateName);
      return state;
  }
}
