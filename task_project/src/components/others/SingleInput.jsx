import { InputGroup, FormControl } from 'react-bootstrap';

export default ({value, name, onChangeMethod, placeholder, icon, required = false, autoComplete="off", type = 'text'}) => {
    let showIcon = 
    icon ? (
        <InputGroup.Append >
            <InputGroup.Text id="basic-addon2">{icon}</InputGroup.Text>
        </InputGroup.Append>
    ) : null;

    return (
        <InputGroup className="mb-3">
            <FormControl
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeMethod}
            name={name}
            autoComplete={autoComplete}
            required={required}
            />
                {showIcon}
        </InputGroup>
    );
}