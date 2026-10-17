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

    const variante = mensaje === 'Revisa los campos marcados.' ? 'danger' : 'success'

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={6}>
                    <CampoFormulario id="run" label="RUN" value={usuario.run} onChange={handleChange} error={errores.run} required />
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
                    <CampoFormulario id="contrasena" label={initialValue ? 'Nueva contraseña (opcional)' : 'Contraseña'} type="password" value={usuario.contrasena} onChange={handleChange} error={errores.contrasena} minLength={4} maxLength={10} required={!initialValue} autoComplete="new-password" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="confirmarClave" label={initialValue ? 'Confirmar nueva contraseña' : 'Confirmar contraseña'} type="password" value={usuario.confirmarClave} onChange={handleChange} error={errores.confirmarClave} minLength={4} maxLength={10} required={!initialValue} autoComplete="new-password" />
                </Col>
                <Col md={4}>
                    <CampoFormulario id="tipo" label="Tipo de usuario" value={usuario.tipo} onChange={handleChange} error={errores.tipo} options={TIPOS_USUARIO} required />
                </Col>
                <Col md={4}>
                    <CampoFormulario id="region" label="Región" value={usuario.region} onChange={handleChange} error={errores.region} options={REGIONES} required />
                </Col>
                <Col md={4}>
                    <CampoFormulario id="comuna" label="Comuna" value={usuario.comuna} onChange={handleChange} error={errores.comuna} options={COMUNAS} required />
                </Col>
                <Col xs={12}>
                    <CampoFormulario as="textarea" id="direccion" label="Dirección" value={usuario.direccion} onChange={handleChange} error={errores.direccion} maxLength={300} required autoComplete="street-address" />
                </Col>
            </Row>
            <div className="d-flex gap-2 mt-3">
                <Button type="submit" className="btn-azul">{initialValue ? 'Actualizar usuario' : 'Guardar usuario'}</Button>
                {initialValue && <Button variant="outline-secondary" type="button" onClick={onCancel}>Cancelar</Button>}
            </div>
            {mensaje && <Alert variant={variante} role="status" className="mt-3 mb-0">{mensaje}</Alert>}
        </Form>
    )
}

export default FormularioUsuarios
