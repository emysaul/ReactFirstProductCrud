import { Form, Card, Button } from 'react-bootstrap';
import { PersonCircle, ShieldCheck  } from 'react-bootstrap-icons';

import styled from '@emotion/styled'
import FormControlInput from './others/FormControlInput';

var Link = styled.a`
  color: #160d27;
`;

const Login = (props) => {
    return (
      <Card className="text-center mt-5" body>
        <h1>Iniciar Sesión</h1>
        <Form className="mt-3">
          <FormControlInput placeholder="Nombre de usuario" icon={<PersonCircle/>} />
          <FormControlInput type="password" placeholder="Password" icon={<ShieldCheck/>} />
        </Form>
        <Button variant="dark" block>Iniciar Sesión</Button>
        <Link href="#">Registrate</Link>
      </Card>
    );
}

export default Login