import categorias from '../data/categorias.js'

function validarProducto(producto, codigosExistentes = [], codigoOriginal = '') {
    const errores = {}
    const codigo = producto.codigo?.trim() ?? ''
    const nombre = producto.nombre?.trim() ?? ''
    const descripcion = producto.descripcion?.trim() ?? ''
    const precio = producto.precio?.trim() ?? ''
    const precioAnterior = producto.precioAnterior?.toString().trim() ?? ''
    const stock = producto.stock?.trim() ?? ''
    const stockCritico = producto.stockCritico?.trim() ?? ''
    const imagen = producto.imagen?.trim() ?? ''

    if (!codigo) {
        errores.codigo = 'Este campo es obligatorio.'
    } else if (codigo.length < 3) {
        errores.codigo = 'Usa al menos 3 caracteres.'
    } else if (codigo.toLowerCase() !== codigoOriginal.toLowerCase() && codigosExistentes.some((item) => item.toLowerCase() === codigo.toLowerCase())) {
        errores.codigo = 'Ya existe un producto con este código.'
    }

    if (!nombre) {
        errores.nombre = 'Este campo es obligatorio.'
    } else if (nombre.length > 100) {
        errores.nombre = 'Usa 100 caracteres como máximo.'
    }

    if (descripcion.length > 500) {
        errores.descripcion = 'Usa 500 caracteres como máximo.'
    }

    if (!precio) {
        errores.precio = 'Este campo es obligatorio.'
    } else if (!Number.isFinite(Number(precio)) || Number(precio) < 0) {
        errores.precio = 'Ingresa un precio igual o mayor que 0.'
    }

    if (producto.oferta) {
        if (!precioAnterior) {
            errores.precioAnterior = 'Ingresa el precio anterior de la oferta.'
        } else if (!Number.isFinite(Number(precioAnterior)) || Number(precioAnterior) <= Number(precio)) {
            errores.precioAnterior = 'El precio anterior debe ser mayor que el precio actual.'
        }
    }

    if (!stock) {
        errores.stock = 'Este campo es obligatorio.'
    } else if (!Number.isInteger(Number(stock)) || Number(stock) < 0) {
        errores.stock = 'Ingresa una cantidad entera igual o mayor que 0.'
    }

    if (stockCritico && (!Number.isInteger(Number(stockCritico)) || Number(stockCritico) < 0)) {
        errores.stockCritico = 'Ingresa una cantidad entera igual o mayor que 0.'
    }

    if (!categorias.includes(producto.categoria)) {
        errores.categoria = 'Selecciona una categoría.'
    }

    if (imagen) {
        try {
            const url = new URL(imagen)
            if (!['http:', 'https:'].includes(url.protocol)) {
                errores.imagen = 'Ingresa una dirección que comience con http o https.'
            }
        } catch {
            errores.imagen = 'Ingresa una dirección de imagen válida.'
        }
    }

    return errores
}

export default validarProducto
