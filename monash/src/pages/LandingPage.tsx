import type { Dispatch } from 'react'
import DemoStub from '../components/DemoStub'
import LandingContent from '../components/landing/LandingContent'
import type { PortalAction } from '../state/portalReducer'
import '../landing.css'

interface LandingPageProps {
  dispatch: Dispatch<PortalAction>
}

export default function LandingPage({ dispatch }: LandingPageProps) {
  return (
    <main className="landing-page">
      <LandingContent />
      <DemoStub dispatch={dispatch} />
    </main>
  )
}
