import { Alert, Button } from 'react-bootstrap';
import AddProject from '../others/sideBarComponents/AddProject';
import Projects from '../others/sideBarComponents/Projects';

const SideLefBar = (props) => {
    return (
      <div className="sideBar">
        <h3>DSoftware<span className="sideBarSubTitle">Company</span></h3>
        <Button  variant="dark" className="mt-4" block className="newProject">Nuevo Proyecto</Button>
        <AddProject/>
        <Alert variant="danger">El nombre del proyecto es obligatorio</Alert>
        <Projects/>
      </div>
    );
}

export default SideLefBar