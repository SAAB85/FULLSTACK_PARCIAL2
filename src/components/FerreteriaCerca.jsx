import { Link } from 'react-router-dom'
import './FerreteriaCerca.css'

function FerreteriaCerca() {
  return (
    <section className="ferreteria-cerca" aria-labelledby="empresa-titulo">
      <div className="ferreteria-cerca-container">
        <div className="ferreteria-cerca-texto">
          <h2 id="empresa-titulo" className="ferreteria-cerca-titulo">
            Una ferretería cercana para cada proyecto
          </h2>
          <p>
            Somos un negocio familiar con 22 años de trayectoria, atendido por
            personas que conocen el trabajo en obra y las necesidades del hogar.
          </p>
          <Link to="/nosotros">Conoce más sobre nosotros</Link>
        </div>
        <div className="ferreteria-cerca-imagen">
          <div className="ferreteria-cerca-tarjeta">
            <img
              src="/assets/img/logo-ferreteria-los-maestros.png"
              alt="Identidad de Ferretería Los Maestros"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FerreteriaCerca
