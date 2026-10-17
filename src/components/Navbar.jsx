import { NavLink } from 'react-router-dom'
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

function Navbar() {
  return (
    <BsNavbar expand="lg" className="site-navbar" variant="dark" collapseOnSelect>
      <Container>
        <BsNavbar.Brand as={NavLink} to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="/assets/img/logo-ferreteria-los-maestros.png"
            alt=""
            width="44"
            height="44"
            className="navbar-brand-logo"
          />
          <span className="navbar-brand-text">
            Los Maestros
            <small className="d-block">Materiales y herramientas</small>
          </span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="navbar-links" className="navbar-toggle" />

        <BsNavbar.Collapse id="navbar-links">
          <Nav className="navbar-links ms-auto">
            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Quiénes somos</Nav.Link>
            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/registro">Registrarse</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Ingresar</Nav.Link>
            <Nav.Link as={NavLink} to="/checkout">Carrito</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
