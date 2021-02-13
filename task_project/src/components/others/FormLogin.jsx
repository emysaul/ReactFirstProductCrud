import { Form } from 'react-bootstrap';
import { PersonCircle, ShieldCheck  } from 'react-bootstrap-icons';
import FormControlInput from './FormControlInput';

export default ({onLogin}) => {
    return (
      <Form>
        <FormControlInput placeholder="Nombre de usuario" icon={<PersonCircle/>} />
        <FormControlInput type="password" placeholder="Password" icon={<ShieldCheck/>} />
      </Form>
    );
}