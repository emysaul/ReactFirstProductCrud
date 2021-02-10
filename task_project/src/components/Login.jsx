import { Fragment } from 'react';
import { InputGroup, FormControl, Form, Card, Button } from 'react-bootstrap';
import { PersonCircle, ShieldCheck  } from 'react-bootstrap-icons';
import styled from '@emotion/styled'

var Link = styled.a`
  color: #160d27;
`;

const Login = (props) => {
    return (
    <Fragment>
        <Card className="text-center" body>
          <h1>Iniciar Sesión</h1>
          <Form className="mt-3">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Nombre de usuario"/>
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2"><PersonCircle/></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Contraseña"/>
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2"><ShieldCheck/></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Button variant="dark" block>Iniciar Sesión</Button>
          <Link href="#">Registrate</Link>
        </Card>
    </Fragment>
    );
}

export default Login