import {  Form, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

export default ({value, onChangeMethod, type = 'text', placeholder, icon, title, smTitle=2, smCol=10}) => {

    let showIcon = 
    icon ? (
        <InputGroup.Append >
            <InputGroup.Text id="basic-addon2">{icon}</InputGroup.Text>
        </InputGroup.Append>
    ) : null;

    return (
        <Form.Group as={Row} controlId="formHorizontalEmail">
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
                        />
                    {showIcon}
                </InputGroup>
            </Col>
        </Form.Group>
    );
}

