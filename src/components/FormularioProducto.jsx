import { useState } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import CampoFormulario from './CampoFormulario.jsx'
import categorias from '../data/categorias.js'
import validarProducto from '../validaciones/validarProductos.js'

const VALORES_INICIALES = {
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    stockCritico: '',
    categoria: '',
    imagen: '',
}

function crearValoresIniciales(initialValue) {
    const valores = { ...VALORES_INICIALES, ...initialValue }
    for (const campo of ['precio', 'stock', 'stockCritico']) {
        if (valores[campo] !== '' && valores[campo] != null) valores[campo] = String(valores[campo])
    }
    return valores
}

function FormularioProducto({ onSubmit, initialValue, onCancel, codigosExistentes = [], codigoOriginal = '' }) {
    const [producto, setProducto] = useState(() => crearValoresIniciales(initialValue))
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setProducto((actual) => ({ ...actual, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarProducto(producto, codigosExistentes, codigoOriginal)
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        onSubmit?.({ ...producto, codigo: producto.codigo.trim().toUpperCase() })
        setProducto({ ...VALORES_INICIALES })
        setErrores({})
        setMensaje(initialValue ? 'Producto actualizado en esta sesión.' : 'Producto guardado en esta sesión.')
    }

    const variante = mensaje === 'Revisa los campos marcados.' ? 'danger' : 'success'

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={6}>
                    <CampoFormulario id="codigo" label="Código producto" value={producto.codigo} onChange={handleChange} error={errores.codigo} minLength={3} required />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="nombre" label="Nombre" value={producto.nombre} onChange={handleChange} error={errores.nombre} maxLength={100} required />
                </Col>
                <Col xs={12}>
                    <CampoFormulario as="textarea" id="descripcion" label="Descripción" value={producto.descripcion} onChange={handleChange} error={errores.descripcion} maxLength={500} rows={3} />
                </Col>
                <Col md={4}>
                    <CampoFormulario id="precio" label="Precio" type="number" value={producto.precio} onChange={handleChange} error={errores.precio} min={0} step="0.01" required />
                </Col>
                <Col md={4}>
                    <CampoFormulario id="stock" label="Stock" type="number" value={producto.stock} onChange={handleChange} error={errores.stock} min={0} step="1" required />
                </Col>
                <Col md={4}>
                    <CampoFormulario id="stockCritico" label="Stock crítico" type="number" value={producto.stockCritico} onChange={handleChange} error={errores.stockCritico} min={0} step="1" />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="categoria" label="Categoría" value={producto.categoria} onChange={handleChange} error={errores.categoria} options={categorias} required />
                </Col>
                <Col md={6}>
                    <CampoFormulario id="imagen" label="Imagen" type="url" value={producto.imagen} onChange={handleChange} error={errores.imagen} placeholder="https://..." />
                </Col>
            </Row>
            <div className="d-flex gap-2 mt-3">
                <Button type="submit" className="btn-azul">{initialValue ? 'Actualizar producto' : 'Guardar producto'}</Button>
                {initialValue && <Button variant="outline-secondary" type="button" onClick={onCancel}>Cancelar</Button>}
            </div>
            {mensaje && <Alert variant={variante} role="status" className="mt-3 mb-0">{mensaje}</Alert>}
        </Form>
    )
}

export default FormularioProducto
