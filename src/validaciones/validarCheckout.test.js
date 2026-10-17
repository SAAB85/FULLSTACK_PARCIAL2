import { describe, it, expect } from 'vitest'
import validarCheckout from './validarCheckout.js'

const DATOS_VALIDOS = {
  nombre: 'Ana Pérez',
  correo: 'ana@correo.cl',
  direccion: 'Av. Siempre Viva 742',
  region: 'Coquimbo',
  comuna: 'La Serena',
  tipoEntrega: 'Retiro en tienda',
  resultadoPago: 'aprobado',
}

describe('validarCheckout', () => {
  it('marca los campos obligatorios cuando todo está vacío', () => {
    expect(validarCheckout({})).toEqual({
      nombre: 'Este campo es obligatorio.',
      correo: 'Este campo es obligatorio.',
      direccion: 'Este campo es obligatorio.',
      region: 'Selecciona una región.',
      comuna: 'Selecciona una comuna.',
      tipoEntrega: 'Selecciona cómo recibirás tu compra.',
      resultadoPago: 'Selecciona un resultado para la simulación.',
    })
  })

  it('rechaza un correo con formato inválido', () => {
    const errores = validarCheckout({ ...DATOS_VALIDOS, correo: 'ana-correo' })
    expect(errores.correo).toBe('Ingresa un correo válido.')
  })

  it('acepta datos completos', () => {
    expect(validarCheckout(DATOS_VALIDOS)).toEqual({})
  })
})
