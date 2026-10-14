import './Banner.css'

function Banner() {
  function handlePlaceholderClick(event) {
    event.preventDefault()
  }

  return (
    <section className="banner" aria-label="Presentación de la ferretería">
      <div className="banner-container">
        <div className="banner-texto">
          <h1>Todo lo que necesitas para construir y reparar.</h1>
          <p>Materiales de construcción, herramientas y ferretería general en La Serena.</p>
          <a className="banner-boton" href="#" onClick={handlePlaceholderClick}>
            Ver productos
          </a>
        </div>
        <div className="banner-imagen">
          <img
            src="/assets/img/logo-ferreteria-los-maestros.png"
            alt="Ferretería Los Maestros"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
