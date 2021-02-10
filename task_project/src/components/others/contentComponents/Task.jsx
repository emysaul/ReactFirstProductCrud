import { Alert, Button } from 'react-bootstrap'
export default ({title, onChangeStatus, onEdit, onDelete}) => {
    return (
            <Alert variant="info">
                <div className="d-flex flex-row justify-content-between flex-wrap">
                    <div>{title}</div>
                    <div>
                        <Button variant="light" outline className="mr-1" onClick={onChangeStatus}>Incompleto</Button>
                        <Button variant="dark" className="mr-1" onClick={onEdit}>Editar</Button>
                        <Button variant="danger" onClick={onDelete} >Eliminar</Button>
                    </div>
                </div>
            </Alert>
    );
}