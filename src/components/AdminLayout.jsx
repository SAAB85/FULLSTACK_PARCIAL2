import './AdminLayout.css'

function AdminLayout({ seccionActiva, children }) {
    return (
        <div className="admin-layout">
            <header className="admin-header">
                <div>
                    <p className="admin-header__eyebrow">Panel administrativo</p>
                    <h1>Administración</h1>
                </div>
                <a className="admin-header__link" href="/">Volver a la tienda</a>
            </header>

            <div className="admin-layout__body">
                <nav className="admin-menu" aria-label="Administración">
                    <h2>Administración</h2>
                    <a href="/?pagina=admin" aria-current={seccionActiva === 'inicio' ? 'page' : undefined}>Inicio</a>
                    <a href="/?pagina=admin-productos" aria-current={seccionActiva === 'productos' ? 'page' : undefined}>Productos</a>
                    <a href="/?pagina=admin-usuarios" aria-current={seccionActiva === 'usuarios' ? 'page' : undefined}>Usuarios</a>
                </nav>

                <main className="admin-layout__content">{children}</main>
            </div>
        </div>
    )
}

export default AdminLayout