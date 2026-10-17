import { describe, it, expect } from 'vitest'
import validarContacto from './validarContacto.js'

describe('validarContacto', () => {
  it('exige nombre y comentario', () => {
    expect(validarContacto({})).toEqual({
      nombre: 'Este campo es obligatorio.',
      comentario: 'Este campo es obligatorio.',
    })
  })

  it('no exige correo, pero lo valida si viene', () => {
    expect(validarContacto({ nombre: 'Ana', comentario: 'Hola' })).toEqual({})
    expect(validarContacto({ nombre: 'Ana', comentario: 'Hola', correo: 'malo' })).toEqual({
      correo: 'Ingresa un correo válido.',
    })
  })

  it('limita el largo de los campos', () => {
    const errores = validarContacto({
      nombre: 'a'.repeat(101),
      correo: 'b'.repeat(96) + '@x.cl',
      comentario: 'c'.repeat(501),
    })
    expect(errores.nombre).toBe('Usa 100 caracteres como máximo.')
    expect(errores.correo).toBe('Usa 100 caracteres como máximo.')
    expect(errores.comentario).toBe('Usa 500 caracteres como máximo.')
  })

  it('acepta un contacto válido', () => {
    expect(validarContacto({ nombre: 'Ana', correo: 'ana@correo.cl', comentario: 'Consulta' })).toEqual({})
  })
})
