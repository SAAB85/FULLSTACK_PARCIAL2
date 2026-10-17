import { Link, NavLink, useNavigate } from 'react-router-dom'
import './AdminLayout.css'

function AdminLayout({ children, onCerrarSesion }) {
    const navigate = useNavigate()

    function cerrarSesion() {
        onCerrarSesion?.()
        navigate('/login')
    }

    return (
        <div className="admin-layout">
            <header className="admin-header">
                <div>
                    <p className="admin-header__eyebrow">Panel administrativo</p>
                    <h1>Administración</h1>
                </div>
                <div className="admin-header__actions">
                    <Link className="admin-header__link" to="/">Volver a la tienda</Link>
                    <button className="admin-header__link admin-header__button" type="button" onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
            </header>

            <div className="admin-layout__body">
                <nav className="admin-menu" aria-label="Administración">
                    <h2>Administración</h2>
                    <NavLink to="/admin" end>Inicio</NavLink>
                    <NavLink to="/admin/productos">Productos</NavLink>
                    <NavLink to="/admin/usuarios">Usuarios</NavLink>
                </nav>

                <main className="admin-layout__content">{children}</main>
            </div>
        </div>
    )
}

export default AdminLayout
