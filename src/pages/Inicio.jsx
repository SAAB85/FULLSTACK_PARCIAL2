import Banner from '../components/Banner.jsx'
import ProductosDestacados from '../components/ProductosDestacados.jsx'
import FerreteriaCerca from '../components/FerreteriaCerca.jsx'

function Inicio({ productos }) {
  return (
    <>
      <Banner />
      <ProductosDestacados productos={productos} />
      <FerreteriaCerca />
    </>
  )
}

export default Inicio