import productosDestacados from '../data/productos.js'
import ProductoDestacado from './ProductoDestacado.jsx'
import './ProductosDestacados.css'

function ProductosDestacados() {
  function handlePlaceholderClick(event) {
    event.preventDefault()
  }

  return (
    <section className="productos" aria-labelledby="destacados-titulo">
      <h2 id="destacados-titulo" className="productos-titulo">Productos destacados</h2>
      <ul className="productos-lista">
        {productosDestacados.map((producto) => (
          <ProductoDestacado key={producto.id} producto={producto} />
        ))}
      </ul>
      <div className="productos-catalogo">
        <a className="productos-catalogo-boton" href="#" onClick={handlePlaceholderClick}>
          Revisar catálogo
        </a>
      </div>
    </section>
  )
}

export default ProductosDestacados
