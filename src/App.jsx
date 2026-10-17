import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Productos from './pages/Productos.jsx'
import Contacto from './pages/Contacto.jsx'
import Blogs from './pages/Blogs.jsx'
import AdminInicio from './pages/AdminInicio.jsx'
import AdminProductos from './pages/AdminProductos.jsx'
import AdminUsuarios from './pages/AdminUsuarios.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Checkout from './pages/Checkout.jsx'
import ResultadoCompra from './pages/ResultadoCompra.jsx'
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

function RutaAdministracion({ autenticado }) {
  return autenticado ? <Outlet /> : <Navigate to="/login" replace />
}

function App() {
  const [productos, setProductos] = useState(PRODUCTOS_INICIALES)
  const [usuarios, setUsuarios] = useState(USUARIOS_INICIALES)
  const [mensajes, setMensajes] = useState(MENSAJES_INICIALES)
  const [administradorAutenticado, setAdministradorAutenticado] = useState(false)

  function guardarProducto(producto, codigoOriginal = '') {
    const productoGuardado = {
      ...producto,
      precio: Number(producto.precio),
      stock: Number(producto.stock),
      stockCritico: producto.stockCritico ? Number(producto.stockCritico) : 0,
    }
    setProductos((actuales) => codigoOriginal
      ? actuales.map((item) => item.codigo === codigoOriginal ? productoGuardado : item)
      : [...actuales, productoGuardado])
  }

  function eliminarProducto(codigo) {
    setProductos((actuales) => actuales.filter((producto) => producto.codigo !== codigo))
  }

  function guardarUsuario(usuario, runOriginal = '') {
    setUsuarios((actuales) => {
      const original = actuales.find((item) => item.run === runOriginal)
      const usuarioGuardado = { ...usuario, estado: runOriginal ? original?.estado ?? 'Registrado' : 'Registrado' }
      return runOriginal
        ? actuales.map((item) => item.run === runOriginal ? usuarioGuardado : item)
        : [...actuales, usuarioGuardado]
    })
  }

  function eliminarUsuario(run) {
    setUsuarios((actuales) => actuales.filter((usuario) => usuario.run !== run))
  }

  function iniciarSesion(credenciales) {
    if (credenciales.usuario === 'admin' && credenciales.contrasena === '1234') {
      setAdministradorAutenticado(true)
      return true
    }
    return false
  }

  function cerrarSesion() {
    setAdministradorAutenticado(false)
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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login onLogin={iniciarSesion} />} />
        <Route path="/registro" element={<Registro onRegistrarUsuario={guardarUsuario} />} />
        <Route path="/checkout" element={<Checkout productos={productos} />} />
        <Route path="/compra/:resultado" element={<ResultadoCompra />} />
        <Route path="*" element={<Inicio productos={productos} />} />
      </Route>
      <Route element={<RutaAdministracion autenticado={administradorAutenticado} />}>
        <Route path="/admin" element={<AdminInicio onCerrarSesion={cerrarSesion} />} />
        <Route path="/admin/productos" element={<AdminProductos productos={productos} onGuardarProducto={guardarProducto} onEliminarProducto={eliminarProducto} onCerrarSesion={cerrarSesion} />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios usuarios={usuarios} onGuardarUsuario={guardarUsuario} onEliminarUsuario={eliminarUsuario} onCerrarSesion={cerrarSesion} />} />
      </Route>
    </Routes>
  )
}

export default App
