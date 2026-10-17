import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
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
})
