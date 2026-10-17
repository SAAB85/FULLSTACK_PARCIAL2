import FormularioContacto from '../components/FormularioContacto.jsx'
import './AdminPage.css'

function Contacto({ mensajes, onEnviarMensaje }) {
    return (
        <main className="admin-panel">
            <h1>Contacto</h1>
            <p>Envíanos tu consulta y te responderemos en la tienda.</p>
            <FormularioContacto onSubmit={onEnviarMensaje} />

            <section aria-labelledby="mensajes-sesion">
                <h2 id="mensajes-sesion">Consultas de esta sesión</h2>
                {mensajes.length === 0 ? (
                    <p>Aún no hay consultas enviadas.</p>
                ) : (
                    <ul>
                        {mensajes.map((mensaje) => (
                            <li key={mensaje.id}>
                                <strong>{mensaje.nombre}</strong>
                                {mensaje.correo && <span> · {mensaje.correo}</span>}
                                <p>{mensaje.comentario}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    )
}

export default Contacto
