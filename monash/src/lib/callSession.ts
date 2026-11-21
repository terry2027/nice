// Bridge to the Cognigy click-to-call widget. index.html stores the live call
// on window.__monashCallSession (set on 'newRTCSession', cleared when it ends).

interface CallSession {
  sendInfo: (text: string, data?: Record<string, unknown>) => void
}

declare global {
  interface Window {
    __monashCallSession?: CallSession
  }
}

/**
 * Sends an info message into the live call so the Cognigy agent is notified.
 * Returns false when there is no active call (nothing is sent).
 */
export function notifyAgent(text: string, data?: Record<string, unknown>): boolean {
  const session = window.__monashCallSession
  if (!session) {
    console.warn('[Monash Demo] No active call — agent not notified:', text)
    return false
  }
  try {
    session.sendInfo(text, data)
    return true
  } catch (err) {
    console.warn('[Monash Demo] sendInfo failed:', err)
    return false
  }
}
