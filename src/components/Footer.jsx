import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="pie">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <h2>Ferretería Los Maestros</h2>
            <small>Materiales, herramientas y ferretería general.</small>
          </Col>
          <Col md={6}>
            <h2>Enlaces</h2>
            <nav className="pie-enlaces d-flex flex-wrap gap-3" aria-label="Enlaces del pie de página">
              <Link to="/contacto">Contacto</Link>
              <Link to="/login">Ingresar</Link>
              <Link to="/admin">Administración</Link>
            </nav>
          </Col>
        </Row>
        <hr />
        <small>© {anio} Ferretería Los Maestros · La Serena</small>
      </Container>
    </footer>
  )
}

export default Footer
