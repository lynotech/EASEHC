import type { FieldError } from 'react-hook-form'

type Props = {
  label: string
  children: React.ReactNode
  error?: FieldError
  required?: boolean
}

export default function FormField({ label, children, error, required }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </label>
      {children}
      {error && <p className="text-sm text-red-600 mt-1">{error.message}</p>}
    </div>
  )
}
