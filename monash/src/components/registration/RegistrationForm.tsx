import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { FormSection, Row, Select, Toggle, YesNo } from './controls'
import DocumentUpload from './DocumentUpload'
import type { RegistrationValues } from '../../state/registration'

const TITLES = ['Mr', 'Ms', 'Mrs', 'Miss', 'Mx', 'Dr', 'Prof']
const COUNTRIES = ['Australia', 'China', 'India', 'Indonesia', 'Malaysia', 'New Zealand', 'Singapore', 'United Kingdom', 'United States', 'Vietnam']
const GENDERS = ['Man (or male)', 'Woman (or female)', 'Non-binary', 'Prefer not to say', 'Another term']
const PRONOUNS = ['he/him', 'she/her', 'they/them', 'Another pronoun']
const CITIZENSHIP = [
  'I am an Australian Citizen (with or without dual citizenship)',
  'I am a New Zealand Citizen',
  'I am an Australian Permanent Resident',
  'I hold a temporary visa',
  'I am an international student (on or applying for a student visa)',
]

// Fictional demo applicant. The first name is supplied by the bot conversation.
const initialValues: RegistrationValues = {
  title: 'Ms',
  givenNames: '',
  lastName: 'Whitfield',
  mononymous: false,
  preferredName: '',
  birthdate: '1998-03-14',
  countryOfBirth: 'Australia',
  gender: 'Woman (or female)',
  pronouns: '',
  address: 'Unit 4, 12 Example Street, CLAYTON, VIC, Australia, 3168',
  updateAddress: false,
  email: 'jordan.whitfield@example.com',
  homePhone: '',
  mobilePhone: '+61 400 000 000',
  changedName: false,
  previousMonash: false,
  citizenship: CITIZENSHIP[0],
  indigenous: false,
  consent: null,
  disability: null,
}
type Values = RegistrationValues

interface Props {
  firstName?: string
  onSubmit: (values: Values, files: File[]) => void
}

