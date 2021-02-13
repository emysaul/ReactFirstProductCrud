import { useContext } from 'react'
import ProjectList from "./ProjectList"
import projectContext from '../../../contexts/projects/projectContext'

export default () => {

  const { projects } = useContext(projectContext)
    return (
      <div className="projects">
        <h4>Tus Proyectos</h4>
        {
          projects.length === 0 ? (<p>No hay proyectos, comienza creando uno</p>) : null
        }
        <ProjectList/>
      </div>
    );
}