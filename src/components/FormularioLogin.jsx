import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
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

    const variante = mensaje === 'Revisa los campos marcados.' || mensaje.includes('incorrect') ? 'danger' : 'success'

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={6}>
                    <CampoFormulario id="usuario" label="Usuario" value={credenciales.usuario} onChange={handleChange} error={errores.usuario} required autoComplete="username" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="contrasena" label="Contraseña" type="password" value={credenciales.contrasena} onChange={handleChange} error={errores.contrasena} required autoComplete="current-password" />
                </Col>
            </Row>
            <Button type="submit" className="btn-azul mt-3">Ingresar</Button>
            {mensaje && <Alert variant={variante} role="status" className="mt-3 mb-0">{mensaje}</Alert>}
        </Form>
    )
}

export default FormularioLogin
