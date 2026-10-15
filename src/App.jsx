import './App.css'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app">
        <Inicio />
      </main>
    </div>
  )
}

export default App
