import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Hook: fecha o menu ao redimensionar (responsividade)
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navItem = 'px-3 py-2 rounded-lg hover:bg-white/10 text-white'

  return (
    <header className="sticky-header" style={{background:'rgba(0,0,0,0)'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'64px'}}>
        <Link to="/" className="flex items-center gap-2">
          <img src="/imagens/logo.png" className="h-10" alt="Logo EaseHC" />
          <span className="font-semibold">EaseHC</span>
        </Link>
        <button className="lg:hidden p-2 rounded-lg" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          ☰
        </button>
        <nav className={`absolute lg:static left-0 right-0 ${open ? 'top-16' : '-top-96'} transition-all duration-300`}>
          <ul className="container nav py-3 lg:py-0 items-center" style={{flexDirection: 'row'}}>
            <li><NavLink to="/" className={navItem}>Início</NavLink></li>
            <li><NavLink to="/features" className={navItem}>Funcionalidades</NavLink></li>
            <li><NavLink to="/solutions" className={navItem}>Soluções</NavLink></li>
            <li><NavLink to="/team" className={navItem}>Equipe</NavLink></li>
            <li><NavLink to="/faq" className={navItem}>FAQ</NavLink></li>
            <li className="lg:ml-auto" style={{display:'flex',gap:'.5rem'}}>
              <NavLink to="/contact" className="btn btn-menu">Agendar</NavLink>
              <NavLink to="/reschedule" className="btn btn-menu">Remarcar</NavLink>
              <NavLink to="/cancel" className="btn btn-danger">Cancelar</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
