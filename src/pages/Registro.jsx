import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import FormularioRegistro from '../components/FormularioRegistro.jsx'

function Registro({ onRegistrarUsuario }) {
    return (
        <Container className="py-4">
            <Card className="mx-auto" style={{ maxWidth: '820px' }}>
                <Card.Body>
                    <h1>Registro de usuario</h1>
                    <FormularioRegistro onSubmit={onRegistrarUsuario} />
                    <p className="mt-3 mb-0">¿Ya tienes cuenta? <Link to="/login" className="link-marca">Ingresa aquí</Link>.</p>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Registro
