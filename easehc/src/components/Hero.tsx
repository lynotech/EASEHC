import StatCard from './StatCard'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container" style={{ display: 'grid', gap: '2.5rem', alignItems: 'center', gridTemplateColumns: '1fr' }}>
        {/* md:grid-cols-2 replacement in CSS-in-JS for consistency without relying on Tailwind */}
        <div>
          <h1>EaseHC</h1>
          <p>
            Agendar, remarcar ou cancelar suas consultas e exames ficou muito mais fácil e rápido.
            Evite filas e ligações. Com alguns cliques, você cuida da sua saúde no seu tempo.
          </p>
        </div>
        <div className="stat-cards">
          <StatCard label={'Agendar<br/>Consulta'} to="/contact" />
          <StatCard label={'Remarcar<br/>Consulta'} to="/reschedule" />
          <StatCard label={'Cancelar<br/>Consulta'} to="/cancel" />
        </div>
      </div>
    </section>
  )
}
