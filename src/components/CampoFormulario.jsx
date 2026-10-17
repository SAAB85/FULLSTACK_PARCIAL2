import { Form } from 'react-bootstrap'

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
    min,
    max,
    step,
    placeholder,
    rows,
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
        min,
        max,
        step,
        placeholder,
        rows,
        autoComplete,
        isInvalid: Boolean(error),
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
    }

    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            {options ? (
                <Form.Select {...sharedProps}>
                    <option value="">Selecciona una opción</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </Form.Select>
            ) : as === 'textarea' ? (
                <Form.Control as="textarea" {...sharedProps} />
            ) : (
                <Form.Control type={type} {...sharedProps} />
            )}
            {error && (
                <Form.Control.Feedback type="invalid" id={errorId} className="d-block">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
}

export default CampoFormulario