export default function RegistrationForm({ firstName = '', onSubmit }: Props) {
  const [v, setV] = useState<Values>({ ...initialValues, givenNames: firstName })

  // A first name can also arrive while the form is already open.
  useEffect(() => {
    if (firstName) setV((p) => ({ ...p, givenNames: firstName }))
  }, [firstName])
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})

  const set = <K extends keyof Values>(k: K) => (val: Values[K]) => setV((p) => ({ ...p, [k]: val }))
  const text = (k: keyof Values) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }))

  const validate = () => {
    const e: Record<string, string> = {}
    const req = 'This field is required.'
    if (!v.givenNames.trim()) e.givenNames = req
    if (!v.lastName.trim()) e.lastName = req
    if (!v.birthdate) e.birthdate = req
    if (!v.countryOfBirth) e.countryOfBirth = req
    if (!v.gender) e.gender = req
    if (!v.address.trim()) e.address = req
    if (!v.email.trim()) e.email = req
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
    if (!v.citizenship) e.citizenship = req
    if (v.indigenous === null) e.indigenous = 'Please select Yes or No.'
    if (v.consent === null) e.consent = 'Please select Yes or No.'
    if (v.disability === null) e.disability = 'Please select Yes or No.'
    return e
  }

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      document.getElementById(`reg-${Object.keys(e)[0]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    onSubmit(v, files)
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit} noValidate>
      <FormSection title="Personal details">
        <Row id="reg-title" label="Title">
          <Select id="reg-title" value={v.title} onChange={set('title')} options={TITLES} placeholder="Choose one..." />
        </Row>
        <Row id="reg-givenNames" label="Legal given name(s)" required error={errors.givenNames}>
          <input id="reg-givenNames" className="reg-input" value={v.givenNames} onChange={text('givenNames')} autoComplete="given-name" />
        </Row>
        <Row id="reg-lastName" label="Legal last name" required error={errors.lastName}>
          <div className="reg-inline">
            <input id="reg-lastName" className="reg-input" value={v.lastName} onChange={text('lastName')} autoComplete="family-name" />
            <label className="reg-inline__toggle">
              <Toggle id="reg-mononymous" checked={v.mononymous} onChange={set('mononymous')} label="Mononymous name" />
              <span>Mononymous name</span>
            </label>
          </div>
        </Row>
        <Row id="reg-preferredName" label="Preferred First Name">
          <input id="reg-preferredName" className="reg-input" value={v.preferredName} onChange={text('preferredName')} />
        </Row>
        <Row id="reg-birthdate" label="Birthdate" required error={errors.birthdate}>
          <input id="reg-birthdate" type="date" className="reg-input" value={v.birthdate} onChange={text('birthdate')} />
        </Row>
        <Row id="reg-countryOfBirth" label="Country of birth" required error={errors.countryOfBirth}>
          <Select id="reg-countryOfBirth" value={v.countryOfBirth} onChange={set('countryOfBirth')} options={COUNTRIES} placeholder="Choose one..." />
        </Row>
        <Row id="reg-gender" label="Gender" required error={errors.gender}>
          <Select id="reg-gender" value={v.gender} onChange={set('gender')} options={GENDERS} placeholder="-- Select --" />
        </Row>
        <Row id="reg-pronouns" label="Pronouns">
          <Select id="reg-pronouns" value={v.pronouns} onChange={set('pronouns')} options={PRONOUNS} placeholder="-- Select --" />
        </Row>
      </FormSection>

      <FormSection title="Contact information">
        <label className="reg-update-address">
          <span>Update the address</span>
          <input type="checkbox" checked={v.updateAddress} onChange={(e) => set('updateAddress')(e.target.checked)} />
        </label>
        <Row id="reg-address" label="Address" required error={errors.address}>
          <input id="reg-address" className="reg-input" value={v.address} onChange={text('address')} readOnly={!v.updateAddress} autoComplete="street-address" />
        </Row>
        <Row id="reg-email" label="Email" required error={errors.email}>
          <input id="reg-email" type="email" className="reg-input" value={v.email} onChange={text('email')} autoComplete="email" />
        </Row>
        <Row id="reg-homePhone" label="Home Phone">
          <input id="reg-homePhone" type="tel" className="reg-input" value={v.homePhone} onChange={text('homePhone')} autoComplete="tel" />
        </Row>
        <Row id="reg-mobilePhone" label="Mobile Phone">
          <input id="reg-mobilePhone" type="tel" className="reg-input" value={v.mobilePhone} onChange={text('mobilePhone')} autoComplete="tel" />
        </Row>
      </FormSection>

      <FormSection title="Other Personal Details" intro="Please fill out the below if it is applicable to you or your previous studies.">
        <div className="reg-question">
          <label htmlFor="reg-changedName" className="reg-question__text reg-question__text--bold">
            Have you ever changed your name at any time during or after your secondary studies?
          </label>
          <Toggle id="reg-changedName" checked={v.changedName} onChange={set('changedName')} />
        </div>
        <div className="reg-question">
          <label htmlFor="reg-previousMonash" className="reg-question__text">
            Are you currently, or have you previously been, a student or applied to be a student at Monash University, Monash College, or a previous institution that is now part of Monash University?
          </label>
          <Toggle id="reg-previousMonash" checked={v.previousMonash} onChange={set('previousMonash')} />
        </div>
      </FormSection>

      <FormSection title="Citizenship and Visa Details">
        <Row id="reg-citizenship" label="Citizenship Type" required error={errors.citizenship}>
          <Select id="reg-citizenship" value={v.citizenship} onChange={set('citizenship')} options={CITIZENSHIP} placeholder="Choose one..." />
        </Row>
      </FormSection>

      <FormSection title="Aboriginal and Torres Strait Islander">
        <div className="reg-question" id="reg-indigenous">
          <span className="reg-question__text reg-question__text--bold">
            Are you an Aboriginal or Torres Strait islander?<span className="reg-req"> *</span>
          </span>
          <YesNo name="indigenous" value={v.indigenous} onChange={set('indigenous')} />
        </div>
        {errors.indigenous && <span className="reg-error" role="alert">{errors.indigenous}</span>}
      </FormSection>

      <FormSection
        title="Access and Equity"
        intro={<><a href="https://www.monash.edu/disability" target="_blank" rel="noreferrer">Disability Support Services</a> assists students with disabilities, mental health conditions and ongoing medical conditions. This includes students with learning difficulties, short-term injuries and students on the Autism Spectrum</>}
      >
        <div className="reg-callout">
          <p>This section includes the collection of sensitive, special-category data such as information about disabilities (if applicable).</p>
          <div className="reg-question" id="reg-consent">
            <span className="reg-question__text reg-question__text--bold">
              I consent to the personal information that I provide being used by Monash University for the purposes of identifying me and considering my application for admission to University and Monash College courses.<span className="reg-req">*</span>
            </span>
            <YesNo name="consent" value={v.consent} onChange={set('consent')} />
          </div>
          {errors.consent && <span className="reg-error" role="alert">{errors.consent}</span>}
        </div>
        <div className="reg-question" id="reg-disability">
          <span className="reg-question__text reg-question__text--bold">
            Do you have a disability, mental health or ongoing medical condition that may affect your studies or may prevent you to undertake your studies?<span className="reg-req"> *</span>
          </span>
          <YesNo name="disability" value={v.disability} onChange={set('disability')} />
        </div>
        {errors.disability && <span className="reg-error" role="alert">{errors.disability}</span>}
      </FormSection>

      <FormSection title="Supporting documents" intro="Upload any documents that support your application, such as a passport, birth certificate or academic transcripts.">
        <DocumentUpload files={files} onChange={setFiles} />
      </FormSection>

      <div className="reg-actions">
        <button type="submit" className="graphite-btn">Submit</button>
      </div>
    </form>
  )
}
