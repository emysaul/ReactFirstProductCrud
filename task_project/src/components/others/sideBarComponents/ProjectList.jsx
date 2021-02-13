import { useContext } from 'react'
import projectContext from '../../../contexts/projects/projectContext'

export default () => {
    const { projects } = useContext(projectContext)
    const liProjects = projects.map((x) => <li key={x.id}>{x.name}</li>)
    return (
        <>
          <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '20px', height: '100px', overflow: 'auto'}}>
            {liProjects}
          </ul>
      </>
    );
}