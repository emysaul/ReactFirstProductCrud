import { Fragment } from 'react';
import { Alert, Form, Card, Button } from 'react-bootstrap';

const SideLefBar = (props) => {
    return (
      <div className={"text-center"} style={{ width: '30%', height: '35em', padding: '10px', background: 'white' }} body>
        <h3>DSoftware <span style={{fontWeight: 'bold'}}>Company</span></h3>
        <Button variant="dark" className="mt-4" block>Nuevo Proyecto</Button>
        <Form className="mt-5">
          <Form.Control type="text" placeholder="Nombre Proyecto" className="mb-2" />
          <Button variant="dark" className="mb-4" block>Agregar Proyecto</Button>
        </Form>
        <Alert variant="danger">
          El nombre del proyecto es obligatorio
        </Alert>
        <h4>Tus Proyectos</h4>
        <p>No hay proyectos, comienza creando uno</p>
        <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '20px', height: '100px', overflow: 'auto'}}>
          <li>Proyecto Mern</li>
          <li>Proyecto en Laravel</li>
          <li>Proyecto en Laravel</li>
          <li>Proyecto en Laravel</li>
        </ul>
      </div>
    );
}

export default SideLefBar