import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'

function Carrito({ productos, carrito, onCambiarCantidad, onEliminarProducto }) {
  const lineas = carrito.flatMap((item) => {
    const producto = productos.find((actual) => actual.codigo === item.codigo)
    return producto ? [{ producto, cantidad: item.cantidad }] : []
  })
  const total = lineas.reduce((suma, item) => suma + item.producto.precio * item.cantidad, 0)

  return (
    <Container className="py-4">
      <h1 className="mb-3">Carrito de compras</h1>
      {lineas.length === 0 ? (
        <Alert variant="info">
          <p className="mb-3">El carrito está vacío.</p>
          <Button as={Link} to="/productos" variant="primary">Ver productos</Button>
        </Alert>
      ) : (
        <>
          <Row className="g-3">
            <Col xs={12} lg={8}>
              <div className="d-grid gap-3">
                {lineas.map(({ producto, cantidad }) => (
                  <Card key={producto.codigo}>
                    <Card.Body>
                      <Row className="g-3 align-items-center">
                        {producto.imagen && (
                          <Col xs={4} md={3}>
                            <Card.Img src={producto.imagen} alt={producto.nombre} />
                          </Col>
                        )}
                        <Col>
                          <Card.Subtitle className="text-muted">{producto.categoria}</Card.Subtitle>
                          <Card.Title className="h5 mt-1">{producto.nombre}</Card.Title>
                          <p className="mb-2">
                            {'$' + Number(producto.precio).toLocaleString('es-CL')} por unidad
                          </p>
                          <Form.Group controlId={'cantidad-' + producto.codigo} className="mb-2">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                              type="number"
                              min="1"
                              max={producto.stock}
                              value={cantidad}
                              onChange={(event) => onCambiarCantidad(
                                producto.codigo,
                                Number(event.target.value),
                              )}
                              aria-label={'Cantidad de ' + producto.nombre}
                            />
                          </Form.Group>
                          <Button
                            type="button"
                            variant="outline-danger"
                            size="sm"
                            onClick={() => onEliminarProducto(producto.codigo)}
                          >
                            Quitar
                          </Button>
                        </Col>
                        <Col xs={12} md="auto" className="text-md-end">
                          <strong>
                            {'$' + Number(producto.precio * cantidad).toLocaleString('es-CL')}
                          </strong>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resumen</Card.Title>
                  <p className="d-flex justify-content-between">
                    <span>Productos</span>
                    <strong>{lineas.reduce((suma, item) => suma + item.cantidad, 0)}</strong>
                  </p>
                  <p className="d-flex justify-content-between mb-3">
                    <span>Total</span>
                    <strong>{'$' + Number(total).toLocaleString('es-CL')}</strong>
                  </p>
                  <Button as={Link} to="/checkout" className="w-100">
                    Continuar a la compra
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default Carrito
