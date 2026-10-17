import { useState } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
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

    const variante = mensaje === 'Revisa los campos marcados.' ? 'danger' : 'success'

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={6}>
                    <CampoFormulario id="nombre" label="Nombre" value={contacto.nombre} onChange={handleChange} error={errores.nombre} maxLength={100} required autoComplete="name" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="correo" label="Correo" type="email" value={contacto.correo} onChange={handleChange} error={errores.correo} maxLength={100} autoComplete="email" />
                </Col>
                <Col xs={12}>
                    <CampoFormulario as="textarea" id="comentario" label="Comentario" value={contacto.comentario} onChange={handleChange} error={errores.comentario} maxLength={500} rows={5} required />
                </Col>
            </Row>
            <Button type="submit" className="btn-azul mt-3">Enviar mensaje</Button>
            {mensaje && <Alert variant={variante} role="status" className="mt-3 mb-0">{mensaje}</Alert>}
        </Form>
    )
}

export default FormularioContacto
