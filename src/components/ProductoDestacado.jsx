import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'

function ProductoDestacado({ producto, onAgregarAlCarrito }) {
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
            {producto.oferta && (
              <Card.Text className="mb-1 text-muted">
                <del>{'$' + Number(producto.precioAnterior).toLocaleString('es-CL')}</del>
                <span className="ms-2 badge text-bg-danger">Oferta</span>
              </Card.Text>
            )}
            <Card.Text className="producto-precio">
              {'$' + Number(producto.precio).toLocaleString('es-CL')}
            </Card.Text>
            <div className="d-flex flex-wrap gap-2 mt-auto align-items-start">
              <Button
                as={Link}
                to={'/productos/' + encodeURIComponent(producto.codigo)}
                variant="outline-primary"
                size="sm"
              >
                Ver detalle
              </Button>
              {onAgregarAlCarrito && (
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={() => onAgregarAlCarrito(producto.codigo)}
                  disabled={producto.stock < 1}
                >
                  {producto.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
                </Button>
              )}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ProductoDestacado
