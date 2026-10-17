import { useState } from 'react'
import CampoFormulario from './CampoFormulario.jsx'
import validarLogin from '../validaciones/validarLogin.js'

const VALORES_INICIALES = { correo: '', contrasena: '' }

function FormularioLogin() {
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

        setMensaje('Datos validados. El inicio de sesión aún no está conectado a un servidor.')
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="correo" label="Correo" type="email" value={credenciales.correo} onChange={handleChange} error={errores.correo} maxLength={100} required autoComplete="email" />
                <CampoFormulario id="contrasena" label="Contraseña" type="password" value={credenciales.contrasena} onChange={handleChange} error={errores.contrasena} minLength={4} maxLength={10} required autoComplete="current-password" />
            </div>
            <button className="admin-submit" type="submit">Ingresar</button>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
        </form>
    )
}

export default FormularioLogin
