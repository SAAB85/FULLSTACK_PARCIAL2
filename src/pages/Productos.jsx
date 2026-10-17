import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import ProductoDestacado from '../components/ProductoDestacado.jsx'
import '../components/ProductosDestacados.css'
import './Productos.css'

const CATEGORIAS_PROXIMAS = [
  'Gasfitería',
  'Electricidad',
  'Tornillería',
  'Madera',
  'Seguridad',
  'Jardín',
]

function Productos({ productos }) {
  return (
    <section className="productos">
      <Container>
        <h1 className="productos-titulo">Productos</h1>
        <p className="productos-intro">
          Muestra representativa: dos productos por cada categoría disponible en esta
          primera etapa.
        </p>

        <section className="categorias mb-4" aria-labelledby="categorias-proximas-titulo">
          <h2 id="categorias-proximas-titulo" className="categorias-titulo">
            Otras categorías
          </h2>
          <ListGroup>
            {CATEGORIAS_PROXIMAS.map((categoria) => (
              <ListGroup.Item key={categoria}>
                <strong>{categoria}</strong> - Próximamente
              </ListGroup.Item>
            ))}
          </ListGroup>
        </section>

        <section aria-labelledby="productos-disponibles-titulo">
          <h2 id="productos-disponibles-titulo" className="productos-subtitulo">
            Productos disponibles
          </h2>
          <Row className="g-3">
            {productos.map((producto) => (
              <Col xs={12} lg={6} key={producto.codigo}>
                <ProductoDestacado producto={producto} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </section>
  )
}

export default Productos
