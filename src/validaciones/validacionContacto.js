function validarContacto(contacto) {
    const errores = {}
    const nombre = contacto.nombre?.trim() ?? ''
    const correo = contacto.correo?.trim() ?? ''
    const comentario = contacto.comentario?.trim() ?? ''

    if (!nombre) {
        errores.nombre = 'Este campo es obligatorio.'
    } else if (nombre.length > 100) {
        errores.nombre = 'Usa 100 caracteres como máximo.'
    }

    if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errores.correo = 'Ingresa un correo válido.'
    } else if (correo.length > 100) {
        errores.correo = 'Usa 100 caracteres como máximo.'
    }

    if (!comentario) {
        errores.comentario = 'Este campo es obligatorio.'
    } else if (comentario.length > 500) {
        errores.comentario = 'Usa 500 caracteres como máximo.'
    }

    return errores
}

export default validarContacto