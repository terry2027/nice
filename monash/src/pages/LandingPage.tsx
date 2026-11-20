import type { Dispatch } from 'react'
import DemoStub from '../components/DemoStub'
import type { PortalAction } from '../state/portalReducer'

interface LandingPageProps {
  dispatch: Dispatch<PortalAction>
}

export default function LandingPage({ dispatch }: LandingPageProps) {
  return (
    <main className="wrap">
      <h1>Landing</h1>
      <DemoStub dispatch={dispatch} />
    </main>
  )
}
