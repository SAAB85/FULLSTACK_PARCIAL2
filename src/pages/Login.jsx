import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import FormularioLogin from '../components/FormularioLogin.jsx'

function Login({ onLogin }) {
    return (
        <Container className="py-4">
            <Card className="mx-auto" style={{ maxWidth: '640px' }}>
                <Card.Body>
                    <h1>Inicio de sesión</h1>
                    <p>Acceso de demostración: usuario <strong>admin</strong>, contraseña <strong>1234</strong>.</p>
                    <FormularioLogin onLogin={onLogin} />
                    <p className="mt-3 mb-0">¿No tienes cuenta? <Link to="/registro" className="link-marca">Regístrate aquí</Link>.</p>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login
