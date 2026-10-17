import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Productos from './pages/Productos.jsx'
import Contacto from './pages/Contacto.jsx'
import AdminInicio from './pages/AdminInicio.jsx'
import AdminProductos from './pages/AdminProductos.jsx'
import AdminUsuarios from './pages/AdminUsuarios.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import { MENSAJES_INICIALES, USUARIOS_INICIALES } from './data/datosAdministracion.js'
import { PRODUCTOS_INICIALES } from './data/productos.js'

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
  const [productos, setProductos] = useState(PRODUCTOS_INICIALES)
  const [usuarios, setUsuarios] = useState(USUARIOS_INICIALES)
  const [mensajes, setMensajes] = useState(MENSAJES_INICIALES)

  function guardarProducto(producto) {
    setProductos((actuales) => [...actuales, {
      ...producto,
      precio: Number(producto.precio),
      stock: Number(producto.stock),
      stockCritico: producto.stockCritico ? Number(producto.stockCritico) : '',
    }])
  }

  function guardarUsuario(usuario) {
    const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`.trim()
    setUsuarios((actuales) => [...actuales, {
      run: usuario.run,
      nombre: nombreCompleto,
      correo: usuario.correo,
      tipo: usuario.tipo,
      comuna: usuario.comuna,
      estado: 'Registrado',
    }])
  }

  function guardarMensaje(mensaje) {
    setMensajes((actuales) => [...actuales, {
      ...mensaje,
      id: `${Date.now()}-${actuales.length}`,
    }])
  }

  return (
    <Routes>
      <Route element={<TiendaLayout />}>
        <Route path="/" element={<Inicio productos={productos} />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto mensajes={mensajes} onEnviarMensaje={guardarMensaje} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro onRegistrarUsuario={guardarUsuario} />} />
        <Route path="*" element={<Inicio />} />
      </Route>
      <Route path="/admin" element={<AdminInicio />} />
      <Route path="/admin/productos" element={<AdminProductos productos={productos} onGuardarProducto={guardarProducto} />} />
      <Route path="/admin/usuarios" element={<AdminUsuarios usuarios={usuarios} onGuardarUsuario={guardarUsuario} />} />
    </Routes>
  )
}

export default App
