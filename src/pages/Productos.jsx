import ProductoDestacado from '../components/ProductoDestacado.jsx'
import productos from '../data/productos.js'
import '../components/ProductosDestacados.css'
import './Productos.css'

const CATEGORIAS_PROXIMAS = [
  'Gasfitería',
  'Electricidad',
  'Tornillería',
  'Madera',
  'Seguridad',
  'Jardín',
]

function Productos() {
  return (
    <section className="productos">
      <h1 className="productos-titulo">Productos</h1>
      <p className="productos-intro">
        Muestra representativa: dos productos por cada categoría disponible en esta
        primera etapa.
      </p>

      <section className="categorias" aria-labelledby="categorias-proximas-titulo">
        <h2 id="categorias-proximas-titulo" className="categorias-titulo">
          Otras categorías
        </h2>
        <ul className="categorias-lista">
          {CATEGORIAS_PROXIMAS.map((categoria) => (
            <li className="categoria" key={categoria}>
              <strong>{categoria}</strong> - Próximamente
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="productos-disponibles-titulo">
        <h2 id="productos-disponibles-titulo" className="productos-subtitulo">
          Productos disponibles
        </h2>
        <ul className="productos-lista">
          {productos.map((producto) => (
            <ProductoDestacado key={producto.id} producto={producto} />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Productos
