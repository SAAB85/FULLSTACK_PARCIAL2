import { Container, Card, ListGroup } from 'react-bootstrap'
import FormularioContacto from '../components/FormularioContacto.jsx'

function Contacto({ mensajes, onEnviarMensaje }) {
    return (
        <Container className="py-4">
            <h1>Contacto</h1>
            <p>Envíanos tu consulta y te responderemos en la tienda.</p>

            <Card className="mb-4">
                <Card.Body>
                    <FormularioContacto onSubmit={onEnviarMensaje} />
                </Card.Body>
            </Card>

            <section aria-labelledby="mensajes-sesion">
                <h2 id="mensajes-sesion" className="h4">Consultas de esta sesión</h2>
                {mensajes.length === 0 ? (
                    <p>Aún no hay consultas enviadas.</p>
                ) : (
                    <ListGroup>
                        {mensajes.map((mensaje) => (
                            <ListGroup.Item key={mensaje.id}>
                                <strong>{mensaje.nombre}</strong>
                                {mensaje.correo && <span> · {mensaje.correo}</span>}
                                <p className="mb-0">{mensaje.comentario}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </section>
        </Container>
    )
}

export default Contacto
