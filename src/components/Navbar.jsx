import './Navbar.css'

function Navbar() {
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

          <ul className="navbar-links">
            <li><span className="navbar-link">Inicio</span></li>
            <li><span className="navbar-link">Productos</span></li>
            <li><span className="navbar-link">Nosotros</span></li>
            <li><span className="navbar-link">Blogs</span></li>
            <li><span className="navbar-link">Contacto</span></li>
            <li><span className="navbar-link">Ingresar</span></li>
            <li><span className="navbar-link">Carrito</span></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
