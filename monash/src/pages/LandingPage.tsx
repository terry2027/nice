import type { Dispatch } from 'react'
import DemoStub from '../components/DemoStub'
import landingContent from '../assets/landing-page-content.png'
import type { PortalAction } from '../state/portalReducer'

interface LandingPageProps {
  dispatch: Dispatch<PortalAction>
}

export default function LandingPage({ dispatch }: LandingPageProps) {
  return (
    <main className="landing-page">
      {/* Screenshot of the monash.edu body, simulating the live page. */}
      <img
        className="landing-page__image"
        src={landingContent}
        alt="Monash University home page content"
      />
      <DemoStub dispatch={dispatch} />
    </main>
  )
}
