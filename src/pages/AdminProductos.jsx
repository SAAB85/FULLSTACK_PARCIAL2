import { useState } from 'react'
import AdminLayout from '../components/AdminLayout.jsx'
import CampoFormulario from '../components/CampoFormulario.jsx'
import validarProducto from '../validaciones/validarProductos.js'
import categorias from '../data/categorias.js'
import './AdminPage.css'
import './AdminProductos.css'

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

const PRODUCTOS = [
    { codigo: 'MC001', nombre: 'Cemento Polpaico gris 25 kg', categoria: 'Mat. Construcción', precio: 5990, stock: 80 },
    { codigo: 'MC002', nombre: 'Cemento Melón blanco 25 kg', categoria: 'Mat. Construcción', precio: 7490, stock: 40 },
    { codigo: 'PT001', nombre: 'Pintura látex interior 1 galón blanco', categoria: 'Pinturas', precio: 9990, stock: 40 },
    { codigo: 'PT002', nombre: 'Pintura látex interior 4 litros', categoria: 'Pinturas', precio: 12990, stock: 30 },
    { codigo: 'HM001', nombre: 'Martillo carpintero 500g', categoria: 'Herramientas', precio: 7990, stock: 20 },
    { codigo: 'HM002', nombre: 'Alicate universal de 8 pulgadas', categoria: 'Herramientas', precio: 7290, stock: 15 },
]

function AdminProductos() {
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
        <AdminLayout>
            <section className="admin-products">
                <div className="admin-products__heading">
                    <p>Administración</p>
                    <h2>Productos</h2>
                </div>

                <section className="admin-products__panel" aria-labelledby="crear-producto">
                    <h3 id="crear-producto">Agregar producto</h3>
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
                </section>

                <section className="admin-products__panel" aria-labelledby="lista-productos">
                    <h3 id="lista-productos">Listado de productos</h3>
                    <div className="admin-products__table-wrap">
                        <table className="admin-products__table">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PRODUCTOS.map((item) => (
                                    <tr key={item.codigo}>
                                        <td>{item.codigo}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.categoria}</td>
                                        <td>${item.precio}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.stock > 0 ? 'Disponible' : 'Sin stock'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </AdminLayout>
    )
}

export default AdminProductos
