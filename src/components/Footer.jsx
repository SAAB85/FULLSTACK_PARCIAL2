import './Footer.css'

function Footer() {
  function handlePlaceholderClick(event) {
    event.preventDefault()
  }

  const anio = new Date().getFullYear()

  return (
    <footer className="pie">
      <div className="pie-container">
        <div className="pie-columnas">
          <div className="pie-columna">
            <h2>Ferretería Los Maestros</h2>
            <small>Materiales, herramientas y ferretería general.</small>
          </div>
          <div className="pie-columna">
            <h2>Enlaces</h2>
            <nav className="pie-enlaces" aria-label="Enlaces del pie de página">
              <a href="#" onClick={handlePlaceholderClick}>Contacto</a>
              <a href="#" onClick={handlePlaceholderClick}>Ingresar</a>
              <a href="#" onClick={handlePlaceholderClick}>Administración</a>
            </nav>
          </div>
        </div>
        <hr />
        <small>© {anio} Ferretería Los Maestros · La Serena</small>
      </div>
    </footer>
  )
}

export default Footer
