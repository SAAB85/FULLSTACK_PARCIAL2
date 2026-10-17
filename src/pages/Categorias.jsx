import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import categorias from '../data/categorias.js'

function Categorias({ productos }) {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Categorías</h1>
      <p>Explora los productos agrupados por tipo.</p>
      <Row className="g-3">
        {categorias.map((categoria) => {
          const cantidad = productos.filter((producto) => producto.categoria === categoria).length
          return (
            <Col xs={12} md={6} lg={4} key={categoria}>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{categoria}</Card.Title>
                  <Card.Text>
                    {cantidad} {cantidad === 1 ? 'producto disponible' : 'productos disponibles'}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={'/productos?categoria=' + encodeURIComponent(categoria)}
                    variant="outline-primary"
                    className="mt-auto align-self-start"
                  >
                    Ver productos
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Categorias
