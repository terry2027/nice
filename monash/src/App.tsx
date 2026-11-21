import { useEffect, useReducer, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import CourseUnitsPage from './pages/CourseUnitsPage'
import RegistrationPage from './pages/RegistrationPage'
import ConfirmationPage from './pages/ConfirmationPage'
// import DemoFloatingBar from './components/DemoFloatingBar'
import { portalReducer, initialPortalState } from './state/portalReducer'
import { useStateEvents } from './hooks/useStateEvents'
import { notifyAgent } from './lib/callSession'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(portalReducer, initialPortalState)

  // External state feed (not wired up yet).
  useStateEvents(dispatch)

  // Tell the agent on the live call when the registration form has been submitted.
  // Keyed on the submitted data, so a bot-triggered 'confirmation' state without a
  // submission does not echo back, and each submission notifies only once.
  const notified = useRef<unknown>(null)
  useEffect(() => {
    const reg = state.registration
    if (state.view !== 'confirmation' || !reg || notified.current === reg) return
    notified.current = reg
    notifyAgent('registration_submitted', { firstName: reg.values.givenNames })
  }, [state.view, state.registration])

  const handleReset = () => dispatch({ type: 'STATE_EVENT', state: 'reset' })

  return (
    <>
      <Header onReset={handleReset} />
      {state.view === 'landing' && <LandingPage dispatch={dispatch} />}
      {state.view === 'courseUnits' && <CourseUnitsPage />}
      {state.view === 'registration' && <RegistrationPage firstName={state.firstName} dispatch={dispatch} />}
      {state.view === 'confirmation' && <ConfirmationPage registration={state.registration} dispatch={dispatch} />}
      <Footer />

      {/* Demo floating toolbar — uncomment import above and the line below during development */}
      {/* <DemoFloatingBar dispatch={dispatch} /> */}
    </>
  )
}
