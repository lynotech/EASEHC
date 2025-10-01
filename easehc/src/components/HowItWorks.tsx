const steps = [
  { n: 1, t: 'Facilidade com a sua Consulta', d: 'Agende, remarque ou cancele online de forma rápida, segura e prática.' },
  { n: 2, t: 'Especialidades Médicas', d: 'Entenda qual especialidade atende seu caso.' },
  { n: 3, t: 'Orientações Médicas', d: 'Confira preparos e evite imprevistos.' },
  { n: 4, t: 'Notificação Instantânea', d: 'Confirmações e lembretes automáticos.' },
  { n: 5, t: 'Monitoramento', d: 'Acompanhe o status em tempo real.' },
  { n: 6, t: 'Localização e Como Chegar', d: 'Veja rotas e transporte público.' }
]

export default function HowItWorks() {
  return (
    <section id="features" className="py-16">
      <div className="container">
        <div className="section-title">
          <h2>Como Funciona</h2>
          <p>Conheça os serviços da nossa plataforma</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {steps.map(s => (
            <div key={s.n} className="card">
              <div className="step-number">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
