import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handlePlaceholderClick(event) {
    event.preventDefault()
  }

  return (
    <header className="site-header">
      <nav className="site-navbar" aria-label="Navegación principal">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img
              src="/assets/img/logo-ferreteria-los-maestros.png"
              alt=""
            />
            <span className="navbar-brand-text">
              Los Maestros
              <small>Materiales y herramientas</small>
            </span>
          </div>

          <button
            className={`navbar-toggle ${isMenuOpen ? 'navbar-toggle--open' : ''}`}
            type="button"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-links"
            onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
          >
            <span className="navbar-toggle-lines" aria-hidden="true">
              <span className="navbar-toggle-line" />
              <span className="navbar-toggle-line" />
              <span className="navbar-toggle-line" />
            </span>
          </button>

          <ul
            className={`navbar-links ${isMenuOpen ? 'navbar-links--open' : ''}`}
            id="navbar-links"
          >
            <li><NavLink className="navbar-link" to="/" end>Inicio</NavLink></li>
            <li><NavLink className="navbar-link" to="/productos">Productos</NavLink></li>
            <li><NavLink className="navbar-link" to="/nosotros">Quiénes somos</NavLink></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Blogs</a></li>
            <li><NavLink className="navbar-link" to="/contacto">Contacto</NavLink></li>
            <li><NavLink className="navbar-link" to="/registro">Registrarse</NavLink></li>
            <li><NavLink className="navbar-link" to="/login">Ingresar</NavLink></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Carrito</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar