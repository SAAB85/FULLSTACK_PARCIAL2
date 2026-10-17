import { useState } from 'react'
import AdminLayout from '../components/AdminLayout.jsx'
import FormularioUsuario from '../components/FormularioUsuario.jsx'
import './AdminPage.css'
import './AdminUsuarios.css'

function AdminUsuarios({ usuarios, onGuardarUsuario, onEliminarUsuario, onCerrarSesion }) {
    const [usuarioEditando, setUsuarioEditando] = useState(null)

    function guardar(usuario) {
        onGuardarUsuario(usuario, usuarioEditando?.run)
        setUsuarioEditando(null)
    }

    return (
        <AdminLayout onCerrarSesion={onCerrarSesion}>
            <section className="admin-users">
                <div className="admin-users__heading">
                    <p>Administración</p>
                    <h2>Usuarios</h2>
                </div>

                <section className="admin-users__panel" aria-labelledby="crear-usuario">
                    <h3 id="crear-usuario">{usuarioEditando ? 'Editar usuario' : 'Agregar usuario'}</h3>
                    <FormularioUsuario
                        key={usuarioEditando?.run ?? 'nuevo'}
                        initialValue={usuarioEditando ?? undefined}
                        runOriginal={usuarioEditando?.run ?? ''}
                        runsExistentes={usuarios.filter((item) => item.run !== usuarioEditando?.run).map((item) => item.run)}
                        onSubmit={guardar}
                        onCancel={() => setUsuarioEditando(null)}
                    />
                </section>

                <section className="admin-users__panel" aria-labelledby="lista-usuarios">
                    <h3 id="lista-usuarios">Usuarios registrados</h3>
                    <div className="admin-users__table-wrap">
                        <table className="admin-users__table">
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
                                            <div className="admin-table-actions">
                                                <button className="admin-secondary" type="button" onClick={() => setUsuarioEditando(usuario)}>Editar</button>
                                                <button className="admin-danger" type="button" onClick={() => onEliminarUsuario(usuario.run)}>Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {usuarios.length === 0 && <tr><td colSpan="7">No hay usuarios registrados.</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </AdminLayout>
    )
}

export default AdminUsuarios
