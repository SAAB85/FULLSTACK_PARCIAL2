import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Productos from './pages/Productos.jsx'
import Categorias from './pages/Categorias.jsx'
import Ofertas from './pages/Ofertas.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Carrito from './pages/Carrito.jsx'
import Contacto from './pages/Contacto.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogMateriales from './pages/BlogMateriales.jsx'
import BlogHerramientas from './pages/BlogHerramientas.jsx'
import AdminInicio from './pages/AdminInicio.jsx'
import AdminProductos from './pages/AdminProductos.jsx'
import AdminUsuarios from './pages/AdminUsuarios.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Checkout from './pages/Checkout.jsx'
import ResultadoCompra from './pages/ResultadoCompra.jsx'
import { MENSAJES_INICIALES, USUARIOS_INICIALES } from './data/datosAdministracion.js'
import { PRODUCTOS_INICIALES } from './data/productos.js'

function TiendaLayout({ cantidadCarrito }) {
  return (
    <div className="app-shell">
      <Navbar cantidadCarrito={cantidadCarrito} />
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
  const [carrito, setCarrito] = useState([])
  const [compraActual, setCompraActual] = useState(null)

  function agregarAlCarrito(codigo) {
    const producto = productos.find((item) => item.codigo === codigo)
    if (!producto || producto.stock < 1) return

    setCarrito((actual) => {
      const item = actual.find((linea) => linea.codigo === codigo)
      if (item && item.cantidad >= producto.stock) return actual
      if (item) {
        return actual.map((linea) => (
          linea.codigo === codigo ? { ...linea, cantidad: linea.cantidad + 1 } : linea
        ))
      }
      return [...actual, { codigo, cantidad: 1 }]
    })
  }

  function cambiarCantidadCarrito(codigo, cantidad) {
    const producto = productos.find((item) => item.codigo === codigo)
    if (!producto || producto.stock < 1) {
      setCarrito((actual) => actual.filter((linea) => linea.codigo !== codigo))
      return
    }
    const cantidadValida = Math.min(
      producto.stock,
      Math.max(1, Math.trunc(Number(cantidad) || 1)),
    )
    setCarrito((actual) => actual.map((linea) => (
      linea.codigo === codigo ? { ...linea, cantidad: cantidadValida } : linea
    )))
  }

  function eliminarDelCarrito(codigo) {
    setCarrito((actual) => actual.filter((linea) => linea.codigo !== codigo))
  }

  function confirmarCompra(datos, productosCompra) {
    const items = productosCompra.map(({ producto, cantidad }) => ({
      codigo: producto.codigo,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad,
    }))
    const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)
    setCompraActual({ ...datos, items, total })

    if (datos.resultadoPago === 'aprobado') {
      setProductos((actuales) => actuales.map((producto) => {
        const comprado = items.find((item) => item.codigo === producto.codigo)
        return comprado
          ? { ...producto, stock: Math.max(0, producto.stock - comprado.cantidad) }
          : producto
      }))
      setCarrito([])
    }
  }

  function guardarProducto(producto, codigoOriginal = '') {
    const productoGuardado = {
      ...producto,
      precio: Number(producto.precio),
      precioAnterior: producto.oferta ? Number(producto.precioAnterior) : null,
      oferta: Boolean(producto.oferta),
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

  const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <Routes>
      <Route element={<TiendaLayout cantidadCarrito={cantidadCarrito} />}>
        <Route path="/" element={<Inicio productos={productos} onAgregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/productos" element={<Productos productos={productos} onAgregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/productos/:codigo" element={<ProductoDetalle productos={productos} onAgregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/categorias" element={<Categorias productos={productos} />} />
        <Route path="/ofertas" element={<Ofertas productos={productos} onAgregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<Carrito productos={productos} carrito={carrito} onCambiarCantidad={cambiarCantidadCarrito} onEliminarProducto={eliminarDelCarrito} />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto mensajes={mensajes} onEnviarMensaje={guardarMensaje} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/materiales" element={<BlogMateriales />} />
        <Route path="/blogs/herramientas" element={<BlogHerramientas />} />
        <Route path="/login" element={<Login onLogin={iniciarSesion} />} />
        <Route path="/registro" element={<Registro onRegistrarUsuario={guardarUsuario} />} />
        <Route path="/checkout" element={<Checkout productos={productos} carrito={carrito} onConfirmarCompra={confirmarCompra} />} />
        <Route path="/compra/:resultado" element={<ResultadoCompra compra={compraActual} />} />
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
