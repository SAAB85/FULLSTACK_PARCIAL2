import { Link, useParams } from 'react-router-dom'
import './Checkout.css'

function ResultadoCompra() {
    const { resultado } = useParams()
    const compraAprobada = resultado === 'aprobado'

    return (
        <main className="checkout-page checkout-result">
            <h1>{compraAprobada ? 'Compra simulada aprobada' : 'Pago simulado rechazado'}</h1>
            <p>{compraAprobada
                ? 'La compra de demostración terminó correctamente.'
                : 'La compra no se completó. Puedes intentarlo nuevamente.'}</p>
            <div className="checkout-result__links">
                <Link to="/productos">Volver a productos</Link>
                {!compraAprobada && <Link to="/checkout">Intentar nuevamente</Link>}
            </div>
        </main>
    )
}

export default ResultadoCompra
