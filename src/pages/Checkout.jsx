import { Link } from 'react-router-dom'
import { Container, Card, Button, Alert } from 'react-bootstrap'
import FormularioCheckout from '../components/FormularioCheckout.jsx'
import './Checkout.css'

function Checkout({ productos, carrito, onConfirmarCompra }) {
  const productosCompra = carrito.flatMap((item) => {
    const producto = productos.find((actual) => actual.codigo === item.codigo)
    return producto ? [{ producto, cantidad: item.cantidad }] : []
  })

  if (productosCompra.length === 0) {
    return (
      <Container className="py-4" style={{ maxWidth: '820px' }}>
        <h1>Finalizar compra</h1>
        <Alert variant="info">
          El carrito está vacío. Agrega productos antes de continuar.
        </Alert>
        <Button as={Link} to="/productos">Ver productos</Button>
      </Container>
    )
  }

  return (
    <Container className="py-4" style={{ maxWidth: '820px' }}>
      <h1>Finalizar compra</h1>
      <p>Completa tus datos de entrega y elige un resultado de pago para la demostración.</p>
      <Card aria-labelledby="checkout-form-title">
        <Card.Body>
          <h2 id="checkout-form-title" className="h4">Datos de compra</h2>
          <FormularioCheckout
            productosCompra={productosCompra}
            onConfirmarCompra={onConfirmarCompra}
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Checkout
