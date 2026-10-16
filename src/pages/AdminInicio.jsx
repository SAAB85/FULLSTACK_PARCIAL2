import AdminLayout from '../components/AdminLayout.jsx'
import './AdminPage.css'

function AdminInicio() {
    return (
        <AdminLayout seccionActiva="inicio">
            <section className="admin-page">
                <div className="admin-page__heading">
                    <p>Administración</p>
                    <h2>Inicio administrativo</h2>
                </div>
                <p>Desde este menú puedes revisar las vistas de productos y usuarios.</p>

                <div className="admin-dashboard-links">
                    <section className="admin-panel">
                        <h3>Productos</h3>
                        <p>Listado y formulario para crear o editar productos.</p>
                        <a href="/?pagina=admin-productos">Gestionar productos</a>
                    </section>
                    <section className="admin-panel">
                        <h3>Usuarios</h3>
                        <p>Listado y formulario para crear o editar usuarios y sus roles.</p>
                        <a href="/?pagina=admin-usuarios">Gestionar usuarios</a>
                    </section>
                </div>
            </section>
        </AdminLayout>
    )
}

export default AdminInicio
