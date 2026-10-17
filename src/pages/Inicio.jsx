import Banner from '../components/Banner.jsx'
import ProductosDestacados from '../components/ProductosDestacados.jsx'
import FerreteriaCerca from '../components/FerreteriaCerca.jsx'

function Inicio({ productos, onAgregarAlCarrito }) {
  return (
    <>
      <Banner />
      <ProductosDestacados productos={productos} onAgregarAlCarrito={onAgregarAlCarrito} />
      <FerreteriaCerca />
    </>
  )
}

export default Inicio
