import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import projectContext from '../../../contexts/projects/projectContext'
import { v4 as uuid } from 'uuid'
export default () => {
  const { showForm, changeAlertAddProject, addProject } = useContext(projectContext)

    const [project, setProject] = useState(null)

    const onChange = (e) => {
      setProject(e.target.value)
    }

    const addCurrentProject = (e) => {
      e.preventDefault();
      if (!project) {
        changeAlertAddProject(true)
        return;
      }

      changeAlertAddProject(false)
      showForm(false)
      addProject({id: uuid(), name: project});
    }
    return (
        <Form>
          Project: {project}
          <Form.Control onChange={onChange} value={project} type="text" placeholder="Nombre Proyecto" className="mb-2" />
          <Button variant="dark" className="mb-4" onClick={addCurrentProject} block>Agregar Proyecto</Button>
        </Form>
    );
}