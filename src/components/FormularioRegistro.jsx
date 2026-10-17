import { useState } from 'react'
import CampoFormulario from './CampoFormulario.jsx'
import validarUsuario from '../validaciones/validarUsuario.js'

const VALORES_INICIALES = {
    run: '',
    nombre: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    confirmarClave: '',
    tipo: 'Cliente',
    region: '',
    comuna: '',
    direccion: '',
}

const REGIONES = ['Coquimbo', 'Valparaíso', 'Metropolitana']
const COMUNAS = ['La Serena', 'Coquimbo', 'Ovalle', 'Valparaíso', 'Viña del Mar', 'Santiago']

function FormularioRegistro() {
    const [usuario, setUsuario] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setUsuario((actual) => ({ ...actual, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarUsuario(usuario)
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        setMensaje('Datos validados. El registro aún no está conectado a un servidor.')
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="run" label="RUN" value={usuario.run} onChange={handleChange} error={errores.run} minLength={7} maxLength={9} placeholder="19011022K" required />
                <CampoFormulario id="nombre" label="Nombre" value={usuario.nombre} onChange={handleChange} error={errores.nombre} maxLength={50} required autoComplete="given-name" />
                <CampoFormulario id="apellidos" label="Apellidos" value={usuario.apellidos} onChange={handleChange} error={errores.apellidos} maxLength={100} required autoComplete="family-name" />
                <CampoFormulario id="correo" label="Correo" type="email" value={usuario.correo} onChange={handleChange} error={errores.correo} maxLength={100} required autoComplete="email" />
                <CampoFormulario id="contrasena" label="Contraseña" type="password" value={usuario.contrasena} onChange={handleChange} error={errores.contrasena} minLength={4} maxLength={10} required autoComplete="new-password" />
                <CampoFormulario id="confirmarClave" label="Confirmar contraseña" type="password" value={usuario.confirmarClave} onChange={handleChange} error={errores.confirmarClave} minLength={4} maxLength={10} required autoComplete="new-password" />
                <CampoFormulario id="region" label="Región" value={usuario.region} onChange={handleChange} error={errores.region} options={REGIONES} required />
                <CampoFormulario id="comuna" label="Comuna" value={usuario.comuna} onChange={handleChange} error={errores.comuna} options={COMUNAS} required />
                <div className="admin-field--wide">
                    <CampoFormulario id="direccion" label="Dirección" value={usuario.direccion} onChange={handleChange} error={errores.direccion} maxLength={300} required autoComplete="street-address" />
                </div>
            </div>
            <button className="admin-submit" type="submit">Registrarme</button>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
        </form>
    )
}

export default FormularioRegistro
