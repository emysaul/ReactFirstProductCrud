import { Form, Button } from 'react-bootstrap';

export default ({onAddTask}) => {
    return (
        <Form>
            <Form.Control type="text" placeholder="Nombre Tarea" className="mb-2" />
            <Button variant="dark" onClick={onAddTask} block>Agregar Tarea</Button>
        </Form>
    );
}