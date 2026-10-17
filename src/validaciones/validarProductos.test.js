import { describe, it, expect } from 'vitest'
import validarProducto from './validarProductos.js'

const PRODUCTO_VALIDO = {
  codigo: 'H001',
  nombre: 'Taladro percutor',
  descripcion: 'Taladro para hormigón.',
  categoria: 'Herramientas',
  precio: '45990',
  precioAnterior: '',
  oferta: false,
  stock: '12',
  stockCritico: '2',
  imagen: 'https://ejemplo.cl/taladro.jpg',
}

describe('validarProducto', () => {
  it('marca los campos obligatorios y la categoría cuando está vacío', () => {
    expect(validarProducto({})).toEqual({
      codigo: 'Este campo es obligatorio.',
      nombre: 'Este campo es obligatorio.',
      precio: 'Este campo es obligatorio.',
      stock: 'Este campo es obligatorio.',
      categoria: 'Selecciona una categoría.',
    })
  })

  it('exige un código de al menos 3 caracteres', () => {
    expect(validarProducto({ codigo: 'H1' }).codigo).toBe('Usa al menos 3 caracteres.')
  })

  it('detecta códigos duplicados salvo cuando es el mismo original', () => {
    expect(validarProducto({ ...PRODUCTO_VALIDO, codigo: 'H002' }, ['H002']).codigo)
      .toBe('Ya existe un producto con este código.')
    expect(validarProducto({ ...PRODUCTO_VALIDO }, ['H001'], 'H001').codigo).toBeUndefined()
  })

  it('valida el precio', () => {
    expect(validarProducto({ ...PRODUCTO_VALIDO, precio: '-1' }).precio)
      .toBe('Ingresa un precio igual o mayor que 0.')
    expect(validarProducto({ ...PRODUCTO_VALIDO, precio: 'abc' }).precio)
      .toBe('Ingresa un precio igual o mayor que 0.')
  })

  it('valida el precio anterior cuando hay oferta', () => {
    expect(validarProducto({ ...PRODUCTO_VALIDO, oferta: true, precioAnterior: '' }).precioAnterior)
      .toBe('Ingresa el precio anterior de la oferta.')
    expect(validarProducto({ ...PRODUCTO_VALIDO, oferta: true, precioAnterior: '1000' }).precioAnterior)
      .toBe('El precio anterior debe ser mayor que el precio actual.')
  })

  it('valida stock y stock crítico como enteros no negativos', () => {
    expect(validarProducto({ ...PRODUCTO_VALIDO, stock: '1.5' }).stock)
      .toBe('Ingresa una cantidad entera igual o mayor que 0.')
    expect(validarProducto({ ...PRODUCTO_VALIDO, stockCritico: '-3' }).stockCritico)
      .toBe('Ingresa una cantidad entera igual o mayor que 0.')
  })

  it('valida la URL de la imagen', () => {
    expect(validarProducto({ ...PRODUCTO_VALIDO, imagen: 'no-es-url' }).imagen)
      .toBe('Ingresa una dirección de imagen válida.')
    expect(validarProducto({ ...PRODUCTO_VALIDO, imagen: 'ftp://ejemplo.cl/x.jpg' }).imagen)
      .toBe('Ingresa una dirección que comience con http o https.')
  })

  it('acepta un producto válido', () => {
    expect(validarProducto(PRODUCTO_VALIDO)).toEqual({})
  })
})
