import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

type FormValues = {
  name: string
  cpf: string
  phone: string
  specialty: string
  date: string
  time: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log("Form enviado:", data)
    alert("Consulta agendada com sucesso! ✅")
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
        <h2 className="text-4xl font-bold text-white mb-4">Agende sua Consulta</h2>
        <p className="text-white/80 text-lg">
          Preencha o formulário abaixo e receba a confirmação rapidamente.
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
            {...register("name", { required: "Digite seu nome completo" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
            placeholder="Digite seu nome completo"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
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

        {/* Telefone */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Telefone</label>
          <input
            type="tel"
            {...register("phone", { required: "Digite seu telefone" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
            placeholder="(11) 90000-0000"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>
          )}
        </div>

        {/* Especialidade */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Especialidade Médica</label>
          <input
            type="text"
            {...register("specialty", { required: "Digite a especialidade" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
            placeholder="Ex: Cardiologia"
          />
          {errors.specialty && (
            <p className="text-red-400 text-sm mt-2">{errors.specialty.message}</p>
          )}
        </div>

        {/* Data */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Data</label>
          <input
            type="date"
            {...register("date", { required: "Escolha uma data" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300"
          />
          {errors.date && (
            <p className="text-red-400 text-sm mt-2">{errors.date.message}</p>
          )}
        </div>

        {/* Hora */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Hora</label>
          <select
            {...register("time", { required: "Selecione um horário" })}
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
          {errors.time && (
            <p className="text-red-400 text-sm mt-2">{errors.time.message}</p>
          )}
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Mensagem</label>
          <textarea
            {...register("message", { required: "Digite sua mensagem" })}
            className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-300 min-h-[120px] resize-vertical"
            rows={4}
            placeholder="Descreva seu problema ou dúvida"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-success text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Agendar Consulta"}
        </button>
      </form>
    </section>
  )
}
