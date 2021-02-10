import { Alert } from 'react-bootstrap';
export default (props) => {
    return (
       <div className="emptyProject">
            <h5>Selecciona un Proyecto</h5>
            <Alert variant="info">
                No hay tareas
            </Alert>
       </div>
    );
}