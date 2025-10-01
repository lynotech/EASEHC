import { Link } from 'react-router-dom'
import { team } from '../data/team'

export default function Team() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="section-title">
          <h2>Nossa Equipe</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {team.map(m => (
            <div key={m.id} className="card text-center">
              <img src={m.fotoUrl} alt={m.nome} className="w-28 h-28 object-cover rounded-full mx-auto" />
              <h3 className="mt-3 font-semibold">{m.nome}</h3>
              <div className="text-sm text-gray-600">RM {m.rm} • {m.turma}</div>
              <div className="flex gap-3 justify-center mt-3">
                {m.linkedin && <a href={m.linkedin} target="_blank"><img className="h-6" src="/imagens/linkedin.svg" /></a>}
                {m.github && <a href={m.github} target="_blank"><img className="h-6" src="/imagens/github.svg" /></a>}
              </div>
              <Link to={`/team/${m.id}`} className="btn btn-primary mt-4">Ver Perfil</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
