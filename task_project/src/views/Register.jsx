import { Card } from 'react-bootstrap';
import RegisterForm from '../components/others/RegisterForm';

const Register = (props) => {
    return (
      <Card className="register" body>
        <h1 className={"text-center"}>Obtener una cuenta</h1>
        <RegisterForm props={props} />
      </Card>
    );
}

export default Register