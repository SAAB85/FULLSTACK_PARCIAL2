import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Banner.css'

function Banner() {
  return (
    <section className="banner" aria-label="Presentación de la ferretería">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <h1>Todo lo que necesitas para construir y reparar.</h1>
            <p>Materiales de construcción, herramientas y ferretería general en La Serena.</p>
            <Button as={Link} to="/productos" className="btn-marca">
              Ver productos
            </Button>
          </Col>
          <Col lg={5} className="text-center">
            <img
              src="/assets/img/logo-ferreteria-los-maestros.png"
              alt="Ferretería Los Maestros"
              className="banner-imagen img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
