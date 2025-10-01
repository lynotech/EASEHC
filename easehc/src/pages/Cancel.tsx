import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type FormData = {
  nome: string
  cpf: string
  data: string
  hora: string
  motivo: string
  confirma: boolean
}

export default function Cancel() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    alert(`Cancelamento confirmado de ${data.data} às ${data.hora}.`)
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
        <h2 className="text-4xl font-bold text-white mb-4">Cancelar Consulta</h2>
        <p className="text-white/80 text-lg">
          Preencha o formulário para cancelar sua consulta.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto"
      >
        {/* Nome */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Nome Completo</label>
          <input
            type="text"
            {...register("nome", { required: "Digite seu nome completo" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
            placeholder="Digite seu nome completo"
          />
          {errors.nome && (
            <p className="text-red-400 text-sm mt-2">{errors.nome.message}</p>
          )}
        </div>

        {/* CPF */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">CPF</label>
          <input
            type="text"
            {...register("cpf", {
              required: "Digite seu CPF",
              pattern: { value: /^\d{11}$/, message: "Digite apenas 11 números" }
            })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
            placeholder="00000000000"
          />
          {errors.cpf && (
            <p className="text-red-400 text-sm mt-2">{errors.cpf.message}</p>
          )}
        </div>

        {/* Data */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Data da Consulta</label>
          <input
            type="date"
            {...register("data", { required: "Escolha uma data" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
          />
          {errors.data && (
            <p className="text-red-400 text-sm mt-2">{errors.data.message}</p>
          )}
        </div>

        {/* Hora */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Horário</label>
          <select
            {...register("hora", { required: "Selecione um horário" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
          >
            <option value="" className="bg-gray-800">Selecione...</option>
            <option value="08:00" className="bg-gray-800">08:00</option>
            <option value="09:00" className="bg-gray-800">09:00</option>
            <option value="10:00" className="bg-gray-800">10:00</option>
            <option value="11:00" className="bg-gray-800">11:00</option>
            <option value="13:00" className="bg-gray-800">13:00</option>
            <option value="14:00" className="bg-gray-800">14:00</option>
            <option value="15:00" className="bg-gray-800">15:00</option>
            <option value="16:00" className="bg-gray-800">16:00</option>
          </select>
          {errors.hora && (
            <p className="text-red-400 text-sm mt-2">{errors.hora.message}</p>
          )}
        </div>

        {/* Motivo */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Motivo do Cancelamento</label>
          <textarea
            {...register("motivo", { required: "Descreva o motivo do cancelamento" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300 min-h-[120px] resize-vertical"
            rows={4}
            placeholder="Descreva o motivo do cancelamento..."
          />
          {errors.motivo && (
            <p className="text-red-400 text-sm mt-2">{errors.motivo.message}</p>
          )}
        </div>

        {/* Confirmação */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              {...register("confirma", { required: "Confirme para cancelar" })}
              className="w-5 h-5 text-secondary bg-white/10 border-white/30 rounded focus:ring-secondary/30 focus:ring-2"
            />
            <label className="text-white font-medium">
              Confirmo que desejo cancelar esta consulta
            </label>
          </div>
          {errors.confirma && (
            <p className="text-red-400 text-sm mt-2">{errors.confirma.message}</p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-gradient-danger text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Confirmar Cancelamento
        </button>
      </form>
    </section>
  )
}
