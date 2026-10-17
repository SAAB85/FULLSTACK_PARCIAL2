import { useState } from 'react'
import { Card, Table, Button } from 'react-bootstrap'
import AdminLayout from '../components/AdminLayout.jsx'
import FormularioUsuario from '../components/FormularioUsuario.jsx'

function AdminUsuarios({ usuarios, onGuardarUsuario, onEliminarUsuario, onCerrarSesion }) {
    const [usuarioEditando, setUsuarioEditando] = useState(null)

    function guardar(usuario) {
        onGuardarUsuario(usuario, usuarioEditando?.run)
        setUsuarioEditando(null)
    }

    return (
        <AdminLayout onCerrarSesion={onCerrarSesion}>
            <section>
                <p className="text-muted mb-1">Administración</p>
                <h2 className="h3">Usuarios</h2>

                <Card className="mb-4" aria-labelledby="crear-usuario">
                    <Card.Body>
                        <h3 id="crear-usuario" className="h5">{usuarioEditando ? 'Editar usuario' : 'Agregar usuario'}</h3>
                        <FormularioUsuario
                            key={usuarioEditando?.run ?? 'nuevo'}
                            initialValue={usuarioEditando ?? undefined}
                            runOriginal={usuarioEditando?.run ?? ''}
                            runsExistentes={usuarios.filter((item) => item.run !== usuarioEditando?.run).map((item) => item.run)}
                            onSubmit={guardar}
                            onCancel={() => setUsuarioEditando(null)}
                        />
                    </Card.Body>
                </Card>

                <Card aria-labelledby="lista-usuarios">
                    <Card.Body>
                        <h3 id="lista-usuarios" className="h5">Usuarios registrados</h3>
                        <div className="table-responsive">
                            <Table striped bordered hover align-middle className="mb-0">
                                <thead>
                                    <tr>
                                        <th>RUN</th>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Rol</th>
                                        <th>Comuna</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario) => (
                                        <tr key={usuario.run}>
                                            <td>{usuario.run}</td>
                                            <td>{[usuario.nombre, usuario.apellidos].filter(Boolean).join(' ')}</td>
                                            <td>{usuario.correo}</td>
                                            <td>{usuario.tipo}</td>
                                            <td>{usuario.comuna}</td>
                                            <td>{usuario.estado}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <Button variant="outline-secondary" size="sm" onClick={() => setUsuarioEditando(usuario)}>Editar</Button>
                                                    <Button variant="danger" size="sm" onClick={() => onEliminarUsuario(usuario.run)}>Eliminar</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {usuarios.length === 0 && <tr><td colSpan="7">No hay usuarios registrados.</td></tr>}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </AdminLayout>
    )
}

export default AdminUsuarios
