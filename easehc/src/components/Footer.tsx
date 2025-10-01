export default function Footer() {
  return (
    <footer className="site-footer mt-16 flex flex-col gap-8">
      <div className="container grid gap-8 grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg">EaseHC</h3>
          <p className="text-gray-600 mt-2">"Basta um click para cuidar de você"</p>
        </div>
        <div>
          <h3 className="font-semibold">Plataforma</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/#solutions" className="hover:underline">Solução Tecnológica</a></li>
            <li><a href="/features" className="hover:underline">Funcionalidades</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contato</h3>
          <ul className="mt-2 space-y-1">
            <li>📞 (11) 1234-5678</li>
            <li>✉️ suporte@easehc.com</li>
            <li>🏢 R. Dr. Ovídio Pires de Campos, 225 - SP</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container text-sm text-gray-600 flex items-center justify-between !mt-4">
          <p>© 2025 EaseHC. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
