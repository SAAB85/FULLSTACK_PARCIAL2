import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'
import AdminLayout from '../components/AdminLayout.jsx'

function AdminInicio({ onCerrarSesion }) {
    return (
        <AdminLayout onCerrarSesion={onCerrarSesion}>
            <section>
                <p className="text-muted mb-1">Administración</p>
                <h2 className="h3">Inicio administrativo</h2>
                <p>Desde este menú puedes revisar las vistas de productos y usuarios.</p>

                <Row className="g-3">
                    <Col md={6}>
                        <Card className="h-100">
                            <Card.Body>
                                <h3 className="h5">Productos</h3>
                                <p>Listado y formulario para crear o editar productos.</p>
                                <Button as={Link} to="/admin/productos" className="btn-azul" size="sm">
                                    Gestionar productos
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="h-100">
                            <Card.Body>
                                <h3 className="h5">Usuarios</h3>
                                <p>Listado y formulario para crear o editar usuarios y sus roles.</p>
                                <Button as={Link} to="/admin/usuarios" className="btn-azul" size="sm">
                                    Gestionar usuarios
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </AdminLayout>
    )
}

export default AdminInicio
