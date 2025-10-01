import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type FormData = {
  nome: string
  cpf: string
  data: string
  hora: string
  motivo?: string
}

export default function Reschedule() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    alert(`Remarcação solicitada para ${data.data} às ${data.hora}.`)
    reset()
  }

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto min-h-screen">
        <div className="text-right mb-6">
          <Link to="/" className="inline-block px-4 py-2 border border-white bg-transparent text-white rounded-lg hover:bg-white/10 transition-colors" style={{marginRight: '35px'}}>
            Voltar
          </Link>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Remarcar Consulta</h2>
          <p className="text-white/80 text-lg">
            Preencha o formulário para reagendar.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="form-group">
            <label>Nome Completo</label>
            <input className="form-control" {...register('nome', { required: 'Informe seu nome' })}/>
            {errors.nome && <p className="error-message">{errors.nome.message}</p>}
          </div>

          <div className="form-group">
            <label>CPF</label>
            <input className="form-control" {...register('cpf', { required: 'Informe o CPF' })}/>
            {errors.cpf && <p className="error-message">{errors.cpf.message}</p>}
          </div>

          <div className="form-group">
            <label>Nova data</label>
            <input type="date" className="form-control date-input" {...register('data', { required: 'Informe a data' })}/>
            {errors.data && <p className="error-message">{errors.data.message}</p>}
          </div>

          <div className="form-group">
            <label>Novo horário</label>
            <select className="form-control" {...register('hora', { required: 'Selecione um horário' })}>
              <option value="">Selecione</option>
              {['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00'].map(h => <option key={h} value={h}>{h}</option>)}
            </select>
            {errors.hora && <p className="error-message">{errors.hora.message}</p>}
          </div>

          <div className="form-group">
            <label>Motivo (opcional)</label>
            <textarea className="form-control" {...register('motivo')} />
          </div>

          <button
            type="submit"
            className="w-full bg-success text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Solicitar Remarcação
          </button>
        </form>
    </section>
  )
}
