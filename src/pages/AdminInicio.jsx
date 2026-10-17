import { Link } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout.jsx'
import './AdminPage.css'

function AdminInicio({ onCerrarSesion }) {
    return (
        <AdminLayout onCerrarSesion={onCerrarSesion}>
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
                        <Link to="/admin/productos">Gestionar productos</Link>
                    </section>
                    <section className="admin-panel">
                        <h3>Usuarios</h3>
                        <p>Listado y formulario para crear o editar usuarios y sus roles.</p>
                        <Link to="/admin/usuarios">Gestionar usuarios</Link>
                    </section>
                </div>
            </section>
        </AdminLayout>
    )
}

export default AdminInicio
