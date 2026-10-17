import { useState } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
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

function FormularioRegistro({ onSubmit }) {
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

        const datosUsuario = { ...usuario }
        delete datosUsuario.contrasena
        delete datosUsuario.confirmarClave
        onSubmit?.(datosUsuario)
        setUsuario(VALORES_INICIALES)
        setErrores({})
        setMensaje('Registro guardado en esta sesión.')
    }

    const variante = mensaje === 'Revisa los campos marcados.' ? 'danger' : 'success'

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={6}>
                    <CampoFormulario id="run" label="RUN" value={usuario.run} onChange={handleChange} error={errores.run} minLength={7} maxLength={9} placeholder="19011022K" required />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="nombre" label="Nombre" value={usuario.nombre} onChange={handleChange} error={errores.nombre} maxLength={50} required autoComplete="given-name" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="apellidos" label="Apellidos" value={usuario.apellidos} onChange={handleChange} error={errores.apellidos} maxLength={100} required autoComplete="family-name" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="correo" label="Correo" type="email" value={usuario.correo} onChange={handleChange} error={errores.correo} maxLength={100} required autoComplete="email" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="contrasena" label="Contraseña" type="password" value={usuario.contrasena} onChange={handleChange} error={errores.contrasena} minLength={4} maxLength={10} required autoComplete="new-password" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="confirmarClave" label="Confirmar contraseña" type="password" value={usuario.confirmarClave} onChange={handleChange} error={errores.confirmarClave} minLength={4} maxLength={10} required autoComplete="new-password" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="region" label="Región" value={usuario.region} onChange={handleChange} error={errores.region} options={REGIONES} required />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="comuna" label="Comuna" value={usuario.comuna} onChange={handleChange} error={errores.comuna} options={COMUNAS} required />
                </Col>
                <Col xs={12}>
                    <CampoFormulario id="direccion" label="Dirección" value={usuario.direccion} onChange={handleChange} error={errores.direccion} maxLength={300} required autoComplete="street-address" />
                </Col>
            </Row>
            <Button type="submit" className="btn-azul mt-3">Registrarme</Button>
            {mensaje && <Alert variant={variante} role="status" className="mt-3 mb-0">{mensaje}</Alert>}
        </Form>
    )
}

export default FormularioRegistro
