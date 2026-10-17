import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BlogMateriales() {
  return (
    <Container className="py-4">
      <Link to="/blogs" className="link-marca">← Volver a blogs</Link>
      <Card as="article" className="mt-3">
        <Card.Body>
          <h1>Cómo elegir materiales para una reparación</h1>
          <p>
            Antes de comenzar una reparación es importante revisar las medidas,
            la superficie y el uso que tendrá el espacio. Con esa información
            podrás elegir una cantidad adecuada de materiales y evitar compras
            innecesarias.
          </p>
          <p>
            También conviene comparar la unidad de venta de cada producto.
            Algunos materiales se venden por saco, unidad, caja, metro o plancha.
            Llevar una lista preparada facilita la atención en la tienda.
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BlogMateriales
