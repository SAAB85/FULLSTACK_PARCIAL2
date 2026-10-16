import './App.css'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Productos from './pages/Productos.jsx'

function App() {
  const pagina = new URLSearchParams(window.location.search).get('pagina')
  let contenido = <Inicio />

  if (pagina === 'nosotros') {
    contenido = <Nosotros />
  }

  if (pagina === 'productos') {
    contenido = <Productos />
  }

  if (pagina === 'AdminUsuarios') {
    contenido = <AdminUsuarios />
  }

  if (pagina === 'AdminProductos') {
    contenido = <AdminProductos />
  }

  if (pagina === 'AdminInicio') {
    contenido = <AdminInicio />
  }

  return (
    <div className="app-shell">
      <Navbar pagina={pagina} />
      <main className="app">
        {contenido}
      </main>
    </div>
  )
}

export default App
