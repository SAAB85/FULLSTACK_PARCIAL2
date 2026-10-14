import './App.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import ProductosDestacados from './components/ProductosDestacados.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app">
        <Banner />
        <ProductosDestacados />
      </main>
    </div>
  )
}

export default App
