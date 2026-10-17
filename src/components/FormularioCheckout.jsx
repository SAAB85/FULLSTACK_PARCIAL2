import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CampoFormulario from './CampoFormulario.jsx'
import validarCheckout from '../validaciones/validarCheckout.js'

const VALORES_INICIALES = {
    nombre: '',
    correo: '',
    direccion: '',
    region: '',
    comuna: '',
    tipoEntrega: '',
    resultadoPago: 'aprobado',
}

const REGIONES = ['Coquimbo', 'Valparaíso', 'Metropolitana']
const COMUNAS = ['La Serena', 'Coquimbo', 'Ovalle', 'Valparaíso', 'Viña del Mar', 'Santiago']
const TIPOS_ENTREGA = ['Despacho a domicilio', 'Retiro en tienda']
const RESULTADOS_PAGO = ['aprobado', 'rechazado']

function FormularioCheckout({ producto }) {
    const navigate = useNavigate()
    const [datos, setDatos] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleChange(event) {
        const { name, value } = event.target
        setDatos((actuales) => ({ ...actuales, [name]: value }))
        setMensaje('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const erroresActuales = validarCheckout(datos)
        setErrores(erroresActuales)

        if (Object.keys(erroresActuales).length > 0) {
            setMensaje('Revisa los campos marcados.')
            return
        }

        navigate(`/compra/${datos.resultadoPago}`)
    }

    return (
        <form className="admin-form" noValidate onSubmit={handleSubmit}>
            <div className="admin-form-grid">
                <CampoFormulario id="nombre" label="Nombre completo" value={datos.nombre} onChange={handleChange} error={errores.nombre} maxLength={100} required autoComplete="name" />
                <CampoFormulario id="correo" label="Correo" type="email" value={datos.correo} onChange={handleChange} error={errores.correo} maxLength={100} required autoComplete="email" />
                <div className="admin-field--wide">
                    <CampoFormulario id="direccion" label="Dirección" value={datos.direccion} onChange={handleChange} error={errores.direccion} maxLength={300} required autoComplete="street-address" />
                </div>
                <CampoFormulario id="region" label="Región" value={datos.region} onChange={handleChange} error={errores.region} options={REGIONES} required />
                <CampoFormulario id="comuna" label="Comuna" value={datos.comuna} onChange={handleChange} error={errores.comuna} options={COMUNAS} required />
                <CampoFormulario id="tipoEntrega" label="Entrega" value={datos.tipoEntrega} onChange={handleChange} error={errores.tipoEntrega} options={TIPOS_ENTREGA} required />
                <CampoFormulario id="resultadoPago" label="Resultado de pago simulado" value={datos.resultadoPago} onChange={handleChange} error={errores.resultadoPago} options={RESULTADOS_PAGO} required />
            </div>
            <p className="checkout-simulation-note">El resultado de pago es una simulación local; no se realiza ningún cobro.</p>
            <button className="admin-submit" type="submit">Confirmar compra</button>
            {mensaje && <p className="admin-status" role="status">{mensaje}</p>}
            <p className="checkout-product-summary">Producto: <strong>{producto.nombre}</strong> · Total: <strong>${producto.precio}</strong></p>
        </form>
    )
}

export default FormularioCheckout
