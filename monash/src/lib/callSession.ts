// Bridge to the Cognigy widgets loaded in index.html.
//  - Click-to-call: the live call is kept on window.__monashCallSession
//    (set on 'newRTCSession', cleared when it ends).
//  - Webchat: the webchat API is kept on window.__monashWebchat.

interface CallSession {
  sendInfo: (text: string, data?: Record<string, unknown>) => void
}

interface Webchat {
  sendMessage: (text: string, data?: Record<string, unknown>, options?: { label?: string }) => void
}

declare global {
  interface Window {
    __monashCallSession?: CallSession
    __monashWebchat?: Webchat
  }
}

interface NotifyOptions {
  /** Text shown in the user's chat bubble (webchat only). */
  chatLabel?: string
}

/**
 * Notifies the Cognigy agent. Uses the live voice call (sendInfo) when there is
 * one, otherwise the webchat (sendMessage). Returns the channel used, or null
 * when neither is available.
 */
export function notifyAgent(
  text: string,
  data?: Record<string, unknown>,
  { chatLabel }: NotifyOptions = {},
): 'call' | 'chat' | null {
  const session = window.__monashCallSession
  if (session) {
    try {
      session.sendInfo(text, data)
      console.log('[Monash Demo] sendInfo sent to agent (call):', text, data)
      return 'call'
    } catch (err) {
      console.warn('[Monash Demo] sendInfo failed (is the call connected?), trying chat:', err)
    }
  }

  const webchat = window.__monashWebchat
  if (webchat) {
    try {
      webchat.sendMessage(text, data, chatLabel ? { label: chatLabel } : undefined)
      console.log('[Monash Demo] sendMessage sent to agent (chat):', text, data)
      return 'chat'
    } catch (err) {
      console.warn('[Monash Demo] webchat sendMessage failed:', err)
    }
  }

  console.warn('[Monash Demo] No active call or webchat — agent not notified:', text)
  return null
}
