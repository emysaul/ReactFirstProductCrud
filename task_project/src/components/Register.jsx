import { Fragment } from 'react';
import { InputGroup, FormControl, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { PersonCircle, ChatDots,ShieldCheck  } from 'react-bootstrap-icons';

const Register = (props) => {
    return (
    <Fragment>
        <Card  style={{ width: '60%' }} body>
          <h1 className={"text-center"}>Obtener una cuenta</h1>
          <Form className={"mt-4"}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Nombre
              </Form.Label>
              <Col sm={10}>
                <InputGroup>
                <FormControl/>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2"><PersonCircle/></InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <InputGroup>
                <FormControl type="email" />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2"><ChatDots/></InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Contraseña
              </Form.Label>
              <Col sm={10}>
                <InputGroup>
                <FormControl type="password" />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2"><ShieldCheck/></InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Confirmar Contraseña
              </Form.Label>
              <Col sm={10}>
                <InputGroup>
                <FormControl type="password" />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2"><ShieldCheck/></InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              </Col>
            </Form.Group>
            </Form>
          <Button variant="dark" block>Registrarme</Button>
        </Card>
    </Fragment>
    );
}

export default Register