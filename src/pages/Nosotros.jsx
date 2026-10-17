import { Container, Row, Col, Card, Ratio } from 'react-bootstrap'
import './Nosotros.css'

function Nosotros() {
  return (
    <section className="nosotros py-4">
      <Container>
        <h1>Quiénes somos</h1>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="nosotros-tarjeta h-100">
              <Card.Body>
                <img
                  src="/assets/img/logo-ferreteria-los-maestros.png"
                  alt="Logo de Ferretería Los Maestros"
                  className="nosotros-logo"
                />
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
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="nosotros-tarjeta h-100">
              <Card.Body>
                <h2>Conoce el rubro ferretero</h2>
                <p>Video informativo relacionado con herramientas y trabajo en proyectos de construcción.</p>
                <Ratio aspectRatio="16x9">
                  <iframe
                    src="https://www.youtube.com/embed/8Qn_spdM5Zg"
                    title="Video informativo sobre herramientas"
                    allowFullScreen
                  />
                </Ratio>
                <h2 className="mt-3">Desarrolladores</h2>
                <p>Proyecto académico desarrollado por el equipo de estudiantes de DSY1104.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Nosotros
