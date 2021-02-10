import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import Login from './components/Login'
import Register from './components/Register'
import Main from './components/home/Main';

function App() {
  const comp = 3
  let component = null
  switch (comp) {
    case 1:
      component = <Login />
      break;
    case 2:
      component = <Register />
      break;
    case 3:
      component = <Main />
      break;
    
  }
  return (
      <Container fluid className={"d-flex flex-wrap"}>
        {component}
      </Container>
  );
}

export default App;
