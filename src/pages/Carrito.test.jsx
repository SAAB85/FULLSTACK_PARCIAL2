import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Carrito from './Carrito.jsx'

const PRODUCTOS = [
  { codigo: 'H001', nombre: 'Taladro percutor', categoria: 'Herramientas', precio: 1000, stock: 10, imagen: 'https://ejemplo.cl/t.jpg' },
]

function renderizar(props) {
  return render(
    <MemoryRouter>
      <Carrito productos={PRODUCTOS} {...props} />
    </MemoryRouter>,
  )
}

describe('Carrito', () => {
  it('muestra el estado vacío cuando no hay líneas', () => {
    renderizar({ carrito: [], onCambiarCantidad: () => {}, onEliminarProducto: () => {} })

    expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ver productos' })).toHaveAttribute('href', '/productos')
  })

  it('muestra las líneas y el total', () => {
    renderizar({
      carrito: [{ codigo: 'H001', cantidad: 2 }],
      onCambiarCantidad: () => {},
      onEliminarProducto: () => {},
    })

    expect(screen.getByText('Taladro percutor')).toBeInTheDocument()
    expect(screen.getAllByText('$' + (2000).toLocaleString('es-CL')).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Continuar a la compra' })).toHaveAttribute('href', '/checkout')
  })

  it('propaga el cambio de cantidad', async () => {
    const user = userEvent.setup()
    const onCambiarCantidad = vi.fn()
    renderizar({
      carrito: [{ codigo: 'H001', cantidad: 2 }],
      onCambiarCantidad,
      onEliminarProducto: () => {},
    })

    const input = screen.getByLabelText('Cantidad de Taladro percutor')
    await user.clear(input)
    await user.type(input, '3')

    expect(onCambiarCantidad).toHaveBeenCalledWith('H001', expect.any(Number))
  })

  it('propaga el quitar producto', async () => {
    const user = userEvent.setup()
    const onEliminarProducto = vi.fn()
    renderizar({
      carrito: [{ codigo: 'H001', cantidad: 1 }],
      onCambiarCantidad: () => {},
      onEliminarProducto,
    })

    await user.click(screen.getByRole('button', { name: 'Quitar' }))

    expect(onEliminarProducto).toHaveBeenCalledWith('H001')
  })
})
