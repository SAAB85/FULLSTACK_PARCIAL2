import { Link } from 'react-router-dom'
import ProductoDestacado from './ProductoDestacado.jsx'
import './ProductosDestacados.css'

function ProductosDestacados({ productos }) {
  return (
    <section className="productos" aria-labelledby="destacados-titulo">
      <h2 id="destacados-titulo" className="productos-titulo">Productos destacados</h2>
      <ul className="productos-lista">
        {productos.map((producto) => (
          <ProductoDestacado key={producto.codigo} producto={producto} />
        ))}
      </ul>
      <div className="productos-catalogo">
        <Link className="productos-catalogo-boton" to="/productos">
          Revisar catálogo
        </Link>
      </div>
    </section>
  )
}

export default ProductosDestacados