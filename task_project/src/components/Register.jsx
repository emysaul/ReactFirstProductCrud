import { Form, Card, Button } from 'react-bootstrap';
import { PersonCircle, ChatDots,ShieldCheck  } from 'react-bootstrap-icons';
import FormControlInput from './others/FormControlInput';

const Register = (props) => {
    return (
      <Card className="mt-5"  style={{ width: '60%' }} body>
        <h1 className={"text-center"}>Obtener una cuenta</h1>
        <Form className={"mt-4"}>
          <FormControlInput mode="horizontal" title="Nombre" icon={<PersonCircle/>} />
          <FormControlInput mode="horizontal" type="email" title="Email" icon={<ChatDots/>} />
          <FormControlInput mode="horizontal" type="password" title="Contraseña" icon={<ShieldCheck/>} />
          <FormControlInput mode="horizontal" type="password" title="Confirmar Contraseña" icon={<ShieldCheck/>} />
        </Form>
        <Button variant="dark" block>Registrarme</Button>
      </Card>
    );
}

export default Register