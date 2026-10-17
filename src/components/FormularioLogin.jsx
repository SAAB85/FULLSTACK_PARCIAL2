import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CampoFormulario from './CampoFormulario.jsx'
import validarLogin from '../validaciones/validarLogin.js'

const VALORES_INICIALES = { usuario: '', contrasena: '' }

function FormularioLogin({ onLogin }) {
    const navigate = useNavigate()
    const [credenciales, setCredenciales] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setCredenciales((actuales) => ({ ...actuales, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarLogin(credenciales)
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        const accesoCorrecto = onLogin?.(credenciales)

        if (accesoCorrecto) {
            navigate('/admin')
            return
        }

        setMensaje('Usuario o contraseña incorrectos.')
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="usuario" label="Usuario" value={credenciales.usuario} onChange={handleChange} error={errores.usuario} required autoComplete="username" />
                <CampoFormulario id="contrasena" label="Contraseña" type="password" value={credenciales.contrasena} onChange={handleChange} error={errores.contrasena} required autoComplete="current-password" />
            </div>
            <button className="admin-submit" type="submit">Ingresar</button>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
        </form>
    )
}

export default FormularioLogin
