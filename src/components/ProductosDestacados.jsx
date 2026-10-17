import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProductoDestacado from './ProductoDestacado.jsx'
import './ProductosDestacados.css'

function ProductosDestacados({ productos }) {
  return (
    <section className="productos" aria-labelledby="destacados-titulo">
      <Container>
        <h2 id="destacados-titulo" className="productos-titulo">Productos destacados</h2>
        <Row className="g-3">
          {productos.map((producto) => (
            <Col xs={12} lg={6} key={producto.codigo}>
              <ProductoDestacado producto={producto} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-3">
          <Button as={Link} to="/productos" variant="outline-primary" className="productos-catalogo-boton">
            Revisar catálogo
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default ProductosDestacados
