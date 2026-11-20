import type { ReactNode } from 'react'

export function FormSection({ title, intro, children }: { title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <section className="reg-section">
      <h2 className="reg-section__title">{title}</h2>
      {intro && <p className="reg-section__intro">{intro}</p>}
      {children}
    </section>
  )
}

interface RowProps {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

export function Row({ id, label, required, error, children }: RowProps) {
  return (
    <div className={`reg-row${error ? ' reg-row--error' : ''}`}>
      <label className="reg-row__label" htmlFor={id}>
        {label}
        {required && <span className="reg-req">*</span>}
      </label>
      <div className="reg-row__control">
        {children}
        {error && <span className="reg-error" role="alert">{error}</span>}
      </div>
    </div>
  )
}

interface SelectProps {
  id: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
  required?: boolean
}

export function Select({ id, value, onChange, options, placeholder, required }: SelectProps) {
  return (
    <select id={id} className="reg-input reg-select" value={value} required={required} onChange={(e) => onChange(e.target.value)}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  )
}

/** Yes/No switch rendered as a toggle (matches the "No" slider in the original). */
export function Toggle({ id, checked, onChange, label }: { id: string; checked: boolean; onChange: (v: boolean) => void; label?: string }) {
  return (
    <div className="reg-toggle">
      <input id={id} type="checkbox" role="switch" checked={checked} onChange={(e) => onChange(e.target.checked)} aria-label={label} />
      <span className="reg-toggle__track" aria-hidden="true" />
      <span className="reg-toggle__text">{checked ? 'Yes' : 'No'}</span>
    </div>
  )
}

/** Segmented Yes / No button pair. */
export function YesNo({ name, value, onChange }: { name: string; value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="reg-yesno" role="radiogroup">
      {([true, false] as const).map((v) => (
        <button
          key={String(v)}
          type="button"
          role="radio"
          aria-checked={value === v}
          name={name}
          className={`reg-yesno__btn${value === v ? ' is-active' : ''}`}
          onClick={() => onChange(v)}
        >
          {v ? 'Yes' : 'No'}
        </button>
      ))}
    </div>
  )
}
