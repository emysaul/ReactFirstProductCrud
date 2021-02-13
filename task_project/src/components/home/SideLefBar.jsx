import { useContext } from 'react'
import { Alert, Button } from 'react-bootstrap';
import AddProject from '../others/sideBarComponents/AddProject';
import Projects from '../others/sideBarComponents/Projects';
import projectContext from '../../contexts/projects/projectContext'

const SideLefBar = (props) => {

    const { form, showForm, alertAddProject } = useContext(projectContext)
    
    return (
      <div className="sideBar">
        <h3>DSoftware<span className="sideBarSubTitle">Company</span></h3>
        <Button  variant="dark" className="mt-4" onClick={() => showForm(true)} block className="newProject">Nuevo Proyecto</Button>
        { form ? (<AddProject/>) : null}
        { alertAddProject ? (<Alert variant="danger">El nombre del proyecto es obligatorio</Alert>) : null }
        <Projects/>
      </div>
    );
}

export default SideLefBar