import { describe, it, expect } from 'vitest'
import validarUsuario from './validarUsuario.js'

const USUARIO_VALIDO = {
  run: '19011022K',
  nombre: 'Ana',
  apellidos: 'Pérez',
  correo: 'ana@duocuc.cl',
  contrasena: '1234',
  confirmarClave: '1234',
  tipo: 'Cliente',
  region: 'Coquimbo',
  comuna: 'La Serena',
  direccion: 'Av. Siempre Viva 742',
}

describe('validarUsuario', () => {
  it('exige todos los campos obligatorios', () => {
    const errores = validarUsuario({})
    expect(Object.keys(errores)).toEqual([
      'run',
      'nombre',
      'apellidos',
      'correo',
      'contrasena',
      'confirmarClave',
      'tipo',
      'region',
      'comuna',
      'direccion',
    ])
  })

  it('valida el formato del RUN', () => {
    expect(validarUsuario({ run: '123' }).run).toBe('Ingresa un RUN con formato válido.')
  })

  it('detecta RUN duplicado salvo cuando es el mismo original', () => {
    expect(validarUsuario({ ...USUARIO_VALIDO, run: '11.111.111-1' }, { runsExistentes: ['111111111'] }).run)
      .toBe('Ya existe un usuario con este RUN.')
    expect(validarUsuario({ ...USUARIO_VALIDO }, { runsExistentes: ['19011022K'], runOriginal: '19.011.022-K' }).run)
      .toBeUndefined()
  })

  it('exige correo institucional @duocuc.cl', () => {
    expect(validarUsuario({ ...USUARIO_VALIDO, correo: 'ana@gmail.com' }).correo)
      .toBe('Ingresa tu correo institucional @duocuc.cl.')
  })

  it('limita la contraseña entre 4 y 10 caracteres', () => {
    expect(validarUsuario({ ...USUARIO_VALIDO, contrasena: '12', confirmarClave: '12' }).contrasena)
      .toBe('Usa entre 4 y 10 caracteres.')
  })

  it('detecta cuando las contraseñas no coinciden', () => {
    expect(validarUsuario({ ...USUARIO_VALIDO, confirmarClave: '4321' }).confirmarClave)
      .toBe('Las contraseñas no coinciden.')
  })

  it('no exige contraseña cuando requiereContrasena es false', () => {
    const errores = validarUsuario(
      { ...USUARIO_VALIDO, contrasena: '', confirmarClave: '' },
      { requiereContrasena: false },
    )
    expect(errores).toEqual({})
  })

  it('aplica los largos máximos', () => {
    const errores = validarUsuario({
      ...USUARIO_VALIDO,
      nombre: 'a'.repeat(51),
      apellidos: 'b'.repeat(101),
      direccion: 'c'.repeat(301),
    })
    expect(errores.nombre).toBe('Usa 50 caracteres como máximo.')
    expect(errores.apellidos).toBe('Usa 100 caracteres como máximo.')
    expect(errores.direccion).toBe('Usa 300 caracteres como máximo.')
  })

  it('acepta un usuario válido', () => {
    expect(validarUsuario(USUARIO_VALIDO)).toEqual({})
  })
})
