import { Link } from 'react-router-dom'
import FormularioRegistro from '../components/FormularioRegistro.jsx'

function Registro() {
    return (
        <main className="admin-panel">
            <h1>Registro de usuario</h1>
            <FormularioRegistro />
            <p>¿Ya tienes cuenta? <Link to="/login">Ingresa aquí</Link>.</p>
        </main>
    )
}

export default Registro
