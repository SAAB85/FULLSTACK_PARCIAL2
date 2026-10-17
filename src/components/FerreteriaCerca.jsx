import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './FerreteriaCerca.css'

function FerreteriaCerca() {
  return (
    <section className="ferreteria-cerca" aria-labelledby="empresa-titulo">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <h2 id="empresa-titulo" className="ferreteria-cerca-titulo">
              Una ferretería cercana para cada proyecto
            </h2>
            <p>
              Somos un negocio familiar con 22 años de trayectoria, atendido por
              personas que conocen el trabajo en obra y las necesidades del hogar.
            </p>
            <Link to="/nosotros" className="link-marca">
              Conoce más sobre nosotros
            </Link>
          </Col>
          <Col lg={5}>
            <div className="ferreteria-cerca-tarjeta">
              <img
                src="/assets/img/logo-ferreteria-los-maestros.png"
                alt="Identidad de Ferretería Los Maestros"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FerreteriaCerca
