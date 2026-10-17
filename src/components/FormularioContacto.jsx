import { useState } from 'react'
import CampoFormulario from './CampoFormulario.jsx'
import validarContacto from '../validaciones/validarContacto.js'

const VALORES_INICIALES = { nombre: '', correo: '', comentario: '' }

function FormularioContacto({ onSubmit }) {
    const [contacto, setContacto] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setContacto((actual) => ({ ...actual, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarContacto(contacto)
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        onSubmit?.({
            nombre: contacto.nombre.trim(),
            correo: contacto.correo.trim(),
            comentario: contacto.comentario.trim(),
        })
        setContacto(VALORES_INICIALES)
        setErrores({})
        setMensaje('Consulta guardada en esta sesión.')
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="nombre" label="Nombre" value={contacto.nombre} onChange={handleChange} error={errores.nombre} maxLength={100} required autoComplete="name" />
                <CampoFormulario id="correo" label="Correo" type="email" value={contacto.correo} onChange={handleChange} error={errores.correo} maxLength={100} autoComplete="email" />
                <div className="admin-field--wide">
                    <CampoFormulario as="textarea" id="comentario" label="Comentario" value={contacto.comentario} onChange={handleChange} error={errores.comentario} maxLength={500} rows={5} required />
                </div>
            </div>
            <button className="admin-submit" type="submit">Enviar mensaje</button>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
        </form>
    )
}

export default FormularioContacto
