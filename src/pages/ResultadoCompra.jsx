import { Link, useParams } from 'react-router-dom'
import { Container, Alert } from 'react-bootstrap'

function ResultadoCompra() {
    const { resultado } = useParams()
    const compraAprobada = resultado === 'aprobado'

    return (
        <Container className="py-4" style={{ maxWidth: '820px' }}>
            <Alert variant={compraAprobada ? 'success' : 'danger'}>
                <Alert.Heading>{compraAprobada ? 'Compra simulada aprobada' : 'Pago simulado rechazado'}</Alert.Heading>
                <p className="mb-0">{compraAprobada
                    ? 'La compra de demostración terminó correctamente.'
                    : 'La compra no se completó. Puedes intentarlo nuevamente.'}</p>
            </Alert>
            <div className="d-flex flex-wrap gap-3">
                <Link to="/productos" className="link-marca">Volver a productos</Link>
                {!compraAprobada && <Link to="/checkout" className="link-marca">Intentar nuevamente</Link>}
            </div>
        </Container>
    )
}

export default ResultadoCompra
