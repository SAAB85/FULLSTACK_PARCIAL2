const CAMPOS_OBLIGATORIOS = [
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
]

function validarUsuario(usuario) {
    const errores = {}

    for (const campo of CAMPOS_OBLIGATORIOS) {
        if (!usuario[campo]?.trim()) {
            errores[campo] = 'Este campo es obligatorio.'
        }
    }

    const run = usuario.run?.trim().replace(/[.-]/g, '') ?? ''
    if (run && !/^\d{7,8}[0-9kK]$/.test(run)) {
        errores.run = 'Ingresa un RUN con formato válido.'
    }

    const correo = usuario.correo?.trim() ?? ''
    if (correo && !/^[^\s@]+@duocuc\.cl$/i.test(correo)) {
        errores.correo = 'Ingresa tu correo institucional @duocuc.cl.'
    }

    const contrasena = usuario.contrasena ?? ''
    if (contrasena && (contrasena.length < 4 || contrasena.length > 10)) {
        errores.contrasena = 'Usa entre 4 y 10 caracteres.'
    }

    if (usuario.confirmarClave && usuario.confirmarClave !== contrasena) {
        errores.confirmarClave = 'Las contraseñas no coinciden.'
    }

    if (usuario.nombre?.length > 50) {
        errores.nombre = 'Usa 50 caracteres como máximo.'
    }

    if (usuario.apellidos?.length > 100) {
        errores.apellidos = 'Usa 100 caracteres como máximo.'
    }

    if (correo.length > 100) {
        errores.correo = 'Usa 100 caracteres como máximo.'
    }

    if (usuario.direccion?.length > 300) {
        errores.direccion = 'Usa 300 caracteres como máximo.'
    }

    return errores
}

export default validarUsuario
