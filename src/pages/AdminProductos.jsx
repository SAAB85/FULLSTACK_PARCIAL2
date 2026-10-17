import { useState } from 'react'
import { Card, Table, Button } from 'react-bootstrap'
import AdminLayout from '../components/AdminLayout.jsx'
import FormularioProducto from '../components/FormularioProducto.jsx'

function AdminProductos({ productos, onGuardarProducto, onEliminarProducto, onCerrarSesion }) {
    const [productoEditando, setProductoEditando] = useState(null)

    function guardar(producto) {
        onGuardarProducto(producto, productoEditando?.codigo)
        setProductoEditando(null)
    }

    return (
        <AdminLayout onCerrarSesion={onCerrarSesion}>
            <section>
                <p className="text-muted mb-1">Administración</p>
                <h2 className="h3">Productos</h2>

                <Card className="mb-4" aria-labelledby="crear-producto">
                    <Card.Body>
                        <h3 id="crear-producto" className="h5">{productoEditando ? 'Editar producto' : 'Agregar producto'}</h3>
                        <FormularioProducto
                            key={productoEditando?.codigo ?? 'nuevo'}
                            initialValue={productoEditando ?? undefined}
                            codigoOriginal={productoEditando?.codigo ?? ''}
                            codigosExistentes={productos.filter((item) => item.codigo !== productoEditando?.codigo).map((item) => item.codigo)}
                            onSubmit={guardar}
                            onCancel={() => setProductoEditando(null)}
                        />
                    </Card.Body>
                </Card>

                <Card aria-labelledby="lista-productos">
                    <Card.Body>
                        <h3 id="lista-productos" className="h5">Listado de productos</h3>
                        <div className="table-responsive">
                            <Table striped bordered hover align-middle className="mb-0">
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
                                                <div className="d-flex gap-2">
                                                    <Button variant="outline-secondary" size="sm" onClick={() => setProductoEditando(item)}>Editar</Button>
                                                    <Button variant="danger" size="sm" onClick={() => onEliminarProducto(item.codigo)}>Eliminar</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {productos.length === 0 && <tr><td colSpan="7">No hay productos registrados.</td></tr>}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </AdminLayout>
    )
}

export default AdminProductos
