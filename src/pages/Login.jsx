import { Link } from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin.jsx'

function Login() {
    return (
        <main className="admin-panel">
            <h1>Inicio de sesión</h1>
            <FormularioLogin />
            <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.</p>
        </main>
    )
}

export default Login
