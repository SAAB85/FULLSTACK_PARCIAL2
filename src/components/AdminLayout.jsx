import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
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
                <Container>
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                        <div>
                            <p className="admin-header__eyebrow mb-1">Panel administrativo</p>
                            <h1 className="h4 mb-0">Administración</h1>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            <Button as={Link} to="/" variant="outline-light" size="sm">Volver a la tienda</Button>
                            <Button variant="warning" size="sm" onClick={cerrarSesion}>Cerrar sesión</Button>
                        </div>
                    </div>
                </Container>
            </header>

            <Container className="py-4">
                <Row className="g-4">
                    <Col md={4} lg={3}>
                        <Nav className="admin-menu flex-column">
                            <Nav.Link as={NavLink} to="/admin" end>Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin/productos">Productos</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin/usuarios">Usuarios</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={8} lg={9}>
                        <main className="admin-layout__content">{children}</main>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminLayout
