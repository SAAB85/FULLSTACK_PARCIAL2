import { Container, Card } from 'react-bootstrap'

function Blogs() {
  return (
    <Container className="py-4">
      <h1>Blogs</h1>
      <Card>
        <Card.Body>
          <p className="mb-0">
            Próximamente publicaremos consejos, guías de proyectos y novedades de la
            ferretería en esta sección.
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Blogs
