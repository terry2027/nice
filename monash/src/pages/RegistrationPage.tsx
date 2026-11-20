import type { Dispatch } from 'react'
import RegistrationForm from '../components/registration/RegistrationForm'
import type { PortalAction } from '../state/portalReducer'
import '../registration.css'

interface Props {
  firstName: string
  dispatch: Dispatch<PortalAction>
}

export default function RegistrationPage({ firstName, dispatch }: Props) {
  return (
    <main className="registration-page">
      <div className="reg-wrap">
        <h1 className="reg-title">Personal details</h1>
        <p className="reg-lead">
          Personal details are attached to each application that you submit to the University. Please provide details as shown in your Passport or an Australian Birth Certificate.
        </p>
        <RegistrationForm
          firstName={firstName}
          onSubmit={(values, files) =>
            dispatch({
              type: 'SUBMIT_REGISTRATION',
              registration: { values, documents: files.map((f) => ({ name: f.name, size: f.size })) },
            })
          }
        />
      </div>
    </main>
  )
}
