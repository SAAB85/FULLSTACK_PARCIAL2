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
    tipo: '',
    region: '',
    comuna: '',
    direccion: '',
}

const REGIONES = ['Coquimbo', 'Valparaíso', 'Metropolitana']
const COMUNAS = ['La Serena', 'Coquimbo', 'Ovalle', 'Valparaíso', 'Viña del Mar', 'Santiago']
const TIPOS_USUARIO = ['Administrador', 'Cliente', 'Vendedor']

function FormularioUsuarios({ onSubmit, initialValue, onCancel, runOriginal = '', runsExistentes = [] }) {
    const [usuario, setUsuario] = useState(() => ({ ...VALORES_INICIALES, ...initialValue }))
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setUsuario((actual) => ({ ...actual, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarUsuario(usuario, { requiereContrasena: !initialValue, runsExistentes, runOriginal })
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        const datosUsuario = { ...usuario }
        delete datosUsuario.contrasena
        delete datosUsuario.confirmarClave
        onSubmit?.(datosUsuario, runOriginal)
        setUsuario({ ...VALORES_INICIALES })
        setErrores({})
        setMensaje(initialValue ? 'Usuario actualizado en esta sesión.' : 'Usuario guardado en esta sesión.')
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="run" label="RUN" value={usuario.run} onChange={handleChange} error={errores.run} required />
                <CampoFormulario id="nombre" label="Nombre" value={usuario.nombre} onChange={handleChange} error={errores.nombre} maxLength={50} required autoComplete="given-name" />
                <CampoFormulario id="apellidos" label="Apellidos" value={usuario.apellidos} onChange={handleChange} error={errores.apellidos} maxLength={100} required autoComplete="family-name" />
                <CampoFormulario id="correo" label="Correo" type="email" value={usuario.correo} onChange={handleChange} error={errores.correo} maxLength={100} required autoComplete="email" />
                <CampoFormulario id="contrasena" label={initialValue ? 'Nueva contraseña (opcional)' : 'Contraseña'} type="password" value={usuario.contrasena} onChange={handleChange} error={errores.contrasena} minLength={4} maxLength={10} required={!initialValue} autoComplete="new-password" />
                <CampoFormulario id="confirmarClave" label={initialValue ? 'Confirmar nueva contraseña' : 'Confirmar contraseña'} type="password" value={usuario.confirmarClave} onChange={handleChange} error={errores.confirmarClave} minLength={4} maxLength={10} required={!initialValue} autoComplete="new-password" />
                <CampoFormulario id="tipo" label="Tipo de usuario" value={usuario.tipo} onChange={handleChange} error={errores.tipo} options={TIPOS_USUARIO} required />
                <CampoFormulario id="region" label="Región" value={usuario.region} onChange={handleChange} error={errores.region} options={REGIONES} required />
                <CampoFormulario id="comuna" label="Comuna" value={usuario.comuna} onChange={handleChange} error={errores.comuna} options={COMUNAS} required />
                <div className="admin-field--wide">
                    <CampoFormulario as="textarea" id="direccion" label="Dirección" value={usuario.direccion} onChange={handleChange} error={errores.direccion} maxLength={300} required autoComplete="street-address" />
                </div>
            </div>
            <div className="admin-form-actions">
                <button className="admin-submit" type="submit">{initialValue ? 'Actualizar usuario' : 'Guardar usuario'}</button>
                {initialValue && <button className="admin-secondary" type="button" onClick={onCancel}>Cancelar</button>}
            </div>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
        </form>
    )
}

export default FormularioUsuarios
