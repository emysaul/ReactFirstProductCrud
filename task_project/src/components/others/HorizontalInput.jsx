import {  Form, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

export default ({value, name, onChangeMethod, placeholder, icon, title, required = false, autoComplete="off", type = 'text', smTitle=2, smCol=10}) => {

    let showIcon = 
    icon ? (
        <InputGroup.Append >
            <InputGroup.Text id="basic-addon2">{icon}</InputGroup.Text>
        </InputGroup.Append>
    ) : null;

    return (
        <Form.Group as={Row}>
            <Form.Label column sm={smTitle}>
            {title}
            </Form.Label>
            <Col sm={smCol}>
                <InputGroup>
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
            </Col>
        </Form.Group>
    );
}

