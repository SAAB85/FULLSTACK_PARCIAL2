function validarLogin(credenciales) {
    const errores = {}
    const usuario = credenciales.usuario?.trim() ?? ''
    const contrasena = credenciales.contrasena ?? ''

    if (!usuario) {
        errores.usuario = 'Este campo es obligatorio.'
    }

    if (!contrasena) {
        errores.contrasena = 'Este campo es obligatorio.'
    }

    return errores
}

export default validarLogin
