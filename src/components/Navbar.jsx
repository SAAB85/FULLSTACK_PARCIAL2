import { useState } from 'react'
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
            <li><a className="navbar-link" href="./index.html">Inicio</a></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Productos</a></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Nosotros</a></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Blogs</a></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Contacto</a></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Ingresar</a></li>
            <li><a className="navbar-link" href="#" onClick={handlePlaceholderClick}>Carrito</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
