import '../components/ProductosDestacados.css'
import productos from '../data/productos.js'

function Productos() {
  return (
    <section className="productos">
      <h1 className="productos-titulo">Productos</h1>
      <ul className="productos-lista">
        {productos.map((producto) => (
          <li className="producto" key={producto.id}>
            <div>
              <h2 className="producto-nombre">{producto.nombre}</h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Productos
