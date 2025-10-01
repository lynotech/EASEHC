type Props = { label: string; to: string; onClick?: () => void }

import { useNavigate } from 'react-router-dom'

export default function StatCard({ label, to, onClick }: Props) {
  const navigate = useNavigate() // Hook: navegação programática
  return (
    <button
      onClick={() => { onClick?.(); navigate(to) }}
      className="stat-card"
    >
      <div dangerouslySetInnerHTML={{ __html: label }} />
    </button>
  )
}
