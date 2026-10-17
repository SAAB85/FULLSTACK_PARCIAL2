# Parcial 2 - Fullstack II

Tienda de ferretería "Los Maestros" desarrollada como port a React de la
Evaluación Parcial 1, para la segunda evaluación del ramo **Fullstack II** (Duoc UC).

Repo: https://github.com/SAAB85/FULLSTACK_PARCIAL2

## Estado

Aplicación funcional de una sola página (SPA) con navegación, catálogo,
carrito, checkout simulado, blog, contacto, registro/login y panel de
administración. Corre con datos en memoria (sin backend): los productos,
usuarios y mensajes viven en el estado de React durante la sesión.

## Tecnologías

- **React 19** + **Vite 8**
- **react-router-dom 7** (enrutado SPA)
- **react-bootstrap 2** + **Bootstrap 5** (interfaz responsiva)
- **ESLint 10** (calidad de código)
- **Vitest 5** + **@testing-library/react** + **jsdom** (pruebas)

## Requisitos

- Node.js 20 o superior

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build
npm run lint      # revisar estilo y errores con ESLint
npm run test      # pruebas en modo watch
npm run test:run  # pruebas una vez (CI)
npm run coverage  # pruebas + informe de cobertura (carpeta coverage/)
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio (banner + productos destacados) |
| `/productos` | Catálogo con búsqueda y filtro por categoría |
| `/productos/:codigo` | Detalle de un producto |
| `/categorias` | Categorías disponibles |
| `/ofertas` | Productos en oferta |
| `/carrito` | Carrito de compras |
| `/checkout` | Formulario y pago simulado |
| `/compra/:resultado` | Resultado de la compra |
| `/nosotros` | Quiénes somos |
| `/contacto` | Formulario de contacto |
| `/blogs`, `/blogs/materiales`, `/blogs/herramientas` | Blog |
| `/login` | Inicio de sesión |
| `/registro` | Registro de usuario |
| `/admin` | Panel de administración (requiere sesión) |
| `/admin/productos` | Gestión de productos (requiere sesión) |
| `/admin/usuarios` | Gestión de usuarios (requiere sesión) |

Acceso de demostración al panel: usuario **admin**, contraseña **1234**.

## Estructura

```
src/
  components/    Componentes reutilizables (Navbar, Footer, formularios, tarjetas)
  pages/         Vistas asociadas a cada ruta
  data/          Datos de ejemplo en memoria (productos, categorías, administración)
  validaciones/  Reglas de validación de formularios (funciones puras)
  App.jsx        Rutas y estado principal de la aplicación
  main.jsx       Punto de entrada (BrowserRouter)
  setupTests.js  Configuración de Jest DOM para Vitest
```

## Pruebas

Las pruebas viven junto al código (`*.test.js`, `*.test.jsx`) y cubren las
funciones de validación, componentes clave y el enrutado/inicio de sesión.
La configuración de Vitest está en `vite.config.js` y suman 44 casos.
