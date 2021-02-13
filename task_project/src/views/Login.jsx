import { Card, Button } from 'react-bootstrap';
import FormLogin from '../components/others/FormLogin';
import { Link } from 'react-router-dom';


const Login = (props) => {
    const onLogin = (e) => {
      e.preventDefault()
      props.history.push('/projects')
    }
    return (
      <Card className="login" body>
        <h1>Iniciar Sesión</h1>
        <FormLogin/>
        <Button variant="dark" onClick={onLogin}  block>Iniciar Sesión</Button>
        <Link to="/register" style={{color: '#160d27'}}>Registrate</Link>
      </Card>
    );
}

export default Login