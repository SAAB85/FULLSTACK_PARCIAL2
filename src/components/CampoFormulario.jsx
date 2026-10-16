function CampoFormulario({
    id,
    label,
    as = 'input',
    type = 'text',
    value,
    onChange,
    error,
    required = false,
    minLength,
    maxLength,
    options,
    autoComplete,
}) {
    const errorId = `${id}-error`
    const sharedProps = {
        id,
        name: id,
        value,
        onChange,
        required,
        minLength,
        maxLength,
        autoComplete,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
    }

    return (
        <div className="admin-field">
            <label className="admin-label" htmlFor={id}>{label}</label>
            {options ? (
                <select className="admin-control" {...sharedProps}>
                    <option value="">Selecciona una opción</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            ) : as === 'textarea' ? (
                <textarea className="admin-control" {...sharedProps} />
            ) : (
                <input className="admin-control" type={type} {...sharedProps} />
            )}
            {error && <p className="admin-error" id={errorId}>{error}</p>}
        </div>
    )
}

export default CampoFormulario
