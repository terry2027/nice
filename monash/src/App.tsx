import { useReducer } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import CourseUnitsPage from './pages/CourseUnitsPage'
import RegistrationPage from './pages/RegistrationPage'
import ConfirmationPage from './pages/ConfirmationPage'
// import DemoFloatingBar from './components/DemoFloatingBar'
import { portalReducer, initialPortalState } from './state/portalReducer'
import { useStateEvents } from './hooks/useStateEvents'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(portalReducer, initialPortalState)

  // External state feed (not wired up yet).
  useStateEvents(dispatch)

  const handleReset = () => dispatch({ type: 'STATE_EVENT', state: 'reset' })

  return (
    <>
      <Header onReset={handleReset} />
      {state.view === 'landing' && <LandingPage dispatch={dispatch} />}
      {state.view === 'courseUnits' && <CourseUnitsPage />}
      {state.view === 'registration' && <RegistrationPage />}
      {state.view === 'confirmation' && <ConfirmationPage />}
      <Footer />

      {/* Demo floating toolbar — uncomment import above and the line below during development */}
      {/* <DemoFloatingBar dispatch={dispatch} /> */}
    </>
  )
}
