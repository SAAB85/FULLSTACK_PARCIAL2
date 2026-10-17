import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'

function ProductoDestacado({ producto }) {
  return (
    <Card className="producto h-100">
      <Row className="g-0 h-100">
        {producto.imagen && (
          <Col xs={4} md={5}>
            <Card.Img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-img"
            />
          </Col>
        )}
        <Col xs={producto.imagen ? 8 : 12} md={producto.imagen ? 7 : 12}>
          <Card.Body className="d-flex flex-column h-100">
            <Card.Subtitle className="producto-categoria">{producto.categoria}</Card.Subtitle>
            <Card.Title className="producto-nombre">{producto.nombre}</Card.Title>
            <Card.Text className="producto-precio">${producto.precio}</Card.Text>
            <Button
              as={Link}
              to={`/checkout?producto=${encodeURIComponent(producto.codigo)}`}
              variant="outline-primary"
              size="sm"
              className="producto-consultar mt-auto align-self-start"
            >
              Comprar
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ProductoDestacado
