import { Container, Row, Col, Alert } from 'react-bootstrap'
import ProductoDestacado from '../components/ProductoDestacado.jsx'
import '../components/ProductosDestacados.css'

function Ofertas({ productos, onAgregarAlCarrito }) {
  const ofertas = productos.filter((producto) => producto.oferta)

  return (
    <Container className="py-4">
      <h1 className="mb-3">Ofertas</h1>
      <p>Promociones de demostración disponibles en esta sesión.</p>
      {ofertas.length > 0 ? (
        <Row className="g-3">
          {ofertas.map((producto) => (
            <Col xs={12} lg={6} key={producto.codigo}>
              <ProductoDestacado
                producto={producto}
                onAgregarAlCarrito={onAgregarAlCarrito}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="info">En este momento no hay ofertas disponibles.</Alert>
      )}
    </Container>
  )
}

export default Ofertas
