import { useState } from 'react'
import AdminLayout from '../components/AdminLayout.jsx'
import FormularioProducto from '../components/FormularioProducto.jsx'
import './AdminPage.css'
import './AdminProductos.css'

function AdminProductos({ productos, onGuardarProducto, onEliminarProducto, onCerrarSesion }) {
    const [productoEditando, setProductoEditando] = useState(null)

    function guardar(producto) {
        onGuardarProducto(producto, productoEditando?.codigo)
        setProductoEditando(null)
    }

    return (
        <AdminLayout onCerrarSesion={onCerrarSesion}>
            <section className="admin-products">
                <div className="admin-products__heading">
                    <p>Administración</p>
                    <h2>Productos</h2>
                </div>

                <section className="admin-products__panel" aria-labelledby="crear-producto">
                    <h3 id="crear-producto">{productoEditando ? 'Editar producto' : 'Agregar producto'}</h3>
                    <FormularioProducto
                        key={productoEditando?.codigo ?? 'nuevo'}
                        initialValue={productoEditando ?? undefined}
                        codigoOriginal={productoEditando?.codigo ?? ''}
                        codigosExistentes={productos.filter((item) => item.codigo !== productoEditando?.codigo).map((item) => item.codigo)}
                        onSubmit={guardar}
                        onCancel={() => setProductoEditando(null)}
                    />
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
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((item) => (
                                    <tr key={item.codigo}>
                                        <td>{item.codigo}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.categoria}</td>
                                        <td>${item.precio}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.stock > 0 ? 'Disponible' : 'Sin stock'}</td>
                                        <td>
                                            <div className="admin-table-actions">
                                                <button className="admin-secondary" type="button" onClick={() => setProductoEditando(item)}>Editar</button>
                                                <button className="admin-danger" type="button" onClick={() => onEliminarProducto(item.codigo)}>Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {productos.length === 0 && <tr><td colSpan="7">No hay productos registrados.</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </AdminLayout>
    )
}

export default AdminProductos
