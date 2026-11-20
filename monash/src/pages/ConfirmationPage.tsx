import type { Dispatch } from 'react'
import type { PortalAction } from '../state/portalReducer'
import type { RegistrationData } from '../state/registration'
import '../registration.css'

interface Props {
  registration: RegistrationData | null
  dispatch: Dispatch<PortalAction>
}

const yn = (v: boolean | null) => (v === null ? '—' : v ? 'Yes' : 'No')
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-')
  return y && m && d ? `${d}/${m}/${y}` : iso
}
const formatSize = (b: number) => (b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`)

export default function ConfirmationPage({ registration, dispatch }: Props) {
  if (!registration) {
    return (
      <main className="registration-page">
        <div className="reg-wrap">
          <h1 className="reg-title">Confirmation</h1>
          <p className="reg-lead">There is no submitted registration to show yet.</p>
          <button type="button" className="graphite-btn" onClick={() => dispatch({ type: 'STATE_EVENT', state: 'registration' })}>
            Go to registration
          </button>
        </div>
      </main>
    )
  }

  const { values: v, documents } = registration
  const fullName = [v.title, v.givenNames, v.lastName].filter(Boolean).join(' ')

  const sections: { title: string; rows: [string, string][] }[] = [
    {
      title: 'Personal details',
      rows: [
        ['Name', fullName],
        ['Mononymous name', yn(v.mononymous)],
        ['Preferred first name', v.preferredName || '—'],
        ['Birthdate', formatDate(v.birthdate)],
        ['Country of birth', v.countryOfBirth],
        ['Gender', v.gender],
        ['Pronouns', v.pronouns || '—'],
      ],
    },
    {
      title: 'Contact information',
      rows: [
        ['Address', v.address],
        ['Email', v.email],
        ['Home phone', v.homePhone || '—'],
        ['Mobile phone', v.mobilePhone || '—'],
      ],
    },
    {
      title: 'Other personal details',
      rows: [
        ['Changed name since secondary studies', yn(v.changedName)],
        ['Previous Monash student or applicant', yn(v.previousMonash)],
      ],
    },
    { title: 'Citizenship and visa', rows: [['Citizenship type', v.citizenship]] },
    { title: 'Aboriginal and Torres Strait Islander', rows: [['Aboriginal or Torres Strait Islander', yn(v.indigenous)]] },
    {
      title: 'Access and equity',
      rows: [
        ['Consent to use of personal information', yn(v.consent)],
        ['Disability or ongoing medical condition', yn(v.disability)],
      ],
    },
  ]

  return (
    <main className="registration-page">
      <div className="reg-wrap">
        <h1 className="reg-title">Registration received</h1>
        <p className="reg-lead">
          Thank you{v.givenNames ? `, ${v.preferredName || v.givenNames}` : ''}. We have received your details and will send a confirmation to <strong>{v.email}</strong>. Please check the information below.
        </p>

        {sections.map((s) => (
          <section key={s.title} className="reg-section">
            <h2 className="reg-section__title">{s.title}</h2>
            <dl className="reg-summary">
              {s.rows.map(([label, value]) => (
                <div key={label} className="reg-summary__row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        <section className="reg-section">
          <h2 className="reg-section__title">Supporting documents</h2>
          {documents.length === 0 ? (
            <p className="reg-section__intro">No documents uploaded.</p>
          ) : (
            <ul className="reg-upload__list">
              {documents.map((d) => (
                <li key={`${d.name}-${d.size}`} className="reg-upload__item">
                  <span className="reg-upload__name">{d.name}</span>
                  <span className="reg-upload__size">{formatSize(d.size)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="reg-actions">
          <button type="button" className="graphite-btn" onClick={() => dispatch({ type: 'STATE_EVENT', state: 'reset' })}>
            Back to home
          </button>
        </div>
      </div>
    </main>
  )
}
