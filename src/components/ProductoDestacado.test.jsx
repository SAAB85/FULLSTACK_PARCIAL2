import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProductoDestacado from './ProductoDestacado.jsx'

const PRODUCTO = {
  codigo: 'H001',
  nombre: 'Taladro percutor',
  categoria: 'Herramientas',
  precio: 45990,
  precioAnterior: null,
  oferta: false,
  stock: 5,
  imagen: 'https://ejemplo.cl/taladro.jpg',
}

function renderizar(producto, props = {}) {
  return render(
    <MemoryRouter>
      <ProductoDestacado producto={producto} {...props} />
    </MemoryRouter>,
  )
}

describe('ProductoDestacado', () => {
  it('muestra los datos del producto y el precio formateado', () => {
    renderizar(PRODUCTO)

    expect(screen.getByText('Taladro percutor')).toBeInTheDocument()
    expect(screen.getByText('Herramientas')).toBeInTheDocument()
    expect(screen.getByText('$' + (45990).toLocaleString('es-CL'))).toBeInTheDocument()
  })

  it('llama a onAgregarAlCarrito con el código del producto', async () => {
    const user = userEvent.setup()
    const onAgregarAlCarrito = vi.fn()
    renderizar(PRODUCTO, { onAgregarAlCarrito })

    await user.click(screen.getByRole('button', { name: 'Agregar al carrito' }))

    expect(onAgregarAlCarrito).toHaveBeenCalledWith('H001')
  })

  it('enlaza el botón de detalle con la ruta del producto', () => {
    renderizar(PRODUCTO)

    expect(screen.getByRole('button', { name: 'Ver detalle' }))
      .toHaveAttribute('href', '/productos/H001')
  })

  it('deshabilita el botón y avisa cuando no hay stock', () => {
    renderizar({ ...PRODUCTO, stock: 0 }, { onAgregarAlCarrito: () => {} })

    expect(screen.getByRole('button', { name: 'Sin stock' })).toBeDisabled()
  })

  it('muestra el precio anterior y la insignia cuando está en oferta', () => {
    renderizar({ ...PRODUCTO, oferta: true, precioAnterior: 59990 })

    expect(screen.getByText('$' + (59990).toLocaleString('es-CL'))).toBeInTheDocument()
    expect(screen.getByText('Oferta')).toBeInTheDocument()
  })
})
