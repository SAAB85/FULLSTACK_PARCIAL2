import AdminLayout from '../components/AdminLayout.jsx'
import FormularioUsuario from '../components/FormularioUsuario.jsx'
import './AdminUsuarios.css'

const USUARIOS = [
    { run: '12.345.678-9', nombre: 'María González Soto', correo: 'maria@duoc.cl', tipo: 'Cliente', comuna: 'La Serena', estado: 'Registrado' },
    { run: '17.654.321-0', nombre: 'Pedro Rojas Díaz', correo: 'pedro@duoc.cl', tipo: 'Vendedor', comuna: 'Coquimbo', estado: 'Registrado' },
]

function AdminUsuarios() {
    return (
        <AdminLayout seccionActiva="usuarios">
            <section className="admin-users">
                <div className="admin-users__heading">
                    <p>Administración</p>
                    <h2>Usuarios</h2>
                </div>

                <section className="admin-users__panel" aria-labelledby="crear-usuario">
                    <h3 id="crear-usuario">Agregar usuario</h3>
                    <FormularioUsuario />
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
                                </tr>
                            </thead>
                            <tbody>
                                {USUARIOS.map((usuario) => (
                                    <tr key={usuario.run}>
                                        <td>{usuario.run}</td>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.correo}</td>
                                        <td>{usuario.tipo}</td>
                                        <td>{usuario.comuna}</td>
                                        <td>{usuario.estado}</td>
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

export default AdminUsuarios
