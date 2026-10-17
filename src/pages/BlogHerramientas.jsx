import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BlogHerramientas() {
  return (
    <Container className="py-4">
      <Link to="/blogs" className="link-marca">← Volver a blogs</Link>
      <Card as="article" className="mt-3">
        <Card.Body>
          <h1>Herramientas básicas para el hogar</h1>
          <p>
            Un martillo, un alicate, destornilladores y una huincha de medir
            forman una base práctica para resolver tareas habituales en el hogar.
          </p>
          <p>
            Antes de usar una herramienta, revisa que esté en buenas condiciones
            y utiliza elementos de protección cuando el trabajo lo requiera.
            En nuestra tienda puedes consultar distintas opciones según tu proyecto.
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BlogHerramientas
