import { describe, it, expect } from 'vitest'
import validarLogin from './validarLogin.js'

describe('validarLogin', () => {
  it('exige usuario y contraseña', () => {
    expect(validarLogin({})).toEqual({
      usuario: 'Este campo es obligatorio.',
      contrasena: 'Este campo es obligatorio.',
    })
  })

  it('trata los espacios en blanco como vacío', () => {
    expect(validarLogin({ usuario: '   ', contrasena: '' })).toEqual({
      usuario: 'Este campo es obligatorio.',
      contrasena: 'Este campo es obligatorio.',
    })
  })

  it('acepta credenciales completas', () => {
    expect(validarLogin({ usuario: 'admin', contrasena: '1234' })).toEqual({})
  })
})
