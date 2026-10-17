import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

function renderizar(ruta = '/') {
  return render(
    <MemoryRouter initialEntries={[ruta]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  it('renderiza la portada en la raíz', () => {
    renderizar('/')

    expect(screen.getByRole('heading', { name: 'Productos destacados' })).toBeInTheDocument()
    expect(screen.getByText('Una ferretería cercana para cada proyecto')).toBeInTheDocument()
  })

  it('redirige al login cuando se entra a /admin sin sesión', () => {
    renderizar('/admin')

    expect(screen.getByRole('heading', { name: 'Inicio de sesión' })).toBeInTheDocument()
  })

  it('permite iniciar sesión como admin y llegar al panel', async () => {
    const user = userEvent.setup()
    renderizar('/login')

    await user.type(screen.getByLabelText('Usuario'), 'admin')
    await user.type(screen.getByLabelText('Contraseña'), '1234')
    await user.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(await screen.findByRole('heading', { name: 'Inicio administrativo' })).toBeInTheDocument()
  })

  it('muestra la página de productos y su buscador', () => {
    renderizar('/productos')

    expect(screen.getByRole('heading', { name: 'Productos', level: 1 })).toBeInTheDocument()
    expect(screen.getByLabelText('Buscar')).toBeInTheDocument()
  })

  it('impide registrar nuevamente un RUN guardado en esta sesión', async () => {
    const user = userEvent.setup()
    renderizar('/registro')

    async function completarRegistro() {
      for (const [label, valor] of Object.entries({
        RUN: '19011022K',
        Nombre: 'Ana',
        Apellidos: 'Pérez',
        Correo: 'ana@duocuc.cl',
        Contraseña: '1234',
        'Confirmar contraseña': '1234',
        Dirección: 'Av. Central 123',
      })) {
        await user.type(screen.getByLabelText(label, { exact: true }), valor)
      }
      await user.selectOptions(screen.getByLabelText('Región'), 'Coquimbo')
      await user.selectOptions(screen.getByLabelText('Comuna'), 'La Serena')
      await user.click(screen.getByRole('button', { name: 'Registrarme' }))
    }

    await completarRegistro()
    expect(screen.getByText('Registro guardado en esta sesión.')).toBeInTheDocument()

    await completarRegistro()
    expect(screen.getByText('Ya existe un usuario con este RUN.')).toBeInTheDocument()
    expect(screen.queryByText('Registro guardado en esta sesión.')).not.toBeInTheDocument()
  })

  it.each([1, 0])('ajusta el carrito cuando administración reduce el stock a %i', async (stock) => {
    const user = userEvent.setup()
    renderizar('/productos/MC001')

    await user.click(screen.getByRole('button', { name: 'Agregar al carrito' }))
    await user.click(screen.getByRole('button', { name: 'Agregar al carrito' }))
    await user.click(screen.getAllByRole('link', { name: 'Ingresar' })[0])
    await user.type(screen.getByLabelText('Usuario'), 'admin')
    await user.type(screen.getByLabelText('Contraseña'), '1234')
    await user.click(screen.getByRole('button', { name: 'Ingresar' }))
    await user.click(screen.getByRole('link', { name: 'Productos', exact: true }))
    await user.click(within(screen.getByRole('row', { name: /MC001/ }))
      .getByRole('button', { name: 'Editar' }))
    await user.clear(screen.getByLabelText('Stock', { exact: true }))
    await user.type(screen.getByLabelText('Stock', { exact: true }), String(stock))
    await user.click(screen.getByRole('button', { name: 'Actualizar producto' }))
    await user.click(screen.getByText('Volver a la tienda'))
    await user.click(screen.getByRole('link', { name: `Carrito (${stock})` }))

    if (stock === 0) {
      expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument()
    } else {
      expect(screen.getByLabelText('Cantidad de Cemento Polpaico gris 25 kg')).toHaveValue(1)
      await user.click(screen.getByRole('button', { name: 'Continuar a la compra' }))
      expect(screen.getByText('Cemento Polpaico gris 25 kg × 1')).toBeInTheDocument()
    }
  })
})
