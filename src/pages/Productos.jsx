import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import ProductoDestacado from '../components/ProductoDestacado.jsx'
import categorias from '../data/categorias.js'
import '../components/ProductosDestacados.css'
import './Productos.css'

function Productos({ productos, onAgregarAlCarrito }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [busqueda, setBusqueda] = useState('')
  const categoriaSeleccionada = searchParams.get('categoria') ?? ''
  const termino = busqueda.trim().toLowerCase()
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = !categoriaSeleccionada || producto.categoria === categoriaSeleccionada
    const coincideNombre = producto.nombre.toLowerCase().includes(termino)
    return coincideCategoria && coincideNombre
  })

  function cambiarCategoria(event) {
    const categoria = event.target.value
    const nuevosParametros = new URLSearchParams(searchParams)
    if (categoria) {
      nuevosParametros.set('categoria', categoria)
    } else {
      nuevosParametros.delete('categoria')
    }
    setSearchParams(nuevosParametros)
  }

  return (
    <section className="productos">
      <Container>
        <h1 className="productos-titulo">Productos</h1>
        <p className="productos-intro">Busca por nombre o filtra por categoría.</p>

        <Row className="g-3 align-items-end mb-4">
          <Col xs={12} md={6}>
            <Form.Group controlId="buscar-producto">
              <Form.Label>Buscar</Form.Label>
              <Form.Control
                type="search"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
                placeholder="Nombre del producto"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="filtrar-categoria">
              <Form.Label>Filtrar por categoría</Form.Label>
              <Form.Select value={categoriaSeleccionada} onChange={cambiarCategoria}>
                <option value="">Todas las categorías</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={2}>
            <Link to="/categorias" className="link-marca">Ver categorías</Link>
          </Col>
        </Row>

        <section aria-labelledby="productos-disponibles-titulo">
          <h2 id="productos-disponibles-titulo" className="productos-subtitulo">
            Productos disponibles ({productosFiltrados.length})
          </h2>
          {productosFiltrados.length > 0 ? (
            <Row className="g-3">
              {productosFiltrados.map((producto) => (
                <Col xs={12} lg={6} key={producto.codigo}>
                  <ProductoDestacado
                    producto={producto}
                    onAgregarAlCarrito={onAgregarAlCarrito}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <Alert variant="info">No hay productos que coincidan con la búsqueda.</Alert>
          )}
        </section>
      </Container>
    </section>
  )
}

export default Productos
