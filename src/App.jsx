import './App.css'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'

function App() {
  const pagina = new URLSearchParams(window.location.search).get('pagina')

  return (
    <div className="app-shell">
      <Navbar pagina={pagina} />
      <main className="app">
        {pagina === 'nosotros' ? <Nosotros /> : <Inicio />}
      </main>
    </div>
  )
}

export default App
