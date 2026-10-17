import { Link } from 'react-router-dom'

function ProductoDestacado({ producto }) {
  return (
    <li className="producto">
      {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}
      <div>
        <p className="producto-categoria">{producto.categoria}</p>
        <h3 className="producto-nombre">{producto.nombre}</h3>
        <p className="producto-precio">${producto.precio}</p>
        <Link className="producto-consultar" to={`/checkout?producto=${encodeURIComponent(producto.codigo)}`}>
          Comprar
        </Link>
      </div>
    </li>
  )
}

export default ProductoDestacado
