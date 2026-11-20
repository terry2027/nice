import { useRef, useState } from 'react'

const MAX_BYTES = 10 * 1024 * 1024
const ACCEPT = '.pdf,.jpg,.jpeg,.png'

const formatSize = (b: number) => (b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`)

interface Props {
  files: File[]
  onChange: (files: File[]) => void
}

export default function DocumentUpload({ files, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [problems, setProblems] = useState<string[]>([])

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return
    const errs: string[] = []
    const next = [...files]
    Array.from(incoming).forEach((f) => {
      const ext = f.name.split('.').pop()?.toLowerCase() ?? ''
      if (!['pdf', 'jpg', 'jpeg', 'png'].includes(ext)) errs.push(`${f.name}: only PDF, JPG or PNG files are accepted.`)
      else if (f.size > MAX_BYTES) errs.push(`${f.name}: file is larger than 10 MB.`)
      else if (!next.some((x) => x.name === f.name && x.size === f.size)) next.push(f)
    })
    setProblems(errs)
    onChange(next)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="reg-upload">
      <div
        className={`reg-upload__drop${dragging ? ' is-dragging' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files) }}
      >
        <p className="reg-upload__text">Drag and drop documents here, or</p>
        <button type="button" className="graphite-btn graphite-btn--secondary" onClick={() => inputRef.current?.click()}>
          Browse files
        </button>
        <input ref={inputRef} id="documents" type="file" multiple accept={ACCEPT} className="sr-only" onChange={(e) => addFiles(e.target.files)} />
        <p className="reg-upload__hint">PDF, JPG or PNG, up to 10 MB each.</p>
      </div>

      {problems.length > 0 && (
        <ul className="reg-upload__problems" role="alert">
          {problems.map((p) => <li key={p}>{p}</li>)}
        </ul>
      )}

      {files.length > 0 && (
        <ul className="reg-upload__list">
          {files.map((f) => (
            <li key={`${f.name}-${f.size}`} className="reg-upload__item">
              <span className="reg-upload__name">{f.name}</span>
              <span className="reg-upload__size">{formatSize(f.size)}</span>
              <button type="button" className="reg-upload__remove" aria-label={`Remove ${f.name}`} onClick={() => onChange(files.filter((x) => x !== f))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
