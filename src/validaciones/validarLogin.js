function validarLogin(credenciales) {
    const errores = {}
    const correo = credenciales.correo?.trim() ?? ''
    const contrasena = credenciales.contrasena ?? ''

    if (!correo) {
        errores.correo = 'Este campo es obligatorio.'
    } else if (!/^[^\s@]+@duocuc\.cl$/i.test(correo)) {
        errores.correo = 'Ingresa tu correo institucional @duocuc.cl.'
    } else if (correo.length > 100) {
        errores.correo = 'Usa 100 caracteres como máximo.'
    }

    if (!contrasena) {
        errores.contrasena = 'Este campo es obligatorio.'
    } else if (contrasena.length < 4 || contrasena.length > 10) {
        errores.contrasena = 'Usa entre 4 y 10 caracteres.'
    }

    return errores
}

export default validarLogin
