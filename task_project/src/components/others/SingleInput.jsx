import { InputGroup, FormControl } from 'react-bootstrap';

export default ({value, onChangeMethod, type = 'text', placeholder, icon}) => {
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
            />
                {showIcon}
        </InputGroup>
    );
}