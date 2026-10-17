import AdminLayout from '../components/AdminLayout.jsx'
import FormularioProducto from '../components/FormularioProducto.jsx'
import './AdminPage.css'
import './AdminProductos.css'

function AdminProductos({ productos, onGuardarProducto }) {
    return (
        <AdminLayout>
            <section className="admin-products">
                <div className="admin-products__heading">
                    <p>Administración</p>
                    <h2>Productos</h2>
                </div>

                <section className="admin-products__panel" aria-labelledby="crear-producto">
                    <h3 id="crear-producto">Agregar producto</h3>
                    <FormularioProducto onSubmit={onGuardarProducto} />
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
                                {productos.map((item) => (
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