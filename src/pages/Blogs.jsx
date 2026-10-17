import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <Container className="py-4">
      <h1>Blogs</h1>
      <p>Consejos para preparar tus proyectos y hacer reparaciones en casa.</p>
      <Row className="g-4">
        <Col md={6}>
          <Card as="article" className="h-100">
            <Card.Body>
              <h2 className="h4">Cómo elegir materiales para una reparación</h2>
              <p>Revisa algunas recomendaciones antes de comenzar un proyecto en casa.</p>
              <Link to="/blogs/materiales" className="link-marca">Leer más sobre materiales</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card as="article" className="h-100">
            <Card.Body>
              <h2 className="h4">Herramientas básicas para el hogar</h2>
              <p>Una selección de herramientas útiles para mantener y reparar tu hogar.</p>
              <Link to="/blogs/herramientas" className="link-marca">Leer más sobre herramientas</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Blogs
