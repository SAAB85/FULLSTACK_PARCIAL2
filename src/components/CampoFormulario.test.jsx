import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CampoFormulario from './CampoFormulario.jsx'

describe('CampoFormulario', () => {
  it('asocia la etiqueta con el campo y propaga los cambios', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<CampoFormulario id="nombre" label="Nombre" value="" onChange={onChange} />)

    await user.type(screen.getByLabelText('Nombre'), 'Ana')

    expect(onChange).toHaveBeenCalled()
  })

  it('renderiza un select con la opción por defecto y las provistas', () => {
    render(
      <CampoFormulario
        id="region"
        label="Región"
        value=""
        onChange={() => {}}
        options={['Coquimbo', 'Valparaíso']}
      />,
    )

    const select = screen.getByLabelText('Región')
    expect(select.tagName).toBe('SELECT')
    expect(screen.getByRole('option', { name: 'Selecciona una opción' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Coquimbo' })).toBeInTheDocument()
  })

  it('renderiza un textarea cuando as es textarea', () => {
    render(
      <CampoFormulario id="comentario" label="Comentario" as="textarea" value="" onChange={() => {}} />,
    )

    expect(screen.getByLabelText('Comentario').tagName).toBe('TEXTAREA')
  })

  it('muestra el mensaje de error y marca el campo como inválido', () => {
    render(
      <CampoFormulario
        id="correo"
        label="Correo"
        value=""
        onChange={() => {}}
        error="Ingresa un correo válido."
      />,
    )

    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument()
    expect(screen.getByLabelText('Correo')).toHaveAttribute('aria-invalid', 'true')
  })
})
