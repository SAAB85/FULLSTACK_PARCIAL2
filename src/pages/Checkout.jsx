import { Link, useSearchParams } from 'react-router-dom'
import FormularioCheckout from '../components/FormularioCheckout.jsx'
import './AdminPage.css'
import './Checkout.css'

function Checkout({ productos }) {
    const [searchParams] = useSearchParams()
    const codigo = searchParams.get('producto')
    const producto = productos.find((item) => item.codigo === codigo) ?? productos[0]

    if (!producto) {
        return (
            <main className="checkout-page">
                <h1>Finalizar compra</h1>
                <p>No hay productos disponibles para simular la compra.</p>
                <Link to="/productos">Volver a productos</Link>
            </main>
        )
    }

    return (
        <main className="checkout-page">
            <h1>Finalizar compra</h1>
            <p>Completa tus datos de entrega y elige el resultado de pago para la demostración.</p>
            <section className="admin-panel" aria-labelledby="checkout-form-title">
                <h2 id="checkout-form-title">Datos de compra</h2>
                <FormularioCheckout producto={producto} />
            </section>
        </main>
    )
}

export default Checkout
