function validarCheckout(datos) {
    const errores = {}
    const nombre = datos.nombre?.trim() ?? ''
    const correo = datos.correo?.trim() ?? ''
    const direccion = datos.direccion?.trim() ?? ''

    if (!nombre) errores.nombre = 'Este campo es obligatorio.'
    if (!correo) {
        errores.correo = 'Este campo es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errores.correo = 'Ingresa un correo válido.'
    }
    if (!direccion) errores.direccion = 'Este campo es obligatorio.'
    if (!datos.region) errores.region = 'Selecciona una región.'
    if (!datos.comuna) errores.comuna = 'Selecciona una comuna.'
    if (!datos.tipoEntrega) errores.tipoEntrega = 'Selecciona cómo recibirás tu compra.'
    if (!datos.resultadoPago) errores.resultadoPago = 'Selecciona un resultado para la simulación.'

    return errores
}

export default validarCheckout
