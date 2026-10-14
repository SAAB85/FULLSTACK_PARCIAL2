function ProductoDestacado({ producto }) {
  function handlePlaceholderClick(event) {
    event.preventDefault()
  }

  return (
    <li className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <div>
        <p className="producto-categoria">{producto.categoria}</p>
        <h3 className="producto-nombre">{producto.nombre}</h3>
        <p className="producto-precio">${producto.precio}</p>
        <a className="producto-consultar" href="#" onClick={handlePlaceholderClick}>
          Consultar
        </a>
      </div>
    </li>
  )
}

export default ProductoDestacado
