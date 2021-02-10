import { Form, Button, Alert } from 'react-bootstrap';

const Content = (props) => {
    return (
    <div className={"text-center"} style={{ width: '70%', borderRadius: 0, height: '35em', background: 'white', color: 'black' }} body>
        <div className="content">
            <a href="/" style={{textDecoration: 'none'}}><h5>Hola Juan</h5></a>
            <a href="/">Cerrar sesión</a>
        </div>
        <div className="contentBody">
            <div style={{ width: '70%', margin: '0px auto' }} >
            <Form className="mt-3" >
                <Form.Control type="text" placeholder="Nombre Tarea" className="mb-2" />
                <Button variant="dark" className="mb-4" block>Agregar Tarea</Button>
            </Form>
            </div>
        </div>
        <div>
            <div>
                <h4 style={{marginTop: '10px'}}>Selecciona Proyecto</h4>
                <Alert variant="info" style={{width:'50%', display: 'inline-block', textAlign: 'center', marginTop: '10px'}}>
                    No hay tareas
                </Alert>
                <div className="text-left pl-2">
                    <Button variant="danger"  >Eliminar Proyecto</Button>
                </div>
            </div>
            <div className="" style={{ height: '300px', overflow: 'auto'}}>
                <Alert variant="info" className="m-2">
                    <div className="d-flex flex-row justify-content-between flex-wrap">
                        <div>Configurar Mongo Db Alias</div>
                        <div>
                            <Button variant="light" outline className="mr-1" >Incompleto</Button>
                            <Button variant="dark" className="mr-1" >Editar</Button>
                            <Button variant="danger"  >Eliminar</Button>
                        </div>
                    </div>
                </Alert>
                <Alert variant="info" className="m-2">
                    <div className="d-flex flex-row justify-content-between flex-wrap">
                        <div>Configurar Mongo Db Alias</div>
                        <div>
                            <Button variant="light" outline className="mr-1" >Incompleto</Button>
                            <Button variant="dark" className="mr-1" >Editar</Button>
                            <Button variant="danger"  >Eliminar</Button>
                        </div>
                    </div>
                </Alert>
                <Alert variant="info" className="m-2">
                    <div className="d-flex flex-row justify-content-between flex-wrap">
                        <div>Configurar Mongo Db Alias</div>
                        <div>
                            <Button variant="light" outline className="mr-1" >Incompleto</Button>
                            <Button variant="dark" className="mr-1" >Editar</Button>
                            <Button variant="danger"  >Eliminar</Button>
                        </div>
                    </div>
                </Alert>
                <Alert variant="info" className="m-2">
                    <div className="d-flex flex-row justify-content-between flex-wrap">
                        <div>Configurar Mongo Db Alias</div>
                        <div>
                            <Button variant="light" outline className="mr-1" >Incompleto</Button>
                            <Button variant="dark" className="mr-1" >Editar</Button>
                            <Button variant="danger"  >Eliminar</Button>
                        </div>
                    </div>
                </Alert>
            </div>
        </div>
    </div>
    );
}

export default Content