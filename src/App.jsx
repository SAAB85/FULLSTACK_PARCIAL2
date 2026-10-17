import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Productos from './pages/Productos.jsx'
import AdminInicio from './pages/AdminInicio.jsx'
import AdminProductos from './pages/AdminProductos.jsx'
import AdminUsuarios from './pages/AdminUsuarios.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'

function TiendaLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<TiendaLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Inicio />} />
      </Route>

      <Route path="/admin" element={<AdminInicio />} />
      <Route path="/admin/productos" element={<AdminProductos />} />
      <Route path="/admin/usuarios" element={<AdminUsuarios />} />
    </Routes>
  )
}

export default App