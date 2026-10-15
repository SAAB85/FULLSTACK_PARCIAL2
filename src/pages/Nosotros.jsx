import './Nosotros.css'

function Nosotros() {
  return (
    <section className="nosotros">
      <h1>Quiénes somos</h1>
      <div className="nosotros-contenido">
        <section className="nosotros-tarjeta">
          <img src="./assets/img/logo-ferreteria-los-maestros.png" alt="Logo de Ferretería Los Maestros" />
          <h2>Una historia familiar</h2>
          <p>
            Ferretería Los Maestros es un negocio familiar de La Serena con 22 años
            de trayectoria. Actualmente presentamos materiales de construcción,
            pinturas y herramientas.
          </p>
          <p>
            Las demás categorías se incorporarán próximamente. Este sitio es una
            propuesta frontend para facilitar la consulta de productos y la
            comunicación con la tienda.
          </p>
        </section>
        <section className="nosotros-tarjeta">
          <h2>Conoce el rubro ferretero</h2>
          <p>Video informativo relacionado con herramientas y trabajo en proyectos de construcción.</p>
          <iframe
            src="https://www.youtube.com/embed/8Qn_spdM5Zg"
            title="Video informativo sobre herramientas"
            allowFullScreen
          />
          <h2>Desarrolladores</h2>
          <p>Proyecto académico desarrollado por el equipo de estudiantes de DSY1104.</p>
        </section>
      </div>
    </section>
  )
}

export default Nosotros
