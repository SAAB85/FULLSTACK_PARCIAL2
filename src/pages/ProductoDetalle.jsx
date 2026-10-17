import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap'

function ProductoDetalle({ productos, onAgregarAlCarrito }) {
  const { codigo } = useParams()
  const producto = productos.find((item) => item.codigo === codigo)

  if (!producto) {
    return (
      <Container className="py-4">
        <Alert variant="warning">No se encontró el producto solicitado.</Alert>
        <Link to="/productos" className="link-marca">Volver a productos</Link>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <Link to="/productos" className="link-marca">← Volver a productos</Link>
      <Card className="mt-3">
        <Row className="g-0">
          {producto.imagen && (
            <Col xs={12} md={5}>
              <Card.Img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-100 object-fit-cover"
              />
            </Col>
          )}
          <Col>
            <Card.Body className="p-4">
              <p className="text-muted mb-2">{producto.categoria} · Código {producto.codigo}</p>
              <div className="d-flex gap-2 align-items-center">
                <h1 className="h2 mb-2">{producto.nombre}</h1>
                {producto.oferta && <Badge bg="danger">Oferta</Badge>}
              </div>
              <p>{producto.descripcion || 'Consulta las características de este producto en la tienda.'}</p>
              {producto.oferta && (
                <p className="text-muted mb-1">
                  Precio anterior: <del>{'$' + Number(producto.precioAnterior).toLocaleString('es-CL')}</del>
                </p>
              )}
              <p className="h4">
                {'$' + Number(producto.precio).toLocaleString('es-CL')}
              </p>
              <p>{producto.stock > 0 ? 'Stock disponible: ' + producto.stock : 'Producto sin stock'}</p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  type="button"
                  onClick={() => onAgregarAlCarrito(producto.codigo)}
                  disabled={producto.stock < 1}
                >
                  Agregar al carrito
                </Button>
                <Button as={Link} to="/carrito" variant="outline-primary">
                  Ir al carrito
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default ProductoDetalle
