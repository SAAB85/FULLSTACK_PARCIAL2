import { Link } from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin.jsx'
import './AdminPage.css'

function Login({ onLogin }) {
    return (
        <main className="admin-panel">
            <h1>Inicio de sesión</h1>
            <p>Acceso de demostración: usuario <strong>admin</strong>, contraseña <strong>1234</strong>.</p>
            <FormularioLogin onLogin={onLogin} />
            <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.</p>
        </main>
    )
}

export default Login
