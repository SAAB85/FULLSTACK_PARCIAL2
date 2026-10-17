import AdminLayout from '../components/AdminLayout.jsx'
import FormularioProducto from '../components/FormularioProducto.jsx'
import './AdminPage.css'
import './AdminProductos.css'

const PRODUCTOS = [
    { codigo: 'MC001', nombre: 'Cemento Polpaico gris 25 kg', categoria: 'Mat. Construcción', precio: 5990, stock: 80 },
    { codigo: 'MC002', nombre: 'Cemento Melón blanco 25 kg', categoria: 'Mat. Construcción', precio: 7490, stock: 40 },
    { codigo: 'PT001', nombre: 'Pintura látex interior 1 galón blanco', categoria: 'Pinturas', precio: 9990, stock: 40 },
    { codigo: 'PT002', nombre: 'Pintura látex interior 4 litros', categoria: 'Pinturas', precio: 12990, stock: 30 },
    { codigo: 'HM001', nombre: 'Martillo carpintero 500g', categoria: 'Herramientas', precio: 7990, stock: 20 },
    { codigo: 'HM002', nombre: 'Alicate universal de 8 pulgadas', categoria: 'Herramientas', precio: 7290, stock: 15 },
]

function AdminProductos() {
    return (
        <AdminLayout>
            <section className="admin-products">
                <div className="admin-products__heading">
                    <p>Administración</p>
                    <h2>Productos</h2>
                </div>

                <section className="admin-products__panel" aria-labelledby="crear-producto">
                    <h3 id="crear-producto">Agregar producto</h3>
                    <FormularioProducto />
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
