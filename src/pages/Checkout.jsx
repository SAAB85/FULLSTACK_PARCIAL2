import { Link, useSearchParams } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import FormularioCheckout from '../components/FormularioCheckout.jsx'
import './Checkout.css'

function Checkout({ productos }) {
    const [searchParams] = useSearchParams()
    const codigo = searchParams.get('producto')
    const producto = productos.find((item) => item.codigo === codigo) ?? productos[0]

    if (!producto) {
        return (
            <Container className="py-4">
                <h1>Finalizar compra</h1>
                <p>No hay productos disponibles para simular la compra.</p>
                <Link to="/productos" className="link-marca">Volver a productos</Link>
            </Container>
        )
    }

    return (
        <Container className="py-4" style={{ maxWidth: '820px' }}>
            <h1>Finalizar compra</h1>
            <p>Completa tus datos de entrega y elige el resultado de pago para la demostración.</p>
            <Card aria-labelledby="checkout-form-title">
                <Card.Body>
                    <h2 id="checkout-form-title" className="h4">Datos de compra</h2>
                    <FormularioCheckout producto={producto} />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Checkout
