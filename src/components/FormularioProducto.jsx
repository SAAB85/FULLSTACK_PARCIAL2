import { useState } from 'react'
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

function FormularioProducto() {
    const [producto, setProducto] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setProducto((actual) => ({ ...actual, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarProducto(producto)
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        setMensaje('Producto validado correctamente.')
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="codigo" label="Código producto" value={producto.codigo} onChange={handleChange} error={errores.codigo} minLength={3} required />
                <CampoFormulario id="nombre" label="Nombre" value={producto.nombre} onChange={handleChange} error={errores.nombre} maxLength={100} required />
                <div className="admin-field--wide">
                    <CampoFormulario as="textarea" id="descripcion" label="Descripción" value={producto.descripcion} onChange={handleChange} error={errores.descripcion} maxLength={500} rows={3} />
                </div>
                <CampoFormulario id="precio" label="Precio" type="number" value={producto.precio} onChange={handleChange} error={errores.precio} min={0} step="0.01" required />
                <CampoFormulario id="stock" label="Stock" type="number" value={producto.stock} onChange={handleChange} error={errores.stock} min={0} step="1" required />
                <CampoFormulario id="stockCritico" label="Stock crítico" type="number" value={producto.stockCritico} onChange={handleChange} error={errores.stockCritico} min={0} step="1" />
                <CampoFormulario id="categoria" label="Categoría" value={producto.categoria} onChange={handleChange} error={errores.categoria} options={categorias} required />
                <CampoFormulario id="imagen" label="Imagen" type="url" value={producto.imagen} onChange={handleChange} error={errores.imagen} placeholder="https://..." />
            </div>
            <button className="admin-submit" type="submit">Guardar producto</button>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
        </form>
    )
}

export default FormularioProducto
