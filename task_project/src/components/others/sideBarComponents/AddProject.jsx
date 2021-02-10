import { Form, Button } from 'react-bootstrap';

export default ({onAddProject}) => {
    return (
        <Form>
          <Form.Control type="text" placeholder="Nombre Proyecto" className="mb-2" />
          <Button variant="dark" className="mb-4" onClick={onAddProject} block>Agregar Proyecto</Button>
        </Form>
    );
}