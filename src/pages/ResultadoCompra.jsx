import { Link, useParams } from 'react-router-dom'
import { Container, Alert, Card, Button } from 'react-bootstrap'

function ResultadoCompra({ compra }) {
  const { resultado } = useParams()
  const compraAprobada = resultado === 'aprobado'

  return (
    <Container className="py-4" style={{ maxWidth: '820px' }}>
      <Alert variant={compraAprobada ? 'success' : 'danger'}>
        <Alert.Heading>
          {compraAprobada ? 'Compra simulada aprobada' : 'Pago simulado rechazado'}
        </Alert.Heading>
        <p className="mb-0">
          {compraAprobada
            ? 'La compra de demostración terminó correctamente.'
            : 'La compra no se completó. Puedes intentarlo nuevamente.'}
        </p>
      </Alert>

      {compra ? (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Resumen de compra</Card.Title>
            <p className="mb-1"><strong>Cliente:</strong> {compra.nombre}</p>
            <p className="mb-1"><strong>Correo:</strong> {compra.correo}</p>
            <p className="mb-1"><strong>Entrega:</strong> {compra.tipoEntrega}</p>
            <p><strong>Dirección:</strong> {compra.direccion}, {compra.comuna}, {compra.region}</p>
            <ul className="list-unstyled">
              {compra.items.map((item) => (
                <li key={item.codigo} className="d-flex justify-content-between gap-3">
                  <span>{item.nombre} × {item.cantidad}</span>
                  <strong>{'$' + Number(item.precio * item.cantidad).toLocaleString('es-CL')}</strong>
                </li>
              ))}
            </ul>
            <p className="d-flex justify-content-between mb-0">
              <strong>Total</strong>
              <strong>{'$' + Number(compra.total).toLocaleString('es-CL')}</strong>
            </p>
          </Card.Body>
        </Card>
      ) : (
        <Alert variant="secondary">
          El detalle de esta compra ya no está disponible en esta sesión.
        </Alert>
      )}

      <div className="d-flex flex-wrap gap-3">
        <Button as={Link} to="/productos">Volver a productos</Button>
        {!compraAprobada && (
          <Button as={Link} to={compra ? '/carrito' : '/productos'} variant="outline-primary">
            Intentar nuevamente
          </Button>
        )}
      </div>
    </Container>
  )
}

export default ResultadoCompra
